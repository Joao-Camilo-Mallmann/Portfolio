<script setup>
import { useI18n } from '@/composables/useI18n'
import { computed } from 'vue'

const { t } = useI18n()

const items = computed(() => t('editorFaq.items'))
</script>

<template>
  <section
    id="duvidas"
    class="mx-auto max-w-3xl scroll-mt-32 px-4 py-24 md:px-6 md:py-32"
    aria-labelledby="faq-heading"
  >
    <header v-motion-scroll-visible class="mb-12 text-center">
      <p class="mb-4 text-xs font-semibold tracking-[0.18em] text-editor uppercase">
        {{ t('editorFaq.eyebrow') }}
      </p>
      <h2
        id="faq-heading"
        class="text-4xl font-black tracking-tight text-fg text-balance md:text-5xl"
      >
        {{ t('editorFaq.title') }}
      </h2>
    </header>

    <div class="space-y-3">
      <details
        v-for="(item, index) in items"
        :key="item.question"
        class="faq-item group rounded-2xl border border-white/5 bg-surface-100 ring-1 ring-inset ring-white/5 open:border-editor/30"
        :open="index === 0"
      >
        <summary
          class="flex min-h-16 cursor-pointer list-none items-center justify-between gap-4 px-6 py-4 font-semibold text-fg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-editor"
        >
          {{ item.question }}
          <i
            class="pi pi-chevron-down shrink-0 text-sm text-editor transition-transform duration-200 group-open:rotate-180"
          ></i>
        </summary>
        <p class="px-6 pb-6 leading-relaxed text-fg-muted text-pretty">{{ item.answer }}</p>
      </details>
    </div>
  </section>
</template>

<style scoped>
.faq-item summary::-webkit-details-marker {
  display: none;
}
</style>
