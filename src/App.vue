<script setup>
import { useI18n } from '@/composables/useI18n'
import { onMounted, onUnmounted, ref, watch } from 'vue'
import { RouterView, useRoute, useRouter } from 'vue-router'

const { t } = useI18n()

const route = useRoute()
const router = useRouter()
const isLoading = ref(true)
let loadingTimeoutId = null

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

  loadingTimeoutId = window.setTimeout(() => {
    isLoading.value = false
  }, 1200)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)

  if (loadingTimeoutId) {
    window.clearTimeout(loadingTimeoutId)
  }
})
</script>

<template>
  <Transition name="loading-fade">
    <div v-if="isLoading" class="loading-screen">
      <div class="loading-aurora loading-aurora-dev" aria-hidden="true"></div>
      <div class="loading-aurora loading-aurora-editor" aria-hidden="true"></div>
      <div class="loading-grid" aria-hidden="true"></div>

      <div class="loading-content">
        <div class="loading-core" aria-hidden="true">
          <span class="loading-ring loading-ring-outer"></span>
          <span class="loading-ring loading-ring-inner"></span>
          <span class="loading-orbit loading-orbit-dev"></span>
          <span class="loading-orbit loading-orbit-editor"></span>

          <div class="loading-mark">
            <span class="loading-mark-glow"></span>
            <span class="loading-mark-dot"></span>
          </div>
        </div>

        <div class="loading-copy">
          <p class="loading-signature">Joao Camilo</p>
          <p class="loading-text">{{ t('loading') }}</p>

          <div class="loading-meter" aria-hidden="true">
            <span class="loading-meter-bar"></span>
            <span class="loading-meter-bar"></span>
            <span class="loading-meter-bar"></span>
          </div>
        </div>
      </div>
    </div>
  </Transition>

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

.loading-screen {
  position: fixed;
  inset: 0;
  background:
    radial-gradient(circle at top, rgb(255 255 255 / 0.03), transparent 38%),
    linear-gradient(180deg, rgb(30 30 30 / 0.96) 0%, rgb(18 18 18 / 1) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  overflow: hidden;
}

.loading-aurora {
  position: absolute;
  border-radius: 9999px;
  filter: blur(70px);
  opacity: 0.28;
  will-change: transform, opacity;
  animation: auroraFloat 7s ease-in-out infinite;
}

.loading-aurora-dev {
  width: 26rem;
  height: 26rem;
  background: color-mix(in srgb, var(--color-dev) 40%, transparent);
  top: 10%;
  left: 12%;
}

.loading-aurora-editor {
  width: 20rem;
  height: 20rem;
  background: color-mix(in srgb, var(--color-editor) 38%, transparent);
  right: 12%;
  bottom: 12%;
  animation-delay: -2.8s;
}

.loading-grid {
  position: absolute;
  inset: -20%;
  background-image:
    linear-gradient(rgb(255 255 255 / 0.028) 1px, transparent 1px),
    linear-gradient(90deg, rgb(255 255 255 / 0.028) 1px, transparent 1px);
  background-size: 3rem 3rem;
  mask-image: radial-gradient(circle at center, black 35%, transparent 82%);
  opacity: 0.42;
  transform: perspective(900px) rotateX(68deg) scale(1.45);
  transform-origin: center;
}

.loading-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  z-index: 1;
  position: relative;
}

.loading-core {
  width: 11rem;
  height: 11rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  will-change: transform;
}

.loading-ring,
.loading-orbit {
  position: absolute;
  inset: 50%;
  border-radius: 9999px;
  transform: translate(-50%, -50%);
}

.loading-ring {
  border: 1px solid rgb(255 255 255 / 0.08);
  box-shadow:
    0 0 0 1px rgb(255 255 255 / 0.02) inset,
    0 24px 60px rgb(0 0 0 / 0.28);
}

.loading-ring-outer {
  width: 11rem;
  height: 11rem;
}

.loading-ring-inner {
  width: 7.5rem;
  height: 7.5rem;
  border-color: rgb(255 255 255 / 0.12);
}

.loading-orbit {
  width: 100%;
  height: 100%;
}

