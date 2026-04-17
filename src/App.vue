<script setup>
import { useI18n } from '@/composables/useI18n'
import { onMounted, onUnmounted, ref, watch } from 'vue'
import { RouterView, useRoute, useRouter } from 'vue-router'

const { t } = useI18n()

const route = useRoute()
const router = useRouter()
const isLoading = ref(true)

// Konami Code Logic
const konamiCode = [
  'ArrowUp',
  'ArrowUp',
  'ArrowDown',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  'ArrowLeft',
  'ArrowRight',
  'b',
  'a',
]
let konamiIndex = 0

const handleKeydown = (e) => {
  if (e.key === konamiCode[konamiIndex]) {
    konamiIndex++
    if (konamiIndex === konamiCode.length) {
      router.push('/secret')
      konamiIndex = 0
    }
  } else {
    konamiIndex = 0
  }
}

// Desativa o scroll quando loading está ativo
watch(
  isLoading,
  (newValue) => {
    if (typeof document !== 'undefined') {
      if (newValue) {
        document.body.classList.add('no-scroll')
      } else {
        document.body.classList.remove('no-scroll')
      }
    }
  },
  { immediate: true },
)

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
  // Aguarda um pequeno delay para garantir que tudo carregou
  setTimeout(() => {
    isLoading.value = false
  }, 1200)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
})
</script>

<template>
  <!-- Loading Screen -->
  <Transition name="loading-fade">
    <div v-if="isLoading" class="loading-screen">
      <div class="loading-content">
        <div class="loading-mark">
          <span class="loading-mark-dot"></span>
        </div>

        <p class="loading-text">{{ t('loading') }}</p>
      </div>
    </div>
  </Transition>

  <!-- Main Content -->
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component" :key="route.fullPath" />
    </transition>
  </router-view>
</template>

<style>
/* Desativa scroll quando loading está ativo */
body.no-scroll {
  overflow: hidden;
  position: fixed;
  width: 100%;
  height: 100%;
}

/* Loading Screen Styles */
.loading-screen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #1c1b22 0%, #2a2930 50%, #1c1b22 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  overflow: hidden;
}

.loading-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  z-index: 1;
}

.loading-mark {
  width: 72px;
  height: 72px;
  border-radius: 9999px;
  background: linear-gradient(135deg, #4d91ea 0%, #1e40af 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 30px rgba(77, 145, 234, 0.4);
}

.loading-mark-dot {
  width: 18px;
  height: 18px;
  border-radius: 9999px;
  background: rgba(255, 255, 255, 0.95);
}

.loading-text {
  color: #94a3b8;
  font-size: 0.875rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

/* Loading Fade Transition - smoother */
.loading-fade-enter-active {
  transition: opacity 0.3s ease;
}

.loading-fade-leave-active {
  transition: opacity 0.8s ease-out;
}

.loading-fade-enter-from,
.loading-fade-leave-to {
  opacity: 0;
}

/* Page Fade Transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
</style>
