<script setup>
import {
  channels,
  getFallbackThumbnailUrl,
  getThumbnailUrl,
  toTimecode,
} from '@/data/editorProjects'
import { useI18n } from '@/composables/useI18n'
import { computed } from 'vue'

const props = defineProps({
  project: {
    type: Object,
    required: true,
  },
  // Cards da faixa de cortes carregam imagem com prioridade
  eager: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['play'])

const { t } = useI18n()

const isShort = computed(() => props.project.format === 'short')
const channelName = computed(() => channels[props.project.channel]?.name ?? '')

const serviceLabel = computed(() => {
  if (isShort.value) return t('editorProjectCard.short')
  return props.project.thumb ? t('editorProjectCard.editAndThumb') : t('editorProjectCard.edit')
})

// O YouTube devolve um placeholder 120x90 (sem erro) quando não existe maxresdefault
const handleImageLoad = (event) => {
  if (event.target.naturalWidth <= 120) handleImageError(event)
}

const handleImageError = (event) => {
  const fallback = getFallbackThumbnailUrl(props.project)
  if (event.target.src !== fallback) event.target.src = fallback
}
</script>

<template>
  <article
    class="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface-100 ring-1 ring-inset ring-white/5 transition-colors duration-300 hover:border-editor/40"
  >
    <div
      class="relative overflow-hidden bg-black"
      :class="isShort ? 'aspect-9/16' : 'aspect-video'"
    >
      <img
        :src="getThumbnailUrl(project)"
        :alt="project.title"
        class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        :loading="eager ? 'eager' : 'lazy'"
        @load="handleImageLoad"
        @error="handleImageError"
      />
      <div
        class="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent"
      ></div>

      <span
        class="absolute top-3 left-3 rounded-full border border-white/10 bg-black/70 px-2.5 py-1 font-mono text-xs font-semibold tabular-nums text-editor backdrop-blur-sm"
      >
        {{ toTimecode(project.duration) }}
      </span>

      <span
        v-if="isShort"
        class="absolute top-3 right-3 rounded-full bg-black/70 px-2.5 py-1 font-mono text-[11px] font-semibold text-fg backdrop-blur-sm"
      >
        9:16
      </span>

      <span
        class="absolute right-3 bottom-3 flex h-11 w-11 items-center justify-center rounded-full bg-editor text-obsidian shadow-lg shadow-black/40 transition-transform duration-300 group-hover:scale-110"
        aria-hidden="true"
      >
        <i class="pi pi-play ml-0.5 text-sm"></i>
      </span>
    </div>

    <div class="flex flex-1 flex-col p-5">
      <p class="mb-2 font-mono text-xs tracking-wide text-editor">
        {{ t('editorProjectCard.channelPrefix') }} {{ channelName }}
      </p>
      <h3 class="mb-4 line-clamp-2 text-lg leading-snug font-bold text-fg text-balance">
        {{ project.title }}
      </h3>
      <div
        class="mt-auto flex items-center justify-between gap-3 border-t border-border pt-4 text-sm text-fg-muted"
      >
        <span>{{ serviceLabel }}</span>
        <span class="font-semibold tabular-nums text-editor">{{ project.year }}</span>
      </div>
    </div>

    <!-- Área clicável cobrindo o card inteiro -->
    <button
      type="button"
      class="absolute inset-0 z-10 cursor-pointer rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-editor"
      :aria-label="`${t('editorProjectCard.play')}: ${project.title}`"
      @click="emit('play', project)"
    ></button>
  </article>
</template>
