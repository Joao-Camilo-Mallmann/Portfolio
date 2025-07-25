<script>
export default {
  data() {
    return {
      techCategories: [
        {
          header: 'Linguagens & Core',
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
          header: 'Frameworks & Ecossistema',
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
              image:
                'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-original.svg',
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
              image:
                'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg',
            },
          ],
        },
        {
          header: 'Estilização & UI',
          icon: 'pi pi-palette',
          description: 'Vuetify, Bootstrap, Tailwind CSS',
          technologies: [
            {
              name: 'Vuetify',
              icon: 'devicon-vuetify-plain',
              color: '#1867c0',
              image:
                'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuetify/vuetify-original.svg',
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
          header: 'Ambiente, CMS & Back-end',
          icon: 'pi pi-server',
          description: 'Node.js, Bun, WordPress, PHP, Java',
          technologies: [
            {
              name: 'Node.js',
              icon: 'devicon-nodejs-plain',
              color: '#43853d',
              image:
                'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
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
          header: 'Ferramentas & Versionamento',
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
              image:
                'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
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
              image:
                'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
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
          header: 'Bancos de Dados',
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
              image:
                'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg',
            },
          ],
        },
      ],
    }
  },
}
</script>

<template>
  <Card class="overflow-hidden card-hover">
    <template #header>
      <div class="text-center p-6 pb-0">
        <h3 class="text-2xl font-bold text-white mb-2 flex items-center justify-center gap-2">
          <i class="pi pi-code text-[#4d91ea]"></i>
          Stack Tecnológico
        </h3>
        <p class="text-gray-400">Principais tecnologias que utilizo no desenvolvimento</p>
      </div>
    </template>
    <template #content>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Fieldset
          v-for="category in techCategories"
          :key="category.header"
          :legend="category.header"
          class="!bg-gradient-to-tl !to-[#4d91ea]/10 fieldset-hover"
        >
          <template #legend>
            <div
              class="flex items-center gap-2 text-white font-semibold text-sm px-3 py-1 bg-gray-800/60 rounded-full"
            >
              <i :class="category.icon" class="text-[#4d91ea]"></i>
              <span>{{ category.header }}</span>
            </div>
          </template>

          <div class="grid grid-cols-1 gap-3 p-4">
            <div
              v-for="tech in category.technologies"
              :key="tech.name"
              class="tech-item-modern group"
            >
              <div class="flex items-center gap-3">
                <div class="tech-icon-container">
                  <img
                    v-if="tech.image && !tech.image.includes('/img/')"
                    :src="tech.image"
                    :alt="tech.name"
                    class="w-7 h-7 object-contain"
                    @error="(e) => (e.target.style.display = 'none')"
                  />
                  <i v-else :class="tech.icon" class="text-lg" :style="{ color: tech.color }"></i>
                </div>
                <div class="flex-1">
                  <span class="text-gray-200 text-sm font-medium">{{ tech.name }}</span>
                </div>
              </div>
              <div class="tech-skill-bar">
                <div class="tech-skill-fill" :style="{ backgroundColor: tech.color }"></div>
              </div>
            </div>
          </div>
        </Fieldset>
      </div>
    </template>
  </Card>
</template>

<style scoped>
.tech-item-modern {
  background: rgba(30, 41, 59, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0.75rem;
  padding: 0.75rem;
  transition:
    background 0.3s ease,
    border-color 0.3s ease,
    transform 0.3s ease;
  position: relative;
  overflow: hidden;
}

.tech-item-modern:hover {
  will-change: transform;
  background: rgba(30, 41, 59, 0.5);
  border-color: rgba(255, 255, 255, 0.2);
  transform: translateX(4px);
}

.tech-item-modern:not(:hover) {
  will-change: auto;
}

.tech-icon-container {
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition:
    background 0.3s ease,
    transform 0.3s ease;
}

.tech-item-modern:hover .tech-icon-container {
  background: rgba(255, 255, 255, 0.15);
  transform: scale(1.1);
}

/* Barra de skill animada - específica para tecnologias */
.tech-skill-bar {
  height: 3px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 2px;
  margin-top: 0.5rem;
  overflow: hidden;
}

.tech-skill-fill {
  height: 100%;
  width: 0;
  border-radius: 2px;
  transition: width 1.5s ease-in-out;
}

.tech-item-modern:hover .tech-skill-fill {
  width: 85%;
}
</style>
