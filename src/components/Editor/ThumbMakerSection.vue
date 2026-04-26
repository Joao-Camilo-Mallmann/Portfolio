<script setup>
import { useI18n } from '@/composables/useI18n'
import { computed, ref } from 'vue'

const { t } = useI18n()

const activeThumb = ref(0)

const thumbPlaylist = [
  {
    title: 'VOCÊ tem até 2030, antes de se arrepender...',
    image: 'https://i.ytimg.com/vi/UptGuUMaYMs/maxresdefault.jpg',
    fallback: 'https://i.ytimg.com/vi/UptGuUMaYMs/hqdefault.jpg',
    url: 'https://www.youtube.com/watch?v=UptGuUMaYMs',
  },
  {
    title: 'Você Ama… Mas Talvez Na Linguagem Errada',
    image: 'https://i.ytimg.com/vi/s7bjysMoHYQ/maxresdefault.jpg',
    fallback: 'https://i.ytimg.com/vi/s7bjysMoHYQ/hqdefault.jpg',
    url: 'https://www.youtube.com/watch?v=s7bjysMoHYQ',
  },
  {
    title: 'Por que Você Já Tem TUDO para Ser Feliz',
    image: 'https://i.ytimg.com/vi/q2kZZujRofs/maxresdefault.jpg',
    fallback: 'https://i.ytimg.com/vi/q2kZZujRofs/hqdefault.jpg',
    url: 'https://www.youtube.com/watch?v=q2kZZujRofs',
  },
]

const currentThumb = computed(() => thumbPlaylist[activeThumb.value])

const thumbServices = computed(() => [
  {
    icon: 'pi-bolt',
    title: t('editorThumb.card1Title'),
    description: t('editorThumb.card1Desc'),
  },
  {
    icon: 'pi-palette',
    title: t('editorThumb.card2Title'),
    description: t('editorThumb.card2Desc'),
  },
  {
    icon: 'pi-sliders-h',
    title: t('editorThumb.card3Title'),
    description: t('editorThumb.card3Desc'),
  },
])

const nextThumb = () => {
  activeThumb.value = (activeThumb.value + 1) % thumbPlaylist.length
}

const prevThumb = () => {
  activeThumb.value = activeThumb.value === 0 ? thumbPlaylist.length - 1 : activeThumb.value - 1
}

const handleThumbError = (event, fallback) => {
  event.target.src = fallback
}
</script>

