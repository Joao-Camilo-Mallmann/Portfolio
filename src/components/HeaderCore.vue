<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 bg-slate-900/20 backdrop-blur-md border-b border-white/10 animate-fade-in"
  >
    <div class="max-w-6xl mx-auto px-4 md:px-6 py-3 md:py-4">
      <div class="flex items-center justify-between">
        <!-- Logo/Nome com foto -->
        <div class="flex items-center gap-2 md:gap-3 group">
          <img
            src="https://avatars.githubusercontent.com/u/94570639"
            alt="João Camilo"
            class="w-6 h-6 md:w-8 md:h-8 rounded-full object-cover border border-white/20 group-hover:scale-110 transition-transform duration-300"
          />
          <h1
            class="text-white font-semibold text-base md:text-lg group-hover:text-blue-400 transition-colors duration-300"
          >
            João Camilo
          </h1>
        </div>

        <!-- Menu Mobile Button -->
        <button
          @click="toggleMobileMenu"
          class="md:hidden text-gray-300 hover:text-white hover:scale-110 hover:rotate-3 p-2 transition-all duration-300"
        >
          <i class="pi pi-bars text-lg"></i>
        </button>

        <!-- Navegação Desktop -->
        <nav class="hidden md:flex items-center gap-4">
          <router-link
            to="/"
            class="text-gray-300 hover:text-white hover:-translate-y-1 hover:scale-105 transition-all duration-300 px-3 py-2 rounded-lg hover:bg-white/10 hover:shadow-lg flex items-center gap-2 group"
          >
            <i
              class="pi pi-home text-sm group-hover:rotate-12 transition-transform duration-300"
            ></i>
            <span>Home</span>
          </router-link>
          <router-link
            to="/dev"
            class="text-gray-300 hover:text-[#4d91ea] hover:-translate-y-1 hover:scale-105 transition-all duration-300 px-3 py-2 rounded-lg hover:bg-[#4d91ea]/10 hover:shadow-lg hover:shadow-blue-500/20 flex items-center gap-2 group"
          >
            <i
              class="pi pi-code text-sm group-hover:rotate-12 transition-transform duration-300"
            ></i>
            <span>Dev</span>
          </router-link>
          <router-link
            to="/editor"
            class="text-gray-300 hover:text-[#eaa64d] hover:-translate-y-1 hover:scale-105 transition-all duration-300 px-3 py-2 rounded-lg hover:bg-[#eaa64d]/10 hover:shadow-lg hover:shadow-orange-500/20 flex items-center gap-2 group"
          >
            <i
              class="pi pi-video text-sm group-hover:rotate-12 transition-transform duration-300"
            ></i>
            <span>Editor</span>
          </router-link>
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
            @click="closeMobileMenu"
            class="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 px-3 py-3 rounded-lg hover:bg-white/10 hover:shadow-md flex items-center gap-3 group"
          >
            <i class="pi pi-home text-base group-hover:bounce transition-all duration-300"></i>
            <span>Home</span>
          </router-link>
          <router-link
            to="/dev"
            @click="closeMobileMenu"
            class="text-gray-300 hover:text-[#4d91ea] hover:translate-x-2 transition-all duration-300 px-3 py-3 rounded-lg hover:bg-[#4d91ea]/10 hover:shadow-md hover:shadow-blue-500/20 flex items-center gap-3 group"
          >
            <i class="pi pi-code text-base group-hover:bounce transition-all duration-300"></i>
            <span>Desenvolvedor</span>
          </router-link>
          <router-link
            to="/editor"
            @click="closeMobileMenu"
            class="text-gray-300 hover:text-[#eaa64d] hover:translate-x-2 transition-all duration-300 px-3 py-3 rounded-lg hover:bg-[#eaa64d]/10 hover:shadow-md hover:shadow-orange-500/20 flex items-center gap-3 group"
          >
            <i class="pi pi-video text-base group-hover:bounce transition-all duration-300"></i>
            <span>Editor de Vídeo</span>
          </router-link>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const mobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}
</script>
