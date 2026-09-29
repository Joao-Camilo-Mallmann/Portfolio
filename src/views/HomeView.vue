<script setup>
import FooterContact from '@/components/FooterContact.vue'
import HeroSection from '@/components/Home/HeroSection.vue'
import StorytellingSection from '@/components/Home/StorytellingSection.vue'
import { useI18n } from '@/composables/useI18n'
import { useSeoHead } from '@/composables/useSeoHead'

const { t } = useI18n()

useSeoHead({
  path: '',
  title: () => t('seo.homeTitle'),
  description: () => t('seo.homeDescription'),
  keywords: () => t('seo.homeKeywords'),
  ogTitle: () => t('seo.ogTitle'),
  ogDescription: () => t('seo.ogDescription'),
  twitterTitle: () => t('seo.twitterTitle'),
  twitterDescription: () => t('seo.twitterDescription'),
})
</script>

<template>
  <main class="page-transition relative overflow-hidden" role="main" aria-label="Portfolio Home">
    <!-- Hero — 100vh immersive split -->
    <hero-section />

    <!-- Storytelling — "Beyond the Code." -->
    <storytelling-section />

    <!-- Skill Cards & Philosophy — Two Worlds, One Vision -->
    <skill-cards-section />

    <!-- Footer de Contato Padrão -->
    <div v-motion-scroll-visible :delay="100">
      <footer-contact primary-color="#ffffff" :cta-text="t('footer.ctaDefault')" />
    </div>
  </main>
</template>
