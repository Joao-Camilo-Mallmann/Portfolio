<template>
  <Panel class="!bg-transparent !border-0 !shadow-none mb-16 pt-8">
    <template #header>
      <div class="w-full flex justify-center mb-8">
        <h2 class="text-3xl md:text-4xl font-bold text-[#eaa64d] drop-shadow-lg">
          Vídeos em Destaque
        </h2>
      </div>
    </template>
    <div class="w-full px-4 md:px-8">
      <div
        class="absolute top-8 left-1/3 w-16 h-16 bg-[#eaa64d]/20 rounded-full blur-2xl opacity-80 animate-pulse"
      ></div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
        <Card
          v-for="video in bestVideos"
          :key="video.title"
          class="group !bg-gradient-to-br !from-black !to-[#eaa64d]/10 rounded-3xl shadow-xl overflow-hidden flex flex-col border border-[#eaa64d]/30 hover:scale-[1.02] hover:shadow-yellow-200/30 hover:border-[#eaa64d]/50 transition-all duration-300"
        >
          <template #content>
            <img
              :src="video.thumbnail"
              :alt="video.title"
              class="w-full h-48 md:h-64 object-contain object-center bg-black rounded-xl border-4 border-[#eaa64d] shadow-lg group-hover:border-yellow-400 transition mb-4"
            />
            <h3 class="text-lg md:text-xl font-extrabold text-white mb-2">{{ video.title }}</h3>
            <p class="text-gray-200 text-sm md:text-base mb-4">{{ video.description }}</p>
            <a
              :href="video.url"
              target="_blank"
              rel="noopener"
              class="inline-flex items-center justify-center gap-2 px-4 py-2 md:px-6 md:py-2 rounded-full bg-[#eaa64d] text-white font-bold text-sm md:text-base shadow hover:brightness-110 hover:scale-105 transition-all"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-5 h-5 text-white"
              >
                <path
                  d="M23.498 6.186a2.994 2.994 0 0 0-2.107-2.117C19.228 3.5 12 3.5 12 3.5s-7.228 0-9.391.569A2.994 2.994 0 0 0 .502 6.186C0 8.36 0 12 0 12s0 3.64.502 5.814a2.994 2.994 0 0 0 2.107 2.117C4.772 20.5 12 20.5 12 20.5s7.228 0 9.391-.569a2.994 2.994 0 0 0 2.107-2.117C24 15.64 24 12 24 12s0-3.64-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
                />
              </svg>
              Assistir no YouTube
            </a>
          </template>
        </Card>
      </div>
    </div>
  </Panel>
</template>

<script>
export default {
  name: 'VideoPortfolio',
  data() {
    return {
      bestVideos: [
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
      ],
    }
  },
}
</script>
