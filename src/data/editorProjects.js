// Fonte única dos trabalhos de edição (landing /editor e galeria /editor/projetos)
import youtube from './youtube.generated.json'

export const PLAYLIST_URL = `https://www.youtube.com/playlist?list=${youtube.playlists.videos}`

/**
 * Thumbnail do vídeo: vertical (9:16) para Shorts, 16:9 para vídeos longos
 * @param {{ youtubeId: string, format?: string }} project
 */
export const getThumbnailUrl = ({ youtubeId, format }) =>
  format === 'short'
    ? `https://i.ytimg.com/vi/${youtubeId}/oardefault.jpg`
    : `https://i.ytimg.com/vi/${youtubeId}/maxresdefault.jpg`

export const getFallbackThumbnailUrl = ({ youtubeId }) =>
  `https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg`

/**
 * Converte segundos em timecode de timeline (HH:MM:SS:FF a 30 fps)
 * @param {number} seconds
 * @param {number} [frames]
 * @returns {string}
 */
export function toTimecode(seconds, frames = 0) {
  const pad = (n) => String(Math.floor(n)).padStart(2, '0')
  const h = seconds / 3600
  const m = (seconds % 3600) / 60
  const s = seconds % 60
  return `${pad(h)}:${pad(m)}:${pad(s)}:${pad(frames)}`
}

// Vídeos e thumbnails vêm das playlists do YouTube (scripts/sync-youtube.mjs,
// roda em todo build). Para mudar o site, basta editar as playlists.
//   Vídeos editados: PLAYLIST_URL
//   Thumbnails:      THUMBS_PLAYLIST_URL

export const THUMBS_PLAYLIST_URL = `https://www.youtube.com/playlist?list=${youtube.playlists.thumbs}`

// Configuração visual dos canais conhecidos (chave = channelId do YouTube)
// own: canal do próprio João
// showcase: ganha aba própria na seção "Canais" da landing
const knownChannels = {
  UCoxVHHWapsMhjOZGSRIUCcQ: {
    key: 'ofurry',
    avatar: '/img/channel-ofurry.webp',
    own: true,
    showcase: true,
  },
  'UCoOhr-Ed1xRt1uWq8mrm8sA': {
    key: 'alves',
    avatar: '/img/channel-alves.webp',
    own: false,
    showcase: true,
  },
  UCGzwBw0TKrErr4iA2o5C3mQ: {
    key: 'tutor',
    own: false,
  },
}

// Destaques da landing; se nenhum estiver nas playlists, usa o 1º vídeo de cada canal
const FEATURED_IDS = ['UptGuUMaYMs', 'h9FdiKXLKCE', 'YVjG6wA-zz4', 'Gt92_iQ1D_0']

const slugify = (text) =>
  text
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')

export const channels = {}
const channelKeyById = {}

for (const video of [...youtube.videos, ...youtube.thumbs]) {
  const { id, name, handle } = video.channel
  if (channelKeyById[id]) continue
  const known = knownChannels[id] ?? { key: slugify(handle ?? name), own: false }
  channelKeyById[id] = known.key
  channels[known.key] = {
    ...known,
    name,
    handle: handle ?? undefined,
    url: handle ? `https://www.youtube.com/${handle}` : `https://www.youtube.com/channel/${id}`,
  }
}

const thumbIds = new Set(youtube.thumbs.map((video) => video.youtubeId))

/** @param {typeof youtube.videos[number]} video */
const toProject = (video) => ({
  youtubeId: video.youtubeId,
  title: video.title,
  channel: channelKeyById[video.channel.id],
  format: video.format,
  thumb: thumbIds.has(video.youtubeId),
  duration: video.duration,
  year: video.year,
  featured: FEATURED_IDS.includes(video.youtubeId),
})

// format: 'long' (vídeo 16:9) | 'short' (vertical 9:16)
// thumb: thumbnail criada pelo João (está na playlist de thumbs)
export const editorProjects = youtube.videos.map(toProject)

// Mural de thumbnails segue a ordem da playlist de thumbs
export const thumbProjects = youtube.thumbs.map(toProject)

export const projectsByChannel = (channelKey) =>
  editorProjects.filter((project) => project.channel === channelKey)

// Canais fixos no topo, nesta ordem (Alves = canal do Matheus, referência principal)
const PINNED_CHANNELS = ['alves']

const pinRank = (key) => {
  const index = PINNED_CHANNELS.indexOf(key)
  return index === -1 ? PINNED_CHANNELS.length : index
}

// Canais na ordem de exibição: fixos, depois próprios, depois quem tem mais vídeos
export const channelOrder = Object.values(channels)
  .filter((channel) => projectsByChannel(channel.key).length > 0)
  .sort(
    (a, b) =>
      pinRank(a.key) - pinRank(b.key) ||
      Number(b.own) - Number(a.own) ||
      projectsByChannel(b.key).length - projectsByChannel(a.key).length,
  )
  .map((channel) => channel.key)

// Destaques seguem a ordem dos canais
const pickedFeatured = editorProjects.filter((project) => FEATURED_IDS.includes(project.youtubeId))

export const featuredProjects = (
  pickedFeatured.length
    ? pickedFeatured
    : Object.keys(channels)
        .map((key) => editorProjects.find((project) => project.channel === key))
        .filter(Boolean)
)
  .map((project) => ({ ...project, featured: true }))
  .sort((a, b) => channelOrder.indexOf(a.channel) - channelOrder.indexOf(b.channel))

export const showcaseChannels = channelOrder
  .map((key) => channels[key])
  .filter((channel) => channel.showcase)
