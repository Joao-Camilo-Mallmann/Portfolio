<script setup>
import { useI18n } from '@/composables/useI18n'
import { useWhatsApp } from '@/composables/useWhatsApp'
import { computed, nextTick, onUnmounted, ref, watch } from 'vue'

const props = defineProps({
  // { youtubeId, title } ou null quando fechado
  video: {
    type: Object,
    default: null,
  },
})

const emit = defineEmits(['close'])

const { t } = useI18n()
const { whatsappLink } = useWhatsApp()

const isShort = computed(() => props.video?.format === 'short')

const closeButton = ref(null)
let lastFocused = null

const handleKeyDown = (event) => {
  if (event.key === 'Escape') emit('close')
}

watch(
  () => props.video,
  async (video) => {
    if (typeof document === 'undefined') return
    if (video) {
      lastFocused = document.activeElement
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
      await nextTick()
      closeButton.value?.focus()
    } else {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
      lastFocused?.focus?.()
    }
  },
)

onUnmounted(() => {
  if (typeof document === 'undefined') return
  document.body.style.overflow = ''
  window.removeEventListener('keydown', handleKeyDown)
})
</script>

<template>
  <Teleport to="body">
    <transition name="modal-fade">
      <div
        v-if="video"
        class="fixed inset-0 z-100 flex items-center justify-center p-4 md:p-6"
        role="dialog"
        aria-modal="true"
        :aria-label="video.title"
      >
        <div class="absolute inset-0 bg-black/85 backdrop-blur-md" @click="emit('close')"></div>

        <div
          class="relative z-10 mx-auto flex w-full flex-col overflow-hidden rounded-2xl border border-border bg-surface-100 shadow-2xl ring-1 ring-inset ring-white/10"
          :class="isShort ? 'max-w-[min(24rem,calc((100svh-12rem)*9/16))]' : 'max-w-5xl'"
        >
          <div
            class="flex items-center justify-between gap-4 border-b border-border px-5 py-3.5 font-mono text-xs tracking-wide text-fg-muted"
          >
            <span class="flex min-w-0 items-center gap-2">
              <span class="h-2 w-2 shrink-0 rounded-full bg-editor"></span>
              <span class="truncate text-sm font-semibold text-fg font-sans">{{
                video.title
              }}</span>
            </span>
            <button
              ref="closeButton"
              type="button"
              class="flex min-h-10 min-w-10 cursor-pointer items-center justify-center rounded-full text-fg-muted transition-colors duration-200 hover:bg-white/5 hover:text-fg focus-visible:outline-2 focus-visible:outline-editor"
              :aria-label="t('editorPlayer.close')"
              @click="emit('close')"
            >
              <i class="pi pi-times text-lg"></i>
            </button>
          </div>

          <div class="relative w-full bg-black" :class="isShort ? 'aspect-9/16' : 'aspect-video'">
            <iframe
              :src="`https://www.youtube-nocookie.com/embed/${video.youtubeId}?autoplay=1&rel=0&modestbranding=1`"
              class="h-full w-full border-0"
              allow="
                accelerometer;
                autoplay;
                clipboard-write;
                encrypted-media;
                gyroscope;
                picture-in-picture;
                web-share;
              "
              allowfullscreen
              :title="video.title"
            ></iframe>
          </div>

          <div
            class="flex flex-col gap-3 border-t border-border px-5 py-4"
            :class="isShort ? '' : 'sm:flex-row sm:items-center sm:justify-between'"
          >
            <a
              :href="`https://www.youtube.com/watch?v=${video.youtubeId}`"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 text-sm text-fg-muted transition-colors duration-200 hover:text-fg"
            >
              <i class="pi pi-youtube"></i>
              {{ t('editorPlayer.watchOnYoutube') }}
            </a>
            <a
              :href="whatsappLink('reference', `https://youtu.be/${video.youtubeId}`)"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-editor px-5 py-2.5 text-sm font-bold text-obsidian transition-opacity duration-200 hover:opacity-90"
            >
              <i class="pi pi-whatsapp"></i>
              {{ t('editorPlayer.wantOneLikeThis') }}
            </a>
          </div>
        </div>
      </div>
    </transition>
  </Teleport>
</template>

<style scoped>
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.25s ease;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}
</style>
