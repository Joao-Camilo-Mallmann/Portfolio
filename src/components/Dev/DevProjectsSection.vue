<script setup>
import { useI18n } from '@/composables/useI18n'
import { computed } from 'vue'

const { t } = useI18n()

const projects = computed(() => [
  {
    title: t('devProjects.project1Title'),
    image: '/img/vimasi.png',
    imageAlt: t('devProjects.project1Alt'),
    description: t('devProjects.project1Desc'),
    statusType: 'public',
    devStatusType: 'completed',
    year: 2025,
    colors: { from: '#ff6b35', to: '#f7931e' },
    tags: [
      { label: 'Nuxt', color: '#00DC82' },
      { label: 'Vue.js', color: '#42b883' },
      { label: 'SEO', color: '#f59e0b' },
      { label: 'JavaScript', color: '#f7df1e' },
    ],
    links: [
      {
        label: t('devProjects.visitSite'),
        icon: 'pi pi-external-link',
        url: 'https://vimasi-vedacoes.com/',
        type: 'primary',
      },
      {
        label: t('devProjects.code'),
        icon: 'pi pi-github',
        url: 'https://github.com/Joao-Camilo-Mallmann/vimasi-vedacoes-vue',
        type: 'secondary',
      },
    ],
  },
  {
    title: t('devProjects.project5Title'),
    image: '/img/STW.png',
    imageAlt: t('devProjects.project5Alt'),
    description: t('devProjects.project5Desc'),
    statusType: 'public',
    devStatusType: 'completed',
    year: 2026,
    colors: { from: '#0284c7', to: '#0369a1' },
    tags: [
      { label: 'React.js', color: '#61dafb' },
      { label: 'Node.js', color: '#339933' },
      { label: 'SQLite', color: '#003b57' },
      { label: 'Tailwind v4', color: '#06b6d4' },
    ],
    links: [
      {
        label: t('devProjects.viewSite'),
        icon: 'pi pi-external-link',
        url: 'https://smart-dashboard-frontend.onrender.com/',
        type: 'primary',
      },
      {
        label: t('devProjects.code'),
        icon: 'pi pi-github',
        url: 'https://github.com/Joao-Camilo-Mallmann/Smart-manufacturing-dashboard',
        type: 'secondary',
      },
    ],
  },
  {
    title: t('devProjects.project2Title'),
    image: '/img/destinos.png',
    imageAlt: t('devProjects.project2Alt'),
    description: t('devProjects.project2Desc'),
    statusType: 'public',
    devStatusType: 'completed',
    year: 2024,
    colors: { from: '#4285f4', to: '#1e40af' },
    tags: [
      { label: 'Node.js', color: '#43853d' },
      { label: 'Express.js', color: '#ffffff' },
      { label: 'SQLite', color: '#38bdf8' },
      { label: 'Railway', color: '#0066ff' },
    ],
    links: [
      {
        label: t('devProjects.viewSite'),
        icon: 'pi pi-external-link',
        url: 'https://web-production-758be.up.railway.app/',
        type: 'primary',
      },
      {
        label: t('devProjects.code'),
        icon: 'pi pi-github',
        url: 'https://github.com/JoaoCamiloMallmann/back',
        type: 'secondary',
      },
    ],
  },
  {
    title: t('devProjects.project3Title'),
    image: '/img/smu.png',
    imageAlt: t('devProjects.project3Alt'),
    description: t('devProjects.project3Desc'),
    statusType: 'private',
    devStatusType: 'wip',
    year: 2024,
    colors: { from: '#8b5cf6', to: '#7c3aed' },
    tags: [
      { label: 'Vue.js 3', color: '#4fc08d' },
      { label: 'Pinia', color: '#9333ea' },
      { label: 'Vuetify', color: '#1976d2' },
      { label: 'WebSocket', color: '#38bdf8' },
    ],
    links: [],
  },
  {
    title: t('devProjects.project4Title'),
    image: null,
    imageAlt: t('devProjects.project4Alt'),
    description: t('devProjects.project4Desc'),
    statusType: 'public',
    devStatusType: 'active',
    year: 2024,
    colors: { from: '#10b981', to: '#059669' },
    tags: [
      { label: 'Vue.js 3', color: '#4fc08d' },
      { label: 'Tailwind', color: '#06b6d4' },
      { label: 'PrimeVue', color: '#9333ea' },
      { label: 'JavaScript', color: '#f59e0b' },
    ],
    links: [
      {
        label: t('devProjects.code'),
        icon: 'pi pi-github',
        url: 'https://github.com/Joao-Camilo-Mallmann/Portfolio',
        type: 'primary',
      },
    ],
  },
])

