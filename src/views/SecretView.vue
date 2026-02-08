<script setup>
import BackgroundLights from '@/components/Dev/BackgroundLights.vue'
import FooterContact from '@/components/FooterContact.vue'
import HeaderCore from '@/components/HeaderCore.vue'
import { useHead } from '@unhead/vue'
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const terminalLines = ref([])
const showContent = ref(false)

const bootSequence = [
  'INITIALIZING SECRET PROTOCOL...',
  'ACCESSING RESTRICTED MEMORY...',
  'BYPASSING FIREWALL...',
  'DECRYPTING HIDDEN DATA...',
  'ACCESS GRANTED.',
]

useHead({
  title: '???',
  meta: [{ name: 'robots', content: 'noindex, nofollow' }],
})

const typeLine = async (text, delay = 50) => {
  return new Promise((resolve) => {
    let currentText = ''
    let i = 0
    const interval = setInterval(() => {
      currentText += text[i]
      if (
        terminalLines.value.length > 0 &&
        terminalLines.value[terminalLines.value.length - 1].loading
      ) {
        terminalLines.value[terminalLines.value.length - 1].text = currentText
      } else {
        terminalLines.value.push({ text: currentText, loading: true })
      }
      i++
      if (i >= text.length) {
        clearInterval(interval)
        terminalLines.value[terminalLines.value.length - 1].loading = false
        resolve()
      }
    }, delay)
  })
}

onMounted(async () => {
  for (const line of bootSequence) {
    terminalLines.value.push({ text: '', loading: true })
    await typeLine(line, 30)
    await new Promise((r) => setTimeout(r, 300))
  }
  setTimeout(() => {
    showContent.value = true
  }, 500)
})
</script>

<template>
  <main
    class="page-transition bg-linear-to-b! from-black/90 to-[#22c55e]/10! relative overflow-hidden min-h-screen flex flex-col"
  >
    <template v-for="i in 20" :key="i">
      <BackgroundLights color="#22c55e" />
    </template>

    <HeaderCore />

    <div class="grow flex items-center justify-center relative z-10 px-4">
      <div
        class="max-w-3xl w-full bg-black/80 border border-[#22c55e]/30 rounded-lg p-8 shadow-[0_0_50px_rgba(34,197,94,0.2)] backdrop-blur-sm"
      >
        <!-- Terminal Output -->
        <div class="font-mono text-sm md:text-base mb-8 space-y-2">
          <div v-for="(line, index) in terminalLines" :key="index" class="text-[#22c55e]">
            <span class="opacity-50 mr-2">></span>
            {{ line.text }}<span v-if="line.loading" class="animate-pulse">_</span>
          </div>
        </div>

        <!-- Secret Content -->
        <Transition name="fade">
          <div v-if="showContent" class="text-center space-y-8">
            <h1
              class="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-linear-to-r from-[#22c55e] to-dev"
            >
              EASTER EGG FOUND!
            </h1>

            <p class="text-gray-300 text-lg">
              Você encontrou a área secreta. Aqui é onde eu escondo... absolutamente nada (por
              enquanto). Mas hey, você é curioso, eu gosto disso.
            </p>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
              <div
                class="p-4 bg-[#22c55e]/10 rounded border border-[#22c55e]/20 hover:bg-[#22c55e]/20 transition-all cursor-crosshair group"
              >
                <h3
                  class="text-[#22c55e] font-bold mb-2 group-hover:scale-105 transition-transform"
                >
                  01. CURIOSIDADE
                </h3>
                <p class="text-sm text-gray-400">
                  A curiosidade é a base de todo grande desenvolvedor.
                </p>
              </div>
              <div
                class="p-4 bg-[#22c55e]/10 rounded border border-[#22c55e]/20 hover:bg-[#22c55e]/20 transition-all cursor-crosshair group"
              >
                <h3
                  class="text-[#22c55e] font-bold mb-2 group-hover:scale-105 transition-transform"
                >
                  02. PERSISTÊNCIA
                </h3>
                <p class="text-sm text-gray-400">
                  Não existe código sem bug, existe bug não descoberto.
                </p>
              </div>
            </div>

            <div class="pt-8">
              <button
                @click="router.push('/')"
                class="px-8 py-3 bg-[#22c55e] text-black font-bold rounded hover:bg-[#16a34a] transition-colors shadow-[0_0_20px_rgba(34,197,94,0.4)] hover:shadow-[0_0_30px_rgba(34,197,94,0.6)]"
              >
                VOLTAR À REALIDADE
              </button>
            </div>
          </div>
        </Transition>
      </div>
    </div>

    <footer class="mt-auto">
      <FooterContact
        primary-color="#22c55e"
        cta-text="Segredo mantido?"
        status-text="Sistema Seguro"
      />
    </footer>
  </main>
</template>

<style scoped>
.page-transition {
  animation: fadeIn 0.5s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.8s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
