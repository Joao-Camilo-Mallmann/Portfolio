<script>
export default {
  data() {
    return {
      aboutMe: {
        description:
          'Desenvolvedor Frontend apaixonado por tecnologia. Com experiência prática em desenvolvimento de sites e aplicações web, transformo ideias em interfaces intuitivas e visualmente atraentes.',
        avatar: 'https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png',
      },
      softSkills: [
        { label: 'Comunicação', icon: 'pi pi-comments' },
        { label: 'Criatividade', icon: 'pi pi-lightbulb' },
        { label: 'Flexibilidade', icon: 'pi pi-refresh' },
        { label: 'Resiliência', icon: 'pi pi-shield' },
        { label: 'Inteligência emocional', icon: 'pi pi-heart' },
        { label: 'Trabalho em equipe', icon: 'pi pi-users' },
        { label: 'Metodologia Ágil', icon: 'pi pi-sync' },
        { label: 'Liderança', icon: 'pi pi-crown' },
      ],
    }
  },
}
</script>

<template>
  <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
    <!-- Perfil -->
    <div class="lg:col-span-1">
      <Card class="h-full border-[#4d91ea] card-hover">
        <template #header>
          <div class="flex flex-col items-center p-6 pb-0">
            <h2 class="text-2xl font-bold text-white mb-1">João</h2>
            <p class="text-[#4d91ea] font-medium">Software Developer</p>
          </div>
        </template>
        <template #content>
          <div class="space-y-6">
            <!-- Resumo pessoal -->
            <div class="text-center border-b border-gray-700/30 pb-4">
              <p class="text-gray-300 text-sm leading-relaxed">
                Apaixonado por tecnologia e inovação. Gosto de transformar ideias complexas em
                soluções elegantes e funcionais.
              </p>
            </div>

            <!-- Principais gostos/interesses -->
            <div class="space-y-3">
              <h4 class="text-sm font-semibold text-white flex items-center gap-2">
                <i class="pi pi-heart text-[#4d91ea]"></i>
                O que me motiva
              </h4>
              <div class="grid grid-cols-1 gap-2">
                <div
                  class="flex items-center gap-2 text-xs text-gray-300 p-2 rounded bg-gray-800/20 hover:bg-gray-700/30 transition-colors duration-200"
                >
                  <i class="pi pi-code text-[#4d91ea]"></i>
                  <span>Clean Code & Arquitetura</span>
                </div>
                <div
                  class="flex items-center gap-2 text-xs text-gray-300 p-2 rounded bg-gray-800/20 hover:bg-gray-700/30 transition-colors duration-200"
                >
                  <i class="pi pi-palette text-[#eaa64d]"></i>
                  <span>UX/UI Design</span>
                </div>
                <div
                  class="flex items-center gap-2 text-xs text-gray-300 p-2 rounded bg-gray-800/20 hover:bg-gray-700/30 transition-colors duration-200"
                >
                  <i class="pi pi-users text-purple-400"></i>
                  <span>Colaboração em Equipe</span>
                </div>
                <div
                  class="flex items-center gap-2 text-xs text-gray-300 p-2 rounded bg-gray-800/20 hover:bg-gray-700/30 transition-colors duration-200"
                >
                  <i class="pi pi-lightbulb text-yellow-400"></i>
                  <span>Inovação & Aprendizado</span>
                </div>
              </div>
            </div>

            <!-- Competências Interpessoais -->
            <div class="space-y-3">
              <h4 class="text-sm font-semibold text-white flex items-center gap-2">
                <i class="pi pi-star text-[#eaa64d]"></i>
                Soft Skills
              </h4>
              <div class="grid grid-cols-2 gap-2">
                <div
                  v-for="skill in softSkills"
                  :key="skill.label"
                  class="flex items-center gap-2 text-xs text-gray-300 bg-gray-800/20 rounded p-2 hover:bg-gray-700/30 !transition-all !duration-200 hover:scale-105"
                >
                  <i :class="skill.icon" class="text-[#4d91ea] text-xs"></i>
                  <span class="truncate">{{ skill.label }}</span>
                </div>
              </div>
            </div>
          </div>
        </template>
      </Card>
    </div>

    <!-- Sobre Mim -->
    <div class="lg:col-span-2">
      <Card class="h-full card-hover">
        <template #header>
          <div class="p-6 pb-0">
            <h3 class="text-xl font-bold text-white flex items-center gap-2">
              <i class="pi pi-user text-[#4d91ea]"></i>
              Experiência & Formação
            </h3>
          </div>
        </template>
        <template #content>
          <div class="space-y-6">
            <!-- Descrição expandida -->
            <div class="space-y-4">
              <p class="text-gray-300 leading-relaxed">
                {{ aboutMe.description }}
              </p>
              <p class="text-gray-300 leading-relaxed text-sm">
                Atualmente cursando
                <strong class="text-white">Engenharia de Software</strong> em universidade e formado
                como <strong class="text-white">Técnico em Automação Industrial</strong> por
                instituto federal (2019-2023).
              </p>
            </div>

            <!-- Experiência Profissional -->
            <div class="space-y-4">
              <h4 class="text-lg font-semibold text-white flex items-center gap-2">
                <i class="pi pi-briefcase text-[#4d91ea]"></i>
                Experiência
              </h4>
              <div
                class="bg-gray-800/40 rounded-lg p-4 space-y-3 hover:bg-gray-800/60 transition-colors duration-300"
              >
                <div class="flex items-start justify-between">
                  <div>
                    <h5 class="text-white font-medium">Web Developer</h5>
                    <p class="text-[#4d91ea] text-sm">Empresa de Tecnologia</p>
                  </div>
                </div>
                <ul class="text-sm text-gray-300 space-y-1">
                  <li>• Desenvolvimento e manutenção de sites e aplicações web</li>
                  <li>• Criação de interfaces responsivas com foco em UX/UI</li>
                  <li>• Implementação de código limpo e modular</li>
                  <li>• Integração de APIs REST e gerenciamento de dados</li>
                </ul>
              </div>
            </div>

            <!-- Formação Complementar -->
            <div class="space-y-4">
              <h4 class="text-lg font-semibold text-white flex items-center gap-2">
                <i class="pi pi-graduation-cap text-purple-400"></i>
                Formação Complementar
              </h4>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div
                  class="bg-gray-800/30 rounded-lg p-3 hover:bg-gray-800/50 transition-all duration-300 hover:scale-105"
                >
                  <h5 class="text-white text-sm font-medium">Front-End e Back-End</h5>
                  <p class="text-gray-400 text-xs">Alura • 2022-2024 • 200h</p>
                </div>
                <div
                  class="bg-gray-800/30 rounded-lg p-3 hover:bg-gray-800/50 transition-all duration-300 hover:scale-105"
                >
                  <h5 class="text-white text-sm font-medium">Comunicação em Inglês</h5>
                  <p class="text-gray-400 text-xs">UPTIME • 2020-2021 • 198h</p>
                </div>
              </div>
            </div>
          </div>
        </template>
      </Card>
    </div>
  </div>
</template>

<style lang="css" scoped></style>
