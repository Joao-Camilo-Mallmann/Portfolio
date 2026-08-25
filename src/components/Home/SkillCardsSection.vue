<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from '@/composables/useI18n'
import { useMagneticEffect } from '@/composables/useMagneticEffect'

const { t, locale } = useI18n()
const router = useRouter()

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
    class="w-full bg-bg py-16 sm:py-24 px-6 sm:px-12 relative overflow-hidden border-t border-border/20"
  >
    <!-- Ambient Background Glows -->
    <div
      class="absolute top-1/3 left-1/4 w-96 h-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-dev/10 blur-[130px] pointer-events-none"
    />
    <div
      class="absolute bottom-1/3 right-1/4 w-96 h-96 translate-x-1/2 translate-y-1/2 rounded-full bg-editor/10 blur-[130px] pointer-events-none"
    />

    <div class="max-w-6xl mx-auto relative z-10">
      <!-- Section Header -->
      <div
        v-motion-scroll-visible
        :initial="{ opacity: 0, y: 30 }"
        :visible-once="{
          opacity: 1,
          y: 0,
          transition: { type: 'spring', stiffness: 160, damping: 16 },
        }"
        class="text-center max-w-2xl mx-auto mb-14 sm:mb-20"
      >
        <span
          class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono tracking-widest uppercase text-fg-muted mb-4"
        >
          <i class="pi pi-compass text-dev"></i>
          Expertise & Tracks
        </span>
        <h2
          class="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight text-balance"
        >
          Dois Mundos.
          <span
            class="bg-linear-to-r from-dev via-cyan-glow to-editor bg-clip-text text-transparent"
            >Uma Visão.</span
          >
        </h2>
        <p class="text-sm sm:text-base text-fg-muted mt-3 text-pretty">
          Engenharia de software de alta performance combinada com produção audiovisual e motion
          design.
        </p>
      </div>

      <!-- Skill Cards Grid (Floating in Counter-Phase + Border Glow Travel) -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 mb-16 sm:mb-24">
        <!-- Dev Skill Card -->
        <article
          v-motion-scroll-visible
          :initial="{ opacity: 0, x: -40, rotate: -1 }"
          :visible-once="{
            opacity: 1,
            x: 0,
            rotate: 0,
            transition: { type: 'spring', stiffness: 140, damping: 15, delay: 100 },
          }"
          class="skill-card skill-card-dev card-float group relative rounded-3xl p-[1px] bg-linear-to-b from-dev/40 via-dev/10 to-border/30 hover:from-dev hover:via-dev/30 transition-all duration-500 shadow-2xl"
        >
          <div
            class="relative w-full h-full rounded-[23px] bg-obsidian/90 backdrop-blur-xl p-8 sm:p-10 flex flex-col justify-between overflow-hidden"
          >
            <!-- Background Radial Watermark -->
            <div
              class="absolute -top-10 -right-10 w-48 h-48 bg-dev/10 rounded-full blur-2xl pointer-events-none group-hover:bg-dev/20 transition-colors duration-500"
            />

            <div>
              <!-- Card Header -->
              <div class="flex items-center justify-between gap-4 mb-6">
                <div
                  class="w-14 h-14 rounded-2xl bg-dev/10 border border-dev/30 flex items-center justify-center text-dev shadow-lg group-hover:scale-110 group-hover:bg-dev/20 transition-transform duration-300"
                >
                  <i class="pi pi-code text-2xl"></i>
                </div>
                <div class="flex items-center gap-2">
                  <i class="pi pi-star-fill text-dev text-xs star-spin-cw"></i>
                  <span
                    class="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-dev/10 border border-dev/30 text-dev tracking-wider"
                  >
                    DEV TRACK
                  </span>
                </div>
              </div>

              <!-- Title & Description -->
              <h3
                class="text-2xl sm:text-3xl font-bold text-white mb-3 text-balance group-hover:text-dev transition-colors duration-300"
              >
                {{ t('home.devTitle') }}
              </h3>
              <p class="text-fg-muted text-sm sm:text-base leading-relaxed mb-8 text-pretty">
                {{ t('home.devDescription') }}
              </p>

              <!-- Skills Badges / Checklist -->
              <div class="space-y-2.5 mb-8">
                <div
                  v-for="(skill, index) in t('home.devSkills')"
                  :key="index"
                  class="flex items-center gap-3 text-xs sm:text-sm text-fg-muted group-hover:text-white transition-colors duration-300"
                >
                  <span
                    class="w-5 h-5 rounded-full bg-dev/15 border border-dev/40 flex items-center justify-center text-dev shrink-0 text-[10px]"
                  >
                    <i class="pi pi-check"></i>
                  </span>
                  <span>{{ skill }}</span>
                </div>
              </div>
            </div>

            <!-- CTA Button -->
            <button
              ref="devBtnRef"
              class="magnetic-btn w-full py-3.5 px-6 rounded-xl bg-dev/15 hover:bg-dev border border-dev/40 text-dev hover:text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-lg active:scale-95 transition-colors duration-300 cursor-pointer"
              :aria-label="t('home.devButtonAria')"
              @click="router.push('/dev')"
            >
              <span>{{ t('home.devButton') }}</span>
              <i
                class="pi pi-arrow-right text-xs group-hover:translate-x-1 transition-transform"
              ></i>
            </button>
          </div>
        </article>

        <!-- Editor Skill Card -->
        <article
          v-motion-scroll-visible
          :initial="{ opacity: 0, x: 40, rotate: 1 }"
          :visible-once="{
            opacity: 1,
            x: 0,
            rotate: 0,
            transition: { type: 'spring', stiffness: 140, damping: 15, delay: 200 },
          }"
          class="skill-card skill-card-editor card-float-alt group relative rounded-3xl p-[1px] bg-linear-to-b from-editor/40 via-editor/10 to-border/30 hover:from-editor hover:via-editor/30 transition-all duration-500 shadow-2xl"
        >
          <div
            class="relative w-full h-full rounded-[23px] bg-obsidian/90 backdrop-blur-xl p-8 sm:p-10 flex flex-col justify-between overflow-hidden"
          >
            <!-- Background Radial Watermark -->
            <div
              class="absolute -top-10 -right-10 w-48 h-48 bg-editor/10 rounded-full blur-2xl pointer-events-none group-hover:bg-editor/20 transition-colors duration-500"
            />

            <div>
              <!-- Card Header -->
              <div class="flex items-center justify-between gap-4 mb-6">
                <div
                  class="w-14 h-14 rounded-2xl bg-editor/10 border border-editor/30 flex items-center justify-center text-editor shadow-lg group-hover:scale-110 group-hover:bg-editor/20 transition-transform duration-300"
                >
                  <i class="pi pi-video text-2xl"></i>
                </div>
                <div class="flex items-center gap-2">
                  <i class="pi pi-star-fill text-editor text-xs star-spin-ccw"></i>
                  <span
                    class="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-editor/10 border border-editor/30 text-editor tracking-wider"
                  >
                    CREATIVE TRACK
                  </span>
                </div>
              </div>

              <!-- Title & Description -->
              <h3
                class="text-2xl sm:text-3xl font-bold text-white mb-3 text-balance group-hover:text-editor transition-colors duration-300"
              >
                {{ t('home.editorTitle') }}
              </h3>
              <p class="text-fg-muted text-sm sm:text-base leading-relaxed mb-8 text-pretty">
                {{ t('home.editorDescription') }}
              </p>

              <!-- Skills Badges / Checklist -->
              <div class="space-y-2.5 mb-8">
                <div
                  v-for="(skill, index) in t('home.editorSkills')"
                  :key="index"
                  class="flex items-center gap-3 text-xs sm:text-sm text-fg-muted group-hover:text-white transition-colors duration-300"
                >
                  <span
                    class="w-5 h-5 rounded-full bg-editor/15 border border-editor/40 flex items-center justify-center text-editor shrink-0 text-[10px]"
                  >
                    <i class="pi pi-check"></i>
                  </span>
                  <span>{{ skill }}</span>
                </div>
              </div>
            </div>

            <!-- CTA Button -->
            <button
              ref="editorBtnRef"
              class="magnetic-btn w-full py-3.5 px-6 rounded-xl bg-editor/15 hover:bg-editor border border-editor/40 text-editor hover:text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-lg active:scale-95 transition-colors duration-300 cursor-pointer"
              :aria-label="t('home.editorButtonAria')"
              @click="router.push('/editor')"
            >
              <span>{{ t('home.editorButton') }}</span>
              <i
                class="pi pi-arrow-right text-xs group-hover:translate-x-1 transition-transform"
              ></i>
            </button>
          </div>
        </article>
      </div>

      <!-- Philosophy & Vision Card -->
      <div
        v-motion-scroll-visible
        :initial="{ opacity: 0, y: 40 }"
        :visible-once="{
          opacity: 1,
          y: 0,
          transition: { type: 'spring', stiffness: 150, damping: 16, delay: 300 },
        }"
        class="relative max-w-4xl mx-auto rounded-3xl p-[1px] bg-linear-to-r from-dev/40 via-white/20 to-editor/40 shadow-2xl"
      >
        <div
          class="rounded-[23px] bg-obsidian/95 backdrop-blur-xl p-8 sm:p-12 text-center relative overflow-hidden"
        >
          <!-- Ambient Background Light -->
          <div
            class="absolute inset-0 bg-linear-to-b from-white/5 to-transparent pointer-events-none"
          />

          <span
            class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono uppercase tracking-widest text-fg-muted mb-3"
          >
            <i class="pi pi-bolt text-cyan-glow"></i>
            Core Philosophy
          </span>

          <h3 class="text-2xl sm:text-3xl font-extrabold text-white mb-6 text-balance">
            {{ t('home.philosophyTitle') }}
          </h3>

          <p
            class="text-fg-muted leading-relaxed text-sm sm:text-base md:text-lg max-w-2xl mx-auto tracking-wide text-pretty"
          >
            <span class="text-dev font-semibold">{{ t('home.philosophyCreativity') }}</span>
            {{ ' ' }}
            <template v-if="locale === 'pt-BR'">com</template>
            <template v-else>with</template>
            {{ ' ' }}
            <span class="text-editor font-semibold">{{ t('home.philosophyVision') }}</span>
            {{ ' ' }} {{ t('home.philosophyDelivery') }} {{ ' ' }}
            <span class="text-white font-semibold">{{ t('home.philosophyInterfaces') }}</span>
            {{ ' ' }}
            <template v-if="locale === 'pt-BR'">ou produzindo</template>
            <template v-else>or producing</template>
            {{ ' ' }}
            <span class="text-white font-semibold">{{ t('home.philosophyContent') }}</span
            >, {{ t('home.philosophyFocus') }} {{ ' ' }}
            <span
              class="bg-linear-to-r from-dev to-editor bg-clip-text text-transparent font-bold"
              >{{ t('home.philosophyExcellence') }}</span
            >.
          </p>

          <!-- Philosophy Tag Chips -->
          <div class="flex justify-center flex-wrap gap-4 mt-8 pt-6 border-t border-border/30">
            <div
              class="flex items-center gap-2 px-4 py-2 rounded-full bg-dev/10 border border-dev/30 text-dev text-xs sm:text-sm font-medium shadow-sm hover:scale-105 active:scale-95 transition-transform duration-200"
            >
              <i class="pi pi-code" aria-hidden="true"></i>
              <span>{{ t('home.tagTechnology') }}</span>
            </div>
            <div
              class="flex items-center gap-2 px-4 py-2 rounded-full bg-editor/10 border border-editor/30 text-editor text-xs sm:text-sm font-medium shadow-sm hover:scale-105 active:scale-95 transition-transform duration-200"
            >
              <i class="pi pi-video" aria-hidden="true"></i>
              <span>{{ t('home.tagCreativity') }}</span>
            </div>
            <div
              class="flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs sm:text-sm font-medium shadow-sm hover:scale-105 active:scale-95 transition-transform duration-200"
            >
              <i class="pi pi-heart" aria-hidden="true"></i>
              <span>{{ t('home.tagDedication') }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* ── Card Float (Contra-Fase) ── */
.card-float {
  animation: card-float-a 6s ease-in-out infinite;
}

.card-float-alt {
  animation: card-float-b 6s ease-in-out infinite;
}

@keyframes card-float-a {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-6px);
  }
}

