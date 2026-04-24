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
      <h2>
        <span class="text-editor drop-shadow-sm tracking-wide">
          {{ t('editorCreative.title') }}
        </span>
      </h2>
      <div class="relative inline-block">
        <p
          class="relative text-fg-muted text-base md:text-lg font-medium px-6 py-2 rounded-full border border-border tracking-wide"
        >
          {{ t('editorCreative.subtitle') }}
          <span class="text-editor font-bold">{{ t('editorCreative.subtitleHighlight') }}</span>
          {{ t('editorCreative.subtitleEnd') }}
        </p>
      </div>
    </div>

    <div
      v-motion
      class="border border-border shadow-sm ring-1 ring-inset ring-white/5 rounded-2xl relative overflow-hidden cursor-pointer hover:opacity-80 transition-opacity duration-300 max-w-4xl mx-auto"
      :hovered="{ opacity: 0.8 }"
      :tapped="{ opacity: 0.6 }"
      @click="openChannel"
    >
      <div class="relative z-10 flex items-center justify-between p-6 d-flex md:flex-row flex-col">
        <div class="relative">
          <div
            class="relative rounded-full p-2 border border-border shadow-sm ring-1 ring-inset ring-white/5"
          >
            <img
              :src="youtubeOFurryLink"
              :alt="t('editorCreative.channelAlt')"
              class="w-24 h-24 md:w-24 md:h-24 rounded-full border border-border"
            />
          </div>
        </div>
        <div class="flex-1 ml-6 d-flex flex-col justify-center items-center">
          <h3 class="text-lg md:text-xl font-bold text-fg mb-2 text-balance tracking-wide"></h3>
          <p class="text-fg-muted text-sm md:text-base mb-4 text-pretty tracking-wide">
            {{ t('editorCreative.channelDescription') }}
            <span class="text-editor font-semibold">{{
              t('editorCreative.channelHighlight')
            }}</span>
            {{ t('editorCreative.channelEnd') }}
          </p>
          <span
            class="inline-flex items-center gap-2 text-editor font-semibold py-2 px-4 transition-opacity"
          >
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
