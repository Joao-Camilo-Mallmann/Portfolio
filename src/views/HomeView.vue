<script setup>
import FooterContact from '@/components/FooterContact.vue'
import HeroSection from '@/components/Home/HeroSection.vue'
import StorytellingSection from '@/components/Home/StorytellingSection.vue'
import { useI18n } from '@/composables/useI18n'
import { useHead } from '@unhead/vue'
import { computed } from 'vue'

const { t, locale } = useI18n()

useHead({
  title: computed(() => t('seo.homeTitle')),
  meta: [
    {
      name: 'description',
      content: computed(() => t('seo.homeDescription')),
    },
    {
      name: 'keywords',
      content: computed(() => t('seo.homeKeywords')),
    },
    // Open Graph
    {
      property: 'og:title',
      content: computed(() => t('seo.ogTitle')),
    },
    {
      property: 'og:description',
      content: computed(() => t('seo.ogDescription')),
    },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://joao-camilo-mallmann.com/' },
    {
      property: 'og:image',
      content:
        'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=crop',
    },
    {
      property: 'og:locale',
      content: computed(() => (locale.value === 'pt-BR' ? 'pt_BR' : 'en_US')),
    },
    // Twitter
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: computed(() => t('seo.twitterTitle')) },
    {
      name: 'twitter:description',
      content: computed(() => t('seo.twitterDescription')),
    },
  ],
  link: [{ rel: 'canonical', href: 'https://joao-camilo-mallmann.com/' }],
})
</script>

<template>
  <main class="page-transition relative overflow-hidden" role="main" aria-label="Portfolio Home">
    <!-- Hero — 100vh immersive split -->
    <hero-section />

    <!-- Storytelling — "Beyond the Code." -->
    <storytelling-section />

    <!-- Footer de Contato Padrão -->
    <div v-motion-scroll-visible :delay="100">
      <footer-contact primary-color="#ffffff" :cta-text="t('footer.ctaDefault')" />
    </div>
  </main>
</template>
