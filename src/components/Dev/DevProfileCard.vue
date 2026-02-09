<script setup>
import { ref } from 'vue';

const aboutMe = ref({
  description:
    'Full Stack Developer com foco central em Frontend. Especialista em Vue.js e React, construo aplicações web de alta performance com arquiteturas escaláveis e código limpo.',
  avatar: 'https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png',
})

const softSkills = ref([
  { label: 'Arquitetura de Software', icon: 'pi pi-sitemap', color: 'text-blue-400' },
  { label: 'Resolução de Problemas', icon: 'pi pi-key', color: 'text-orange-400' },
  { label: 'Trabalho em Equipe', icon: 'pi pi-users', color: 'text-purple-400' },
  { label: 'Adaptabilidade', icon: 'pi pi-refresh', color: 'text-emerald-400' },
  { label: 'Metodologias Ágeis', icon: 'pi pi-sync', color: 'text-sky-400' },
  { label: 'Comunicação Clara', icon: 'pi pi-comments', color: 'text-indigo-400' },
  { label: 'Pensamento Crítico', icon: 'pi pi-check-circle', color: 'text-green-400' },
  { label: 'Aprendizado Contínuo', icon: 'pi pi-lightbulb', color: 'text-amber-400' },
])
</script>

<template>
  <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
    <!-- Perfil -->
    <div class="lg:col-span-1 animate-slide-up">
      <Card class="h-full profile-card-special smooth-blue-border">
        <template #header>
          <div class="flex flex-col items-center p-6 pb-0 header-wobble">
            <div class="avatar-container">
              <div class="avatar-ring"></div>
              <div class="avatar-inner">
                <h2
                  class="text-2xl font-bold bg-linear-to-r from-dev via-blue-400 to-blue-200 bg-clip-text text-transparent mb-1 name-bounce"
                >
                  João
                </h2>
              </div>
            </div>
            <p class="font-medium text-blue-300 typewriter">Full Stack Developer</p>
          </div>
        </template>
        <template #content>
          <div class="space-y-6">
            <!-- Resumo pessoal -->
            <div class="text-center border-b border-gray-700/30 pb-4">
              <p
                class="text-sm leading-relaxed bg-linear-to-r from-blue-200 via-blue-400 to-dev bg-clip-text text-transparent"
              >
                Apaixonado por arquitetura de software e qualidade de código. Transformo requisitos
                complexos em sistemas robustos, escaláveis e de fácil manutenção.
              </p>
            </div>

            <!-- Principais gostos/interesses -->
            <div class="space-y-3">
              <h4 class="text-sm font-semibold flex items-center gap-2 text-red-400">
                <i class="pi pi-heart text-red-400 animate-heartbeat"></i>
                O que me motiva
              </h4>
              <div class="grid grid-cols-1 gap-2">
                <div
                  class="flex items-center gap-2 text-xs text-gray-300 p-2 rounded bg-gray-800/20 hover:bg-gray-700/30 hover:scale-105 transition-all duration-200"
                >
                  <i
                    class="pi pi-code text-dev hover:rotate-12 transition-transform duration-300"
                  ></i>
                  <span>Clean Code & Arquitetura</span>
                </div>
                <div
                  class="flex items-center gap-2 text-xs text-gray-300 p-2 rounded bg-gray-800/20 hover:bg-gray-700/30 hover:scale-105 transition-all duration-200"
                >
                  <i
                    class="pi pi-palette text-dev hover:rotate-12 transition-transform duration-300"
                  ></i>
                  <span>UX/UI Design</span>
                </div>
                <div
                  class="flex items-center gap-2 text-xs text-gray-300 p-2 rounded bg-gray-800/20 hover:bg-gray-700/30 hover:scale-105 transition-all duration-200"
                >
                  <i
                    class="pi pi-users text-dev hover:rotate-12 transition-transform duration-300"
                  ></i>
                  <span>Colaboração em Equipe</span>
                </div>
                <div
                  class="flex items-center gap-2 text-xs text-gray-300 p-2 rounded bg-gray-800/20 hover:bg-gray-700/30 hover:scale-105 transition-all duration-200"
                >
                  <i
                    class="pi pi-lightbulb text-dev hover:rotate-12 transition-transform duration-300"
                  ></i>
                  <span>Inovação & Aprendizado</span>
                </div>
              </div>
            </div>

            <!-- Competências Interpessoais -->
            <div class="space-y-3">
              <h4
                class="text-sm font-semibold flex items-center gap-2 bg-linear-to-r from-editor via-yellow-300 to-yellow-100 bg-clip-text text-transparent"
              >
                <i class="pi pi-star text-editor animate-spin-slow"></i>
                Soft Skills
              </h4>
              <div class="grid grid-cols-1 gap-2">
                <div
                  v-for="skill in softSkills"
                  :key="skill.label"
                  class="flex items-center gap-2 text-xs text-gray-300 bg-gray-800/20 rounded p-2 hover:bg-gray-700/30 hover:scale-105 transition-all duration-200"
                >
                  <i :class="[skill.icon, skill.color]"></i>
                  <span class="truncate">{{ skill.label }}</span>
                </div>
              </div>
            </div>
          </div>
        </template>
      </Card>
    </div>

    <!-- Sobre Mim -->
    <div class="lg:col-span-2 animate-slide-up animate-delay-300">
      <Card class="h-full card-hover smooth-blue-border">
        <template #header>
          <div class="p-6 pb-0">
            <h3
              class="text-xl font-bold flex items-center gap-2 bg-linear-to-r from-dev via-blue-400 to-blue-200 bg-clip-text text-transparent"
            >
              <i class="pi pi-user text-dev"></i>
              Experiência & Formação
            </h3>
          </div>
        </template>
        <template #content>
          <div class="space-y-8 p-2">
            <!-- Descrição expandida -->
            <div class="space-y-4">
              <p
                class="text-gray-300 leading-relaxed hover:text-gray-200 transition-colors duration-300"
              >
                {{ aboutMe.description }}
              </p>
              <p
                class="text-gray-300 leading-relaxed text-sm hover:text-gray-200 transition-colors duration-300"
              >
                Atualmente cursando
                <strong class="text-white hover:text-dev transition-colors duration-300"
                  >Engenharia de Software</strong
                >
                em universidade e formado como
                <strong class="text-white hover:text-dev transition-colors duration-300"
                  >Técnico em Automação Industrial</strong
                >
                por instituto federal (2019-2023).
              </p>
            </div>

            <!-- Experiência Profissional -->
            <div class="space-y-6">
              <h4
                class="text-lg font-semibold flex items-center gap-3 bg-linear-to-r from-dev via-blue-400 to-blue-200 bg-clip-text text-transparent hover:-translate-y-1 transition-transform duration-300"
              >
                <i class="pi pi-briefcase text-dev animate-bounce-soft"></i>
                Experiência Profissional
              </h4>
              <div
                class="relative bg-gray-800/40 rounded-lg p-5 space-y-4 hover:bg-gray-800/60 hover:scale-[1.01] hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 border-l-4 border-blue-500"
              >
                <div class="flex items-center justify-between">
                  <div>
                    <h5 class="text-white font-semibold text-lg">Full Stack Developer</h5>
                    <p class="text-dev text-sm hover:text-blue-300 transition-colors duration-300">
                      Liquid Soluções em TI
                    </p>
                  </div>
                  <span class="text-xs text-gray-400">2022 - Atual</span>
                </div>
                <ul class="text-sm text-gray-300 space-y-2 pl-4">
                  <li
                    class="flex items-start gap-2 hover:text-gray-200 hover:translate-x-1 transition-all duration-200"
                  >
                    <i class="pi pi-check-circle text-green-400 mt-1"></i>
                    <span
                      >Liderança técnica na definição de arquitetura de SPAs escaláveis, garantindo
                      performance, manutenibilidade e padrões de código rigorosos.</span
                    >
                  </li>
                  <li
                    class="flex items-start gap-2 hover:text-gray-200 hover:translate-x-1 transition-all duration-200"
                  >
                    <i class="pi pi-check-circle text-green-400 mt-1"></i>
                    <span
                      >Design e implementação de APIs RESTful robustas e otimização de queries em
                      bancos de dados relacionais (PostgreSQL/MySQL) para alta carga.</span
                    >
                  </li>
                  <li
                    class="flex items-start gap-2 hover:text-gray-200 hover:translate-x-1 transition-all duration-200"
                  >
                    <i class="pi pi-check-circle text-green-400 mt-1"></i>
                    <span
                      >Modernização estratégica de sistemas legados (Legacy Modernization), migrando
                      monólitos para arquiteturas modernas sem downtime.</span
                    >
                  </li>
                  <li
                    class="flex items-start gap-2 hover:text-gray-200 hover:translate-x-1 transition-all duration-200"
                  >
                    <i class="pi pi-check-circle text-green-400 mt-1"></i>
                    <span
                      >Implementação de cultura DevOps e pipelines de CI/CD automatizados, reduzindo
                      significativamente o ciclo de deploy e bugs em produção.</span
                    >
                  </li>
                  <li
                    class="flex items-start gap-2 hover:text-gray-200 hover:translate-x-1 transition-all duration-200"
                  >
                    <i class="pi pi-check-circle text-green-400 mt-1"></i>
                    <span
                      >Mentoria técnica e code reviews, elevando o nível técnico da equipe e
                      garantindo a aplicação das melhores práticas de engenharia de software.</span
                    >
                  </li>
                </ul>
              </div>
            </div>

            <!-- Formação Complementar -->
            <div class="space-y-6">
              <h4
                class="text-lg font-semibold flex items-center gap-3 bg-linear-to-r from-purple-400 via-purple-300 to-blue-300 bg-clip-text text-transparent hover:-translate-y-1 transition-transform duration-300"
              >
                <i class="pi pi-graduation-cap text-purple-400 animate-float"></i>
                Formação Complementar
              </h4>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div
                  class="bg-gray-800/30 rounded-lg p-4 flex items-center gap-4 hover:bg-gray-800/50 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 course-title-shine"
                >
                  <i class="pi pi-desktop text-2xl text-purple-400"></i>
                  <div>
                    <h5 class="text-white font-medium">Front-End e Back-End</h5>
                    <p class="text-gray-400 text-xs">Alura • 2022-2024 • 200h</p>
                  </div>
                </div>
                <div
                  class="bg-gray-800/30 rounded-lg p-4 flex items-center gap-4 hover:bg-gray-800/50 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 course-title-shine"
                >
                  <i class="pi pi-language text-2xl text-blue-400"></i>
                  <div>
                    <h5 class="text-white font-medium">Comunicação em Inglês</h5>
                    <p class="text-gray-400 text-xs">UPTIME • 2020-2021 • 198h</p>
                  </div>
                </div>
                <div
                  class="bg-gray-800/30 rounded-lg p-4 flex items-center gap-4 hover:bg-gray-800/50 hover:scale-105 hover:shadow-lg hover:shadow-red-500/20 transition-all duration-300 course-title-shine"
                >
                  <i class="pi pi-server text-2xl text-red-400"></i>
                  <div>
                    <h5 class="text-white font-medium">Linux Fundamentals</h5>
                    <p class="text-gray-400 text-xs">Red Hat • 2025</p>
                  </div>
                </div>
                <div
                  class="bg-gray-800/30 rounded-lg p-4 flex items-center gap-4 hover:bg-gray-800/50 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 course-title-shine"
                >
                  <i class="pi pi-sitemap text-2xl text-cyan-400"></i>
                  <div>
                    <h5 class="text-white font-medium">CCNA: Routing & Wireless</h5>
                    <p class="text-gray-400 text-xs">Cisco • 2025</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </template>
      </Card>
    </div>
  </div>
</template>

<style lang="css" scoped>
/* Apenas o CSS essencial mantido */
</style>
