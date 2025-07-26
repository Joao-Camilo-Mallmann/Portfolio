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
        { label: 'Comunicação', icon: 'pi pi-comments', color: 'text-blue-400' },
        { label: 'Criatividade', icon: 'pi pi-lightbulb', color: 'text-amber-400' },
        { label: 'Flexibilidade', icon: 'pi pi-refresh', color: 'text-emerald-400' },
        { label: 'Resiliência', icon: 'pi pi-shield', color: 'text-red-400' },
        { label: 'Inteligência emocional', icon: 'pi pi-heart', color: 'text-pink-400' },
        { label: 'Trabalho em equipe', icon: 'pi pi-users', color: 'text-purple-400' },
        { label: 'Metodologia Ágil', icon: 'pi pi-sync', color: 'text-sky-400' },
        { label: 'Liderança', icon: 'pi pi-crown', color: 'text-yellow-400' },
      ],
    }
  },
}
</script>

<template>
  <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
    <!-- Perfil -->
    <div class="lg:col-span-1 animate-slide-up">
      <Card class="h-full card-hover smooth-blue-border">
        <template #header>
          <div class="flex flex-col items-center p-6 pb-0">
            <h2
              class="text-2xl font-bold bg-gradient-to-r from-[#4d91ea] via-blue-400 to-blue-200 bg-clip-text text-transparent mb-1 drop-shadow animate-gradient-move"
            >
              João
            </h2>
            <p class="font-medium text-blue-300">Software Developer</p>
          </div>
        </template>
        <template #content>
          <div class="space-y-6">
            <!-- Resumo pessoal -->
            <div class="text-center border-b border-gray-700/30 pb-4">
              <p
                class="text-sm leading-relaxed bg-gradient-to-r from-blue-200 via-blue-400 to-[#4d91ea] bg-clip-text text-transparent animate-gradient-move"
              >
                Apaixonado por tecnologia e inovação. Gosto de transformar ideias complexas em
                soluções elegantes e funcionais.
              </p>
            </div>

            <!-- Principais gostos/interesses -->
            <div class="space-y-3">
              <h4
                class="text-sm font-semibold flex items-center gap-2 bg-clip-text text-red-400 animate-gradient-move"
              >
                <i class="pi pi-heart text-red-400"></i>
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
                  <i class="pi pi-palette text-[#4d91ea]"></i>
                  <span>UX/UI Design</span>
                </div>
                <div
                  class="flex items-center gap-2 text-xs text-gray-300 p-2 rounded bg-gray-800/20 hover:bg-gray-700/30 transition-colors duration-200"
                >
                  <i class="pi pi-users text-[#4d91ea]"></i>
                  <span>Colaboração em Equipe</span>
                </div>
                <div
                  class="flex items-center gap-2 text-xs text-gray-300 p-2 rounded bg-gray-800/20 hover:bg-gray-700/30 transition-colors duration-200"
                >
                  <i class="pi pi-lightbulb text-[#4d91ea]"></i>
                  <span>Inovação & Aprendizado</span>
                </div>
              </div>
            </div>

            <!-- Competências Interpessoais -->
            <div class="space-y-3">
              <h4
                class="text-sm font-semibold flex items-center gap-2 bg-gradient-to-r from-[#eaa64d] via-yellow-300 to-yellow-100 bg-clip-text text-transparent animate-gradient-move"
              >
                <i class="pi pi-star text-[#eaa64d]"></i>
                Soft Skills
              </h4>
              <div class="grid grid-cols-2 gap-2">
                <div
                  v-for="skill in softSkills"
                  :key="skill.label"
                  class="flex items-center gap-2 text-xs text-gray-300 bg-gray-800/20 rounded p-2 hover:bg-gray-700/30 !transition-all !duration-200 hover:scale-105"
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
              class="text-xl font-bold flex items-center gap-2 bg-gradient-to-r from-[#4d91ea] via-blue-400 to-blue-200 bg-clip-text text-transparent animate-gradient-move"
            >
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
              <h4
                class="text-lg font-semibold flex items-center gap-2 bg-gradient-to-r from-[#4d91ea] via-blue-400 to-blue-200 bg-clip-text text-transparent animate-gradient-move"
              >
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
              <h4
                class="text-lg font-semibold flex items-center gap-2 bg-gradient-to-r from-purple-400 via-purple-200 to-blue-200 bg-clip-text text-transparent animate-gradient-move"
              >
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

<style lang="css" scoped>
.smooth-blue-border {
  position: relative;
  z-index: 1;
  box-shadow: 0 0 0 0 #4d91ea;
  transition: box-shadow 0.9s cubic-bezier(0.4, 1.2, 0.4, 1);
}
.smooth-blue-border::before {
  content: '';
  position: absolute;
  inset: -4px;
  z-index: -1;
  border-radius: 1.2rem;
  background-size: 150% 150%;
  animation: bluePulse 2.5s ease-in-out infinite;
  filter: blur(8px) brightness(1.2);
  opacity: 0.5;
  transition:
    opacity 0.7s cubic-bezier(0.4, 1.2, 0.4, 1),
    filter 0.7s cubic-bezier(0.4, 1.2, 0.4, 1);
}
.smooth-blue-border:hover {
  box-shadow: 0 0 32px 2px #4d91ea99;
}
.smooth-blue-border:hover::before {
  opacity: 0.85;
  filter: blur(5px) brightness(1.35);
}
@keyframes bluePulse {
  0% {
    background-position: 0% 50%;
    filter: blur(8px) brightness(1.2);
  }
  50% {
    background-position: 100% 50%;
    filter: blur(12px) brightness(1.3);
  }
  100% {
    background-position: 0% 50%;
    filter: blur(8px) brightness(1.2);
  }
}
</style>
