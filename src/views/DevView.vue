<template>
  <div class="page-transition">
    <HeaderCore />

    <div class="text-gray-200 max-w-4xl mx-auto p-4 md:p-8 pt-20 md:pt-24">
      <!-- Aviso de desenvolvimento -->
      <Card class="bg-blue-100/10 border-l-4 border-[#4d91ea] mb-6 md:mb-8">
        <template #content>
          <div class="flex items-start md:items-center gap-3 p-2">
            <i
              class="pi pi-wrench text-[#4d91ea] text-lg md:text-xl mt-1 md:mt-0 animate-spin-slow"
            ></i>
            <div class="text-blue-100 text-sm md:text-base">
              <strong> Em breve!</strong> Estou finalizando esta seção com projetos incríveis.
              Enquanto isso, que tal dar uma olhada no meu
              <a
                href="/editor"
                class="text-[#eaa64d] font-semibold hover:text-[#f0b86e] underline transition-colors"
              >
                portfólio de edição de vídeo </a
              >? Há muito conteúdo legal lá! 😉🎬
            </div>
          </div>
        </template>
      </Card>

      <!-- Título principal -->
      <div class="text-center mb-6 md:mb-8">
        <h1 class="text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4">
          Portfólio de Desenvolvimento
        </h1>
        <p class="text-gray-300 text-base md:text-lg px-4">
          Soluções digitais modernas com Vue.js, TypeScript e as melhores práticas
        </p>
      </div>

      <!-- Apresentação -->
      <Card class="bg-black border border-white/10 mb-6 md:mb-8 text-gray-300 text-center">
        <template #content>
          <p class="text-sm md:text-base leading-6 md:leading-7 text-gray-300 m-0 px-2">
            Como <strong class="text-[#4d91ea]">desenvolvedor frontend</strong>, minha especialidade
            é criar <strong>aplicações web responsivas e performáticas</strong>.<br />
            Utilizo tecnologias modernas como Vue.js, TypeScript e Tailwind CSS para entregar
            experiências digitais excepcionais.
          </p>
        </template>
      </Card>

      <!-- Grid de projetos -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 my-6 md:my-8">
        <!-- Projeto 1 -->
        <CardDetails
          color="#4d91ea"
          title="Sites Institucionais"
          icon="pi-globe"
          :tags="['Vue.js', 'Tailwind CSS', 'SEO']"
          description="Desenvolvimento de sites corporativos modernos com Vue.js, focando em performance, SEO e design responsivo para todas as telas."
        />
        <!-- Projeto 2 -->
        <CardDetails
          color="#4d91ea"
          title="Aplicações Web"
          icon="pi-cog"
          :tags="['Vue 3', 'TypeScript', 'Pinia']"
          description="Criação de sistemas web complexos para automação empresarial, dashboards interativos e gerenciamento de dados em tempo real."
        />
        <!-- Projeto 3 -->
        <CardDetails
          color="#4d91ea"
          title="APIs & Backend"
          icon="pi-server"
          :tags="['Node.js', 'Express', 'JWT']"
          description="Desenvolvimento de APIs e soluções backend robustas, com foco em segurança, validação de dados e documentação clara. Experiência em Node.js, Express e autenticação JWT, seguindo as melhores práticas do mercado."
        />
      </div>

      <!-- Conclusão -->
      <Card class="bg-black border border-white/10 mt-6 md:mt-8 text-gray-300 text-center">
        <template #content>
          <p class="text-sm md:text-base leading-6 md:leading-relaxed text-gray-300 m-0 px-2">
            Meu foco é entregar <strong>código limpo, escalável e bem documentado</strong>. Cada
            projeto é desenvolvido pensando na <strong>experiência do usuário</strong> e na
            <strong>facilidade de manutenção</strong>, garantindo soluções que crescem junto com o
            negócio.
          </p>
        </template>
      </Card>

      <!-- Seção de tecnologias -->
      <Card class="bg-black border border-white/10 mt-6 md:mt-8 text-gray-300">
        <template #header>
          <h2 class="text-lg md:text-xl font-semibold text-white text-center p-3 md:p-4 m-0">
            Stack Tecnológico
          </h2>
        </template>
        <template #content>
          <div class="flex flex-wrap justify-center gap-2 md:gap-4">
            <div
              class="bg-[#4d91ea]/10 border border-[#4d91ea]/30 rounded-lg px-4 py-2 flex items-center gap-2"
            >
              <i class="pi pi-code text-[#4d91ea]"></i>
              <span class="text-white">Vue.js 3</span>
            </div>
            <div
              class="bg-[#4d91ea]/10 border border-[#4d91ea]/30 rounded-lg px-4 py-2 flex items-center gap-2"
            >
              <i class="pi pi-code text-[#4d91ea]"></i>
              <span class="text-white">TypeScript</span>
            </div>
            <div
              class="bg-[#4d91ea]/10 border border-[#4d91ea]/30 rounded-lg px-4 py-2 flex items-center gap-2"
            >
              <i class="pi pi-palette text-[#4d91ea]"></i>
              <span class="text-white">Tailwind CSS</span>
            </div>
            <div
              class="bg-[#4d91ea]/10 border border-[#4d91ea]/30 rounded-lg px-4 py-2 flex items-center gap-2"
            >
              <i class="pi pi-server text-[#4d91ea]"></i>
              <span class="text-white">Node.js</span>
            </div>
          </div>
        </template>
      </Card>
    </div>
  </div>
</template>

<script setup>
import CardDetails from '@/components/CardDetails.vue'
import HeaderCore from '@/components/HeaderCore.vue'
</script>

<style scoped>
.animate-spin-slow {
  animation: spin 4s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
