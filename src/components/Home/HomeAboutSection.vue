<script setup>
import { useI18n } from '@/composables/useI18n'
import {
  getFallbackThumbnailUrl,
  getThumbnailUrl,
  thumbProjects,
  toTimecode,
} from '@/data/editorProjects'
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'

const { t } = useI18n()

// Sites reais do portfólio Dev que passam dentro da janela do navegador
const siteShots = ['/img/vimasi.webp', '/img/destinos.webp', '/img/smu.webp', '/img/STW.webp']
const activeShot = ref(0)

// Linhas do terminal: aparecem uma a uma, como se fossem digitadas
const terminalLines = [
  { prompt: true, text: 'docker compose up' },
  { ok: ['postgres', 'api', 'worker'] },
  { prompt: true, text: 'curl /projetos' },
  { status: '200', text: '[ "vimasi", "dashboard", "brpd" ]' },
]

// Tira de filme com as capas reais dos vídeos editados (duplicada para o loop não ter emenda)
const filmThumbs = thumbProjects.slice(0, 8)
const filmLoop = [...filmThumbs, ...filmThumbs]

// Timecode da gravação correndo a 24 quadros por segundo
const elapsedFrames = ref(84 * 24 + 12)
const timecode = computed(() =>
  toTimecode(Math.floor(elapsedFrames.value / 24), elapsedFrames.value % 24),
)

let shotTimer = null
let timecodeTimer = null

// O terminal só começa a "digitar" quando o card entra na tela
const terminalRef = ref(null)
const terminalTyping = ref(false)
let terminalObserver = null

onMounted(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    terminalTyping.value = true
    return
  }
  terminalObserver = new IntersectionObserver(
    ([entry]) => {
      if (!entry.isIntersecting) return
      terminalTyping.value = true
      terminalObserver.disconnect()
    },
    { threshold: 0.4 },
  )
  if (terminalRef.value) terminalObserver.observe(terminalRef.value)

  shotTimer = setInterval(() => {
    activeShot.value = (activeShot.value + 1) % siteShots.length
  }, 3200)
  timecodeTimer = setInterval(() => {
    elapsedFrames.value += 3
  }, 125)
})

onBeforeUnmount(() => {
  terminalObserver?.disconnect()
  clearInterval(shotTimer)
  clearInterval(timecodeTimer)
})

const handleThumbLoad = (event, project) => {
  if (event.target.naturalWidth <= 120) event.target.src = getFallbackThumbnailUrl(project)
}

// Cards entram de lados opostos com leve rotação que se corrige
const cardFrom = (fromLeft) => ({ opacity: 0, x: fromLeft ? -40 : 40, rotate: fromLeft ? -2 : 2 })
const cardTo = (delay = 0) => ({
  opacity: 1,
  x: 0,
  rotate: 0,
  transition: { type: 'spring', stiffness: 120, damping: 14, delay },
})
</script>

