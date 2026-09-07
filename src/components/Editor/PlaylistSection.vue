<script setup>
import { useI18n } from '@/composables/useI18n'
import { computed, onMounted, onUnmounted, ref } from 'vue'

const { t } = useI18n()
const PLAYLIST_ID = 'PL6E1iPJrFf0NPhk4D7ohTw2_yMmRG9goH'
const MAX_VIDEOS = 12
const AUTO_PLAY_INTERVAL = 6500

const getThumbnailUrl = (videoId) => `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`
const getFallbackThumbnailUrl = (videoId) => `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`

const DEFAULT_PLAYLIST_VIDEOS = [
  { id: 'UptGuUMaYMs', title: 'VOCÊ tem até 2030, antes de se arrepender...' },
  { id: 'YVjG6wA-zz4', title: 'Um jogo sobre Redenção.......' },
  { id: 'h9FdiKXLKCE', title: 'Você Está Ignorando o Aviso do Criador da IA?' },
  { id: 'jhuB7rwE3U8', title: 'Obsessão.....' },
  { id: 'Gt92_iQ1D_0', title: 'Dicas de PROFISSIONAIS Para Superar a Procrastinação' },
  { id: 'C8VGMvum854', title: 'Esse deve ser o seu primeiro investimento' },
  { id: '17csXimKSzA', title: 'O Studio Ghibli é Poético....' },
  { id: 'X4gyL4ccbgE', title: 'Carta Aberta: "Aquele que ficou"' },
  { id: '_GMvwzjEBD4', title: 'Poesia...' },
  { id: 'skXFasWEC6o', title: 'Os esportes são justos?' },
].map((v) => ({ ...v, thumbnail: getThumbnailUrl(v.id) }))

const CORS_PROXIES = [
  (url) => `https://api.allorigins.win/raw?url=${encodeURIComponent(url)}`,
  (url) => `https://corsproxy.io/?url=${encodeURIComponent(url)}`,
  (url) => `https://api.codetabs.com/v1/proxy?quest=${encodeURIComponent(url)}`,
  (url) => `https://proxy.cors.sh/${url}`,
]

const playlistVideos = ref([...DEFAULT_PLAYLIST_VIDEOS])
const currentIndex = ref(0)
const loading = ref(false)
const error = ref(null)
const playerModalVisible = ref(false)
const selectedVideo = ref(null)
const isPaused = ref(false)

let autoPlayTimer = null

const currentVideo = computed(() => playlistVideos.value[currentIndex.value] ?? {})
const playlistUrl = computed(() => `https://www.youtube.com/playlist?list=${PLAYLIST_ID}`)
const totalVideos = computed(() => playlistVideos.value.length)
const progressPercent = computed(() => {
  if (totalVideos.value <= 1) return 100
  return ((currentIndex.value + 1) / totalVideos.value) * 100
})

