<template>
  <main
    class="page-transition bg-gradient-to-b to-[#4d91ea]/10 relative overflow-hidden"
    role="main"
    aria-label="Portfólio de Desenvolvimento"
  >
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
      <header class="text-center mb-8 md:mb-12">
        <h1 class="text-3xl md:text-5xl font-bold text-white mb-4 animate-fade-in">
          Portfólio de Desenvolvimento
        </h1>
        <div class="flex justify-center mb-4">
          <div class="h-1 w-24 bg-gradient-to-r from-[#4d91ea] to-[#667eea] rounded-full"></div>
        </div>
        <p class="text-gray-300 text-lg md:text-xl px-4 animate-slide-up">
          Desenvolvedor Frontend | Vue.js | TypeScript | UX/UI
        </p>
      </header>

      <!-- Seção Sobre -->
      <section aria-labelledby="about-heading">
        <h2 id="about-heading" class="sr-only">Sobre Mim</h2>
        <CardDetails
          icon="pi-user"
          color="#4d91ea"
          title="Sobre Mim"
          description="Desenvolvedor Frontend apaixonado por tecnologia. Com experiência prática em desenvolvimento de sites e aplicações web, meu foco é transformar ideias em interfaces intuitivas, eficientes e visualmente atraentes.<br><br>
      Sou comunicativo e curioso, sempre buscando entender os desafios do projeto de forma abrangente, propondo soluções criativas pensando na melhor experiência do usuário."
        />
      </section>

      <!-- Principais Projetos -->
      <section aria-labelledby="projects-heading">
        <Card class="border border-white/10 mb-8 text-gray-300 animate-slide-up">
          <template #header>
            <header class="flex items-center justify-center gap-3 p-4">
              <i class="pi pi-folder text-[#4d91ea] text-xl" aria-hidden="true"></i>
              <h2 id="projects-heading" class="text-xl font-semibold text-white m-0">
                Principais Projetos
              </h2>
            </header>
          </template>
          <template #content>
            <div class="">
              <Card
                class="!bg-gradient-to-br !from-[#e4c7aa]/10 !to-[#d4b896]/10 !border !border-[#e4c7aa]/30 hover:scale-[1.02] transition-all duration-300"
              >
                <template #content>
                  <div class="flex flex-col gap-4">
                    <!-- Imagem do projeto -->
                    <div
                      class="w-full h-48 bg-gradient-to-br from-[#e4c7aa]/20 to-[#d4b896]/20 rounded-lg flex items-center justify-center overflow-hidden"
                    >
                      <Image
                        src="/img/vimasi.png"
                        alt="Screenshot do site Vimasi Vedações"
                        class="max-h-90 w-auto object-contain"
                        style="max-width: 100%"
                      />
                    </div>

                    <!-- Conteúdo do projeto -->
                    <div class="flex flex-col gap-3">
                      <div class="flex items-center justify-between">
                        <h3 class="text-xl font-semibold text-white">Vimasi Vedações 🔧</h3>
                        <span
                          class="inline-flex items-center gap-1 text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded-full"
                        >
                          <i class="pi pi-globe text-xs" aria-hidden="true"></i>
                          Público
                        </span>
                      </div>

                      <!-- Tags de tecnologia -->
                      <div class="flex flex-wrap gap-2">
                        <Chip label="No Code" class="text-xs !bg-[#e4c7aa]/20 !text-[#e4c7aa]" />
                        <Chip label="Canvas" class="text-xs !bg-[#ff6b35]/20 !text-[#ff6b35]" />
                        <Chip label="Hospedagem" class="text-xs !bg-[#4ecdc4]/20 !text-[#4ecdc4]" />
                        <Chip label="Domínio" class="text-xs !bg-[#45b7d1]/20 !text-[#45b7d1]" />
                      </div>

                      <!-- Descrição -->
                      <p class="text-gray-300 text-sm leading-relaxed">
                        Site desenvolvido para um amigo especializado em gaxetas, anéis de vedação e
                        reparos hidráulicos
                        <br /><br />
                        <strong>Foco na experiência de produção:</strong> Este projeto me
                        proporcionou experiência valiosa em: <br />• Desenvolvimento com plataforma
                        No Code (Canvas) <br />• Configuração e gerenciamento de domínio <br />•
                        Deploy e hospedagem em produção <br />• Otimização para performance e SEO
                      </p>

                      <!-- Links do projeto -->
                      <div class="flex gap-3 pt-2">
                        <Button
                          label="Visitar Site"
                          icon="pi pi-external-link"
                          size="small"
                          @click="() => window.open('https://vimasi-vedacoes.com/', '_blank')"
                        />
                      </div>

                      <!-- Status de desenvolvimento -->
                      <div class="flex items-center justify-between pt-2">
                        <div class="flex items-center gap-2 text-gray-400 text-sm">
                          <i class="pi pi-check-circle text-green-400" aria-hidden="true"></i>
                          <span>Projeto Concluído</span>
                        </div>
                        <div class="flex items-center gap-2 text-xs text-gray-500">
                          <i class="pi pi-calendar text-xs" aria-hidden="true"></i>
                          <span>2024</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </template>
              </Card>

              <Card
                class="!bg-gradient-to-br !from-[#4285f4]/10 !to-[#0066ff]/10 !border !border-[#4285f4]/30 hover:scale-[1.02] hover:shadow-xl transition-all duration-300 group"
              >
                <template #content>
                  <div class="flex flex-col gap-4">
                    <!-- Imagem do projeto -->
                    <div
                      class="w-full h-48 bg-gradient-to-br from-[#4285f4]/20 to-[#0066ff]/20 rounded-lg flex items-center justify-center overflow-hidden relative group-hover:from-[#4285f4]/30 group-hover:to-[#0066ff]/30 transition-all duration-300"
                    >
                      <Image
                        src="/img/destinos.png"
                        alt="Screenshot do site Vimasi Vedações"
                        class="max-h-100 w-auto object-contain"
                        style="max-width: 100%"
                      />
                      <!-- Efeito de brilho no hover -->
                    </div>

                    <!-- Conteúdo do projeto -->
                    <div class="flex flex-col gap-3">
                      <div class="flex items-center justify-between">
                        <h3
                          class="text-xl font-bold text-white group-hover:text-[#4285f4] transition-colors duration-300"
                        >
                          Travel Mate - Agência de Turismo
                        </h3>
                        <span
                          class="inline-flex items-center gap-1 text-xs bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-400 px-3 py-1.5 rounded-full border border-green-400/20 backdrop-blur-sm"
                        >
                          <i class="pi pi-globe text-xs" aria-hidden="true"></i>
                          Público
                        </span>
                      </div>

                      <!-- Tags de tecnologia -->
                      <div class="flex flex-wrap gap-2">
                        <Chip
                          label="Node.js"
                          class="text-xs !bg-gradient-to-r !from-[#43853d]/20 !to-[#43853d]/10 !text-[#43853d] !border !border-[#43853d]/20 hover:scale-105 transition-transform duration-200"
                        />
                        <Chip
                          label="Express.js"
                          class="text-xs !bg-gradient-to-r !from-[#000000]/20 !to-[#333333]/10 !text-white !border !border-gray-600/20 hover:scale-105 transition-transform duration-200"
                        />
                        <Chip
                          label="SQLite"
                          class="text-xs !bg-gradient-to-r !from-[#07405e]/20 !to-[#07405e]/10 !text-[#38bdf8] !border !border-[#07405e]/20 hover:scale-105 transition-transform duration-200"
                        />
                        <Chip
                          label="TailwindCSS"
                          class="text-xs !bg-gradient-to-r !from-[#38b2ac]/20 !to-[#38b2ac]/10 !text-[#38b2ac] !border !border-[#38b2ac]/20 hover:scale-105 transition-transform duration-200"
                        />
                        <Chip
                          label="Railway"
                          class="text-xs !bg-gradient-to-r !from-[#0066ff]/20 !to-[#0066ff]/10 !text-[#0066ff] !border !border-[#0066ff]/20 hover:scale-105 transition-transform duration-200"
                        />
                      </div>

                      <!-- Descrição -->
                      <div
                        class="bg-gradient-to-r from-slate-800/30 to-slate-900/30 rounded-lg p-4 border border-slate-700/30"
                      >
                        <p class="text-gray-300 text-sm leading-relaxed">
                          Plataforma full-stack para agência de turismo com interface moderna e
                          responsiva. Backend desenvolvido em
                          <span class="text-[#43853d] font-medium">Node.js</span> com
                          <span class="text-white font-medium">Express.js</span>, banco de dados
                          <span class="text-[#38bdf8] font-medium">SQLite</span> e frontend
                          estilizado com
                          <span class="text-[#38b2ac] font-medium">TailwindCSS</span>. Hospedado na
                          <span class="text-[#0066ff] font-medium">Railway</span> com deploy
                          automático.
                        </p>
                        <div class="mt-3 pt-3 border-t border-slate-600/30">
                          <p class="text-sm">
                            <span class="text-[#4285f4] font-semibold">🌟 Funcionalidades:</span>
                            <span class="text-gray-400"
                              >API RESTful completa, galeria de destinos, sistema de pacotes
                              turísticos, interface responsiva, health check endpoint.</span
                            >
                          </p>
                        </div>
                      </div>

                      <!-- Links do projeto -->
                      <div class="flex gap-3 pt-2">
                        <Button
                          label="Ver Site"
                          icon="pi pi-external-link"
                          size="small"
                          @click="
                            () =>
                              window.open('https://web-production-758be.up.railway.app/', '_blank')
                          "
                        />
                        <Button
                          label="Código"
                          icon="pi pi-github"
                          size="small"
                          severity="secondary"
                          outlined
                          class="!text-gray-400 hover:!text-white !border-gray-600/40 hover:!border-white/40 transition-all duration-200"
                          @click="
                            () =>
                              window.open('https://github.com/JoaoCamiloMallmann/back', '_blank')
                          "
                        />
                      </div>

                      <!-- Status de desenvolvimento -->
                      <div
                        class="flex items-center justify-between pt-3 border-t border-slate-700/30"
                      >
                        <div class="flex items-center gap-2 text-gray-400 text-sm">
                          <i class="pi pi-check-circle text-green-400" aria-hidden="true"></i>
                          <span>Projeto Concluído</span>
                        </div>
                        <div class="flex items-center gap-2 text-xs text-gray-500">
                          <i class="pi pi-calendar text-xs" aria-hidden="true"></i>
                          <span>2024</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </template>
              </Card>

              <Card
                class="!bg-gradient-to-br !from-[#60a5fa]/10 !to-[#3b82f6]/10 !border !border-[#60a5fa]/30 hover:scale-[1.02] hover:shadow-xl transition-all duration-300 group"
              >
                <template #content>
                  <div class="flex flex-col gap-4">
                    <!-- Imagem do projeto -->
                    <div
                      class="w-full h-48 bg-gradient-to-br from-[#60a5fa]/20 to-[#3b82f6]/20 rounded-lg flex items-center justify-center overflow-hidden relative group-hover:from-[#60a5fa]/30 group-hover:to-[#3b82f6]/30 transition-all duration-300"
                    >
                      <div class="text-center relative z-10">
                        <div class="relative">
                          <i
                            class="pi pi-cog text-[#60a5fa] text-5xl mb-3 animate-spin-slow"
                            aria-hidden="true"
                          ></i>
                        </div>
                        <p class="text-[#60a5fa] text-sm font-medium">Sistema em Desenvolvimento</p>
                        <div class="mt-2 flex justify-center gap-1">
                          <div class="w-2 h-2 bg-[#60a5fa]/50 rounded-full animate-pulse"></div>
                          <div
                            class="w-2 h-2 bg-[#60a5fa]/50 rounded-full animate-pulse"
                            style="animation-delay: 0.2s"
                          ></div>
                          <div
                            class="w-2 h-2 bg-[#60a5fa]/50 rounded-full animate-pulse"
                            style="animation-delay: 0.4s"
                          ></div>
                        </div>
                      </div>
                      <!-- Efeito de brilho no hover -->
                      <div
                        class="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"
                      ></div>
                    </div>

                    <!-- Conteúdo do projeto -->
                    <div class="flex flex-col gap-3">
                      <div class="flex items-center justify-between">
                        <h3
                          class="text-xl font-bold text-white group-hover:text-[#60a5fa] transition-colors duration-300"
                        >
                          SMU - Sistema de Mobilidade Urbana
                        </h3>
                      </div>

                      <!-- Tags de tecnologia -->
                      <div class="flex flex-wrap gap-2">
                        <Chip
                          label="Vue.js 3"
                          class="text-xs !bg-gradient-to-r !from-[#4fc08d]/20 !to-[#4fc08d]/10 !text-[#4fc08d] !border !border-[#4fc08d]/20 hover:scale-105 transition-transform duration-200"
                        />
                        <Chip
                          label="Pinia"
                          class="text-xs !bg-gradient-to-r !from-[#9333ea]/20 !to-[#9333ea]/10 !text-[#9333ea] !border !border-[#9333ea]/20 hover:scale-105 transition-transform duration-200"
                        />
                        <Chip
                          label="Vuetify"
                          class="text-xs !bg-gradient-to-r !from-[#1976d2]/20 !to-[#1976d2]/10 !text-[#1976d2] !border !border-[#1976d2]/20 hover:scale-105 transition-transform duration-200"
                        />
                        <Chip
                          label="WebSocket"
                          class="text-xs !bg-gradient-to-r !from-[#38bdf8]/20 !to-[#38bdf8]/10 !text-[#38bdf8] !border !border-[#38bdf8]/20 hover:scale-105 transition-transform duration-200"
                        />
                        <Chip
                          label="Google Maps"
                          class="text-xs !bg-gradient-to-r !from-[#f59e0b]/20 !to-[#f59e0b]/10 !text-[#f59e0b] !border !border-[#f59e0b]/20 hover:scale-105 transition-transform duration-200"
                        />
                      </div>

                      <!-- Descrição -->
                      <div
                        class="bg-gradient-to-r from-slate-800/30 to-slate-900/30 rounded-lg p-4 border border-slate-700/30"
                      >
                        <p class="text-gray-300 text-sm leading-relaxed">
                          Sistema completo para gestão de mobilidade urbana, desenvolvido com
                          arquitetura moderna e interface responsiva. O frontend utiliza
                          <span class="text-[#4fc08d] font-medium">Vue.js 3</span> com Composition
                          API, gerenciamento de estado via
                          <span class="text-[#9333ea] font-medium">Pinia</span>, e comunicação em
                          tempo real através de
                          <span class="text-[#38bdf8] font-medium">WebSocket</span>. Interface
                          construída com
                          <span class="text-[#1976d2] font-medium">Vuetify</span> para componentes
                          UI consistentes, integração com
                          <span class="text-[#f59e0b] font-medium">Google Maps</span> para
                          geolocalização e roteamento, além de suporte para operação offline com
                          sincronização automática de dados.
                        </p>
                        <div class="mt-3 pt-3 border-t border-slate-600/30">
                          <p class="text-sm">
                            <span class="text-[#60a5fa] font-semibold"
                              >🚀 Principais funcionalidades:</span
                            >
                            <span class="text-gray-400"
                              >Dashboard em tempo real, gestão de ocorrências, sistema de despacho
                              automático, controle de escalas, rastreamento de viaturas e agentes,
                              gestão de mobiliário urbano com mapa interativo.</span
                            >
                          </p>
                        </div>
                      </div>

                      <!-- Status de desenvolvimento -->
                      <div class="flex items-center justify-between pt-2">
                        <div class="flex items-center gap-2 text-gray-400 text-sm">
                          <i class="pi pi-lock text-xs" aria-hidden="true"></i>
                          <span>Projeto Privado</span>
                        </div>
                        <div class="flex items-center gap-2 text-xs text-gray-500">
                          <i class="pi pi-calendar text-xs" aria-hidden="true"></i>
                          <span>2024 - Em Andamento</span>
                        </div>
                      </div>

                      <!-- Link de acesso -->
                      <div class="flex gap-3 pt-3 border-t border-slate-700/30">
                        <span class="inline-flex items-center gap-2 text-orange-400 text-sm">
                          <i class="pi pi-info-circle text-xs" aria-hidden="true"></i>
                          Acesso restrito
                        </span>
                      </div>
                    </div>
                  </div>
                </template>
              </Card>

              <Card
                class="!bg-gradient-to-br !from-[#4d91ea]/10 !to-[#667eea]/10 !border !border-[#4d91ea]/30 hover:scale-[1.02] transition-all duration-300"
              >
                <template #content>
                  <div class="flex flex-col gap-4">
                    <!-- Imagem do projeto -->
                    <div
                      class="w-full h-48 bg-gradient-to-br from-[#4d91ea]/20 to-[#667eea]/20 rounded-lg flex items-center justify-center overflow-hidden relative"
                    >
                      <div class="text-center">
                        <i class="pi pi-user text-[#4d91ea] text-4xl mb-2" aria-hidden="true"></i>
                        <p class="text-[#4d91ea] text-sm">O que você está vendo agora</p>
                      </div>
                      <!-- Ponteiro engraçado -->
                    </div>

                    <!-- Conteúdo do projeto -->
                    <div class="flex flex-col gap-3">
                      <div class="flex items-center justify-between">
                        <h3 class="text-xl font-semibold text-white">
                          Portfolio Pessoal - (Esse Site)
                        </h3>
                        <span
                          class="inline-flex items-center gap-1 text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded-full"
                        >
                          <i class="pi pi-globe text-xs" aria-hidden="true"></i>
                          Público
                        </span>
                      </div>

                      <!-- Tags de tecnologia -->
                      <div class="flex flex-wrap gap-2">
                        <Chip label="Vue.js 3" class="text-xs !bg-[#4fc08d]/20 !text-[#4fc08d]" />
                        <Chip label="Tailwind" class="text-xs !bg-[#06b6d4]/20 !text-[#06b6d4]" />
                        <Chip label="PrimeVue" class="text-xs !bg-[#9333ea]/20 !text-[#9333ea]" />
                        <Chip label="JavaScript" class="text-xs !bg-[#f59e0b]/20 !text-[#f59e0b]" />
                        <Chip label="Café ☕" class="text-xs !bg-rose-500/20 !text-rose-500" />
                      </div>

                      <!-- Descrição -->
                      <p class="text-gray-300 text-sm leading-relaxed">
                        Este site é meu portfólio pessoal, desenvolvido com Vue.js 3, Tailwind CSS e
                        PrimeVue. Aqui apresento meus principais projetos, habilidades e
                        experiências como desenvolvedor frontend. O objetivo foi criar uma interface
                        moderna, responsiva e agradável, com atenção à usabilidade e à performance.
                        O design e as funcionalidades estão em constante evolução para refletir meu
                        crescimento profissional.
                        <br /><br />
                        Além do desenvolvimento, também atuo como editor de vídeo, trazendo
                        criatividade e olhar artístico para projetos audiovisuais. Você pode
                        conferir meu trabalho de edição na seção de portfólio de vídeo, onde
                        compartilho produções que unem técnica e narrativa visual.
                      </p>

                      <!-- Links -->
                      <div class="flex gap-3 pt-2">
                        <Button
                          label="Código"
                          icon="pi pi-github"
                          size="small"
                          @click="
                            () =>
                              window.open(
                                'https://github.com/Joao-Camilo-Mallmann/Portfolio',
                                '_blank',
                              )
                          "
                        />
                      </div>

                      <!-- Status de desenvolvimento -->
                      <div
                        class="flex items-center justify-between pt-3 border-t border-slate-700/30"
                      >
                        <div class="flex items-center gap-2 text-gray-400 text-sm">
                          <i class="pi pi-check-circle text-green-400" aria-hidden="true"></i>
                          <span>Projeto Ativo</span>
                        </div>
                        <div class="flex items-center gap-2 text-xs text-gray-500">
                          <i class="pi pi-calendar text-xs" aria-hidden="true"></i>
                          <span>2024 - Atual</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </template>
              </Card>
            </div>
          </template>
        </Card>
      </section>

      <!-- Rodapé de contato -->
    </div>
    <footer>
      <FooterContact
        primary-color="#4d91ea"
        cta-text="Vamos criar algo incrível juntos!"
        status-text="Disponível para novos projetos"
      />
    </footer>
  </main>
</template>

<script setup>
import HeaderCore from '@/components/HeaderCore.vue'
import CardDetails from '@/components/CardDetails.vue'
import FooterContact from '@/components/FooterContact.vue'
</script>

<style scoped>
/* Estilos específicos do DevView podem ser adicionados aqui se necessário */
@keyframes spin-slow {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.animate-spin-slow {
  animation: spin-slow 3s linear infinite;
}
</style>