<template>
  <section
    id="sobre"
    class="relative scroll-mt-28 px-4 pt-20 md:px-6 md:pt-32"
    aria-labelledby="home-about-heading"
  >
    <!-- Brilho ambiente azul + laranja -->
    <div
      class="pointer-events-none absolute top-1/3 left-1/2 h-150 w-150 -translate-x-1/2 rounded-full bg-linear-to-tr from-dev/20 via-cyan-glow/10 to-editor/20 blur-[150px]"
      aria-hidden="true"
    ></div>

    <!-- Sobre -->
    <div
      class="relative mx-auto grid max-w-5xl items-center gap-8 lg:grid-cols-[minmax(0,300px)_minmax(0,1fr)] lg:gap-14"
    >
      <img
        v-motion
        :initial="{ opacity: 0, scale: 0.9, rotate: -4 }"
        :visible-once="{
          opacity: 1,
          scale: 1,
          rotate: 0,
          transition: { type: 'spring', stiffness: 180, damping: 14 },
        }"
        src="/img/me_home.webp"
        :alt="t('home.about.photoAlt')"
        class="aspect-4/5 w-full rounded-3xl bg-surface-100 object-cover object-[50%_28%] ring-1 ring-white/10 sm:max-w-sm lg:max-w-none"
        loading="lazy"
      />

      <div class="flex flex-col gap-5">
        <h2
          id="home-about-heading"
          v-motion-scroll-visible
          class="font-display text-3xl leading-[1.05] font-medium tracking-tight text-fg text-balance md:text-5xl"
        >
          {{ t('home.about.title') }}
        </h2>
        <p
          v-motion-scroll-visible
          :delay="100"
          class="max-w-2xl text-[15px] leading-relaxed text-fg-muted text-pretty md:text-[17px]"
        >
          {{ t('home.about.text') }}
        </p>
        <p v-motion-scroll-visible :delay="200" class="text-sm text-fg-muted md:text-[15px]">
          <strong class="font-bold text-fg">{{ t('home.about.stats.years') }}</strong>
          {{ t('home.about.stats.yearsTail') }}
          <strong class="font-bold text-dev">{{ t('home.about.stats.projects') }}</strong>
          {{ t('home.about.stats.projectsTail') }}
          <strong class="font-bold text-editor">{{ t('home.about.stats.videos') }}</strong>
          {{ t('home.about.stats.videosTail') }}
        </p>
      </div>
    </div>

    <!-- O que eu faço: cada card mostra o próprio trabalho -->
    <div class="relative mx-auto mt-20 max-w-[1600px] md:mt-32">
      <h3
        v-motion-scroll-visible
        class="mb-6 font-display text-2xl font-medium tracking-tight text-fg md:text-[2rem]"
      >
        {{ t('home.about.servicesTitle') }}
      </h3>

      <div class="grid grid-cols-1 gap-5 lg:grid-cols-12">
        <!-- Front-end: navegador passando pelos sites reais -->
        <div
          v-motion
          :initial="cardFrom(true)"
          :visible-once="cardTo()"
          class="lg:col-span-7 lg:row-span-2"
        >
          <article
            class="group relative flex h-full flex-col gap-5 rounded-[20px] bg-surface-100 p-5 ring-1 ring-white/10 transition-[transform,box-shadow] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:ring-dev/40 md:p-7"
          >
            <span
              class="absolute -top-3 right-6 z-10 rotate-6 rounded-lg bg-dev px-3 py-1.5 font-display text-[13px] font-bold text-obsidian shadow-lg transition-transform duration-300 group-hover:rotate-12"
              aria-hidden="true"
            >
              {{ t('home.about.frontend.sticker') }}
            </span>
            <h4
              class="font-display text-[1.375rem] leading-[1.08] font-medium tracking-tight text-fg text-balance md:text-[2.25rem]"
            >
              {{ t('home.about.frontend.title') }}
            </h4>

            <div
              class="flex flex-1 flex-col overflow-hidden rounded-xl bg-bg ring-1 ring-white/10"
              aria-hidden="true"
            >
              <div class="flex items-center gap-3 border-b border-white/10 px-3 py-2.5">
                <span class="flex gap-1.5">
                  <span class="size-2.5 rounded-full bg-red-400"></span>
                  <span class="size-2.5 rounded-full bg-yellow-400"></span>
                  <span class="size-2.5 rounded-full bg-green-500"></span>
                </span>
                <span
                  class="flex-1 truncate rounded-full bg-surface-100 px-3 py-1 font-mono text-xs text-fg-muted"
                >
                  {{ t('home.about.frontend.sites')[activeShot] }}
                </span>
              </div>
              <div class="relative aspect-video flex-1 overflow-hidden lg:aspect-auto lg:min-h-64">
                <img
                  v-for="(shot, index) in siteShots"
                  :key="shot"
                  :src="shot"
                  alt=""
                  class="site-shot absolute inset-0 h-full w-full object-cover object-top transition-opacity duration-700"
                  :class="index === activeShot ? 'opacity-100' : 'opacity-0'"
                  loading="lazy"
                />
              </div>
            </div>
          </article>
        </div>

        <!-- Back-end: terminal sendo digitado -->
        <div
          v-motion
          :initial="cardFrom(false)"
          :visible-once="cardTo(120)"
          class="max-lg:ml-auto max-lg:w-[90%] lg:col-span-5"
        >
          <article
            ref="terminalRef"
            class="flex h-full flex-col overflow-hidden rounded-[20px] bg-obsidian ring-1 ring-white/10 transition-[transform,box-shadow] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:ring-green-400/40 max-lg:rotate-[1.5deg]"
          >
            <div class="flex gap-1.5 border-b border-white/10 px-4 py-3" aria-hidden="true">
              <span class="size-2.5 rounded-full bg-white/15"></span>
              <span class="size-2.5 rounded-full bg-white/15"></span>
              <span class="size-2.5 rounded-full bg-white/15"></span>
            </div>
            <div
              class="flex flex-1 flex-col gap-1.5 p-4 font-mono text-xs leading-relaxed text-gray-300 md:text-[13px]"
              aria-hidden="true"
            >
              <p
                v-for="(line, index) in terminalLines"
                :key="index"
                class="type-line truncate"
                :class="{ 'is-typing': terminalTyping }"
                :style="{ animationDelay: `${300 + index * 450}ms` }"
              >
                <template v-if="line.prompt">
                  <span class="text-green-400">~/api</span>
                  <span class="text-fg-muted"> $ </span>{{ line.text }}
                </template>
                <template v-else-if="line.ok">
                  <span v-for="item in line.ok" :key="item" class="mr-3">
                    <span class="text-green-400">✔</span> {{ item }}
                  </span>
                </template>
                <template v-else>
                  <span class="text-dev">{{ line.status }}</span> {{ line.text }}
                </template>
              </p>
              <p
                class="type-line"
                :class="{ 'is-typing': terminalTyping }"
                :style="{ animationDelay: `${300 + terminalLines.length * 450}ms` }"
              >
                <span class="text-green-400">~/api</span>
                <span class="text-fg-muted"> $ </span>
                <span class="caret inline-block h-[15px] w-2 bg-gray-300 align-[-2px]"></span>
              </p>
            </div>
            <div class="flex flex-col gap-1 px-4 pb-5">
              <h4 class="font-display text-[1.375rem] font-medium tracking-tight text-fg">
                {{ t('home.about.backend.title') }}
              </h4>
              <p class="text-sm text-fg-muted">{{ t('home.about.backend.text') }}</p>
            </div>
          </article>
        </div>

        <!-- Apps e automações: prints reais empilhados que se abrem no hover -->
        <div
          v-motion
          :initial="cardFrom(false)"
          :visible-once="cardTo(200)"
          class="max-lg:w-[90%] lg:col-span-5"
        >
          <article
            class="group flex h-full flex-col gap-4 overflow-hidden rounded-[20px] bg-surface-100 p-5 ring-1 ring-white/10 transition-[transform,box-shadow] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:ring-cyan-glow/40 max-lg:-rotate-[1.5deg]"
          >
            <div class="relative h-40 md:h-44" aria-hidden="true">
              <img
                src="/img/brpd.webp"
                alt=""
                class="float-a absolute top-0 right-0 w-[70%] rounded-lg object-cover shadow-lg ring-1 ring-white/10 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-3 group-hover:rotate-6"
                loading="lazy"
              />
              <img
                src="/img/painel-vimasi.webp"
                alt=""
                class="float-b absolute bottom-0 left-0 w-[72%] rounded-lg object-cover shadow-lg ring-1 ring-white/10 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-x-3 group-hover:-rotate-6"
                loading="lazy"
              />
            </div>
            <div class="flex items-center justify-between gap-3 rounded-xl bg-bg px-3 py-2.5">
              <span class="text-sm text-gray-300">{{ t('home.about.apps.toggle') }}</span>
              <span
                role="img"
                :aria-label="t('home.about.apps.toggleState')"
                class="relative h-[22px] w-10 shrink-0 rounded-full bg-cyan-glow"
              >
                <span
                  v-motion
                  :initial="{ x: -18 }"
                  :visible-once="{
                    x: 0,
                    transition: { type: 'spring', stiffness: 300, damping: 18, delay: 900 },
                  }"
                  class="absolute top-[3px] right-[3px] size-4 rounded-full bg-obsidian"
                ></span>
              </span>
            </div>
            <div class="flex flex-col gap-1">
              <h4 class="font-display text-[1.375rem] font-medium tracking-tight text-fg">
                {{ t('home.about.apps.title') }}
              </h4>
              <p class="text-sm leading-relaxed text-fg-muted text-pretty">
                {{ t('home.about.apps.text') }}
              </p>
            </div>
          </article>
        </div>

        <!-- Edição de vídeo: tira de filme correndo com as capas reais -->
        <div
          v-motion
          :initial="cardFrom(true)"
          :visible-once="cardTo(200)"
          class="max-lg:-mx-4 max-lg:mt-4 md:max-lg:-mx-6 lg:col-span-12"
        >
          <article
            class="group relative flex h-full flex-col gap-4 overflow-hidden bg-black p-5 ring-white/10 max-lg:border-y max-lg:pt-12 max-lg:border-white/10 lg:-rotate-[0.6deg] lg:rounded-[20px] lg:ring-1 transition-[transform,box-shadow] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:rotate-0 hover:ring-editor/40 lg:flex-row lg:items-center lg:gap-8 lg:p-7"
          >
            <div class="flex shrink-0 flex-col gap-2 lg:w-80">
              <span
                class="inline-flex items-center gap-2 self-start font-mono text-xs"
                aria-hidden="true"
              >
                <span class="inline-flex items-center gap-1.5 font-semibold text-red-500">
                  <span class="rec size-2 rounded-full bg-red-500"></span>
                  REC
                </span>
                <span class="text-editor tabular-nums">{{ timecode }}</span>
              </span>
              <h4
                class="font-display text-[1.375rem] font-medium tracking-tight text-editor md:text-[2.25rem]"
              >
                {{ t('home.about.video.title') }}
              </h4>
              <p class="text-sm text-fg-muted">{{ t('home.about.video.text') }}</p>
            </div>

            <div class="film-holes min-w-0 flex-1 overflow-hidden py-4" aria-hidden="true">
              <div class="film-track flex w-max gap-1.5">
                <img
                  v-for="(project, index) in filmLoop"
                  :key="`${project.youtubeId}-${index}`"
                  :src="getThumbnailUrl(project)"
                  alt=""
                  class="aspect-video w-44 rounded object-cover grayscale-[35%] transition-[filter] duration-300 group-hover:grayscale-0 md:w-52"
                  loading="lazy"
                  @load="handleThumbLoad($event, project)"
                />
              </div>
            </div>

            <span
              class="absolute -top-0.5 left-6 z-10 -rotate-5 rounded-b-lg bg-editor px-3 py-1.5 font-display text-[13px] font-bold text-obsidian shadow-lg transition-transform duration-300 group-hover:-rotate-1"
              aria-hidden="true"
            >
              {{ t('home.about.video.sticker') }}
            </span>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Perfurações de filme em cima e embaixo da tira */
