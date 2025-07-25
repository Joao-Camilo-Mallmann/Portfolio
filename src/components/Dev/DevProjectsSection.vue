<script>
export default {
  data() {
    return {
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
          title: 'Sistema de Mobilidade Urbana',
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
    }
  },

  methods: {
    openLink(url) {
      window.open(url, '_blank', 'noopener,noreferrer')
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
  },
}
</script>

<template>
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
              <i class="pi pi-user-edit text-3xl mb-1" :style="{ color: project.colors.from }"></i>
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
              class="!p-2 !border-none"
            />
            <span v-if="project.links.length === 0" class="text-xs text-orange-400 px-2 py-1">
              Restrito
            </span>
          </div>
        </div>
      </template>
    </Card>
  </div>
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
</style>
