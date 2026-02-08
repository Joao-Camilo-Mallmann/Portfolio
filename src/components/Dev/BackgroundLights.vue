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

const randomAnimationName = () => {
  const animations = ['light-glow', 'light-breathe']
  return animations[Math.floor(Math.random() * animations.length)]
}

// --- GERAÇÃO ALEATÓRIA PARA CADA LUZ ---
// Isto garante que cada instância do componente seja única.

// Posição aleatória na tela (permitindo sair um pouco das bordas)
const top = Math.random() > 0.5 ? `${randomBetween(-10, 90)}%` : undefined
const bottom = top ? undefined : `${randomBetween(-10, 90)}%`
const left = Math.random() > 0.5 ? `${randomBetween(-10, 90)}%` : undefined
const right = left ? undefined : `${randomBetween(-10, 90)}%`

// Propriedades físicas e de animação aleatórias
const width = Math.round(randomBetween(100, 350))
const height = Math.round(randomBetween(80, 200))
const blur = randomBetween(25, 70)
const opacity = randomBetween(0.2, 0.4)
const animationName = randomAnimationName()
const animationDuration = randomBetween(8, 15)
const driftDuration = randomBetween(20, 30)
const animationDelay = randomBetween(0, 8)
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

    // Animações combinadas
    animation: `
          ${animationName} ${animationDuration}s ease-in-out infinite,
          drift ${driftDuration}s ease-in-out infinite
        `,
    animationDelay: `${animationDelay}s`,
  }
})
</script>

<template>
  <div :style="styleObj"></div>
</template>

<style scoped>
/* Animação de pulsar, focada em opacidade e escala */
@keyframes light-glow {
  0%,
  100% {
    opacity: 0.8;
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(1.05);
  }
}

@keyframes light-breathe {
  0%,
  100% {
    opacity: 0.7;
    transform: scale(1);
  }
  50% {
    opacity: 0.9;
    transform: scale(1.08);
  }
}

/* Animação de flutuação lenta e orgânica */
@keyframes drift {
  0% {
    transform: translate(0, 0);
  }
  25% {
    transform: translate(15px, -10px);
  }
  50% {
    transform: translate(-10px, 12px);
  }
  75% {
    transform: translate(12px, 5px);
  }
  100% {
    transform: translate(0, 0);
  }
}

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
