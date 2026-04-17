<script setup>
import { useI18n } from '@/composables/useI18n'
import { computed, onMounted, onUnmounted, ref, watch } from 'vue'

const { t } = useI18n()

const PLAYLIST_ID = 'PL6E1iPJrFf0NPhk4D7ohTw2_yMmRG9goH'
const MAX_VIDEOS = 12

const CORS_PROXIES = [
  'https://api.allorigins.win/raw?url=',
  'https://corsproxy.io/?',
  'https://api.codetabs.com/v1/proxy?quest=',
]

const playlistVideos = ref([])
const currentIndex = ref(0)
const loading = ref(true)
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

const getThumbnailUrl = (videoId) => `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`

function parseVideos(entries) {
  return Array.from(entries)
    .slice(0, MAX_VIDEOS)
    .map((entry) => {
      const id = entry.querySelector('yt\\:videoId, videoId')?.textContent
      const title = entry.querySelector('title')?.textContent
      return id && title ? { id, title, thumbnail: getThumbnailUrl(id) } : null
    })
    .filter(Boolean)
}

function loadFallbackVideos() {
  playlistVideos.value = [
    { id: 'Ml0e7RQDI-M', title: 'Um jogo sobre Redencao.......' },
    { id: 'ZMThOw1ItTk', title: 'Qual e o SEU Tipo de Amor? (As 5 Linguagens Do Amor)' },
    { id: 'aMDvPpkbHxg', title: 'A Historia do HOLLOW KNIGHT em 15 minutos' },
  ].map((v) => ({ ...v, thumbnail: getThumbnailUrl(v.id) }))
  error.value = null
}

async function fetchPlaylistVideos() {
  loading.value = true
  error.value = null

  const rssUrl = `https://www.youtube.com/feeds/videos.xml?playlist_id=${PLAYLIST_ID}`

  for (const proxy of CORS_PROXIES) {
    try {
      const response = await fetch(proxy + encodeURIComponent(rssUrl), {
        signal: AbortSignal.timeout(5000),
      })

      if (!response.ok) continue

      const xmlDoc = new DOMParser().parseFromString(await response.text(), 'text/xml')
      if (xmlDoc.querySelector('parsererror')) continue

      const videos = parseVideos(xmlDoc.querySelectorAll('entry'))
      if (videos.length > 0) {
        playlistVideos.value = videos
        loading.value = false
        return
      }
    } catch (err) {
      console.warn(`Proxy ${proxy} falhou:`, err.message)
    }
  }

  console.error('Todos os proxies falharam, usando videos de fallback')
  loadFallbackVideos()
  loading.value = false
}

const nextVideo = () => {
  if (!totalVideos.value) return
  currentIndex.value = (currentIndex.value + 1) % totalVideos.value
}

const prevVideo = () => {
  if (!totalVideos.value) return
  currentIndex.value = currentIndex.value === 0 ? totalVideos.value - 1 : currentIndex.value - 1
}

const goToVideo = (index) => {
  currentIndex.value = index
}

const openPlayerModal = (video) => {
  isPaused.value = true
  selectedVideo.value = video
  playerModalVisible.value = true
}

const stopVideo = () => {
  selectedVideo.value = null
}

const closePlayerModal = () => {
  stopVideo()
  isPaused.value = false
  playerModalVisible.value = false
}

