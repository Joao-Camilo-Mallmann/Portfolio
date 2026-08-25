<script setup>
import { useI18n } from '@/composables/useI18n'
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import ScrollIndicator from './ScrollIndicator.vue'

const { t } = useI18n()
const router = useRouter()

const isLoaded = ref(false)
const hoveredPanel = ref(null)
const activePanel = ref(null)

const fontsList = [
  'font-mono-tech',
  'font-pixel-retro',
  'font-serif-classic',
  'font-display-bebas',
  'font-space-grotesk',
  'font-display-syne',
  'font-sans-default',
]

const currentFontClass = ref('font-sans-default')
const isCycling = ref(false)

const startDeceleratingFontCycle = () => {
  if (isCycling.value) return
  isCycling.value = true

  // Delays em ms totalizando ~3.0 segundos com desaceleração progressiva:
  const delays = [50, 60, 60, 70, 80, 90, 110, 140, 180, 230, 300, 400, 550, 750]
  let step = 0

  const runStep = () => {
    if (step < delays.length) {
      currentFontClass.value = fontsList[step % fontsList.length]
      const delay = delays[step]
      step++
      setTimeout(runStep, delay)
    } else {
      currentFontClass.value = 'font-sans-default'
      isCycling.value = false
    }
  }

  runStep()
}

onMounted(() => {
  setTimeout(() => {
    isLoaded.value = true
  }, 80)

  // Inicia a animação de desaceleração de 3 segundos ao carregar a página
  setTimeout(() => {
    startDeceleratingFontCycle()
  }, 350)
})

const handlePanelClick = (type) => {
  if (activePanel.value) return
  activePanel.value = type

  setTimeout(() => {
    // Navigate to respective route
    router.push(type === 'dev' ? '/dev' : '/editor')
  }, 880)
}

const scrollToStorytelling = () => {
  window.scrollTo({
    top: window.innerHeight,
    behavior: 'smooth',
  })
}
</script>

