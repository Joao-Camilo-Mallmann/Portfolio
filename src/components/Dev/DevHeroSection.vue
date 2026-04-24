<script setup>
import { useI18n } from '@/composables/useI18n'
import { useMotion } from '@vueuse/motion'
import { computed, onMounted, onUnmounted, ref, watch } from 'vue'

const { t } = useI18n()

const typedCommand = ref('')
const typedRole = ref('')
const activeLine = ref('command')
const timeoutIds = new Set()
const prefersReducedMotion = ref(false)

const heroGridRef = ref(null)
const orbPrimaryRef = ref(null)
const orbSecondaryRef = ref(null)
const orbTertiaryRef = ref(null)
const terminalShellRef = ref(null)
const terminalGlowRef = ref(null)
const terminalOutputRef = ref(null)

const commandText = 'npm run build:identity'
const roleText = computed(() => t('devProfile.role'))
const capabilityChips = ['Vue.js', 'React', 'Frontend', 'APIs']

const scrollToProjects = () => {
  const el = document.getElementById('projects')
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

const queueTimeout = (callback, delay) => {
  const id = window.setTimeout(() => {
    timeoutIds.delete(id)
    callback()
  }, delay)

  timeoutIds.add(id)
}

const clearTypingTimeouts = () => {
  timeoutIds.forEach((id) => window.clearTimeout(id))
  timeoutIds.clear()
}

const typeLine = (source, targetRef, speed, onComplete) => {
  targetRef.value = ''

  Array.from(source).forEach((char, index) => {
    queueTimeout(() => {
      targetRef.value += char
    }, index * speed)
  })

  queueTimeout(
    () => {
      onComplete?.()
    },
    source.length * speed + 140,
  )
}

const startTypingSequence = () => {
  if (typeof window === 'undefined') return

  clearTypingTimeouts()

  if (prefersReducedMotion.value) {
    typedCommand.value = commandText
    typedRole.value = roleText.value
    activeLine.value = 'idle'
    return
  }

  typedCommand.value = ''
  typedRole.value = ''
  activeLine.value = 'command'

  typeLine(commandText, typedCommand, 34, () => {
    activeLine.value = 'role'

    queueTimeout(() => {
      typeLine(roleText.value, typedRole, 40, () => {
        activeLine.value = 'idle'

        queueTimeout(() => {
          startTypingSequence()
        }, 2600)
      })
    }, 220)
  })
}

const startAmbientMotion = () => {
  const ease = [0.37, 0, 0.63, 1]

  useMotion(heroGridRef, {
    initial: { opacity: 0.28, scale: 1, x: 0, y: 0 },
    enter: {
      opacity: 0.42,
      scale: 1.04,
      x: 14,
      y: 10,
      transition: {
        duration: 9000,
        repeat: Infinity,
        repeatType: 'mirror',
        ease,
      },
    },
  })

  useMotion(orbPrimaryRef, {
    initial: { x: 0, y: 0, scale: 1, opacity: 0.9 },
    enter: {
      x: 24,
      y: 18,
      scale: 1.08,
      opacity: 1,
      transition: {
        duration: 7600,
        repeat: Infinity,
        repeatType: 'mirror',
        ease,
      },
    },
  })

  useMotion(orbSecondaryRef, {
    initial: { x: 0, y: 0, scale: 1, opacity: 0.8 },
    enter: {
      x: -22,
      y: 22,
      scale: 1.1,
      opacity: 1,
      transition: {
        duration: 8400,
        repeat: Infinity,
        repeatType: 'mirror',
        ease,
      },
    },
  })

  useMotion(orbTertiaryRef, {
    initial: { x: 0, y: 0, scale: 1, opacity: 0.7 },
    enter: {
      x: 12,
      y: -16,
      scale: 1.06,
      opacity: 0.92,
      transition: {
        duration: 6800,
        repeat: Infinity,
        repeatType: 'mirror',
        ease,
      },
    },
  })

  useMotion(terminalShellRef, {
    initial: { y: 0, rotate: 0, scale: 1 },
    enter: {
      y: -10,
      rotate: -0.8,
      scale: 1.01,
      transition: {
        duration: 5200,
        repeat: Infinity,
        repeatType: 'mirror',
        ease,
      },
    },
  })

  useMotion(terminalGlowRef, {
    initial: { opacity: 0.18, scale: 0.96, x: -12, y: 0 },
    enter: {
      opacity: 0.34,
      scale: 1.08,
      x: 14,
      y: -10,
      transition: {
        duration: 6200,
        repeat: Infinity,
        repeatType: 'mirror',
        ease,
      },
    },
  })

  useMotion(terminalOutputRef, {
    initial: { y: 0, opacity: 1, scale: 1 },
    enter: {
      y: -4,
      opacity: 0.92,
      scale: 1.015,
      transition: {
        duration: 3600,
        repeat: Infinity,
        repeatType: 'mirror',
        ease,
      },
    },
  })
}

onMounted(() => {
  if (typeof window !== 'undefined') {
    prefersReducedMotion.value = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  }

  startTypingSequence()

  if (!prefersReducedMotion.value) {
    startAmbientMotion()
  }
})

onUnmounted(() => {
  clearTypingTimeouts()
})

watch(roleText, () => {
  if (typedRole.value) {
    startTypingSequence()
  }
})
</script>

<template>
  <section class="relative pt-32 md:pt-36 pb-28 px-4 max-w-6xl mx-auto overflow-hidden">
    <div class="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
      <div ref="heroGridRef" class="hero-grid absolute inset-x-0 top-0 h-full"></div>
      <div
        ref="orbPrimaryRef"
        class="absolute -top-12 left-[8%] w-72 h-72 rounded-full bg-dev/10 blur-3xl will-change-transform"
      ></div>
      <div
        ref="orbSecondaryRef"
        class="absolute top-1/3 right-[2%] w-96 h-96 rounded-full bg-dev/6 blur-3xl will-change-transform"
      ></div>
      <div
        ref="orbTertiaryRef"
        class="absolute bottom-10 left-1/3 w-64 h-64 rounded-full bg-white/5 blur-2xl will-change-transform"
      ></div>
    </div>

    <div
      class="relative z-10 grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)] lg:items-end"
    >
      <div class="text-left">
        <div
          v-motion
          :initial="{ opacity: 0, y: 18 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 450, ease: [0.16, 1, 0.3, 1] } }"
          class="inline-flex items-center gap-3 rounded-full border border-border bg-white/5 px-4 py-2 shadow-sm ring-1 ring-inset ring-white/5"
        >
          <span class="h-2 w-2 rounded-full bg-dev"></span>
          <span class="text-[11px] font-semibold uppercase tracking-[0.32em] text-fg-muted">
            frontend systems
          </span>
        </div>

        <p
          v-motion
          :initial="{ opacity: 0, y: 18 }"
          :enter="{
            opacity: 1,
            y: 0,
            transition: { delay: 80, duration: 450, ease: [0.16, 1, 0.3, 1] },
          }"
          class="mt-8 font-mono text-sm uppercase tracking-[0.24em] text-fg-muted md:text-base"
        >
          {{ t('dev.heroGreeting') }}
        </p>

        <h1
          v-motion
          :initial="{ opacity: 0, y: 22 }"
          :enter="{
            opacity: 1,
            y: 0,
            transition: { delay: 120, duration: 560, ease: [0.16, 1, 0.3, 1] },
          }"
          class="mt-3 text-5xl font-extrabold tracking-tight text-balance md:text-7xl lg:text-[5.4rem]"
        >
          <span class="block leading-none text-fg">{{ t('dev.heroName') }}</span>
          <span
            class="mt-5 flex flex-wrap items-center gap-3 text-xl font-medium text-fg md:text-3xl lg:text-[2rem]"
          >
            <span class="font-mono text-dev">&gt;</span>
            <span class="typed-role font-mono text-fg">{{ typedRole }}</span>
            <span class="typing-cursor" :class="{ 'is-passive': activeLine !== 'role' }"></span>
          </span>
        </h1>

        <p
          v-motion
          :initial="{ opacity: 0, y: 18 }"
          :enter="{
            opacity: 1,
            y: 0,
            transition: { delay: 220, duration: 520, ease: [0.16, 1, 0.3, 1] },
          }"
          class="mt-8 max-w-2xl text-pretty text-lg leading-relaxed tracking-wide text-fg-muted md:text-xl"
        >
          {{ t('devProfile.description') }}
        </p>

        <div
          v-motion
          :initial="{ opacity: 0, y: 18 }"
          :enter="{
            opacity: 1,
            y: 0,
            transition: { delay: 300, duration: 480, ease: [0.16, 1, 0.3, 1] },
          }"
          class="mt-8 flex flex-wrap gap-2"
        >
          <span
            v-for="chip in capabilityChips"
            :key="chip"
            class="rounded-full border border-border bg-white/5 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-fg-muted"
          >
            {{ chip }}
          </span>
        </div>

        <div
          v-motion
          :initial="{ opacity: 0, y: 18 }"
          :enter="{
            opacity: 1,
            y: 0,
            transition: { delay: 380, duration: 480, ease: [0.16, 1, 0.3, 1] },
          }"
          class="mt-10 flex flex-wrap items-center gap-4"
        >
          <button
            v-motion
            :hovered="{ scale: 1.03, transition: { type: 'spring', stiffness: 300, damping: 20 } }"
            :tapped="{ scale: 0.96 }"
            class="flex min-h-11 items-center gap-2 rounded-full bg-dev px-6 py-3 text-sm font-semibold tracking-wide text-white shadow-lg shadow-dev/20 transition-opacity duration-200 hover:opacity-90"
            @click="scrollToProjects"
          >
            <i class="pi pi-folder text-sm"></i>
            {{ t('dev.ctaProjects') }}
          </button>

          <a
            v-motion
            href="https://github.com/Joao-Camilo-Mallmann"
            target="_blank"
            rel="noopener noreferrer"
            :hovered="{ scale: 1.03, transition: { type: 'spring', stiffness: 300, damping: 20 } }"
            :tapped="{ scale: 0.96 }"
            class="flex min-h-11 items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold tracking-wide text-fg transition-opacity duration-200 hover:opacity-80"
          >
            <i class="pi pi-github text-sm"></i>
            {{ t('dev.ctaGithub') }}
          </a>
        </div>
      </div>

      <div
        v-motion
        :initial="{ opacity: 0, x: 18, y: 18 }"
        :enter="{
          opacity: 1,
          x: 0,
          y: 0,
          transition: { delay: 220, duration: 560, ease: [0.16, 1, 0.3, 1] },
        }"
        class="relative"
      >
        <div
          ref="terminalShellRef"
          class="terminal-shell overflow-hidden rounded-[28px] border border-border bg-surface-100/90 shadow-sm ring-1 ring-inset ring-white/5"
        >
          <div
            ref="terminalGlowRef"
            class="pointer-events-none absolute inset-x-8 top-6 h-24 rounded-full bg-dev/10 blur-3xl will-change-transform"
            aria-hidden="true"
          ></div>

          <div
            class="relative flex items-center justify-between border-b border-border bg-black/15 px-5 py-4"
          >
            <div class="flex items-center gap-2">
              <span class="h-2.5 w-2.5 rounded-full bg-red-400/70"></span>
              <span class="h-2.5 w-2.5 rounded-full bg-yellow-400/70"></span>
              <span class="h-2.5 w-2.5 rounded-full bg-green-400/70"></span>
            </div>
            <span class="text-[11px] font-mono uppercase tracking-[0.28em] text-fg-muted">
              dev.session
            </span>
          </div>

          <div class="space-y-4 p-5 font-mono md:p-6">
            <div class="text-sm leading-relaxed text-fg-muted">
              <span class="text-dev">$</span>
              <span class="ml-3 text-fg">{{ typedCommand }}</span>
              <span
                class="typing-cursor"
                :class="{ 'is-passive': activeLine !== 'command' }"
              ></span>
            </div>

            <div
              ref="terminalOutputRef"
              class="rounded-2xl border border-white/6 bg-black/20 p-4 shadow-sm ring-1 ring-inset ring-white/5"
            >
              <p class="text-[11px] uppercase tracking-[0.28em] text-fg-muted">compiled output</p>
              <p class="mt-3 text-lg leading-relaxed text-balance text-fg md:text-xl">
                {{ typedRole || ' ' }}
              </p>
            </div>

            <div class="grid gap-3 sm:grid-cols-2">
              <div class="rounded-2xl border border-white/6 bg-white/3 p-4">
                <p class="text-[11px] uppercase tracking-[0.24em] text-fg-muted">current role</p>
                <p class="mt-2 text-sm text-fg">{{ t('devProfile.jobTitle') }}</p>
                <p class="mt-1 text-xs text-fg-muted">{{ t('devProfile.jobCompany') }}</p>
              </div>

              <div class="rounded-2xl border border-white/6 bg-white/3 p-4">
                <p class="text-[11px] uppercase tracking-[0.24em] text-fg-muted">status</p>
                <p class="mt-2 text-sm tabular-nums text-fg">{{ t('devProfile.jobPeriod') }}</p>
                <p class="mt-1 text-xs text-fg-muted">shipping scalable products</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      v-motion
      :initial="{ opacity: 0, scaleX: 0 }"
      :enter="{
        opacity: 1,
        scaleX: 1,
        transition: { delay: 620, duration: 820, ease: [0.16, 1, 0.3, 1] },
      }"
      class="absolute bottom-0 left-0 h-px w-full bg-linear-to-r from-transparent via-dev/35 to-transparent"
      aria-hidden="true"
    ></div>
  </section>
</template>

<style scoped>
.hero-grid {
  background-image:
    linear-gradient(rgb(255 255 255 / 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgb(255 255 255 / 0.03) 1px, transparent 1px);
  background-size: 40px 40px;
  mask-image: linear-gradient(180deg, rgb(0 0 0 / 0.55), transparent 92%);
  opacity: 0.4;
}

.terminal-shell {
  position: relative;
  backdrop-filter: blur(18px);
}

.typed-role {
  min-height: 1.4em;
}

.typing-cursor {
  display: inline-block;
  width: 10px;
  height: 1.2em;
  border-radius: 9999px;
  background: color-mix(in srgb, var(--color-dev) 80%, white 20%);
  animation: blink-cursor 1s steps(1) infinite;
  box-shadow: 0 0 14px color-mix(in srgb, var(--color-dev) 60%, transparent);
}

.typing-cursor.is-passive {
  opacity: 0.35;
}

@keyframes blink-cursor {
  0%,
  45% {
    opacity: 1;
  }

  46%,
  100% {
    opacity: 0;
  }
}

@media (max-width: 1023px) {
  .typing-cursor {
    width: 8px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .typing-cursor {
    animation: none;
    opacity: 0.7;
  }
}
</style>