@keyframes card-float-b {
  0%,
  100% {
    transform: translateY(-6px);
  }
  50% {
    transform: translateY(0);
  }
}

/* ── Card Border Glow Travel ── */
.skill-card {
  position: relative;
  overflow: hidden;
}

.skill-card::after {
  content: '';
  position: absolute;
  left: 0;
  top: -100%;
  width: 4px;
  height: 60%;
  border-radius: 2px;
  pointer-events: none;
  animation: border-glow-travel 3.5s ease-in-out infinite;
}

.skill-card-dev::after {
  background: linear-gradient(to bottom, transparent, rgba(77, 145, 234, 0.8), transparent);
  box-shadow: 0 0 12px rgba(77, 145, 234, 0.5);
}

.skill-card-editor::after {
  background: linear-gradient(to bottom, transparent, rgba(234, 166, 77, 0.8), transparent);
  box-shadow: 0 0 12px rgba(234, 166, 77, 0.5);
}

@keyframes border-glow-travel {
  0% {
    top: -60%;
  }
  100% {
    top: 100%;
  }
}

/* ── Star Rotation ── */
.star-spin-cw {
  animation: star-rotate 8s linear infinite;
  display: inline-block;
}

.star-spin-ccw {
  animation: star-rotate 8s linear infinite reverse;
  display: inline-block;
}

@keyframes star-rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

/* ── Magnetic buttons ── */
.magnetic-btn {
  transition:
    background-color 0.3s,
    color 0.3s,
    transform 0.08s ease-out,
    box-shadow 0.15s ease-out;
}

/* ── Reduced Motion ── */
@media (prefers-reduced-motion: reduce) {
  .card-float,
  .card-float-alt,
  .star-spin-cw,
  .star-spin-ccw {
    animation: none !important;
  }

  .skill-card::after {
    display: none !important;
  }
}
</style>
