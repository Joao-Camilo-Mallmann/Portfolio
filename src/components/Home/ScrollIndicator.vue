<script setup>
import { useI18n } from '@/composables/useI18n'

defineEmits(['click'])

const { t } = useI18n()
</script>

<template>
  <button
    v-motion
    :initial="{ opacity: 0, y: 15 }"
    :enter="{
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 180, damping: 16, delay: 850 },
    }"
    class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60 hover:text-white transition-colors duration-300 z-30 pointer-events-auto min-w-[40px] min-h-[40px] active:scale-95 group"
    @click="$emit('click')"
  >
    <span
      class="text-xs md:text-sm tracking-widest uppercase font-medium group-hover:tracking-[0.2em] transition-all duration-300"
      >{{ t('home.hero.scrollIndicator') }}</span
    >
    <div class="relative flex items-center justify-center">
      <i
        class="pi pi-arrow-down animate-bounce-custom text-dev group-hover:text-white transition-colors duration-300"
      ></i>
    </div>
  </button>
</template>

<style scoped>
.animate-bounce-custom {
  animation: bounceCustom 2.2s ease-in-out infinite;
}

@keyframes bounceCustom {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(6px);
  }
}

@media (prefers-reduced-motion: reduce) {
  .animate-bounce-custom {
    animation: none;
  }
  .transition-all,
  .transition-colors {
    transition-duration: 0.01ms !important;
  }
}
</style>
