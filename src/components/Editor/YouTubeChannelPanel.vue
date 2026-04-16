<script setup>
import { useI18n } from '@/composables/useI18n'
import { ref } from 'vue'

const { t } = useI18n()

const youtubeJCLink = ref(
  'https://yt3.ggpht.com/VhJNJwOB8d4NY-XaUtpjcQwHMqlT_DAO7eTc1g0mmaKVt9Jj0bGQv1G02Hp3R6NwkATWXT97Rg=s600-c-k-c0x00ffffff-no-rj-rp-mo',
)
</script>

<template>
  <div class="bg-transparent border-0 shadow-none mb-6 mt-6">
    <div class="w-full flex justify-center mb-4">
      <h2 class="text-2xl font-bold text-editor text-balance">
        {{ t('editorChannel.officialChannel') }}
      </h2>
    </div>
    <div class="flex flex-col items-center justify-center gap-6 px-2">
      <div class="relative group">
        <span class="absolute inset-0 rounded-full border-4 border-editor opacity-70"></span>
        <span class="absolute -inset-2 rounded-full border-2 border-editor/30 opacity-50"></span>
        <img
          :src="youtubeJCLink"
          :alt="t('editorChannel.channelAlt')"
          class="w-32 h-32 md:w-50 md:h-50 rounded-full border-4 border-editor shadow-2xl relative z-10 bg-white group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <a
        href="https://www.youtube.com/@J.C-12"
        target="_blank"
        rel="noopener"
        class="inline-flex items-center gap-3 px-8 py-4 md:px-12 md:py-5 rounded-full bg-linear-to-r from-editor to-editor/80 text-white font-extrabold text-lg md:text-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-editor/50 cursor-pointer"
      >
        <i class="pi pi-youtube"></i>
        {{ t('editorChannel.ctaButton') }}
      </a>
    </div>
  </div>
</template>
