<script setup>
import { useI18n } from '@/composables/useI18n'
import profile from '@/data/profile.generated.json'
import { computed } from 'vue'

const { t, locale } = useI18n()
const githubProfileUrl = profile.identity.links.github

const projects = computed(() => {
  const currentLocale = locale.value === 'en' ? 'en' : 'pt-BR'
  return profile.projects.map((project) => ({
    ...project,
    title: project.title[currentLocale] ?? project.title['pt-BR'],
    imageAlt: project.imageAlt[currentLocale] ?? project.imageAlt['pt-BR'],
    description: project.description[currentLocale] ?? project.description['pt-BR'],
    links: project.links.map((link) => ({
      ...link,
      label: t(`devProjects.${link.labelKey}`),
    })),
  }))
})

const getStatusLabel = (statusType) => {
  return statusType === 'public' ? t('devProjects.public') : t('devProjects.private')
}

const getFeaturedLabel = (featuredLevel) => {
  if (featuredLevel === 'primary') return t('devProjects.primaryFeatured')
  if (featuredLevel === 'secondary') return t('devProjects.relevantFeatured')
  return ''
}

const getProjectCardClass = (project) => {
  if (project.featuredLevel === 'primary') {
    return 'md:col-span-2 lg:col-span-2 border-dev/30 shadow-md ring-1 ring-dev/20 hover:border-dev/40'
  }

  if (project.featuredLevel === 'secondary') {
    return 'lg:col-span-1 border-border/80 hover:border-dev/30'
  }

  return 'lg:col-span-1 border-border'
}

const getProjectMediaClass = (project) => {
  if (project.featuredLevel === 'primary') return 'h-64 md:h-80'
  return 'h-56 md:h-64'
}

const getProjectTitleClass = (project) => {
  return project.featuredLevel === 'primary'
    ? 'text-xl md:text-2xl font-bold'
    : 'text-lg font-semibold'
}

const getDevStatusLabel = (devStatusType) => {
  switch (devStatusType) {
    case 'completed':
      return t('devProjects.completed')
    case 'active':
      return t('devProjects.active')
    case 'wip':
      return t('devProjects.inProgress')
    default:
      return ''
  }
}

const getDevStatusIcon = (statusType) => {
  switch (statusType) {
    case 'completed':
      return 'pi pi-check-circle'

    case 'active':
      return 'pi pi-bolt'
    default:
      return 'pi pi-info-circle'
  }
}

const getDevStatusColor = (statusType) => {
  switch (statusType) {
    case 'completed':
      return '#22c55e' // Verde

    case 'active':
      return '#f59e0b' // Azul
    default:
      return '#9ca3af' // Cinza
  }
}

const getTagChipStyle = (tag) => {
  return {
    backgroundColor: `${tag.color}33`,
    color: tag.color,
    border: `1px solid ${tag.color}4D`, // Opacidade ~30%
  }
}
</script>

