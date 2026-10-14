<script setup>
import { toTimecode } from '@/data/editorProjects'
import { useI18n } from '@/composables/useI18n'
import { useWhatsApp } from '@/composables/useWhatsApp'
import { onMounted, onUnmounted, ref } from 'vue'

const emit = defineEmits(['showreel'])

const { t } = useI18n()
const { whatsappLink } = useWhatsApp()

// Timecode de gravação correndo desde que a página abriu (30 fps)
const FPS = 30
const recTimecode = ref(toTimecode(0))
let rafId = null
let startedAt = 0

const tick = (now) => {
  const elapsed = (now - startedAt) / 1000
  recTimecode.value = toTimecode(elapsed, Math.floor((elapsed % 1) * FPS))
  rafId = requestAnimationFrame(tick)
}

onMounted(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
  startedAt = performance.now()
  rafId = requestAnimationFrame(tick)
})

onUnmounted(() => {
  if (rafId) cancelAnimationFrame(rafId)
})
</script>

<template>
  <section
    class="relative flex min-h-svh flex-col overflow-hidden bg-obsidian"
    aria-labelledby="editor-hero-heading"
  >
    <!-- Imagem de fundo com tratamento cinematográfico -->
    <div class="absolute inset-0" aria-hidden="true">
      <img
        src="/img/editor-hero.webp"
        alt=""
        class="h-full w-full object-cover opacity-45"
        fetchpriority="high"
      />
      <div class="absolute inset-0 bg-linear-to-b from-obsidian/70 via-bg/60 to-bg"></div>
      <div class="hero-vignette absolute inset-0"></div>
    </div>

    <!-- Letterbox superior: o header fixo fica sobre esta faixa -->
    <div class="relative z-10 h-28 shrink-0 bg-black md:h-32" aria-hidden="true">
      <div
        class="absolute inset-x-0 bottom-0 mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 pb-3 font-mono text-[11px] tracking-wider text-fg-muted md:px-6 md:text-xs"
      >
        <div class="flex items-center gap-4">
          <span class="flex items-center gap-1.5 font-semibold text-red-500">
            <span class="rec-dot h-2 w-2 rounded-full bg-red-500"></span>
            {{ t('editorHero.rec') }}
          </span>
          <span class="tabular-nums">TC {{ recTimecode }}</span>
        </div>
        <span class="hidden truncate sm:inline">{{ t('editorHero.fileName') }}</span>
      </div>
    </div>

    <!-- Conteúdo -->
    <div
      class="relative z-10 mx-auto flex w-full max-w-5xl flex-1 flex-col items-center justify-center px-4 py-16 text-center md:py-24"
    >
      <div
        v-motion
        :initial="{ opacity: 0, y: 12 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 500, ease: [0.16, 1, 0.3, 1] } }"
        class="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-4 py-1.5 text-xs font-semibold tracking-[0.18em] text-editor uppercase backdrop-blur-sm"
      >
        <i class="pi pi-video text-xs"></i>
        {{ t('editorHero.badge') }}
      </div>

      <h1
        id="editor-hero-heading"
        v-motion
        :initial="{ opacity: 0, y: 24 }"
        :enter="{
          opacity: 1,
          y: 0,
          transition: { duration: 700, delay: 120, ease: [0.16, 1, 0.3, 1] },
        }"
        class="text-5xl leading-[0.95] font-black tracking-tight text-fg text-balance sm:text-7xl md:text-8xl lg:text-9xl"
      >
        {{ t('editorHero.titleStart') }}
        <span
          class="text-editor underline decoration-editor/50 decoration-4 underline-offset-[0.12em] md:decoration-[6px]"
          >{{ t('editorHero.titleHighlight') }}</span
        >{{ t('editorHero.titleEnd') }}
      </h1>

      <p
        v-motion
        :initial="{ opacity: 0, y: 16 }"
        :enter="{
          opacity: 1,
          y: 0,
          transition: { duration: 600, delay: 260, ease: [0.16, 1, 0.3, 1] },
        }"
        class="mt-8 max-w-2xl text-lg leading-relaxed text-fg/80 text-pretty md:text-xl"
      >
        {{ t('editorHero.subtitle') }}
      </p>

      <div
        v-motion
        :initial="{ opacity: 0, y: 16 }"
        :enter="{
          opacity: 1,
          y: 0,
          transition: { duration: 600, delay: 380, ease: [0.16, 1, 0.3, 1] },
        }"
        class="mt-10 flex w-full flex-col items-stretch justify-center gap-3 sm:w-auto sm:flex-row sm:items-center"
      >
        <a
          :href="whatsappLink('general')"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-editor px-8 text-base font-bold text-obsidian shadow-lg shadow-editor/25 transition-opacity duration-200 hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-editor md:text-lg"
        >
          <i class="pi pi-whatsapp text-lg"></i>
          {{ t('editorHero.ctaPrimary') }}
        </a>
        <button
          type="button"
          class="inline-flex min-h-14 cursor-pointer items-center justify-center gap-3 rounded-full border border-white/15 bg-black/40 px-8 text-base font-semibold text-fg backdrop-blur-sm transition-colors duration-200 hover:border-white/30 hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-editor md:text-lg"
          @click="emit('showreel')"
        >
          <i class="pi pi-play-circle text-lg"></i>
          {{ t('editorHero.ctaShowreel') }}
        </button>
      </div>
    </div>

    <!-- Letterbox inferior -->
    <div class="relative z-10 h-14 shrink-0 bg-black" aria-hidden="true">
      <div
        class="mx-auto flex h-full max-w-6xl items-center justify-between gap-4 px-4 font-mono text-[11px] tracking-wider text-fg-muted md:px-6 md:text-xs"
      >
        <div class="flex items-center gap-6">
          <span>{{ t('editorHero.format') }}</span>
          <span class="hidden sm:inline">{{ t('editorHero.loudness') }}</span>
        </div>
        <span class="text-editor">{{ t('editorHero.signature') }}</span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-vignette {
  background: radial-gradient(ellipse at center, transparent 40%, rgba(0, 0, 0, 0.65) 100%);
}

.rec-dot {
  animation: rec-blink 1.2s steps(2, jump-none) infinite;
}

@keyframes rec-blink {
  50% {
    opacity: 0.2;
  }
}

@media (prefers-reduced-motion: reduce) {
  .rec-dot {
    animation: none;
  }
}
</style>
