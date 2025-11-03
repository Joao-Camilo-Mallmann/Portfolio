<template>
  <div class="py-6 md:py-16 px-3 md:px-8">
    <!-- Header -->
    <div class="text-center mb-6 md:mb-16">
      <h2 class="text-2xl md:text-4xl lg:text-5xl font-bold text-editor">Minha Jornada Criativa</h2>
      <p class="text-gray-400 mt-2 md:mt-3 text-base md:text-xl max-w-2xl mx-auto px-2">
        Cada projeto é uma história, e esta é a minha forma de contá-la.
      </p>
    </div>

    <!-- Timeline para Desktop -->
    <Timeline :value="creativeProcess" v-if="!isMobile" align="alternate" class="custom-timeline">
      <template #marker="slotProps">
        <span
          class="flex w-16 h-16 items-center justify-center text-white rounded-full z-10 shadow-lg transition-all duration-300 hover:scale-110 border-4"
          :style="{
            borderColor: slotProps.item.color,
            backgroundColor: '#1f2937',
          }"
        >
          <i
            :class="`pi ${slotProps.item.icon} text-3xl`"
            :style="{ color: slotProps.item.color }"
          ></i>
        </span>
      </template>
      <template #content="slotProps">
        <Card
          class="card-timeline p-5 border-2 rounded-xl h-full transition-all duration-300 hover:scale-[1.02]"
          :style="{ '--card-color': slotProps.item.color }"
        >
          <template #title>
            <h3 class="text-2xl font-bold mb-3" :style="{ color: slotProps.item.color }">
              {{ slotProps.item.title }}
            </h3>
          </template>
          <template #content>
            <p class="text-gray-300 leading-relaxed m-0 mb-4">
              {{ slotProps.item.description }}
            </p>
            <ul class="list-none p-0 m-0 space-y-3">
              <li v-for="(detail, i) in slotProps.item.details" :key="i" class="flex items-center">
                <i
                  :class="`pi ${detail.icon} mr-3 text-lg`"
                  :style="{ color: slotProps.item.color }"
                ></i>
                <span class="text-gray-400">{{ detail.text }}</span>
              </li>
            </ul>
          </template>
        </Card>
      </template>
    </Timeline>

    <!-- Timeline para Mobile e Tablet -->
    <div class="block lg:hidden space-y-6">
      <Card
        v-for="(item, index) in creativeProcess"
        :key="index"
        class="card-timeline-mobile border-2 rounded-xl mobile-timeline-item"
        :style="{ '--card-color': item.color }"
      >
        <template #title>
          <div class="flex items-center gap-3 mb-3">
            <div
              class="flex w-12 h-12 items-center justify-center text-white rounded-full shadow-lg border-2 flex-shrink-0"
              :style="{
                borderColor: item.color,
                backgroundColor: '#1f2937',
              }"
            >
              <i :class="`pi ${item.icon} text-xl`" :style="{ color: item.color }"></i>
            </div>
            <h3 class="text-lg font-bold leading-tight m-0" :style="{ color: item.color }">
              {{ item.title }}
            </h3>
          </div>
        </template>
        <template #content>
          <p class="text-gray-300 text-sm leading-relaxed m-0 mb-3">
            {{ item.description }}
          </p>
          <ul class="list-none p-0 m-0 space-y-2">
            <li v-for="(detail, i) in item.details" :key="i" class="flex items-start gap-2">
              <i
                :class="`pi ${detail.icon} text-sm mt-0.5 flex-shrink-0`"
                :style="{ color: item.color }"
              ></i>
              <span class="text-gray-400 text-sm leading-relaxed">{{ detail.text }}</span>
            </li>
          </ul>
        </template>
      </Card>
    </div>
  </div>
</template>

<script>
import Card from 'primevue/card'
import Timeline from 'primevue/timeline'