<template>
  <div class="mb-12 text-center">
    <div
      v-motion
      :initial="{ opacity: 0, scale: 0 }"
      :visible-once="{
        opacity: 1,
        scale: 1,
        transition: { type: 'spring', stiffness: 300, damping: 12 },
      }"
      class="mb-3 inline-flex items-center gap-2 rounded-full border border-dev/25 bg-dev/10 px-3 py-1 text-xs font-semibold text-dev"
    >
      <i class="pi pi-star-fill text-[10px]"></i>
      {{ t('devProjects.relevantBadge') }}
    </div>
    <h2
      v-motion
      :initial="{ opacity: 0, x: -40 }"
      :visible-once="{
        opacity: 1,
        x: 0,
        transition: { type: 'spring', stiffness: 150, damping: 15 },
      }"
      class="mb-3 flex items-center justify-center gap-3 bg-linear-to-r from-dev via-blue-400 to-blue-200 bg-clip-text text-3xl font-bold text-balance text-transparent"
    >
      <i class="pi pi-folder text-dev text-2xl"></i>
      {{ t('devProjects.mainTitle') }}
    </h2>
    <p
      v-motion
      :initial="{ opacity: 0, y: 12 }"
      :visible-once="{
        opacity: 1,
        y: 0,
        transition: { type: 'spring', stiffness: 150, damping: 15, delay: 100 },
      }"
      class="text-fg-muted text-lg text-pretty tracking-wide"
    >
      {{ t('devProjects.subtitle') }}
    </p>
  </div>

  <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
    <div
      v-for="(project, index) in projects"
      :key="index"
      v-motion
      :class="[
        'group shadow-sm ring-1 ring-inset ring-white/5 border border-border bg-surface-100/35 rounded-2xl flex flex-col overflow-hidden',
        'hover:border-dev/20 hover:shadow-[0_0_24px_-4px_rgba(77,145,234,0.15)] transition-[border-color,box-shadow] duration-300',
        getProjectCardClass(project),
      ]"
      :initial="{ opacity: 0, y: 24, scale: 0.97 }"
      :visible-once="{
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { type: 'spring', stiffness: 165, damping: 16, delay: index * 80 },
      }"
    >
      <!-- Imagem do projeto -->
      <div class="relative overflow-hidden">
        <div
          v-if="project.featuredLevel"
          class="absolute top-3 left-3 z-10 rounded-full border border-white/20 bg-black/45 px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur-sm"
        >
          {{ getFeaturedLabel(project.featuredLevel) }}
        </div>
        <div
          class="flex items-center justify-center overflow-hidden"
          :class="getProjectMediaClass(project)"
          :style="{ backgroundColor: project.colors.from + '12' }"
        >
          <img
            v-if="project.image"
            :src="project.image"
            :alt="project.imageAlt"
            class="w-full h-full object-cover brightness-[0.92] group-hover:brightness-105 group-hover:scale-[1.02] transition-[filter,transform] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] outline-1 outline-white/5"
            loading="lazy"
          />
          <div v-else class="text-center">
            <i class="pi pi-user-edit text-3xl mb-1" :style="{ color: project.colors.from }"></i>
            <p class="text-xs font-medium" :style="{ color: project.colors.from }">
              {{ t('devProjects.thisPortfolio') }}
            </p>
          </div>
        </div>

        <!-- Badge de status -->
        <div class="absolute top-3 right-3">
          <span
            :class="[
              project.statusType === 'public'
                ? 'bg-green-500/80 backdrop-blur-sm'
                : 'bg-orange-500/80 backdrop-blur-sm',
              'text-white px-2.5 py-1 rounded-full text-xs font-semibold flex items-center gap-1.5 shadow-sm',
            ]"
          >
            <i
              :class="project.statusType === 'public' ? 'pi pi-globe' : 'pi pi-lock'"
              class="text-[10px]"
            ></i>
            {{ getStatusLabel(project.statusType) }}
          </span>
        </div>
      </div>

      <!-- Conteúdo do card -->
      <div class="p-5 flex-1 flex flex-col">
        <h3 class="font-semibold text-fg text-balance mb-2" :class="getProjectTitleClass(project)">
          {{ project.title }}
        </h3>

        <div class="space-y-3 flex-1">
          <p
            class="text-fg-muted leading-relaxed text-pretty tracking-wide"
            :class="project.featuredLevel === 'primary' ? 'text-base' : 'text-sm'"
          >
            {{ project.description }}
          </p>

          <!-- Tags -->
          <div class="flex flex-wrap gap-1.5">
            <span
              v-for="tag in project.tags"
              :key="tag.label"
              class="text-xs px-2 py-0.5 rounded-full transition-colors duration-200"
              :style="getTagChipStyle(tag)"
            >
              {{ tag.label }}
            </span>
          </div>
        </div>

        <!-- Footer do card -->
        <div class="flex items-center justify-between pt-4 mt-auto border-t border-border/50">
          <div class="flex items-center gap-2">
            <i
              :class="getDevStatusIcon(project.devStatusType)"
              :style="{ color: getDevStatusColor(project.devStatusType) }"
              class="text-xs"
            ></i>
            <span class="text-xs text-fg-muted tabular-nums">
              {{ getDevStatusLabel(project.devStatusType) }} · {{ project.year }}
            </span>
          </div>

          <div class="flex gap-1.5">
            <a
              v-for="link in project.links.slice(0, 2)"
              :key="link.url"
              v-motion
              :href="link.url"
              target="_blank"
              rel="noopener noreferrer"
              :aria-label="link.label"
              :title="link.label"
              class="p-2 min-w-10 min-h-10 flex items-center justify-center border border-border rounded-lg bg-transparent text-fg hover:border-dev/30 hover:text-dev transition-colors duration-200 cursor-pointer"
              :tapped="{ scale: 0.96 }"
            >
              <i :class="link.icon" class="text-sm"></i>
            </a>
            <span
              v-if="project.links.length === 0"
              class="text-xs text-orange-400 px-2 py-1 self-center"
            >
              {{ t('devProjects.restricted') }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div
    v-motion
    class="mt-8 rounded-2xl border border-border bg-dev/10 p-5 text-center ring-1 ring-inset ring-white/5"
    :initial="{ opacity: 0, y: 20 }"
    :visible-once="{
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 150, damping: 16, delay: 120 },
    }"
  >
    <p class="text-fg-muted text-sm md:text-base">
      {{ t('devProjects.moreProjectsHint') }}
    </p>
    <a
      v-motion
      :href="githubProfileUrl"
      target="_blank"
      rel="noopener noreferrer"
      :aria-label="t('devProjects.moreProjectsCta')"
      :title="t('devProjects.moreProjectsCta')"
      class="mt-4 inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-dev/30 bg-dev/15 px-4 py-2 text-sm font-semibold text-dev transition-colors duration-200 hover:border-dev/60 hover:bg-dev/20"
      :tapped="{ scale: 0.98 }"
    >
      <i class="pi pi-github text-sm"></i>
      {{ t('devProjects.moreProjectsCta') }}
    </a>
  </div>
</template>

<style scoped></style>
