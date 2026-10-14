<script setup>
import EditorFinalCta from '@/components/Editor/EditorFinalCta.vue'
import EditorProjectCard from '@/components/Editor/EditorProjectCard.vue'
import VideoPlayerModal from '@/components/Editor/VideoPlayerModal.vue'
import WhatsAppFloatingButton from '@/components/Editor/WhatsAppFloatingButton.vue'
import FooterContact from '@/components/FooterContact.vue'
import HeaderCore from '@/components/HeaderCore.vue'
import { useI18n } from '@/composables/useI18n'
import { useSeoHead } from '@/composables/useSeoHead'
import { useWhatsApp } from '@/composables/useWhatsApp'
import { channelOrder, channels, editorProjects, PLAYLIST_URL } from '@/data/editorProjects'
import { computed, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const { t, localizedPath } = useI18n()
const { whatsappLink } = useWhatsApp()
const route = useRoute()

useSeoHead({
  path: 'editor/projetos',
  title: () => t('editorProjects.seoTitle'),
  description: () => t('editorProjects.seoDescription'),
  keywords: () => t('editorProjects.seoKeywords'),
})

// Tipos de trabalho: 'thumb' filtra pelas thumbnails feitas pelo João
const TYPE_FILTERS = {
  all: () => true,
  long: (project) => project.format === 'long',
  short: (project) => project.format === 'short',
  thumb: (project) => project.thumb,
}

const typeFilter = ref('all')
const channelFilter = ref('all')
const activeVideo = ref(null)

// ?canal=ofurry vindo da landing já abre filtrado (só no cliente: o HTML do SSG mostra tudo)
onMounted(() => {
  if (channels[route.query.canal]) channelFilter.value = route.query.canal
})

const typeOptions = computed(() =>
  Object.keys(TYPE_FILTERS)
    .filter((key) => editorProjects.some(TYPE_FILTERS[key]))
    .map((key) => ({ value: key, label: t(`editorProjects.types.${key}`) })),
)

const channelOptions = computed(() => [
  { value: 'all', label: t('editorProjects.all') },
  ...channelOrder.map((key) => ({ value: key, label: channels[key].name })),
])

// Um bloco por canal, cada um com seus trabalhos já filtrados
const channelGroups = computed(() =>
  channelOrder
    .filter((key) => channelFilter.value === 'all' || channelFilter.value === key)
    .map((key) => ({
      channel: channels[key],
      projects: editorProjects.filter(
        (project) => project.channel === key && TYPE_FILTERS[typeFilter.value](project),
      ),
    }))
    .filter((group) => group.projects.length > 0),
)

const totalCount = computed(() =>
  channelGroups.value.reduce((sum, group) => sum + group.projects.length, 0),
)

const isShortGroup = (group) => group.projects.every((project) => project.format === 'short')

const clearFilters = () => {
  typeFilter.value = 'all'
  channelFilter.value = 'all'
}

const openPlayer = (project) => {
  activeVideo.value = project
}
</script>

<template>
  <main
    class="page-transition relative min-h-screen overflow-x-clip"
    role="main"
    :aria-label="t('editorProjects.ariaLabel')"
  >
    <header-core />

    <div class="mx-auto max-w-6xl px-4 pt-32 md:px-6 md:pt-40">
      <nav aria-label="Breadcrumb" class="mb-8 font-mono text-xs tracking-wider text-fg-muted">
        <ol class="flex items-center gap-2">
          <li>
            <router-link :to="localizedPath('/editor')" class="transition-colors hover:text-editor">
              {{ t('editorProjects.breadcrumbEditor') }}
            </router-link>
          </li>
          <li aria-hidden="true">/</li>
          <li class="text-fg" aria-current="page">{{ t('editorProjects.breadcrumbProjects') }}</li>
        </ol>
      </nav>

      <header v-motion-scroll-visible class="max-w-4xl">
        <p class="mb-4 text-xs font-semibold tracking-[0.18em] text-editor uppercase">
          {{ t('editorProjects.eyebrow') }}
        </p>
        <h1 class="text-4xl font-black tracking-tight text-fg text-balance md:text-7xl">
          {{ t('editorProjects.titleStart') }}
          <span class="text-editor">{{ t('editorProjects.titleHighlight') }}</span>
          {{ t('editorProjects.titleEnd') }}
        </h1>
        <p class="mt-6 max-w-2xl text-lg leading-relaxed text-fg-muted text-pretty">
          {{ t('editorProjects.subtitle') }}
        </p>
      </header>

      <!-- Filtros -->
      <div
        class="z-30 -mx-4 mt-12 flex flex-col gap-4 border-y border-white/5 bg-bg/95 px-4 py-4 backdrop-blur-md md:mx-0 md:px-0 lg:sticky lg:top-14 lg:flex-row lg:items-center lg:justify-between"
      >
        <div class="flex flex-col gap-3">
          <div
            role="group"
            :aria-label="t('editorProjects.filterType')"
            class="flex flex-wrap items-center gap-2"
          >
            <span class="mr-1 w-14 font-mono text-xs tracking-wider text-fg-muted uppercase">
              {{ t('editorProjects.filterType') }}
            </span>
            <button
              v-for="option in typeOptions"
              :key="option.value"
              type="button"
              class="min-h-10 cursor-pointer rounded-full border px-4 text-sm font-semibold transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-editor"
              :class="
                typeFilter === option.value
                  ? 'border-editor bg-editor text-obsidian'
                  : 'border-white/10 text-fg-muted hover:border-white/25 hover:text-fg'
              "
              :aria-pressed="typeFilter === option.value"
              @click="typeFilter = option.value"
            >
              {{ option.label }}
            </button>
          </div>

          <div
            role="group"
            :aria-label="t('editorProjects.filterChannel')"
            class="flex flex-wrap items-center gap-2"
          >
            <span class="mr-1 w-14 font-mono text-xs tracking-wider text-fg-muted uppercase">
              {{ t('editorProjects.filterChannel') }}
            </span>
            <button
              v-for="option in channelOptions"
              :key="option.value"
              type="button"
              class="min-h-10 cursor-pointer rounded-full border px-4 text-sm font-semibold transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-editor"
              :class="
                channelFilter === option.value
                  ? 'border-editor bg-editor text-obsidian'
                  : 'border-white/10 text-fg-muted hover:border-white/25 hover:text-fg'
              "
              :aria-pressed="channelFilter === option.value"
              @click="channelFilter = option.value"
            >
              {{ option.label }}
            </button>
          </div>
        </div>

        <p class="shrink-0 font-mono text-sm text-fg-muted tabular-nums" aria-live="polite">
          {{ totalCount }} {{ t('editorProjects.countLabel') }}
        </p>
      </div>

      <!-- Blocos por canal -->
      <div class="py-12">
        <div
          v-if="channelGroups.length === 0"
          class="rounded-2xl border border-dashed border-white/10 px-6 py-16 text-center"
        >
          <p class="text-fg-muted">{{ t('editorProjects.empty') }}</p>
          <button
            type="button"
            class="mt-6 inline-flex min-h-11 cursor-pointer items-center gap-2 rounded-full border border-white/15 px-5 font-semibold text-fg hover:border-editor/50"
            @click="clearFilters"
          >
            <i class="pi pi-filter-slash text-sm"></i>
            {{ t('editorProjects.clearFilters') }}
          </button>
        </div>

        <template v-for="(group, groupIndex) in channelGroups" :key="group.channel.key">
          <section class="mb-16 last:mb-0" :aria-labelledby="`channel-group-${group.channel.key}`">
            <header
              class="mb-6 flex flex-col gap-4 border-b border-white/5 pb-5 sm:flex-row sm:items-center sm:justify-between"
            >
              <div class="flex items-center gap-4">
                <img
                  v-if="group.channel.avatar"
                  :src="group.channel.avatar"
                  :alt="''"
                  class="h-14 w-14 rounded-full border-2 border-editor bg-white object-cover"
                />
                <span
                  v-else
                  class="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-surface-card text-xl font-black text-fg-muted"
                  aria-hidden="true"
                >
                  {{ group.channel.name.charAt(0) }}
                </span>
                <div>
                  <h2
                    :id="`channel-group-${group.channel.key}`"
                    class="flex flex-wrap items-center gap-x-3 gap-y-1 text-2xl font-black text-fg"
                  >
                    {{ group.channel.name }}
                    <span
                      v-if="group.channel.own"
                      class="rounded-full border border-editor/30 bg-editor/10 px-2.5 py-0.5 text-xs font-semibold text-editor"
                    >
                      {{ t('editorProjects.ownChannel') }}
                    </span>
                  </h2>
                  <p class="font-mono text-xs text-fg-muted">
                    <span v-if="group.channel.handle">{{ group.channel.handle }} · </span>
                    {{ group.projects.length }} {{ t('editorProjects.countLabel') }}
                  </p>
                </div>
              </div>
              <a
                v-if="group.channel.url"
                :href="group.channel.url"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex min-h-11 items-center gap-2 self-start rounded-full border border-white/15 px-5 text-sm font-semibold text-fg transition-colors duration-200 hover:border-editor/50 hover:text-editor sm:self-center"
              >
                <i class="pi pi-youtube"></i>
                {{ t('editorProjects.openChannel') }}
              </a>
            </header>

            <ul
              class="grid gap-6"
              :class="
                isShortGroup(group)
                  ? 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4'
                  : 'sm:grid-cols-2 lg:grid-cols-3'
              "
            >
              <li v-for="project in group.projects" :key="project.youtubeId">
                <editor-project-card :project="project" @play="openPlayer" />
              </li>
            </ul>
          </section>

          <!-- CTA depois do primeiro canal -->
          <div
            v-if="groupIndex === 0"
            class="mb-16 flex flex-col gap-5 rounded-2xl border border-editor/30 bg-editor/10 p-6 ring-1 ring-inset ring-editor/15 sm:flex-row sm:items-center sm:justify-between md:p-8"
          >
            <p class="text-xl font-bold text-fg text-balance md:text-2xl">
              {{ t('editorProjects.inlineCtaText') }}
            </p>
            <a
              :href="whatsappLink('general')"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 self-start rounded-full bg-editor px-6 font-bold text-obsidian transition-opacity duration-200 hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-editor sm:self-center"
            >
              <i class="pi pi-whatsapp"></i>
              {{ t('editorProjects.inlineCtaButton') }}
            </a>
          </div>
        </template>

        <div class="mt-12 text-center">
          <a
            :href="PLAYLIST_URL"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex min-h-12 items-center gap-2 rounded-full border border-white/10 px-6 text-fg-muted transition-colors duration-200 hover:border-editor/40 hover:text-fg"
          >
            {{ t('editorProjects.playlistLink') }}
            <i class="pi pi-external-link text-sm"></i>
          </a>
        </div>
      </div>
    </div>

    <editor-final-cta
      section-id="projetos-contato"
      :title="t('editorProjects.finalTitle')"
      :subtitle="t('editorProjects.finalSubtitle')"
      :cta="t('editorProjects.finalCta')"
    >
      <div class="relative mt-6">
        <router-link
          :to="localizedPath('/editor')"
          class="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-fg-muted transition-colors hover:text-fg"
        >
          <i class="pi pi-arrow-left text-xs"></i>
          {{ t('editorProjects.backToEditor') }}
        </router-link>
      </div>
    </editor-final-cta>

    <footer-contact variant="editor" :cta-text="t('footer.ctaDefault')" />

    <whats-app-floating-button />
    <video-player-modal :video="activeVideo" @close="activeVideo = null" />
  </main>
</template>
