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
    :class="['absolute rounded-full pointer-events-none', colorClass]"
    :style="{
      width: randSize + 'px',
      height: randSize + 'px',
      left: left,
      right: right,
      top: top,
      bottom: bottom,
      zIndex: -1000,
      opacity: randOpacity,
    }"
  ></div>
</template>
<style scoped>
/* Respeitar preferência do usuário */
@media (prefers-reduced-motion: reduce) {
}
</style>