<template>
  <section
    class="relative w-full h-[100dvh] overflow-hidden flex flex-col md:flex-row bg-bg"
    :class="{ 'opacity-100': isLoaded, 'opacity-0': !isLoaded }"
    style="transition: opacity 0.5s ease"
    role="region"
    aria-label="Hero Identity & Portfolio Tracks"
  >
    <!-- MOBILE FLOATING IDENTITY OVERLAY (Top of the 100vh viewport) -->
    <div
      v-motion
      :initial="{ opacity: 0, y: -20 }"
      :enter="{
        opacity: 1,
        y: 0,
        transition: { type: 'spring', stiffness: 180, damping: 16, delay: 100 },
      }"
      class="md:hidden absolute top-0 left-0 right-0 z-20 pointer-events-none flex flex-col items-center text-center px-4 pt-5 pb-3 bg-linear-to-b from-black/80 via-black/40 to-transparent"
    >
      <div class="flex items-center gap-2.5 mb-1 pointer-events-auto">
        <img
          src="/img/eu.jpg"
          alt="João Camilo Mallmann"
          class="w-9 h-9 rounded-full border-2 border-white/20 shadow-md object-cover"
        />
        <h1
          class="shimmer-title text-lg sm:text-xl font-extrabold text-white tracking-tight drop-shadow-lg transition-transform duration-150"
          :class="[currentFontClass, { 'scale-[1.02] text-dev': isCycling }]"
        >
          {{ t('home.hero.name') }}
        </h1>
      </div>

      <p
        class="text-xs font-medium text-white/90 flex items-center gap-1.5 justify-center drop-shadow"
      >
        <span class="text-dev font-semibold">{{ t('home.hero.title') }}</span>
        <span class="text-white/40">{{ t('home.hero.titleSeparator') }}</span>
        <span class="text-editor font-semibold">{{ t('home.hero.titleSecondary') }}</span>
      </p>

      <div
        class="h-px w-20 bg-linear-to-r from-dev/60 via-white/50 to-editor/60 my-1 rounded-full"
      ></div>

      <p class="text-[11px] sm:text-xs text-white/80 italic tracking-wide drop-shadow">
        {{ t('home.hero.tagline') }}
      </p>
    </div>

    <!-- DESKTOP ONLY: Top Left Profile Photo -->
    <div
      v-motion
      :initial="{ opacity: 0, scale: 0.5, rotate: -12 }"
      :enter="{
        opacity: 1,
        scale: 1,
        rotate: 0,
        transition: { type: 'spring', stiffness: 200, damping: 14, delay: 100 },
      }"
      class="hidden md:flex absolute top-6 left-6 items-center gap-3 pointer-events-auto z-20"
    >
      <img
        src="/img/eu.jpg"
        alt="João Camilo Mallmann"
        class="w-12 h-12 rounded-full border-2 border-white/20 shadow-lg object-cover"
      />
    </div>

    <!-- DESKTOP ONLY: Floating Identity Overlay (Centered) -->
    <div
      class="hidden md:flex absolute inset-0 z-10 pointer-events-none flex-col justify-center items-center text-center p-6 mix-blend-normal overflow-visible"
    >
      <div
        class="flex flex-col items-center gap-2 max-w-2xl pointer-events-auto perspective-500 overflow-visible"
      >
        <!-- Nome com Font-Cycling Desacelerado (3s - Entrada Única), Spring 3D e Shimmer -->
        <h1
          v-motion
          :initial="{ opacity: 0, scale: 0.85, y: 30, rotateX: -15 }"
          :enter="{
            opacity: 1,
            scale: 1,
            y: 0,
            rotateX: 0,
            transition: { type: 'spring', stiffness: 160, damping: 14, delay: 200 },
          }"
          class="shimmer-title text-4xl md:text-6xl font-extrabold text-white tracking-tight drop-shadow-2xl transition-transform duration-150"
          :class="[currentFontClass, { 'scale-[1.02] text-dev': isCycling }]"
        >
          {{ t('home.hero.name') }}
        </h1>

        <!-- Título / Atuação com Spring Materialization e Cores Semânticas -->
        <p
          v-motion
          :initial="{ opacity: 0, scale: 0.9, y: 20 }"
          :enter="{
            opacity: 1,
            scale: 1,
            y: 0,
            transition: { type: 'spring', stiffness: 180, damping: 15, delay: 350 },
          }"
          class="text-lg md:text-xl font-medium text-white/80 drop-shadow-lg mt-2 flex items-center gap-2 flex-wrap justify-center"
        >
          <span class="text-dev font-semibold">{{ t('home.hero.title') }}</span>
          <span class="text-white/40">{{ t('home.hero.titleSeparator') }}</span>
          <span class="text-editor font-semibold">{{ t('home.hero.titleSecondary') }}</span>
        </p>

        <!-- Linha Divisora com Line Draw em Gradient Semântico -->
        <div
          v-motion
          :initial="{ scaleX: 0, opacity: 0 }"
          :enter="{
            scaleX: 1,
            opacity: 1,
            transition: { type: 'keyframes', ease: [0.16, 1, 0.3, 1], duration: 800, delay: 500 },
          }"
          class="h-px w-28 bg-linear-to-r from-dev/60 via-white/50 to-editor/60 my-4 rounded-full origin-center"
        ></div>

        <!-- Tagline com Slide + Spring -->
        <p
          v-motion
          :initial="{ opacity: 0, y: 20, scale: 0.95 }"
          :enter="{
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { type: 'spring', stiffness: 170, damping: 16, delay: 620 },
          }"
          class="text-xl md:text-2xl font-medium text-white/95 drop-shadow-lg italic tracking-wide"
        >
          {{ t('home.hero.tagline') }}
        </p>

        <!-- Subtitle com Entrada Suave em Cascata -->
        <p
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{
            opacity: 1,
            y: 0,
            transition: { type: 'spring', stiffness: 150, damping: 18, delay: 750 },
          }"
          class="text-sm md:text-base text-white/60 drop-shadow max-w-lg mt-2 leading-relaxed text-pretty"
        >
          {{ t('home.hero.subtitle') }}
        </p>
      </div>
    </div>

    <!-- Top (Mobile: 50dvh) / Left (Desktop: 100vh) Panel: Developer -->
    <div
      v-motion
      :initial="{ opacity: 0, x: -30, y: -20 }"
      :enter="{
        opacity: 1,
        x: 0,
        y: 0,
        transition: { type: 'spring', stiffness: 120, damping: 16, delay: 50 },
      }"
      class="panel group relative h-[50dvh] md:h-full flex-1 flex items-center justify-center cursor-pointer overflow-hidden isolate transition-[flex-grow,filter] duration-720 ease-in-out active:scale-[0.98] md:active:scale-100"
      :class="[
        hoveredPanel === 'dev'
          ? 'md:flex-[0.6]'
          : hoveredPanel === 'editor'
            ? 'md:flex-[0.4]'
            : 'md:flex-[0.5]',
        activePanel === 'dev' ? 'flex-[1] md:!flex-[1] z-20' : '',
        activePanel === 'editor'
          ? 'flex-[0] md:!flex-[0] blur-md grayscale pointer-events-none'
          : '',
      ]"
      @mouseenter="!activePanel && (hoveredPanel = 'dev')"
      @mouseleave="hoveredPanel = null"
      @click="handlePanelClick('dev')"
    >
      <div
        class="absolute inset-0 bg-cover bg-center -z-20 transition-transform duration-[1.2s] group-hover:scale-105"
        style="
          background-image: url('https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=crop');
        "
      ></div>
      <div
        class="absolute inset-0 bg-black/60 -z-10 group-hover:bg-black/40 transition-colors duration-500"
      ></div>
      <div
        class="absolute inset-0 bg-radial from-dev/40 to-transparent opacity-30 md:opacity-0 group-hover:opacity-100 -z-10 transition-opacity duration-700"
      ></div>

      <!-- Panel content positioned comfortably below the mobile top overlay (pt-16 md:pt-0) -->
      <div
        class="panel-content z-20 flex flex-col items-center text-center px-4 pt-16 pb-3 md:p-6 text-shadow pointer-events-auto"
      >
        <i
          class="pi pi-code text-3xl sm:text-4xl md:text-6xl text-dev md:text-white mb-1.5 md:mb-4 transition-transform transition-colors duration-500 md:group-hover:-translate-y-2 md:group-hover:text-dev"
        ></i>
        <h2 class="text-xl sm:text-2xl md:text-4xl font-bold text-white mb-1 md:mb-2 text-balance">
          {{ t('home.hero.devTitle') }}
        </h2>
        <p
          class="text-white/80 max-w-sm text-sm md:text-base hidden md:block opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-opacity transition-transform duration-500 delay-100 text-pretty"
        >
          {{ t('home.hero.devDescription') }}
        </p>
        <span
          class="mt-2 md:mt-6 inline-flex items-center gap-1.5 md:gap-2 px-3.5 py-1 md:p-0 rounded-full md:rounded-none bg-dev/15 md:bg-transparent border border-dev/30 md:border-none text-dev font-semibold text-xs md:text-base shadow-sm md:shadow-none md:opacity-0 md:translate-y-4 md:group-hover:opacity-100 md:group-hover:translate-y-0 transition-opacity transition-transform duration-500 md:delay-200"
        >
          {{ t('home.hero.devCta') }}
          <i
            class="pi pi-arrow-right text-[10px] md:text-sm group-hover:translate-x-1 transition-transform"
          ></i>
        </span>
      </div>
    </div>

    <!-- Center Divider Line (Mobile: Horizontal, Desktop: Vertical) -->
    <div
      class="md:hidden absolute top-1/2 left-6 right-6 h-px bg-white/20 z-20 -translate-y-1/2 pointer-events-none shadow-[0_0_10px_rgba(255,255,255,0.3)]"
      :style="{ opacity: activePanel ? '0' : '1' }"
    ></div>

    <div
      class="hidden md:block absolute top-0 bottom-0 w-px bg-white/20 z-20 left-1/2 -translate-x-1/2 pointer-events-none transition-all duration-[720ms] shadow-[0_0_15px_rgba(255,255,255,0.5)]"
      :style="{
        left: hoveredPanel === 'dev' ? '60%' : hoveredPanel === 'editor' ? '40%' : '50%',
        opacity: activePanel ? '0' : '1',
      }"
    ></div>

    <!-- Bottom (Mobile: 50dvh) / Right (Desktop: 100vh) Panel: Video Editor -->
    <div
      v-motion
      :initial="{ opacity: 0, x: 30, y: 20 }"
      :enter="{
        opacity: 1,
        x: 0,
        y: 0,
        transition: { type: 'spring', stiffness: 120, damping: 16, delay: 120 },
      }"
      class="panel group relative h-[50dvh] md:h-full flex-1 flex items-center justify-center cursor-pointer overflow-hidden isolate transition-[flex-grow,filter] duration-[720ms] ease-[cubic-bezier(0.4,0,0.2,1)] active:scale-[0.98] md:active:scale-100"
      :class="[
        hoveredPanel === 'editor'
          ? 'md:flex-[0.6]'
          : hoveredPanel === 'dev'
            ? 'md:flex-[0.4]'
            : 'md:flex-[0.5]',
        activePanel === 'editor' ? 'flex-[1] md:!flex-[1] z-20' : '',
        activePanel === 'dev' ? 'flex-[0] md:!flex-[0] blur-md grayscale pointer-events-none' : '',
      ]"
      @mouseenter="!activePanel && (hoveredPanel = 'editor')"
      @mouseleave="hoveredPanel = null"
      @click="handlePanelClick('editor')"
    >
      <div
        class="absolute inset-0 bg-cover bg-center -z-20 transition-transform duration-[1.2s] group-hover:scale-105"
        style="
          background-image: url('https://images.unsplash.com/photo-1574717025058-2f8737d2e2b7?q=80&w=687&auto=format&fit=crop');
        "
      ></div>
      <div
        class="absolute inset-0 bg-black/60 -z-10 group-hover:bg-black/40 transition-colors duration-500"
      ></div>
      <div
        class="absolute inset-0 bg-radial from-editor/40 to-transparent opacity-30 md:opacity-0 group-hover:opacity-100 -z-10 transition-opacity duration-700"
      ></div>

      <!-- Panel content positioned comfortably above the scroll indicator (pb-12 md:pb-6) -->
      <div
        class="panel-content z-20 flex flex-col items-center text-center px-4 pt-3 pb-12 md:p-6 text-shadow pointer-events-auto"
      >
        <i
          class="pi pi-video text-3xl sm:text-4xl md:text-6xl text-editor md:text-white mb-1.5 md:mb-4 transition-transform transition-colors duration-500 md:group-hover:-translate-y-2 md:group-hover:text-editor"
        ></i>
        <h2 class="text-xl sm:text-2xl md:text-4xl font-bold text-white mb-1 md:mb-2 text-balance">
          {{ t('home.hero.editorTitle') }}
        </h2>
        <p
          class="text-white/80 max-w-sm text-sm md:text-base hidden md:block opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-opacity transition-transform duration-500 delay-100 text-pretty"
        >
          {{ t('home.hero.editorDescription') }}
        </p>
        <span
          class="mt-2 md:mt-6 inline-flex items-center gap-1.5 md:gap-2 px-3.5 py-1 md:p-0 rounded-full md:rounded-none bg-editor/15 md:bg-transparent border border-editor/30 md:border-none text-editor font-semibold text-xs md:text-base shadow-sm md:shadow-none md:opacity-0 md:translate-y-4 md:group-hover:opacity-100 md:group-hover:translate-y-0 transition-opacity transition-transform duration-500 md:delay-200"
        >
          {{ t('home.hero.editorCta') }}
          <i
            class="pi pi-arrow-right text-[10px] md:text-sm group-hover:translate-x-1 transition-transform"
          ></i>
        </span>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <scroll-indicator @click="scrollToStorytelling" />

    <!-- Floating Socials -->
  </section>
