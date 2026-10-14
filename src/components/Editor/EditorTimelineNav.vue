<script setup>
import { toTimecode } from '@/data/editorProjects'
import { useI18n } from '@/composables/useI18n'
import { useWhatsApp } from '@/composables/useWhatsApp'
import { computed, onMounted, onUnmounted, ref, watch } from 'vue'

const props = defineProps({
  // [{ id: 'portfolio', labelKey: 'portfolio' }] na ordem em que as seções aparecem
  clips: {
    type: Array,
    required: true,
  },
})

const { t } = useI18n()
const { whatsappLink } = useWhatsApp()

// Duração "fictícia" da página na régua: 5 minutos a 30 fps
const TOTAL_SECONDS = 300
const FPS = 30

const progress = ref(0)
const activeIndex = ref(-1)
const trackScroller = ref(null)
const clipRefs = ref([])

const timecode = computed(() => {
  const seconds = progress.value * TOTAL_SECONDS
  return toTimecode(seconds, Math.floor((seconds % 1) * FPS))
})

let rafId = null

// Linha de leitura: um pouco abaixo do header + timeline
const readingLine = () => window.innerHeight * 0.35

function measure() {
  rafId = null
  const sections = props.clips.map((clip) => document.getElementById(clip.id))
  if (sections.some((el) => !el)) return

  const y = window.scrollY + readingLine()
  const tops = sections.map((el) => el.getBoundingClientRect().top + window.scrollY)
  const last = sections[sections.length - 1]
  const end = last.getBoundingClientRect().bottom + window.scrollY
  const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2

  if (atBottom) {
    progress.value = 1
    activeIndex.value = sections.length - 1
    return
  }

  if (y < tops[0]) {
    progress.value = 0
    activeIndex.value = -1
    return
  }

  let index = tops.findIndex((top, i) => y >= top && y < (tops[i + 1] ?? end))
  if (index === -1) index = sections.length - 1

  const start = tops[index]
  const stop = tops[index + 1] ?? end
  const local = Math.min(1, Math.max(0, (y - start) / (stop - start)))

  activeIndex.value = index
  progress.value = (index + local) / sections.length
}

const onScroll = () => {
  if (rafId === null) rafId = requestAnimationFrame(measure)
}

function goTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

// No mobile a trilha rola na horizontal: mantém o clipe ativo à vista
watch(activeIndex, (index) => {
  const scroller = trackScroller.value
  const clip = clipRefs.value[index]
  if (!scroller || !clip || scroller.scrollWidth <= scroller.clientWidth) return
  scroller.scrollTo({ left: clip.offsetLeft - 24, behavior: 'smooth' })
})

onMounted(() => {
  measure()
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('resize', onScroll, { passive: true })
})

onUnmounted(() => {
  if (rafId) cancelAnimationFrame(rafId)
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('resize', onScroll)
})
</script>

<template>
  <nav
    class="sticky top-14 z-40 border-b border-white/5 bg-obsidian/90 px-4 backdrop-blur-md md:px-6"
    :aria-label="t('editorTimeline.ariaLabel')"
  >
    <div class="mx-auto flex h-14 max-w-6xl items-center gap-4 md:gap-6">
      <span
        class="hidden w-24 shrink-0 font-mono text-xs text-fg-muted tabular-nums sm:block"
        aria-hidden="true"
      >
        {{ timecode }}
      </span>

      <!-- Clipes com a régua fina e o playhead embaixo -->
      <div
        ref="trackScroller"
        class="timeline-scroller relative h-full min-w-0 flex-1 overflow-x-auto"
      >
        <div class="relative flex h-full min-w-max md:min-w-0">
          <a
            v-for="(clip, index) in clips"
            :key="clip.id"
            :ref="(el) => (clipRefs[index] = el)"
            :href="`#${clip.id}`"
            class="flex flex-1 items-center justify-center px-3 text-sm font-medium whitespace-nowrap transition-colors duration-200 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-editor"
            :class="index === activeIndex ? 'text-fg' : 'text-fg-muted hover:text-fg'"
            :aria-current="index === activeIndex ? 'true' : undefined"
            @click.prevent="goTo(clip.id)"
          >
            {{ t(`editorTimeline.clips.${clip.labelKey}`) }}
          </a>

          <div class="absolute inset-x-0 bottom-0 h-px bg-white/10" aria-hidden="true">
            <div class="h-full bg-editor" :style="{ width: `${progress * 100}%` }"></div>
            <span
              class="absolute -top-[3px] h-[7px] w-[7px] -translate-x-1/2 rounded-full bg-editor"
              :style="{ left: `${progress * 100}%` }"
            ></span>
          </div>
        </div>
      </div>

      <a
        :href="whatsappLink('general')"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex h-9 shrink-0 items-center gap-2 rounded-full bg-editor px-4 text-sm font-bold text-obsidian transition-opacity duration-200 hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-editor"
        :aria-label="t('editorTimeline.cta')"
      >
        <i class="pi pi-whatsapp"></i>
        <span class="hidden sm:inline">{{ t('editorTimeline.cta') }}</span>
      </a>
    </div>
  </nav>
</template>

<style scoped>
.timeline-scroller {
  scrollbar-width: none;
}

.timeline-scroller::-webkit-scrollbar {
  display: none;
}
</style>
