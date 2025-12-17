<script setup>
import BackgroundLights from '@/components/Dev/BackgroundLights.vue'
import DevProfileCard from '@/components/Dev/DevProfileCard.vue'
import DevProjectsSection from '@/components/Dev/DevProjectsSection.vue'
import DevStackSection from '@/components/Dev/DevStackSection.vue'
import FooterContact from '@/components/FooterContact.vue'
import HeaderCore from '@/components/HeaderCore.vue'
import { useHead } from '@unhead/vue'

useHead({
  title: 'Desenvolvedor',
  meta: [
    {
      name: 'description',
      content:
        'Portfólio de desenvolvimento de João Camilo Mallmann. Especialista em Vue.js, JavaScript, TypeScript e desenvolvimento web moderno. Projetos, stack tecnológico e experiência profissional.',
    },
    {
      name: 'keywords',
      content:
        'desenvolvedor frontend, Vue.js, JavaScript, TypeScript, desenvolvimento web, programador Brasil, portfolio desenvolvedor',
    },
    // Open Graph
    { property: 'og:title', content: 'João Camilo Mallmann - Desenvolvedor Frontend' },
    {
      property: 'og:description',
      content:
        'Especialista em Vue.js e JavaScript. Confira meus projetos e experiência em desenvolvimento web moderno.',
    },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://joao-camilo-mallmann.com/dev' },
    // Twitter
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'João Camilo Mallmann - Desenvolvedor Frontend' },
    {
      name: 'twitter:description',
      content: 'Especialista em Vue.js e JavaScript. Confira meus projetos de desenvolvimento.',
    },
  ],
  link: [{ rel: 'canonical', href: 'https://joao-camilo-mallmann.com/dev' }],
})
</script>

<template>
  <main
    class="page-transition !bg-gradient-to-b !to-[#4d91ea]/10 relative overflow-hidden"
    role="main"
    aria-label="Portfólio de Desenvolvimento"
  >
    <template v-for="i in 20" :key="i">
      <BackgroundLights color="#4d91ea" />
    </template>

    <HeaderCore />

    <!-- Sobre Mim - Layout Compacto -->
    <section id="about" class="max-w-7xl mx-auto px-4 space-y-16 mb-20 mt-32">
      <DevProfileCard />
    </section>

    <section class="max-w-6xl mx-auto px-4 mb-20">
      <DevStackSection />
    </section>

    <!-- Projetos - Layout em Cards Compactos -->
    <section aria-labelledby="projects-heading" class="w-4/5 mx-auto px-4 mb-16 !z-99">
      <DevProjectsSection />
    </section>

    <p class="text-center text-gray-400 text-sm mt-4 mb-0 px-4" role="note">
      🎉 Parabéns! Você sobreviveu ao meu portfólio sem crashar!
      <span class="text-[#4d91ea] font-semibold">Achievement Unlocked:</span>
      "Visitante Corajoso" 😎 <br />
      <span class="text-xs text-gray-500 mt-1 block">
        PS: Se encontrou algum bug, foi feature não documentada 🐛✨
      </span>
    </p>

    <footer class="mt-16">
      <FooterContact
        primary-color="#4d91ea"
        cta-text="Vamos criar algo incrível juntos!"
        status-text="Disponível para novos projetos"
      />
    </footer>
  </main>
</template>
<style scoped></style>
