<script setup>
import BackgroundLights from '@/components/Dev/BackgroundLights.vue'
import FooterContact from '@/components/FooterContact.vue'
import HeaderCore from '@/components/HeaderCore.vue'
import HeroSection from '@/components/Home/HeroSection.vue'
import HomeAboutSection from '@/components/Home/HomeAboutSection.vue'
import HomeContactSection from '@/components/Home/HomeContactSection.vue'
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
  <main
    class="page-transition relative overflow-hidden"
    role="main"
    :aria-label="t('home.ariaLabel')"
  >
    <!-- Luzes de fundo nas duas cores do portfólio -->
    <template v-for="i in 6" :key="`dev-light-${i}`">
      <background-lights color="var(--color-dev)" />
    </template>
    <template v-for="i in 6" :key="`editor-light-${i}`">
      <background-lights color="var(--color-editor)" />
    </template>

    <header-core />

    <hero-section />

    <home-about-section />

    <home-contact-section />

    <footer-contact :cta-text="t('footer.ctaDefault')" />
  </main>
</template>
