<script>
function randomBetween(a, b) {
  return Math.random() * (b - a) + a
}

function randomPercent(min, max) {
  return `${randomBetween(min, max)}%`
}

function randomAnimation() {
  const animations = ['glow', 'pulse', 'flicker', 'breathe', 'twinkle']
  return animations[Math.floor(Math.random() * animations.length)]
}

function randomBlur() {
  return randomBetween(10, 30)
}

function randomOpacity() {
  return randomBetween(0.1, 0.4)
}

export default {
  name: 'BackgroundLights',
  props: {
    count: {
      type: Number,
      default: 8,
    },
    colors: {
      type: Array,
      default: () => ['#4d91ea', '#6ba3f0', '#3876d9', '#5a9bef', '#2d5aa8', '#7db5f5'],
    },
  },
  data() {
    return {
      lights: [],
    }
  },
  mounted() {
    this.generateLights()
  },
  methods: {
    generateLights() {
      this.lights = []
      for (let i = 0; i < this.count; i++) {
        const light = {
          id: i,
          size: Math.round(randomBetween(100, 300)),
          color: this.colors[Math.floor(Math.random() * this.colors.length)],
          animation: randomAnimation(),
          blur: randomBlur(),
          opacity: randomOpacity(),
          animationDelay: randomBetween(0, 5),
          animationDuration: randomBetween(3, 8),
          // Posicionamento totalmente aleatório em qualquer lugar da tela
          top: randomPercent(0, 100),
          left: randomPercent(0, 100),
        }

        this.lights.push(light)
      }
    },

    getLightStyle(light) {
      return {
        width: light.size + 'px',
        height: light.size + 'px',
        backgroundColor: light.color,
        filter: `blur(${light.blur}px)`,
        opacity: light.opacity,
        animationDelay: light.animationDelay + 's',
        animationDuration: light.animationDuration + 's',
        top: light.top,
        left: light.left,
        zIndex: -1000,
      }
    },

    getAnimationClass(animation) {
      switch (animation) {
        case 'glow':
          return 'animate-glow'
        case 'pulse':
          return 'animate-pulse'
        case 'flicker':
          return 'animate-flicker'
        case 'breathe':
          return 'animate-breathe'
        case 'twinkle':
          return 'animate-twinkle'
        default:
          return 'animate-glow'
      }
    },
  },
}
</script>

<template>
  <div class="background-lights-container">
    <div
      v-for="light in lights"
      :key="light.id"
      class="background-light"
      :class="getAnimationClass(light.animation)"
      :style="getLightStyle(light)"
    ></div>
  </div>
</template>

<style scoped>
.background-lights-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  overflow: hidden;
  z-index: -1000;
}

.background-light {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  mix-blend-mode: screen;
}

/* Animações personalizadas */
@keyframes glow {
  0%,
  100% {
    opacity: 0.1;
    transform: scale(0.8);
  }
  50% {
    opacity: 0.4;
    transform: scale(1.2);
  }
}

@keyframes flicker {
  0%,
  100% {
    opacity: 0.1;
  }
  10% {
    opacity: 0.3;
  }
  20% {
    opacity: 0.1;
  }
  30% {
    opacity: 0.4;
  }
  40% {
    opacity: 0.1;
  }
  50% {
    opacity: 0.2;
  }
  60% {
    opacity: 0.4;
  }
  70% {
    opacity: 0.1;
  }
  80% {
    opacity: 0.3;
  }
  90% {
    opacity: 0.1;
  }
}

@keyframes breathe {
  0%,
  100% {
    opacity: 0.1;
    transform: scale(0.9);
  }
  50% {
    opacity: 0.3;
    transform: scale(1.1);
  }
}

@keyframes twinkle {
  0%,
  20%,
  40%,
  60%,
  80%,
  100% {
    opacity: 0.1;
  }
  10%,
  30%,
  50%,
  70%,
  90% {
    opacity: 0.4;
  }
}

.animate-glow {
  animation: glow 4s ease-in-out infinite;
}

.animate-flicker {
  animation: flicker 3s linear infinite;
}

.animate-breathe {
  animation: breathe 6s ease-in-out infinite;
}

.animate-twinkle {
  animation: twinkle 2s linear infinite;
}

/* Responsividade - reduzir tamanho em telas menores */
@media (max-width: 768px) {
  .background-light {
    transform: scale(0.7);
  }
}

@media (max-width: 480px) {
  .background-light {
    transform: scale(0.5);
  }
}
</style>
