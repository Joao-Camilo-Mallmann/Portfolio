<script setup>
import { useI18n } from '@/composables/useI18n'
import { onMounted, onUnmounted, ref } from 'vue'

const { t, locale } = useI18n()

// Mouse position for parallax effect of background layers
const mouseX = ref(0)
const mouseY = ref(0)
let requestAnimationFrameId = null

const handleMouseMove = (e) => {
  if (requestAnimationFrameId) return

  requestAnimationFrameId = window.requestAnimationFrame(() => {
    const { clientX, clientY } = e
    // Center of screen is (0,0)
    const x = (clientX - window.innerWidth / 2) / 30
    const y = (clientY - window.innerHeight / 2) / 30
    mouseX.value = x
    mouseY.value = y
    requestAnimationFrameId = null
  })
}

const scrollToProjects = () => {
  const el = document.getElementById('projects')
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

const isScanning = ref(false)
const triggerScan = () => {
  if (isScanning.value) return
  isScanning.value = true
  setTimeout(() => {
    isScanning.value = false
  }, 1500)
}

onMounted(() => {
  window.addEventListener('mousemove', handleMouseMove, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('mousemove', handleMouseMove)
  if (requestAnimationFrameId) {
    window.cancelAnimationFrame(requestAnimationFrameId)
  }
})
</script>

<template>
  <section
    class="relative pt-32 md:pt-36 pb-16 px-4 max-w-7xl 2xl:max-w-[1400px] mx-auto overflow-hidden min-h-[92vh] flex flex-col justify-between"
  >
    <!-- Scanline overlay (activated on click/hover of the intro panel) -->
    <div
      v-if="isScanning"
      class="absolute inset-0 z-50 pointer-events-none bg-linear-to-b from-transparent via-dev/20 to-transparent animate-scan"
    ></div>

    <!-- Full Width Holographic Background -->
    <div
      class="absolute inset-0 pointer-events-none transition-transform duration-300 ease-out flex items-center justify-center overflow-visible z-0"
      :style="{ transform: `translate3d(${mouseX * 0.15}px, ${mouseY * 0.15}px, 0)` }"
    >
      <!-- Fixed aspect ratio square so circles don't stretch into ovals -->
      <div
        class="relative w-[1000px] h-[1000px] lg:w-[1400px] lg:h-[1400px] flex-shrink-0 flex items-center justify-center"
      >
        <!-- Spinning HUD Circles (Outer & Inner) -->
        <div class="absolute inset-0 flex items-center justify-center animate-spin-slow">
          <svg class="w-[70%] h-[70%] opacity-20 stroke-dev fill-none" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="46" stroke-dasharray="1 8" stroke-width="0.5" />
            <circle cx="50" cy="50" r="41" stroke-dasharray="5 15" stroke-width="0.3" />
          </svg>
        </div>

        <div class="absolute inset-0 flex items-center justify-center animate-spin-reverse">
          <svg class="w-[55%] h-[55%] opacity-30 stroke-cyan-glow fill-none" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="34" stroke-dasharray="10 5 2 5" stroke-width="0.8" />
            <circle cx="50" cy="50" r="29" stroke-dasharray="1 4" stroke-width="0.5" />
          </svg>
        </div>

        <!-- Floating Tech Stack Icons -->
        <!-- Vue SVG -->
        <div class="absolute top-[22%] left-[18%] w-12 h-12 opacity-30 animate-float-slow-1">
          <svg viewBox="0 0 256 221" class="w-full h-full fill-dev">
            <path d="M204.8 0H256L128 220.8L0 0h51.2L128 132.48L204.8 0z" />
            <path
              d="M204.8 0H160L128 55.2L96 0H51.2L128 132.48L204.8 0z"
              fill="white"
              opacity="0.5"
            />
          </svg>
        </div>

        <!-- React SVG -->
        <div class="absolute top-[65%] left-[10%] w-16 h-16 opacity-30 animate-float-mid-2">
          <svg
            viewBox="-11.5 -10.23174 23 20.46348"
            class="w-full h-full fill-none stroke-dev"
            stroke-width="1"
          >
            <circle cx="0" cy="0" r="2.05" fill="currentColor" />
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
          </svg>
        </div>

        <!-- TS Icon -->
        <div
          class="absolute top-[25%] right-[15%] w-10 h-10 opacity-30 animate-float-mid-2 text-dev font-sans font-black flex items-center justify-center border-2 border-dev rounded-sm"
        >
          TS
        </div>

        <!-- Tailwind SVG -->
        <div class="absolute bottom-[25%] right-[22%] w-14 h-14 opacity-30 animate-float-slow-1">
          <svg viewBox="0 0 100 60" class="w-full h-full fill-dev">
            <path
              d="M25,10 C12.5,10 5,22.5 5,35 C5,47.5 12.5,60 25,60 C37.5,60 37.5,35 50,35 C62.5,35 70,47.5 70,60 C82.5,60 95,47.5 95,35 C95,22.5 82.5,10 70,10 C57.5,10 57.5,35 45,35 C32.5,35 25,10 25,10 Z"
            />
          </svg>
        </div>

        <!-- JS Icon -->
        <div
          class="absolute top-[80%] left-[25%] w-10 h-10 opacity-30 animate-float-slow-1 text-dev font-sans font-black flex items-center justify-center border-2 border-dev rounded-sm"
        >
          JS
        </div>

        <!-- Vite SVG -->
        <div class="absolute top-[15%] right-[35%] w-12 h-12 opacity-20 animate-float-mid-2">
          <svg viewBox="0 0 100 100" class="w-full h-full fill-dev">
            <polygon points="5,5 95,5 50,95" opacity="0.4" />
            <polygon points="20,15 80,15 50,85" fill="white" opacity="0.6" />
          </svg>
        </div>

        <!-- Git SVG -->
        <div class="absolute top-[40%] right-[10%] w-14 h-14 opacity-25 animate-float-slow-1">
          <svg viewBox="0 0 100 100" class="w-full h-full fill-dev">
            <path d="M50 5 L95 50 L50 95 L5 50 Z" opacity="0.3" />
            <circle cx="50" cy="25" r="8" fill="white" opacity="0.6" />
            <circle cx="25" cy="50" r="8" fill="white" opacity="0.6" />
            <circle cx="50" cy="75" r="8" fill="white" opacity="0.6" />
            <line x1="50" y1="25" x2="50" y2="75" stroke="white" stroke-width="4" opacity="0.6" />
            <line x1="25" y1="50" x2="50" y2="25" stroke="white" stroke-width="4" opacity="0.6" />
          </svg>
        </div>

        <!-- Nuxt Icon -->
        <div
          class="absolute top-[85%] right-[30%] w-12 h-12 opacity-30 animate-float-mid-2 text-dev font-sans font-black flex items-center justify-center border-2 border-dev rounded-sm text-[8px] tracking-widest"
        >
          NUXT
        </div>

        <!-- Node Hexagon -->
        <div
          class="absolute top-[45%] left-[5%] w-14 h-14 opacity-20 animate-float-slow-1 text-dev font-black flex items-center justify-center"
        >
          <svg viewBox="0 0 100 100" class="w-full h-full fill-dev opacity-40 absolute inset-0">
            <polygon points="50,5 90,25 90,75 50,95 10,75 10,25" />
          </svg>
          <span class="relative z-10 text-[10px] text-white/70">NODE</span>
        </div>

        <!-- HTML5/CSS3 Icons -->
        <div
          class="absolute top-[10%] left-[40%] w-9 h-9 opacity-25 animate-float-mid-2 text-dev font-sans font-bold flex items-center justify-center border border-dev/50 rounded-md text-[10px]"
        >
          HTML
        </div>
        <div
          class="absolute bottom-[10%] left-[45%] w-9 h-9 opacity-25 animate-float-slow-1 text-dev font-sans font-bold flex items-center justify-center border border-dev/50 rounded-md text-[10px]"
        >
          CSS
        </div>

        <!-- Technical Data labels -->
        <div
          class="absolute top-[28%] right-[8%] flex items-center gap-1.5 font-mono text-[9px] text-cyan-glow/60 bg-black/60 px-2 py-1 rounded border border-cyan-glow/20"
        >
          <span class="w-1.5 h-1.5 rounded-full bg-cyan-glow animate-ping"></span>
          <span>[COORD // -29.684 : -51.133]</span>
        </div>

        <div
          class="absolute bottom-[30%] left-[8%] flex items-center gap-1.5 font-mono text-[9px] text-magenta/60 bg-black/60 px-2 py-1 rounded border border-magenta/20"
        >
          <span class="w-1.5 h-1.5 rounded-full bg-magenta animate-ping"></span>
          <span>[MATRIX_REF // AX.789]</span>
        </div>

        <!-- Code snippets floating around -->
        <div
          class="absolute left-[15%] top-[40%] font-mono text-[8px] text-dev/40 select-none hidden md:block"
        >
          <pre class="leading-relaxed">
import { ref } from 'vue'
const scanning = ref(true)
while (scanning) {
  analyzeCode()
}
          </pre>
        </div>

        <div
          class="absolute right-[15%] bottom-[40%] font-mono text-[8px] text-cyan-glow/30 select-none hidden md:block"
        >
          <pre class="leading-relaxed text-right">
&lt;template&gt;
  &lt;div class="hologram"&gt;
    &lt;canvas ref="grid" /&gt;
  &lt;/div&gt;
&lt;/template&gt;
          </pre>
        </div>
      </div>
    </div>

    <!-- Main Asymmetric Grid -->
    <div
      class="relative z-10 grid gap-12 lg:gap-24 lg:grid-cols-[0.9fr_1.1fr] lg:items-center my-auto"
    >
      <!-- Left Column: Copy & Actions -->
      <div
        v-motion
        :initial="{ opacity: 0, x: -30 }"
        :enter="{
          opacity: 1,
          x: 0,
          transition: { delay: 150, duration: 800, ease: [0.16, 1, 0.3, 1] },
        }"
        class="text-left flex flex-col justify-center relative z-10"
      >
        <h1
          class="text-6xl md:text-8xl lg:text-[10rem] font-black uppercase tracking-tight text-white leading-[0.85] mb-6 select-none"
        >
          <span
            class="block text-white/70 text-sm md:text-base lg:text-lg font-mono tracking-[0.25em] text-dev mb-2"
            >HEY, I'M</span
          >
          <span
            class="block text-brushed-metal font-sans font-extrabold normal-case tracking-normal py-2"
            >{{ t('dev.heroName') }}</span
          >
        </h1>

        <div
          class="flex items-center gap-3 font-mono text-lg md:text-2xl font-bold text-white mb-6 uppercase tracking-wider"
        >
          <span class="text-dev font-bold text-xl">&gt;</span>
          <span class="bg-linear-to-r from-white to-gray-400 bg-clip-text text-transparent">{{
            t('devProfile.role')
          }}</span>
        </div>

        <p
          class="max-w-2xl text-fg-muted text-sm md:text-base lg:text-lg leading-relaxed tracking-wide mb-8"
        >
          {{ t('devProfile.description') }}
        </p>

        <!-- Technical Metadata Badges -->
        <div class="mb-8 flex flex-wrap gap-3">
          <span
            class="rounded-sm border border-white/5 bg-white/2 px-4 py-1.5 font-mono text-xs md:text-sm uppercase tracking-widest text-gray-400 hover:border-dev/30 hover:text-dev transition-colors duration-200"
          >
            Vue 3 &amp; React
          </span>
          <span
            class="rounded-sm border border-white/5 bg-white/2 px-4 py-1.5 font-mono text-xs md:text-sm uppercase tracking-widest text-gray-400 hover:border-dev/30 hover:text-dev transition-colors duration-200"
          >
            Node.js &amp; TS
          </span>
          <span
            class="rounded-sm border border-white/5 bg-white/2 px-4 py-1.5 font-mono text-xs md:text-sm uppercase tracking-widest text-gray-400 hover:border-dev/30 hover:text-dev transition-colors duration-200"
          >
            Postgres &amp; Docker
          </span>
          <span
            class="rounded-sm border border-white/5 bg-white/2 px-4 py-1.5 font-mono text-xs md:text-sm uppercase tracking-widest text-gray-400 hover:border-dev/30 hover:text-dev transition-colors duration-200"
          >
            REST APIs &amp; Cloud
          </span>
        </div>

        <!-- Actions Buttons -->
        <div class="flex flex-wrap items-center gap-4">
          <button
            class="min-h-12 flex items-center justify-center gap-3 bg-white text-black font-mono text-xs md:text-sm uppercase font-bold tracking-widest px-8 py-4 cursor-pointer hover:bg-dev hover:text-white transition-[background-color,color,box-shadow] duration-300 shadow-[0_4px_12px_rgba(255,255,255,0.1)] hover:shadow-[0_4px_20px_rgba(77,145,234,0.4)]"
            @click="scrollToProjects"
          >
            <i class="pi pi-folder text-sm"></i>
            {{ t('dev.ctaProjects').toUpperCase() }}
          </button>

          <a
            href="https://github.com/Joao-Camilo-Mallmann"
            target="_blank"
            rel="noopener noreferrer"
            class="min-h-12 flex items-center justify-center gap-3 bg-transparent text-white font-mono text-xs md:text-sm uppercase font-bold tracking-widest px-8 py-4 border border-white/20 hover:border-dev hover:text-dev hover:bg-dev/5 transition-[border-color,color,background-color] duration-300"
          >
            <i class="pi pi-github text-sm"></i>
            {{ t('dev.ctaGithub').toUpperCase() }}
          </a>
        </div>
      </div>

      <!-- Right Column: Clean Developer Portrait -->
      <div
        class="relative w-full aspect-square md:aspect-[4/3] lg:aspect-[1.1/1] flex items-center justify-center overflow-visible z-10"
      >
        <!-- 1. GLOW/HALO PRÓPRIO ATRÁS DA FOTO (com leve parallax) -->
        <div 
          class="absolute inset-0 z-0 flex items-center justify-center opacity-50 mix-blend-screen pointer-events-none transition-transform duration-300 ease-out"
          :style="{ transform: `translate3d(${mouseX * 0.35}px, ${mouseY * 0.35}px, 0)` }"
        >
          <div class="w-[60%] aspect-square bg-dev rounded-full blur-[80px] md:blur-[120px]"></div>
        </div>

        <!-- 4. MICRO-MOVIMENTO (float contínuo via classe animate-portrait-float) -->
        <div 
          class="relative z-20 w-[85%] max-w-[360px] md:max-w-[480px] lg:max-w-[550px] aspect-[4/5] animate-portrait-float"
          v-motion
          :initial="{ opacity: 0, scale: 0.95 }"
          :enter="{ opacity: 1, scale: 1, transition: { delay: 300, duration: 800 } }"
        >
          <!-- 2 e 3. INTEGRAÇÃO NAS BORDAS (mask) + CONTRASTE E NITIDEZ (editorial-pop) -->
          <img
            src="/img/me.png"
            alt="João Camilo Mallmann"
            class="w-full h-full object-cover object-center filter-editorial-pop mask-fade-edges pointer-events-none select-none transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Brushed Metal typography for João Camilo */
.text-brushed-metal {
  background: linear-gradient(
    135deg,
    #ffffff 0%,
    #e2e8f0 25%,
    #cbd5e1 45%,
    #94a3b8 55%,
    #cbd5e1 65%,
    #ffffff 100%
  );
  background-image:
    repeating-linear-gradient(
      45deg,
      rgba(255, 255, 255, 0.08) 0px,
      rgba(255, 255, 255, 0.08) 1px,
      transparent 1px,
      transparent 3px
    ),
    linear-gradient(
      135deg,
      #ffffff 0%,
      #e2e8f0 25%,
      #cbd5e1 45%,
      #94a3b8 55%,
      #cbd5e1 65%,
      #ffffff 100%
    );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  filter: drop-shadow(0 0 20px rgba(77, 145, 234, 0.35));
}

/* Editorial Pop Filter for Portrait */
.filter-editorial-pop {
  filter: grayscale(1) contrast(1.35) brightness(1.1) drop-shadow(0 15px 35px rgba(0, 0, 0, 0.8));
}

/* Smooth fade on edges to integrate into background (Mask) */
.mask-fade-edges {
  mask-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 1) 75%,
    rgba(0, 0, 0, 0) 100%
  ),
  linear-gradient(
    to right,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 1) 15%,
    rgba(0, 0, 0, 1) 85%,
    rgba(0, 0, 0, 0) 100%
  );
  mask-composite: intersect;
  -webkit-mask-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 1) 75%,
    rgba(0, 0, 0, 0) 100%
  ),
  linear-gradient(
    to right,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 1) 15%,
    rgba(0, 0, 0, 1) 85%,
    rgba(0, 0, 0, 0) 100%
  );
  -webkit-mask-composite: source-in;
}

