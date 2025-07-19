<template>
  <div
    :class="[
      'absolute rounded-full pointer-events-none',
      colorClass,
      animationClass,
      opacityClass,
      translateClass,
    ]"
    :style="{
      width: size + 'px',
      height: size + 'px',
      left: computedLeft,
      right: computedRight,
      top: computedTop,
      bottom: computedBottom,
      zIndex: -1000,
      animationDelay: animationDelay + 's',
    }"
  ></div>
</template>

<script>
function randomBetween(a, b) {
  return Math.random() * (b - a) + a
}

function randomPercent(min, max) {
  return `${randomBetween(min, max)}%`
}

function randomAnimation() {
  const animations = ['float', 'bounce', 'pulse', 'wiggle', 'rotate', 'fade']
  return animations[Math.floor(Math.random() * animations.length)]
}

function randomTranslateClass() {
  // 40% chance de aplicar translate-y-1/2 ou -translate-y-1/2 ou -translate-x-1/2
  const options = [
    '',
    '-translate-y-1/2',
    '-translate-x-1/2',
    '-translate-x-1/2 -translate-y-1/2',
    'translate-x-1/2',
    'translate-x-1/2 -translate-y-1/2',
  ]
  return options[Math.floor(Math.random() * options.length)]
}

export default {
  name: 'AnimatedDot',
  props: {
    color: {
      type: String,
      required: true,
    },
  },
  data() {
    // Only randomize once per instance
    const randSize = Math.round(randomBetween(8, 24))
    const randAnim = randomAnimation()
    const randOpacity = randomBetween(0.4, 0.85)
    const randAnimationDelay = randomBetween(0, 3)
    // Random position: pick top/bottom and left/right randomly
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
    // Random translate utility class
    const randTranslateClass = randomTranslateClass()
    return {
      randSize,
      randAnim,
      randOpacity,
      randAnimationDelay,
      randTop: top,
      randBottom: bottom,
      randLeft: left,
      randRight: right,
      randTranslateClass,
    }
  },
  computed: {
    colorClass() {
      const c = this.color
      if (c === 'yellow') return 'bg-yellow-400'
      if (c === 'gold') return 'bg-[#eaa64d]'
      if (c === 'blue') return 'bg-[#4d91ea]'
      if (c === 'gold-light') return 'bg-yellow-200'
      if (c === 'beige') return 'bg-[#f0b86e]'
      return c
    },
    animationClass() {
      switch (this.randAnim) {
        case 'pulse':
          return 'animate-pulse'
        case 'wiggle':
          return 'animate-wiggle'
        case 'rotate':
          return 'animate-rotate'
        case 'fade':
          return 'animate-fade'
        default:
          return 'animate-bounce'
      }
    },
    animationDelay() {
      return this.randAnimationDelay
    },
    opacityClass() {
      return `opacity-[${this.randOpacity}]`
    },
    computedTop() {
      return this.randTop
    },
    computedBottom() {
      return this.randBottom
    },
    computedLeft() {
      return this.randLeft
    },
    computedRight() {
      return this.randRight
    },
    size() {
      return this.randSize
    },
    translateClass() {
      return this.randTranslateClass
    },
  },
}
</script>

<style scoped>
@keyframes wiggle {
  0%,
  100% {
    transform: rotate(-3deg) translateY(0);
  }
  25% {
    transform: rotate(3deg) translateY(-5px);
  }
  75% {
    transform: rotate(-3deg) translateY(5px);
  }
}

@keyframes rotate {
  0% {
    transform: rotate(0deg) scale(1);
  }
  50% {
    transform: rotate(180deg) scale(1.1);
  }
  100% {
    transform: rotate(360deg) scale(1);
  }
}

@keyframes fade {
  0%,
  100% {
    opacity: 0.3;
    transform: scale(0.8);
  }
  50% {
    opacity: 1;
    transform: scale(1.2);
  }
}

.animate-wiggle {
  animation: wiggle 4s ease-in-out infinite;
}

.animate-rotate {
  animation: rotate 8s linear infinite;
}

.animate-fade {
  animation: fade 5s ease-in-out infinite;
}
</style>
