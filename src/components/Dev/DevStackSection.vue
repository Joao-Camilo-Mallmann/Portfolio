<script setup>
import { useI18n } from '@/composables/useI18n'
import { computed } from 'vue'

const { t } = useI18n()

const getTechGridClass = (count) => {
  if (count <= 2) return 'grid-cols-2'
  if (count === 3) return 'grid-cols-3'
  if (count === 4) return 'grid-cols-2'
  if (count <= 6) return 'grid-cols-3'
  return 'grid-cols-4'
}

const getTechItemClass = (count) => {
  if (count <= 2) return 'p-3'
  if (count <= 4) return 'p-2.5'
  return 'p-2'
}

const getIconWrapClass = (count) => {
  if (count <= 2) return 'h-14 w-14'
  if (count <= 4) return 'h-12 w-12'
  return 'h-11 w-11'
}

const getIconClass = (count) => {
  if (count <= 2) return 'h-9 w-9'
  if (count <= 4) return 'h-8 w-8'
  return 'h-7 w-7'
}

const techCategories = computed(() => [
  {
    header: t('devStack.categories.core'),
    icon: 'pi pi-code',
    technologies: [
      {
        name: 'JavaScript',
        image:
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      },
      {
        name: 'TypeScript',
        image:
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
      },
      {
        name: 'HTML5',
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
      },
      {
        name: 'Sass',
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg',
      },
    ],
  },
  {
    header: t('devStack.categories.frontend'),
    icon: 'pi pi-desktop',
    technologies: [
      {
        name: 'Vue.js',
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
      },
      {
        name: 'Nuxt.js',
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-original.svg',
      },
      {
        name: 'React',
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      },
      {
        name: 'Vite',
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg',
      },
    ],
  },
  {
    header: t('devStack.categories.design'),
    icon: 'pi pi-palette',
    technologies: [
      {
        name: 'Vuetify',
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuetify/vuetify-original.svg',
      },
      {
        name: 'Tailwind CSS',
        image:
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
      },

      {
        name: 'Bootstrap',
        image:
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
      },
      {
        name: 'PrimeVue',
        image: 'https://www.primefaces.org/wp-content/uploads/2019/12/primevue-logo.png',
      },
    ],
  },
  {
    header: t('devStack.categories.backend'),
    icon: 'pi pi-server',
    technologies: [
      {
        name: 'Node.js',
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      },
      {
        name: 'Bun',
        image: 'https://bun.sh/logo.svg',
      },
      {
        name: 'Deno',
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/denojs/denojs-original.svg',
      },
      {
        name: 'PHP',
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
      },
      {
        name: 'Java',
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
      },
      {
        name: 'WordPress',
        image:
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg',
      },
    ],
  },
  {
    header: t('devStack.categories.devops'),
    icon: 'pi pi-cloud',
    technologies: [
      {
        name: 'Docker',
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
      },
      {
        name: 'Railway',
        image: 'https://railway.app/brand/logo-light.png',
      },
      {
        name: 'Git',
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
      },
      {
        name: 'GitHub',
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
        invert: true,
      },
      {
        name: 'Linux',
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg',
      },
    ],
  },
  {
    header: t('devStack.categories.databases'),
    icon: 'pi pi-database',
    technologies: [
      {
        name: 'PostgreSQL',
        image:
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
      },
      {
        name: 'MySQL',
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
      },
      {
        name: 'SQLite',
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg',
      },
    ],
  },
  {
    header: t('devStack.categories.testing'),
    icon: 'pi pi-check-circle',
    technologies: [
      {
        name: 'Vitest',
        image: 'https://vitest.dev/logo.svg',
      },
      {
        name: 'Cypress',
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cypress/cypress-original.svg',
      },
    ],
  },
  {
    header: t('devStack.categories.aiTools'),
    icon: 'pi pi-sparkles',
    technologies: [
      {
        name: 'OpenAI API',
        image: 'https://openai.com/favicon.ico',
      },
      {
        name: 'VSCode',
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
      },
      {
        name: 'Figma',
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
      },
    ],
  },
])
</script>

