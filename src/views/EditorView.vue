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
import { useScrollReveal } from '@/composables/useScrollReveal'
import { useHead } from '@unhead/vue'
import { nextTick, onMounted, ref } from 'vue'

const { t } = useI18n()
const { initObserver, registerParallax } = useScrollReveal()

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

onMounted(() => {
  nextTick(() => {
    // Iniciar scroll-reveal em todas as seções da página
    initObserver(containerRef.value)

    // Parallax nos orbs decorativos de fundo
    registerParallax(bgOrb1.value, -0.12, 'y')
    registerParallax(bgOrb2.value, -0.18, 'y')
  })
})
</script>

<template>
  <main
    ref="containerRef"
    class="page-transition min-h-screen bg-linear-to-br! to-editor/10! relative overflow-hidden"
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
      <!-- Canal YouTube — revela de cima -->
      <div data-scroll-reveal="up">
        <you-tube-channel-panel />
      </div>

      <!-- Cabeçalho do portfólio -->
      <div
        class="bg-transparent border-0 shadow-none text-gray-200 px-4 lg:px-16 p-4 md:p-8"
        role="region"
        aria-labelledby="portfolio-heading"
      >
        <header class="text-center mb-12 px-2" data-scroll-reveal="up">
          <h1
            id="portfolio-heading"
            class="text-3xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-lg scroll-reveal-child"
          >
            {{ t('editor.portfolioHeading') }}
          </h1>
          <hr
            class="w-24 md:w-32 h-1.5 mx-auto bg-linear-to-r from-editor to-yellow-200/60 rounded-full mb-6 shadow-lg border-0 scroll-reveal-child"
          />
          <p
            class="text-gray-300 text-lg md:text-2xl px-2 md:px-4 font-medium leading-relaxed max-w-3xl mx-auto scroll-reveal-child"
          >
            {{ t('editor.portfolioDescription') }}
            <strong class="text-editor font-bold">Adobe Premiere Pro</strong>,
            <strong class="text-editor font-bold">Adobe Photoshop</strong> {{ t('editor.and') }}
            <strong class="text-editor font-bold">After Effects</strong>
          </p>
        </header>
      </div>

      <!-- Playlist do YouTube — revela com scale -->
      <section aria-labelledby="playlist-heading" data-scroll-reveal="scale">
        <h2 id="playlist-heading" class="sr-only text-balance">
          {{ t('editor.playlistHeading') }}
        </h2>
        <playlist-section />
      </section>

      <!-- Seção de ferramentas — revela da esquerda -->
      <section class="px-4 lg:px-16" aria-labelledby="tools-heading" data-scroll-reveal="left">
        <h2 id="tools-heading" class="sr-only text-balance">{{ t('editor.toolsHeading') }}</h2>
        <tools-section />
      </section>

      <!-- Seção sobre habilidades — revela de baixo -->
      <section
        class="mb-8 max-w-4xl mx-auto px-4"
        aria-labelledby="skills-heading"
        data-scroll-reveal="up"
      >
        <h2 id="skills-heading" class="sr-only text-balance">{{ t('editor.skillsHeading') }}</h2>
        <card-details />
      </section>

      <!-- Canal criativo — revela com fade -->
      <section aria-labelledby="creative-channel-heading" data-scroll-reveal="up">
        <h2 id="creative-channel-heading" class="sr-only text-balance">
          {{ t('editor.creativeChannelHeading') }}
        </h2>
        <creative-channel-panel />
      </section>
    </section>

    <!-- Nota informativa -->
    <p
      class="text-center text-gray-400 text-sm mt-4 mb-0 px-4"
      role="note"
      data-scroll-reveal="fade"
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
