<script setup>
import { useI18n } from '@/composables/useI18n'
import { computed } from 'vue'

const { t } = useI18n()

const description = computed(() => t('devProfile.description'))

const softSkills = computed(() => [
  { label: t('devProfile.softSkillArchitecture'), icon: 'pi pi-sitemap', color: 'text-blue-400' },
  { label: t('devProfile.softSkillProblemSolving'), icon: 'pi pi-key', color: 'text-orange-400' },
  { label: t('devProfile.softSkillTeamwork'), icon: 'pi pi-users', color: 'text-purple-400' },
  {
    label: t('devProfile.softSkillAdaptability'),
    icon: 'pi pi-refresh',
    color: 'text-emerald-400',
  },
  { label: t('devProfile.softSkillAgile'), icon: 'pi pi-sync', color: 'text-sky-400' },
  {
    label: t('devProfile.softSkillCommunication'),
    icon: 'pi pi-comments',
    color: 'text-indigo-400',
  },
  {
    label: t('devProfile.softSkillCriticalThinking'),
    icon: 'pi pi-check-circle',
    color: 'text-green-400',
  },
  { label: t('devProfile.softSkillLearning'), icon: 'pi pi-lightbulb', color: 'text-amber-400' },
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
                <h2 class="text-2xl font-bold text-dev mb-1 name-bounce">João</h2>
              </div>
            </div>
            <p class="font-medium text-blue-300 typewriter">{{ t('devProfile.role') }}</p>
          </div>
        </template>
        <template #content>
          <div class="space-y-6">
            <!-- Resumo pessoal -->
            <div class="text-center border-b border-gray-800/50 pb-4">
              <p class="text-sm leading-relaxed text-gray-300 text-pretty">
                {{ t('devProfile.summary') }}
              </p>
            </div>

            <!-- Principais gostos/interesses -->
            <div class="space-y-3">
              <h4 class="text-sm font-semibold flex items-center gap-2 text-red-400 text-balance">
                <i class="pi pi-heart text-red-400 animate-heartbeat"></i>
                {{ t('devProfile.whatMotivates') }}
              </h4>
              <div class="grid grid-cols-1 gap-2">
                <div
                  class="flex items-center gap-2 text-xs text-gray-300 p-2 rounded bg-gray-800/20 hover:bg-gray-700/30 hover:scale-105 active:scale-[0.96] transition duration-200 cursor-pointer"
                >
                  <i
                    class="pi pi-code text-dev hover:rotate-12 transition-transform duration-300"
                  ></i>
                  <span>{{ t('devProfile.cleanCode') }}</span>
                </div>
                <div
                  class="flex items-center gap-2 text-xs text-gray-300 p-2 rounded bg-gray-800/20 hover:bg-gray-700/30 hover:scale-105 active:scale-[0.96] transition duration-200 cursor-pointer"
                >
                  <i
                    class="pi pi-palette text-dev hover:rotate-12 transition-transform duration-300"
                  ></i>
                  <span>{{ t('devProfile.uxDesign') }}</span>
                </div>
                <div
                  class="flex items-center gap-2 text-xs text-gray-300 p-2 rounded bg-gray-800/20 hover:bg-gray-700/30 hover:scale-105 active:scale-[0.96] transition duration-200 cursor-pointer"
                >
                  <i
                    class="pi pi-users text-dev hover:rotate-12 transition-transform duration-300"
                  ></i>
                  <span>{{ t('devProfile.teamwork') }}</span>
                </div>
                <div
                  class="flex items-center gap-2 text-xs text-gray-300 p-2 rounded bg-gray-800/20 hover:bg-gray-700/30 hover:scale-105 active:scale-[0.96] transition duration-200 cursor-pointer"
                >
                  <i
                    class="pi pi-lightbulb text-dev hover:rotate-12 transition-transform duration-300"
                  ></i>
                  <span>{{ t('devProfile.innovation') }}</span>
                </div>
              </div>
            </div>

            <!-- Competências Interpessoais -->
            <div class="space-y-3">
              <h4 class="text-sm font-semibold flex items-center gap-2 text-editor">
                <i class="pi pi-star text-editor animate-spin-slow"></i>
                {{ t('devProfile.softSkills') }}
              </h4>
              <div class="grid grid-cols-1 gap-2">
                <div
                  v-for="skill in softSkills"
                  :key="skill.label"
                  class="flex items-center gap-2 text-xs text-gray-300 bg-gray-800/20 rounded p-2 hover:bg-gray-700/30 hover:scale-105 active:scale-[0.96] transition duration-200 cursor-pointer"
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
            <h3 class="text-xl font-bold flex items-center gap-2 text-dev">
              <i class="pi pi-user text-dev"></i>
              {{ t('devProfile.experienceTitle') }}
            </h3>
          </div>
        </template>
        <template #content>
          <div class="space-y-8 p-2">
            <!-- Descrição expandida -->
            <div class="space-y-4">
              <p
                class="text-gray-300 leading-relaxed hover:text-gray-200 transition-colors duration-300 text-pretty"
              >
                {{ description }}
              </p>
              <p
                class="text-gray-300 leading-relaxed text-sm hover:text-gray-200 transition-colors duration-300"
              >
                {{ t('devProfile.currentlyStudying') }}
                <strong class="text-white hover:text-dev transition-colors duration-300">{{
                  t('devProfile.engineeringDegree')
                }}</strong>
                {{ t('devProfile.graduatedAs') }}
                <strong class="text-white hover:text-dev transition-colors duration-300">{{
                  t('devProfile.technicianDegree')
                }}</strong>
                {{ t('devProfile.technicianPeriod') }}
              </p>
            </div>

            <!-- Experiência Profissional -->
            <div class="space-y-6">
              <h4
                class="text-lg font-semibold flex items-center gap-3 text-dev transition-transform duration-300"
              >
                <i class="pi pi-briefcase text-dev animate-bounce-soft"></i>
                {{ t('devProfile.professionalExperience') }}
              </h4>
              <div
                class="relative bg-gray-900/50 rounded-md p-5 space-y-4 hover:bg-gray-800/60 hover:scale-[1.01] hover:shadow-lg hover:shadow-blue-500/20 transition-colors transition-transform duration-300 border-l-4 border-blue-500"
              >
                <div class="flex items-center justify-between">
                  <div>
                    <h5 class="text-white font-semibold text-lg text-balance">
                      {{ t('devProfile.jobTitle') }}
                    </h5>
                    <p class="text-dev text-sm hover:text-blue-300 transition-colors duration-300">
                      {{ t('devProfile.jobCompany') }}
                    </p>
                  </div>
                  <span class="text-xs text-gray-400">{{ t('devProfile.jobPeriod') }}</span>
                </div>
                <ul class="text-sm text-gray-300 space-y-2 pl-4">
                  <li
                    class="flex items-start gap-2 hover:text-gray-200 hover:translate-x-1 transition-colors transition-transform duration-200"
                  >
                    <i class="pi pi-check-circle text-green-400 mt-1"></i>
                    <span>{{ t('devProfile.jobTask1') }}</span>
                  </li>
                  <li
                    class="flex items-start gap-2 hover:text-gray-200 hover:translate-x-1 transition-colors transition-transform duration-200"
                  >
                    <i class="pi pi-check-circle text-green-400 mt-1"></i>
                    <span>{{ t('devProfile.jobTask2') }}</span>
                  </li>
                  <li
                    class="flex items-start gap-2 hover:text-gray-200 hover:translate-x-1 transition-colors transition-transform duration-200"
                  >
                    <i class="pi pi-check-circle text-green-400 mt-1"></i>
                    <span>{{ t('devProfile.jobTask3') }}</span>
                  </li>
                  <li
                    class="flex items-start gap-2 hover:text-gray-200 hover:translate-x-1 transition-colors transition-transform duration-200"
                  >
                    <i class="pi pi-check-circle text-green-400 mt-1"></i>
                    <span>{{ t('devProfile.jobTask4') }}</span>
                  </li>
                  <li
                    class="flex items-start gap-2 hover:text-gray-200 hover:translate-x-1 transition-colors transition-transform duration-200"
                  >
                    <i class="pi pi-check-circle text-green-400 mt-1"></i>
                    <span>{{ t('devProfile.jobTask5') }}</span>
                  </li>
                </ul>
              </div>
            </div>

            <!-- Formação Complementar -->
            <div class="space-y-6">
              <h4
                class="text-lg font-semibold flex items-center gap-3 text-purple-400 transition-transform duration-300"
              >
                <i class="pi pi-graduation-cap text-purple-400 animate-float"></i>
                {{ t('devProfile.additionalTraining') }}
              </h4>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div
                  class="bg-gray-800/30 rounded-md p-4 flex items-center gap-4 hover:bg-gray-800/50 hover:scale-105 active:scale-[0.96] hover:shadow-lg hover:shadow-purple-500/20 transition duration-300 course-title-shine cursor-pointer"
                >
                  <i class="pi pi-desktop text-2xl text-purple-400"></i>
                  <div>
                    <h5 class="text-white font-medium text-balance">
                      {{ t('devProfile.courseFrontBack') }}
                    </h5>
                    <p class="text-gray-400 text-xs text-pretty">
                      {{ t('devProfile.courseFrontBackDetails') }}
                    </p>
                  </div>
                </div>
                <div
                  class="bg-gray-800/30 rounded-md p-4 flex items-center gap-4 hover:bg-gray-800/50 hover:scale-105 active:scale-[0.96] hover:shadow-lg hover:shadow-blue-500/20 transition duration-300 course-title-shine cursor-pointer"
                >
                  <i class="pi pi-language text-2xl text-blue-400"></i>
                  <div>
                    <h5 class="text-white font-medium text-balance">
                      {{ t('devProfile.courseEnglish') }}
                    </h5>
                    <p class="text-gray-400 text-xs text-pretty">
                      {{ t('devProfile.courseEnglishDetails') }}
                    </p>
                  </div>
                </div>
                <div
                  class="bg-gray-800/30 rounded-md p-4 flex items-center gap-4 hover:bg-gray-800/50 hover:scale-105 active:scale-[0.96] hover:shadow-lg hover:shadow-red-500/20 transition duration-300 course-title-shine cursor-pointer"
                >
                  <i class="pi pi-server text-2xl text-red-400"></i>
                  <div>
                    <h5 class="text-white font-medium text-balance">
                      {{ t('devProfile.courseLinux') }}
                    </h5>
                    <p class="text-gray-400 text-xs text-pretty">
                      {{ t('devProfile.courseLinuxDetails') }}
                    </p>
                  </div>
                </div>
                <div
                  class="bg-gray-800/30 rounded-md p-4 flex items-center gap-4 hover:bg-gray-800/50 hover:scale-105 active:scale-[0.96] hover:shadow-lg hover:shadow-cyan-500/20 transition duration-300 course-title-shine cursor-pointer"
                >
                  <i class="pi pi-sitemap text-2xl text-cyan-400"></i>
                  <div>
                    <h5 class="text-white font-medium text-balance">
                      {{ t('devProfile.courseCCNA') }}
                    </h5>
                    <p class="text-gray-400 text-xs text-pretty">
                      {{ t('devProfile.courseCCNADetails') }}
                    </p>
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
.smooth-blue-border {
  position: relative;
  z-index: 1;
  box-shadow: 0 0 0 0 var(--color-dev);
  transition: box-shadow 0.9s cubic-bezier(0.4, 1.2, 0.4, 1);
}

.smooth-blue-border:hover {
  box-shadow: 0 0 32px 2px color-mix(in srgb, var(--color-dev) 60%, transparent);
}

.avatar-ring {
  width: 80px;
  height: 80px;
  border: 3px solid var(--color-dev);
  border-radius: 50%;
  position: absolute;
  top: -10px;
  left: 50%;
  transform: translateX(-50%);
  animation: ringPulse 2s ease-in-out infinite;
}

.typewriter {
  overflow: hidden;
  border-right: 2px solid var(--color-dev);
  white-space: nowrap;
  animation:
    typing 3s steps(40, end),
    blinkCaret 0.75s step-end infinite;
}

@keyframes blinkCaret {
  from,
  to {
    border-color: transparent;
  }
  50% {
    border-color: var(--color-dev);
  }
}
</style>
