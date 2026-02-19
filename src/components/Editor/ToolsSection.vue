<script setup>
import { useI18n } from '@/composables/useI18n'
import { computed, onMounted, onUnmounted, ref } from 'vue'

const { t } = useI18n()

const windowWidth = ref(typeof window !== 'undefined' ? window.innerWidth : 1024)

const onResize = () => {
  windowWidth.value = window.innerWidth
}

onMounted(() => {
  window.addEventListener('resize', onResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', onResize)
})

const isMobile = computed(() => windowWidth.value < 1024)

const creativeProcess = computed(() => [
  {
    title: t('editorTools.step1Title'),
    icon: 'pi-map',
    color: '#eaa64d',
    description: t('editorTools.step1Desc'),
    details: [
      { icon: 'pi-comments', text: t('editorTools.step1Detail1') },
      { icon: 'pi-file-edit', text: t('editorTools.step1Detail2') },
      { icon: 'pi-calendar-plus', text: t('editorTools.step1Detail3') },
    ],
  },
  {
    title: t('editorTools.step2Title'),
    icon: 'pi-sliders-h',
    color: '#4d91ea',
    description: t('editorTools.step2Desc'),
    details: [
      { icon: 'pi-scissors', text: t('editorTools.step2Detail1') },
      { icon: 'pi-sort-amount-up', text: t('editorTools.step2Detail2') },
      { icon: 'pi-sync', text: t('editorTools.step2Detail3') },
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
    title: t('editorTools.step3Title'),
    icon: 'pi-sparkles',
    color: '#2ecc71',
    description: t('editorTools.step3Desc'),
    details: [
      { icon: 'pi-palette', text: t('editorTools.step3Detail1') },
      { icon: 'pi-volume-up', text: t('editorTools.step3Detail2') },
      { icon: 'pi-check-circle', text: t('editorTools.step3Detail3') },
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
])
</script>

<template>
  <div class="py-6 md:py-16 px-3 md:px-8">
    <!-- Header -->
    <div class="text-center mb-6 md:mb-16">
      <h2 class="text-2xl md:text-4xl lg:text-5xl font-bold text-editor">
        {{ t('editorTools.journeyTitle') }}
      </h2>
      <p class="text-gray-400 mt-2 md:mt-3 text-base md:text-xl max-w-2xl mx-auto px-2">
        {{ t('editorTools.journeySubtitle') }}
      </p>
    </div>

    <!-- Timeline para Desktop -->
    <timeline v-if="!isMobile" :value="creativeProcess" align="alternate" class="custom-timeline">
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
        <card
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
        </card>
      </template>
    </timeline>

    <!-- Timeline para Mobile e Tablet -->
    <div class="block lg:hidden space-y-6">
      <card
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
      </card>
    </div>
  </div>
</template>

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
