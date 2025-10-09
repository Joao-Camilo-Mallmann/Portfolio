<template>
  <div class="py-16">
    <div class="text-center mb-16 animate-fade-in-up">
      <h2 class="text-5xl font-bold text-editor">Minha Jornada Criativa</h2>
      <p class="text-gray-400 mt-3 text-xl">
        Cada projeto é uma história, e esta é a minha forma de contá-la.
      </p>
    </div>

    <Timeline :value="creativeProcess" align="alternate" class="custom-timeline animate-fade-in">
      <template #marker="slotProps">
        <span
          class="flex w-12 h-12 md:w-16 md:h-16 items-center justify-center text-white rounded-full z-10 shadow-lg transform transition-all duration-500 ease-in-out hover:scale-125 border-4 animate-bounce-soft"
          :class="`animate-delay-${slotProps.index * 200}`"
          :style="{
            borderColor: slotProps.item.color,
            backgroundColor: '#1f2937',
            animationDelay: `${slotProps.index * 0.3}s`,
          }"
        >
          <i
            :class="`pi ${slotProps.item.icon} text-2xl md:text-3xl transition-all duration-300 hover:scale-110`"
            :style="{ color: slotProps.item.color }"
          ></i>
        </span>
      </template>
      <template #content="slotProps">
        <div
          v-scroll-animation="'animate-slide-up'"
          class="relative p-1 rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2"
          :style="{ animationDelay: `${slotProps.index * 400}ms` }"
        >
          <div
            class="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 opacity-70 animate-glow"
            :style="{ animationDelay: `${slotProps.index * 0.5}s` }"
          ></div>
          <Card
            class="card-timeline relative p-5 bg-transparent border-2 rounded-xl h-full course-title-shine transition-all duration-500 hover:scale-105 animate-fade-in-delayed"
            :class="`animate-delay-${slotProps.index * 100}`"
            :style="{
              '--card-color': slotProps.item.color,
              animationDelay: `${slotProps.index * 0.2}s`,
            }"
          >
            <template #title>
              <h3
                class="text-xl md:text-2xl font-bold mb-3 animate-slide-left"
                :class="`animate-delay-${slotProps.index * 100}`"
                :style="{
                  color: slotProps.item.color,
                  animationDelay: `${slotProps.index * 0.3}s`,
                }"
              >
                {{ slotProps.item.title }}
              </h3>
            </template>
            <template #content>
              <p
                class="text-gray-300 leading-relaxed m-0 mb-4 animate-slide-right"
                :style="{ animationDelay: `${slotProps.index * 0.4}s` }"
              >
                {{ slotProps.item.description }}
              </p>
              <ul class="list-none p-0 m-0 space-y-3 mb-6">
                <li
                  v-for="(detail, i) in slotProps.item.details"
                  :key="i"
                  class="flex items-center animate-fade-in-item"
                  :style="{ animationDelay: `${slotProps.index * 300 + (i + 1) * 200}ms` }"
                >
                  <i
                    :class="`pi ${detail.icon} mr-3 text-lg animate-heartbeat`"
                    :style="{ color: slotProps.item.color, animationDelay: `${(i + 1) * 0.5}s` }"
                  ></i>
                  <span class="text-gray-400">{{ detail.text }}</span>
                </li>
              </ul>
            </template>
          </Card>
        </div>
      </template>
    </Timeline>
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
}
</script>

<style scoped>
.card-timeline {
  border-color: var(--card-color);
  box-shadow: 0 0 15px color-mix(in srgb, var(--card-color) 20%, transparent);
}

.card-timeline:hover {
  box-shadow: 0 0 30px color-mix(in srgb, var(--card-color) 40%, transparent);
}

@keyframes draw-line {
  from {
    transform: scaleY(0);
    opacity: 0;
  }
  to {
    transform: scaleY(1);
    opacity: 1;
  }
}

@keyframes fade-in-item {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.animate-fade-in-item {
  animation: fade-in-item 0.5s ease-out forwards;
  opacity: 0; /* Começa invisível */
}

.custom-timeline >>> .p-timeline-event-connector {
  animation: draw-line 2s ease-out forwards;
  transform-origin: top;
  width: 3px !important;
  background: linear-gradient(to bottom, #eaa64d, #4d91ea, #2ecc71) !important;
  position: relative;
}

.custom-timeline >>> .p-timeline-event-connector::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom,
    rgba(234, 166, 77, 0.5),
    rgba(77, 145, 234, 0.5),
    rgba(46, 204, 113, 0.5)
  );
  animation: pulse-line 3s ease-in-out infinite;
}

@keyframes pulse-line {
  0%,
  100% {
    opacity: 0.3;
    transform: scaleX(1);
  }
  50% {
    opacity: 0.8;
    transform: scaleX(1.5);
  }
}

.custom-timeline >>> .p-timeline-event {
  animation: timeline-item-enter 0.8s ease-out forwards;
  opacity: 0;
  transform: translateX(-30px);
}

.custom-timeline >>> .p-timeline-event:nth-child(1) {
  animation-delay: 0.2s;
}
.custom-timeline >>> .p-timeline-event:nth-child(2) {
  animation-delay: 0.5s;
}
.custom-timeline >>> .p-timeline-event:nth-child(3) {
  animation-delay: 0.8s;
}

@keyframes timeline-item-enter {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.custom-timeline.p-timeline-alternate .p-timeline-event:nth-child(even) .p-timeline-event-content {
  text-align: left;
}

.course-title-shine {
  position: relative;
  overflow: hidden;
}

.course-title-shine:hover::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
  animation: shine 0.8s ease-in-out;
}

@keyframes shine {
  to {
    left: 100%;
  }
}
</style>
