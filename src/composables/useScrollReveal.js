/**
 * useScrollReveal — Scroll Suave (Lenis) + Parallax + Reveal
 *
 * Composable que combina três funcionalidades:
 *   1. Smooth Scroll via Lenis (interpola scroll nativo)
 *   2. Parallax (elementos movem em velocidades diferentes)
 *   3. Scroll-Reveal (IntersectionObserver revela seções ao entrar na viewport)
 *
 * @see Documentação completa: .agents/rules/scroll-e-animacoes.md
 * @see CSS correspondente: src/assets/animations.css (seção SCROLL-REVEAL)
 * @see Lenis docs: https://github.com/darkroomengineering/lenis
 */

import Lenis from 'lenis'
import { onMounted, onUnmounted, ref, shallowRef } from 'vue'

export function useScrollReveal() {
  const scrollY = ref(0)
  const lenis = shallowRef(null)
  let observer = null
  let parallaxElements = []
  let isReducedMotion = false

  // --- Parallax ---

  function updateParallax(y) {
    for (let i = 0; i < parallaxElements.length; i++) {
      const { el, speed, direction } = parallaxElements[i]
      const offset = y * speed

      if (direction === 'x') {
        el.style.transform = `translate3d(${offset}px, 0, 0)`
      } else if (direction === 'scale') {
        el.style.transform = `scale(${1 + Math.abs(offset) * 0.0005})`
      } else {
        el.style.transform = `translate3d(0, ${offset}px, 0)`
      }
    }
  }

  // --- Scroll-Reveal (IntersectionObserver) ---

  /**
   * Inicia observação de elementos com `data-scroll-reveal`.
   * Revela com classe CSS + stagger em `.scroll-reveal-child` filhos.
   * @param {HTMLElement} [rootEl] - Container raiz (default: document)
   */
  function initObserver(rootEl) {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return

          entry.target.classList.add('scroll-reveal--visible')

          const children = entry.target.querySelectorAll('.scroll-reveal-child')
          children.forEach((child, i) => {
            child.style.transitionDelay = `${i * 100}ms`
            child.classList.add('scroll-reveal-child--visible')
          })

          observer.unobserve(entry.target)
        })
      },
      {
        rootMargin: '0px 0px -60px 0px',
        threshold: 0.1,
      },
    )

    const targets = (rootEl || document).querySelectorAll('[data-scroll-reveal]')
    targets.forEach((el) => observer.observe(el))
  }

  // --- Registro de parallax ---

  /**
   * Registra elemento para parallax.
   * @param {HTMLElement|null} el
   * @param {number} [speed=0.3] - Negativo = mais lento que scroll. Recomendado: -0.3 a 0.3
   * @param {'y'|'x'|'scale'} [direction='y']
   */
  function registerParallax(el, speed = 0.3, direction = 'y') {
    if (isReducedMotion || !el) return
    parallaxElements.push({ el, speed, direction })
  }

  // --- Lifecycle ---

  onMounted(() => {
    isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (isReducedMotion) return

    // Lenis: smooth scroll engine
    // Docs: https://github.com/darkroomengineering/lenis#options
    lenis.value = new Lenis({
      lerp: 0.1, // Interpolação (0=instantâneo, 1=sem suavização)
      smoothWheel: true, // Suaviza roda do mouse
      syncTouch: false, // Mantém touch nativo em mobile
      autoRaf: true, // Gerencia próprio rAF loop
    })

    lenis.value.on('scroll', ({ scroll }) => {
      scrollY.value = scroll
      updateParallax(scroll)
    })
  })

  onUnmounted(() => {
    if (lenis.value) {
      lenis.value.destroy()
      lenis.value = null
    }
    if (observer) {
      observer.disconnect()
      observer = null
    }
    parallaxElements = []
  })

  return { scrollY, lenis, initObserver, registerParallax }
}
