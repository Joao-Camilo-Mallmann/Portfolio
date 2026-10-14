<script setup>
import EditorProjectCard from '@/components/Editor/EditorProjectCard.vue'
import { useI18n } from '@/composables/useI18n'

defineProps({
  projects: {
    type: Array,
    required: true,
  },
})

const emit = defineEmits(['play'])

const { t, localizedPath } = useI18n()
</script>

<template>
  <section
    id="portfolio"
    class="mx-auto max-w-6xl scroll-mt-32 px-4 py-24 md:px-6 md:py-32"
    aria-labelledby="portfolio-heading"
  >
    <header v-motion-scroll-visible class="mb-12 max-w-3xl">
      <p class="mb-4 text-xs font-semibold tracking-[0.18em] text-editor uppercase">
        {{ t('editorFilmstrip.eyebrow') }}
      </p>
      <h2
        id="portfolio-heading"
        class="text-4xl font-black tracking-tight text-fg text-balance md:text-6xl"
      >
        {{ t('editorFilmstrip.titleStart') }}
        <span class="text-editor">{{ t('editorFilmstrip.titleHighlight') }}</span
        >{{ t('editorFilmstrip.titleEnd') }}
      </h2>
      <p class="mt-5 text-lg leading-relaxed text-fg-muted text-pretty">
        {{ t('editorFilmstrip.subtitle') }}
      </p>
    </header>

    <!-- Faixa de cortes: rola na horizontal no mobile, grid no desktop -->
    <ul
      class="filmstrip -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 md:mx-0 md:grid md:grid-cols-2 md:gap-6 md:overflow-visible md:px-0 md:pb-0 xl:grid-cols-4"
    >
      <li
        v-for="project in projects"
        :key="project.youtubeId"
        class="w-[82%] shrink-0 snap-start sm:w-[60%] md:w-auto"
      >
        <editor-project-card :project="project" eager @play="emit('play', $event)" />
      </li>
    </ul>

    <div class="mt-10">
      <router-link
        :to="localizedPath('/editor/projetos')"
        class="inline-flex min-h-12 items-center gap-3 rounded-full border border-white/15 px-6 font-semibold text-fg transition-colors duration-200 hover:border-editor/50 hover:text-editor focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-editor"
      >
        {{ t('editorFilmstrip.seeAll') }}
        <i class="pi pi-arrow-right text-sm"></i>
      </router-link>
    </div>
  </section>
</template>

<style scoped>
.filmstrip {
  scrollbar-width: none;
}

.filmstrip::-webkit-scrollbar {
  display: none;
}
</style>
