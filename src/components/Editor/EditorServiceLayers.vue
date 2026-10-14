<script setup>
import { useI18n } from '@/composables/useI18n'
import { useWhatsApp } from '@/composables/useWhatsApp'
import { computed, ref } from 'vue'

const { t } = useI18n()
const { whatsappLink } = useWhatsApp()

// Trilhas na ordem de uma timeline real: vídeo empilhado de cima para baixo, áudio embaixo.
// clips: [início %, largura %] de cada bloco desenhado na trilha
const tracks = [
  {
    track: 'V3',
    key: 'thumbnails',
    icon: 'pi-image',
    kind: 'video',
    clips: [
      [4, 9],
      [38, 9],
      [72, 9],
    ],
  },
  {
    track: 'V2',
    key: 'shorts',
    icon: 'pi-mobile',
    kind: 'video',
    clips: [
      [10, 14],
      [30, 12],
      [56, 16],
      [80, 12],
    ],
  },
  {
    track: 'V1',
    key: 'youtube',
    icon: 'pi-youtube',
    kind: 'video',
    clips: [
      [0, 34],
      [35, 27],
      [63, 37],
    ],
  },
  { track: 'A1', key: 'finishing', icon: 'pi-volume-up', kind: 'audio', clips: [[0, 100]] },
]

// Alturas fixas da waveform (determinísticas para o HTML do SSG bater com o cliente)
const WAVE = Array.from({ length: 96 }, (_, i) =>
  Math.round(25 + 60 * Math.abs(Math.sin(i * 0.55) * Math.cos(i * 0.21))),
)

const activeKey = ref('youtube')
const tabRefs = ref([])

const active = computed(() => tracks.find((item) => item.key === activeKey.value))
const includes = computed(() => t(`editorServices.items.${activeKey.value}.includes`))

const onKeydown = (event, index) => {
  const step = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 }[event.key]
  if (!step) return
  event.preventDefault()
  const next = (index + step + tracks.length) % tracks.length
  activeKey.value = tracks[next].key
  tabRefs.value[next]?.focus()
}
</script>

