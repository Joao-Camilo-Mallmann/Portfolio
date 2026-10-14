<script setup>
import EditorProjectCard from '@/components/Editor/EditorProjectCard.vue'
import { useI18n } from '@/composables/useI18n'
import { channels, projectsByChannel, showcaseChannels } from '@/data/editorProjects'
import { computed, ref } from 'vue'

const emit = defineEmits(['play'])

const { t, localizedPath } = useI18n()

const MAX_VIDEOS = 3

const activeKey = ref(showcaseChannels[0].key)
const tabRefs = ref([])

const activeChannel = computed(() => channels[activeKey.value])
// Vídeos em destaque já aparecem na faixa de cortes: aqui eles vão para o fim da fila
const activeProjects = computed(() =>
  [...projectsByChannel(activeKey.value)]
    .sort((a, b) => Number(Boolean(a.featured)) - Number(Boolean(b.featured)))
    .slice(0, MAX_VIDEOS),
)
const isShortChannel = computed(() => activeProjects.value.every((p) => p.format === 'short'))
const roles = computed(() => t(`editorChannels.items.${activeKey.value}.roles`))

// Setas do teclado alternam entre as abas (padrão WAI-ARIA)
const onTabKeydown = (event, index) => {
  if (!['ArrowLeft', 'ArrowRight'].includes(event.key)) return
  event.preventDefault()
  const step = event.key === 'ArrowRight' ? 1 : -1
  const next = (index + step + showcaseChannels.length) % showcaseChannels.length
  activeKey.value = showcaseChannels[next].key
  tabRefs.value[next]?.focus()
}
</script>

<template>
  <section
    id="canais"
    class="mx-auto max-w-6xl scroll-mt-32 border-t border-white/5 px-4 py-24 md:px-6 md:py-32"
    aria-labelledby="channels-heading"
  >
    <header v-motion-scroll-visible class="mb-10 max-w-3xl">
      <p class="mb-4 text-xs font-semibold tracking-[0.18em] text-editor uppercase">
        {{ t('editorChannels.eyebrow') }}
      </p>
      <h2
        id="channels-heading"
        class="text-4xl font-black tracking-tight text-fg text-balance md:text-6xl"
      >
        {{ t('editorChannels.titleStart') }}
        <span class="text-editor">{{ t('editorChannels.titleHighlight') }}</span
        >{{ t('editorChannels.titleEnd') }}
      </h2>
      <p class="mt-5 text-lg leading-relaxed text-fg-muted text-pretty">
        {{ t('editorChannels.subtitle') }}
      </p>
    </header>

    <!-- Abas dos canais -->
    <div
      role="tablist"
      :aria-label="t('editorChannels.tabsLabel')"
      class="mb-8 flex flex-wrap gap-3"
    >
      <button
        v-for="(channel, index) in showcaseChannels"
        :id="`channel-tab-${channel.key}`"
        :key="channel.key"
        :ref="(el) => (tabRefs[index] = el)"
        type="button"
        role="tab"
        :aria-selected="activeKey === channel.key"
        :aria-controls="`channel-panel-${channel.key}`"
        :tabindex="activeKey === channel.key ? 0 : -1"
        class="flex min-h-14 cursor-pointer items-center gap-3 rounded-full border py-2 pr-6 pl-2 text-left transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-editor"
        :class="
          activeKey === channel.key
            ? 'border-editor/60 bg-editor/15 text-fg'
            : 'border-white/10 bg-surface-100 text-fg-muted hover:border-white/25 hover:text-fg'
        "
        @click="activeKey = channel.key"
        @keydown="onTabKeydown($event, index)"
      >
        <img
          :src="channel.avatar"
          :alt="''"
          class="h-10 w-10 rounded-full border-2 bg-white object-cover"
          :class="activeKey === channel.key ? 'border-editor' : 'border-white/10'"
        />
        <span>
          <span class="block font-bold">{{ channel.name }}</span>
          <span class="block font-mono text-xs text-fg-muted">{{ channel.handle }}</span>
        </span>
      </button>
    </div>

    <!-- Painel do canal ativo -->
    <div
      :id="`channel-panel-${activeChannel.key}`"
      role="tabpanel"
      :aria-labelledby="`channel-tab-${activeChannel.key}`"
      class="grid gap-8 rounded-3xl border border-white/5 bg-surface-100/60 p-5 ring-1 ring-inset ring-white/5 md:p-8 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)]"
    >
      <div class="flex flex-col">
        <div class="flex items-center gap-4">
          <img
            :src="activeChannel.avatar"
            :alt="activeChannel.name"
            class="h-20 w-20 rounded-full border-2 border-editor bg-white object-cover"
          />
          <div>
            <h3 class="text-2xl font-black text-fg">{{ activeChannel.name }}</h3>
            <p class="font-mono text-sm text-editor">{{ activeChannel.handle }}</p>
            <p class="mt-1 text-xs font-semibold text-fg-muted">
              {{
                activeChannel.own ? t('editorChannels.ownLabel') : t('editorChannels.partnerLabel')
              }}
            </p>
          </div>
        </div>

        <p class="mt-6 leading-relaxed text-fg-muted text-pretty">
          {{ t(`editorChannels.items.${activeChannel.key}.description`) }}
        </p>

        <p class="mt-6 mb-3 font-mono text-xs tracking-wider text-fg-muted uppercase">
          {{ t('editorChannels.rolesLabel') }}
        </p>
        <ul class="flex flex-wrap gap-2">
          <li
            v-for="role in roles"
            :key="role"
            class="rounded-full border border-editor/25 bg-editor/10 px-3 py-1.5 text-sm text-fg"
          >
            {{ role }}
          </li>
        </ul>

        <div class="mt-8 flex flex-col gap-3 lg:mt-auto lg:pt-8">
          <router-link
            :to="{ path: localizedPath('/editor/projetos'), query: { canal: activeChannel.key } }"
            class="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-editor px-6 font-bold text-obsidian transition-opacity duration-200 hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-editor"
          >
            {{ t('editorChannels.seeAll') }}
            <i class="pi pi-arrow-right text-sm"></i>
          </router-link>
          <a
            :href="activeChannel.url"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/15 px-6 font-semibold text-fg transition-colors duration-200 hover:border-editor/50 hover:text-editor"
          >
            <i class="pi pi-youtube"></i>
            {{ t('editorChannels.seeChannel') }}
          </a>
        </div>
      </div>

      <ul
        class="grid gap-4"
        :class="isShortChannel ? 'grid-cols-2 sm:grid-cols-3' : 'sm:grid-cols-2'"
      >
        <!-- Vídeos longos: o primeiro ocupa a linha inteira -->
        <li
          v-for="(project, index) in activeProjects"
          :key="project.youtubeId"
          :class="!isShortChannel && index === 0 ? 'sm:col-span-2' : ''"
        >
          <editor-project-card :project="project" @play="emit('play', $event)" />
        </li>
      </ul>
    </div>
  </section>
</template>
