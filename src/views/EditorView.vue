<script setup>
import AnimatedDot from '@/components/Editor/AnimatedDot.vue'
import CardDetails from '@/components/Editor/CardDetails.vue'
import CreativeChannelPanel from '@/components/Editor/CreativeChannelPanel.vue'
import PlaylistSection from '@/components/Editor/PlaylistSection.vue'
import ThumbMakerSection from '@/components/Editor/ThumbMakerSection.vue'
import ToolsSection from '@/components/Editor/ToolsSection.vue'
import YouTubeChannelPanel from '@/components/Editor/YouTubeChannelPanel.vue'
import FooterContact from '@/components/FooterContact.vue'
import HeaderCore from '@/components/HeaderCore.vue'
import { useI18n } from '@/composables/useI18n'
import { useHead } from '@unhead/vue'
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
        class="parallax-layer absolute top-20 left-1/4 w-72 h-72 bg-editor/8 rounded-full blur-3xl"
      ></div>
      <div
        class="parallax-layer absolute bottom-10 right-1/4 w-56 h-56 bg-white/5 rounded-full blur-xl"
        style="mix-blend-mode: lighten"
      ></div>
    </div>

    <div class="pt-20 md:pt-24">
      <!-- Canal YouTube -->
      <div v-motion-scroll-visible>
        <you-tube-channel-panel />
      </div>

      <!-- Cabeçalho do portfólio -->
      <div
        class="mx-auto max-w-4xl px-4 pt-10 pb-6 text-center"
        role="region"
        aria-labelledby="portfolio-heading"
      >
        <h1
          v-motion-scroll-visible
          id="portfolio-heading"
          class="text-3xl md:text-6xl font-extrabold text-fg mb-6 drop-shadow-lg"
          :delay="80"
        >
          {{ t('editor.portfolioHeading') }}
        </h1>
        <hr class="w-24 md:w-32 h-1.5 mx-auto bg-editor rounded-full mb-6 shadow-lg border-0" />
        <p
          v-motion-scroll-visible
          class="text-fg-muted tracking-wide text-lg md:text-2xl px-2 md:px-4 font-medium leading-relaxed"
          :delay="120"
        >
          {{ t('editor.portfolioDescription') }}
          <strong class="text-editor font-bold">Adobe Premiere Pro</strong>,
          <strong class="text-editor font-bold">Adobe Photoshop</strong> {{ t('editor.and') }}
          <strong class="text-editor font-bold">After Effects</strong>
        </p>
        <div
          v-motion-scroll-visible
          class="mt-7 rounded-2xl border border-editor/25 bg-editor/10 px-5 py-4 text-sm md:text-base text-fg-muted text-pretty"
          :delay="160"
        >
          {{ t('editor.leadIntro') }}
          <span class="font-semibold text-editor">{{ t('editor.leadIntroHighlight') }}</span>
        </div>
      </div>

      <!-- Playlist do YouTube -->
      <section v-motion-scroll-visible class="mt-4" aria-labelledby="playlist-heading" :delay="200">
        <h2 id="playlist-heading" class="sr-only text-balance">
          {{ t('editor.playlistHeading') }}
        </h2>
        <playlist-section />
      </section>

      <!-- ThumbMaker + CardDetails lado a lado em lg+ -->
      <div class="mx-auto mt-12 max-w-7xl px-4">
        <div class="grid grid-cols-1 gap-6 lg:grid-cols-5">
          <section
            v-motion-scroll-visible
            class="lg:col-span-3"
            aria-labelledby="thumb-maker-heading"
            :delay="280"
          >
            <h2 id="thumb-maker-heading" class="sr-only text-balance">
              {{ t('editor.thumbMakerHeading') }}
            </h2>
            <thumb-maker-section />
          </section>

          <section
            v-motion-scroll-visible
            class="lg:col-span-2"
            aria-labelledby="skills-heading"
            :delay="340"
          >
            <h2 id="skills-heading" class="sr-only text-balance">
              {{ t('editor.skillsHeading') }}
            </h2>
            <card-details />
          </section>
        </div>
      </div>

      <!-- Processo criativo — largura total, componente controla seu próprio layout -->
      <section v-motion-scroll-visible class="mt-12" aria-labelledby="tools-heading" :delay="400">
        <h2 id="tools-heading" class="sr-only text-balance">{{ t('editor.toolsHeading') }}</h2>
        <tools-section />
      </section>

      <!-- Canal criativo — largura total -->
      <section
        v-motion-scroll-visible
        class="mt-4"
        aria-labelledby="creative-channel-heading"
        :delay="460"
      >
        <h2 id="creative-channel-heading" class="sr-only text-balance">
          {{ t('editor.creativeChannelHeading') }}
        </h2>
        <creative-channel-panel />
      </section>

      <!-- CTA de contato -->
      <section
        v-motion-scroll-visible
        class="mx-auto mt-4 mb-6 max-w-4xl px-4"
        aria-labelledby="editor-contact-cta-heading"
        :delay="520"
      >
        <h2 id="editor-contact-cta-heading" class="sr-only">{{ t('editor.footerCtaTitle') }}</h2>
        <div
          class="rounded-2xl border border-editor/35 bg-editor/10 p-5 text-center ring-1 ring-inset ring-editor/20 md:p-7"
        >
          <p class="text-pretty text-base tracking-wide text-fg-muted md:text-lg">
            {{ t('editor.footerCtaLead') }}
            <span class="font-semibold text-editor">{{ t('editor.footerCtaLeadHighlight') }}</span>
          </p>
        </div>
      </section>
    </div>

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
    <footer-contact variant="editor" :cta-text="t('editor.footerCtaButton')" />
  </main>
</template>

<style scoped></style>