const handleImageError = (event, videoId) => {
  event.target.src = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`
}

const startAutoPlay = () => {
  if (autoPlayTimer) clearInterval(autoPlayTimer)
  if (totalVideos.value <= 1) return

  autoPlayTimer = setInterval(() => {
    if (!playerModalVisible.value && !isPaused.value) {
      nextVideo()
    }
  }, 6500)
}

const stopAutoPlay = () => {
  if (!autoPlayTimer) return
  clearInterval(autoPlayTimer)
  autoPlayTimer = null
}

const pauseSlider = () => {
  isPaused.value = true
}

const resumeSlider = () => {
  isPaused.value = false
}

onMounted(() => {
  fetchPlaylistVideos()
})

onUnmounted(() => {
  stopAutoPlay()
})

watch(totalVideos, (count) => {
  if (count > 1) startAutoPlay()
})
</script>

<template>
  <section class="w-full py-16 md:py-24 relative overflow-visible">
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

      <div v-if="loading" class="flex justify-center items-center py-32">
        <div class="flex flex-col items-center gap-3 text-fg-muted tracking-wide">
          <div class="relative w-4 h-4">
            <div class="absolute inset-0 rounded-full bg-editor/35 animate-ping"></div>
            <div class="relative w-4 h-4 rounded-full bg-editor"></div>
          </div>
          <p>{{ t('loading') }}</p>
        </div>
      </div>

      <div v-else-if="error" class="text-center py-20">
        <i class="pi pi-exclamation-triangle text-5xl text-editor mb-4"></i>
        <p class="text-gray-400 text-lg">{{ error }}</p>
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
                class="relative aspect-video cursor-pointer"
                @click="openPlayerModal(currentVideo)"
              >
                <img
                  :src="currentVideo.thumbnail"
                  :alt="currentVideo.title"
                  class="w-full h-full object-cover"
                  @error="handleImageError($event, currentVideo.id)"
                />

                <div
                  class="absolute inset-0 bg-black/28 group-hover:bg-black/50 transition-colors duration-300"
                ></div>

                <div class="absolute inset-0 flex items-center justify-center">
                  <div
                    class="w-20 h-20 md:w-28 md:h-28 rounded-full bg-editor/90 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-xl shadow-editor/35"
                  >
                    <svg
                      class="w-10 h-10 md:w-14 md:h-14 text-white ml-1 md:ml-2"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>

                <div
                  class="absolute top-4 left-4 px-4 py-2 rounded-full bg-editor text-white text-sm font-bold"
                >
                  {{ currentIndex + 1 }} / {{ playlistVideos.length }}
                </div>

                <div
                  class="absolute top-4 right-4 px-3 py-2 rounded-full bg-red-600 text-white text-sm font-bold flex items-center gap-2"
                >
                  <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path
                      d="M23.498 6.186a2.994 2.994 0 0 0-2.107-2.117C19.228 3.5 12 3.5 12 3.5s-7.228 0-9.391.569A2.994 2.994 0 0 0 .502 6.186C0 8.36 0 12 0 12s0 3.64.502 5.814a2.994 2.994 0 0 0 2.107 2.117C4.772 20.5 12 20.5 12 20.5s7.228 0 9.391-.569a2.994 2.994 0 0 0 2.107-2.117C24 15.64 24 12 24 12s0-3.64-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
                    />
                  </svg>
                  YouTube
                </div>
              </div>
            </transition>

            <div class="p-6 md:p-8">
              <h3 class="text-xl md:text-2xl font-bold text-fg mb-3 text-balance tracking-wide">
                {{ currentVideo.title }}
              </h3>

              <div class="w-full h-1.5 rounded-full bg-white/5 mb-6 overflow-hidden">
                <div
                  class="h-full bg-linear-to-r from-editor/70 to-editor transition-all duration-500"
                  :style="{ width: `${progressPercent}%` }"
                ></div>
              </div>

              <div class="flex items-center justify-between gap-4">
                <button
                  v-motion
                  class="flex items-center gap-2 px-5 py-3 rounded-full border border-border shadow-sm ring-1 ring-inset ring-white/5 text-fg font-medium transition-opacity duration-300 cursor-pointer"
                  :hovered="{ opacity: 0.8 }"
                  :tapped="{ opacity: 0.6 }"
                  @click="prevVideo"
                >
                  <i class="pi pi-chevron-left text-lg"></i>
                  <span class="hidden sm:inline">{{ t('editorPlaylist.previous') }}</span>
                </button>

                <button
                  v-motion
                  class="flex-1 max-w-xs flex items-center justify-center gap-3 px-6 py-4 rounded-full bg-editor text-white font-bold text-lg transition-opacity duration-300 cursor-pointer shadow-sm ring-1 ring-inset ring-white/20"
                  :hovered="{ opacity: 0.8 }"
                  :tapped="{ opacity: 0.6 }"
                  @click="openPlayerModal(currentVideo)"
                >
                  <i class="pi pi-play-circle text-xl"></i>
                  <span>{{ t('editorPlaylist.watch') }}</span>
                </button>

                <button
                  v-motion
                  class="flex items-center gap-2 px-5 py-3 rounded-full border border-border shadow-sm ring-1 ring-inset ring-white/5 text-fg font-medium transition-opacity duration-300 cursor-pointer"
                  :hovered="{ opacity: 0.8 }"
                  :tapped="{ opacity: 0.6 }"
                  @click="nextVideo"
                >
                  <span class="hidden sm:inline">{{ t('editorPlaylist.next') }}</span>
                  <i class="pi pi-chevron-right text-lg"></i>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="flex justify-center gap-2 mt-8">
          <button
            v-for="(video, index) in playlistVideos"
            :key="video.id"
            v-motion
            class="transition-opacity duration-300 cursor-pointer"
            :hovered="{ opacity: 0.8 }"
            :tapped="{ opacity: 0.6 }"
            :class="
              index === currentIndex
                ? 'w-10 h-3 rounded-full bg-editor'
                : 'w-3 h-3 rounded-full border border-border shadow-sm ring-1 ring-inset ring-white/5'
            "
            @click="goToVideo(index)"
          ></button>
        </div>

        <div class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2.5 mt-8">
          <button
            v-for="(video, index) in playlistVideos.slice(0, 6)"
            :key="`thumb-${video.id}`"
            class="relative overflow-hidden rounded-xl border border-border shadow-sm ring-1 ring-inset ring-white/5 cursor-pointer group"
            :class="index === currentIndex ? 'ring-editor/50 border-editor/40' : ''"
            @click="goToVideo(index)"
          >
            <img
              :src="video.thumbnail"
              :alt="video.title"
              class="w-full h-16 object-cover transition-transform duration-300 group-hover:scale-105"
              @error="handleImageError($event, video.id)"
            />
            <div
              class="absolute inset-0 bg-black/20 group-hover:bg-black/35 transition-colors duration-300"
            ></div>
          </button>
        </div>

        <div class="text-center mt-10">
          <a
            :href="playlistUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 text-fg-muted hover:opacity-80 transition-opacity duration-300"
          >
            <span>{{ t('editorPlaylist.fullPlaylist') }}</span>
            <i class="pi pi-external-link"></i>
          </a>
        </div>
      </div>
    </div>

    <transition name="modal-fade">
      <div
        v-if="playerModalVisible"
        class="fixed inset-0 z-100 flex items-center justify-center p-4"
      >
        <div
          class="absolute inset-0 bg-gray-950/80 backdrop-blur-sm"
          @click="closePlayerModal"
        ></div>

        <div
          class="relative w-full max-w-6xl border border-border rounded-2xl overflow-hidden shadow-sm ring-1 ring-inset ring-white/5 flex flex-col z-10 mx-auto bg-surface-100"
        >
          <div
            class="flex items-center justify-between px-6 py-4 border-b border-border bg-transparent"
          >
            <h3 class="text-fg text-lg font-bold text-balance">
              {{ selectedVideo?.title || 'Player' }}
            </h3>
            <button
              class="text-fg-muted hover:opacity-80 transition-opacity cursor-pointer p-2"
              @click="closePlayerModal"
            >
              <i class="pi pi-times"></i>
            </button>
          </div>

          <div class="w-full bg-black p-0 aspect-video">
            <iframe
              v-if="selectedVideo"
              :src="`https://www.youtube.com/embed/${selectedVideo.id}?autoplay=1&rel=0&modestbranding=1`"
              class="w-full h-full"
              frameborder="0"
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
              title="YouTube Video Player"
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
</style>
