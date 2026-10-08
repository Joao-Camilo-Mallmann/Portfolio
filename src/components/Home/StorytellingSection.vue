<script setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useI18n } from '@/composables/useI18n'
import { useParticles } from '@/composables/useParticles'
import { useMagneticEffect } from '@/composables/useMagneticEffect'

const { t, isPt, toggleLocale, localizedPath } = useI18n()
const router = useRouter()
const route = useRoute()

// Particle canvas ref
const particleCanvas = ref(null)
useParticles(particleCanvas, { count: 20, mouseRadius: 130, mouseForce: 0.7 })

// Magnetic button refs
const devBtnRef = ref(null)
const editorBtnRef = ref(null)
useMagneticEffect(devBtnRef, {
  strength: 0.35,
  radius: 100,
  glowColor: '77, 145, 234', // dev blue
  maxGlowIntensity: 0.5,
})
useMagneticEffect(editorBtnRef, {
  strength: 0.35,
  radius: 100,
  glowColor: '234, 166, 77', // editor orange
  maxGlowIntensity: 0.5,
})
</script>

<template>
  <section
    class="w-full bg-bg py-20 sm:py-28 px-6 sm:px-12 overflow-hidden relative border-t border-border/30"
  >
    <!-- Ambient Technological Background Glows (Blue + Orange Blend) -->
    <div
      class="absolute top-1/2 left-1/2 w-150 h-150 -translate-x-1/2 -translate-y-1/2 rounded-full bg-linear-to-tr from-dev/20 via-cyan-glow/10 to-editor/20 blur-[150px] pointer-events-none opacity-80"
    />

    <!-- Particle Canvas Layer -->
    <canvas
      ref="particleCanvas"
      class="absolute inset-0 w-full h-full pointer-events-none z-[1]"
      aria-hidden="true"
    />

    <div class="relative z-10 max-w-6xl mx-auto">
      <!-- Top Bar: Minimalist Language Switcher -->
      <div
        v-motion-scroll-visible
        :initial="{ opacity: 0, y: -10 }"
        :visible-once="{
          opacity: 1,
          y: 0,
          transition: { type: 'spring', stiffness: 160, damping: 16 },
        }"
        class="flex justify-end mb-8 sm:mb-12"
      >
        <button
          class="group min-h-10 flex items-center gap-2 px-3 py-2 rounded-lg border border-border/50 text-xs font-mono tracking-widest text-fg-muted hover:border-fg/20 hover:text-fg active:scale-95 transition-colors cursor-pointer"
          :title="isPt ? 'Switch to English' : 'Mudar para Português'"
          @click="toggleLocale(router, route)"
        >
          <span class="opacity-60 group-hover:opacity-100 transition-opacity">LANG:</span>
          <span class="font-bold text-fg">{{ isPt ? 'PT-BR' : 'EN' }}</span>
        </button>
      </div>

      <!-- Main Layout: 2-Column Split (Photo 4 Cols, Text 8 Cols so Title Dominates) -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <!-- LEFT: Photo Container (Reduced ~12% in size, subtle -1.5deg rotation, 2px border, soft glow) -->
        <div
          v-motion-scroll-visible
          :initial="{ opacity: 0, x: -40, rotate: -3 }"
          :visible-once="{
            opacity: 1,
            x: 0,
            rotate: -1.5,
            transition: { type: 'spring', stiffness: 130, damping: 15 },
          }"
          class="lg:col-span-4 flex justify-center lg:justify-start"
        >
          <div class="relative group w-full max-w-[280px] sm:max-w-[310px]">
            <!-- Subtle Ambient Backdrop Glow Behind Photo -->
            <div
              class="absolute -inset-2 rounded-2xl bg-linear-to-tr from-dev/40 via-cyan-glow/20 to-editor/30 opacity-40 group-hover:opacity-75 blur-xl transition-opacity duration-700"
            />

            <!-- Main Photo Card with 1px Dual Gradient Border (Dev + Editor) -->
            <div
              class="relative aspect-[3/4] w-full rounded-2xl p-[1px] bg-linear-to-tr from-dev via-cyan-glow/60 to-editor shadow-[0_0_30px_-5px_rgba(77,145,234,0.25)] group-hover:from-dev group-hover:via-cyan-glow group-hover:to-editor group-hover:shadow-[0_0_40px_-5px_rgba(234,166,77,0.35)] transition-all duration-500"
            >
              <div class="relative w-full h-full rounded-[15px] overflow-hidden bg-obsidian">
                <img
                  src="/img/me_home.webp"
                  alt="João Camilo Mallmann"
                  class="w-full h-full object-cover scale-105 group-hover:scale-100 transition-all duration-700"
                />

                <!-- Vignette Overlay -->
                <div
                  class="absolute inset-0 bg-linear-to-t from-obsidian/95 via-obsidian/20 to-transparent opacity-85"
                />

                <!-- Clean Monospaced Overlay Accent (Software Engineer / Content Creator) -->
                <div class="absolute bottom-5 left-5 right-5 flex flex-col gap-0.5">
                  <p class="text-[11px] font-mono font-bold tracking-widest uppercase">Me</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- RIGHT: Typographic Editorial Section (Holds Primary Visual Focus) -->
        <div class="lg:col-span-8 flex flex-col justify-center space-y-7">
          <!-- Giant Display Title (Beyond the Code.) -->
          <div
            v-motion-scroll-visible
            :initial="{ opacity: 0, x: 30 }"
            :visible-once="{
              opacity: 1,
              x: 0,
              transition: { type: 'spring', stiffness: 140, damping: 15, delay: 100 },
            }"
            class="space-y-3"
          >
            <h2
              class="shimmer-title text-5xl sm:text-6xl lg:text-7xl font-extrabold text-fg tracking-tight leading-none text-balance"
            >
              {{ t('home.storytelling.title') }}
            </h2>
            <div
              class="h-1 w-24 rounded-full bg-linear-to-r from-dev via-cyan-glow to-editor origin-left"
            />
          </div>

          <!-- Name & Role Statement -->
          <div
            v-motion-scroll-visible
            :initial="{ opacity: 0, y: 20 }"
            :visible-once="{
              opacity: 1,
              y: 0,
              transition: { type: 'spring', stiffness: 160, damping: 15, delay: 200 },
            }"
            class="space-y-1.5"
          >
            <h3 class="text-2xl sm:text-3xl font-bold text-fg tracking-tight">
              {{ t('home.storytelling.name') }}
            </h3>
            <p class="text-lg sm:text-xl font-medium tracking-wide">
              <span class="text-dev">{{ t('home.storytelling.roleDev') }}</span>
              <span class="text-fg-muted mx-2 sm:mx-3 font-light">•</span>
              <span class="text-editor">{{ t('home.storytelling.roleEditor') }}</span>
            </p>
          </div>

          <!-- Bio Text (Stronger Value Proposition) -->
          <p
            v-motion-scroll-visible
            :initial="{ opacity: 0, y: 20 }"
            :visible-once="{
              opacity: 1,
              y: 0,
              transition: { type: 'spring', stiffness: 140, damping: 16, delay: 300 },
            }"
            class="text-lg sm:text-xl text-fg-muted leading-relaxed font-normal max-w-2xl text-pretty"
          >
            {{ t('home.storytelling.bio') }}
          </p>

          <!-- Equal-Weight Action Buttons: [ Dev Page ] & [ Editor Page ] with Magnetic Effect -->
          <div
            v-motion-scroll-visible
            :initial="{ opacity: 0, y: 20 }"
            :visible-once="{
              opacity: 1,
              y: 0,
              transition: { type: 'spring', stiffness: 180, damping: 14, delay: 400 },
            }"
            class="flex flex-wrap items-center gap-4 pt-3"
          >
            <!-- Dev Page Button (Magnetic) -->
            <router-link
              ref="devBtnRef"
              :to="localizedPath('/dev')"
              class="magnetic-btn group inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-xl bg-dev hover:bg-dev/90 text-obsidian font-bold text-base shadow-lg shadow-dev/20 transition-all duration-300 active:scale-95 min-h-[44px] flex-1 sm:flex-initial cursor-pointer will-change-transform"
            >
              <i class="pi pi-code text-lg group-hover:scale-110 transition-transform"></i>
              <span>{{ t('home.storytelling.devBtn') }}</span>
            </router-link>

            <!-- Editor Page Button (Magnetic) -->
            <router-link
              ref="editorBtnRef"
              :to="localizedPath('/editor')"
              class="magnetic-btn group inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-xl bg-editor hover:bg-editor/90 text-obsidian font-bold text-base shadow-lg shadow-editor/20 transition-all duration-300 active:scale-95 min-h-11 flex-1 sm:flex-initial cursor-pointer will-change-transform"
            >
              <i class="pi pi-video text-lg group-hover:scale-110 transition-transform"></i>
              <span>{{ t('home.storytelling.editorBtn') }}</span>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.shimmer-title {
  position: relative;
  overflow: hidden;
  display: inline-block;
}

.shimmer-title::after {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 60%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.15), transparent);
  animation: shimmer 4.5s ease-in-out infinite;
}

@keyframes shimmer {
  0% {
    left: -60%;
  }
  50%,
  100% {
    left: 160%;
  }
}

/* Magnetic buttons: remove default hover shadow to let composable handle glow */
.magnetic-btn {
  transition:
    background-color 0.3s,
    transform 0.08s ease-out,
    box-shadow 0.15s ease-out;
}

@media (prefers-reduced-motion: reduce) {
  .shimmer-title::after {
    animation: none !important;
  }
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
</style>
