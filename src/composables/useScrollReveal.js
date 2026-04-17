/**
 * useScrollReveal — Scroll Suave (Lenis)
 *
 * Agora gerencia apenas o Smooth Scroll.
 * As animações e reveals estão a cargo do @vueuse/motion.
 */

import Lenis from 'lenis'
import { onMounted, onUnmounted, ref, shallowRef } from 'vue'

export function useScrollReveal() {
  const scrollY = ref(0)
  const lenis = shallowRef(null)
  let isReducedMotion = false

  // --- Lifecycle ---

  onMounted(() => {
    isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (isReducedMotion) return

    // Lenis: smooth scroll engine
    lenis.value = new Lenis({
      lerp: 0.1, // Interpolação (0=instantâneo, 1=sem suavização)
      smoothWheel: true, // Suaviza roda do mouse
      syncTouch: false, // Mantém touch nativo em mobile
      autoRaf: true, // Gerencia próprio rAF loop
    })

    lenis.value.on('scroll', ({ scroll }) => {
      scrollY.value = scroll
    })
  })

  onUnmounted(() => {
    if (lenis.value) {
      lenis.value.destroy()
      lenis.value = null
    }
  })

  return { scrollY, lenis }
}
