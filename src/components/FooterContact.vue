<script setup>
import { useI18n } from '@/composables/useI18n'
import { computed } from 'vue'
import SocialMediaButton from './SocialMediaButton.vue'

const props = defineProps({
  primaryColor: {
    type: String,
    default: '#4d91ea',
  },
  ctaText: {
    type: String,
    required: true,
  },
  variant: {
    type: String,
    default: 'default', // 'default' or 'editor'
  },
})

const { t } = useI18n()

const currentYear = computed(() => new Date().getFullYear())

const computedPrimaryColor = computed(() => {
  return props.variant === 'editor' ? 'var(--color-editor)' : 'var(--color-dev)'
})

const socialButtons = [
  { platform: 'github', link: 'https://github.com/Joao-Camilo-Mallmann' },
  { platform: 'linkedin', link: 'https://www.linkedin.com/in/joão-camilo-mallmann/' },
  { platform: 'youtube', link: 'https://www.youtube.com/@J.C-12' },
  { platform: 'discord', link: 'https://discord.com/users/740010338136621227' },
  { platform: 'email', link: 'mailto:jcamilomallmann@hotmail.com' },
]
</script>

<template>
  <footer class="mt-16 border-t border-white/10 bg-black/30 backdrop-blur-sm z-99!">
    <div class="max-w-6xl mx-auto p-6 md:p-8 flex flex-col items-center">
      <!-- Seção principal — shimmer no título -->
      <div class="text-center mb-8">
        <h3 class="footer-title text-xl md:text-2xl font-bold text-white mb-4 text-balance">
          {{ t('footer.title') }}
        </h3>
        <p
          v-motion
          :initial="{ opacity: 0, y: 10 }"
          :visible-once="{
            opacity: 1,
            y: 0,
            transition: { type: 'keyframes', ease: [0.16, 1, 0.3, 1], duration: 500, delay: 100 },
          }"
          class="text-gray-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed text-pretty"
        >
          {{ t('footer.subtitle') }}
          <span class="font-semibold" :style="`color: ${computedPrimaryColor}`">{{
            ctaText || t('footer.ctaDefault')
          }}</span>
        </p>
      </div>

      <!-- Links de contato — Cascade spring stagger -->
      <div class="flex! flex-wrap! justify-center gap-3 sm:gap-4 mb-8 px-4">
        <div
          v-for="(btn, i) in socialButtons"
          :key="btn.platform"
          v-motion
          :initial="{ opacity: 0, y: 20, scale: 0.8 }"
          :visible-once="{
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { type: 'spring', stiffness: 200, damping: 15, delay: i * 80 },
          }"
          class="flex-1 sm:flex-none min-w-0 max-w-35 sm:max-w-none"
        >
          <social-media-button :platform="btn.platform" :link="btn.link" />
        </div>
      </div>

      <!-- Divider — Line draw -->
      <div class="flex justify-center mb-6">
        <div
          v-motion
          :initial="{ scaleX: 0, opacity: 0 }"
          :visible-once="{
            scaleX: 1,
            opacity: 1,
            transition: {
              type: 'keyframes',
              ease: [0.16, 1, 0.3, 1],
              duration: 800,
              delay: 450,
            },
          }"
          class="h-px w-32 rounded-full origin-center"
          :style="`background-image: linear-gradient(to right, transparent, ${computedPrimaryColor}, transparent)`"
        ></div>
      </div>

      <!-- Informações do footer — Fade in last -->
      <div
        v-motion
        :initial="{ opacity: 0, y: 8 }"
        :visible-once="{
          opacity: 1,
          y: 0,
          transition: { type: 'keyframes', ease: [0.16, 1, 0.3, 1], duration: 500, delay: 600 },
        }"
        class="flex flex-col md:flex-row justify-center items-center gap-4 text-sm text-gray-400"
      >
        <div class="text-center md:text-right">
          <p>&copy; {{ currentYear }} João Camilo Mallmann</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
/* ── Footer Title Shimmer ── */
.footer-title {
  position: relative;
  overflow: hidden;
}

.footer-title::after {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 60%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.12), transparent);
  animation: footer-shimmer 3.5s ease-in-out infinite;
  pointer-events: none;
}

@keyframes footer-shimmer {
  0% {
    left: -60%;
  }
  50%,
  100% {
    left: 160%;
  }
}

@media (max-width: 768px) {
  footer :deep(.social-media-btn) {
    min-width: auto;
    flex: 1;
    max-width: 8.75rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .footer-title::after {
    animation: none;
  }
}
</style>
