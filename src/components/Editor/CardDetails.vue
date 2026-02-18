<script setup>
import { useI18n } from '@/composables/useI18n'
import Card from 'primevue/card'
import Tab from 'primevue/tab'
import TabList from 'primevue/tablist'
import TabPanel from 'primevue/tabpanel'
import TabPanels from 'primevue/tabpanels'
import Tabs from 'primevue/tabs'

const { t } = useI18n()
</script>

<template>
  <card
    class="card-container bg-gray-800/30z backdrop-blur-sm border border-white/10 rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
  >
    <template #content>
      <tabs value="0" class="custom-tabs">
        <tab-list>
          <tab value="0">
            <i class="pi pi-user mr-2"></i>
            <span>{{ t('editorCard.tabAbout') }}</span>
          </tab>
          <tab value="1">
            <i class="pi pi-sparkles mr-2"></i>
            <span>{{ t('editorCard.tabSkills') }}</span>
          </tab>
          <tab value="2">
            <i class="pi pi-desktop mr-2"></i>
            <span>{{ t('editorCard.tabTools') }}</span>
          </tab>
        </tab-list>
        <tab-panels>
          <tab-panel value="0">
            <div class="p-4 text-center">
              <h3 class="text-2xl font-bold text-editor mb-4">
                {{ t('editorCard.aboutTitle') }}
              </h3>
              <p class="text-gray-300 leading-relaxed">
                {{ t('editorCard.aboutDescription') }}
              </p>
            </div>
          </tab-panel>
          <tab-panel value="1">
            <div class="p-4 flex flex-wrap justify-center gap-6 text-gray-300">
              <div
                class="flex items-center gap-2 transition-all duration-200 hover:text-white hover:scale-105 cursor-pointer"
              >
                <i class="pi pi-video text-editor"></i>
                <span>{{ t('editorCard.skillEditing') }}</span>
              </div>
              <div
                class="flex items-center gap-2 transition-all duration-200 hover:text-white hover:scale-105 cursor-pointer"
              >
                <i class="pi pi-palette text-editor"></i>
                <span>{{ t('editorCard.skillColorGrading') }}</span>
              </div>
              <div
                class="flex items-center gap-2 transition-all duration-200 hover:text-white hover:scale-105 cursor-pointer"
              >
                <i class="pi pi-book text-editor"></i>
                <span>{{ t('editorCard.skillStorytelling') }}</span>
              </div>
              <div
                class="flex items-center gap-2 transition-all duration-200 hover:text-white hover:scale-105 cursor-pointer"
              >
                <i class="pi pi-briefcase text-editor"></i>
                <span>{{ t('editorCard.skillExperience') }}</span>
              </div>
            </div>
          </tab-panel>
          <tab-panel value="2">
            <div class="p-6">
              <div class="grid grid-cols-2 md:grid-cols-4 gap-6 place-items-center">
                <!-- Premiere Pro -->
                <div
                  class="group flex flex-col items-center gap-2 p-3 rounded-lg transition-all duration-300 hover:bg-gray-700/30"
                >
                  <div
                    class="h-12 w-12 bg-gradient-to-br from-purple-600 to-blue-700 rounded-xl flex items-center justify-center group-hover:drop-shadow-[0_0_15px_rgba(234,166,77,0.4)] transition-all duration-200 group-hover:scale-110"
                  >
                    <span class="text-white font-bold text-lg">Pr</span>
                  </div>
                  <span
                    class="text-xs text-gray-400 group-hover:text-editor transition-colors duration-200"
                    >Premiere</span
                  >
                </div>

                <!-- After Effects -->
                <div
                  class="group flex flex-col items-center gap-2 p-3 rounded-lg transition-all duration-300 hover:bg-gray-700/30"
                >
                  <div
                    class="h-12 w-12 bg-gradient-to-br from-purple-700 to-indigo-800 rounded-xl flex items-center justify-center group-hover:drop-shadow-[0_0_15px_rgba(234,166,77,0.4)] transition-all duration-200 group-hover:scale-110"
                  >
                    <span class="text-white font-bold text-lg">Ae</span>
                  </div>
                  <span
                    class="text-xs text-gray-400 group-hover:text-editor transition-colors duration-200"
                    >After Effects</span
                  >
                </div>

                <!-- Photoshop -->
                <div
                  class="group flex flex-col items-center gap-2 p-3 rounded-lg transition-all duration-300 hover:bg-gray-700/30"
                >
                  <div
                    class="h-12 w-12 bg-gradient-to-br from-blue-600 to-cyan-700 rounded-xl flex items-center justify-center group-hover:drop-shadow-[0_0_15px_rgba(234,166,77,0.4)] transition-all duration-200 group-hover:scale-110"
                  >
                    <span class="text-white font-bold text-lg">Ps</span>
                  </div>
                  <span
                    class="text-xs text-gray-400 group-hover:text-editor transition-colors duration-200"
                    >Photoshop</span
                  >
                </div>

                <!-- Audition -->
                <div
                  class="group flex flex-col items-center gap-2 p-3 rounded-lg transition-all duration-300 hover:bg-gray-700/30"
                >
                  <div
                    class="h-12 w-12 bg-gradient-to-br from-green-600 to-teal-700 rounded-xl flex items-center justify-center group-hover:drop-shadow-[0_0_15px_rgba(234,166,77,0.4)] transition-all duration-200 group-hover:scale-110"
                  >
                    <span class="text-white font-bold text-lg">Au</span>
                  </div>
                  <span
                    class="text-xs text-gray-400 group-hover:text-editor transition-colors duration-200"
                    >Audition</span
                  >
                </div>

                <!-- Illustrator -->
                <div
                  class="group flex flex-col items-center gap-2 p-3 rounded-lg transition-all duration-300 hover:bg-gray-700/30"
                >
                  <div
                    class="h-12 w-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center group-hover:drop-shadow-[0_0_15px_rgba(234,166,77,0.4)] transition-all duration-200 group-hover:scale-110"
                  >
                    <span class="text-white font-bold text-lg">Ai</span>
                  </div>
                  <span
                    class="text-xs text-gray-400 group-hover:text-editor transition-colors duration-200"
                    >Illustrator</span
                  >
                </div>

                <!-- Notion -->
                <div
                  class="group flex flex-col items-center gap-2 p-3 rounded-lg transition-all duration-300 hover:bg-gray-700/30"
                >
                  <div
                    class="h-12 w-12 bg-gradient-to-br from-gray-100 to-gray-300 rounded-xl flex items-center justify-center group-hover:drop-shadow-[0_0_15px_rgba(234,166,77,0.4)] transition-all duration-200 group-hover:scale-110"
                  >
                    <svg viewBox="0 0 24 24" class="h-7 w-7 text-gray-800">
                      <path
                        d="M4 4v16h16V4H4zm2 2h12v12H6V6zm2 2v8h8V8H8zm2 2h4v4h-4v-4z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <span
                    class="text-xs text-gray-400 group-hover:text-editor transition-colors duration-200"
                    >Notion</span
                  >
                </div>

                <!-- CapCut -->
                <div
                  class="group flex flex-col items-center gap-2 p-3 rounded-lg transition-all duration-300 hover:bg-gray-700/30"
                >
                  <div
                    class="h-12 w-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:drop-shadow-[0_0_15px_rgba(234,166,77,0.4)] transition-all duration-200 group-hover:scale-110"
                  >
                    <svg viewBox="0 0 24 24" class="h-7 w-7 text-white">
                      <path
                        d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17l-3-3 1.5-1.5L9 14l6-6L16.5 9.5 9 17z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <span
                    class="text-xs text-gray-400 group-hover:text-editor transition-colors duration-200"
                    >CapCut</span
                  >
                </div>

                <!-- DaVinci Resolve -->
                <div
                  class="group flex flex-col items-center gap-2 p-3 rounded-lg transition-all duration-300 hover:bg-gray-700/30"
                >
                  <div
                    class="h-12 w-12 bg-gradient-to-br from-red-600 to-orange-500 rounded-xl flex items-center justify-center group-hover:drop-shadow-[0_0_15px_rgba(234,166,77,0.4)] transition-all duration-200 group-hover:scale-110"
                  >
                    <svg viewBox="0 0 24 24" class="h-7 w-7 text-white">
                      <path
                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <span
                    class="text-xs text-gray-400 group-hover:text-editor transition-colors duration-200"
                    >DaVinci</span
                  >
                </div>
              </div>
            </div>
          </tab-panel>
        </tab-panels>
      </tabs>
    </template>
  </card>
</template>

<style scoped>
.card-container:hover {
  box-shadow: 0 0 30px #eaa64d30;
}

@keyframes tab-content-enter {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.custom-tabs >>> .p-tabpanels .p-tabpanel {
  animation: tab-content-enter 0.5s ease-out;
}

.custom-tabs >>> .p-tablist {
  background: transparent;
  border: none;
}

.custom-tabs >>> .p-tab {
  background: transparent !important;
  color: #a0aec0 !important; /* gray-500 */
  transition:
    color 0.3s,
    border-color 0.3s;
}

.custom-tabs >>> .p-tab[data-active='true'] {
  color: #eaa64d !important; /* editor color */
}

.custom-tabs >>> .p-tab:hover {
  color: #eaa64d !important; /* editor color */
}

.custom-tabs >>> .p-tablist .p-ink-bar {
  background-color: #eaa64d !important; /* editor color */
  height: 3px;
}

.custom-tabs >>> .p-tabpanels {
  background: transparent;
}
div .p-tablist-tab-list {
  display: flex !important;
  justify-content: center !important;
  align-content: center !important;
}
</style>
