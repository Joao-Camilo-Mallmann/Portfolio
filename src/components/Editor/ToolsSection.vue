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
const expandedMobileIndex = ref(0)

const toggleMobileItem = (index) => {
  expandedMobileIndex.value = expandedMobileIndex.value === index ? -1 : index
}

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
  <div class="py-8 md:py-16 px-3 md:px-8 relative overflow-hidden">
    <div class="pointer-events-none absolute inset-0" aria-hidden="true">
      <div class="absolute top-4 left-[8%] w-56 h-56 rounded-full bg-editor/7 blur-3xl"></div>
      <div class="absolute bottom-4 right-[8%] w-64 h-64 rounded-full bg-dev/6 blur-3xl"></div>
    </div>

    <div
      v-motion
      class="text-center mb-6 md:mb-16 relative"
      :initial="{ opacity: 0, y: 14 }"
      :enter="{ opacity: 1, y: 0, transition: { duration: 420, ease: [0.16, 1, 0.3, 1] } }"
    >
      <h2 class="text-2xl md:text-4xl lg:text-5xl font-bold text-fg text-balance tracking-wide">
        {{ t('editorTools.journeyTitle') }}
      </h2>
      <p
        class="text-fg-muted mt-2 md:mt-3 text-base md:text-xl max-w-2xl mx-auto px-2 text-pretty tracking-wide"
      >
        {{ t('editorTools.journeySubtitle') }}
      </p>
    </div>

    <div v-if="!isMobile" class="relative mx-auto max-w-6xl">
      <div
        aria-hidden="true"
        class="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-border/70 lg:block"
      ></div>

      <div
        v-for="(item, index) in creativeProcess"
        :key="item.title"
        class="relative mb-7 last:mb-0"
      >
        <div class="hidden lg:grid lg:grid-cols-[1fr_auto_1fr] lg:items-start lg:gap-6">
          <div class="min-h-1">
            <div
              v-if="index % 2 === 0"
              v-motion
              :initial="{ opacity: 0, x: -24 }"
              :visible-once="{
                opacity: 1,
                x: 0,
                transition: { type: 'spring', stiffness: 170, damping: 16 },
              }"
              class="shadow-sm ring-1 ring-inset ring-white/5 p-5 border border-border rounded-2xl h-full transition-[transform,opacity,border-color] duration-300 cursor-pointer text-left bg-surface-100/80"
              :hovered="{ opacity: 0.95, y: -4 }"
              :tapped="{ opacity: 0.8, y: 0 }"
            >
              <h3
                class="text-2xl font-bold mb-3 text-balance tracking-wide"
                :style="{ color: item.color }"
              >
                {{ item.title }}
              </h3>
              <p class="text-fg-muted leading-relaxed m-0 mb-4 tracking-wide">
                {{ item.description }}
              </p>
              <ul class="list-none p-0 m-0 space-y-3">
                <li v-for="(detail, i) in item.details" :key="i" class="flex items-center">
                  <i :class="`pi ${detail.icon} mr-3 text-lg`" :style="{ color: item.color }"></i>
                  <span class="text-fg-muted tracking-wide">{{ detail.text }}</span>
                </li>
              </ul>
              <div v-if="item.software?.length" class="mt-4 pt-4 border-t border-border/70">
                <div class="flex flex-wrap gap-2">
                  <div
                    v-for="software in item.software"
                    :key="software.name"
                    class="flex items-center gap-2 px-2.5 py-1.5 rounded-full border border-border bg-black/20"
                  >
                    <img
                      :src="software.icon"
                      :alt="software.name"
                      class="w-4 h-4 rounded-sm object-cover"
                      loading="lazy"
                    />
                    <span class="text-xs text-fg-muted tracking-wide">{{ software.name }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <span
            v-motion
            :initial="{ opacity: 0, scale: 0.85 }"
            :visible-once="{
              opacity: 1,
              scale: 1,
              transition: { type: 'spring', stiffness: 220, damping: 15 },
            }"
            class="flex w-16 h-16 items-center justify-center text-fg rounded-full z-10 shadow-sm ring-1 ring-inset ring-white/5 transition-[transform,opacity] duration-300 cursor-pointer border-4 bg-surface-100"
            :hovered="{ opacity: 0.9, scale: 1.05 }"
            :tapped="{ opacity: 0.75, scale: 0.96 }"
            :style="{ borderColor: item.color }"
          >
            <i :class="`pi ${item.icon} text-3xl`" :style="{ color: item.color }"></i>
          </span>

          <div class="min-h-1">
            <div
              v-if="index % 2 === 1"
              v-motion
              :initial="{ opacity: 0, x: 24 }"
              :visible-once="{
                opacity: 1,
                x: 0,
                transition: { type: 'spring', stiffness: 170, damping: 16 },
              }"
              class="shadow-sm ring-1 ring-inset ring-white/5 p-5 border border-border rounded-2xl h-full transition-[transform,opacity,border-color] duration-300 cursor-pointer text-left bg-surface-100/80"
              :hovered="{ opacity: 0.95, y: -4 }"
              :tapped="{ opacity: 0.8, y: 0 }"
            >
              <h3
                class="text-2xl font-bold mb-3 text-balance tracking-wide"
                :style="{ color: item.color }"
              >
                {{ item.title }}
              </h3>
              <p class="text-fg-muted leading-relaxed m-0 mb-4 tracking-wide">
                {{ item.description }}
              </p>
              <ul class="list-none p-0 m-0 space-y-3">
                <li v-for="(detail, i) in item.details" :key="i" class="flex items-center">
                  <i :class="`pi ${detail.icon} mr-3 text-lg`" :style="{ color: item.color }"></i>
                  <span class="text-fg-muted tracking-wide">{{ detail.text }}</span>
                </li>
              </ul>
              <div v-if="item.software?.length" class="mt-4 pt-4 border-t border-border/70">
                <div class="flex flex-wrap gap-2">
                  <div
                    v-for="software in item.software"
                    :key="software.name"
                    class="flex items-center gap-2 px-2.5 py-1.5 rounded-full border border-border bg-black/20"
                  >
                    <img
                      :src="software.icon"
                      :alt="software.name"
                      class="w-4 h-4 rounded-sm object-cover"
                      loading="lazy"
                    />
                    <span class="text-xs text-fg-muted tracking-wide">{{ software.name }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="block lg:hidden space-y-6">
      <div
        v-for="(item, index) in creativeProcess"
        :key="index"
        v-motion
        class="border border-border shadow-sm ring-1 ring-inset ring-white/5 rounded-2xl p-5 transition-[transform,opacity,border-color] duration-300 cursor-pointer text-left bg-surface-100/70"
        :hovered="{ opacity: 0.95, y: -3 }"
        :tapped="{ opacity: 0.8, y: 0 }"
      >
        <button
          class="w-full flex items-center justify-between gap-3 mb-3 text-left"
          @click="toggleMobileItem(index)"
        >
          <div class="flex items-center gap-3">
            <div
              class="flex w-12 h-12 items-center justify-center text-fg rounded-full shadow-sm ring-1 ring-inset ring-white/5 border-2 shrink-0"
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
          <i
            class="pi pi-chevron-down text-fg-muted transition-transform duration-300"
            :class="expandedMobileIndex === index ? 'rotate-180' : ''"
          ></i>
        </button>

        <transition name="mobile-expand">
          <div v-if="expandedMobileIndex === index">
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

            <div v-if="item.software?.length" class="mt-4 pt-4 border-t border-border/70">
              <div class="flex flex-wrap gap-2">
                <div
                  v-for="software in item.software"
                  :key="software.name"
                  class="flex items-center gap-2 px-2.5 py-1.5 rounded-full border border-border bg-black/20"
                >
                  <img
                    :src="software.icon"
                    :alt="software.name"
                    class="w-4 h-4 rounded-sm object-cover"
                    loading="lazy"
                  />
                  <span class="text-xs text-fg-muted tracking-wide">{{ software.name }}</span>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<style scoped>
.mobile-expand-enter-active,
.mobile-expand-leave-active {
  transition:
    opacity 0.25s ease,
    transform 0.25s ease;
}

.mobile-expand-enter-from,
.mobile-expand-leave-to {
  opacity: 0;
  transform: translateY(-4px);
}
</style>
