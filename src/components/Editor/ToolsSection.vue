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
    color: 'var(--color-editor)',
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
    color: 'var(--color-dev)',
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
      <h2 class="text-2xl md:text-4xl lg:text-5xl font-bold text-fg text-balance tracking-wide">
        {{ t('editorTools.journeyTitle') }}
      </h2>
      <p
        class="text-fg-muted mt-2 md:mt-3 text-base md:text-xl max-w-2xl mx-auto px-2 text-pretty tracking-wide"
      >
        {{ t('editorTools.journeySubtitle') }}
      </p>
    </div>

    <!-- Timeline para Desktop -->
    <timeline v-if="!isMobile" :value="creativeProcess" align="alternate" class="custom-timeline">
      <template #marker="slotProps">
        <span
          v-motion
          class="flex w-16 h-16 items-center justify-center text-fg rounded-full z-10 shadow-sm ring-1 ring-inset ring-white/5 transition-opacity duration-300 cursor-pointer border-4 "
          :hovered="{ opacity: 0.8 }"
          :tapped="{ opacity: 0.6 }"
          :style="{
            borderColor: slotProps.item.color,
          }"
        >
          <i
            :class="`pi ${slotProps.item.icon} text-3xl`"
            :style="{ color: slotProps.item.color }"
          ></i>
        </span>
      </template>
      <template #content="slotProps">
        <div
          v-motion
          class=" shadow-sm ring-1 ring-inset ring-white/5 p-5 border border-border rounded-2xl h-full transition-opacity duration-300 cursor-pointer text-left"
          :hovered="{ opacity: 0.8 }"
          :tapped="{ opacity: 0.6 }"
        >
          <h3
            class="text-2xl font-bold mb-3 text-balance tracking-wide"
            :style="{ color: slotProps.item.color }"
          >
            {{ slotProps.item.title }}
          </h3>
          <p class="text-fg-muted leading-relaxed m-0 mb-4 tracking-wide">
            {{ slotProps.item.description }}
          </p>
          <ul class="list-none p-0 m-0 space-y-3">
            <li v-for="(detail, i) in slotProps.item.details" :key="i" class="flex items-center">
              <i
                :class="`pi ${detail.icon} mr-3 text-lg`"
                :style="{ color: slotProps.item.color }"
              ></i>
              <span class="text-fg-muted tracking-wide">{{ detail.text }}</span>
            </li>
          </ul>
        </div>
      </template>
    </timeline>

    <!-- Timeline para Mobile e Tablet -->
    <div class="block lg:hidden space-y-6">
      <div
        v-for="(item, index) in creativeProcess"
        :key="index"
        v-motion
        class=" border border-border shadow-sm ring-1 ring-inset ring-white/5 rounded-2xl p-5 transition-opacity duration-300 cursor-pointer text-left"
        :hovered="{ opacity: 0.8 }"
        :tapped="{ opacity: 0.6 }"
      >
        <div class="flex items-center gap-3 mb-3">
          <div
            class="flex w-12 h-12 items-center justify-center text-fg rounded-full shadow-sm ring-1 ring-inset ring-white/5 border-2 shrink-0 "
            :style="{
              borderColor: item.color,
            }"
          >
            <i :class="`pi ${item.icon} text-xl`" :style="{ color: item.color }"></i>
          </div>
          <h3
            class="text-lg font-bold leading-tight m-0 text-balance tracking-wide"
            :style="{ color: item.color }"
          >
            {{ item.title }}
          </h3>
        </div>
        <p class="text-fg-muted text-sm leading-relaxed m-0 mb-3 tracking-wide">
          {{ item.description }}
        </p>
        <ul class="list-none p-0 m-0 space-y-2">
          <li v-for="(detail, i) in item.details" :key="i" class="flex items-start gap-2">
            <i
              :class="`pi ${detail.icon} text-sm mt-0.5 shrink-0`"
              :style="{ color: item.color }"
            ></i>
            <span class="text-fg-muted text-sm leading-relaxed tracking-wide">{{
              detail.text
            }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Estilos para Timeline Desktop - PrimeVue */
.custom-timeline :deep(.p-timeline-event-connector) {
  background: var(--color-border);
}
</style>
