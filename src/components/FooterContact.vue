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
</script>

<template>
  <footer class="mt-16 border-t border-white/10 bg-black/30 backdrop-blur-sm z-99!">
    <div class="max-w-6xl mx-auto p-6 md:p-8 flex flex-col items-center">
      <!-- Seção principal -->
      <div class="text-center mb-8">
        <h3 class="text-xl md:text-2xl font-bold text-white mb-4 text-balance">
          {{ t('footer.title') }}
        </h3>
        <p class="text-gray-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed text-pretty">
          {{ t('footer.subtitle') }}
          <span class="font-semibold" :style="`color: ${computedPrimaryColor}`">{{
            ctaText || t('footer.ctaDefault')
          }}</span>
        </p>
      </div>

      <!-- Links de contato -->
      <div class="flex! flex-wrap! justify-center gap-3 sm:gap-4 mb-8 px-4">
        <social-media-button
          platform="github"
          link="https://github.com/Joao-Camilo-Mallmann"
          class="flex-1 sm:flex-none min-w-0 max-w-35 sm:max-w-none"
        />
        <social-media-button
          platform="linkedin"
          link="https://www.linkedin.com/in/joão-camilo-mallmann/"
          class="flex-1 sm:flex-none min-w-0 max-w-35 sm:max-w-none"
        />
        <social-media-button
          platform="youtube"
          link="https://www.youtube.com/@J.C-12"
          class="flex-1 sm:flex-none min-w-0 max-w-35 sm:max-w-none"
        />
        <social-media-button
          platform="discord"
          link="https://discord.com/users/740010338136621227"
          class="flex-1 sm:flex-none min-w-0 max-w-35 sm:max-w-none"
        />
        <social-media-button
          platform="email"
          link="mailto:jcamilomallmann@hotmail.com"
          class="flex-1 sm:flex-none min-w-0 max-w-35 sm:max-w-none"
        />
      </div>

      <!-- Divider com cor dinâmica -->
      <div class="flex justify-center mb-6">
        <div
          class="h-px w-32 rounded-full"
          :style="`background-image: linear-gradient(to right, transparent, ${computedPrimaryColor}, transparent)`"
        ></div>
      </div>

      <!-- Informações do footer -->
      <div
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
/* Animação de entrada */
footer {
  animation: slideUpFooter 0.8s ease-out;
}

/* Responsividade para os botões sociais */
@media (max-width: 768px) {
  footer :deep(.social-media-btn) {
    min-width: auto;
    flex: 1;
    max-width: 8.75rem; /* 140px */
  }
}
</style>
