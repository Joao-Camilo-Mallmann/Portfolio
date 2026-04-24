<script setup>
import { useI18n } from '@/composables/useI18n'
import { computed, ref } from 'vue'

const { t } = useI18n()
const activeTab = ref(0)

const skills = computed(() => [
  { icon: 'pi pi-video', text: t('editorCard.skillEditing') },
  { icon: 'pi pi-palette', text: t('editorCard.skillColorGrading') },
  { icon: 'pi pi-book', text: t('editorCard.skillStorytelling') },
  { icon: 'pi pi-chart-line', text: t('editorCard.skillRetention') },
  { icon: 'pi pi-megaphone', text: t('editorCard.skillStrategy') },
  { icon: 'pi pi-briefcase', text: t('editorCard.skillExperience') },
])

const tools = [
  { short: 'Pr', name: 'Premiere', gradient: 'from-indigo-600 to-blue-700' },
  { short: 'Ae', name: 'After Effects', gradient: 'from-violet-700 to-indigo-800' },
  { short: 'Ps', name: 'Photoshop', gradient: 'from-cyan-600 to-blue-700' },
  { short: 'Au', name: 'Audition', gradient: 'from-emerald-600 to-teal-700' },
  { short: 'Ai', name: 'Illustrator', gradient: 'from-orange-500 to-red-600' },
  { short: 'Me', name: 'Media Encoder', gradient: 'from-slate-600 to-slate-800' },
]
</script>

<template>
  <div
    class="overflow-hidden rounded-2xl border border-border bg-surface-100/35 shadow-sm ring-1 ring-inset ring-white/5 transition-opacity duration-300"
  >
    <div class="custom-tabs w-full">
      <!-- Tab List -->
      <div class="flex justify-center border-b border-border/80">
        <button
          class="flex cursor-pointer items-center border-b-2 bg-transparent px-4 py-4 font-medium transition-[color,border-color] duration-300 md:px-6"
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
          class="flex cursor-pointer items-center border-b-2 bg-transparent px-4 py-4 font-medium transition-[color,border-color] duration-300 md:px-6"
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
          class="flex cursor-pointer items-center border-b-2 bg-transparent px-4 py-4 font-medium transition-[color,border-color] duration-300 md:px-6"
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
            <div class="mx-auto max-w-2xl text-center">
              <h3 class="mb-4 text-2xl font-bold tracking-wide text-fg text-balance">
                {{ t('editorCard.aboutTitle') }}
              </h3>
              <p class="text-pretty leading-relaxed tracking-wide text-fg-muted">
                {{ t('editorCard.aboutDescription') }}
              </p>
              <div class="mt-6 rounded-xl border border-editor/25 bg-editor/10 p-4">
                <p class="text-sm tracking-wide text-fg-muted md:text-base">
                  {{ t('editorCard.aboutLead') }}
                  <span class="font-semibold text-editor">{{
                    t('editorCard.aboutLeadHighlight')
                  }}</span>
                </p>
              </div>
            </div>
          </div>

          <div v-else-if="activeTab === 1" :key="1" class="p-8">
            <div class="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              <div
                v-for="(skill, i) in skills"
                :key="skill.text"
                v-motion
                :initial="{ opacity: 0, y: 10 }"
                :visible-once="{
                  opacity: 1,
                  y: 0,
                  transition: { type: 'spring', stiffness: 220, damping: 17, delay: i * 55 },
                }"
                class="flex cursor-pointer items-center gap-2 rounded-xl border border-border bg-black/20 px-3 py-2.5 text-fg-muted transition-[transform,border-color,opacity] duration-200 hover:-translate-y-0.5 hover:border-editor/35"
                :hovered="{ opacity: 0.95 }"
                :tapped="{ opacity: 0.75 }"
              >
                <i :class="skill.icon" class="text-editor"></i>
                <span class="text-sm tracking-wide">{{ skill.text }}</span>
              </div>
            </div>
          </div>

          <div v-else-if="activeTab === 2" :key="2" class="p-8">
            <div class="grid grid-cols-2 gap-4 md:grid-cols-3">
              <div
                v-for="tool in tools"
                :key="tool.name"
                v-motion
                class="group flex cursor-pointer flex-col items-center gap-2 rounded-xl border border-transparent p-3 transition-[transform,border-color,opacity] duration-300 hover:border-border hover:ring-1 hover:ring-inset hover:ring-white/5"
                :hovered="{ opacity: 0.95, y: -2 }"
                :tapped="{ opacity: 0.75 }"
              >
                <div
                  class="flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br transition duration-200 group-hover:scale-110"
                  :class="tool.gradient"
                >
                  <span class="text-lg font-bold text-white">{{ tool.short }}</span>
                </div>
                <span
                  class="text-xs tracking-wide text-fg-muted transition-colors duration-200 group-hover:text-fg"
                  >{{ tool.name }}</span
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
  transition:
    opacity 0.3s ease-out,
    transform 0.3s ease-out;
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
