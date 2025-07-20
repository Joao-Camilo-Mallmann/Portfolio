<template>
  <main
    class="page-transition min-h-screen !bg-gradient-to-br !to-[#eaa64d]/10 relative overflow-hidden"
    role="main"
    aria-label="Portfólio de Edição Audiovisual"
  >
    <HeaderCore />

    <!-- Elementos decorativos animados -->
    <template v-for="i in 12" :key="i">
      <AnimatedDot color="yellow" />
      <AnimatedDot color="gold" />
    </template>

    <div class="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
      <div
        class="absolute bottom-10 right-1/4 w-56 h-56 bg-white/5 rounded-full blur-xl animate-pulse-slower"
        style="mix-blend-mode: lighten"
      ></div>
    </div>

    <section class="pt-20 md:pt-24">
      <YouTubeChannelPanel />

      <Panel
        class="!bg-transparent !border-0 !shadow-none text-gray-200 max-w-4xl mx-auto p-2 md:p-8"
        role="region"
        aria-labelledby="portfolio-heading"
      >
        <!-- Cabeçalho principal da seção -->
        <header class="text-center mb-12 px-2">
          <h1
            id="portfolio-heading"
            class="text-3xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-lg bg-gradient-to-r from-white to-gray-200 bg-clip-text"
          >
            Portfólio de Edição
          </h1>
          <div
            class="absolute top-4 left-4 w-16 h-16 bg-gradient-to-r from-[#eaa64d]/20 to-yellow-500/20 rounded-full blur-lg opacity-70"
            aria-hidden="true"
          ></div>
          <Divider
            class="!w-24 md:!w-32 !h-1.5 !mx-auto !bg-gradient-to-r !from-[#eaa64d] !to-yellow-200/60 !rounded-full !mb-6 !shadow-lg !border-0"
          />
          <p
            class="text-gray-300 text-lg md:text-2xl px-2 md:px-4 font-medium leading-relaxed max-w-3xl mx-auto"
          >
            Criação audiovisual profissional com
            <strong class="text-[#eaa64d] font-bold">Adobe Premiere Pro</strong>,
            <strong class="text-[#eaa64d] font-bold">Adobe Photoshop</strong> e
            <strong class="text-[#eaa64d] font-bold">After Effects</strong>
          </p>
        </header>

        <!-- Seção sobre habilidades -->
        <section class="mb-8" aria-labelledby="skills-heading">
          <h2 id="skills-heading" class="sr-only">Habilidades e Experiência</h2>
          <CardDetails
            color="#eaa64d"
            title="Sobre & Skills"
            icon="pi-video"
            :description="skillsDescription"
          />
        </section>

        <!-- Seção de ferramentas -->
        <section aria-labelledby="tools-heading">
          <h2 id="tools-heading" class="sr-only">Ferramentas de Trabalho</h2>
          <ToolsSection />
        </section>
      </Panel>

      <!-- Seção de portfólio de vídeos -->
      <section aria-labelledby="video-portfolio-heading">
        <h2 id="video-portfolio-heading" class="sr-only">Portfólio de Vídeos</h2>
        <VideoPortfolio />
      </section>

      <!-- Seção do canal criativo -->
      <section aria-labelledby="creative-channel-heading">
        <h2 id="creative-channel-heading" class="sr-only">Canal Criativo</h2>
        <CreativeChannelPanel />
      </section>
    </section>

    <!-- Nota informativa sobre animações -->
    <p class="text-center text-gray-400 text-sm mt-4  mb-0 px-4" role="note">
      Aperta
      <span class="text-[#eaa64d]"> F5 ou recarregue a página e assista ao balé das bolinhas!</span>
      Elas ficam tão perdidas que nem eu sei onde vão parar
    </p>

    <!-- Rodapé de contato -->
    <FooterContact
      primary-color="#eaa64d"
      cta-text="Vamos criar conteúdos incríveis juntos!"
      status-text="Aberto para projetos audiovisuais"
    />
  </main>
</template>

<script>
import CardDetails from '@/components/CardDetails.vue'
import HeaderCore from '@/components/HeaderCore.vue'
import FooterContact from '@/components/FooterContact.vue'
import AnimatedDot from '@/components/Editor/AnimatedDot.vue'
import YouTubeChannelPanel from '@/components/Editor/YouTubeChannelPanel.vue'
import ToolsSection from '@/components/Editor/ToolsSection.vue'
import VideoPortfolio from '@/components/Editor/VideoPortfolio.vue'
import CreativeChannelPanel from '@/components/Editor/CreativeChannelPanel.vue'
import Divider from 'primevue/divider'
import Panel from 'primevue/panel'

export default {
  components: {
    HeaderCore,
    CardDetails,
    AnimatedDot,
    YouTubeChannelPanel,
    ToolsSection,
    VideoPortfolio,
    CreativeChannelPanel,
    FooterContact,
    Divider,
    Panel,
  },

  data() {
    return {
      skillsDescription: `
        Especialista em edição de vídeo com domínio avançado em Adobe Premiere Pro, After Effects e Photoshop.
        Produzo conteúdos audiovisuais impactantes para YouTube, redes sociais e projetos comerciais, utilizando técnicas de motion graphics,
        correção de cor e storytelling visual. Transformo ideias em narrativas envolventes com edição precisa e criatividade técnica.
      `,
    }
  },
}
</script>

<style scoped></style>
