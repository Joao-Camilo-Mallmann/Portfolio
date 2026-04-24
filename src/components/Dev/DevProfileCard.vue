<script setup>
import { useI18n } from '@/composables/useI18n'

const { t } = useI18n()

const courses = [
  {
    icon: 'pi pi-desktop',
    color: 'text-purple-400',
    titleKey: 'courseFrontBack',
    detailsKey: 'courseFrontBackDetails',
  },
  {
    icon: 'pi pi-language',
    color: 'text-blue-400',
    titleKey: 'courseEnglish',
    detailsKey: 'courseEnglishDetails',
  },
  {
    icon: 'pi pi-server',
    color: 'text-red-400',
    titleKey: 'courseLinux',
    detailsKey: 'courseLinuxDetails',
  },
  {
    icon: 'pi pi-sitemap',
    color: 'text-cyan-400',
    titleKey: 'courseCCNA',
    detailsKey: 'courseCCNADetails',
  },
]

const tasks = ['jobTask1', 'jobTask2', 'jobTask3', 'jobTask4', 'jobTask5']
</script>

<template>
  <div class="max-w-4xl mx-auto space-y-10">
    <!-- Heading da seção -->
    <div
      v-motion
      class="text-center"
      :initial="{ opacity: 0, y: 16 }"
      :enter="{ opacity: 1, y: 0, transition: { duration: 400, ease: [0.16, 1, 0.3, 1] } }"
    >
      <h2
        class="text-3xl font-bold mb-3 flex items-center justify-center gap-3 bg-linear-to-r from-dev via-blue-400 to-blue-200 bg-clip-text text-transparent text-balance"
      >
        <i class="pi pi-user text-dev text-2xl"></i>
        {{ t('devProfile.experienceTitle') }}
      </h2>
      <p class="text-fg-muted text-sm leading-relaxed text-pretty tracking-wide max-w-xl mx-auto">
        {{ t('devProfile.currentlyStudying') }}
        <strong class="text-fg">{{ t('devProfile.engineeringDegree') }}</strong>
        {{ t('devProfile.graduatedAs') }}
        <strong class="text-fg">{{ t('devProfile.technicianDegree') }}</strong>
        {{ t('devProfile.technicianPeriod') }}
      </p>
    </div>

    <!-- Experiência Profissional -->
    <div
      v-motion
      :initial="{ opacity: 0, y: 16 }"
      :enter="{
        opacity: 1,
        y: 0,
        transition: { delay: 100, duration: 400, ease: [0.16, 1, 0.3, 1] },
      }"
    >
      <h3 class="text-lg font-semibold flex items-center gap-3 text-dev mb-5">
        <i class="pi pi-briefcase text-dev"></i>
        {{ t('devProfile.professionalExperience') }}
      </h3>

      <div
        class="border border-border shadow-sm ring-1 ring-inset ring-white/5 rounded-2xl p-6 border-l-4 border-l-dev"
      >
        <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-5">
          <div>
            <h4 class="text-fg font-semibold text-lg text-balance">
              {{ t('devProfile.jobTitle') }}
            </h4>
            <p class="text-dev text-sm font-medium">
              {{ t('devProfile.jobCompany') }}
            </p>
          </div>
          <span
            class="text-xs text-fg-muted px-3 py-1 rounded-full border border-border bg-white/5 tabular-nums shrink-0"
          >
            {{ t('devProfile.jobPeriod') }}
          </span>
        </div>

        <ul class="text-sm text-fg-muted space-y-3 tracking-wide">
          <li
            v-for="(task, idx) in tasks"
            :key="task"
            v-motion
            class="flex items-start gap-3 hover:text-gray-200 transition-colors duration-200"
            :initial="{ opacity: 0, x: -8 }"
            :enter="{
              opacity: 1,
              x: 0,
              transition: { delay: 200 + idx * 80, duration: 300, ease: [0.16, 1, 0.3, 1] },
            }"
          >
            <i class="pi pi-check-circle text-green-400 mt-0.5 shrink-0"></i>
            <span class="text-pretty">{{ t(`devProfile.${task}`) }}</span>
          </li>
        </ul>
      </div>
    </div>

    <!-- Formação Complementar -->
    <div
      v-motion
      :initial="{ opacity: 0, y: 16 }"
      :enter="{
        opacity: 1,
        y: 0,
        transition: { delay: 200, duration: 400, ease: [0.16, 1, 0.3, 1] },
      }"
    >
      <h3 class="text-lg font-semibold flex items-center gap-3 text-purple-400 mb-5">
        <i class="pi pi-graduation-cap text-purple-400"></i>
        {{ t('devProfile.additionalTraining') }}
      </h3>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div
          v-for="(course, idx) in courses"
          :key="course.titleKey"
          v-motion
          class="border border-border shadow-sm ring-1 ring-inset ring-white/5 rounded-xl p-4 flex items-center gap-4 transition-opacity duration-200 hover:opacity-80"
          :initial="{ opacity: 0, y: 12 }"
          :enter="{
            opacity: 1,
            y: 0,
            transition: { delay: 300 + idx * 80, duration: 300, ease: [0.16, 1, 0.3, 1] },
          }"
        >
          <div
            class="w-10 h-10 rounded-lg border border-border flex items-center justify-center shrink-0"
          >
            <i :class="[course.icon, course.color]" class="text-lg"></i>
          </div>
          <div class="min-w-0">
            <h5 class="text-fg font-medium text-sm text-balance">
              {{ t(`devProfile.${course.titleKey}`) }}
            </h5>
            <p class="text-fg-muted text-xs tracking-wide">
              {{ t(`devProfile.${course.detailsKey}`) }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