</template>

<style scoped>
.text-shadow {
  text-shadow: 0 2px 16px rgba(0, 0, 0, 0.9);
}

.perspective-500 {
  perspective: 500px;
}

.shimmer-title {
  position: relative;
  overflow: hidden;
  display: inline-block;
  padding-top: 0.25em;
  padding-bottom: 0.1em;
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
  animation-delay: 1.2s;
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

.font-sans-default {
  font-family:
    'Inter',
    system-ui,
    -apple-system,
    sans-serif;
}
.font-mono-tech {
  font-family: 'Fira Code', monospace;
}
.font-serif-classic {
  font-family: 'Playfair Display', Georgia, serif;
}
.font-display-syne {
  font-family: 'Syne', sans-serif;
}
.font-space-grotesk {
  font-family: 'Space Grotesk', sans-serif;
}
.font-pixel-retro {
  font-family: 'Silkscreen', monospace;
}
.font-display-bebas {
  font-family: 'Bebas Neue', sans-serif;
  letter-spacing: 0.08em;
}

@media (prefers-reduced-motion: reduce) {
  .shimmer-title::after {
    animation: none !important;
  }
  .transition-all,
  .transition-transform,
  .transition-colors,
  .transition-opacity {
    transition-duration: 0.01ms !important;
  }
}
</style>
