<template>
  <section class="w-full max-w-7xl mx-auto px-4 md:px-6 py-16">
    <!-- Header Clean -->
    <div class="text-center mb-16">
      <h2 class="text-4xl md:text-5xl font-bold text-editor mb-4">Portfólio de Vídeos</h2>
      <div class="w-24 h-1 bg-gradient-to-r from-editor/60 to-editor mx-auto rounded-full"></div>
      <p class="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
        Conteúdos audiovisuais que contam histórias e geram impacto
      </p>
    </div>

    <!-- Grid de Vídeos Modernizado -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <Card
        v-for="video in bestVideos"
        :key="video.title"
        @click="openVideo(video.url)"
        class="group !bg-gray-900/50 !backdrop-blur-sm !rounded-2xl overflow-hidden !border !border-gray-800/50 hover:!border-editor/50 transition-all duration-500 hover:-translate-y-2 !bg-gradient-to-br !to-editor/10 cursor-pointer"
      >
        <template #content>
          <!-- Thumbnail Container -->
          <div class="relative overflow-hidden rounded-xl mb-4">
            <img
              :src="video.thumbnail"
              :alt="video.title"
              class="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110"
              :onerror="`this.src='https://i.ytimg.com/vi/${video.url.split('youtu.be/')[1]?.split('?')[0]}/hqdefault.jpg'`"
              loading="lazy"
            />

            <!-- Overlay Gradient -->
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            ></div>

            <!-- YouTube Badge -->
            <div
              class="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1"
            >
              <svg class="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                <path
                  d="M23.498 6.186a2.994 2.994 0 0 0-2.107-2.117C19.228 3.5 12 3.5 12 3.5s-7.228 0-9.391.569A2.994 2.994 0 0 0 .502 6.186C0 8.36 0 12 0 12s0 3.64.502 5.814a2.994 2.994 0 0 0 2.107 2.117C4.772 20.5 12 20.5 12 20.5s7.228 0 9.391-.569a2.994 2.994 0 0 0 2.107-2.117C24 15.64 24 12 24 12s0-3.64-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
                />
              </svg>
              YouTube
            </div>

            <!-- Play Button -->
            <div
              class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500"
            >
              <div
                class="bg-editor/90 backdrop-blur-sm rounded-full p-4 transform scale-75 group-hover:scale-100 transition-transform duration-500 shadow-2xl"
              >
                <svg class="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>

          <!-- Content -->
          <div class="">
            <h3 class="text-xl font-bold text-white mb-3 line-clamp-2">{{ video.title }}</h3>
            <p class="text-gray-400 text-sm mb-0 line-clamp-3">{{ video.description }}</p>
          </div>
        </template>
      </Card>
    </div>
  </section>
</template>

<script setup>
import Card from 'primevue/card'
import { ref } from 'vue'

const bestVideos = ref([
  {
    title: 'Um jogo sobre Redenção.......',
    thumbnail: 'https://i.ytimg.com/vi/YVjG6wA-zz4/hqdefault.jpg',
    description:
      'Análise e edição sobre Red Dead Redemption 2, destacando narrativa e produção visual.',
    url: 'https://youtu.be/YVjG6wA-zz4?si=cAKm0HZKXfuBwMe-',
  },
  {
    title: 'O novo ouro (Veja antes de 2030)',
    thumbnail: 'https://i.ytimg.com/vi/UptGuUMaYMs/maxresdefault.jpg',
    description:
      'Entenda por que o Bitcoin é considerado o novo ouro digital e sua importância para o futuro financeiro.',
    url: 'https://youtu.be/UptGuUMaYMs?si=1AfT7HgG3L4y7bcn',
  },
  {
    title: 'Qual é o SEU Tipo de Amor? ',
    thumbnail: 'https://i.ytimg.com/vi/s7bjysMoHYQ/maxresdefault.jpg',
    description:
      'Descubra as 5 linguagens do amor e como elas ajudam a fortalecer relações e demonstrar afeto.',
    url: 'https://youtu.be/s7bjysMoHYQ?si=iXzuPpr459RidSaW',
  },
])

const openVideo = (url) => {
  window.open(url, '_blank', 'noopener,noreferrer')
}
</script>
