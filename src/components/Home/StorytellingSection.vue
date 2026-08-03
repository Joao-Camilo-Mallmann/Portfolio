<script setup>
import { useI18n } from '@/composables/useI18n'

const { t, locale, toggleLocale } = useI18n()
</script>

<template>
  <section class="w-full bg-bg py-24 px-6 overflow-hidden">
    <div class="max-w-3xl mx-auto flex flex-col items-center text-center gap-10">
      <!-- Top: Content -->
      <div class="flex flex-col items-center text-center">
        <!-- Language Toggle com Materialização Horizontal -->
        <button
          v-motion-scroll-visible
          :initial="{ opacity: 0, scaleX: 0 }"
          :visible-once="{
            opacity: 1,
            scaleX: 1,
            transition: { type: 'spring', stiffness: 200, damping: 18 },
          }"
          class="mb-8 px-4 py-2 rounded-full bg-fg/5 hover:bg-fg/10 border border-border flex items-center gap-2 active:scale-95 transition-colors transition-transform duration-300 min-h-[40px] min-w-[40px]"
          @click="toggleLocale"
        >
          <span class="text-sm font-medium text-fg-muted">
            {{ locale === 'pt-BR' ? '🇧🇷 PT-BR' : '🇺🇸 EN' }}
          </span>
        </button>

        <!-- Título com Slide da Esquerda + Spring -->
        <h2
          v-motion-scroll-visible
          :initial="{ opacity: 0, x: -35 }"
          :visible-once="{
            opacity: 1,
            x: 0,
            transition: { type: 'spring', stiffness: 150, damping: 15, delay: 100 },
          }"
          class="text-4xl md:text-6xl font-bold text-fg mb-6 leading-tight"
        >
          {{ t('home.storytelling.title') }}
        </h2>

        <!-- Nome / Função com Cascade Spring -->
        <div
          v-motion-scroll-visible
          :initial="{ opacity: 0, y: 20, scale: 0.95 }"
          :visible-once="{
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { type: 'spring', stiffness: 170, damping: 15, delay: 200 },
          }"
          class="space-y-2 mb-6"
        >
          <h3 class="text-2xl font-bold text-fg">
            {{ t('home.storytelling.name') }}
          </h3>
          <p class="text-lg font-medium">
            <span class="text-dev font-semibold">{{ t('home.hero.title') }}</span>
            <span class="text-fg-muted mx-2">•</span>
            <span class="text-editor font-semibold">{{ t('home.hero.titleSecondary') }}</span>
          </p>
        </div>

        <!-- Bio com Entrada Suave -->
        <p
          v-motion-scroll-visible
          :initial="{ opacity: 0, y: 20 }"
          :visible-once="{
            opacity: 1,
            y: 0,
            transition: { type: 'spring', stiffness: 140, damping: 16, delay: 300 },
          }"
          class="text-lg text-fg-muted leading-relaxed max-w-2xl"
        >
          {{ t('home.storytelling.bio') }}
        </p>
      </div>

      <!-- Bottom: Centered Photo com Órbitas Contínuas em CSS & Entrada Spring + Rotação -->
      <div
        v-motion-scroll-visible
        :initial="{ opacity: 0, scale: 0.7, rotate: -6 }"
        :visible-once="{
          opacity: 1,
          scale: 1,
          rotate: 0,
          transition: { type: 'spring', stiffness: 180, damping: 14, delay: 380 },
        }"
        class="w-full flex justify-center mt-4 relative"
      >
        <!-- Orbiting Dots Wrapper -->
        <div class="relative orbit-wrapper">
          <!-- Orbiting Dot Dev (Azul) -->
          <div class="orbit-dot orbit-dot-dev" aria-hidden="true"></div>
          <!-- Orbiting Dot Editor (Laranja) -->
          <div class="orbit-dot orbit-dot-editor" aria-hidden="true"></div>

          <!-- Photo Container -->
          <div
            class="relative w-64 md:w-80 aspect-square rounded-2xl overflow-hidden shadow-2xl border border-border group transition-all duration-500 hover:border-dev/50 hover:shadow-[0_12px_40px_-12px_rgba(77,145,234,0.3)]"
          >
            <img
              src="/img/eu.jpg"
              alt="Joao Camilo Mallmann"
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.orbit-wrapper {
  display: inline-block;
  position: relative;
}

.orbit-dot {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  pointer-events: none;
  z-index: 20;
}

.orbit-dot-dev {
  background-color: var(--color-dev);
  box-shadow: 0 0 12px var(--color-dev);
  animation: orbit-cw 7s linear infinite;
  --orbit-radius: 145px;
}

.orbit-dot-editor {
  background-color: var(--color-editor);
  box-shadow: 0 0 12px var(--color-editor);
  animation: orbit-ccw 9s linear infinite;
  --orbit-radius: 155px;
}

@keyframes orbit-cw {
  from {
    transform: translate(-50%, -50%) rotate(0deg) translateX(var(--orbit-radius)) rotate(0deg);
  }
  to {
    transform: translate(-50%, -50%) rotate(360deg) translateX(var(--orbit-radius)) rotate(-360deg);
  }
}

@keyframes orbit-ccw {
  from {
    transform: translate(-50%, -50%) rotate(360deg) translateX(var(--orbit-radius)) rotate(-360deg);
  }
  to {
    transform: translate(-50%, -50%) rotate(0deg) translateX(var(--orbit-radius)) rotate(0deg);
  }
}

@media (min-width: 768px) {
  .orbit-dot-dev {
    --orbit-radius: 180px;
  }
  .orbit-dot-editor {
    --orbit-radius: 195px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .orbit-dot {
    animation: none !important;
    display: none;
  }
  .transition-all,
  .transition-transform,
  .transition-colors {
    transition-duration: 0.01ms !important;
  }
}
</style>