const getStatusLabel = (statusType) => {
  return statusType === 'public' ? t('devProjects.public') : t('devProjects.private')
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

const openLink = (url) => {
  window.open(url, '_blank', 'noopener,noreferrer')
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
  <div
    v-motion
    class="text-center mb-12"
    :initial="{ opacity: 0, y: 16 }"
    :enter="{ opacity: 1, y: 0 }"
  >
    <h2
      class="text-3xl font-bold mb-3 flex items-center justify-center gap-3 bg-linear-to-r from-dev via-blue-400 to-blue-200 bg-clip-text text-transparent text-balance"
    >
      <i class="pi pi-folder text-dev text-2xl"></i>
      {{ t('devProjects.mainTitle') }}
    </h2>
    <p class="text-fg-muted text-lg text-pretty tracking-wide">
      {{ t('devProjects.subtitle') }}
    </p>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6">
    <div
      v-for="(project, index) in projects"
      :key="index"
      v-motion
      :class="[
        'bg-surface-card shadow-sm ring-1 ring-inset ring-white/5 border border-border rounded-2xl z-99 flex flex-col transition-opacity duration-300 cursor-pointer',
        projects.length % 2 !== 0 && index === projects.length - 1
          ? 'md:col-span-2 md:w-full md:max-w-2xl md:justify-self-center'
          : '',
      ]"
      :hovered="{ opacity: 0.6 }"
      :tapped="{ opacity: 0.4 }"
    >
      <div class="relative overflow-hidden">
        <div
          class="h-55 flex items-center justify-center overflow-hidden transition duration-300 hover:brightness-110"
          :style="{ backgroundColor: project.colors.from + '15' }"
        >
          <img
            v-if="project.image"
            :src="project.image"
            :alt="project.imageAlt"
            class="w-full h-full object-cover group-hover:scale-110 transition duration-500 group-hover:brightness-110 ring-1 ring-white/10"
          />
          <div v-else class="text-center">
            <i class="pi pi-user-edit text-3xl mb-1" :style="{ color: project.colors.from }"></i>
            <p class="text-xs font-medium" :style="{ color: project.colors.from }">
              {{ t('devProjects.thisPortfolio') }}
            </p>
          </div>
        </div>

        <div class="absolute top-3 right-3">
          <span
            :class="[
              project.statusType === 'public' ? 'bg-green-500' : 'bg-orange-500',
              'text-white px-2 py-1 rounded-full backdrop-blur-sm text-xs font-semibold flex items-center gap-1 shadow-sm',
            ]"
          >
            <i :class="project.statusType === 'public' ? 'pi pi-globe' : 'pi pi-lock'"></i>
            {{ getStatusLabel(project.statusType) }}
          </span>
        </div>
      </div>
      <div class="p-5 flex-1 flex flex-col">
        <h3
          class="text-lg font-semibold bg-linear-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent text-balance mb-2"
        >
          {{ project.title }}
        </h3>
        <div class="space-y-3 flex-1">
          <p class="text-fg-muted text-sm leading-relaxed text-pretty tracking-wide">
            {{ project.description }}
          </p>

          <div class="flex flex-wrap gap-1">
            <span
              v-for="tag in project.tags"
              :key="tag.label"
              v-motion
              class="text-xs px-2 py-1 rounded transition-colors duration-200"
              :hovered="{ scale: 1.05 }"
              :tapped="{ scale: 0.95 }"
              :style="getTagChipStyle(tag)"
            >
              {{ tag.label }}
            </span>
          </div>
        </div>
        <div class="flex items-center justify-between pt-4 mt-auto">
          <div class="flex items-center gap-2">
            <i
              :class="getDevStatusIcon(project.devStatusType)"
              :style="{ color: getDevStatusColor(project.devStatusType) }"
              class="text-sm"
            ></i>
            <span class="text-xs text-fg-muted">{{
              getDevStatusLabel(project.devStatusType)
            }}</span>
          </div>

          <div class="flex gap-1">
            <button
              v-for="link in project.links.slice(0, 2)"
              :key="link.url"
              v-motion
              class="p-2 border border-border rounded-md bg-transparent hover:opacity-80 transition-opacity text-fg cursor-pointer"
              :hovered="{ opacity: 0.6 }"
              :tapped="{ opacity: 0.4 }"
              @click="openLink(link.url)"
            >
              <i :class="link.icon"></i>
            </button>
            <span v-if="project.links.length === 0" class="text-xs text-orange-400 px-2 py-1">
              {{ t('devProjects.restricted') }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