.film-holes {
  --hole: rgba(255, 255, 255, 0.14);
  background-image:
    repeating-linear-gradient(to right, var(--hole) 0 12px, transparent 12px 24px),
    repeating-linear-gradient(to right, var(--hole) 0 12px, transparent 12px 24px);
  background-size:
    100% 8px,
    100% 8px;
  background-position:
    0 3px,
    0 calc(100% - 3px);
  background-repeat: no-repeat;
}

/* A tira corre sem parar; no hover ela acelera */
.film-track {
  animation: film-roll 40s linear infinite;
}

.group:hover .film-track {
  animation-duration: 14s;
}

@keyframes film-roll {
  to {
    transform: translateX(-50%);
  }
}

/* Print do site desce devagar, como alguém rolando a página */
.site-shot {
  animation: site-scroll 9s ease-in-out infinite alternate;
}

@keyframes site-scroll {
  from {
    object-position: 50% 0%;
  }
  to {
    object-position: 50% 100%;
  }
}

/* Prints dos apps flutuando em contra-fase */
.float-a {
  animation: float-a 5s ease-in-out infinite;
}

.float-b {
  animation: float-b 5s ease-in-out infinite;
}

@keyframes float-a {
  0%,
  100% {
    translate: 0 0;
  }
  50% {
    translate: 0 -6px;
  }
}

@keyframes float-b {
  0%,
  100% {
    translate: 0 -6px;
  }
  50% {
    translate: 0 0;
  }
}

/* Linhas do terminal aparecendo como se fossem digitadas */
.type-line {
  clip-path: inset(0 100% 0 0);
}

.type-line.is-typing {
  animation: type-in 0.45s steps(18, end) both;
}

@keyframes type-in {
  to {
    clip-path: inset(0 0 0 0);
  }
}

/* Cursor do terminal e ponto de REC piscando */
.caret,
.rec {
  animation: blink 1.1s steps(1) infinite;
}

@keyframes blink {
  50% {
    opacity: 0;
  }
}

@media (prefers-reduced-motion: reduce) {
  .film-track,
  .site-shot,
  .float-a,
  .float-b,
  .caret,
  .rec {
    animation: none;
  }

  .type-line {
    clip-path: none;
  }
}
</style>
