<script setup>
import AnimatedDot from '@/components/Editor/AnimatedDot.vue'
import CardDetails from '@/components/Editor/CardDetails.vue'
import CreativeChannelPanel from '@/components/Editor/CreativeChannelPanel.vue'
import PlaylistSection from '@/components/Editor/PlaylistSection.vue'
import ToolsSection from '@/components/Editor/ToolsSection.vue'
import YouTubeChannelPanel from '@/components/Editor/YouTubeChannelPanel.vue'
import FooterContact from '@/components/FooterContact.vue'
import HeaderCore from '@/components/HeaderCore.vue'
import { ref } from 'vue'
import { useHead } from '@unhead/vue'
import { useI18n } from '@/composables/useI18n'
const { t } = useI18n()

const containerRef = ref(null)
const bgOrb1 = ref(null)
const bgOrb2 = ref(null)

useHead({
  title: () => t('editor.seoTitle'),
  meta: [
    { name: 'description', content: () => t('editor.seoDescription') },
    { name: 'keywords', content: () => t('editor.seoKeywords') },
    { property: 'og:title', content: () => t('editor.ogTitle') },
    { property: 'og:description', content: () => t('editor.ogDescription') },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://joao-camilo-mallmann.com/editor' },
    {
      property: 'og:image',
      content:
        'https://images.unsplash.com/photo-1574717025058-2f8737d2e2b7?q=80&w=687&auto=format&fit=crop',
    },
    { name: 'twitter:card', content: 'summary_large_image' },
    {
      name: 'twitter:image',
      content:
        'https://images.unsplash.com/photo-1574717025058-2f8737d2e2b7?q=80&w=687&auto=format&fit=crop',
    },
    { name: 'twitter:title', content: () => t('editor.twitterTitle') },
    { name: 'twitter:description', content: () => t('editor.twitterDescription') },
  ],
  link: [{ rel: 'canonical', href: 'https://joao-camilo-mallmann.com/editor' }],
})
</script>

<template>
  <main
    ref="containerRef"
    class="page-transition min-h-screen relative overflow-hidden"
    role="main"
    :aria-label="t('editor.ariaLabel')"
  >
    <header-core />

    <!-- Elementos decorativos (dots) — ficam como partículas estáticas/sutis -->
    <template v-for="i in 20" :key="i">
      <animated-dot color="yellow" />
      <animated-dot color="gold" />
    </template>

    <!-- Orbs de fundo com parallax -->
    <div class="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
      <div
        ref="bgOrb1"
        class="parallax-layer absolute top-20 left-1/4 w-72 h-72 bg-editor/8 rounded-full blur-3xl"
      ></div>
      <div
        ref="bgOrb2"
        class="parallax-layer absolute bottom-10 right-1/4 w-56 h-56 bg-white/5 rounded-full blur-xl"
        style="mix-blend-mode: lighten"
      ></div>
    </div>

    <section class="pt-20 md:pt-24">
      <!-- Canal YouTube -->
      <div v-motion-scroll-visible>
        <you-tube-channel-panel />
      </div>

      <!-- Cabeçalho do portfólio -->
      <div
        class="bg-transparent border-0 shadow-none text-fg px-4 lg:px-16 p-4 md:p-8"
        role="region"
        aria-labelledby="portfolio-heading"
      >
        <header v-motion-scroll-visible class="text-center mb-12 px-2" :delay="100">
          <h1
            id="portfolio-heading"
            class="text-3xl md:text-6xl font-extrabold text-fg mb-6 drop-shadow-lg"
          >
            {{ t('editor.portfolioHeading') }}
          </h1>
          <hr class="w-24 md:w-32 h-1.5 mx-auto bg-editor rounded-full mb-6 shadow-lg border-0" />
          <p
            class="text-fg-muted tracking-wide text-lg md:text-2xl px-2 md:px-4 font-medium leading-relaxed max-w-3xl mx-auto"
          >
            {{ t('editor.portfolioDescription') }}
            <strong class="text-editor font-bold">Adobe Premiere Pro</strong>,
            <strong class="text-editor font-bold">Adobe Photoshop</strong> {{ t('editor.and') }}
            <strong class="text-editor font-bold">After Effects</strong>
          </p>
        </header>
      </div>

      <!-- Playlist do YouTube -->
      <section v-motion-scroll-visible aria-labelledby="playlist-heading" :delay="200">
        <h2 id="playlist-heading" class="sr-only text-balance">
          {{ t('editor.playlistHeading') }}
        </h2>
        <playlist-section />
      </section>

      <!-- Seção de ferramentas -->
      <section
        v-motion-scroll-visible
        class="px-4 lg:px-16"
        aria-labelledby="tools-heading"
        :delay="300"
      >
        <h2 id="tools-heading" class="sr-only text-balance">{{ t('editor.toolsHeading') }}</h2>
        <tools-section />
      </section>

      <!-- Seção sobre habilidades -->
      <section
        v-motion-scroll-visible
        class="mb-8 max-w-4xl mx-auto px-4"
        aria-labelledby="skills-heading"
        :delay="400"
      >
        <h2 id="skills-heading" class="sr-only text-balance">{{ t('editor.skillsHeading') }}</h2>
        <card-details />
      </section>

      <!-- Canal criativo -->
      <section v-motion-scroll-visible aria-labelledby="creative-channel-heading" :delay="500">
        <h2 id="creative-channel-heading" class="sr-only text-balance">
          {{ t('editor.creativeChannelHeading') }}
        </h2>
        <creative-channel-panel />
      </section>
    </section>

    <!-- Nota informativa -->
    <p
      v-motion-scroll-visible
      class="text-center text-fg-muted text-sm mt-4 mb-0 px-4 tracking-wide"
      role="note"
      :delay="600"
    >
      {{ t('editor.funText') }}
      <span class="text-editor">{{ t('editor.funHighlight') }}</span>
      {{ t('editor.funEnd') }}
    </p>

    <!-- Rodapé de contato -->
    <footer-contact primary-color="#eaa64d" :cta-text="t('footer.ctaDefault')" />
  </main>
</template>

<style scoped></style>
