<script setup>
import { useI18n } from '@/composables/useI18n'
import { useWhatsApp } from '@/composables/useWhatsApp'
import { getFallbackThumbnailUrl, getThumbnailUrl, thumbProjects } from '@/data/editorProjects'

const emit = defineEmits(['play'])

const { t } = useI18n()
const { whatsappLink } = useWhatsApp()

// Destaque + 8 capas fecham a grade de 4 colunas sem buracos
const thumbs = thumbProjects.slice(0, 9)

const handleImageLoad = (event, project) => {
  if (event.target.naturalWidth <= 120) event.target.src = getFallbackThumbnailUrl(project)
}
</script>

<template>
  <section
    id="thumbnails"
    class="mx-auto max-w-6xl scroll-mt-32 border-t border-white/5 px-4 py-24 md:px-6 md:py-32"
    aria-labelledby="thumbs-heading"
  >
    <header
      v-motion-scroll-visible
      class="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
    >
      <div class="max-w-2xl">
        <p class="mb-4 text-xs font-semibold tracking-[0.18em] text-editor uppercase">
          {{ t('editorThumbs.eyebrow') }}
        </p>
        <h2
          id="thumbs-heading"
          class="text-4xl font-black tracking-tight text-fg text-balance md:text-6xl"
        >
          {{ t('editorThumbs.titleStart') }}
          <span class="text-editor">{{ t('editorThumbs.titleHighlight') }}</span
          >{{ t('editorThumbs.titleEnd') }}
        </h2>
        <p class="mt-5 text-lg leading-relaxed text-fg-muted text-pretty">
          {{ t('editorThumbs.subtitle') }}
        </p>
      </div>
      <a
        :href="whatsappLink('thumbnails')"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex min-h-12 shrink-0 items-center gap-2 self-start rounded-full border border-white/15 bg-white/5 px-6 text-sm font-semibold text-fg transition-colors duration-200 hover:border-editor hover:bg-editor hover:text-obsidian focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-editor md:self-end"
      >
        <i class="pi pi-whatsapp"></i>
        {{ t('editorThumbs.cta') }}
      </a>
    </header>

    <!-- Folha de contato: perfurações de filme em cima e embaixo -->
    <div
      class="contact-sheet rounded-3xl bg-black px-3 py-9 ring-1 ring-inset ring-white/10 md:px-5 md:py-11"
    >
      <ul class="grid grid-cols-2 gap-3 md:gap-4 lg:grid-cols-4">
        <li
          v-for="(project, index) in thumbs"
          :key="project.youtubeId"
          :class="index === 0 ? 'col-span-2 lg:row-span-2' : ''"
        >
          <button
            type="button"
            class="group block w-full cursor-pointer text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-editor"
            :aria-label="`${t('editorThumbs.watch')}: ${project.title}`"
            @click="emit('play', project)"
          >
            <span
              class="relative block aspect-video overflow-hidden rounded-lg ring-1 ring-white/10 transition-shadow duration-300 group-hover:ring-2 group-hover:ring-editor"
            >
              <img
                :src="getThumbnailUrl(project)"
                :alt="project.title"
                class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                loading="lazy"
                @load="handleImageLoad($event, project)"
              />
            </span>
            <span
              class="mt-2 flex items-center gap-2 font-mono text-[11px] text-fg-muted tabular-nums"
            >
              <span class="text-editor">#{{ String(index + 1).padStart(2, '0') }}</span>
              <span class="truncate transition-colors duration-200 group-hover:text-fg">
                {{ project.title }}
              </span>
            </span>
          </button>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.contact-sheet {
  --hole: rgba(255, 255, 255, 0.08);
  background-image:
    repeating-linear-gradient(to right, var(--hole) 0 14px, transparent 14px 28px),
    repeating-linear-gradient(to right, var(--hole) 0 14px, transparent 14px 28px);
  background-size:
    100% 10px,
    100% 10px;
  background-position:
    0 14px,
    0 calc(100% - 14px);
  background-repeat: no-repeat;
  background-origin: padding-box;
}
</style>
