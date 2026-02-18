<script setup>
import { useI18n } from '@/composables/useI18n'
import { computed } from 'vue'
import SocialMediaButton from './SocialMediaButton.vue'

defineProps({
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
</script>

<template>
  <footer class="mt-16 border-t border-white/10 bg-black/30 backdrop-blur-sm !z-99">
    <div class="max-w-6xl mx-auto p-6 md:p-8 flex flex-col items-center">
      <!-- Seção principal -->
      <div class="text-center mb-8">
        <h3 class="text-xl md:text-2xl font-bold text-white mb-4">{{ t('footer.title') }}</h3>
        <p class="text-gray-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          {{ t('footer.subtitle') }}
          <span class="font-semibold" :style="`color: ${primaryColor}`">{{
            ctaText || t('footer.ctaDefault')
          }}</span>
        </p>
      </div>

      <!-- Links de contato -->
      <div class="!flex !flex-wrap justify-center gap-3 sm:gap-4 mb-8 px-4">
        <social-media-button
          platform="linkedin"
          link="https://www.linkedin.com/in/joão-camilo-mallmann/"
          class="flex-1 sm:flex-none min-w-0 max-w-[140px] sm:max-w-none"
        />
        <social-media-button
          platform="email"
          link="mailto:jcamilomallmann@hotmail.com"
          class="flex-1 sm:flex-none min-w-0 max-w-[140px] sm:max-w-none"
        />

        <!-- <SocialMediaButton
          platform="whatsapp"
          link="https://wa.me/5551994461433"
          class="flex-1 sm:flex-none min-w-0 max-w-[140px] sm:max-w-none"
        /> -->
      </div>

      <!-- Divider com cor dinâmica -->
      <div class="flex justify-center mb-6">
        <div
          class="h-px w-32 rounded-full bg-gradient-to-r from-transparent to-transparent"
          :style="`background-image: linear-gradient(to right, transparent, ${primaryColor}, transparent)`"
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
    max-width: 140px;
  }
}
</style>
