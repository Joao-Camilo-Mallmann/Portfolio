<script>
import BackgroundLights from '@/components/Dev/BackgroundLights.vue'
import FooterContact from '@/components/FooterContact.vue'
import HeaderCore from '@/components/HeaderCore.vue'
export default {
  components: {
    HeaderCore,
    FooterContact,
    BackgroundLights,
  },
  data() {
    return {
      aboutMe: {
        description:
          'Desenvolvedor Frontend apaixonado por tecnologia. Com experiência prática em desenvolvimento de sites e aplicações web, transformo ideias em interfaces intuitivas e visualmente atraentes.',
        avatar: 'https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png',
      },
      softSkills: [
        { label: 'Comunicação', icon: 'pi pi-comments' },
        { label: 'Criatividade', icon: 'pi pi-lightbulb' },
        { label: 'Flexibilidade', icon: 'pi pi-refresh' },
        { label: 'Resiliência', icon: 'pi pi-shield' },
        { label: 'Inteligência emocional', icon: 'pi pi-heart' },
        { label: 'Trabalho em equipe', icon: 'pi pi-users' },
        { label: 'Metodologia Ágil', icon: 'pi pi-sync' },
        { label: 'Liderança', icon: 'pi pi-crown' },
      ],

      // NOVO: Array centralizado para os projetos
      projects: [
        {
          title: 'Vimasi Vedações 🔧',
          image: '/img/vimasi.png',
          imageAlt: 'Screenshot do site Vimasi Vedações',
          description:
            'Site desenvolvido para um amigo especializado em gaxetas, anéis de vedação e reparos hidráulicos. Proporcionou experiência valiosa em desenvolvimento No Code, configuração de domínio, deploy e otimização SEO.',
          status: 'Público',
          statusType: 'public', // 'public', 'private'
          devStatus: 'Concluído',
          devStatusType: 'completed', // 'completed', 'wip'
          year: 2024,
          colors: { from: '#ff6b35', to: '#f7931e' },
          tags: [
            { label: 'No Code', color: '#e4c7aa' },
            { label: 'Canvas', color: '#ff6b35' },
            { label: 'Hospedagem', color: '#4ecdc4' },
            { label: 'Domínio', color: '#45b7d1' },
          ],
          links: [
            {
              label: 'Visitar Site',
              icon: 'pi pi-external-link',
              url: 'https://vimasi-vedacoes.com/',
              type: 'primary',
            },
          ],
        },
        {
          title: 'Travel Mate - Agência de Turismo',
          image: '/img/destinos.png',
          imageAlt: 'Screenshot do Travel Mate',
          description:
            'Plataforma full-stack para agência de turismo com interface moderna e responsiva. Backend em Node.js com Express.js, banco SQLite e deploy automático na Railway. Inclui API RESTful, galeria de destinos e sistema de pacotes.',
          status: 'Público',
          statusType: 'public',
          devStatus: 'Concluído',
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
              label: 'Ver Site',
              icon: 'pi pi-external-link',
              url: 'https://web-production-758be.up.railway.app/',
              type: 'primary',
            },
            {
              label: 'Código',
              icon: 'pi pi-github',
              url: 'https://github.com/JoaoCamiloMallmann/back',
              type: 'secondary',
            },
          ],
        },
        {
          title: 'SMU - Sistema de Mobilidade Urbana',
          image: '/img/smu.png',
          imageAlt: 'Screenshot do SMU',
          description:
            'Sistema completo para gestão de mobilidade urbana com Vue.js 3, Pinia, WebSocket e Google Maps. Dashboard em tempo real, gestão de ocorrências, despacho automático e rastreamento de viaturas com interface responsiva.',
          status: 'Privado',
          statusType: 'private',
          devStatus: 'Em Andamento',
          devStatusType: 'wip',
          year: 2024,
          colors: { from: '#8b5cf6', to: '#7c3aed' },
          tags: [
            { label: 'Vue.js 3', color: '#4fc08d' },
            { label: 'Pinia', color: '#9333ea' },
            { label: 'Vuetify', color: '#1976d2' },
            { label: 'WebSocket', color: '#38bdf8' },
          ],
          links: [], // Projeto privado sem links públicos
        },
        {
          title: 'Portfolio Pessoal (Esse Site)',
          image: null, // Sem imagem, vamos mostrar um ícone
          imageAlt: 'Ícone do portfólio pessoal',
          description:
            'Portfólio pessoal desenvolvido com Vue.js 3, Tailwind CSS e PrimeVue. Interface moderna e responsiva para apresentar projetos, habilidades e experiências como desenvolvedor frontend e editor de vídeo.',
          status: 'Público',
          statusType: 'public',
          devStatus: 'Ativo',
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
              label: 'Código',
              icon: 'pi pi-github',
              url: 'https://github.com/Joao-Camilo-Mallmann/Portfolio',
              type: 'primary',
            },
          ],
        },
      ],

      // Array das tecnologias organizadas por categoria
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
  methods: {
    openLink(url) {
      window.open(url, '_blank', 'noopener,noreferrer')
    },

    getProjectCardStyle(project) {
      return {
        background: `linear-gradient(135deg, ${project.colors.from}80, ${project.colors.to}40)`,
        borderColor: `${project.colors.from}60`,
        borderWidth: '1px',
      }
    },

    getTagChipStyle(tag) {
      return {
        backgroundColor: `${tag.color}33`,
        color: tag.color,
        border: `1px solid ${tag.color}4D`, // Opacidade ~30%
      }
    },
    getDevStatusIcon(statusType) {
      switch (statusType) {
        case 'completed':
          return 'pi pi-check-circle'
        case 'wip':
          return 'pi pi-spinner pi-spin'
        case 'active':
          return 'pi pi-bolt'
        default:
          return 'pi pi-info-circle'
      }
    },

    getDevStatusColor(statusType) {
      switch (statusType) {
        case 'completed':
          return '#22c55e' // Verde
        case 'wip':
          return '#f59e0b' // Amarelo
        case 'active':
          return '#3b82f6' // Azul
        default:
          return '#9ca3af' // Cinza
      }
    },
  },
}
</script>
<template>
  <main
    class="page-transition !bg-gradient-to-b !to-[#4d91ea]/10 relative overflow-hidden"
    role="main"
    aria-label="Portfólio de Desenvolvimento"
  >
    <template v-for="i in 20" :key="i">
      <BackgroundLights color="#4d91ea" />
    </template>

    <HeaderCore />

    <Card class="bg-blue-100/10 border-l-4 border-[#4d91ea] mb-8 md:mb-12 mt-24 max-w-5xl mx-auto">
      <template #content>
        <div class="flex items-start md:items-center gap-4 p-2">
          <i
            class="pi pi-wrench text-[#4d91ea] text-xl animate-spin-slow"
            style="animation-duration: 3s"
          ></i>
          <div class="text-blue-100 text-sm md:text-base">
            <strong>Seção de Projetos em Evolução!</strong> Estou sempre aprimorando e adicionando
            novos trabalhos. Enquanto isso, que tal dar uma olhada no meu
            <a
              href="/editor"
              class="text-[#eaa64d] font-semibold hover:text-[#f0b86e] underline transition-colors"
            >
              portfólio de edição de vídeo </a
            >? 😉🎬
          </div>
        </div>
      </template>
    </Card>

    <section id="about" class="max-w-7xl mx-auto px-4 space-y-16 mb-20">
      <!-- Sobre Mim - Layout Compacto -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Perfil -->
        <div class="lg:col-span-1">
          <Card class="h-full border-[#4d91ea] card-hover">
            <template #header>
              <div class="flex flex-col items-center p-6 pb-0">
                <h2 class="text-2xl font-bold text-white mb-1">João</h2>
                <p class="text-[#4d91ea] font-medium">Software Developer</p>
              </div>
            </template>
            <template #content>
              <div class="space-y-6">
                <!-- Resumo pessoal -->
                <div class="text-center border-b border-gray-700/30 pb-4">
                  <p class="text-gray-300 text-sm leading-relaxed">
                    Apaixonado por tecnologia e inovação. Gosto de transformar ideias complexas em
                    soluções elegantes e funcionais.
                  </p>
                </div>

                <!-- Principais gostos/interesses -->
                <div class="space-y-3">
                  <h4 class="text-sm font-semibold text-white flex items-center gap-2">
                    <i class="pi pi-heart text-[#4d91ea]"></i>
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
                      <i class="pi pi-palette text-[#eaa64d]"></i>
                      <span>UX/UI Design</span>
                    </div>
                    <div
                      class="flex items-center gap-2 text-xs text-gray-300 p-2 rounded bg-gray-800/20 hover:bg-gray-700/30 transition-colors duration-200"
                    >
                      <i class="pi pi-users text-purple-400"></i>
                      <span>Colaboração em Equipe</span>
                    </div>
                    <div
                      class="flex items-center gap-2 text-xs text-gray-300 p-2 rounded bg-gray-800/20 hover:bg-gray-700/30 transition-colors duration-200"
                    >
                      <i class="pi pi-lightbulb text-yellow-400"></i>
                      <span>Inovação & Aprendizado</span>
                    </div>
                  </div>
                </div>

                <!-- Competências Interpessoais -->
                <div class="space-y-3">
                  <h4 class="text-sm font-semibold text-white flex items-center gap-2">
                    <i class="pi pi-star text-[#eaa64d]"></i>
                    Soft Skills
                  </h4>
                  <div class="grid grid-cols-2 gap-2">
                    <div
                      v-for="skill in softSkills"
                      :key="skill.label"
                      class="flex items-center gap-2 text-xs text-gray-300 bg-gray-800/20 rounded p-2 hover:bg-gray-700/30 !transition-all !duration-200 hover:scale-105"
                    >
                      <i :class="skill.icon" class="text-[#4d91ea] text-xs"></i>
                      <span class="truncate">{{ skill.label }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </template>
          </Card>
        </div>

        <!-- Sobre Mim -->
        <div class="lg:col-span-2">
          <Card class="h-full card-hover">
            <template #header>
              <div class="p-6 pb-0">
                <h3 class="text-xl font-bold text-white flex items-center gap-2">
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
                    <strong class="text-white">Engenharia de Software</strong> em universidade e
                    formado como
                    <strong class="text-white">Técnico em Automação Industrial</strong> por
                    instituto federal (2019-2023).
                  </p>
                </div>

                <!-- Experiência Profissional -->
                <div class="space-y-4">
                  <h4 class="text-lg font-semibold text-white flex items-center gap-2">
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
                  <h4 class="text-lg font-semibold text-white flex items-center gap-2">
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
    </section>

    <section class="max-w-6xl mx-auto px-4 mb-20">
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
                      <i
                        v-else
                        :class="tech.icon"
                        class="text-lg"
                        :style="{ color: tech.color }"
                      ></i>
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
    </section>

    <!-- Projetos - Layout em Cards Compactos -->
    <section aria-labelledby="projects-heading" class="w-4/5 mx-auto px-4 mb-16 !z-99">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-white mb-3 flex items-center justify-center gap-3">
          <i class="pi pi-folder text-[#4d91ea] text-2xl"></i>
          Principais Projetos
        </h2>
        <p class="text-gray-400 text-lg">Alguns dos meus trabalhos mais relevantes</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6">
        <Card
          v-for="(project, index) in projects"
          :key="index"
          class="project-card group !z-99"
          :style="getProjectCardStyle(project)"
        >
          <template #header>
            <div class="relative">
              <div
                class="h-55 flex items-center justify-center overflow-hidden"
                :style="{ backgroundColor: project.colors.from + '15' }"
              >
                <Image
                  v-if="project.image"
                  :src="project.image"
                  :alt="project.imageAlt"
                  class="!object-fill group-hover:scale-102 transition-transform !duration-300"
                />
                <div v-else class="text-center">
                  <i
                    class="pi pi-user-edit text-3xl mb-1"
                    :style="{ color: project.colors.from }"
                  ></i>
                  <p class="text-xs font-medium" :style="{ color: project.colors.from }">
                    Este Portfólio
                  </p>
                </div>
              </div>

              <!-- Status Badge -->
              <div class="absolute top-3 right-3">
                <Chip
                  :label="project.statusType === 'public' ? 'Público' : 'Privado'"
                  :icon="project.statusType === 'public' ? 'pi pi-globe' : 'pi pi-lock'"
                  :class="project.statusType === 'public' ? '!bg-green-500 ' : '!bg-orange-500 '"
                  class="!text-white px-2 py-1 rounded-full backdrop-blur-sm text-xs font-semibold"
                />
              </div>
            </div>
          </template>

          <template #title>
            <h3 class="text-lg font-semibold text-white">
              {{ project.title }}
            </h3>
          </template>

          <template #content>
            <div class="space-y-3">
              <p class="text-gray-200 text-sm leading-relaxed">
                {{ project.description }}
              </p>

              <!-- Tags -->
              <div class="flex flex-wrap gap-1">
                <Chip
                  v-for="tag in project.tags"
                  :key="tag.label"
                  :label="tag.label"
                  class="text-xs px-2 py-1 rounded"
                  :style="getTagChipStyle(tag)"
                />
              </div>
            </div>
          </template>

          <template #footer>
            <div class="flex items-center justify-between pt-2">
              <div class="flex items-center gap-2">
                <i
                  :class="getDevStatusIcon(project.devStatusType)"
                  :style="{ color: getDevStatusColor(project.devStatusType) }"
                  class="text-sm"
                ></i>
                <span class="text-xs text-gray-400">{{ project.devStatus }}</span>
              </div>

              <div class="flex gap-1">
                <Button
                  v-for="link in project.links.slice(0, 2)"
                  :key="link.url"
                  :icon="link.icon"
                  size="small"
                  :severity="link.type === 'secondary' ? 'secondary' : 'primary'"
                  :outlined="link.type === 'secondary'"
                  @click="openLink(link.url)"
                  class="!p-2"
                />
                <span v-if="project.links.length === 0" class="text-xs text-orange-400 px-2 py-1">
                  Restrito
                </span>
              </div>
            </div>
          </template>
        </Card>
      </div>
    </section>

    <footer class="mt-16">
      <FooterContact
        primary-color="#4d91ea"
        cta-text="Vamos criar algo incrível juntos!"
        status-text="Disponível para novos projetos"
      />
    </footer>
  </main>
</template>
<style scoped>
/* Project Cards - específico para projetos */
.project-card {
  border-radius: 0.75rem;
  overflow: hidden;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  backdrop-filter: blur(8px);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
  position: relative;
}

.project-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background: inherit;
  opacity: 0.1;
  transition: opacity 0.3s ease;
}

.project-card:hover {
  will-change: transform;
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.25);
}

.project-card:not(:hover) {
  will-change: auto;
}

.project-card:hover::before {
  opacity: 0.2;
}

/* Tech Item Moderno - específico para tecnologias */
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
