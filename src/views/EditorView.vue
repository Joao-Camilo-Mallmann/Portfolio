<template>
  <div
    class="page-transition min-h-screen !bg-gradient-to-br !to-[#eaa64d]/10 relative overflow-hidden"
  >
    <HeaderCore />

    <!-- Bolinhas animadas usando AnimatedDot -->
    <template v-for="i in 10" :key="i">
      <AnimatedDot color="yellow" />
      <AnimatedDot color="gold" />
    </template>

    <div class="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
      <div
        class="absolute bottom-10 right-1/4 w-56 h-56 bg-white/5 rounded-full blur-xl animate-pulse-slower"
        style="mix-blend-mode: lighten"
      ></div>
    </div>

    <div class="pt-20 md:pt-24">
      <!-- Canal do YouTube em Destaque -->
      <YouTubeChannelPanel />

      <Panel
        class="!bg-transparent !border-0 !shadow-none text-gray-200 max-w-4xl mx-auto p-2 md:p-8"
      >
        <!-- Título principal -->
        <div class="text-center mb-12 px-2">
          <h1
            class="text-3xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-lg bg-gradient-to-r from-white to-gray-200 bg-clip-text"
          >
            Portfólio de Edição
          </h1>
          <div
            class="absolute top-4 left-4 w-16 h-16 bg-gradient-to-r from-[#eaa64d]/20 to-yellow-500/20 rounded-full blur-lg opacity-70"
          ></div>
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
            :description="skillsDescription"
          />
        </div>

        <!-- Ferramentas -->
        <ToolsSection />
      </Panel>

      <!-- Projetos / Vídeos -->
      <VideoPortfolio />

      <!-- Canal Pessoal OFurry -->
      <CreativeChannelPanel />
    </div>

    <p class="text-center text-gray-400 text-sm mt-8">
      Aperta F5 e assista ao balé das bolinhas! Elas ficam tão perdidas que nem elas sabem onde vão
      parar
    </p>
  </div>
</template>

<script>
import CardDetails from '@/components/CardDetails.vue'
import HeaderCore from '@/components/HeaderCore.vue'
import AnimatedDot from '@/components/Editor/AnimatedDot.vue'
import YouTubeChannelPanel from '@/components/Editor/YouTubeChannelPanel.vue'
import ToolsSection from '@/components/Editor/ToolsSection.vue'
import VideoPortfolio from '@/components/Editor/VideoPortfolio.vue'
import CreativeChannelPanel from '@/components/Editor/CreativeChannelPanel.vue'

export default {
  components: {
    HeaderCore,
    CardDetails,
    AnimatedDot,
    YouTubeChannelPanel,
    ToolsSection,
    VideoPortfolio,
    CreativeChannelPanel,
  },

  data() {
    return {
      skillsDescription: `
        Atuo na produção de vídeos institucionais, comerciais, conteúdos digitais, animações e materiais para redes sociais, sempre focando em resultados criativos e profissionais.
        Como editor de vídeo e criador de conteúdo, transformo ideias em experiências audiovisuais marcantes, utilizando as principais ferramentas do mercado.
      `,
    }
  },
}
</script>

<style scoped>
/* Animação de flutuação suave */
@keyframes float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}
.animate-float {
  animation: float 3s ease-in-out infinite;
}

/* Animação de bounce vertical */
@keyframes bounce {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(8px);
  }
}
.animate-bounce {
  animation: bounce 2.2s cubic-bezier(0.68, -0.55, 0.27, 1.55) infinite;
}
</style>
