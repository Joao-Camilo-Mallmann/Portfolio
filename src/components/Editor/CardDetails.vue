<script setup>
import { useI18n } from '@/composables/useI18n'
import { ref } from 'vue'

const { t } = useI18n()
const activeTab = ref(0)
</script>

<template>
  <div
    class="bg-surface-card border border-border rounded-2xl shadow-sm ring-1 ring-inset ring-white/5 overflow-hidden transition-opacity duration-300"
  >
    <div class="custom-tabs w-full">
      <!-- Tab List -->
      <div class="flex justify-center border-b border-gray-700/50">
        <button
          class="px-6 py-4 transition-all duration-300 border-b-2 font-medium flex items-center bg-transparent cursor-pointer"
          :class="
            activeTab === 0
              ? 'text-editor border-editor'
              : 'text-fg-muted border-transparent hover:opacity-80'
          "
          @click="activeTab = 0"
        >
          <i class="pi pi-user mr-2"></i>
          <span>{{ t('editorCard.tabAbout') }}</span>
        </button>

        <button
          class="px-6 py-4 transition-all duration-300 border-b-2 font-medium flex items-center bg-transparent cursor-pointer"
          :class="
            activeTab === 1
              ? 'text-editor border-editor'
              : 'text-fg-muted border-transparent hover:opacity-80'
          "
          @click="activeTab = 1"
        >
          <i class="pi pi-sparkles mr-2"></i>
          <span>{{ t('editorCard.tabSkills') }}</span>
        </button>

        <button
          class="px-6 py-4 transition-all duration-300 border-b-2 font-medium flex items-center bg-transparent cursor-pointer"
          :class="
            activeTab === 2
              ? 'text-editor border-editor'
              : 'text-fg-muted border-transparent hover:opacity-80'
          "
          @click="activeTab = 2"
        >
          <i class="pi pi-desktop mr-2"></i>
          <span>{{ t('editorCard.tabTools') }}</span>
        </button>
      </div>

      <!-- Tab Panels -->
      <div class="relative w-full">
        <transition name="fade-slide" mode="out-in">
          <div v-if="activeTab === 0" :key="0" class="p-8">
            <div class="text-center">
              <h3 class="text-2xl font-bold text-fg mb-4 text-balance tracking-wide">
                {{ t('editorCard.aboutTitle') }}
              </h3>
              <p class="text-fg-muted leading-relaxed text-pretty tracking-wide">
                {{ t('editorCard.aboutDescription') }}
              </p>
            </div>
          </div>

          <div v-else-if="activeTab === 1" :key="1" class="p-8">
            <div class="flex flex-wrap justify-center gap-6 text-fg-muted">
              <div
                v-motion
                class="flex items-center gap-2 transition-opacity duration-200 cursor-pointer"
                :hovered="{ opacity: 0.8 }"
                :tapped="{ opacity: 0.6 }"
              >
                <i class="pi pi-video text-editor"></i>
                <span class="tracking-wide">{{ t('editorCard.skillEditing') }}</span>
              </div>
              <div
                v-motion
                class="flex items-center gap-2 transition-opacity duration-200 cursor-pointer"
                :hovered="{ opacity: 0.8 }"
                :tapped="{ opacity: 0.6 }"
              >
                <i class="pi pi-palette text-editor"></i>
                <span class="tracking-wide">{{ t('editorCard.skillColorGrading') }}</span>
              </div>
              <div
                v-motion
                class="flex items-center gap-2 transition-opacity duration-200 cursor-pointer"
                :hovered="{ opacity: 0.8 }"
                :tapped="{ opacity: 0.6 }"
              >
                <i class="pi pi-book text-editor"></i>
                <span class="tracking-wide">{{ t('editorCard.skillStorytelling') }}</span>
              </div>
              <div
                v-motion
                class="flex items-center gap-2 transition-opacity duration-200 cursor-pointer"
                :hovered="{ opacity: 0.8 }"
                :tapped="{ opacity: 0.6 }"
              >
                <i class="pi pi-briefcase text-editor"></i>
                <span class="tracking-wide">{{ t('editorCard.skillExperience') }}</span>
              </div>
            </div>
          </div>

          <div v-else-if="activeTab === 2" :key="2" class="p-8">
            <div class="grid grid-cols-2 md:grid-cols-4 gap-6 place-items-center">
              <!-- Premiere Pro -->
              <div
                v-motion
                class="group flex flex-col items-center gap-2 p-3 rounded-xl transition-all duration-300 hover:bg-surface-card hover:border-border hover:shadow-sm hover:ring-1 hover:ring-inset hover:ring-white/5 border border-transparent cursor-pointer"
                :tapped="{ opacity: 0.6 }"
              >
                <div
                  class="h-12 w-12 bg-linear-to-br from-purple-600 to-blue-700 rounded-xl flex items-center justify-center transition duration-200 group-hover:scale-110 editor-glow"
                >
                  <span class="text-white font-bold text-lg">Pr</span>
                </div>
                <span
                  class="text-xs text-fg-muted group-hover:text-fg transition-colors duration-200 tracking-wide"
                  >Premiere</span
                >
              </div>

              <!-- After Effects -->
              <div
                v-motion
                class="group flex flex-col items-center gap-2 p-3 rounded-xl transition-all duration-300 hover:bg-surface-card hover:border-border hover:shadow-sm hover:ring-1 hover:ring-inset hover:ring-white/5 border border-transparent cursor-pointer"
                :tapped="{ opacity: 0.6 }"
              >
                <div
                  class="h-12 w-12 bg-linear-to-br from-purple-700 to-indigo-800 rounded-xl flex items-center justify-center transition duration-200 group-hover:scale-110 editor-glow"
                >
                  <span class="text-white font-bold text-lg">Ae</span>
                </div>
                <span
                  class="text-xs text-fg-muted group-hover:text-fg transition-colors duration-200 tracking-wide"
                  >After Effects</span
                >
              </div>

              <!-- Photoshop -->
              <div
                v-motion
                class="group flex flex-col items-center gap-2 p-3 rounded-xl transition-all duration-300 hover:bg-surface-card hover:border-border hover:shadow-sm hover:ring-1 hover:ring-inset hover:ring-white/5 border border-transparent cursor-pointer"
                :tapped="{ opacity: 0.6 }"
              >
                <div
                  class="h-12 w-12 bg-linear-to-br from-blue-600 to-cyan-700 rounded-xl flex items-center justify-center transition duration-200 group-hover:scale-110 editor-glow"
                >
                  <span class="text-white font-bold text-lg">Ps</span>
                </div>
                <span
                  class="text-xs text-fg-muted group-hover:text-fg transition-colors duration-200 tracking-wide"
                  >Photoshop</span
                >
              </div>

              <!-- Audition -->
              <div
                v-motion
                class="group flex flex-col items-center gap-2 p-3 rounded-lg transition-colors duration-300 hover:bg-gray-700/30 cursor-pointer"
                :tapped="{ scale: 0.96 }"
              >
                <div
                  class="h-12 w-12 bg-linear-to-br from-green-600 to-teal-700 rounded-xl flex items-center justify-center transition duration-200 group-hover:scale-110 editor-glow"
                >
                  <span class="text-white font-bold text-lg">Au</span>
                </div>
                <span
                  class="text-xs text-fg-muted group-hover:text-fg transition-colors duration-200 tracking-wide"
                  >Audition</span
                >
              </div>

              <!-- Illustrator -->
              <div
                v-motion
                class="group flex flex-col items-center gap-2 p-3 rounded-lg transition-colors duration-300 hover:bg-gray-700/30 cursor-pointer"
                :tapped="{ scale: 0.96 }"
              >
                <div
                  class="h-12 w-12 bg-linear-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center transition duration-200 group-hover:scale-110 editor-glow"
                >
                  <span class="text-white font-bold text-lg">Ai</span>
                </div>
                <span
                  class="text-xs text-fg-muted group-hover:text-fg transition-colors duration-200 tracking-wide"
                  >Illustrator</span
                >
              </div>

              <!-- Notion -->
              <div
                v-motion
                class="group flex flex-col items-center gap-2 p-3 rounded-lg transition-colors duration-300 hover:bg-gray-700/30 cursor-pointer"
                :tapped="{ scale: 0.96 }"
              >
                <div
                  class="h-12 w-12 bg-linear-to-br from-gray-100 to-gray-300 rounded-xl flex items-center justify-center transition duration-200 group-hover:scale-110 editor-glow"
                >
                  <svg viewBox="0 0 24 24" class="h-7 w-7 text-gray-800">
                    <path
                      d="M4 4v16h16V4H4zm2 2h12v12H6V6zm2 2v8h8V8H8zm2 2h4v4h-4v-4z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <span
                  class="text-xs text-fg-muted group-hover:text-fg transition-colors duration-200 tracking-wide"
                  >Notion</span
                >
              </div>

              <!-- CapCut -->
              <div
                v-motion
                class="group flex flex-col items-center gap-2 p-3 rounded-lg transition-colors duration-300 hover:bg-gray-700/30 cursor-pointer"
                :tapped="{ scale: 0.96 }"
              >
                <div
                  class="h-12 w-12 bg-linear-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center transition duration-200 group-hover:scale-110 editor-glow"
                >
                  <svg viewBox="0 0 24 24" class="h-7 w-7 text-white">
                    <path
                      d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17l-3-3 1.5-1.5L9 14l6-6L16.5 9.5 9 17z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <span
                  class="text-xs text-fg-muted group-hover:text-fg transition-colors duration-200 tracking-wide"
                  >CapCut</span
                >
              </div>

              <!-- DaVinci Resolve -->
              <div
                v-motion
                class="group flex flex-col items-center gap-2 p-3 rounded-lg transition-colors duration-300 hover:bg-gray-700/30 cursor-pointer"
                :tapped="{ scale: 0.96 }"
              >
                <div
                  class="h-12 w-12 bg-linear-to-br from-red-600 to-orange-500 rounded-xl flex items-center justify-center transition duration-200 group-hover:scale-110 editor-glow"
                >
                  <svg viewBox="0 0 24 24" class="h-7 w-7 text-white">
                    <path
                      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <span
                  class="text-xs text-fg-muted group-hover:text-fg transition-colors duration-200 tracking-wide"
                  >DaVinci</span
                >
              </div>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<style scoped>
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.3s ease-out;
}

.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(10px);
}

.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
