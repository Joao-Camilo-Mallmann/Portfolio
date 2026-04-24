<script setup>
import { useI18n } from '@/composables/useI18n'
import { ref, onMounted, onUnmounted } from 'vue'

const { t, locale, toggleLocale } = useI18n()

const mobileMenuOpen = ref(false)
const isScrolled = ref(false)

function toggleMobileMenu() {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

function closeMobileMenu() {
  mobileMenuOpen.value = false
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <header
    v-motion
    :initial="{ opacity: 0, y: -20 }"
    :enter="{
      opacity: 1,
      y: 0,
      transition: { type: 'keyframes', ease: [0.16, 1, 0.3, 1], duration: 800 },
    }"
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]',
      isScrolled
        ? 'bg-[#07080a]/80 backdrop-blur-md border-b border-white/10 py-2'
        : 'bg-transparent border-b border-transparent py-4',
    ]"
  >
    <div class="max-w-6xl mx-auto px-4 md:px-6">
      <div class="flex items-center justify-between">
        <!-- Logo/Nome com foto -->
        <div
          class="flex items-center gap-2 md:gap-3 group cursor-pointer"
          @click="$router.push('/')"
        >
          <img
            v-motion
            src="https://avatars.githubusercontent.com/u/94570639"
            alt="João Camilo"
            :hovered="{ scale: 1.03, transition: { type: 'spring', stiffness: 300, damping: 20 } }"
            :tapped="{ scale: 0.97 }"
            class="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover ring-1 ring-white/20 transition-colors duration-300"
          />
          <h1
            class="text-white font-semibold text-base md:text-lg group-hover:text-dev transition-colors duration-300"
          >
            João Camilo
          </h1>
        </div>

        <!-- Menu Mobile Button -->
        <button
          v-motion
          :hovered="{ scale: 1.05 }"
          :tapped="{ scale: 0.95 }"
          class="md:hidden text-gray-300 hover:text-white min-w-10 min-h-10 flex items-center justify-center rounded-lg transition duration-300"
          @click="toggleMobileMenu"
        >
          <i class="pi pi-bars text-lg"></i>
        </button>

        <!-- Navegação Desktop + Toggle de Idioma -->
        <nav class="hidden md:flex items-center gap-4">
          <router-link
            v-motion
            to="/"
            :hovered="{
              scale: 1.03,
              y: -2,
              transition: { type: 'spring', stiffness: 300, damping: 20 },
            }"
            :tapped="{ scale: 0.97 }"
            class="text-gray-300 hover:text-white transition duration-300 px-3 py-2 min-h-10 rounded-lg hover:bg-white/10 hover:shadow-lg flex items-center gap-2 group"
          >
            <i
              class="pi pi-home text-sm transition-transform duration-300 group-hover:scale-110"
            ></i>
            <span>{{ t('header.home') }}</span>
          </router-link>
          <router-link
            v-motion
            to="/dev"
            :hovered="{
              scale: 1.03,
              y: -2,
              transition: { type: 'spring', stiffness: 300, damping: 20 },
            }"
            :tapped="{ scale: 0.97 }"
            class="text-gray-300 hover:text-dev transition duration-300 px-3 py-2 min-h-10 rounded-lg hover:bg-dev/10 hover:shadow-lg hover:shadow-dev/20 flex items-center gap-2 group"
          >
            <i
              class="pi pi-code text-sm transition-transform duration-300 group-hover:scale-110"
            ></i>
            <span>{{ t('header.dev') }}</span>
          </router-link>
          <router-link
            v-motion
            to="/editor"
            :hovered="{
              scale: 1.03,
              y: -2,
              transition: { type: 'spring', stiffness: 300, damping: 20 },
            }"
            :tapped="{ scale: 0.97 }"
            class="text-gray-300 hover:text-editor transition duration-300 px-3 py-2 min-h-10 rounded-lg hover:bg-editor/10 hover:shadow-lg hover:shadow-editor/20 flex items-center gap-2 group"
          >
            <i
              class="pi pi-video text-sm transition-transform duration-300 group-hover:scale-110"
            ></i>
            <span>{{ t('header.editor') }}</span>
          </router-link>

          <!-- Botão de troca de idioma (Desktop) -->
          <button
            v-motion
            class="locale-toggle"
            :aria-label="locale === 'pt-BR' ? 'Switch to English' : 'Mudar para Português'"
            :title="locale === 'pt-BR' ? 'Switch to English' : 'Mudar para Português'"
            :hovered="{
              scale: 1.03,
              y: -2,
              transition: { type: 'spring', stiffness: 300, damping: 20 },
            }"
            :tapped="{ scale: 0.97 }"
            @click="toggleLocale"
          >
            <span class="locale-flag">{{ locale === 'pt-BR' ? '🇧🇷' : '🇺🇸' }}</span>
            <span class="locale-label">{{ locale === 'pt-BR' ? 'PT' : 'EN' }}</span>
          </button>
        </nav>
      </div>

      <!-- Menu Mobile -->
      <transition
        enter-active-class="transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
        enter-from-class="opacity-0 -translate-y-4"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-4"
      >
        <div v-show="mobileMenuOpen" class="md:hidden mt-4 pb-4 border-t border-white/10 pt-4">
          <nav class="flex flex-col gap-2">
            <router-link
              v-motion
              to="/"
              :hovered="{ x: 8 }"
              :tapped="{ scale: 0.98 }"
              class="text-gray-300 hover:text-white transition duration-300 px-3 py-3 rounded-lg hover:bg-white/10 hover:shadow-md flex items-center gap-3 group"
              @click="closeMobileMenu"
            >
              <i
                class="pi pi-home text-base transition-transform duration-300 group-hover:scale-110"
              ></i>
              <span>{{ t('header.home') }}</span>
            </router-link>
            <router-link
              v-motion
              to="/dev"
              :hovered="{ x: 8 }"
              :tapped="{ scale: 0.98 }"
              class="text-gray-300 hover:text-dev transition duration-300 px-3 py-3 rounded-lg hover:bg-dev/10 hover:shadow-md hover:shadow-dev/20 flex items-center gap-3 group"
              @click="closeMobileMenu"
            >
              <i
                class="pi pi-code text-base transition-transform duration-300 group-hover:scale-110"
              ></i>
              <span>{{ t('header.developer') }}</span>
            </router-link>
            <router-link
              v-motion
              to="/editor"
              :hovered="{ x: 8 }"
              :tapped="{ scale: 0.98 }"
              class="text-gray-300 hover:text-editor transition duration-300 px-3 py-3 rounded-lg hover:bg-editor/10 hover:shadow-md hover:shadow-editor/20 flex items-center gap-3 group"
              @click="closeMobileMenu"
            >
              <i
                class="pi pi-video text-base transition-transform duration-300 group-hover:scale-110"
              ></i>
              <span>{{ t('header.videoEditor') }}</span>
            </router-link>

            <!-- Botão de troca de idioma (Mobile) -->
            <button
              v-motion
              class="locale-toggle-mobile"
              :aria-label="locale === 'pt-BR' ? 'Mudar para Português' : 'Switch to English'"
              :hovered="{ x: 8 }"
              :tapped="{ scale: 0.98 }"
              @click="toggleLocale"
            >
              <span class="locale-flag text-lg">{{ locale === 'pt-BR' ? '🇺🇸' : '🇧🇷' }}</span>
              <span class="text-gray-300">{{ locale === 'pt-BR' ? 'English' : 'Português' }}</span>
            </button>
          </nav>
        </div>
      </transition>
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
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.locale-toggle:active {
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
}

.locale-toggle-mobile:active {
}
</style>
