<script setup>
import { useI18n } from '@/composables/useI18n'
import { splitImages } from '@/data/homeSplit'
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'

const { t, localizedPath } = useI18n()
const router = useRouter()

const panels = [
  {
    key: 'dev',
    path: '/dev',
    icon: 'pi-code',
    image: splitImages.dev,
    iconClass: 'text-dev',
    glowClass: 'from-dev/55',
    buttonClass: 'bg-dev',
  },
  {
    key: 'editor',
    path: '/editor',
    icon: 'pi-video',
    image: splitImages.editor,
    iconClass: 'text-editor',
    glowClass: 'from-editor/50',
    buttonClass: 'bg-editor',
  },
]

const hoveredPanel = ref(null)
const activePanel = ref(null)
let navigateTimer = null

// O lado escolhido cresce até ocupar o split inteiro, o outro some, e só então a rota muda
const openPanel = (panel) => {
  if (activePanel.value) return
  hoveredPanel.value = null
  activePanel.value = panel.key
  navigateTimer = setTimeout(() => {
    router.push(localizedPath(panel.path))
  }, 880)
}

const panelClass = (key) => {
  if (activePanel.value) {
    return activePanel.value === key ? 'grow' : 'pointer-events-none grow-0 basis-0 opacity-0'
  }
  return hoveredPanel.value === key ? 'md:grow-[1.6]' : ''
}

const isLit = (key) => hoveredPanel.value === key || activePanel.value === key

// Nome: na entrada do site troca de fonte, cor e escala, desacelerando até parar no estilo final
const cycleFonts = [
  "'Fira Code', monospace",
  "'Silkscreen', monospace",
  "'Playfair Display', serif",
  "'Bebas Neue', sans-serif",
  "'Monoton', sans-serif",
  "'Syne', sans-serif",
  "'Permanent Marker', cursive",
  "'Orbitron', sans-serif",
  "'Abril Fatface', serif",
  'var(--font-display)',
]
const cycleColors = [
  'var(--color-dev)',
  'var(--color-editor)',
  'var(--color-magenta)',
  'var(--color-cyan-glow)',
  'var(--color-fg)',
]
const cycleDelays = [
  60, 60, 70, 70, 80, 80, 90, 100, 110, 120, 140, 160, 190, 230, 280, 340, 420, 520,
]

const cycleStep = ref(0)
let cycleTimers = []

const cycleName = () => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
  let step = 0

  const run = () => {
    if (step < cycleDelays.length) {
      cycleStep.value = step + 1
      cycleTimers.push(setTimeout(run, cycleDelays[step]))
      step++
    } else {
      cycleStep.value = 0
    }
  }

  run()
}

const nameStyle = computed(() => {
  if (!cycleStep.value) return null
  const index = cycleStep.value - 1
  return {
    fontFamily: cycleFonts[index % cycleFonts.length],
    color: cycleColors[index % cycleColors.length],
    transform: `scale(${index % 2 ? 1.03 : 0.98})`,
  }
})

// Nome em 3D leve: inclina seguindo o mouse (só em telas com mouse)
const tilt = ref({ x: 0, y: 0 })
let canTilt = false

const nameTiltStyle = computed(() => ({
  transform: `rotateX(${tilt.value.x}deg) rotateY(${tilt.value.y}deg)`,
}))

const handleTilt = (event) => {
  if (!canTilt) return
  const rect = event.currentTarget.getBoundingClientRect()
  const px = (event.clientX - rect.left) / rect.width - 0.5
  const py = (event.clientY - rect.top) / rect.height - 0.5
  tilt.value = { x: -py * 14, y: px * 18 }
}

const resetTilt = () => {
  tilt.value = { x: 0, y: 0 }
}

onMounted(() => {
  cycleTimers.push(setTimeout(cycleName, 350))
  canTilt =
    window.matchMedia('(pointer: fine)').matches &&
    !window.matchMedia('(prefers-reduced-motion: reduce)').matches
})

onBeforeUnmount(() => {
  cycleTimers.forEach(clearTimeout)
  clearTimeout(navigateTimer)
})
</script>

