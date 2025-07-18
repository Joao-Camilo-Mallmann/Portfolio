<template>
  <div
    class="page-transition min-h-screen !bg-gradient-to-br !to-[#eaa64d]/10 relative overflow-hidden"
  >
    <div class="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
      <div
        class="absolute bottom-10 right-1/4 w-56 h-56 bg-white/5 rounded-full blur-xl animate-pulse-slower"
        style="mix-blend-mode: lighten"
      ></div>
    </div>
    <HeaderCore />

    <div class="pt-20 md:pt-24">
      <!-- Aviso de desenvolvimento -->
      <Card class="bg-yellow-100/10 border-l-4 border-yellow-500 mb-8 rounded-3xl shadow-lg mx-2">
        <template #content>
          <div class="flex items-start md:items-center gap-3 p-4">
            <i
              class="pi pi-exclamation-triangle text-yellow-500 text-2xl md:text-3xl mt-1 md:mt-0"
            ></i>
            <span class="text-yellow-100 text-base md:text-lg">
              <strong>🎬 Portfólio em Edição!</strong> Esta seção está sendo finalizada. Em breve,
              você verá aqui meus trabalhos completos de edição e motion design.
            </span>
          </div>
        </template>
      </Card>

      <!-- Canal do YouTube em Destaque -->
      <Panel class="!bg-transparent !border-0 !shadow-none mb-6 mt-6">
        <template #header>
          <div class="w-full flex justify-center">
            <h2 class="text-2xl font-bold text-[#eaa64d]">Canal Oficial</h2>
          </div>
        </template>
        <div class="flex flex-col items-center justify-center gap-6 px-2">
          <div class="relative group">
            <span
              class="absolute inset-0 rounded-full border-4 border-[#eaa64d] animate-pulse"
            ></span>
            <span
              class="absolute -inset-2 rounded-full border-2 border-[#eaa64d]/30 animate-pulse delay-150"
            ></span>
            <img
              :src="youtubeJCLink"
              alt="Logo do Canal"
              class="w-32 h-32 md:w-50 md:h-50 rounded-full border-4 border-[#eaa64d] shadow-2xl relative z-10 bg-white group-hover:scale-105 transition-all duration-300"
            />
          </div>
          <Button
            as="a"
            size="large"
            label="Conheça meu canal no YouTube!"
            href="https://www.youtube.com/@J.C-12"
            target="_blank"
            icon="pi pi-youtube"
            rel="noopener"
            class="!inline-flex !items-center !gap-3 !px-8 !py-4 md:!px-12 md:!py-5 !rounded-full !bg-gradient-to-r !from-[#eaa64d] !to-[#f0b86e] !text-white !font-extrabold !text-lg md:!text-xl !shadow-xl hover:!shadow-2xl hover:!scale-105 !transition-all !duration-300 !border-2 !border-[#eaa64d]/50"
          >
          </Button>
        </div>
      </Panel>

      <Panel
        class="!bg-transparent !border-0 !shadow-none text-gray-200 max-w-4xl mx-auto p-2 md:p-8"
      >
        <!-- Título principal -->
        <div class="text-center mb-12 px-2">
          <h1
            class="text-3xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-lg bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent"
          >
            Portfólio de Edição
          </h1>
          <Divider
            class="!w-24 md:!w-32 !h-1.5 !mx-auto !bg-gradient-to-r !from-[#eaa64d] !to-yellow-200/60 !rounded-full !mb-6 !shadow-lg !border-0"
          />
          <p
            class="text-gray-300 text-lg md:text-2xl px-2 md:px-4 font-medium leading-relaxed max-w-3xl mx-auto"
          >
            Criação audiovisual profissional com
            <span class="text-[#eaa64d] font-bold">Adobe Premiere Pro</span>,
            <span class="text-[#eaa64d] font-bold">Adobe Photoshop</span> e
            <span class="text-[#eaa64d] font-bold">After Effects</span>
          </p>
        </div>

        <!-- Apresentação / Skills -->
        <div class="mb-8">
          <CardDetails
            color="#eaa64d"
            title="Sobre & Skills"
            icon="pi-video"
            description="Como editor de vídeo e youtuber, transformo ideias em conteúdo audiovisual impactante utilizando as principais ferramentas do mercado."
          />
        </div>

        <!-- Ferramentas -->
        <Fieldset
          legend="🛠️ Ferramentas Profissionais"
          class="!border-[#eaa64d]/30 !rounded-3xl !shadow-xl hover:!shadow-yellow-200/20 !transition-all !duration-300 mb-10"
          :toggleable="true"
        >
          <template #legend>
            <div class="flex items-center gap-2">
              <i class="pi pi-cog text-[#eaa64d]"></i>
              <span class="text-[#eaa64d] font-bold">Ferramentas Profissionais</span>
            </div>
          </template>

          <p class="text-gray-300 text-center mb-6 leading-relaxed">
            Principais ferramentas utilizadas para criação audiovisual, desde edição básica até
            motion graphics avançados.
          </p>

          <div class="flex flex-wrap justify-center gap-6 md:gap-8">
            <!-- Ferramentas dinâmicas -->
            <Fieldset
              v-for="tool in tools"
              :key="tool.name"
              class="!bg-[#eaa64d]/10 !border-[#eaa64d]/30 hover:!bg-[#eaa64d]/20 hover:!scale-105 !transition-all !duration-300 !cursor-pointer !group !rounded-2xl !p-4 flex-shrink-0 w-32 md:w-40"
              :toggleable="false"
            >
              <template #legend>
                <span
                  class="text-[#eaa64d] font-semibold text-xs md:text-sm text-center block truncate"
                  >{{ tool.name }}</span
                >
              </template>
              <div class="flex justify-center">
                <img
                  :src="tool.icon"
                  :alt="tool.name"
                  class="w-12 h-12 md:w-16 md:h-16 group-hover:scale-110 transition-transform duration-300"
                  :class="tool.rounded ? 'rounded' : ''"
                />
              </div>
            </Fieldset>
          </div>
        </Fieldset>
      </Panel>

      <!-- Projetos / Vídeos -->
      <Panel class="!bg-transparent !border-0 !shadow-none mb-16 pt-8">
        <template #header>
          <div class="w-full flex justify-center mb-8">
            <h2 class="text-3xl md:text-4xl font-bold text-[#eaa64d] drop-shadow-lg">
              Vídeos em Destaque
            </h2>
          </div>
        </template>
        <div class="w-full px-4 md:px-8">
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
                  class="w-full h-48 md:h-64 object-cover object-center rounded-xl border-4 border-[#eaa64d] shadow-lg group-hover:border-yellow-400 transition mb-4"
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

      <!-- Canal Pessoal OFurry - Compacto -->
      <div class="relative mb-8 mx-4">
        <!-- Título chamativo com jogo de luzes -->
        <div class="text-center mb-6 relative">
          <!-- Efeitos de fundo para o título -->

          <h2 class="relative text-2xl md:text-3xl font-extrabold mb-3">
            <span
              class="bg-gradient-to-r from-[#eaa64d] via-yellow-400 to-[#f0b86e] bg-clip-text text-transparent drop-shadow-lg"
            >
              🎨 Meu Canal Criativo
            </span>
          </h2>

          <!-- Subtitle com efeito especial -->
          <div class="relative inline-block">
            <div
              class="absolute inset-0 bg-gradient-to-r from-[#eaa64d]/50 to-yellow-500/50 blur-sm rounded-full animate-pulse"
            ></div>
            <p
              class="relative text-gray-300 text-base md:text-lg font-medium px-6 py-2 bg-black/60 rounded-full border border-[#eaa64d]/30"
            >
              Onde a <span class="text-[#eaa64d] font-bold">criatividade</span> não tem limites
            </p>
          </div>

          <!-- Elementos decorativos animados -->
          <div
            class="absolute -top-2 left-1/4 w-2 h-2 bg-yellow-400 rounded-full animate-ping"
          ></div>
          <div
            class="absolute -bottom-2 right-1/4 w-3 h-3 bg-[#eaa64d] rounded-full animate-pulse delay-500"
          ></div>
          <div
            class="absolute top-1/2 -left-4 w-1 h-1 bg-yellow-500 rounded-full animate-bounce"
          ></div>
          <div
            class="absolute top-1/2 -right-4 w-1 h-1 bg-[#f0b86e] rounded-full animate-bounce delay-700"
          ></div>
        </div>

        <!-- Jogo de luzes no fundo -->
        <Panel
          class="!bg-black/70 !border-2 !border-[#eaa64d]/30 !rounded-2xl !shadow-xl relative backdrop-blur-sm overflow-hidden cursor-pointer hover:!border-[#eaa64d]/50 !transition-all !duration-300 max-w-4xl mx-auto"
          @click="openOFurryChannel"
        >
          <div class="absolute inset-0 pointer-events-none"></div>

          <div class="relative z-10 flex items-center justify-between p-6">
            <div class="relative">
              <div
                class="absolute inset-0 bg-gradient-to-r from-[#eaa64d] to-yellow-500 rounded-full blur-md animate-pulse"
              ></div>
              <div class="relative bg-black rounded-full p-3">
                <img
                  :src="youtubeOFurryLink"
                  alt="Canal OFurry"
                  class="w-25 h-25 md:w-24 md:h-24 rounded-full border-4 border-[#eaa64d] shadow-2xl"
                />
              </div>
              <div
                class="absolute -inset-2 border-2 border-[#eaa64d]/50 rounded-full animate-spin-slow"
              ></div>
            </div>

            <div class="flex-1 ml-6">
              <h3 class="text-lg md:text-xl font-bold text-[#eaa64d] mb-2">OFurry</h3>
              <p class="text-gray-300 text-sm md:text-base mb-4">
                Meu lado mais
                <span class="text-[#eaa64d] font-semibold">criativo</span> e experimental
              </p>

              <span class="inline-flex items-center gap-2 text-[#eaa64d] font-semibold py-2 px-4">
                <i class="pi pi-external-link"></i>
                Explorar Canal
              </span>
            </div>
          </div>
        </Panel>
      </div>
    </div>
  </div>