.loading-orbit::before {
  content: '';
  position: absolute;
  top: -0.32rem;
  left: 50%;
  width: 0.7rem;
  height: 0.7rem;
  border-radius: 9999px;
  transform: translateX(-50%);
}

.loading-orbit-dev {
  animation: orbitSpin 4.8s linear infinite;
}

.loading-orbit-dev::before {
  background: var(--color-dev);
  box-shadow: 0 0 22px color-mix(in srgb, var(--color-dev) 68%, transparent);
}

.loading-orbit-editor {
  width: 7.5rem;
  height: 7.5rem;
  animation: orbitSpinReverse 3.6s linear infinite;
}

.loading-orbit-editor::before {
  background: var(--color-editor);
  box-shadow: 0 0 22px color-mix(in srgb, var(--color-editor) 68%, transparent);
}

.loading-mark {
  width: 4.5rem;
  height: 4.5rem;
  border-radius: 9999px;
  position: relative;
  background: linear-gradient(
    135deg,
    color-mix(in srgb, var(--color-dev) 84%, white 16%) 0%,
    var(--color-dev) 54%,
    color-mix(in srgb, var(--color-editor) 46%, var(--color-dev) 54%) 100%
  );
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow:
    0 0 0 1px rgb(255 255 255 / 0.08) inset,
    0 18px 44px color-mix(in srgb, var(--color-dev) 24%, transparent);
  animation: corePulse 2.6s ease-in-out infinite;
}

.loading-mark-glow {
  position: absolute;
  inset: -0.7rem;
  border-radius: inherit;
  background: radial-gradient(circle, rgb(255 255 255 / 0.22) 0%, transparent 68%);
  filter: blur(12px);
  animation: haloPulse 2.6s ease-in-out infinite;
}

.loading-mark-dot {
  width: 1rem;
  height: 1rem;
  border-radius: 9999px;
  background: rgb(255 255 255 / 0.96);
  box-shadow: 0 0 18px rgb(255 255 255 / 0.24);
}

.loading-copy {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.loading-signature {
  margin: 0;
  color: var(--color-fg-muted);
  font-size: 0.78rem;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  opacity: 0.78;
}

.loading-text {
  margin: 0;
  color: var(--color-fg);
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  text-wrap: balance;
}

.loading-meter {
  display: flex;
  align-items: center;
  gap: 0.35rem;
  margin-top: 0.35rem;
}

.loading-meter-bar {
  width: 0.7rem;
  height: 0.7rem;
  border-radius: 9999px;
  background: rgb(255 255 255 / 0.15);
  animation: meterPulse 1.4s ease-in-out infinite;
}

.loading-meter-bar:nth-child(2) {
  animation-delay: 0.18s;
}

.loading-meter-bar:nth-child(3) {
  animation-delay: 0.36s;
}

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

@keyframes auroraFloat {
  0%,
  100% {
    transform: translate3d(0, 0, 0) scale(1);
  }

  50% {
    transform: translate3d(0, -16px, 0) scale(1.06);
  }
}

@keyframes orbitSpin {
  from {
    transform: translate(-50%, -50%) rotate(0deg);
  }

  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}

@keyframes orbitSpinReverse {
  from {
    transform: translate(-50%, -50%) rotate(360deg);
  }

  to {
    transform: translate(-50%, -50%) rotate(0deg);
  }
}

@keyframes corePulse {
  0%,
  100% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.04);
  }
}

@keyframes haloPulse {
  0%,
  100% {
    opacity: 0.35;
    transform: scale(0.96);
  }

  50% {
    opacity: 0.7;
    transform: scale(1.08);
  }
}

@keyframes meterPulse {
  0%,
  100% {
    transform: translateY(0) scale(0.88);
    opacity: 0.32;
  }

  50% {
    transform: translateY(-2px) scale(1);
    opacity: 1;
  }
}

@media (max-width: 640px) {
  .loading-content {
    gap: 1.2rem;
  }

  .loading-core {
    width: 8.8rem;
    height: 8.8rem;
  }

  .loading-ring-inner,
  .loading-orbit-editor {
    width: 6rem;
    height: 6rem;
  }

  .loading-mark {
    width: 3.75rem;
    height: 3.75rem;
  }

  .loading-text {
    font-size: 0.92rem;
    letter-spacing: 0.12em;
  }
}
</style>