<template>
  <div>
    <!-- Section heading -->
    <div class="mb-12 text-center">
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
        <i class="pi pi-code text-dev text-2xl" />
        {{ t('devStack.title') }}
      </h2>
      <p
        v-motion
        :initial="{ opacity: 0, y: 12 }"
        :visible-once="{
          opacity: 1,
          y: 0,
          transition: { type: 'spring', stiffness: 150, damping: 15, delay: 120 },
        }"
        class="text-pretty text-lg tracking-wide text-fg-muted"
      >
        {{ t('devStack.subtitle') }}
      </p>
    </div>

    <!-- Categories grid -->
    <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
      <div
        v-for="(category, catIdx) in techCategories"
        :key="category.header"
        v-motion
        :initial="{ opacity: 0, x: catIdx % 2 === 0 ? -20 : 20, scale: 0.96 }"
        :visible-once="{
          opacity: 1,
          x: 0,
          scale: 1,
          transition: { type: 'spring', stiffness: 160, damping: 16, delay: catIdx * 55 },
        }"
        :class="[
          'group relative overflow-hidden rounded-2xl border border-border bg-surface-card/25 p-5 ring-1 ring-inset ring-white/5 transition-colors duration-300 hover:border-dev/25',
          category.technologies.length >= 6 ? 'md:col-span-2 lg:col-span-2' : '',
        ]"
      >
        <!-- Hover glow -->
        <div
          class="pointer-events-none absolute inset-0 rounded-2xl bg-linear-to-br from-dev/5 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />

        <!-- Category header -->
        <div class="relative mb-4 flex items-center gap-2.5">
          <div
            class="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-dev/20 bg-dev/10"
          >
            <i :class="category.icon" class="text-dev text-xs" />
          </div>
          <h4 class="text-sm font-semibold tracking-wide text-fg">{{ category.header }}</h4>
          <span
            class="ml-auto rounded-md border border-border bg-surface-100 px-1.5 py-0.5 font-mono text-[10px] text-fg-muted/60"
          >
            {{ category.technologies.length }}
          </span>
        </div>

        <!-- Divider — line-draw on scroll -->
        <div
          v-motion
          :initial="{ scaleX: 0, opacity: 0 }"
          :visible-once="{
            scaleX: 1,
            opacity: 1,
            transition: {
              type: 'keyframes',
              ease: [0.16, 1, 0.3, 1],
              duration: 700,
              delay: catIdx * 55 + 180,
            },
          }"
          class="mb-4 h-px w-full origin-left rounded-full bg-linear-to-r from-dev/25 via-border to-transparent"
        />

        <!-- Tech icons grid -->
        <div class="relative grid gap-2.5" :class="getTechGridClass(category.technologies.length)">
          <div
            v-for="(tech, idx) in category.technologies"
            :key="tech.name"
            v-motion
            :initial="{ opacity: 0, scale: 0.5 }"
            :visible-once="{
              opacity: 1,
              scale: 1,
              transition: {
                type: 'spring',
                stiffness: 280,
                damping: 14,
                delay: catIdx * 40 + idx * 65,
              },
            }"
            class="group/tech flex cursor-default select-none flex-col items-center gap-2 rounded-xl"
            :class="getTechItemClass(category.technologies.length)"
            :title="tech.name"
          >
            <div
              class="flex items-center justify-center rounded-xl border border-border bg-surface-100 transition-colors duration-200 group-hover/tech:border-dev/30"
              :class="getIconWrapClass(category.technologies.length)"
            >
              <img
                v-if="tech.image"
                :src="tech.image"
                :alt="tech.name"
                class="object-contain transition-transform duration-300 group-hover/tech:scale-110"
                :class="[getIconClass(category.technologies.length), { invert: tech.invert }]"
                loading="lazy"
                @error="(e) => (e.target.style.display = 'none')"
              />
            </div>
            <span
              class="w-full truncate text-center text-[11px] font-medium leading-tight text-fg-muted transition-colors duration-200 group-hover/tech:text-fg"
            >
              {{ tech.name }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
