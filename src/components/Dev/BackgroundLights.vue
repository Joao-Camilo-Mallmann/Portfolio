<script setup>
import { computed } from 'vue'

const props = defineProps({
  // A cor base da luz, recebida do componente pai.
  color: {
    type: String,
    default: '#4d91ea', // Uma cor padrão azulada
  },
})

// Métodos auxiliares (que não precisam ser reativos)
const randomBetween = (min, max) => {
  return Math.random() * (max - min) + min
}

// --- GERAÇÃO ALEATÓRIA PARA CADA LUZ ---
// Isto garante que cada instância do componente seja única.

// Posição aleatória na tela (permitindo sair um pouco das bordas)
const top = Math.random() > 0.5 ? `${randomBetween(-10, 90)}%` : undefined
const bottom = top ? undefined : `${randomBetween(-10, 90)}%`
const left = Math.random() > 0.5 ? `${randomBetween(-10, 90)}%` : undefined
const right = left ? undefined : `${randomBetween(-10, 90)}%`

// Propriedades físicas aleatórias
const width = Math.round(randomBetween(100, 350))
const height = Math.round(randomBetween(80, 200))
const blur = randomBetween(25, 70)
const opacity = randomBetween(0.2, 0.4)
// Cria uma forma orgânica e assimétrica
const borderRadius = `${randomBetween(40, 60)}% ${randomBetween(40, 60)}% ${randomBetween(50, 70)}% ${randomBetween(30, 60)}%`

/**
 * Objeto de estilo computado que aplica todas as propriedades aleatórias
 * ao elemento, mantendo o template limpo.
 */
const styleObj = computed(() => {
  return {
    // Propriedades de posicionamento e tamanho
    position: 'absolute',
    top: top,
    bottom: bottom,
    left: left,
    right: right,
    width: `${width}px`,
    height: `${height}px`,

    // Propriedades visuais
    background: `radial-gradient(ellipse at center, rgba(255, 255, 255, 0.7) 0%, ${props.color} 40%, transparent 80%)`,
    borderRadius: borderRadius,
    filter: `blur(${blur}px)`,
    opacity: opacity,
    mixBlendMode: 'screen', // Efeito de mistura de luz
    pointerEvents: 'none', // Impede que a luz intercepte cliques do mouse
    zIndex: -1000, // Garante que fique no fundo
  }
})
</script>

<template>
  <div :style="styleObj"></div>
</template>

<style scoped>
/* Ajustes para telas menores */
@media (max-width: 768px) {
  div {
    transform: scale(0.8);
  }
}
@media (max-width: 480px) {
  div {
    transform: scale(0.6);
  }
}
</style>
