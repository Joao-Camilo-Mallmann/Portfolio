// Fonte única dos trabalhos de edição (landing /editor e galeria /editor/projetos)
// duration em segundos, ano e canal vêm da página pública de cada vídeo no YouTube

export const PLAYLIST_URL =
  'https://www.youtube.com/playlist?list=PL6E1iPJrFf0NPhk4D7ohTw2_yMmRG9goH'

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

// own: canal do próprio João
// showcase: ganha aba própria na seção "Canais" da landing
export const channels = {
  ofurry: {
    key: 'ofurry',
    name: 'OFurry Investidor',
    handle: '@OFurryOficial',
    url: 'https://www.youtube.com/@OFurryOficial',
    avatar: '/img/channel-ofurry.webp',
    own: true,
    showcase: true,
  },
  alves: {
    key: 'alves',
    name: 'Alves',
    handle: '@Alves-d08',
    url: 'https://www.youtube.com/@Alves-d08',
    avatar: '/img/channel-alves.webp',
    own: false,
    showcase: true,
  },
  tutor: {
    key: 'tutor',
    name: 'Tutor Incógnito',
    own: false,
  },
}

// format: 'long' (vídeo 16:9) | 'short' (vertical 9:16)
// thumb: thumbnail criada pelo João (entra no mural de thumbnails)
export const editorProjects = [
  // OFurry Investidor
  {
    youtubeId: 'UptGuUMaYMs',
    title: 'VOCÊ tem até 2030, antes de se arrepender...',
    channel: 'ofurry',
    format: 'long',
    thumb: true,
    duration: 517,
    year: 2025,
    featured: true,
  },
  {
    youtubeId: 'h9FdiKXLKCE',
    title: 'Você Está Ignorando o Aviso do Criador da IA?',
    channel: 'ofurry',
    format: 'long',
    thumb: true,
    duration: 568,
    year: 2026,
    featured: true,
  },
  {
    youtubeId: 'EsDjvUCQhRU',
    title: 'O COE É A Maior M#rD4',
    channel: 'ofurry',
    format: 'long',
    thumb: true,
    duration: 676,
    year: 2026,
  },
  {
    youtubeId: 'daq35jIn-mg',
    title: 'A Janela do Bitcoin Está se Fechando',
    channel: 'ofurry',
    format: 'long',
    thumb: true,
    duration: 705,
    year: 2026,
  },
  {
    youtubeId: 'sfba7_eredc',
    title: 'Como INVESTIR MELHOR que 90% das pessoas!!',
    channel: 'ofurry',
    format: 'long',
    thumb: true,
    duration: 656,
    year: 2026,
  },
  {
    youtubeId: 'Zbs_wV3k8zo',
    title: '3 MELHORES Investimentos e (3 BOMBAS 💣)',
    channel: 'ofurry',
    format: 'long',
    thumb: true,
    duration: 658,
    year: 2025,
  },
  {
    youtubeId: 'C8VGMvum854',
    title: 'Esse deve ser o seu primeiro investimento',
    channel: 'ofurry',
    format: 'long',
    thumb: true,
    duration: 499,
    year: 2025,
  },
  {
    youtubeId: 's7bjysMoHYQ',
    title: 'Você Ama… Mas Talvez Na Linguagem Errada',
    channel: 'ofurry',
    format: 'long',
    thumb: true,
    duration: 453,
    year: 2025,
  },
  {
    youtubeId: 'q2kZZujRofs',
    title: 'Por que Você Já Tem TUDO para Ser Feliz',
    channel: 'ofurry',
    format: 'long',
    thumb: true,
    duration: 284,
    year: 2024,
  },

  // Alves
  {
    youtubeId: 'YVjG6wA-zz4',
    title: 'Um jogo sobre Redenção.......',
    channel: 'alves',
    format: 'long',
    duration: 646,
    year: 2025,
    featured: true,
  },
  {
    youtubeId: 'jhuB7rwE3U8',
    title: 'Obsessão.....',
    channel: 'alves',
    format: 'long',
    duration: 388,
    year: 2025,
  },
  {
    youtubeId: 'X4gyL4ccbgE',
    title: 'Carta Aberta: "Aquele que ficou"',
    channel: 'alves',
    format: 'long',
    duration: 348,
    year: 2024,
  },
  {
    youtubeId: '17csXimKSzA',
    title: 'O Studio Ghibli é Poético....',
    channel: 'alves',
    format: 'long',
    duration: 397,
    year: 2024,
  },
  {
    youtubeId: '_GMvwzjEBD4',
    title: 'Poesia...',
    channel: 'alves',
    format: 'long',
    duration: 320,
    year: 2024,
  },
  {
    youtubeId: 'skXFasWEC6o',
    title: 'Os esportes são justos?',
    channel: 'alves',
    format: 'long',
    duration: 278,
    year: 2024,
  },

  // Tutor Incógnito
  {
    youtubeId: 'Gt92_iQ1D_0',
    title: 'Dicas de PROFISSIONAIS Para Superar a Procrastinação',
    channel: 'tutor',
    format: 'long',
    duration: 349,
    year: 2025,
    featured: true,
  },
]

export const featuredProjects = editorProjects.filter((project) => project.featured)

export const thumbProjects = editorProjects.filter((project) => project.thumb)

export const projectsByChannel = (channelKey) =>
  editorProjects.filter((project) => project.channel === channelKey)

// Canais na ordem de exibição: próprios primeiro, depois clientes
export const channelOrder = ['ofurry', 'alves', 'tutor']

export const showcaseChannels = channelOrder
  .map((key) => channels[key])
  .filter((channel) => channel.showcase)
