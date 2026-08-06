<script setup>
import { useHead } from '@unhead/vue'
import { computed, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from '@/composables/useI18n'

const router = useRouter()
const { t } = useI18n()

const terminalLines = ref([])
const showConsent = ref(false)
const showResult = ref(false)
const fakeIp = ref('')

useHead({
  title: computed(() => t('secret.seoTitle')),
  meta: [{ name: 'robots', content: 'noindex, nofollow' }],
  link: [
    {
      rel: 'icon',
      href: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>💻</text></svg>',
    },
  ],
})

const buildFakeIp = () => {
  const last = Math.floor(Math.random() * 254) + 1
  return `203.0.113.${last}`
}

const getRealData = () => {
  if (typeof navigator === 'undefined') return {}

  const ua = navigator.userAgent
  let browser = t('secret.browserDefault')

  if (/Edg/.test(ua)) browser = t('secret.browserEdge')
  else if (/OPR|Opera/.test(ua)) browser = t('secret.browserOpera')
  else if (/Chrome/.test(ua)) browser = t('secret.browserChrome')
  else if (/Firefox/.test(ua)) browser = t('secret.browserFirefox')
  else if (/Safari/.test(ua) && !/Chrome/.test(ua)) browser = t('secret.browserSafari')

  let os = t('secret.osDefault')
  if (/Windows NT 10/.test(ua)) os = t('secret.osWin')
  else if (/Mac OS X/.test(ua)) os = t('secret.osMac')
  else if (/Linux/.test(ua)) os = t('secret.osLinux')
  else if (/Android/.test(ua)) os = t('secret.osAndroid')
  else if (/iPhone|iPad/.test(ua)) os = t('secret.osIOS')

  return {
    browser,
    os,
    lang: navigator.language || 'pt-BR',
    tz: Intl.DateTimeFormat().resolvedOptions().timeZone || 'América/São_Paulo',
    res: `${screen.width}×${screen.height} px`,
    cores: `${navigator.hardwareConcurrency || 1} ${t('secret.coresUnit')}`,
    touch: navigator.maxTouchPoints > 0 ? t('secret.touchYes') : t('secret.touchNo'),
    online: navigator.onLine ? t('secret.statusOnline') : t('secret.statusOffline'),
  }
}

const typeLine = async (text, delay = 20) => {
  return new Promise((resolve) => {
    let currentText = ''
    let i = 0

    terminalLines.value.push({ text: '', loading: true, cls: '' })
    const idx = terminalLines.value.length - 1

    const interval = setInterval(() => {
      currentText += text.text[i]
      terminalLines.value[idx].text = currentText
      terminalLines.value[idx].cls = text.cls || ''
      i++

      if (i >= text.text.length) {
        clearInterval(interval)
        terminalLines.value[idx].loading = false
        resolve()
      }
    }, delay)
  })
}

onMounted(async () => {
  fakeIp.value = buildFakeIp()
  const d = getRealData()

  const sequence = [
    { text: t('secret.seqInit') },
    { text: t('secret.seqAnalysis') },
    { text: t('secret.seqHardware') },
    { text: `${t('secret.seqIp')} ${fakeIp.value}`, cls: 'ok' },
    { text: `${t('secret.seqBrowser')} ${d.browser}`, cls: 'ok' },
    { text: `${t('secret.seqOs')} ${d.os}`, cls: 'ok' },
    { text: `${t('secret.seqLang')} ${d.lang}`, cls: 'ok' },
    { text: `${t('secret.seqTz')} ${d.tz}`, cls: 'ok' },
    { text: `${t('secret.seqRes')} ${d.res}`, cls: 'ok' },
    { text: `${t('secret.seqCores')} ${d.cores}`, cls: 'warn' },
    {
      text: `${t('secret.seqTouchInput')} ${d.touch} | ${t('secret.seqStatus')} ${d.online}`,
      cls: 'warn',
    },
    { text: t('secret.seqIntegrity'), cls: 'ok' },
    { text: t('secret.seqWaitingConsent'), cls: 'warn' },
  ]

  for (const line of sequence) {
    await typeLine(line, 15)
    await new Promise((r) => setTimeout(r, 100))
  }

  await new Promise((r) => setTimeout(r, 200))
  showConsent.value = true
})

const doAllow = () => {
  showConsent.value = false
  showResult.value = true
}

const doDeny = () => {
  showConsent.value = false
  showResult.value = true
}
</script>

<template>
  <main
    class="page-transition relative isolate flex min-h-screen flex-col items-center justify-center overflow-hidden bg-black text-green-500 font-mono p-4 sm:p-8 selection:bg-green-500/30 selection:text-green-200"
  >
    <!-- Grid Background -->
    <div
      class="absolute inset-0 bg-[linear-gradient(rgba(0,255,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,0,0.03)_1px,transparent_1px)] bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)] pointer-events-none"
    ></div>

    <div
      class="relative z-10 w-full max-w-3xl border border-green-500/30 bg-black/90 p-4 sm:p-6 shadow-[0_0_20px_rgba(0,255,0,0.15)] backdrop-blur-md rounded-md"
    >
      <div
        class="mb-4 flex items-center justify-between border-b border-green-500/30 pb-2 text-xs opacity-70"
      >
        <span>{{ t('secret.promptUser') }}</span>
        <span class="animate-pulse">_</span>
      </div>

      <!-- Terminal Lines -->
      <div class="min-h-[220px] space-y-1.5 text-sm sm:text-base leading-relaxed tracking-wider">
        <div
          v-for="(line, index) in terminalLines"
          :key="index"
          :class="[
            line.cls === 'ok'
              ? 'text-green-400'
              : line.cls === 'warn'
                ? 'text-yellow-400'
                : line.cls === 'err'
                  ? 'text-red-500 font-bold'
                  : 'text-green-500/80',
          ]"
        >
          <span class="mr-2 opacity-50">$</span>
          <span>{{ line.text }}</span
          ><span
            v-if="line.loading"
            class="animate-pulse inline-block w-2 h-4 bg-green-500/80 ml-1 align-middle"
          ></span>
        </div>
      </div>

      <!-- Consent -->
      <div
        v-if="showConsent"
        class="mt-6 animate-fade-in space-y-4 border border-green-500/40 bg-green-950/20 p-4 rounded-sm"
      >
        <p class="text-green-400 font-bold tracking-wider text-xs sm:text-sm">
          {{ t('secret.consentPrompt') }}
        </p>
        <div class="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <button
            class="group relative w-full border border-green-500/50 bg-black py-2.5 text-green-400 hover:bg-green-500/20 hover:shadow-[0_0_12px_rgba(0,255,0,0.3)] transition-all active:scale-95 text-xs sm:text-sm font-semibold"
            @click="doAllow"
          >
            <span class="opacity-50 mr-1">[</span> {{ t('secret.consentYes') }}
            <span class="opacity-50 ml-1">]</span>
          </button>
          <button
            class="group relative w-full border border-green-500/30 bg-black py-2.5 text-green-500/70 hover:bg-green-500/10 transition-all active:scale-95 text-xs sm:text-sm font-semibold"
            @click="doDeny"
          >
            <span class="opacity-50 mr-1">[</span> {{ t('secret.consentNo') }}
            <span class="opacity-50 ml-1">]</span>
          </button>
        </div>
      </div>

      <!-- Result -->
      <div
        v-if="showResult"
        class="mt-6 animate-fade-in border border-green-500/30 bg-black/60 p-4 text-sm sm:text-base leading-relaxed rounded-sm space-y-3"
      >
        <p
          class="text-green-400 font-bold text-base sm:text-lg tracking-wide border-b border-green-500/20 pb-2"
        >
          {{ t('secret.resultTitle') }}
        </p>
        <p class="text-green-300">
          {{ t('secret.resultDesc1') }}
        </p>
        <p class="opacity-90 text-xs sm:text-sm">
          {{ t('secret.resultDesc2') }}
        </p>
        <p class="opacity-80 text-xs sm:text-sm">
          {{ t('secret.resultDesc3') }}
        </p>
        <p class="text-green-500/60 mt-4 text-xs italic">
          {{ t('secret.resultNote') }}
        </p>

        <div class="pt-4">
          <button
            class="group relative inline-flex items-center gap-2 border border-green-500/60 bg-green-950/40 px-5 py-2.5 text-green-400 hover:bg-green-500 hover:text-black transition-all duration-300 rounded font-bold text-xs sm:text-sm"
            @click="router.push('/')"
          >
            <span>&lt; [ RETURN_TO_SYSTEM ] {{ t('secret.btnReturn') }}</span>
          </button>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.animate-fade-in {
  animation: fadeIn 0.5s ease-out forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

::selection {
  background: rgba(0, 255, 0, 0.3);
  color: #a7f3d0;
}
</style>