<template>
  <section
    id="servicos"
    class="mx-auto max-w-6xl scroll-mt-32 border-t border-white/5 px-4 py-24 md:px-6 md:py-32"
    aria-labelledby="services-heading"
  >
    <header v-motion-scroll-visible class="mb-14 max-w-3xl">
      <p class="mb-4 text-xs font-semibold tracking-[0.18em] text-editor uppercase">
        {{ t('editorServices.eyebrow') }}
      </p>
      <h2
        id="services-heading"
        class="text-4xl font-black tracking-tight text-fg text-balance md:text-6xl"
      >
        {{ t('editorServices.titleStart') }}
        <span class="text-editor">{{ t('editorServices.titleHighlight') }}</span
        >{{ t('editorServices.titleEnd') }}
      </h2>
      <p class="mt-5 text-lg leading-relaxed text-fg-muted text-pretty">
        {{ t('editorServices.subtitle') }}
      </p>
    </header>

    <!-- Pilha de trilhas: cada trilha é um serviço selecionável -->
    <div
      role="tablist"
      aria-orientation="vertical"
      :aria-label="t('editorServices.tracksLabel')"
      class="flex flex-col"
    >
      <template v-for="(item, index) in tracks" :key="item.key">
        <div v-if="item.kind === 'audio'" class="my-2 h-px bg-white/15" aria-hidden="true"></div>
        <button
          :id="`service-tab-${item.key}`"
          :ref="(el) => (tabRefs[index] = el)"
          type="button"
          role="tab"
          :aria-selected="activeKey === item.key"
          aria-controls="service-detail"
          :tabindex="activeKey === item.key ? 0 : -1"
          class="group grid cursor-pointer grid-cols-[2.5rem_minmax(0,1fr)] items-center gap-3 py-1.5 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-editor md:grid-cols-[3.5rem_14rem_minmax(0,1fr)] md:gap-5"
          @click="activeKey = item.key"
          @keydown="onKeydown($event, index)"
        >
          <span
            class="font-mono text-sm font-bold transition-colors duration-200"
            :class="
              activeKey === item.key
                ? item.kind === 'audio'
                  ? 'text-cyan-glow'
                  : 'text-editor'
                : 'text-fg-muted/60 group-hover:text-fg-muted'
            "
          >
            {{ item.track }}
          </span>

          <span
            class="hidden items-center gap-2.5 text-base font-semibold transition-colors duration-200 md:flex"
            :class="activeKey === item.key ? 'text-fg' : 'text-fg-muted group-hover:text-fg'"
          >
            <i :class="`pi ${item.icon} text-sm`" aria-hidden="true"></i>
            {{ t(`editorServices.items.${item.key}.title`) }}
          </span>

          <!-- Faixa da trilha com os clipes -->
          <span class="relative block h-12 md:h-14">
            <template v-if="item.kind === 'video'">
              <span
                v-for="([start, width], clipIndex) in item.clips"
                :key="clipIndex"
                class="absolute inset-y-0 rounded-[3px] transition-colors duration-300"
                :class="
                  activeKey === item.key ? 'bg-editor' : 'bg-white/10 group-hover:bg-white/20'
                "
                :style="{ left: `${start}%`, width: `${width}%` }"
              ></span>
              <!-- No mobile o nome do serviço vai sobre a trilha -->
              <span
                class="absolute top-1/2 left-2 -translate-y-1/2 rounded bg-obsidian/80 px-1.5 py-0.5 text-xs font-bold text-fg md:hidden"
              >
                <i :class="`pi ${item.icon} mr-1 text-[10px]`" aria-hidden="true"></i>
                {{ t(`editorServices.items.${item.key}.title`) }}
              </span>
            </template>

            <template v-else>
              <span
                class="absolute inset-0 flex items-center gap-[2px] rounded-[3px] px-1 transition-colors duration-300"
                :class="activeKey === item.key ? 'bg-cyan-glow/15' : 'bg-white/5'"
              >
                <span
                  v-for="(height, barIndex) in WAVE"
                  :key="barIndex"
                  class="flex-1 rounded-full transition-colors duration-300"
                  :class="
                    activeKey === item.key ? 'bg-cyan-glow' : 'bg-white/20 group-hover:bg-white/30'
                  "
                  :style="{ height: `${height}%` }"
                ></span>
              </span>
              <span
                class="absolute top-1/2 left-2 -translate-y-1/2 rounded bg-obsidian/80 px-1.5 py-0.5 text-xs font-bold text-fg md:hidden"
              >
                <i :class="`pi ${item.icon} mr-1 text-[10px]`" aria-hidden="true"></i>
                {{ t(`editorServices.items.${item.key}.title`) }}
              </span>
            </template>
          </span>
        </button>
      </template>
    </div>

    <!-- Detalhe do serviço selecionado -->
    <transition name="service-swap" mode="out-in">
      <div
        id="service-detail"
        :key="activeKey"
        role="tabpanel"
        :aria-labelledby="`service-tab-${activeKey}`"
        class="mt-12 grid gap-12 border-t border-white/10 pt-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:gap-20"
      >
        <div>
          <p
            class="mb-4 flex items-center gap-3 font-mono text-sm font-bold"
            :class="active.kind === 'audio' ? 'text-cyan-glow' : 'text-editor'"
          >
            <span
              class="flex h-11 w-11 items-center justify-center rounded-full"
              :class="active.kind === 'audio' ? 'bg-cyan-glow/15' : 'bg-editor/15'"
              aria-hidden="true"
            >
              <i :class="`pi ${active.icon} text-lg`"></i>
            </span>
            {{ active.track }}
          </p>
          <h3 class="text-4xl font-black tracking-tight text-fg text-balance md:text-5xl">
            {{ t(`editorServices.items.${activeKey}.title`) }}
          </h3>
          <p class="mt-5 max-w-md text-lg leading-relaxed text-fg-muted text-pretty">
            {{ t(`editorServices.items.${activeKey}.description`) }}
          </p>
          <a
            :href="whatsappLink(activeKey)"
            target="_blank"
            rel="noopener noreferrer"
            class="mt-8 inline-flex min-h-12 items-center gap-2 rounded-full bg-editor px-6 font-bold text-obsidian transition-opacity duration-200 hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-editor"
          >
            <i class="pi pi-whatsapp"></i>
            {{ t('editorServices.cta') }}
          </a>
        </div>

        <div>
          <h4 class="mb-2 text-sm font-semibold text-fg-muted">
            {{ t('editorServices.includesLabel') }}
          </h4>
          <ul class="divide-y divide-white/5">
            <li
              v-for="line in includes"
              :key="line"
              class="flex items-start gap-3 py-3.5 text-lg text-fg"
            >
              <i
                class="pi pi-check mt-1.5 text-xs"
                :class="active.kind === 'audio' ? 'text-cyan-glow' : 'text-editor'"
                aria-hidden="true"
              ></i>
              {{ line }}
            </li>
          </ul>

          <dl class="mt-8 grid gap-6 sm:grid-cols-2">
            <div>
              <dt class="mb-1.5 flex items-center gap-2 text-sm font-semibold text-fg-muted">
                <i class="pi pi-users text-xs" aria-hidden="true"></i>
                {{ t('editorServices.idealLabel') }}
              </dt>
              <dd class="leading-relaxed text-fg text-pretty">
                {{ t(`editorServices.items.${activeKey}.idealFor`) }}
              </dd>
            </div>
            <div>
              <dt class="mb-1.5 flex items-center gap-2 text-sm font-semibold text-fg-muted">
                <i class="pi pi-download text-xs" aria-hidden="true"></i>
                {{ t('editorServices.deliveryLabel') }}
              </dt>
              <dd class="leading-relaxed text-fg text-pretty">
                {{ t(`editorServices.items.${activeKey}.delivery`) }}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </transition>

    <p class="mt-16 border-t border-white/5 pt-8 text-fg-muted text-pretty">
      <span class="font-semibold text-fg">{{ t('editorServices.monthlyLead') }}</span>
      {{ t('editorServices.monthlyText') }}
      <a
        :href="whatsappLink('monthly')"
        target="_blank"
        rel="noopener noreferrer"
        class="font-semibold text-editor underline-offset-4 hover:underline"
      >
        {{ t('editorServices.monthlyCta') }}
      </a>
    </p>
  </section>
</template>

<style scoped>
.service-swap-enter-active,
.service-swap-leave-active {
  transition:
    opacity 0.2s ease,
    transform 0.2s ease;
}

.service-swap-enter-from {
  opacity: 0;
  transform: translateY(6px);
}

.service-swap-leave-to {
  opacity: 0;
}

@media (prefers-reduced-motion: reduce) {
  .service-swap-enter-active,
  .service-swap-leave-active {
    transition: none;
  }
}
</style>
