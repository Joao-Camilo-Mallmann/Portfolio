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
    <div
      v-motion
      class="lg:col-span-1"
      :initial="{ opacity: 0, y: 16 }"
      :enter="{ opacity: 1, y: 0 }"
    >
      <div
        class="h-full profile-card-special smooth-blue-border bg-surface-100 shadow-sm ring-1 ring-inset ring-white/5 rounded-2xl overflow-hidden p-6 border border-border"
      >
        <div class="flex flex-col items-center pb-0">
          <div class="avatar-container">
            <div class="avatar-ring"></div>
            <div class="avatar-inner">
              <h2 class="text-2xl font-bold text-dev mb-1">João</h2>
            </div>
          </div>
          <p class="font-medium text-blue-300">{{ t('devProfile.role') }}</p>
        </div>
        <div class="space-y-6 mt-6">
          <!-- Resumo pessoal -->
          <div class="text-center border-b border-border pb-4">
            <p class="text-sm leading-relaxed text-fg-muted text-pretty tracking-wide">
              {{ t('devProfile.summary') }}
            </p>
          </div>

          <!-- Principais gostos/interesses -->
          <div class="space-y-3">
            <h4 class="text-sm font-semibold flex items-center gap-2 text-red-400 text-balance">
              <i class="pi pi-heart text-red-400"></i>
              {{ t('devProfile.whatMotivates') }}
            </h4>
            <div class="grid grid-cols-1 gap-2">
              <div
                v-motion
                class="flex items-center gap-2 text-xs text-fg-muted p-2 rounded-md bg-surface-card border border-border hover:opacity-80 transition-opacity duration-200 cursor-pointer"
                :hovered="{ opacity: 0.6 }"
                :tapped="{ opacity: 0.4 }"
              >
                <i class="pi pi-code text-dev"></i>
                <span>{{ t('devProfile.cleanCode') }}</span>
              </div>
              <div
                v-motion
                class="flex items-center gap-2 text-xs text-fg-muted p-2 rounded-md bg-surface-card border border-border hover:opacity-80 transition-opacity duration-200 cursor-pointer"
                :hovered="{ opacity: 0.6 }"
                :tapped="{ opacity: 0.4 }"
              >
                <i class="pi pi-palette text-dev"></i>
                <span>{{ t('devProfile.uxDesign') }}</span>
              </div>
              <div
                v-motion
                class="flex items-center gap-2 text-xs text-fg-muted p-2 rounded-md bg-surface-card border border-border hover:opacity-80 transition-opacity duration-200 cursor-pointer"
                :hovered="{ opacity: 0.6 }"
                :tapped="{ opacity: 0.4 }"
              >
                <i class="pi pi-users text-dev"></i>
                <span>{{ t('devProfile.teamwork') }}</span>
              </div>
              <div
                v-motion
                class="flex items-center gap-2 text-xs text-fg-muted p-2 rounded-md bg-surface-card border border-border hover:opacity-80 transition-opacity duration-200 cursor-pointer"
                :hovered="{ opacity: 0.6 }"
                :tapped="{ opacity: 0.4 }"
              >
                <i class="pi pi-lightbulb text-dev"></i>
                <span>{{ t('devProfile.innovation') }}</span>
              </div>
            </div>
          </div>

          <!-- Competências Interpessoais -->
          <div class="space-y-3">
            <h4 class="text-sm font-semibold flex items-center gap-2 text-editor">
              <i class="pi pi-star text-editor"></i>
              {{ t('devProfile.softSkills') }}
            </h4>
            <div class="grid grid-cols-1 gap-2">
              <div
                v-for="skill in softSkills"
                :key="skill.label"
                v-motion
                class="flex items-center gap-2 text-xs text-fg-muted bg-surface-card border border-border rounded-md p-2 hover:opacity-80 transition-opacity duration-200 cursor-pointer"
                :hovered="{ opacity: 0.6 }"
                :tapped="{ opacity: 0.4 }"
              >
                <i :class="[skill.icon, skill.color]"></i>
                <span class="truncate">{{ skill.label }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Sobre Mim -->
    <div
      v-motion
      class="lg:col-span-2"
      :initial="{ opacity: 0, y: 16 }"
      :enter="{ opacity: 1, y: 0 }"
    >
      <div
        class="h-full card-hover smooth-blue-border bg-surface-100 shadow-sm ring-1 ring-inset ring-white/5 rounded-2xl overflow-hidden p-6 border border-border"
      >
        <div class="pb-6">
          <h3 class="text-xl font-bold flex items-center gap-2 text-dev">
            <i class="pi pi-user text-dev"></i>
            {{ t('devProfile.experienceTitle') }}
          </h3>
        </div>
        <div class="space-y-8 p-2">
          <!-- Descrição expandida -->
          <div class="space-y-4">
            <p
              class="text-fg-muted leading-relaxed transition-colors duration-300 text-pretty tracking-wide"
            >
              {{ description }}
            </p>
            <p
              class="text-fg-muted leading-relaxed text-sm transition-colors duration-300 tracking-wide"
            >
              {{ t('devProfile.currentlyStudying') }}
              <strong class="text-fg">{{ t('devProfile.engineeringDegree') }}</strong>
              {{ t('devProfile.graduatedAs') }}
              <strong class="text-fg">{{ t('devProfile.technicianDegree') }}</strong>
              {{ t('devProfile.technicianPeriod') }}
            </p>
          </div>

          <!-- Experiência Profissional -->
          <div class="space-y-6">
            <h4
              class="text-lg font-semibold flex items-center gap-3 text-dev transition-transform duration-300"
            >
              <i class="pi pi-briefcase text-dev"></i>
              {{ t('devProfile.professionalExperience') }}
            </h4>
            <div
              class="relative bg-surface-card border border-border shadow-sm ring-1 ring-inset ring-white/5 rounded-xl p-5 space-y-4 transition-opacity duration-300 border-l-4 border-l-dev hover:opacity-80"
            >
              <div class="flex items-center justify-between">
                <div>
                  <h5 class="text-fg font-semibold text-lg text-balance">
                    {{ t('devProfile.jobTitle') }}
                  </h5>
                  <p class="text-dev text-sm">
                    {{ t('devProfile.jobCompany') }}
                  </p>
                </div>
                <span class="text-xs text-fg-muted">{{ t('devProfile.jobPeriod') }}</span>
              </div>
              <ul class="text-sm text-fg-muted space-y-2 pl-4 tracking-wide">
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
              <i class="pi pi-graduation-cap text-purple-400"></i>
              {{ t('devProfile.additionalTraining') }}
            </h4>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div
                v-motion
                class="bg-surface-card border border-border shadow-sm ring-1 ring-inset ring-white/5 rounded-xl p-4 flex items-center gap-4 transition-opacity duration-300 cursor-pointer"
                :hovered="{ opacity: 0.6 }"
                :tapped="{ opacity: 0.4 }"
              >
                <i class="pi pi-desktop text-2xl text-purple-400"></i>
                <div>
                  <h5 class="text-fg font-medium text-balance">
                    {{ t('devProfile.courseFrontBack') }}
                  </h5>
                  <p class="text-fg-muted text-xs text-pretty tracking-wide">
                    {{ t('devProfile.courseFrontBackDetails') }}
                  </p>
                </div>
              </div>
              <div
                v-motion
                class="bg-surface-card border border-border shadow-sm ring-1 ring-inset ring-white/5 rounded-xl p-4 flex items-center gap-4 transition-opacity duration-300 cursor-pointer"
                :hovered="{ opacity: 0.6 }"
                :tapped="{ opacity: 0.4 }"
              >
                <i class="pi pi-language text-2xl text-blue-400"></i>
                <div>
                  <h5 class="text-fg font-medium text-balance">
                    {{ t('devProfile.courseEnglish') }}
                  </h5>
                  <p class="text-fg-muted text-xs text-pretty tracking-wide">
                    {{ t('devProfile.courseEnglishDetails') }}
                  </p>
                </div>
              </div>
              <div
                v-motion
                class="bg-surface-card border border-border shadow-sm ring-1 ring-inset ring-white/5 rounded-xl p-4 flex items-center gap-4 transition-opacity duration-300 cursor-pointer"
                :hovered="{ opacity: 0.6 }"
                :tapped="{ opacity: 0.4 }"
              >
                <i class="pi pi-server text-2xl text-red-400"></i>
                <div>
                  <h5 class="text-fg font-medium text-balance">
                    {{ t('devProfile.courseLinux') }}
                  </h5>
                  <p class="text-fg-muted text-xs text-pretty tracking-wide">
                    {{ t('devProfile.courseLinuxDetails') }}
                  </p>
                </div>
              </div>
              <div
                v-motion
                class="bg-surface-card border border-border shadow-sm ring-1 ring-inset ring-white/5 rounded-xl p-4 flex items-center gap-4 transition-opacity duration-300 cursor-pointer"
                :hovered="{ opacity: 0.6 }"
                :tapped="{ opacity: 0.4 }"
              >
                <i class="pi pi-sitemap text-2xl text-cyan-400"></i>
                <div>
                  <h5 class="text-fg font-medium text-balance">
                    {{ t('devProfile.courseCCNA') }}
                  </h5>
                  <p class="text-fg-muted text-xs text-pretty tracking-wide">
                    {{ t('devProfile.courseCCNADetails') }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
}
</style>
