<script setup>
import { useI18n } from '@/composables/useI18n'
import { splitImages } from '@/data/homeSplit'
import { onBeforeUnmount, ref } from 'vue'

const { t, localizedPath } = useI18n()

const EMAIL = 'jcamilomallmann@hotmail.com'

// O split volta aqui como chamada para ação: cada lado leva para a sub-página correspondente
// No hover, uma imagem do trabalho se abre em círculo a partir da seta e um ícone gigante entra girando
const routes = [
  {
    key: 'dev',
    path: '/dev',
    bgClass: 'bg-dev',
    image: splitImages.dev,
    icon: 'pi-code',
    iconClass: 'group-hover:rotate-0 rotate-45 translate-y-10',
    tintClass: 'from-dev/90 via-obsidian/70',
  },
  {
    key: 'editor',
    path: '/editor',
    bgClass: 'bg-editor',
    image: splitImages.editor,
    icon: 'pi-play-circle',
    iconClass: 'group-hover:rotate-0 -rotate-180 scale-50 group-hover:scale-100',
    tintClass: 'from-editor/90 via-obsidian/70',
  },
]

const hoveredRoute = ref(null)
const copied = ref(false)
let copiedTimer = null

const copyEmail = async () => {
  try {
    await navigator.clipboard.writeText(EMAIL)
  } catch {
    window.location.href = `mailto:${EMAIL}`
    return
  }
  copied.value = true
  clearTimeout(copiedTimer)
  copiedTimer = setTimeout(() => {
    copied.value = false
  }, 2000)
}

onBeforeUnmount(() => clearTimeout(copiedTimer))
</script>

<template>
  <section
    id="contato"
    class="relative mx-auto max-w-6xl scroll-mt-28 px-4 pt-24 md:px-6 md:pt-32"
    aria-labelledby="home-contact-heading"
  >
    <div class="mb-6 flex flex-wrap items-end justify-between gap-x-10 gap-y-4 md:mb-7">
      <h2
        id="home-contact-heading"
        v-motion
        :initial="{ opacity: 0, x: -40 }"
        :visible-once="{
          opacity: 1,
          x: 0,
          transition: { type: 'spring', stiffness: 150, damping: 15 },
        }"
        class="max-w-2xl font-display text-[2.375rem] leading-none tracking-tight text-fg text-balance md:text-[3.5rem] font-medium"
      >
        {{ t('home.contact.title') }}
      </h2>
      <button
        type="button"
        class="inline-flex min-h-12 w-full cursor-pointer items-center justify-center gap-2.5 rounded-full border border-white/15 px-5 text-sm text-fg transition-[border-color,background-color,transform] duration-200 hover:border-white/30 hover:bg-white/5 active:scale-[0.96] md:w-auto md:text-[15px]"
        @click="copyEmail"
      >
        <i class="pi" :class="copied ? 'pi-check text-dev' : 'pi-copy'" aria-hidden="true"></i>
        <span aria-live="polite">
          <template v-if="copied">{{ t('home.contact.copied') }}</template>
          <template v-else>
            <span class="md:hidden">{{ t('home.contact.copyEmail') }}</span>
            <span class="hidden md:inline">{{ EMAIL }}</span>
          </template>
        </span>
      </button>
    </div>

    <div class="flex flex-col gap-3 md:h-[280px] md:flex-row">
      <router-link
        v-for="(route, index) in routes"
        :key="route.key"
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visible-once="{
          opacity: 1,
          y: 0,
          transition: { type: 'spring', stiffness: 160, damping: 16, delay: index * 100 },
        }"
        :to="localizedPath(route.path)"
        class="group relative isolate flex min-w-0 flex-col justify-between gap-7 overflow-hidden rounded-[20px] p-5 text-obsidian transition-[flex-grow,color] duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] hover:text-white focus-visible:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white md:flex-1 md:rounded-3xl md:p-8"
        :class="[route.bgClass, hoveredRoute === route.key ? 'md:grow-[1.5]' : '']"
        @mouseenter="hoveredRoute = route.key"
        @mouseleave="hoveredRoute = null"
      >
        <!-- Imagem que se abre em círculo a partir da seta -->
        <span
          class="reveal absolute inset-0 -z-10 bg-cover bg-center"
          :style="{ backgroundImage: `url('${route.image}')` }"
          aria-hidden="true"
        >
          <span
            class="absolute inset-0 bg-linear-to-tr to-black/40"
            :class="route.tintClass"
          ></span>
        </span>

        <!-- Ícone gigante que entra girando -->
        <i
          class="pi pointer-events-none absolute -right-6 -bottom-10 -z-10 text-[11rem] text-white/15 opacity-0 transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0 group-hover:opacity-100 md:text-[14rem]"
          :class="[route.icon, route.iconClass]"
          aria-hidden="true"
        ></i>

        <span class="flex items-center justify-between text-sm font-semibold md:text-[15px]">
          {{ t(`home.contact.${route.key}.label`) }}
          <i
            class="pi pi-arrow-up-right text-xl transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:rotate-45 md:text-2xl"
            aria-hidden="true"
          ></i>
        </span>
        <span class="flex flex-col gap-3">
          <span
            class="max-w-[14ch] font-display text-[1.875rem] leading-none font-medium tracking-tight transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-1 md:text-[2.5rem]"
          >
            {{ t(`home.contact.${route.key}.title`) }}
          </span>
          <span
            class="inline-flex items-center gap-2 self-start rounded-full py-1.5 text-sm font-semibold transition-[background-color,color,padding] duration-300 group-hover:bg-white group-hover:px-4 group-hover:text-obsidian md:text-[15px]"
          >
            {{ t(`home.contact.${route.key}.action`) }}
            <i class="pi pi-arrow-right text-xs" aria-hidden="true"></i>
          </span>
        </span>
      </router-link>
    </div>
  </section>
</template>

<style scoped>
/* Revelação circular saindo do canto da seta */
.reveal {
  clip-path: circle(0% at 92% 12%);
  transition: clip-path 0.7s cubic-bezier(0.65, 0, 0.35, 1);
}

.group:hover .reveal,
.group:focus-visible .reveal {
  clip-path: circle(150% at 92% 12%);
}

@media (prefers-reduced-motion: reduce) {
  .reveal {
    transition: none;
  }
}
</style>
