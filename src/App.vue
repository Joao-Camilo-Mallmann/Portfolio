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
    if (newValue) {
      document.body.classList.add('no-scroll')
    } else {
      document.body.classList.remove('no-scroll')
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
      <!-- Animated background elements -->
      <div class="loading-bg-circle circle-1"></div>
      <div class="loading-bg-circle circle-2"></div>
      <div class="loading-bg-circle circle-3"></div>

      <div class="loading-content">
        <!-- Animated dots loader -->
        <div class="loading-dots">
          <span class="dot dot-1"></span>
          <span class="dot dot-2"></span>
          <span class="dot dot-3"></span>
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

/* Animated background circles */
.loading-bg-circle {
  position: absolute;
  border-radius: 50%;
  opacity: 0.1;
  animation: float 6s ease-in-out infinite;
}

.circle-1 {
  width: 300px;
  height: 300px;
  background: linear-gradient(45deg, #4d91ea, #eaa64d);
  top: -100px;
  left: -100px;
  animation-delay: 0s;
}

.circle-2 {
  width: 200px;
  height: 200px;
  background: linear-gradient(45deg, #eaa64d, #4d91ea);
  bottom: -50px;
  right: -50px;
  animation-delay: 2s;
}

.circle-3 {
  width: 150px;
  height: 150px;
  background: linear-gradient(45deg, #4d91ea, #22c55e);
  top: 50%;
  right: 10%;
  animation-delay: 4s;
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0) scale(1);
  }
  50% {
    transform: translateY(-20px) scale(1.05);
  }
}

.loading-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  z-index: 1;
}

/* Logo with pulse animation */
.loading-logo {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: linear-gradient(135deg, #4d91ea 0%, #1e40af 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  animation: pulse-glow 2s ease-in-out infinite;
  box-shadow: 0 0 30px rgba(77, 145, 234, 0.4);
}

.logo-icon {
  font-size: 1.75rem;
  font-weight: 700;
  color: white;
  letter-spacing: -0.05em;
}

@keyframes pulse-glow {
  0%,
  100% {
    transform: scale(1);
    box-shadow: 0 0 30px rgba(77, 145, 234, 0.4);
  }
  50% {
    transform: scale(1.05);
    box-shadow: 0 0 50px rgba(77, 145, 234, 0.6);
  }
}

/* Animated dots */
.loading-dots {
  display: flex;
  gap: 0.5rem;
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: linear-gradient(135deg, #4d91ea, #eaa64d);
  animation: bounce 1.4s ease-in-out infinite;
}

.dot-1 {
  animation-delay: 0s;
}

.dot-2 {
  animation-delay: 0.2s;
}

.dot-3 {
  animation-delay: 0.4s;
}

@keyframes bounce {
  0%,
  80%,
  100% {
    transform: scale(0.6);
    opacity: 0.5;
  }
  40% {
    transform: scale(1);
    opacity: 1;
  }
}

.loading-text {
  color: #94a3b8;
  font-size: 0.875rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  animation: fade-pulse 2s ease-in-out infinite;
}

@keyframes fade-pulse {
  0%,
  100% {
    opacity: 0.6;
  }
  50% {
    opacity: 1;
  }
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
