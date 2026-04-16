<script setup>
import { useI18n } from '@/composables/useI18n'
import { ref } from 'vue'

const { t } = useI18n()

const youtubeOFurryLink = ref(
  'https://yt3.googleusercontent.com/gnIEqwR1vmWB45wdNA45xHpRYaE0XiJUYihwt3aCI2A4TWG4jusXHKOLVi9WDr3rcJ1P5GlHcw=s160-c-k-c0x00ffffff-no-rj',
)

const openChannel = () => {
  window.open('https://www.youtube.com/@OFurryOficial', '_blank')
}
</script>

<template>
  <div class="relative mb-8 mx-4">
    <div class="text-center mb-6 relative">
      <h2
        class="relative text-2xl md:text-3xl font-extrabold mb-3 text-balance scroll-reveal-child"
      >
        <span
          class="bg-linear-to-r from-editor via-yellow-400 to-[#f0b86e] bg-clip-text text-transparent drop-shadow-lg"
        >
          {{ t('editorCreative.title') }}
        </span>
      </h2>
      <div class="relative inline-block scroll-reveal-child">
        <div
          class="absolute inset-0 bg-linear-to-r from-editor/40 to-yellow-500/40 blur-sm rounded-full opacity-70"
        ></div>
        <p
          class="relative text-gray-300 text-base md:text-lg font-medium px-6 py-2 bg-black/60 rounded-full border border-editor/30"
        >
          {{ t('editorCreative.subtitle') }}
          <span class="text-editor font-bold">{{ t('editorCreative.subtitleHighlight') }}</span>
          {{ t('editorCreative.subtitleEnd') }}
        </p>
      </div>
    </div>

    <div
      class="bg-black/70 border border-editor/30 rounded-2xl shadow-xl relative backdrop-blur-sm overflow-hidden cursor-pointer hover:border-editor/50 transition duration-300 max-w-4xl mx-auto active:scale-[0.96] scroll-reveal-child"
      @click="openChannel"
    >
      <div class="absolute inset-0 pointer-events-none">
        <div
          class="absolute top-4 left-4 w-16 h-16 bg-linear-to-r from-editor/20 to-yellow-500/20 rounded-full blur-lg opacity-70"
        ></div>
        <div
          class="absolute bottom-4 right-4 w-20 h-20 bg-linear-to-r from-yellow-400/15 to-[#f0b86e]/15 rounded-full blur-xl opacity-50"
        ></div>
        <div
          class="absolute inset-0 bg-linear-to-r from-transparent via-editor/3 to-transparent opacity-60"
        ></div>
      </div>
      <div class="relative z-10 flex items-center justify-between p-6 d-flex md:flex-row flex-col">
        <div class="relative">
          <div
            class="absolute inset-0 bg-linear-to-r from-editor/60 to-yellow-500/60 rounded-full blur-md opacity-80"
          ></div>
          <div class="relative bg-black rounded-full p-3 ring-1 ring-white/10">
            <img
              :src="youtubeOFurryLink"
              :alt="t('editorCreative.channelAlt')"
              class="w-25 h-25 md:w-24 md:h-24 rounded-full border-4 border-editor shadow-2xl"
            />
          </div>
        </div>
        <div class="flex-1 ml-6 d-flex flex-col justify-center items-center">
          <h3 class="text-lg md:text-xl font-bold text-editor mb-2 text-balance">OFurry</h3>
          <p class="text-gray-300 text-sm md:text-base mb-4 text-pretty">
            {{ t('editorCreative.channelDescription') }}
            <span class="text-editor font-semibold">{{
              t('editorCreative.channelHighlight')
            }}</span>
            {{ t('editorCreative.channelEnd') }}
          </p>
          <span class="inline-flex items-center gap-2 text-editor font-semibold py-2 px-4">
            <i class="pi pi-external-link"></i>
            {{ t('editorCreative.exploreChannel') }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Todas as animações estão agora centralizadas via scroll-reveal no parent */
</style>
