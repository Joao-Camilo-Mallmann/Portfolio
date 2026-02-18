<script setup>
import BackgroundLights from '@/components/Dev/BackgroundLights.vue'
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
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: () => t('dev.twitterTitle') },
    { name: 'twitter:description', content: () => t('dev.twitterDescription') },
  ],
  link: [{ rel: 'canonical', href: 'https://joao-camilo-mallmann.com/dev' }],
})
</script>

<template>
  <main
    class="page-transition !bg-gradient-to-b !to-[#4d91ea]/10 relative overflow-hidden"
    role="main"
    :aria-label="t('dev.ariaLabel')"
  >
    <template v-for="i in 20" :key="i">
      <background-lights color="#4d91ea" />
    </template>

    <header-core />

    <!-- Sobre Mim - Layout Compacto -->
    <section id="about" class="max-w-7xl mx-auto px-4 space-y-16 mb-20 mt-32">
      <dev-profile-card />
    </section>

    <section class="max-w-6xl mx-auto px-4 mb-20">
      <dev-stack-section />
    </section>

    <!-- Projetos - Layout em Cards Compactos -->
    <section aria-labelledby="projects-heading" class="w-4/5 mx-auto px-4 mb-16 !z-99">
      <dev-projects-section />
    </section>

    <p class="text-center text-gray-400 text-sm mt-4 mb-0 px-4" role="note">
      {{ t('dev.funText') }}
      <span class="text-[#4d91ea] font-semibold">{{ t('dev.funAchievement') }}</span>
      {{ t('dev.funBadge') }} <br />
      <span class="text-xs text-gray-500 mt-1 block">
        {{ t('dev.funPS') }}
      </span>
    </p>

    <footer class="mt-16">
      <footer-contact primary-color="#4d91ea" :cta-text="t('footer.ctaDefault')" />
    </footer>
  </main>
</template>
<style scoped></style>