/* Scanning Overlay pattern */
.bg-matrix-overlay {
  background-image:
    linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%),
    linear-gradient(90deg, rgba(0, 240, 255, 0.03), rgba(0, 0, 0, 0), rgba(240, 0, 255, 0.03));
  background-size:
    100% 4px,
    6px 100%;
}

/* Hologram animations */
.animate-spin-slow {
  animation: spin 30s linear infinite;
}
.animate-spin-reverse {
  animation: spin-reverse 25s linear infinite;
}
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
@keyframes spin-reverse {
  from {
    transform: rotate(360deg);
  }
  to {
    transform: rotate(0deg);
  }
}

.animate-scanline {
  animation: scanline-keyframes 4s linear infinite;
}
@keyframes scanline-keyframes {
  0% {
    top: 0%;
  }
  50% {
    top: 100%;
  }
  100% {
    top: 0%;
  }
}

.animate-scan {
  animation: scan-keyframes 1.5s linear infinite;
}
@keyframes scan-keyframes {
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(100%);
  }
}

/* Floating particles */
.animate-float-slow-1 {
  animation: float-slow-1 8s ease-in-out infinite;
}
@keyframes float-slow-1 {
  0%,
  100% {
    transform: translateY(0) rotate(12deg);
  }
  50% {
    transform: translateY(-8px) rotate(17deg);
  }
}

.animate-float-mid-2 {
  animation: float-mid-2 9s ease-in-out infinite;
}
@keyframes float-mid-2 {
  0%,
  100% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(10px) rotate(-10deg);
  }
}

/* Micro-movement for the portrait */
.animate-portrait-float {
  animation: portrait-float 6s ease-in-out infinite;
}
@keyframes portrait-float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-6px);
  }
}

/* Accessibility */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
  .animate-spin-slow,
  .animate-spin-reverse,
  .animate-scanline,
  .animate-scan,
  .animate-float-slow-1,
  .animate-float-mid-2,
  .animate-portrait-float {
    animation: none !important;
    transform: none !important;
  }
}
</style>
