<template>
  <div class="page-transition bg-gradient-to-b to-[#4d91ea]/10 relative overflow-hidden">
    <HeaderCore />

    <div class="text-gray-200 max-w-5xl mx-auto p-4 md:p-8 pt-20 md:pt-24">
      <Card class="bg-blue-100/10 border-l-4 border-[#4d91ea] mb-6 md:mb-8">
        <template #content>
          <div class="flex items-start md:items-center gap-3 p-2">
            <i class="pi pi-wrench text-[#4d91ea] text-lg md:text-xl mt-1 md:mt-0 animate-spin"></i>
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
      <!-- Título principal com animação -->
      <div class="text-center mb-8 md:mb-12">
        <h1 class="text-3xl md:text-5xl font-bold text-white mb-4 animate-fade-in">
          Portfólio de Desenvolvimento
        </h1>
        <div class="flex justify-center mb-4">
          <div class="h-1 w-24 bg-gradient-to-r from-[#4d91ea] to-[#667eea] rounded-full"></div>
        </div>
        <p class="text-gray-300 text-lg md:text-xl px-4 animate-slide-up">
          Desenvolvedor Frontend | Vue.js | TypeScript | UX/UI
        </p>
      </div>

      <!-- Sobre -->
      <CardDetails
        icon="pi-user"
        color="#4d91ea"
        title="Sobre Mim"
        description="Desenvolvedor Frontend apaixonado por tecnologia. Com experiência prática em desenvolvimento de sites e aplicações web, meu foco é transformar ideias em interfaces intuitivas, eficientes e visualmente atraentes.<br>
    Sou comunicativo e curioso, sempre buscando entender os desafios do projeto de forma abrangente, propondo soluções criativas pensando na melhor experiência do usuário."
      />

      <!-- Principais Projetos -->
      <Card class="border border-white/10 mb-8 text-gray-300 animate-slide-up">
        <template #header>
          <div class="flex items-center justify-center gap-3 p-4">
            <i class="pi pi-folder text-[#4d91ea] text-xl"></i>
            <h2 class="text-xl font-semibold text-white m-0">Principais Projetos</h2>
          </div>
        </template>
        <template #content>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <!-- Projeto 1: Este Portfolio -->
            <div
              class="bg-gradient-to-br from-[#4d91ea]/10 to-[#667eea]/10 border border-[#4d91ea]/30 rounded-lg p-6 hover:scale-105 transition-all duration-300"
            >
              <div class="flex items-center gap-3 mb-4">
                <div class="w-12 h-12 bg-[#4d91ea]/20 rounded-lg flex items-center justify-center">
                  <i class="pi pi-user text-[#4d91ea] text-xl"></i>
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-white">Portfolio Pessoal</h3>
                  <div class="flex gap-2 mt-1">
                    <span class="text-xs bg-[#4fc08d]/20 text-[#4fc08d] px-2 py-1 rounded"
                      >Vue.js 3</span
                    >
                    <span class="text-xs bg-[#06b6d4]/20 text-[#06b6d4] px-2 py-1 rounded"
                      >Tailwind</span
                    >
                  </div>
                </div>
              </div>
              <p class="text-gray-300 text-sm mb-4">
                Site responsivo desenvolvido com Vue.js 3, PrimeVue e Tailwind CSS. Inclui animações
                customizadas, roteamento SPA e design system consistente.
              </p>
              <div class="flex gap-2">
                <a
                  href="https://github.com/Joao-Camilo-Mallmann/Portfolio"
                  target="_blank"
                  class="text-[#4d91ea] hover:text-[#667eea] transition-colors"
                >
                  <i class="pi pi-github text-lg"></i>
                </a>
                <a href="/" class="text-[#4d91ea] hover:text-[#667eea] transition-colors">
                  <i class="pi pi-external-link text-lg"></i>
                </a>
              </div>
            </div>

            <!-- Projeto 2: Sistema Web Empresarial -->
            <div
              class="bg-gradient-to-br from-[#339933]/10 to-[#4fc08d]/10 border border-[#339933]/30 rounded-lg p-6 hover:scale-105 transition-all duration-300"
            >
              <div class="flex items-center gap-3 mb-4">
                <div class="w-12 h-12 bg-[#339933]/20 rounded-lg flex items-center justify-center">
                  <i class="pi pi-building text-[#339933] text-xl"></i>
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-white">Dashboard Empresarial</h3>
                  <div class="flex gap-2 mt-1">
                    <span class="text-xs bg-[#3178c6]/20 text-[#3178c6] px-2 py-1 rounded"
                      >TypeScript</span
                    >
                    <span class="text-xs bg-[#339933]/20 text-[#339933] px-2 py-1 rounded"
                      >Node.js</span
                    >
                  </div>
                </div>
              </div>
              <p class="text-gray-300 text-sm mb-4">
                Sistema completo para gestão empresarial com dashboards interativos, relatórios em
                tempo real e autenticação segura. Backend em Node.js.
              </p>
              <div class="flex gap-2">
                <span class="text-gray-500">
                  <i class="pi pi-lock text-lg"></i>
                </span>
                <span class="text-xs text-gray-400">Projeto Privado</span>
              </div>
            </div>

            <!-- Projeto 3: Site Institucional -->
            <div
              class="bg-gradient-to-br from-[#21759b]/10 to-[#1976d2]/10 border border-[#21759b]/30 rounded-lg p-6 hover:scale-105 transition-all duration-300"
            >
              <div class="flex items-center gap-3 mb-4">
                <div class="w-12 h-12 bg-[#21759b]/20 rounded-lg flex items-center justify-center">
                  <i class="pi pi-globe text-[#21759b] text-xl"></i>
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-white">Site Corporativo</h3>
                  <div class="flex gap-2 mt-1">
                    <span class="text-xs bg-[#21759b]/20 text-[#21759b] px-2 py-1 rounded"
                      >WordPress</span
                    >
                    <span class="text-xs bg-[#777bb4]/20 text-[#777bb4] px-2 py-1 rounded"
                      >PHP</span
                    >
                  </div>
                </div>
              </div>
              <p class="text-gray-300 text-sm mb-4">
                Site institucional moderno com CMS WordPress customizado, otimizado para SEO e
                performance, design responsivo e integração com APIs.
              </p>
              <div class="flex gap-2">
                <span class="text-gray-500">
                  <i class="pi pi-eye-slash text-lg"></i>
                </span>
                <span class="text-xs text-gray-400">Em Desenvolvimento</span>
              </div>
            </div>
          </div>
        </template>
      </Card>

      <!-- Conclusão -->
      <FooterContact
        primary-color="#4d91ea"
        cta-text="Vamos criar algo incrível juntos!"
        status-text="Disponível para novos projetos"
      />
    </div>
  </div>
</template>

<script setup>
import HeaderCore from '@/components/HeaderCore.vue'
import CardDetails from '@/components/CardDetails.vue'
import FooterContact from '@/components/FooterContact.vue'
</script>

<style scoped>
/* Estilos específicos do DevView podem ser adicionados aqui se necessário */
</style>