</template>

<script>
import CardDetails from '@/components/CardDetails.vue'
import HeaderCore from '@/components/HeaderCore.vue'

export default {
  components: {
    HeaderCore,
    CardDetails,
  },

  data() {
    return {
      youtubeJCLink:
        'https://yt3.ggpht.com/VhJNJwOB8d4NY-XaUtpjcQwHMqlT_DAO7eTc1g0mmaKVt9Jj0bGQv1G02Hp3R6NwkATWXT97Rg=s600-c-k-c0x00ffffff-no-rj-rp-mo',
      youtubeOFurryLink:
        'https://yt3.googleusercontent.com/gnIEqwR1vmWB45wdNA45xHpRYaE0XiJUYihwt3aCI2A4TWG4jusXHKOLVi9WDr3rcJ1P5GlHcw=s160-c-k-c0x00ffffff-no-rj',

      // Array de ferramentas
      tools: [
        {
          name: 'Premiere Pro',
          icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Adobe_Premiere_Pro_CC_icon.svg/512px-Adobe_Premiere_Pro_CC_icon.svg.png?20210729021549',
          rounded: false,
        },
        // {
        //   name: 'After Effects',
        //   icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aftereffects/aftereffects-original.svg',
        //   rounded: false,
        // },
        {
          name: 'Photoshop',
          icon: 'https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg',
          rounded: false,
        },
        {
          name: 'YouTube',
          icon: 'https://cdn-icons-png.flaticon.com/512/1384/1384060.png',
          rounded: true,
        },
      ],

      // Lista de vídeos destacados
      bestVideos: [
        {
          title: 'Vídeo Institucional - Empresa X',
          thumbnail: 'https://img.youtube.com/vi/VIDEO_ID_1/hqdefault.jpg',
          description:
            'Edição completa de vídeo institucional, com roteiro, motion graphics e finalização profissional.',
          url: 'https://www.youtube.com/watch?v=VIDEO_ID_1',
        },
        {
          title: 'Motion Graphics para Campanha Y',
          thumbnail: 'https://img.youtube.com/vi/VIDEO_ID_2/hqdefault.jpg',
          description:
            'Criação de animações e elementos gráficos para campanha publicitária de grande alcance.',
          url: 'https://www.youtube.com/watch?v=VIDEO_ID_2',
        },
        {
          title: 'Conteúdo Digital - YouTube',
          thumbnail: 'https://img.youtube.com/vi/VIDEO_ID_3/hqdefault.jpg',
          description:
            'Edição de vídeo para YouTube com intros dinâmicas, efeitos visuais e thumbnails personalizadas.',
          url: 'https://www.youtube.com/watch?v=VIDEO_ID_3',
        },
      ],
    }
  },

  methods: {
    openOFurryChannel() {
      window.open('https://www.youtube.com/@OFurryOficial', '_blank')
    },
  },
}
</script>

<style scoped>
/* Animações customizadas para o canal OFurry */
@keyframes spin-slow {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.animate-spin-slow {
  animation: spin-slow 8s linear infinite;
}

/* Efeito de flutuação para elementos decorativos */
@keyframes float {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}
</style>
