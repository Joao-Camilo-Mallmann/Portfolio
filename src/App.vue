<script setup>
import { onMounted, ref } from 'vue'
import { RouterView, useRoute } from 'vue-router'

const route = useRoute()
const isLoading = ref(true)

onMounted(() => {
  // Aguarda um pequeno delay para garantir que tudo carregou
  setTimeout(() => {
    isLoading.value = false
  }, 800)
})
</script>

<template>
  <!-- Loading Screen -->
  <Transition name="loading-fade">
    <div v-if="isLoading" class="loading-screen">
      <div class="loading-content">
        <div class="loading-spinner"></div>
        <p class="loading-text">Carregando...</p>
      </div>
    </div>
  </Transition>

  <!-- Main Content -->
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component" :key="route.fullPath" />
    </transition>
  </router-view>
</template>

<style>
/* Loading Screen Styles */
.loading-screen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #0f172a;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

.loading-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}

.loading-spinner {
  width: 50px;
  height: 50px;
  border: 3px solid rgba(255, 255, 255, 0.1);
  border-top-color: #4d91ea;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

.loading-text {
  color: #94a3b8;
  font-size: 0.875rem;
  font-weight: 500;
  letter-spacing: 0.05em;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

/* Loading Fade Transition */
.loading-fade-enter-active,
.loading-fade-leave-active {
  transition: opacity 0.5s ease;
}

.loading-fade-enter-from,
.loading-fade-leave-to {
  opacity: 0;
}

/* Page Fade Transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
</style>
