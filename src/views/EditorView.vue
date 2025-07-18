<template>
  <HeaderCore />
  <div class="text-gray-200 max-w-4xl mx-auto p-4 md:p-8 pt-20 md:pt-24">
    <!-- Aviso de desenvolvimento -->
    <Card class="bg-yellow-100/10 border-l-4 border-yellow-500 mb-6 md:mb-8">
      <template #content>
        <div class="flex items-start md:items-center gap-3 p-2">
          <i class="pi pi-exclamation-triangle text-yellow-500 text-lg md:text-xl mt-1 md:mt-0"></i>
          <span class="text-yellow-100 text-sm md:text-base">
            <strong>🎬 Portfólio em Edição!</strong> Esta seção está sendo finalizada. Em breve,
            você verá aqui meus trabalhos completos de edição e motion design.
          </span>
        </div>
      </template>
    </Card>

    <!-- Título principal -->
    <div class="text-center mb-6 md:mb-8">
      <h1 class="text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4">Portfólio de Edição</h1>
      <p class="text-gray-300 text-base md:text-lg px-4">
        Criação audiovisual profissional com Adobe Premiere Pro e After Effects
      </p>
    </div>

    <!-- Apresentação -->
    <Card class="bg-slate-800/80 border border-white/10 mb-6 md:mb-8 text-gray-300 text-center">
      <template #content>
        <p class="text-sm md:text-base leading-6 md:leading-7 text-gray-300 m-0 px-2">
          Como <strong class="text-[#eaa64d]">editor de vídeo e motion designer</strong>, transformo
          ideias em <strong>conteúdo audiovisual impactante</strong>.<br />
          Especializado em produção completa: do conceito à finalização, criando narrativas visuais
          que conectam e engajam.
        </p>
      </template>
    </Card>

    <!-- Grid de projetos -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 my-6 md:my-8">
      <!-- Projeto 1 -->
      <Card
        class="bg-slate-800/80 border-l-4 border-[#eaa64d] transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl text-gray-300"
      >
        <template #header>
          <div class="flex items-center gap-3 p-4">
            <i class="pi pi-building text-[#eaa64d] text-2xl"></i>
            <h3 class="text-lg font-semibold text-white m-0">Vídeos Institucionais</h3>
          </div>
        </template>
        <template #content>
          <p class="text-gray-300 leading-relaxed mb-4 m-0">
            Produção completa de vídeos corporativos, desde o roteiro até a pós-produção, criando
            peças que comunicam valores e fortalecem marcas.
          </p>
          <div class="flex flex-wrap gap-2">
            <span class="px-3 py-1 bg-[#eaa64d]/20 text-[#eaa64d] rounded-full text-sm"
              >Premiere Pro</span
            >
            <span class="px-3 py-1 bg-[#eaa64d]/20 text-[#eaa64d] rounded-full text-sm"
              >After Effects</span
            >
            <span class="px-3 py-1 bg-[#eaa64d]/20 text-[#eaa64d] rounded-full text-sm">4K</span>
          </div>
        </template>
      </Card>

      <!-- Projeto 2 -->
      <Card
        class="bg-slate-800/80 border-l-4 border-[#eaa64d] transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl text-gray-300"
      >
        <template #header>
          <div class="flex items-center gap-3 p-4">
            <i class="pi pi-mobile text-[#eaa64d] text-2xl"></i>
            <h3 class="text-lg font-semibold text-white m-0">Motion Graphics</h3>
          </div>
        </template>
        <template #content>
          <p class="text-gray-300 leading-relaxed mb-4 m-0">
            Criação de animações e elementos gráficos para redes sociais, campanhas publicitárias e
            apresentações corporativas com alta qualidade visual.
          </p>
          <div class="flex flex-wrap gap-2">
            <span class="px-3 py-1 bg-[#eaa64d]/20 text-[#eaa64d] rounded-full text-sm"
              >After Effects</span
            >
            <span class="px-3 py-1 bg-[#eaa64d]/20 text-[#eaa64d] rounded-full text-sm"
              >Photoshop</span
            >
            <span class="px-3 py-1 bg-[#eaa64d]/20 text-[#eaa64d] rounded-full text-sm"
              >Social Media</span
            >
          </div>
        </template>
      </Card>

      <!-- Projeto 3 -->
      <Card
        class="bg-slate-800/80 border-l-4 border-[#eaa64d] transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl text-gray-300"
      >
        <template #header>
          <div class="flex items-center gap-3 p-4">
            <i class="pi pi-youtube text-[#eaa64d] text-2xl"></i>
            <h3 class="text-lg font-semibold text-white m-0">Conteúdo Digital</h3>
          </div>
        </template>
        <template #content>
          <p class="text-gray-300 leading-relaxed mb-4 m-0">
            Edição de conteúdo para YouTube e plataformas digitais, incluindo thumbnails
            personalizadas, intros dinâmicas e efeitos visuais envolventes.
          </p>
          <div class="flex flex-wrap gap-2">
            <span class="px-3 py-1 bg-[#eaa64d]/20 text-[#eaa64d] rounded-full text-sm"
              >Premiere Pro</span
            >
            <span class="px-3 py-1 bg-[#eaa64d]/20 text-[#eaa64d] rounded-full text-sm"
              >Photoshop</span
            >
            <span class="px-3 py-1 bg-[#eaa64d]/20 text-[#eaa64d] rounded-full text-sm"
              >YouTube</span
            >
          </div>
        </template>
      </Card>
    </div>

    <!-- Conclusão -->
    <Card class="bg-slate-800/80 border border-white/10 mt-6 md:mt-8 text-gray-300 text-center">
      <template #content>
        <p class="text-sm md:text-base leading-6 md:leading-relaxed text-gray-300 m-0 px-2">
          Cada projeto é uma oportunidade de contar uma <strong>história única</strong>. Combino
          <strong>técnica apurada</strong> com <strong>sensibilidade artística</strong> para criar
          conteúdo que não apenas informa, mas emociona e inspira o público-alvo.
        </p>
      </template>
    </Card>

    <!-- Seção de ferramentas -->
    <Card class="bg-slate-800/80 border border-white/10 mt-6 md:mt-8 text-gray-300">
      <template #header>
        <h2 class="text-lg md:text-xl font-semibold text-white text-center p-3 md:p-4 m-0">
          Arsenal Criativo
        </h2>
      </template>
      <template #content>
        <div class="flex flex-wrap justify-center gap-2 md:gap-4">
          <div
            class="bg-[#eaa64d]/10 border border-[#eaa64d]/30 rounded-lg px-4 py-2 flex items-center gap-2"
          >
            <i class="pi pi-video text-[#eaa64d]"></i>
            <span class="text-white">Adobe Premiere Pro</span>
          </div>
          <div
            class="bg-[#eaa64d]/10 border border-[#eaa64d]/30 rounded-lg px-4 py-2 flex items-center gap-2"
          >
            <i class="pi pi-palette text-[#eaa64d]"></i>
            <span class="text-white">Adobe Photoshop</span>
          </div>
          <div
            class="bg-[#eaa64d]/10 border border-[#eaa64d]/30 rounded-lg px-4 py-2 flex items-center gap-2"
          >
            <i class="pi pi-sparkles text-[#eaa64d]"></i>
            <span class="text-white">After Effects</span>
          </div>
          <div
            class="bg-[#eaa64d]/10 border border-[#eaa64d]/30 rounded-lg px-4 py-2 flex items-center gap-2"
          >
            <i class="pi pi-camera text-[#eaa64d]"></i>
            <span class="text-white">DaVinci Resolve</span>
          </div>
        </div>
      </template>
    </Card>
  </div>
</template>

<script setup>
import HeaderCore from '@/components/HeaderCore.vue'
// ...existing code...
</script>