<template>
  <section
    class="relative overflow-hidden rounded-3xl border border-border bg-surface-100/35 p-7 md:p-12"
  >
    <div class="pointer-events-none absolute inset-0" aria-hidden="true">
      <div class="absolute -top-16 left-10 h-52 w-52 rounded-full bg-editor/15 blur-3xl" />
      <div class="absolute -bottom-16 right-10 h-56 w-56 rounded-full bg-dev/10 blur-3xl" />
    </div>

    <div class="relative z-10">
      <header
        v-motion
        :initial="{ opacity: 0, y: 16 }"
        :visible-once="{
          opacity: 1,
          y: 0,
          transition: { type: 'spring', stiffness: 160, damping: 15 },
        }"
        class="mx-auto mb-10 max-w-4xl text-center"
      >
        <p class="mb-2 text-xs font-semibold tracking-[0.18em] text-editor/90 uppercase">
          {{ t('editorThumb.badge') }}
        </p>
        <h2 class="text-balance text-3xl font-bold tracking-wide text-fg md:text-5xl">
          {{ t('editorThumb.title') }}
        </h2>
        <p
          class="mt-4 text-pretty text-base leading-relaxed tracking-wide text-fg-muted md:text-lg"
        >
          {{ t('editorThumb.subtitle') }}
        </p>
      </header>

      <div class="mb-10 grid grid-cols-1 gap-5 md:grid-cols-3">
        <article
          v-for="(service, index) in thumbServices"
          :key="service.title"
          v-motion
          :initial="{ opacity: 0, y: 16, scale: 0.98 }"
          :visible-once="{
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { type: 'spring', stiffness: 200, damping: 18, delay: index * 90 },
          }"
          class="group rounded-2xl border border-editor/20 bg-black/20 p-6 ring-1 ring-inset ring-white/5 transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-editor/45 hover:shadow-[0_12px_30px_-20px_var(--color-editor)]"
        >
          <div
            class="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-editor/35 bg-editor/15 text-editor"
          >
            <i :class="`pi ${service.icon}`" />
          </div>
          <h3 class="mb-2 text-xl font-semibold tracking-wide text-fg">{{ service.title }}</h3>
          <p class="text-sm leading-relaxed tracking-wide text-fg-muted">
            {{ service.description }}
          </p>
        </article>
      </div>

      <div
        v-motion
        :initial="{ opacity: 0, y: 18 }"
        :visible-once="{
          opacity: 1,
          y: 0,
          transition: { type: 'spring', stiffness: 170, damping: 16, delay: 180 },
        }"
        class="mb-8 rounded-2xl border border-editor/25 bg-black/25 p-4 md:p-6"
      >
        <div class="mb-4 flex items-end justify-between gap-4">
          <div>
            <h3 class="text-xl font-bold tracking-wide text-fg md:text-2xl">
              {{ t('editorThumb.sliderTitle') }}
            </h3>
            <p class="mt-1 text-sm tracking-wide text-fg-muted md:text-base">
              {{ t('editorThumb.sliderSubtitle') }}
            </p>
          </div>

          <div class="hidden items-center gap-2 md:flex">
            <button
              class="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface-100 text-fg-muted transition-[opacity,transform] duration-200 hover:opacity-80"
              @click="prevThumb"
            >
              <i class="pi pi-chevron-left" />
            </button>
            <button
              class="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface-100 text-fg-muted transition-[opacity,transform] duration-200 hover:opacity-80"
              @click="nextThumb"
            >
              <i class="pi pi-chevron-right" />
            </button>
          </div>
        </div>

        <div
          class="overflow-hidden rounded-2xl border border-border bg-surface-100/70 ring-1 ring-inset ring-white/5"
        >
          <transition name="thumb-fade" mode="out-in">
            <a
              :key="currentThumb.title"
              :href="currentThumb.url"
              target="_blank"
              rel="noopener noreferrer"
              class="group/thumb relative block aspect-video w-full"
              :aria-label="currentThumb.title"
            >
              <img
                :src="currentThumb.image"
                :alt="currentThumb.title"
                class="h-full w-full object-cover transition-transform duration-300 group-hover/thumb:scale-[1.02]"
                loading="lazy"
                @error="handleThumbError($event, currentThumb.fallback)"
              />
              <div
                class="absolute inset-0 bg-linear-to-t from-black/65 via-black/10 to-transparent"
              ></div>
              <div
                class="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-200 group-hover/thumb:opacity-100"
              >
                <div
                  class="flex h-14 w-14 items-center justify-center rounded-full bg-black/60 ring-2 ring-white/30 backdrop-blur-sm"
                >
                  <i class="pi pi-play text-xl text-white" />
                </div>
              </div>
              <div class="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                <p class="text-sm font-semibold tracking-wide text-white/95 md:text-base">
                  {{ currentThumb.title }}
                </p>
              </div>
            </a>
          </transition>
        </div>

        <div class="mt-4 flex items-center justify-between gap-3 md:hidden">
          <button
            class="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium tracking-wide text-fg-muted"
            @click="prevThumb"
          >
            <i class="pi pi-chevron-left" /> {{ t('editorThumb.prev') }}
          </button>
          <button
            class="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium tracking-wide text-fg-muted"
            @click="nextThumb"
          >
            {{ t('editorThumb.next') }} <i class="pi pi-chevron-right" />
          </button>
        </div>

        <div class="mt-4 flex items-center justify-center gap-2">
          <button
            v-for="(thumb, index) in thumbPlaylist"
            :key="thumb.title"
            class="transition-all duration-300"
            :class="
              index === activeThumb
                ? 'h-2.5 w-8 rounded-full bg-editor'
                : 'h-2.5 w-2.5 rounded-full bg-white/30'
            "
            @click="activeThumb = index"
          ></button>
        </div>
      </div>

      <div
        v-motion
        :initial="{ opacity: 0, y: 18 }"
        :visible-once="{
          opacity: 1,
          y: 0,
          transition: { type: 'spring', stiffness: 170, damping: 16, delay: 220 },
        }"
        class="mt-8 rounded-2xl border border-editor/30 bg-editor/10 p-5 text-center ring-1 ring-inset ring-editor/15"
      >
        <p class="text-pretty text-sm tracking-wide text-fg-muted md:text-base">
          {{ t('editorThumb.ctaHint') }}
          <span class="font-semibold text-editor">{{ t('editorThumb.ctaHighlight') }}</span>
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.thumb-fade-enter-active,
.thumb-fade-leave-active {
  transition: opacity 0.35s ease;
}

.thumb-fade-enter-from,
.thumb-fade-leave-to {
  opacity: 0;
}
</style>
