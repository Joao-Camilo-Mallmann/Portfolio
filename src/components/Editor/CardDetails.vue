<script setup>
import { useI18n } from '@/composables/useI18n'
import { computed } from 'vue'

const { t } = useI18n()

const skills = computed(() => [
  { icon: 'pi pi-video', text: t('editorCard.skillEditing') },
  { icon: 'pi pi-palette', text: t('editorCard.skillColorGrading') },
  { icon: 'pi pi-book', text: t('editorCard.skillStorytelling') },
  { icon: 'pi pi-chart-line', text: t('editorCard.skillRetention') },
  { icon: 'pi pi-megaphone', text: t('editorCard.skillStrategy') },
  { icon: 'pi pi-briefcase', text: t('editorCard.skillExperience') },
])

const tools = [
  { short: 'HK', name: 'Hook Forte (3s)', gradient: 'from-amber-500 to-orange-600' },
  { short: 'RT', name: 'Ritmo de Corte', gradient: 'from-indigo-600 to-blue-700' },
  { short: 'NA', name: 'Narrativa Clara', gradient: 'from-violet-700 to-indigo-800' },
  { short: 'SD', name: 'Sound Design', gradient: 'from-emerald-600 to-teal-700' },
  { short: 'CG', name: 'Color Grading', gradient: 'from-cyan-600 to-blue-700' },
  { short: 'TH', name: 'Thumbnail de Impacto', gradient: 'from-rose-500 to-red-600' },
]
</script>

<template>
  <div
    class="rounded-2xl border border-border bg-surface-100/35 shadow-sm ring-1 ring-inset ring-white/5"
  >
    <div class="space-y-6 p-6 md:p-8">
      <section class="rounded-xl border border-border/70 bg-black/15 p-5">
        <h3 class="mb-3 text-xl font-bold tracking-wide text-fg text-balance md:text-2xl">
          {{ t('editorCard.aboutTitle') }}
        </h3>
        <p class="text-pretty leading-relaxed tracking-wide text-fg-muted">
          {{ t('editorCard.aboutDescription') }}
        </p>
        <div class="mt-5 rounded-xl border border-editor/25 bg-editor/10 p-4">
          <p class="text-sm tracking-wide text-fg-muted md:text-base">
            {{ t('editorCard.aboutLead') }}
            <span class="font-semibold text-editor">{{ t('editorCard.aboutLeadHighlight') }}</span>
          </p>
        </div>
      </section>

      <section class="rounded-xl border border-border/70 bg-black/15 p-5">
        <div class="mb-4 flex items-center gap-2 text-fg">
          <i class="pi pi-sparkles text-editor"></i>
          <h4 class="font-semibold tracking-wide">{{ t('editorCard.tabSkills') }}</h4>
        </div>

        <div class="grid gap-3 sm:grid-cols-2">
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
      </section>

      <section class="rounded-xl border border-border/70 bg-black/15 p-5">
        <div class="mb-4 flex items-center gap-2 text-fg">
          <i class="pi pi-desktop text-editor"></i>
          <h4 class="font-semibold tracking-wide">{{ t('editorCard.tabTools') }}</h4>
        </div>

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
            >
              {{ tool.name }}
            </span>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
