// Sincroniza os trabalhos de edição direto das playlists públicas do YouTube.
// Roda antes de todo build (prebuild) e grava src/data/youtube.generated.json.
// Se o YouTube falhar, mantém o JSON anterior para o build nunca quebrar.
//
//   node scripts/sync-youtube.mjs

import { readFile, writeFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'

export const PLAYLISTS = {
  videos: 'PL6E1iPJrFf0NPhk4D7ohTw2_yMmRG9goH',
  thumbs: 'PL6E1iPJrFf0OH6aNYQcwwX37qaVCbqK6L',
}

const OUTPUT = fileURLToPath(new URL('../src/data/youtube.generated.json', import.meta.url))

const HEADERS = {
  'Accept-Language': 'pt-BR,pt;q=0.9',
  'User-Agent':
    'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0 Safari/537.36',
  // Evita a tela de consentimento de cookies (comum em runners na Europa)
  Cookie: 'CONSENT=YES+1; SOCS=CAI',
}

async function fetchText(url, init = {}) {
  const response = await fetch(url, { headers: HEADERS, ...init })
  if (!response.ok) throw new Error(`${response.status} ao buscar ${url}`)
  return response.text()
}

function extractJson(html, variable) {
  const start = html.indexOf(`${variable} = {`)
  if (start === -1) throw new Error(`${variable} não encontrado`)
  const from = html.indexOf('{', start)
  // Varre chaves respeitando strings para achar o fim do objeto
  let depth = 0
  let inString = false
  for (let i = from; i < html.length; i++) {
    const char = html[i]
    if (inString) {
      if (char === '\\') i++
      else if (char === '"') inString = false
    } else if (char === '"') inString = true
    else if (char === '{') depth++
    else if (char === '}' && --depth === 0) return JSON.parse(html.slice(from, i + 1))
  }
  throw new Error(`${variable} incompleto`)
}

/** IDs dos vídeos na ordem da playlist */
async function fetchPlaylistIds(playlistId) {
  const html = await fetchText(`https://www.youtube.com/playlist?list=${playlistId}&hl=pt-BR`)
  const data = extractJson(html, 'ytInitialData')
  const contents = JSON.stringify(data.contents?.twoColumnBrowseResultsRenderer ?? {})
  const ids = [...contents.matchAll(/"(?:videoId|contentId)":"([\w-]{11})"/g)].map((m) => m[1])
  const unique = [...new Set(ids)]
  if (unique.length === 0) throw new Error(`playlist ${playlistId} veio vazia`)
  return unique
}

/** Shorts respondem 200 em /shorts/ID; vídeos normais redirecionam para /watch */
async function isShort(videoId) {
  const response = await fetch(`https://www.youtube.com/shorts/${videoId}`, {
    headers: HEADERS,
    method: 'HEAD',
    redirect: 'manual',
  })
  return response.status === 200
}

async function fetchVideo(videoId) {
  const html = await fetchText(`https://www.youtube.com/watch?v=${videoId}&hl=pt-BR`)
  const player = extractJson(html, 'ytInitialPlayerResponse')
  const details = player.videoDetails
  const micro = player.microformat?.playerMicroformatRenderer ?? {}
  if (!details) throw new Error(`vídeo ${videoId} indisponível`)

  const date = micro.publishDate || micro.uploadDate || ''
  const handle = micro.ownerProfileUrl?.match(/@[^/?]+/)?.[0]

  return {
    youtubeId: videoId,
    title: details.title,
    duration: Number(details.lengthSeconds) || 0,
    year: Number(date.slice(0, 4)) || null,
    publishedAt: date || null,
    format: (await isShort(videoId)) ? 'short' : 'long',
    channel: {
      id: details.channelId,
      name: details.author,
      handle: handle ? decodeURIComponent(handle) : null,
    },
  }
}

async function sync() {
  const [videoIds, thumbIds] = await Promise.all([
    fetchPlaylistIds(PLAYLISTS.videos),
    fetchPlaylistIds(PLAYLISTS.thumbs),
  ])
  const allIds = [...new Set([...videoIds, ...thumbIds])]

  const results = await Promise.allSettled(allIds.map(fetchVideo))
  const videos = {}
  results.forEach((result, index) => {
    if (result.status === 'fulfilled') videos[allIds[index]] = result.value
    else console.warn(`[sync-youtube] ignorando ${allIds[index]}: ${result.reason.message}`)
  })

  return {
    syncedAt: new Date().toISOString(),
    playlists: PLAYLISTS,
    videos: videoIds.filter((id) => videos[id]).map((id) => videos[id]),
    thumbs: thumbIds.filter((id) => videos[id]).map((id) => videos[id]),
  }
}

try {
  const data = await sync()
  await writeFile(OUTPUT, `${JSON.stringify(data, null, 2)}\n`)
  console.log(
    `[sync-youtube] ${data.videos.length} vídeos e ${data.thumbs.length} thumbs sincronizados`,
  )
} catch (error) {
  // Sem rede ou YouTube mudou o HTML: segue com o último JSON commitado
  const previous = await readFile(OUTPUT, 'utf8').catch(() => null)
  if (!previous) throw error
  console.warn(`[sync-youtube] falhou (${error.message}); usando dados anteriores`)
}
