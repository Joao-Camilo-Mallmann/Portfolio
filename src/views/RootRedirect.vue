<script setup>
import { getDefaultLocale } from '@/composables/useI18n'
import { useHead } from '@unhead/vue'
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

useHead({
  title: 'João Camilo Mallmann',
  meta: [
    { 'http-equiv': 'refresh', content: '0; url=/en-us/' },
    { name: 'robots', content: 'noindex, follow' },
  ],
  script: [
    {
      innerHTML: `
        (function() {
          try {
            var saved = localStorage.getItem('portfolio-locale');
            var lang = 'en-us';
            if (saved === 'pt-br' || saved === 'pt-BR') {
              lang = 'pt-br';
            } else if (saved === 'en-us' || saved === 'en') {
              lang = 'en-us';
            } else if ((navigator.language || navigator.userLanguage || '').toLowerCase().indexOf('pt') === 0) {
              lang = 'pt-br';
            }
            window.location.replace('/' + lang + '/');
          } catch (e) {
            window.location.replace('/en-us/');
          }
        })();
      `,
    },
  ],
})

onMounted(() => {
  const targetLocale = getDefaultLocale()
  router.replace(`/${targetLocale}/`)
})
</script>

<template>
  <div
    class="min-h-screen bg-black flex items-center justify-center text-white/40 text-sm font-mono"
  >
    Redirecting...
  </div>
</template>
