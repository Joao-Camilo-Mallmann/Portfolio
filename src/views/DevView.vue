<template>
  <div class="page-transition">
    <HeaderCore />
    <div class="text-gray-200 max-w-4xl mx-auto p-4 md:p-8 pt-20 md:pt-24">
      <!-- Aviso de desenvolvimento -->
      <Card class="bg-yellow-100/10 border-l-4 border-yellow-500 mb-6 md:mb-8">
        <template #content>
          <div class="flex items-start md:items-center gap-3 p-2">
            <i
              class="pi pi-exclamation-triangle text-yellow-500 text-lg md:text-xl mt-1 md:mt-0"
            ></i>
            <span class="text-yellow-100 text-sm md:text-base">
              <strong>🚧 Página em Construção!</strong> Este portfólio de desenvolvimento está sendo
              criado. Em breve, você encontrará aqui projetos reais e detalhados.
            </span>
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
      <Card class="bg-slate-800/80 border border-white/10 mb-6 md:mb-8 text-gray-300 text-center">
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
        <Card
          class="bg-slate-800/80 border-l-4 border-[#4d91ea] transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl text-gray-300"
        >
          <template #header>
            <div class="flex items-center gap-3 p-4">
              <i class="pi pi-globe text-[#4d91ea] text-2xl"></i>
              <h3 class="text-lg font-semibold text-white m-0">Sites Institucionais</h3>
            </div>
          </template>
          <template #content>
            <p class="text-gray-300 leading-relaxed mb-4 m-0">
              Desenvolvimento de sites corporativos modernos com Vue.js, focando em performance, SEO
              e design responsivo para todas as telas.
            </p>
            <div class="flex flex-wrap gap-2">
              <span class="px-3 py-1 bg-[#4d91ea]/20 text-[#4d91ea] rounded-full text-sm"
                >Vue.js</span
              >
              <span class="px-3 py-1 bg-[#4d91ea]/20 text-[#4d91ea] rounded-full text-sm"
                >Tailwind CSS</span
              >
              <span class="px-3 py-1 bg-[#4d91ea]/20 text-[#4d91ea] rounded-full text-sm">SEO</span>
            </div>
          </template>
        </Card>

        <!-- Projeto 2 -->
        <Card
          class="bg-slate-800/80 border-l-4 border-[#4d91ea] transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl text-gray-300"
        >
          <template #header>
            <div class="flex items-center gap-3 p-4">
              <i class="pi pi-cog text-[#4d91ea] text-2xl"></i>
              <h3 class="text-lg font-semibold text-white m-0">Aplicações Web</h3>
            </div>
          </template>
          <template #content>
            <p class="text-gray-300 leading-relaxed mb-4 m-0">
              Criação de sistemas web complexos para automação empresarial, dashboards interativos e
              gerenciamento de dados em tempo real.
            </p>
            <div class="flex flex-wrap gap-2">
              <span class="px-3 py-1 bg-[#4d91ea]/20 text-[#4d91ea] rounded-full text-sm"
                >Vue 3</span
              >
              <span class="px-3 py-1 bg-[#4d91ea]/20 text-[#4d91ea] rounded-full text-sm"
                >TypeScript</span
              >
              <span class="px-3 py-1 bg-[#4d91ea]/20 text-[#4d91ea] rounded-full text-sm"
                >Pinia</span
              >
            </div>
          </template>
        </Card>

        <!-- Projeto 3 -->
        <Card
          class="bg-slate-800/80 border-l-4 border-[#4d91ea] transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl text-gray-300"
        >
          <template #header>
            <div class="flex items-center gap-3 p-4">
              <i class="pi pi-server text-[#4d91ea] text-2xl"></i>
              <h3 class="text-lg font-semibold text-white m-0">APIs & Backend</h3>
            </div>
          </template>
          <template #content>
            <p class="text-gray-300 leading-relaxed mb-4 m-0">
              Desenvolvimento de APIs RESTful robustas com Node.js, incluindo autenticação segura,
              validação de dados e documentação completa.
            </p>
            <div class="flex flex-wrap gap-2">
              <span class="px-3 py-1 bg-[#4d91ea]/20 text-[#4d91ea] rounded-full text-sm"
                >Node.js</span
              >
              <span class="px-3 py-1 bg-[#4d91ea]/20 text-[#4d91ea] rounded-full text-sm"
                >Express</span
              >
              <span class="px-3 py-1 bg-[#4d91ea]/20 text-[#4d91ea] rounded-full text-sm">JWT</span>
            </div>
          </template>
        </Card>
      </div>

      <!-- Conclusão -->
      <Card class="bg-slate-800/80 border border-white/10 mt-6 md:mt-8 text-gray-300 text-center">
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
      <Card class="bg-slate-800/80 border border-white/10 mt-6 md:mt-8 text-gray-300">
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
import HeaderCore from '@/components/HeaderCore.vue'
// ...existing code...
</script>
