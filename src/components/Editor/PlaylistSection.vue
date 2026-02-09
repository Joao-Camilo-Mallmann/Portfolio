<template>
  <section class="w-full py-16 md:py-24 relative overflow-visible">
    <!-- Background Effects -->
    <div class="absolute inset-0 pointer-events-none" aria-hidden="true">
      <div
        class="absolute top-0 left-1/4 w-96 h-96 bg-editor/10 rounded-full blur-3xl animate-pulse"
      ></div>
      <div
        class="absolute bottom-0 right-1/4 w-80 h-80 bg-yellow-500/10 rounded-full blur-3xl animate-pulse"
        style="animation-delay: 1s"
      ></div>
    </div>

    <div class="max-w-5xl mx-auto px-4 md:px-6 relative z-10">
      <!-- Header Simples -->
      <div class="text-center mb-10">
        <h2 class="text-3xl md:text-5xl font-black text-white mb-4">
          Meus
          <span class="text-editor">Vídeos</span>
        </h2>
        <p class="text-gray-400 text-lg">Navegue pelos destaques do meu trabalho</p>
      </div>

      <!-- Loading State -->
      <div v-if="loading" class="flex justify-center items-center py-32">
        <div
          class="w-16 h-16 border-4 border-editor/20 border-t-editor rounded-full animate-spin"
        ></div>
      </div>

      <!-- Error State -->
      <div v-else-if="error" class="text-center py-20">
        <i class="pi pi-exclamation-triangle text-5xl text-editor mb-4"></i>
        <p class="text-gray-400 text-lg">{{ error }}</p>
      </div>

      <!-- Video Slider Grande -->
      <div v-else>
        <!-- Card Principal do Vídeo -->
        <div class="relative group">
          <!-- Card Content -->
          <Card class="!rounded-3xl !overflow-hidden !p-0 bg-slate-900">
            <template #content>
              <!-- Video Thumbnail Grande -->
              <div
                class="relative aspect-video cursor-pointer"
                @click="openPlayerModal(currentVideo)"
              >
                <img
                  :src="currentVideo.thumbnail"
                  :alt="currentVideo.title"
                  class="w-full h-full object-cover"
                  @error="handleImageError($event, currentVideo.id)"
                />

                <!-- Overlay escuro -->
                <div
                  class="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-300"
                ></div>

                <!-- Play Button Central Grande -->
                <div class="absolute inset-0 flex items-center justify-center">
                  <div
                    class="w-20 h-20 md:w-28 md:h-28 rounded-full bg-editor/90 backdrop-blur-sm flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-2xl shadow-editor/50"
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

                <!-- Badge do número -->
                <div
                  class="absolute top-4 left-4 px-4 py-2 rounded-full bg-editor text-white text-sm font-bold"
                >
                  {{ currentIndex + 1 }} / {{ playlistVideos.length }}
                </div>

                <!-- Badge YouTube -->
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

              <!-- Info do Vídeo -->
              <div class="p-6 md:p-8">
                <h3 class="text-xl md:text-2xl font-bold text-white mb-4">
                  {{ currentVideo.title }}
                </h3>

                <!-- Navegação -->
                <div class="flex items-center justify-between gap-4">
                  <!-- Botão Anterior -->
                  <Button
                    @click="prevVideo"
                    class="!flex !items-center !gap-2 !px-5 !py-3 !rounded-full !bg-gray-800 hover:!bg-gray-700 !text-white !font-medium !transition-all !duration-300 hover:!scale-105"
                  >
                    <i class="pi pi-chevron-left text-lg"></i>
                    <span class="hidden sm:inline">Anterior</span>
                  </Button>

                  <!-- Botão Assistir -->
                  <Button
                    @click="openPlayerModal(currentVideo)"
                    class="!flex-1 !max-w-xs !flex !items-center !justify-center !gap-3 !px-6 !py-4 !rounded-full !bg-editor hover:!bg-editor/80 !text-white !font-bold !text-lg !transition-all !duration-300 hover:!scale-105 !shadow-lg !shadow-editor/30"
                  >
                    <i class="pi pi-play-circle text-xl"></i>
                    <span>Assistir</span>
                  </Button>

                  <!-- Botão Próximo -->
                  <Button
                    @click="nextVideo"
                    class="!flex !items-center !gap-2 !px-5 !py-3 !rounded-full !bg-gray-800 hover:!bg-gray-700 !text-white !font-medium !transition-all !duration-300 hover:!scale-105 bor"
                  >
                    <span class="hidden sm:inline">Próximo</span>
                    <i class="pi pi-chevron-right text-lg"></i>
                  </Button>
                </div>
              </div>
            </template>
          </Card>
        </div>

        <!-- Indicadores (dots) -->
        <div class="flex justify-center gap-2 mt-8">
          <button
            v-for="(video, index) in playlistVideos"
            :key="video.id"
            @click="goToVideo(index)"
            class="transition-all duration-300"
            :class="
              index === currentIndex
                ? 'w-10 h-3 rounded-full bg-editor'
                : 'w-3 h-3 rounded-full bg-gray-700 hover:bg-gray-600'
            "
          ></button>
        </div>

        <!-- Link para Playlist -->
        <div class="text-center mt-10">
          <a
            :href="playlistUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 text-gray-400 hover:text-editor transition-colors duration-300"
          >
            <span>Ver playlist completa no YouTube</span>
            <i class="pi pi-external-link"></i>
          </a>
        </div>
      </div>
    </div>

    <!-- Modal Player -->
    <Dialog
      v-model:visible="playerModalVisible"
      :header="selectedVideo?.title || 'Player'"
      modal
      dismissableMask
      :style="{ width: '95vw', maxWidth: '1200px' }"
      :pt="{
        root: {
          class:
            'bg-gray-950! backdrop-blur-2xl! border! border-editor/20! rounded-3xl! overflow-hidden!',
        },
        header: {
          class:
            'bg-transparent! text-white! border-b! border-gray-800/50! px-6! py-4! text-lg! font-bold!',
        },
        content: { class: 'bg-transparent! p-0!' },
        closeButton: { class: 'text-gray-400! hover:text-editor!' },
      }"
      @hide="stopVideo"
    >
      <div class="aspect-video w-full bg-black">
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
    </Dialog>
  </section>
