<script setup>
import { computed } from 'vue'

const props = defineProps({
  color: {
    type: String,
    required: true,
  },
})

function randomBetween(a, b) {
  return Math.random() * (b - a) + a
}

function randomPercent(min, max) {
  return `${randomBetween(min, max)}%`
}

// Scale randomizada — partículas pequenas e sutis
const randSize = Math.round(randomBetween(4, 14))
const randOpacity = randomBetween(0.15, 0.45)
const randAnimationDuration = randomBetween(6, 14)
const randAnimationDelay = randomBetween(0, 5)

// Posição aleatória
let top, bottom, left, right
if (Math.random() > 0.5) {
  top = randomPercent(0, 90)
  bottom = undefined
} else {
  bottom = randomPercent(0, 90)
  top = undefined
}
if (Math.random() > 0.5) {
  left = randomPercent(0, 90)
  right = undefined
} else {
  right = randomPercent(0, 90)
  left = undefined
}

const colorClass = computed(() => {
  const c = props.color
  if (c === 'yellow') return 'bg-yellow-400'
  if (c === 'gold') return 'bg-[#eaa64d]'
  if (c === 'blue') return 'bg-[#4d91ea]'
  if (c === 'gold-light') return 'bg-yellow-200'
  if (c === 'beige') return 'bg-[#f0b86e]'
  return c
})
</script>
<template>
  <div
    :class="['absolute rounded-full pointer-events-none dot-ambient', colorClass]"
    :style="{
      width: randSize + 'px',
      height: randSize + 'px',
      left: left,
      right: right,
      top: top,
      bottom: bottom,
      zIndex: -1000,
      opacity: randOpacity,
      animationDuration: randAnimationDuration + 's',
      animationDelay: randAnimationDelay + 's',
    }"
  ></div>
</template>
<style scoped>
/* Animação sutil de pulso — apenas opacidade para mínimo impacto visual.
   Sem transforms para evitar conflito com parallax do Lenis. */
@keyframes dot-pulse {
  0%,
  100% {
    opacity: var(--dot-min-opacity, 0.1);
  }
  50% {
    opacity: var(--dot-max-opacity, 0.4);
  }
}

.dot-ambient {
  animation: dot-pulse ease-in-out infinite;
}

/* Respeitar preferência do usuário */
@media (prefers-reduced-motion: reduce) {
  .dot-ambient {
    animation: none;
  }
}
</style>
