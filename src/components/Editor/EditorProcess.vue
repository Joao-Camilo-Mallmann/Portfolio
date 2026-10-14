<script setup>
import { useI18n } from '@/composables/useI18n'
import { computed } from 'vue'

const { t } = useI18n()

const steps = computed(() => t('editorProcess.steps'))
</script>

<template>
  <section
    id="processo"
    class="mx-auto max-w-6xl scroll-mt-32 border-t border-white/5 px-4 py-24 md:px-6 md:py-32"
    aria-labelledby="process-heading"
  >
    <header v-motion-scroll-visible class="mx-auto mb-14 max-w-2xl text-center">
      <p class="mb-4 text-xs font-semibold tracking-[0.18em] text-editor uppercase">
        {{ t('editorProcess.eyebrow') }}
      </p>
      <h2
        id="process-heading"
        class="text-4xl font-black tracking-tight text-fg text-balance md:text-6xl"
      >
        {{ t('editorProcess.title') }}
      </h2>
      <p class="mt-5 text-lg text-fg-muted text-pretty">{{ t('editorProcess.subtitle') }}</p>
    </header>

    <ol class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <li
        v-for="(step, index) in steps"
        :key="step.title"
        class="relative overflow-hidden rounded-2xl border border-white/5 bg-surface-100 p-6 ring-1 ring-inset ring-white/5 md:p-7"
      >
        <span
          class="pointer-events-none absolute top-4 right-5 font-mono text-5xl font-bold text-editor/20 tabular-nums"
          aria-hidden="true"
        >
          {{ String(index + 1).padStart(2, '0') }}
        </span>
        <h3 class="relative mb-3 pr-12 text-lg font-bold text-fg">{{ step.title }}</h3>
        <p class="relative leading-relaxed text-fg-muted text-pretty">{{ step.description }}</p>
      </li>
    </ol>
  </section>
</template>
