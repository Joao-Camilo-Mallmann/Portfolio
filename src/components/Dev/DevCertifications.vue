<script setup>
import { useI18n } from '@/composables/useI18n'
import { vendorCertifications } from '@/data/certifications'

const { t } = useI18n()

// '2026-10' -> '2026.10'
const formatDate = (date) => date.replace('-', '.')
</script>

<template>
  <div id="certifications">
    <h3 class="text-lg font-semibold flex items-center gap-3 text-dev mb-5">
      <i class="pi pi-verified text-dev"></i>
      {{ t('devCerts.title') }}
    </h3>

    <ul class="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <li v-for="cert in vendorCertifications" :key="cert.id">
        <a
          :href="cert.url"
          target="_blank"
          rel="noopener noreferrer"
          :aria-label="`${cert.title}, ${cert.issuer}. ${t('devCerts.verify')}`"
          class="group h-full flex items-center gap-4 rounded-xl border border-border ring-1 ring-inset ring-white/5 p-4 transition-colors duration-200 hover:border-dev/50 hover:bg-dev/5 focus-visible:outline-2 focus-visible:outline-dev focus-visible:outline-offset-2"
        >
          <img
            :src="cert.badge"
            :alt="`${cert.title} badge`"
            width="48"
            height="48"
            loading="lazy"
            decoding="async"
            class="w-12 h-12 shrink-0 object-contain"
          />

          <div class="min-w-0 flex-1">
            <div class="flex items-center justify-between gap-3 text-xs mb-1">
              <span class="font-medium text-dev">{{ cert.issuer }}</span>
              <span class="font-mono tabular-nums text-fg-muted">{{ formatDate(cert.date) }}</span>
            </div>

            <h4 class="text-fg font-medium text-sm leading-snug text-balance">
              {{ cert.title }}
            </h4>

            <span
              class="mt-1.5 inline-flex items-center gap-1.5 text-xs text-fg-muted group-hover:text-dev transition-colors duration-200"
            >
              <i class="pi pi-external-link text-[10px]"></i>
              {{ t('devCerts.verify') }}
            </span>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>
