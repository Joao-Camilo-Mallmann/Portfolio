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
  <div
    v-motion
    class="overflow-hidden border border-border shadow-sm ring-1 ring-inset ring-white/5 rounded-2xl z-99"
    :initial="{ opacity: 0, y: 16 }"
    :enter="{ opacity: 1, y: 0, transition: { duration: 400, ease: [0.16, 1, 0.3, 1] } }"
  >
    <div class="text-center p-6 pb-0">
      <h3
        class="text-2xl font-bold text-fg mb-2 flex items-center justify-center gap-2 text-balance tracking-wide"
      >
        <i class="pi pi-code text-dev"></i>
        {{ t('devStack.title') }}
      </h3>
      <p class="text-fg-muted text-pretty tracking-wide">{{ t('devStack.subtitle') }}</p>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
      <fieldset
        v-for="category in techCategories"
        :key="category.header"
        class="border border-border rounded-xl p-0"
      >
        <legend class="mx-4 px-1">
          <div
            class="flex items-center gap-2 text-fg font-semibold text-sm px-3 py-1 rounded-full border border-border shadow-sm ring-1 ring-inset ring-white/5"
          >
            <i :class="category.icon" class="text-dev"></i>
            <span>{{ category.header }}</span>
          </div>
        </legend>

        <div class="grid grid-cols-1 gap-3 p-4">
          <div
            v-for="(tech, idx) in category.technologies"
            :key="tech.name"
            v-motion
            class="tech-item group transition-opacity duration-300 cursor-pointer p-3 border border-border rounded-lg bg-transparent flex items-center gap-3 relative overflow-hidden"
            :initial="{ opacity: 0, y: 8 }"
            :enter="{
              opacity: 1,
              y: 0,
              transition: { delay: 50 * idx, duration: 300, ease: [0.16, 1, 0.3, 1] },
            }"
            :hovered="{ opacity: 0.7 }"
            :tapped="{ opacity: 0.5 }"
          >
            <div
              class="tech-icon-container flex items-center justify-center w-10 h-10 rounded-md border border-border"
            >
              <img
                v-if="tech.image && !tech.image.includes('/img/')"
                :src="tech.image"
                :alt="tech.name"
                class="w-7 h-7 object-contain transition-transform duration-300 group-hover:scale-110"
                @error="(e) => (e.target.style.display = 'none')"
              />
              <i
                v-else
                :class="tech.icon"
                class="text-lg transition-transform duration-300 group-hover:scale-110"
                :style="{ color: tech.color }"
              ></i>
            </div>
            <div class="flex-1">
              <span class="text-fg-muted text-sm font-medium tracking-wide">{{ tech.name }}</span>
              <div class="tech-skill-bar h-1 rounded-sm mt-2 overflow-hidden">
                <div
                  class="tech-skill-fill h-full rounded-sm transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] w-0"
                  :style="{ backgroundColor: tech.color, '--fill-width': '85%' }"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </fieldset>
    </div>
  </div>
</template>

<style scoped>
.tech-skill-bar:hover .tech-skill-fill {
  width: var(--fill-width, 85%);
}
</style>