</template>

<script>
const PLAYLIST_ID = 'PL6E1iPJrFf0NPhk4D7ohTw2_yMmRG9goH'
const MAX_VIDEOS = 12

// Múltiplos proxies CORS para fallback
const CORS_PROXIES = [
  'https://api.allorigins.win/raw?url=',
  'https://corsproxy.io/?',
  'https://api.codetabs.com/v1/proxy?quest=',
]

export default {
  name: 'PlaylistSection',

  data: () => ({
    playlistVideos: [],
    currentIndex: 0,
    loading: true,
    error: null,
    playerModalVisible: false,
    selectedVideo: null,
  }),

  computed: {
    currentVideo() {
      return this.playlistVideos[this.currentIndex] ?? {}
    },
    playlistUrl() {
      return `https://www.youtube.com/playlist?list=${PLAYLIST_ID}`
    },
    totalVideos() {
      return this.playlistVideos.length
    },
  },

  mounted() {
    this.fetchPlaylistVideos()
  },

  methods: {
    async fetchPlaylistVideos() {
      this.loading = true
      this.error = null

      const rssUrl = `https://www.youtube.com/feeds/videos.xml?playlist_id=${PLAYLIST_ID}`

      // Tenta cada proxy até um funcionar
      for (const proxy of CORS_PROXIES) {
        try {
          const response = await fetch(proxy + encodeURIComponent(rssUrl), {
            signal: AbortSignal.timeout(5000), // Timeout de 5 segundos
          })

          if (!response.ok) continue

          const xmlDoc = new DOMParser().parseFromString(await response.text(), 'text/xml')

          if (xmlDoc.querySelector('parsererror')) continue

          const videos = this.parseVideos(xmlDoc.querySelectorAll('entry'))

          if (videos.length > 0) {
            this.playlistVideos = videos
            this.loading = false
            return
          }
        } catch (err) {
          console.warn(`Proxy ${proxy} falhou:`, err.message)
        }
      }

      // Se todos os proxies falharem, usa fallback
      console.error('Todos os proxies falharam, usando vídeos de fallback')
      this.loadFallbackVideos()
      this.loading = false
    },

    parseVideos(entries) {
      return Array.from(entries)
        .slice(0, MAX_VIDEOS)
        .map((entry) => {
          const id = entry.querySelector('yt\\:videoId, videoId')?.textContent
          const title = entry.querySelector('title')?.textContent
          return id && title ? { id, title, thumbnail: this.getThumbnailUrl(id) } : null
        })
        .filter(Boolean)
    },

    getThumbnailUrl: (videoId) => `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`,

    loadFallbackVideos() {
      // Vídeos estáticos da playlist como fallback
      this.playlistVideos = [
        { id: 'Ml0e7RQDI-M', title: 'Um jogo sobre Redenção.......' },
        { id: 'ZMThOw1ItTk', title: 'Qual é o SEU Tipo de Amor? (As 5 Linguagens Do Amor)' },
        { id: 'aMDvPpkbHxg', title: 'A História do HOLLOW KNIGHT em 15 minutos' },
      ].map((v) => ({ ...v, thumbnail: this.getThumbnailUrl(v.id) }))
      this.error = null
    },

    nextVideo() {
      this.currentIndex = (this.currentIndex + 1) % this.totalVideos
    },

    prevVideo() {
      this.currentIndex = this.currentIndex === 0 ? this.totalVideos - 1 : this.currentIndex - 1
    },

    goToVideo(index) {
      this.currentIndex = index
    },

    openPlayerModal(video) {
      this.selectedVideo = video
      this.playerModalVisible = true
    },

    stopVideo() {
      this.selectedVideo = null
    },

    handleImageError(event, videoId) {
      event.target.src = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`
    },
  },
}
</script>

<style scoped>
/* Transição suave ao trocar de vídeo */
.aspect-video img {
  transition: opacity 0.3s ease;
}
</style>
