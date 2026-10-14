<script setup>
import { useI18n } from '@/composables/useI18n'
import { useWhatsApp } from '@/composables/useWhatsApp'

const { t } = useI18n()
const { whatsappLink } = useWhatsApp()
</script>

<template>
  <a
    :href="whatsappLink('general')"
    target="_blank"
    rel="noopener noreferrer"
    class="fixed right-4 bottom-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-editor text-obsidian shadow-xl shadow-black/50 ring-1 ring-inset ring-white/20 transition-transform duration-200 hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-editor md:right-6 md:bottom-6 md:h-16 md:w-16"
    :aria-label="t('editorWhatsapp.floatingLabel')"
    :title="t('editorWhatsapp.floatingLabel')"
  >
    <i class="pi pi-whatsapp text-2xl md:text-3xl"></i>
  </a>
</template>
