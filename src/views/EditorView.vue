<template>
  <main
    class="page-transition min-h-screen !bg-gradient-to-br !to-[#eaa64d]/10 relative overflow-hidden"
    role="main"
    aria-label="Portfólio de Edição Audiovisual"
  >
    <HeaderCore />

    <!-- Elementos decorativos animados -->
    <template v-for="i in 20" :key="i">
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
        class="!bg-transparent !border-0 !shadow-none text-gray-200 px-4 lg:px-16 p-4 md:p-8"
        role="region"
        aria-labelledby="portfolio-heading"
      >
        <!-- Cabeçalho principal da seção -->
        <header class="text-center mb-12 px-2">
          <h1
            id="portfolio-heading"
            class="text-3xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-lg"
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
            <strong class="text-editor font-bold">Adobe Premiere Pro</strong>,
            <strong class="text-editor font-bold">Adobe Photoshop</strong> e
            <strong class="text-editor font-bold">After Effects</strong>
          </p>
        </header>
      </Panel>

      <!-- Seção da Playlist do YouTube -->
      <section aria-labelledby="playlist-heading">
        <h2 id="playlist-heading" class="sr-only">Playlist de Vídeos</h2>
        <PlaylistSection />
      </section>

      <!-- Seção de ferramentas -->
      <section class="px-4 lg:px-16" aria-labelledby="tools-heading">
        <h2 id="tools-heading" class="sr-only">Ferramentas de Trabalho</h2>
        <ToolsSection />
      </section>

      <!-- Seção sobre habilidades -->
      <section class="mb-8 max-w-4xl mx-auto px-4" aria-labelledby="skills-heading">
        <h2 id="skills-heading" class="sr-only">Habilidades e Experiência</h2>
        <CardDetails />
      </section>

      <!-- Seção do canal criativo -->
      <section aria-labelledby="creative-channel-heading">
        <h2 id="creative-channel-heading" class="sr-only">Canal Criativo</h2>
        <CreativeChannelPanel />
      </section>
    </section>

    <!-- Nota informativa sobre animações -->
    <p class="text-center text-gray-400 text-sm mt-4 mb-0 px-4" role="note">
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

<script setup>
import AnimatedDot from '@/components/Editor/AnimatedDot.vue'
import CardDetails from '@/components/Editor/CardDetails.vue'
import CreativeChannelPanel from '@/components/Editor/CreativeChannelPanel.vue'
import PlaylistSection from '@/components/Editor/PlaylistSection.vue'
import ToolsSection from '@/components/Editor/ToolsSection.vue'
import YouTubeChannelPanel from '@/components/Editor/YouTubeChannelPanel.vue'
import FooterContact from '@/components/FooterContact.vue'
import HeaderCore from '@/components/HeaderCore.vue'
import { useHead } from '@unhead/vue'
import Divider from 'primevue/divider'
import Panel from 'primevue/panel'

useHead({
  title: 'Editor de Vídeo',
  meta: [
    {
      name: 'description',
      content:
        'Portfólio de edição de vídeo de João Camilo Mallmann. Especialista em Adobe Premiere Pro, After Effects e Photoshop. Criação audiovisual profissional para YouTube, empresas e redes sociais.',
    },
    {
      name: 'keywords',
      content:
        'editor de vídeo, Adobe Premiere Pro, After Effects, Photoshop, edição audiovisual, YouTube, motion graphics, freelancer Brasil',
    },
    // Open Graph
    { property: 'og:title', content: 'João Camilo Mallmann - Editor de Vídeo Profissional' },
    {
      property: 'og:description',
      content:
        'Criação audiovisual profissional com Adobe Creative Suite. Vídeos para YouTube, empresas e redes sociais.',
    },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://joao-camilo-mallmann.com/editor' },
    // Twitter
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'João Camilo Mallmann - Editor de Vídeo' },
    {
      name: 'twitter:description',
      content: 'Edição audiovisual profissional com Adobe Premiere Pro e After Effects.',
    },
  ],
  link: [{ rel: 'canonical', href: 'https://joao-camilo-mallmann.com/editor' }],
})
</script>

<style scoped></style>
