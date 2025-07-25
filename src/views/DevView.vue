<script>
import BackgroundLights from '@/components/Dev/BackgroundLights.vue'
import FooterContact from '@/components/FooterContact.vue'
import HeaderCore from '@/components/HeaderCore.vue'
import DevStackSection from '@/components/Dev/DevStackSection.vue'
import DevProjectsSection from '@/components/Dev/DevProjectsSection.vue'
import DevProfileCard from '@/components/Dev/DevProfileCard.vue'
export default {
  components: {
    HeaderCore,
    FooterContact,
    BackgroundLights,
    DevStackSection,
    DevProjectsSection,
    DevProfileCard,
  },
}
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

    <footer class="mt-16">
      <FooterContact
        primary-color="#4d91ea"
        cta-text="Vamos criar algo incrível juntos!"
        status-text="Disponível para novos projetos"
      />
    </footer>
  </main>
</template>
<style scoped>

</style>