<template>
  <section
    class="relative mx-auto flex min-h-svh max-w-7xl flex-col px-4 pt-24 pb-6 md:px-6 md:pt-28 2xl:max-w-[1400px]"
    aria-labelledby="home-hero-name"
  >
    <!-- Nome, atuação e frase -->
    <div class="flex flex-wrap items-end justify-between gap-x-12 gap-y-5 pb-6 md:pb-8">
      <div
        class="flex flex-col items-start [perspective:700px]"
        @pointermove="handleTilt"
        @pointerleave="resetTilt"
      >
        <div
          class="origin-left transition-transform duration-300 ease-out [transform-style:preserve-3d]"
          :style="nameTiltStyle"
        >
          <h1
            id="home-hero-name"
            v-motion
            :initial="{ opacity: 0, scale: 0.85, y: 30, rotateX: -15 }"
            :enter="{
              opacity: 1,
              scale: 1,
              y: 0,
              rotateX: 0,
              transition: { type: 'spring', stiffness: 160, damping: 14, delay: 150 },
            }"
            class="shimmer-title text-[2.5rem] leading-[0.95] font-extrabold tracking-tight whitespace-nowrap text-fg uppercase md:text-7xl"
          >
            <span
              class="name-3d block origin-left transition-transform duration-100"
              :style="nameStyle"
            >
              {{ t('home.hero.nameFirst') }}&#32;<br />{{ t('home.hero.nameLast') }}
            </span>
          </h1>
        </div>

        <p
          v-motion
          :initial="{ opacity: 0, scale: 0.9, y: 20 }"
          :enter="{
            opacity: 1,
            scale: 1,
            y: 0,
            transition: { type: 'spring', stiffness: 180, damping: 15, delay: 350 },
          }"
          class="mt-3 flex flex-wrap items-center gap-2 text-base font-semibold md:mt-4 md:text-xl"
        >
          <span class="text-dev">{{ t('home.hero.roleDev') }}</span>
          <span class="text-white/40" aria-hidden="true">•</span>
          <span class="text-editor">{{ t('home.hero.roleEditor') }}</span>
        </p>

        <div
          v-motion
          :initial="{ scaleX: 0, opacity: 0 }"
          :enter="{
            scaleX: 1,
            opacity: 1,
            transition: { type: 'keyframes', ease: [0.16, 1, 0.3, 1], duration: 800, delay: 500 },
          }"
          class="mt-4 h-px w-28 origin-left rounded-full bg-linear-to-r from-dev/70 via-white/50 to-editor/70"
          aria-hidden="true"
        ></div>
      </div>

      <div class="flex max-w-md flex-col gap-2">
        <p
          v-motion
          :initial="{ opacity: 0, y: 20, scale: 0.95 }"
          :enter="{
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { type: 'spring', stiffness: 170, damping: 16, delay: 620 },
          }"
          class="hidden text-xl font-medium tracking-wide text-white/95 italic md:block md:text-2xl"
        >
          {{ t('home.hero.tagline') }}
        </p>
        <p
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{
            opacity: 1,
            y: 0,
            transition: { type: 'spring', stiffness: 150, damping: 18, delay: 750 },
          }"
          class="text-[15px] leading-relaxed text-fg-muted text-pretty md:text-base"
        >
          {{ t('home.hero.bio') }}
        </p>
      </div>
    </div>

    <!-- Split Dev / Editor -->
    <nav
      :aria-label="t('home.hero.splitLabel')"
      class="flex min-h-[420px] flex-1 flex-col gap-2.5 md:mx-[calc(50%-50vw+1rem)] md:min-h-[620px] md:flex-row md:gap-0 md:overflow-hidden md:rounded-3xl md:bg-obsidian md:ring-1 md:ring-white/10"
    >
      <template v-for="(panel, index) in panels" :key="panel.key">
        <!-- Linha brilhante entre os lados, como no split original -->
        <div
          v-if="index === 1"
          class="relative z-10 hidden w-0 transition-opacity duration-300 md:block"
          :class="activePanel || hoveredPanel ? 'opacity-50' : 'opacity-100'"
          aria-hidden="true"
        >
          <div
            class="absolute inset-y-[6%] -left-px w-px bg-linear-to-b from-transparent via-white/60 to-transparent shadow-[0_0_15px_rgba(255,255,255,0.5)]"
            :class="activePanel ? 'opacity-0' : ''"
          ></div>
        </div>

        <a
          v-motion
          :href="localizedPath(panel.path)"
          :aria-label="t(`home.hero.${panel.key}.aria`)"
          :initial="{ opacity: 0, y: 30 }"
          :enter="{
            opacity: 1,
            y: 0,
            transition: { type: 'spring', stiffness: 120, damping: 16, delay: 150 + index * 100 },
          }"
          class="door group relative flex min-h-0 min-w-0 flex-1 flex-col justify-end overflow-hidden rounded-[20px] text-white ring-1 ring-white/10 transition-[flex-grow,flex-basis,opacity] duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-white md:rounded-none md:ring-0"
          :class="panelClass(panel.key)"
          @mouseenter="!activePanel && (hoveredPanel = panel.key)"
          @mouseleave="hoveredPanel = null"
          @click.prevent="openPanel(panel)"
        >
          <div
            class="absolute inset-0 bg-cover bg-center transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
            :style="{ backgroundImage: `url('${panel.image}')` }"
            aria-hidden="true"
          ></div>
          <div
            class="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-black/15"
            aria-hidden="true"
          ></div>
          <div
            class="absolute inset-0 bg-radial-[at_50%_115%] to-transparent to-60% transition-opacity duration-500"
            :class="[panel.glowClass, isLit(panel.key) ? 'opacity-100' : 'opacity-0']"
            aria-hidden="true"
          ></div>

          <div
            class="relative flex items-end justify-between gap-3 p-4 md:flex-col md:items-start md:justify-end md:gap-3 md:p-10"
          >
            <div class="flex flex-col gap-1.5 md:max-w-md md:gap-2.5">
              <i
                class="pi text-2xl md:text-3xl"
                :class="[panel.icon, panel.iconClass]"
                aria-hidden="true"
              ></i>
              <h2
                class="font-display text-[1.625rem] leading-tight font-medium tracking-tight md:text-5xl"
              >
                {{ t(`home.hero.${panel.key}.title`) }}
              </h2>
              <p class="text-[13px] leading-relaxed text-white/85 text-pretty md:text-[15px]">
                {{ t(`home.hero.${panel.key}.description`) }}
              </p>
            </div>
            <span
              class="inline-flex size-11 shrink-0 items-center justify-center gap-2 rounded-full font-bold text-obsidian md:mt-1.5 md:size-auto md:min-h-11 md:px-5 md:text-[15px]"
              :class="panel.buttonClass"
            >
              <span class="hidden md:inline">{{ t(`home.hero.${panel.key}.cta`) }}</span>
              <i
                class="pi pi-arrow-right text-sm transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              ></i>
            </span>
          </div>
        </a>
      </template>
    </nav>

    <p class="mt-3 hidden text-center text-sm text-fg-muted md:block">
      {{ t('home.hero.hint') }}
    </p>
    <p class="mt-3 text-center text-[13px] text-fg-muted md:hidden">
      {{ t('home.hero.hintTouch') }}
    </p>
  </section>
</template>

<style scoped>
.shimmer-title {
  position: relative;
  overflow: hidden;
  padding-top: 0.25em;
  padding-right: 0.15em;
  padding-bottom: 0.18em;
}

/* Profundidade leve: camadas de sombra em azul e laranja formam um relevo */
.name-3d {
  text-shadow:
    1px 1px 0 color-mix(in srgb, var(--color-dev) 55%, transparent),
    2px 2px 0 color-mix(in srgb, var(--color-dev) 40%, transparent),
    3px 3px 0 color-mix(in srgb, var(--color-editor) 35%, transparent),
    4px 4px 0 color-mix(in srgb, var(--color-editor) 22%, transparent),
    6px 10px 24px rgba(0, 0, 0, 0.55);
}

.shimmer-title::after {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 60%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  animation: shimmer 4s ease-in-out infinite;
  animation-delay: 3.6s;
  pointer-events: none;
}

@keyframes shimmer {
  0% {
    left: -60%;
  }
  40%,
  100% {
    left: 160%;
  }
}

@media (prefers-reduced-motion: reduce) {
  .shimmer-title::after {
    animation: none;
  }
  .door,
  .door * {
    transition-duration: 0.01ms !important;
  }
}
</style>
