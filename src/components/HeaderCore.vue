<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 bg-slate-900/20 backdrop-blur-md border-b border-white/10"
  >
    <div class="max-w-6xl mx-auto px-4 md:px-6 py-3 md:py-4">
      <div class="flex items-center justify-between">
        <!-- Logo/Nome com foto -->
        <div class="flex items-center gap-2 md:gap-3">
          <img
            src="https://avatars.githubusercontent.com/u/94570639"
            alt="João Camilo"
            class="w-6 h-6 md:w-8 md:h-8 rounded-full object-cover border border-white/20"
          />
          <h1 class="text-white font-semibold text-base md:text-lg">João Camilo</h1>
        </div>

        <!-- Menu Mobile Button -->
        <button @click="toggleMobileMenu" class="md:hidden text-gray-300 hover:text-white p-2">
          <i class="pi pi-bars text-lg"></i>
        </button>

        <!-- Navegação Desktop -->
        <nav class="hidden md:flex items-center gap-4">
          <router-link
            to="/"
            class="text-gray-300 hover:text-white transition-colors duration-200 px-3 py-2 rounded-lg hover:bg-white/10 flex items-center gap-2"
          >
            <i class="pi pi-home text-sm"></i>
            <span>Home</span>
          </router-link>
          <router-link
            to="/dev"
            class="text-gray-300 hover:text-[#4d91ea] transition-colors duration-200 px-3 py-2 rounded-lg hover:bg-[#4d91ea]/10 flex items-center gap-2"
          >
            <i class="pi pi-code text-sm"></i>
            <span>Dev</span>
          </router-link>
          <router-link
            to="/editor"
            class="text-gray-300 hover:text-[#eaa64d] transition-colors duration-200 px-3 py-2 rounded-lg hover:bg-[#eaa64d]/10 flex items-center gap-2"
          >
            <i class="pi pi-video text-sm"></i>
            <span>Editor</span>
          </router-link>
        </nav>
      </div>

      <!-- Menu Mobile -->
      <div v-show="mobileMenuOpen" class="md:hidden mt-4 pb-4 border-t border-white/10 pt-4">
        <nav class="flex flex-col gap-2">
          <router-link
            to="/"
            @click="closeMobileMenu"
            class="text-gray-300 hover:text-white transition-colors duration-200 px-3 py-3 rounded-lg hover:bg-white/10 flex items-center gap-3"
          >
            <i class="pi pi-home text-base"></i>
            <span>Home</span>
          </router-link>
          <router-link
            to="/dev"
            @click="closeMobileMenu"
            class="text-gray-300 hover:text-[#4d91ea] transition-colors duration-200 px-3 py-3 rounded-lg hover:bg-[#4d91ea]/10 flex items-center gap-3"
          >
            <i class="pi pi-code text-base"></i>
            <span>Desenvolvedor</span>
          </router-link>
          <router-link
            to="/editor"
            @click="closeMobileMenu"
            class="text-gray-300 hover:text-[#eaa64d] transition-colors duration-200 px-3 py-3 rounded-lg hover:bg-[#eaa64d]/10 flex items-center gap-3"
          >
            <i class="pi pi-video text-base"></i>
            <span>Editor de Vídeo</span>
          </router-link>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      mobileMenuOpen: false,
    }
  },
  methods: {
    toggleMobileMenu() {
      this.mobileMenuOpen = !this.mobileMenuOpen
    },
    closeMobileMenu() {
      this.mobileMenuOpen = false
    },
  },
}
</script>
