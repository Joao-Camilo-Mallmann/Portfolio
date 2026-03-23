<script setup>
import { useI18n } from '@/composables/useI18n'
import { ref } from 'vue'

const { t, locale, toggleLocale } = useI18n()

const mobileMenuOpen = ref(false)

function toggleMobileMenu() {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

function closeMobileMenu() {
  mobileMenuOpen.value = false
}
</script>

<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 bg-slate-900/20 backdrop-blur-md border-b border-white/10 animate-fade-in"
  >
    <div class="max-w-6xl mx-auto px-4 md:px-6 py-3 md:py-4">
      <div class="flex items-center justify-between">
        <!-- Logo/Nome com foto -->
        <div
          class="flex items-center gap-2 md:gap-3 group cursor-pointer"
          @click="$router.push('/')"
        >
          <img
            src="https://avatars.githubusercontent.com/u/94570639"
            alt="João Camilo"
            class="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover ring-1 ring-white/20 group-hover:scale-105 active:scale-[0.96] transition-transform duration-300"
          />
          <h1
            class="text-white font-semibold text-base md:text-lg group-hover:text-dev transition-colors duration-300"
          >
            João Camilo
          </h1>
        </div>

        <!-- Menu Mobile Button -->
        <button
          class="md:hidden text-gray-300 hover:text-white active:scale-[0.96] min-w-10 min-h-10 flex items-center justify-center rounded-lg transition duration-300"
          @click="toggleMobileMenu"
        >
          <i class="pi pi-bars text-lg"></i>
        </button>

        <!-- Navegação Desktop + Toggle de Idioma -->
        <nav class="hidden md:flex items-center gap-4">
          <router-link
            to="/"
            class="text-gray-300 hover:text-white hover:-translate-y-1 active:scale-[0.96] transition duration-300 px-3 py-2 min-h-10 rounded-lg hover:bg-white/10 hover:shadow-lg flex items-center gap-2 group"
          >
            <i class="pi pi-home text-sm transition-transform duration-300"></i>
            <span>{{ t('header.home') }}</span>
          </router-link>
          <router-link
            to="/dev"
            class="text-gray-300 hover:text-dev hover:-translate-y-1 active:scale-[0.96] transition duration-300 px-3 py-2 min-h-10 rounded-lg hover:bg-dev/10 hover:shadow-lg hover:shadow-dev/20 flex items-center gap-2 group"
          >
            <i class="pi pi-code text-sm transition-transform duration-300"></i>
            <span>{{ t('header.dev') }}</span>
          </router-link>
          <router-link
            to="/editor"
            class="text-gray-300 hover:text-editor hover:-translate-y-1 active:scale-[0.96] transition duration-300 px-3 py-2 min-h-10 rounded-lg hover:bg-editor/10 hover:shadow-lg hover:shadow-editor/20 flex items-center gap-2 group"
          >
            <i class="pi pi-video text-sm transition-transform duration-300"></i>
            <span>{{ t('header.editor') }}</span>
          </router-link>

          <!-- Botão de troca de idioma (Desktop) -->
          <button
            class="locale-toggle"
            :aria-label="locale === 'pt-BR' ? 'Switch to English' : 'Mudar para Português'"
            :title="locale === 'pt-BR' ? 'Switch to English' : 'Mudar para Português'"
            @click="toggleLocale"
          >
            <span class="locale-flag">{{ locale === 'pt-BR' ? '🇧🇷' : '🇺🇸' }}</span>
            <span class="locale-label">{{ locale === 'pt-BR' ? 'PT' : 'EN' }}</span>
          </button>
        </nav>
      </div>

      <!-- Menu Mobile -->
      <div
        v-show="mobileMenuOpen"
        class="md:hidden mt-4 pb-4 border-t border-white/10 pt-4 animate-slide-down"
      >
        <nav class="flex flex-col gap-2">
          <router-link
            to="/"
            class="text-gray-300 hover:text-white hover:translate-x-2 active:scale-[0.96] transition duration-300 px-3 py-3 rounded-lg hover:bg-white/10 hover:shadow-md flex items-center gap-3 group"
            @click="closeMobileMenu"
          >
            <i class="pi pi-home text-base transition-transform duration-300"></i>
            <span>{{ t('header.home') }}</span>
          </router-link>
          <router-link
            to="/dev"
            class="text-gray-300 hover:text-dev hover:translate-x-2 active:scale-[0.96] transition duration-300 px-3 py-3 rounded-lg hover:bg-dev/10 hover:shadow-md hover:shadow-dev/20 flex items-center gap-3 group"
            @click="closeMobileMenu"
          >
            <i class="pi pi-code text-base transition-transform duration-300"></i>
            <span>{{ t('header.developer') }}</span>
          </router-link>
          <router-link
            to="/editor"
            class="text-gray-300 hover:text-editor hover:translate-x-2 active:scale-[0.96] transition duration-300 px-3 py-3 rounded-lg hover:bg-editor/10 hover:shadow-md hover:shadow-editor/20 flex items-center gap-3 group"
            @click="closeMobileMenu"
          >
            <i class="pi pi-video text-base transition-transform duration-300"></i>
            <span>{{ t('header.videoEditor') }}</span>
          </router-link>

          <!-- Botão de troca de idioma (Mobile) -->
          <button
            class="locale-toggle-mobile"
            :aria-label="locale === 'pt-BR' ? 'Mudar para Português' : 'Switch to English'"
            @click="toggleLocale"
          >
            <span class="locale-flag text-lg">{{ locale === 'pt-BR' ? '🇺🇸' : '🇧🇷' }}</span>
            <span class="text-gray-300">{{ locale === 'pt-BR' ? 'English' : 'Português' }}</span>
          </button>
        </nav>
      </div>
    </div>
  </header>
</template>

<style scoped>
/* Botão de troca de idioma - Desktop */
.locale-toggle {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  border-radius: 9999px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  background: rgba(255, 255, 255, 0.05);
  color: #d1d5db;
  font-size: 0.8rem;
  font-weight: 600;
  cursor: pointer;
  transition:
    transform 0.3s ease,
    background-color 0.3s ease,
    border-color 0.3s ease,
    color 0.3s ease,
    box-shadow 0.3s ease;
  letter-spacing: 0.05em;
}

.locale-toggle:hover {
  background: rgba(255, 255, 255, 0.12);
  border-color: rgba(255, 255, 255, 0.3);
  color: #ffffff;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.locale-toggle:active {
  transform: translateY(0) scale(0.96);
}

.locale-flag {
  font-size: 1rem;
  line-height: 1;
}

.locale-label {
  text-transform: uppercase;
}

/* Botão de troca de idioma - Mobile */
.locale-toggle-mobile {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  border-radius: 8px;
  border: none;
  background: transparent;
  cursor: pointer;
  transition:
    transform 0.3s ease,
    background-color 0.3s ease;
  width: 100%;
  text-align: left;
}

.locale-toggle-mobile:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateX(8px);
}

.locale-toggle-mobile:active {
  transform: scale(0.96);
}
</style>
