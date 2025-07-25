<script>
export default {
  props: {
    // A cor base da luz, recebida do componente pai.
    color: {
      type: String,
      default: '#4d91ea', // Uma cor padrão azulada
    },
  },
  data() {
    // --- GERAÇÃO ALEATÓRIA PARA CADA LUZ ---
    // Isto garante que cada instância do componente seja única.

    // Posição aleatória na tela (permitindo sair um pouco das bordas)
    const top = Math.random() > 0.5 ? `${this.randomBetween(-10, 90)}%` : undefined
    const bottom = top ? undefined : `${this.randomBetween(-10, 90)}%`
    const left = Math.random() > 0.5 ? `${this.randomBetween(-10, 90)}%` : undefined
    const right = left ? undefined : `${this.randomBetween(-10, 90)}%`

    return {
      // Propriedades físicas e de animação aleatórias
      width: Math.round(this.randomBetween(100, 350)),
      height: Math.round(this.randomBetween(80, 200)),
      blur: this.randomBetween(25, 70),
      opacity: this.randomBetween(0.2, 0.4),
      animationName: this.randomAnimationName(),
      animationDuration: this.randomBetween(8, 15),
      driftDuration: this.randomBetween(20, 30),
      animationDelay: this.randomBetween(0, 8),
      // Cria uma forma orgânica e assimétrica
      borderRadius: `${this.randomBetween(40, 60)}% ${this.randomBetween(40, 60)}% ${this.randomBetween(50, 70)}% ${this.randomBetween(30, 60)}%`,
      top,
      bottom,
      left,
      right,
    }
  },
  computed: {
    /**
     * Objeto de estilo computado que aplica todas as propriedades aleatórias
     * ao elemento, mantendo o template limpo.
     */
    styleObj() {
      return {
        // Propriedades de posicionamento e tamanho
        position: 'absolute',
        top: this.top,
        bottom: this.bottom,
        left: this.left,
        right: this.right,
        width: `${this.width}px`,
        height: `${this.height}px`,

        // Propriedades visuais
        background: `radial-gradient(ellipse at center, rgba(255, 255, 255, 0.7) 0%, ${this.color} 40%, transparent 80%)`,
        borderRadius: this.borderRadius,
        filter: `blur(${this.blur}px)`,
        opacity: this.opacity,
        mixBlendMode: 'screen', // Efeito de mistura de luz
        pointerEvents: 'none', // Impede que a luz intercepte cliques do mouse
        zIndex: -1000, // Garante que fique no fundo

        // Animações combinadas
        animation: `
          ${this.animationName} ${this.animationDuration}s ease-in-out infinite,
          drift ${this.driftDuration}s ease-in-out infinite
        `,
        animationDelay: `${this.animationDelay}s`,
      }
    },
  },
  methods: {
    randomBetween(min, max) {
      return Math.random() * (max - min) + min
    },
    randomAnimationName() {
      const animations = ['light-glow', 'light-breathe']
      return animations[Math.floor(Math.random() * animations.length)]
    },
  },
}
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
