<script setup>
import { useI18n } from '@/composables/useI18n'
import { useWhatsApp } from '@/composables/useWhatsApp'
import { computed } from 'vue'

const props = defineProps({
  sectionId: {
    type: String,
    default: 'contato',
  },
  // Textos opcionais; sem eles, usa o CTA padrão da landing
  title: {
    type: String,
    default: '',
  },
  subtitle: {
    type: String,
    default: '',
  },
  cta: {
    type: String,
    default: '',
  },
})

const { t } = useI18n()
const { whatsappLink } = useWhatsApp()

const subtitleText = computed(() => props.subtitle || t('editorFinalCta.subtitle'))
const ctaText = computed(() => props.cta || t('editorFinalCta.cta'))
</script>

<template>
  <section
    :id="sectionId"
    class="mx-auto max-w-6xl scroll-mt-32 px-4 pb-24 md:px-6 md:pb-32"
    :aria-labelledby="`${sectionId}-heading`"
  >
    <div
      v-motion-scroll-visible
      class="cta-panel relative overflow-hidden rounded-3xl border border-white/10 bg-surface-100 px-6 py-20 text-center ring-1 ring-inset ring-white/5 md:px-12 md:py-28"
    >
      <h2
        :id="`${sectionId}-heading`"
        class="relative mx-auto max-w-3xl text-4xl font-black tracking-tight text-fg text-balance md:text-6xl"
      >
        <template v-if="title">{{ title }}</template>
        <template v-else>
          {{ t('editorFinalCta.titleStart') }}
          <span class="text-editor">{{ t('editorFinalCta.titleHighlight') }}</span
          >{{ t('editorFinalCta.titleEnd') }}
        </template>
      </h2>
      <p class="relative mx-auto mt-6 max-w-xl text-lg text-fg-muted text-pretty">
        {{ subtitleText }}
      </p>
      <a
        :href="whatsappLink('general')"
        target="_blank"
        rel="noopener noreferrer"
        class="relative mt-10 inline-flex min-h-16 items-center justify-center gap-3 rounded-full bg-editor px-10 text-lg font-bold text-obsidian shadow-xl shadow-editor/25 transition-opacity duration-200 hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-editor"
      >
        <i class="pi pi-whatsapp text-xl"></i>
        {{ ctaText }}
      </a>
      <slot />
    </div>
  </section>
</template>

<style scoped>
.cta-panel {
  background-image: radial-gradient(
    ellipse 60% 55% at 50% 0%,
    color-mix(in srgb, var(--color-editor) 18%, transparent),
    transparent 70%
  );
}
</style>
