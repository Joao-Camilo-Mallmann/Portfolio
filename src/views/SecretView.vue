<script setup>
import { useHead } from '@unhead/vue'
import { onMounted, ref } from 'vue'

const terminalLines = ref([])
const showConsent = ref(false)
const showResult = ref(false)
const fakeIp = ref('')

useHead({
  title: '???',
  meta: [{ name: 'robots', content: 'noindex, nofollow' }],
  link: [
    {
      rel: 'icon',
      href: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>❓</text></svg>',
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
  let browser = 'Desconhecido'

  if (/Edg/.test(ua)) browser = 'Microsoft Edge'
  else if (/OPR|Opera/.test(ua)) browser = 'Opera'
  else if (/Chrome/.test(ua)) browser = 'Google Chrome'
  else if (/Firefox/.test(ua)) browser = 'Mozilla Firefox'
  else if (/Safari/.test(ua) && !/Chrome/.test(ua)) browser = 'Safari'

  let os = 'Desconhecido'
  if (/Windows NT 10/.test(ua)) os = 'Windows 10/11'
  else if (/Mac OS X/.test(ua)) os = 'macOS'
  else if (/Linux/.test(ua)) os = 'Linux'
  else if (/Android/.test(ua)) os = 'Android'
  else if (/iPhone|iPad/.test(ua)) os = 'iOS'

  return {
    browser,
    os,
    lang: navigator.language || 'N/A',
    tz: Intl.DateTimeFormat().resolvedOptions().timeZone || 'N/A',
    res: `${screen.width}×${screen.height}`,
    cores: navigator.hardwareConcurrency || '?',
    touch: navigator.maxTouchPoints > 0 ? 'Sim' : 'Não',
    online: navigator.onLine ? 'Online' : 'Offline',
  }
}

const typeLine = async (text, delay = 28) => {
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
    { text: 'INICIALIZANDO PROTOCOLO SIGILOSO...' },
    { text: 'ABRINDO CONSOLE RESTRITO...' },
    { text: 'ATIVANDO MÓDULO DE INVESTIGAÇÃO...' },
    { text: `[TRACE] IP detectado: ${fakeIp.value}`, cls: 'ok' },
    { text: `[TRACE] Navegador: ${d.browser}`, cls: 'ok' },
    { text: `[TRACE] Sistema: ${d.os}`, cls: 'ok' },
    { text: `[TRACE] Idioma: ${d.lang}`, cls: 'ok' },
    { text: `[TRACE] Fuso horário: ${d.tz}`, cls: 'ok' },
    { text: `[TRACE] Resolução: ${d.res}`, cls: 'ok' },
    { text: `[TRACE] Núcleos de CPU: ${d.cores}`, cls: 'warn' },
    { text: `[TRACE] Toque: ${d.touch} | Rede: ${d.online}`, cls: 'warn' },
    { text: '[SISTEMA] Preparando envio para bot externo...', cls: 'err' },
    { text: '[SISTEMA] Aguardando autorização do usuário.', cls: 'err' },
  ]

  for (const line of sequence) {
    await typeLine(line, 22)
    await new Promise((r) => setTimeout(r, 160))
  }

  await new Promise((r) => setTimeout(r, 300))
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
  <div class="scanline" aria-hidden="true" />

  <main
    class="page-transition relative isolate flex min-h-screen flex-col overflow-hidden bg-linear-to-b from-black via-zinc-950 to-black pt-8 sm:pt-10"
  >
    <section
      class="relative z-10 flex flex-1 items-start justify-center px-4 pb-8 sm:px-6 sm:pb-10"
    >
      <card
        class="w-full max-w-4xl rounded-2xl border border-violet-900/40 shadow-xl shadow-violet-950/30 backdrop-blur-md"
      >
        <template #content>
          <div class="space-y-6 p-2 sm:p-4">
            <!-- Título glitch -->
            <div class="pt-2 text-center">
              <h1
                class="glitch-wrap font-mono text-2xl font-black tracking-[0.15em] text-violet-300 sm:text-4xl"
                data-text="// ACESSO RESTRITO //"
              >
                // ACESSO RESTRITO //
              </h1>
            </div>

            <!-- Terminal -->
            <div class="rounded-xl border border-violet-900/30 bg-black/80 p-4 shadow-lg sm:p-5">
              <div
                class="mb-3 flex items-center gap-2 text-[0.7rem] tracking-[0.2em] text-violet-500/80"
              >
                <span class="h-2 w-2 animate-pulse rounded-full bg-violet-500/70"></span>
                <span>SECRET_TERMINAL — MODO INVESTIGAÇÃO</span>
              </div>

              <div
                class="max-h-80 space-y-1.5 overflow-y-auto pr-1 font-mono text-xs tabular-nums sm:text-sm"
              >
                <div
                  v-for="(line, index) in terminalLines"
                  :key="index"
                  :class="[
                    line.cls === 'ok'
                      ? 'text-emerald-400'
                      : line.cls === 'warn'
                        ? 'text-yellow-400'
                        : line.cls === 'err'
                          ? 'text-red-400'
                          : 'text-violet-300/80',
                  ]"
                >
                  <span class="mr-2 opacity-30">&gt;</span>
                  {{ line.text }}<span v-if="line.loading" class="animate-pulse">_</span>
                </div>
              </div>
            </div>

            <!-- Consent -->
            <div
              v-if="showConsent"
              class="animate-fade-in rounded-xl border border-red-500/30 bg-red-950/20 p-5 space-y-4"
            >
              <p class="font-mono text-sm text-red-400 tracking-wide">
                // TRANSMISSÃO PRESTES A OCORRER — AUTORIZA O ENVIO DOS DADOS ACIMA?
              </p>
              <div class="flex gap-3">
                <button
                  class="flex-1 rounded-lg border border-emerald-500/40 bg-emerald-950/30 py-2.5 font-mono text-xs font-bold text-emerald-400 transition hover:bg-emerald-900/40 active:scale-95"
                  @click="doAllow"
                >
                  ▶ PERMITIR ENVIO
                </button>
                <button
                  class="flex-1 rounded-lg border border-red-500/40 bg-red-950/30 py-2.5 font-mono text-xs font-bold text-red-400 transition hover:bg-red-900/40 active:scale-95"
                  @click="doDeny"
                >
                  ✕ NEGAR ACESSO
                </button>
              </div>
            </div>

            <!-- Result -->
            <div
              v-if="showResult"
              class="animate-fade-in rounded-xl border border-violet-700/30 bg-black/70 p-5 font-mono text-xs leading-8 sm:text-sm text-violet-300"
            >
              <p class="text-base font-bold mb-1">💀 FOI MAL CHEFE</p>
              <p>😂 Tanto faz se você clicou em PERMITIR ou NEGAR.</p>
              <p>🤡 Os dois botões fazem a mesma coisa.</p>
              <p>🕵️ Os dados já tinham sido "coletados" antes de você decidir.</p>
              <p>📡 Spoiler: não foi enviado nada. (será mesmo?)</p>
              <p class="mt-2 text-violet-500/50">
                // você foi zuado com sucesso. parabéns pela exploração 🫡
              </p>

              <div class="pt-5">
                <button
                  class="min-h-10 rounded-lg bg-violet-600 px-8 py-3 font-bold text-white shadow-lg shadow-violet-900/50 transition duration-300 hover:bg-violet-500 active:scale-[0.96]"
                  @click="router.push('/')"
                >
                  😭 VOLTAR À REALIDADE
                </button>
              </div>
            </div>
          </div>
        </template>
      </card>
    </section>
  </main>
</template>

<style scoped>
@keyframes glitch-1 {
  0%,
  100% {
    clip-path: inset(0 0 95% 0);
    transform: translate(-2px, 0);
  }
  25% {
    clip-path: inset(30% 0 50% 0);
    transform: translate(2px, 0);
  }
  50% {
    clip-path: inset(60% 0 20% 0);
    transform: translate(-1px, 0);
  }
  75% {
    clip-path: inset(80% 0 5% 0);
    transform: translate(1px, 0);
  }
}
@keyframes glitch-2 {
  0%,
  100% {
    clip-path: inset(50% 0 30% 0);
    transform: translate(2px, 0);
  }
  33% {
    clip-path: inset(10% 0 70% 0);
    transform: translate(-2px, 0);
  }
  66% {
    clip-path: inset(75% 0 10% 0);
    transform: translate(1px, 0);
  }
}
@keyframes scanline {
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(100vh);
  }
}

.glitch-wrap {
  position: relative;
  display: inline-block;
}
.glitch-wrap::before,
.glitch-wrap::after {
  content: attr(data-text);
  position: absolute;
  inset: 0;
  font: inherit;
  color: inherit;
}
.glitch-wrap::before {
  color: #a78bfa;
  animation: glitch-1 2.5s infinite steps(1);
}
.glitch-wrap::after {
  color: #f43f5e;
  animation: glitch-2 2.5s infinite steps(1);
  animation-delay: 0.1s;
}

.scanline {
  pointer-events: none;
  position: fixed;
  inset: 0;
  z-index: 50;
  overflow: hidden;
}
.scanline::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  height: 60px;
  background: linear-gradient(transparent, rgba(255, 255, 255, 0.03), transparent);
  animation: scanline 4s linear infinite;
}
</style>
