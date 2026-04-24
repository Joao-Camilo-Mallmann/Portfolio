<script setup>
import { useI18n } from '@/composables/useI18n'
import { computed } from 'vue'

const { t } = useI18n()

const techCategories = computed(() => [
  {
    header: 'Core Engineering & Languages',
    icon: 'pi pi-code',
    description: 'HTML, CSS, JavaScript, TypeScript',
    technologies: [
      {
        name: 'JavaScript',
        icon: 'devicon-javascript-plain',
        color: '#f7df1e',
        image:
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      },
      {
        name: 'TypeScript',
        icon: 'devicon-typescript-plain',
        color: '#3178c6',
        image:
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
      },
      {
        name: 'HTML5 & CSS3',
        icon: 'devicon-html5-plain',
        color: '#e34c26',
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
      },
      {
        name: 'Sass',
        icon: 'devicon-sass-original',
        color: '#cc6699',
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg',
      },
    ],
  },
  {
    header: 'Ecosystem & Architecture',
    icon: 'pi pi-sitemap',
    description: 'Vue.js, Nuxt.js, React, Vite',
    technologies: [
      {
        name: 'Vue.js',
        icon: 'devicon-vuejs-plain',
        color: '#4fc08d',
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
      },
      {
        name: 'Nuxt.js',
        icon: 'devicon-nuxtjs-plain',
        color: '#00dc82',
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-original.svg',
      },
      {
        name: 'React',
        icon: 'devicon-react-plain',
        color: '#61dafb',
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      },
      {
        name: 'Vite',
        icon: 'devicon-vitejs-plain',
        color: '#646cff',
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg',
      },
    ],
  },
  {
    header: 'Design Systems & UI Engineering',
    icon: 'pi pi-palette',
    description: 'Vuetify, Bootstrap, Tailwind CSS',
    technologies: [
      {
        name: 'Vuetify',
        icon: 'devicon-vuetify-plain',
        color: '#1867c0',
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuetify/vuetify-original.svg',
      },
      {
        name: 'Bootstrap',
        icon: 'devicon-bootstrap-plain',
        color: '#7952b3',
        image:
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
      },
      {
        name: 'Tailwind CSS',
        icon: 'devicon-tailwindcss-plain',
        color: '#38bdf8',
        image:
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
      },
      {
        name: 'PrimeVue',
        icon: 'devicon-primevue-plain',
        color: '#4fc08d',
        image: 'https://www.primefaces.org/wp-content/uploads/2019/12/primevue-logo.png',
      },
    ],
  },
  {
    header: 'Backend & Infrastructure',
    icon: 'pi pi-server',
    description: 'Node.js, Bun, WordPress, PHP, Java',
    technologies: [
      {
        name: 'Node.js',
        icon: 'devicon-nodejs-plain',
        color: '#43853d',
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      },

      {
        name: 'WordPress',
        icon: 'devicon-wordpress-plain',
        color: '#21759b',
        image:
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg',
      },
      {
        name: 'PHP',
        icon: 'devicon-php-plain',
        color: '#777bb4',
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
      },
      {
        name: 'Java',
        icon: 'devicon-java-plain',
        color: '#007396',
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
      },
    ],
  },
  {
    header: 'DevOps & Tooling',
    icon: 'pi pi-cog',
    description: 'Git, GitHub, GitLab, Linux, VSCode',
    technologies: [
      {
        name: 'Git',
        icon: 'devicon-git-plain',
        color: '#f05032',
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
      },
      {
        name: 'GitHub',
        icon: 'devicon-github-original',
        color: '#181717',
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
      },

      {
        name: 'Linux',
        icon: 'devicon-linux-plain',
        color: '#fcc624',
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg',
      },
      {
        name: 'VSCode',
        icon: 'devicon-vscode-plain',
        color: '#007acc',
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
      },
      {
        name: 'Figma',
        icon: 'devicon-figma-plain',
        color: '#f24e1e',
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
      },
    ],
  },
  {
    header: t('devStack.databases'),
    icon: 'pi pi-database',
    description: 'PostgreSQL, MySQL',
    technologies: [
      {
        name: 'PostgreSQL',
        icon: 'devicon-postgresql-plain',
        color: '#336791',
        image:
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
      },
      {
        name: 'MySQL',
        icon: 'devicon-mysql-plain',
        color: '#4479a1',
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
      },
      {
        name: 'SQLite',
        icon: 'devicon-sqlite-plain',
        color: '#003b57',
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg',
      },
    ],
  },
])
</script>

<template>
  <div>
    <!-- Heading da seção -->
    <div
      v-motion
      class="text-center mb-10"
      :initial="{ opacity: 0, y: 16 }"
      :enter="{ opacity: 1, y: 0, transition: { duration: 400, ease: [0.16, 1, 0.3, 1] } }"
    >
      <h2
        class="text-3xl font-bold mb-3 flex items-center justify-center gap-3 bg-linear-to-r from-dev via-blue-400 to-blue-200 bg-clip-text text-transparent text-balance"
      >
        <i class="pi pi-code text-dev text-2xl"></i>
        {{ t('devStack.title') }}
      </h2>
      <p class="text-fg-muted text-lg text-pretty tracking-wide">
        {{ t('devStack.subtitle') }}
      </p>
    </div>

    <!-- Grid de categorias -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      <div
        v-for="(category, catIdx) in techCategories"
        :key="category.header"
        v-motion
        class="border border-border shadow-sm ring-1 ring-inset ring-white/5 rounded-2xl p-5"
        :initial="{ opacity: 0, y: 16 }"
        :enter="{
          opacity: 1,
          y: 0,
          transition: { delay: catIdx * 80, duration: 400, ease: [0.16, 1, 0.3, 1] },
        }"
      >
        <!-- Header da categoria -->
        <div class="flex items-center gap-2 mb-4">
          <i :class="category.icon" class="text-dev text-sm"></i>
          <h4 class="text-fg font-semibold text-sm tracking-wide">{{ category.header }}</h4>
        </div>

        <!-- Tech items -->
        <div class="grid grid-cols-1 gap-2.5">
          <div
            v-for="(tech, idx) in category.technologies"
            :key="tech.name"
            v-motion
            class="group flex items-center gap-3 p-2.5 rounded-lg border border-transparent hover:border-border transition-colors duration-200"
            :initial="{ opacity: 0, y: 6 }"
            :enter="{
              opacity: 1,
              y: 0,
              transition: { delay: catIdx * 80 + idx * 50, duration: 250, ease: [0.16, 1, 0.3, 1] },
            }"
          >
            <div
              class="flex items-center justify-center w-9 h-9 rounded-lg border border-border shrink-0"
            >
              <img
                v-if="tech.image && !tech.image.includes('/img/')"
                :src="tech.image"
                :alt="tech.name"
                class="w-5 h-5 object-contain transition-transform duration-300 group-hover:scale-110"
                loading="lazy"
                @error="(e) => (e.target.style.display = 'none')"
              />
              <i
                v-else
                :class="tech.icon"
                class="text-base transition-transform duration-300 group-hover:scale-110"
                :style="{ color: tech.color }"
              ></i>
            </div>
            <span
              class="text-fg-muted text-sm font-medium tracking-wide group-hover:text-fg transition-colors duration-200"
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
