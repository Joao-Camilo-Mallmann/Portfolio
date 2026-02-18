<script setup>
import AnimatedDot from '@/components/Editor/AnimatedDot.vue'
import CardDetails from '@/components/Editor/CardDetails.vue'
import CreativeChannelPanel from '@/components/Editor/CreativeChannelPanel.vue'
import PlaylistSection from '@/components/Editor/PlaylistSection.vue'
import ToolsSection from '@/components/Editor/ToolsSection.vue'
import YouTubeChannelPanel from '@/components/Editor/YouTubeChannelPanel.vue'
import FooterContact from '@/components/FooterContact.vue'
import HeaderCore from '@/components/HeaderCore.vue'
import { useI18n } from '@/composables/useI18n'
import { useHead } from '@unhead/vue'
import Divider from 'primevue/divider'
import Panel from 'primevue/panel'

const { t } = useI18n()

useHead({
  title: () => t('editor.seoTitle'),
  meta: [
    { name: 'description', content: () => t('editor.seoDescription') },
    { name: 'keywords', content: () => t('editor.seoKeywords') },
    { property: 'og:title', content: () => t('editor.ogTitle') },
    { property: 'og:description', content: () => t('editor.ogDescription') },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://joao-camilo-mallmann.com/editor' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: () => t('editor.twitterTitle') },
    { name: 'twitter:description', content: () => t('editor.twitterDescription') },
  ],
  link: [{ rel: 'canonical', href: 'https://joao-camilo-mallmann.com/editor' }],
})
</script>

<template>
  <main
    class="page-transition min-h-screen !bg-gradient-to-br !to-[#eaa64d]/10 relative overflow-hidden"
    role="main"
    :aria-label="t('editor.ariaLabel')"
  >
    <header-core />

    <!-- Elementos decorativos animados -->
    <template v-for="i in 20" :key="i">
      <animated-dot color="yellow" />
      <animated-dot color="gold" />
    </template>

    <div class="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
      <div
        class="absolute bottom-10 right-1/4 w-56 h-56 bg-white/5 rounded-full blur-xl animate-pulse-slower"
        style="mix-blend-mode: lighten"
      ></div>
    </div>

    <section class="pt-20 md:pt-24">
      <you-tube-channel-panel />

      <panel
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
            {{ t('editor.portfolioHeading') }}
          </h1>
          <divider
            class="!w-24 md:!w-32 !h-1.5 !mx-auto !bg-gradient-to-r !from-[#eaa64d] !to-yellow-200/60 !rounded-full !mb-6 !shadow-lg !border-0"
          />
          <p
            class="text-gray-300 text-lg md:text-2xl px-2 md:px-4 font-medium leading-relaxed max-w-3xl mx-auto"
          >
            {{ t('editor.portfolioDescription') }}
            <strong class="text-editor font-bold">Adobe Premiere Pro</strong>,
            <strong class="text-editor font-bold">Adobe Photoshop</strong> {{ t('editor.and') }}
            <strong class="text-editor font-bold">After Effects</strong>
          </p>
        </header>
      </panel>

      <!-- Seção da Playlist do YouTube -->
      <section aria-labelledby="playlist-heading">
        <h2 id="playlist-heading" class="sr-only">{{ t('editor.playlistHeading') }}</h2>
        <playlist-section />
      </section>

      <!-- Seção de ferramentas -->
      <section class="px-4 lg:px-16" aria-labelledby="tools-heading">
        <h2 id="tools-heading" class="sr-only">{{ t('editor.toolsHeading') }}</h2>
        <tools-section />
      </section>

      <!-- Seção sobre habilidades -->
      <section class="mb-8 max-w-4xl mx-auto px-4" aria-labelledby="skills-heading">
        <h2 id="skills-heading" class="sr-only">{{ t('editor.skillsHeading') }}</h2>
        <card-details />
      </section>

      <!-- Seção do canal criativo -->
      <section aria-labelledby="creative-channel-heading">
        <h2 id="creative-channel-heading" class="sr-only">
          {{ t('editor.creativeChannelHeading') }}
        </h2>
        <creative-channel-panel />
      </section>
    </section>

    <!-- Nota informativa sobre animações -->
    <p class="text-center text-gray-400 text-sm mt-4 mb-0 px-4" role="note">
      {{ t('editor.funText') }}
      <span class="text-editor">{{ t('editor.funHighlight') }}</span>
      {{ t('editor.funEnd') }}
    </p>

    <!-- Rodapé de contato -->
    <footer-contact primary-color="#eaa64d" :cta-text="t('footer.ctaDefault')" />
  </main>
</template>

<style scoped></style>