function decodeHtmlEntities(str) {
  if (!str) return ''
  return str
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&#39;/g, "'")
    .replace(/&#x27;/gi, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&')
}

function parseVideosFromXml(xmlText) {
  const videos = []

  try {
    const xmlDoc = new DOMParser().parseFromString(xmlText, 'text/xml')
    const hasParserError = xmlDoc.querySelector('parsererror')

    if (!hasParserError) {
      const entries = xmlDoc.getElementsByTagName('entry')
      for (let i = 0; i < Math.min(entries.length, MAX_VIDEOS); i++) {
        const entry = entries[i]
        const videoIdEl =
          entry.getElementsByTagNameNS('*', 'videoId')[0] ||
          entry.getElementsByTagName('yt:videoId')[0] ||
          entry.getElementsByTagName('videoId')[0]
        const titleEl = entry.getElementsByTagName('title')[0]

        const id = videoIdEl?.textContent?.trim()
        const title = titleEl?.textContent?.trim()

        if (id && title) {
          videos.push({
            id,
            title: decodeHtmlEntities(title),
            thumbnail: getThumbnailUrl(id),
          })
        }
      }
    }
  } catch (err) {
    console.warn('DOMParser falhou, tentando fallback por regex:', err)
  }

  // Fallback para regex caso o parser XML não encontre os nós de namespace
  if (videos.length === 0) {
    const entries = xmlText.split(/<entry[\s>]/i).slice(1)
    for (const entry of entries.slice(0, MAX_VIDEOS)) {
      const idMatch =
        entry.match(/<yt:videoId>([^<]+)<\/yt:videoId>/i) ||
        entry.match(/<videoId>([^<]+)<\/videoId>/i)
      const titleMatch = entry.match(/<title[^>]*>([^<]+)<\/title>/i)

      const id = idMatch ? idMatch[1].trim() : null
      const rawTitle = titleMatch ? titleMatch[1].trim() : null

      if (id && rawTitle) {
        videos.push({
          id,
          title: decodeHtmlEntities(rawTitle),
          thumbnail: getThumbnailUrl(id),
        })
      }
    }
  }

  return videos
}

async function fetchPlaylistVideos() {
  const rssUrl = `https://www.youtube.com/feeds/videos.xml?playlist_id=${PLAYLIST_ID}`

  for (const buildProxyUrl of CORS_PROXIES) {
    try {
      const targetUrl = buildProxyUrl(rssUrl)
      const response = await fetch(targetUrl, {
        signal: AbortSignal.timeout(4000),
      })

      if (!response.ok) continue

      const xmlText = await response.text()
      if (!xmlText || !xmlText.includes('<entry')) continue

      const parsed = parseVideosFromXml(xmlText)
      if (parsed.length > 0) {
        playlistVideos.value = parsed
        return
      }
    } catch {
      // Tenta o próximo proxy silenciosamente
    }
  }
}

const restartAutoPlay = () => {
  stopAutoPlay()
  startAutoPlay()
}

const nextVideo = () => {
  if (!totalVideos.value) return
  currentIndex.value = (currentIndex.value + 1) % totalVideos.value
  restartAutoPlay()
}

const prevVideo = () => {
  if (!totalVideos.value) return
  currentIndex.value = currentIndex.value === 0 ? totalVideos.value - 1 : currentIndex.value - 1
  restartAutoPlay()
}

const goToVideo = (index) => {
  currentIndex.value = index
  restartAutoPlay()
}

const openPlayerModal = (video) => {
  if (!video?.id) return
  isPaused.value = true
  selectedVideo.value = video
  playerModalVisible.value = true
  if (typeof document !== 'undefined') {
    document.body.style.overflow = 'hidden'
  }
}

const closePlayerModal = () => {
  selectedVideo.value = null
  isPaused.value = false
  playerModalVisible.value = false
  if (typeof document !== 'undefined') {
    document.body.style.overflow = ''
  }
  restartAutoPlay()
}

const handleImageError = (event, videoId) => {
  if (event?.target) {
    event.target.src = getFallbackThumbnailUrl(videoId)
  }
}

const handleKeyDown = (event) => {
  if (playerModalVisible.value) {
    if (event.key === 'Escape') {
      closePlayerModal()
    }
    return
  }

  if (event.key === 'ArrowRight') {
    nextVideo()
  } else if (event.key === 'ArrowLeft') {
    prevVideo()
  }
}

const startAutoPlay = () => {
  if (autoPlayTimer) clearInterval(autoPlayTimer)
  if (totalVideos.value <= 1) return

  autoPlayTimer = setInterval(() => {
    if (!playerModalVisible.value && !isPaused.value) {
      nextVideo()
    }
  }, AUTO_PLAY_INTERVAL)
}

const stopAutoPlay = () => {
  if (autoPlayTimer) {
    clearInterval(autoPlayTimer)
    autoPlayTimer = null
  }
}

const pauseSlider = () => {
  isPaused.value = true
}

const resumeSlider = () => {
  isPaused.value = false
}

onMounted(() => {
  startAutoPlay()
  fetchPlaylistVideos()
  if (typeof window !== 'undefined') {
    window.addEventListener('keydown', handleKeyDown)
  }
})

onUnmounted(() => {
  stopAutoPlay()
  if (typeof window !== 'undefined') {
    window.removeEventListener('keydown', handleKeyDown)
    document.body.style.overflow = ''
  }
})
</script>

<template>
  <section class="w-full py-16 md:py-24 relative overflow-visible" aria-label="Playlist de Vídeos">
    <div class="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
      <div class="absolute -top-8 left-[10%] w-56 h-56 rounded-full bg-editor/8 blur-3xl"></div>
      <div class="absolute bottom-0 right-[12%] w-72 h-72 rounded-full bg-dev/6 blur-3xl"></div>
    </div>

    <div class="max-w-5xl mx-auto px-4 md:px-6 relative z-10">
      <div
        v-motion
        class="text-center mb-10"
        :initial="{ opacity: 0, y: 14 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 420, ease: [0.16, 1, 0.3, 1] } }"
      >
        <h2 class="text-3xl md:text-5xl font-black text-fg mb-4 text-balance tracking-wide">
          {{ t('editorPlaylist.myVideos') }}
          <span class="text-editor">{{ t('editorPlaylist.videosHighlight') }}</span>
        </h2>
        <p class="text-fg-muted text-lg text-pretty tracking-wide">
          {{ t('editorPlaylist.browseHighlights') }}
        </p>
      </div>

      <div
        v-if="loading && totalVideos === 0"
        class="playlist-skeleton"
        aria-busy="true"
        aria-label="Loading playlist"
      >
        <div
          class="rounded-2xl overflow-hidden ring-1 ring-inset ring-white/5 border border-border bg-surface-100"
        >
          <div class="relative aspect-video bg-white/3 overflow-hidden">
            <div class="skeleton-shimmer"></div>
          </div>
          <div class="p-6 md:p-8">
            <div class="mb-3 space-y-2">
              <div class="h-6 w-3/4 rounded-lg bg-white/4"></div>
            </div>
          </div>
        </div>
      </div>

      <div v-else-if="error && totalVideos === 0" class="text-center py-20">
        <i class="pi pi-exclamation-triangle text-5xl text-editor mb-4"></i>
        <p class="text-fg-muted text-lg">{{ error }}</p>
      </div>

      <div v-else>
        <div
          v-motion
          class="relative group"
          :initial="{ opacity: 0, y: 20 }"
          :enter="{
            opacity: 1,
            y: 0,
            transition: { delay: 120, duration: 450, ease: [0.16, 1, 0.3, 1] },
          }"
          @mouseenter="pauseSlider"
          @mouseleave="resumeSlider"
        >
          <div
            class="rounded-2xl overflow-hidden shadow-sm ring-1 ring-inset ring-white/5 border border-border bg-surface-100"
          >
            <transition name="fade-slide" mode="out-in">
              <div
                :key="currentVideo.id"
                class="relative aspect-video cursor-pointer select-none"
                role="button"
                :aria-label="`${t('editorPlaylist.watch')}: ${currentVideo.title}`"
                tabindex="0"
                @click="openPlayerModal(currentVideo)"
                @keydown.enter.space.prevent="openPlayerModal(currentVideo)"
              >
                <img
                  :src="currentVideo.thumbnail"
                  :alt="currentVideo.title"
                  class="w-full h-full object-cover"
                  loading="eager"
                  @error="handleImageError($event, currentVideo.id)"
                />

                <div
                  class="absolute inset-0 bg-black/28 group-hover:bg-black/50 transition-colors duration-300"
                ></div>

                <div class="absolute inset-0 flex items-center justify-center">
                  <div
                    class="w-20 h-20 md:w-28 md:h-28 rounded-full bg-editor/90 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 active:scale-95 transition-transform duration-300 shadow-xl shadow-editor/35 ring-1 ring-inset ring-white/20"
                  >
                    <svg
                      class="w-10 h-10 md:w-14 md:h-14 text-white ml-1 md:ml-2"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>

                <div
                  class="absolute top-4 left-4 px-4 py-1.5 rounded-full bg-editor text-white text-sm font-bold shadow-md tabular-nums tracking-wide"
                >
                  {{ currentIndex + 1 }} / {{ totalVideos }}
                </div>

                <div
                  class="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-red-600 text-white text-xs md:text-sm font-bold flex items-center gap-2 shadow-md"
                >
                  <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path
                      d="M23.498 6.186a2.994 2.994 0 0 0-2.107-2.117C19.228 3.5 12 3.5 12 3.5s-7.228 0-9.391.569A2.994 2.994 0 0 0 .502 6.186C0 8.36 0 12 0 12s0 3.64.502 5.814a2.994 2.994 0 0 0 2.107 2.117C4.772 20.5 12 20.5 12 20.5s7.228 0 9.391-.569a2.994 2.994 0 0 0 2.107-2.117C24 15.64 24 12 24 12s0-3.64-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
                    />
                  </svg>
                  YouTube
                </div>
              </div>
            </transition>

            <div class="p-6 md:p-8">
              <h3
                class="text-xl md:text-2xl font-bold text-fg mb-3 text-balance tracking-wide min-h-[3.5rem] flex items-center"
              >
                {{ currentVideo.title }}
              </h3>

              <div
                class="w-full h-1.5 rounded-full bg-white/5 mb-6 overflow-hidden"
                role="progressbar"
                :aria-valuenow="progressPercent"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div
                  class="h-full bg-linear-to-r from-editor/70 to-editor transition-all duration-500 rounded-full"
                  :style="{ width: `${progressPercent}%` }"
                ></div>
              </div>

              <div class="flex items-center justify-between gap-4">
                <button
                  type="button"
                  class="min-h-[44px] min-w-[44px] flex items-center gap-2 px-5 py-3 rounded-full border border-border shadow-sm ring-1 ring-inset ring-white/5 text-fg font-medium hover:opacity-80 active:scale-95 transition-all duration-200 cursor-pointer"
                  :aria-label="t('editorPlaylist.previous')"
                  @click="prevVideo"
                >
                  <i class="pi pi-chevron-left text-lg"></i>
                  <span class="hidden sm:inline">{{ t('editorPlaylist.previous') }}</span>
                </button>

                <button
                  type="button"
                  class="min-h-[48px] flex-1 max-w-xs flex items-center justify-center gap-3 px-6 py-3.5 rounded-full bg-editor text-white font-bold text-base md:text-lg hover:opacity-90 active:scale-95 transition-all duration-200 cursor-pointer shadow-sm ring-1 ring-inset ring-white/20"
                  :aria-label="t('editorPlaylist.watch')"
                  @click="openPlayerModal(currentVideo)"
                >
                  <i class="pi pi-play-circle text-xl"></i>
                  <span>{{ t('editorPlaylist.watch') }}</span>
                </button>

                <button
                  type="button"
                  class="min-h-[44px] min-w-[44px] flex items-center gap-2 px-5 py-3 rounded-full border border-border shadow-sm ring-1 ring-inset ring-white/5 text-fg font-medium hover:opacity-80 active:scale-95 transition-all duration-200 cursor-pointer"
                  :aria-label="t('editorPlaylist.next')"
                  @click="nextVideo"
                >
                  <span class="hidden sm:inline">{{ t('editorPlaylist.next') }}</span>
                  <i class="pi pi-chevron-right text-lg"></i>
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Dot indicators with minimum hit areas -->
        <div
          class="flex justify-center items-center gap-2 mt-8 flex-wrap"
          role="tablist"
          aria-label="Indicadores de Vídeos"
        >
          <button
            v-for="(video, index) in playlistVideos"
            :key="`dot-${video.id}`"
            type="button"
            role="tab"
            :aria-selected="index === currentIndex"
            :aria-label="`Vídeo ${index + 1}: ${video.title}`"
            class="min-h-[40px] min-w-[32px] flex items-center justify-center p-1.5 cursor-pointer group"
            @click="goToVideo(index)"
          >
            <span
              class="block transition-all duration-300 group-hover:opacity-80"
              :class="
                index === currentIndex
                  ? 'w-8 h-2.5 rounded-full bg-editor shadow-sm shadow-editor/40'
                  : 'w-2.5 h-2.5 rounded-full bg-white/20 group-hover:bg-white/40'
              "
            ></span>
          </button>
        </div>

        <!-- Thumbnail Strip displaying all videos -->
        <div class="mt-8">
          <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            <button
              v-for="(video, index) in playlistVideos.slice(0, 5)"
              :key="`thumb-${video.id}`"
              type="button"
              :aria-label="`Selecionar: ${video.title}`"
              class="relative overflow-hidden rounded-xl border border-border shadow-sm ring-1 ring-inset cursor-pointer group transition-all duration-200 active:scale-95 text-left focus:outline-none focus:ring-2 focus:ring-editor"
              :class="
                index === currentIndex
                  ? 'ring-2 ring-editor border-editor/70 opacity-100 shadow-md shadow-editor/20'
                  : 'ring-white/5 opacity-70 hover:opacity-100'
              "
              @click="goToVideo(index)"
            >
              <div class="aspect-video w-full overflow-hidden bg-black/40">
                <img
                  :src="video.thumbnail"
                  :alt="video.title"
                  class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                  @error="handleImageError($event, video.id)"
                />
              </div>
              <div
                class="absolute inset-0 bg-black/20 group-hover:bg-black/35 transition-colors duration-300"
              ></div>
              <div
                v-if="index === currentIndex"
                class="absolute bottom-1.5 right-1.5 px-2 py-0.5 rounded bg-editor text-white text-[10px] font-bold uppercase tracking-wider"
              >
                Ativo
              </div>
            </button>
          </div>
        </div>

        <div class="text-center mt-10">
          <a
            :href="playlistUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border shadow-sm ring-1 ring-inset ring-white/5 text-fg-muted hover:text-fg hover:border-editor/40 transition-all duration-300 group"
          >
            <span>{{ t('editorPlaylist.fullPlaylist') }}</span>
            <i
              class="pi pi-external-link text-sm transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            ></i>
          </a>
        </div>
      </div>
    </div>

    <!-- YouTube Video Modal -->
    <transition name="modal-fade">
      <div
        v-if="playerModalVisible"
        class="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6"
        role="dialog"
        aria-modal="true"
        :aria-label="selectedVideo?.title || 'Player de Vídeo'"
      >
        <div
          class="absolute inset-0 bg-black/80 backdrop-blur-md transition-opacity"
          @click="closePlayerModal"
        ></div>

        <div
          class="relative w-full max-w-5xl border border-border rounded-2xl overflow-hidden shadow-2xl ring-1 ring-inset ring-white/10 flex flex-col z-10 mx-auto bg-surface-100 animate-in fade-in zoom-in-95 duration-200"
        >
          <div
            class="flex items-center justify-between px-5 py-3.5 border-b border-border bg-surface-100/90 backdrop-blur-sm"
          >
            <h3 class="text-fg text-base md:text-lg font-bold text-balance line-clamp-1 pr-4">
              {{ selectedVideo?.title || 'Player' }}
            </h3>
            <button
              type="button"
              class="min-h-[40px] min-w-[40px] flex items-center justify-center text-fg-muted hover:text-fg hover:bg-white/5 rounded-full transition-all duration-200 cursor-pointer"
              aria-label="Fechar player"
              @click="closePlayerModal"
            >
              <i class="pi pi-times text-lg"></i>
            </button>
          </div>

          <div class="w-full bg-black aspect-video relative">
            <iframe
              v-if="selectedVideo"
              :src="`https://www.youtube-nocookie.com/embed/${selectedVideo.id}?autoplay=1&rel=0&modestbranding=1`"
              class="w-full h-full border-0"
              allow="
                accelerometer;
                autoplay;
                clipboard-write;
                encrypted-media;
                gyroscope;
                picture-in-picture;
                web-share;
              "
              allowfullscreen
              :title="selectedVideo.title"
            ></iframe>
          </div>
        </div>
      </div>
    </transition>
  </section>
</template>

<style scoped>
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition:
    opacity 0.35s ease,
    transform 0.35s ease;
}

.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.25s ease;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}

/* — Skeleton Loading — */
.playlist-skeleton {
  animation: skeleton-pulse 2s ease-in-out infinite;
}

.skeleton-shimmer {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(255, 255, 255, 0.04) 40%,
    rgba(255, 255, 255, 0.08) 50%,
    rgba(255, 255, 255, 0.04) 60%,
    transparent 100%
  );
  animation: shimmer-sweep 1.8s ease-in-out infinite;
}

@keyframes shimmer-sweep {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

@keyframes skeleton-pulse {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.7;
  }
}

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
</style>
