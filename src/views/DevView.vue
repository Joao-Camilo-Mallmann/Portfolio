<script setup>
import BackgroundLights from '@/components/Dev/BackgroundLights.vue'
import DevHeroSection from '@/components/Dev/DevHeroSection.vue'
import DevProfileCard from '@/components/Dev/DevProfileCard.vue'
import DevProjectsSection from '@/components/Dev/DevProjectsSection.vue'
import DevStackSection from '@/components/Dev/DevStackSection.vue'
import FooterContact from '@/components/FooterContact.vue'
import HeaderCore from '@/components/HeaderCore.vue'
import { useI18n } from '@/composables/useI18n'
import { useHead } from '@unhead/vue'

const { t } = useI18n()

useHead({
  title: () => t('dev.seoTitle'),
  meta: [
    { name: 'description', content: () => t('dev.seoDescription') },
    { name: 'keywords', content: () => t('dev.seoKeywords') },
    { property: 'og:title', content: () => t('dev.ogTitle') },
    { property: 'og:description', content: () => t('dev.ogDescription') },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://joao-camilo-mallmann.com/dev' },
    {
      property: 'og:image',
      content:
        'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=crop',
    },
    { name: 'twitter:card', content: 'summary_large_image' },
    {
      name: 'twitter:image',
      content:
        'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=crop',
    },
    { name: 'twitter:title', content: () => t('dev.twitterTitle') },
    { name: 'twitter:description', content: () => t('dev.twitterDescription') },
  ],
  link: [{ rel: 'canonical', href: 'https://joao-camilo-mallmann.com/dev' }],
})
</script>

<template>
  <main
    class="page-transition relative overflow-hidden"
    role="main"
    :aria-label="t('dev.ariaLabel')"
  >
    <!-- Luzes de fundo decorativas -->
    <template v-for="i in 12" :key="i">
      <background-lights color="#4d91ea" />
    </template>

    <!-- Orbs decorativos com parallax -->
    <div class="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
      <div class="absolute top-[40%] -left-20 w-80 h-80 bg-dev/6 rounded-full blur-3xl"></div>
      <div class="absolute top-[70%] right-0 w-64 h-64 bg-blue-400/4 rounded-full blur-2xl"></div>
    </div>

    <header-core />

    <!-- Hero Section -->
    <dev-hero-section />

    <!-- Experiência & Formação -->
    <section id="about" v-motion-scroll-visible class="max-w-5xl mx-auto px-4 mb-32" :delay="100">
      <dev-profile-card />
    </section>

    <!-- Stack Tecnológico -->
    <section v-motion-scroll-visible class="max-w-6xl mx-auto px-4 mb-32" :delay="100">
      <dev-stack-section />
    </section>

    <!-- Projetos -->
    <section
      id="projects"
      v-motion-scroll-visible
      aria-labelledby="projects-heading"
      class="max-w-5xl mx-auto px-4 mb-32"
      :delay="100"
    >
      <dev-projects-section />
    </section>

    <!-- Fun text -->
    <p
      v-motion-scroll-visible
      class="text-center text-fg-muted text-sm mt-4 mb-8 px-4 tracking-wide"
      role="note"
      :delay="100"
    >
      {{ t('dev.funText') }}
      <span class="text-dev font-semibold">{{ t('dev.funAchievement') }}</span>
      {{ t('dev.funBadge') }} <br />
      <span class="text-xs text-fg-muted mt-1 block opacity-70">
        {{ t('dev.funPS') }}
      </span>
    </p>

    <!-- Rodapé -->
    <footer-contact primary-color="#4d91ea" :cta-text="t('footer.ctaDefault')" />
  </main>
</template>

<style scoped></style>