export default {
  name: 'ToolsSection',
  components: {
    Timeline,
    Card,
  },
  directives: {
    'scroll-animation': {
      mounted(el, binding) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                el.classList.add(binding.value)
                observer.unobserve(el)
              }
            })
          },
          { threshold: 0.5 },
        )
        observer.observe(el)
      },
    },
  },
  data() {
    return {
      creativeProcess: [
        {
          title: '1. Estratégia e Roteiro',
          icon: 'pi-map',
          color: '#eaa64d', // Cor do Editor
          description:
            'Onde a visão ganha um plano. Nesta fase, mergulho no conceito para estruturar uma narrativa que não apenas informa, mas ressoa com a audiência.',
          details: [
            {
              icon: 'pi-comments',
              text: 'Sessões de brainstorming para definir a mensagem central.',
            },
            { icon: 'pi-file-edit', text: 'Desenvolvimento de roteiros e storyboards detalhados.' },
            {
              icon: 'pi-calendar-plus',
              text: 'Planejamento de produção e definição de cronogramas.',
            },
          ],
        },
        {
          title: '2. Edição e Montagem',
          icon: 'pi-sliders-h',
          color: '#4d91ea', // Cor do Dev
          description:
            'O coração do processo, onde a história toma forma. Seleciono as melhores cenas e construo o ritmo que prende a atenção do início ao fim.',
          details: [
            { icon: 'pi-scissors', text: 'Decupagem e organização de todo o material bruto.' },
            {
              icon: 'pi-sort-amount-up',
              text: 'Montagem da estrutura narrativa e sequenciamento.',
            },
            { icon: 'pi-sync', text: 'Sincronização de áudio e vídeo com precisão.' },
          ],
          software: [
            {
              name: 'Premiere Pro',
              icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Adobe_Premiere_Pro_CC_icon.svg/512px-Adobe_Premiere_Pro_CC_icon.svg.png?20210729021549',
            },
            {
              name: 'Adobe Audition',
              icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Adobe_Audition_CC_icon.svg/512px-Adobe_Audition_CC_icon.svg.png',
            },
          ],
        },
        {
          title: '3. Pós-Produção e Finalização',
          icon: 'pi-sparkles',
          color: '#2ecc71', // Cor complementar
          description:
            'A etapa final, onde o vídeo ganha brilho e polimento. Adiciono os toques finais que elevam a qualidade e garantem um resultado profissional.',
          details: [
            { icon: 'pi-palette', text: 'Color grading para criar a atmosfera visual desejada.' },
            { icon: 'pi-volume-up', text: 'Sound design e mixagem de áudio para imersão sonora.' },
            {
              icon: 'pi-check-circle',
              text: 'Exportação em alta qualidade para diversas plataformas.',
            },
          ],
          software: [
            {
              name: 'After Effects',
              icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Adobe_After_Effects_CC_icon.svg/768px-Adobe_After_Effects_CC_icon.svg.png',
            },
            {
              name: 'Photoshop',
              icon: 'https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg',
            },
            {
              name: 'Adobe Media Encoder',
              icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Adobe_Media_Encoder_CC_icon.svg/512px-Adobe_Media_Encoder_CC_icon.svg.png',
            },
          ],
        },
      ],
    }
  },

  computed: {
    isMobile() {
      // Proteção SSR: retorna false no servidor, verdadeiro valor no cliente
      if (typeof window === 'undefined') return false
      return window.innerWidth < 1024 // Ajuste o valor conforme necessário
    },
  },
}
</script>

<style scoped>
/* Estilos para Timeline Desktop */
.card-timeline {
  border-color: var(--card-color);
  box-shadow: 0 0 15px color-mix(in srgb, var(--card-color) 20%, transparent);
}

.card-timeline:hover {
  box-shadow: 0 0 30px color-mix(in srgb, var(--card-color) 40%, transparent);
}

/* Estilos para Timeline Mobile */
.card-timeline-mobile {
  border-color: var(--card-color);
  box-shadow: 0 0 10px color-mix(in srgb, var(--card-color) 20%, transparent);
  backdrop-filter: blur(10px);
}

.card-timeline-mobile :deep(.p-card-body) {
  padding: 1.25rem;
}

.card-timeline-mobile :deep(.p-card-content) {
  padding: 0;
}

.card-timeline-mobile :deep(.p-card-title) {
  margin-bottom: 0;
}

/* Estilos para Timeline Desktop - PrimeVue */
.custom-timeline :deep(.p-timeline-event-connector) {
  background: linear-gradient(to bottom, #eaa64d 0%, #4d91ea 50%, #2ecc71 100%);
}

/* Animações de entrada para mobile */
@keyframes mobile-fade-in {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Aplicar animação aos cards mobile */
.mobile-timeline-item {
  animation: mobile-fade-in 0.6s ease-out forwards;
  opacity: 0;
}

.mobile-timeline-item:nth-child(1) {
  animation-delay: 0.1s;
}
.mobile-timeline-item:nth-child(2) {
  animation-delay: 0.3s;
}
.mobile-timeline-item:nth-child(3) {
  animation-delay: 0.5s;
}
</style>
