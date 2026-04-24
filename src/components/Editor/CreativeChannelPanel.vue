<script setup>
import { useI18n } from '@/composables/useI18n'
import { ref } from 'vue'

const { t } = useI18n()

const youtubeOFurryLink = ref(
  'https://yt3.googleusercontent.com/gnIEqwR1vmWB45wdNA45xHpRYaE0XiJUYihwt3aCI2A4TWG4jusXHKOLVi9WDr3rcJ1P5GlHcw=s160-c-k-c0x00ffffff-no-rj',
)

const openChannel = () => {
  window.open('https://www.youtube.com/@OFurryOficial', '_blank')
}
</script>

<template>
  <div class="relative mx-4 mb-8">
    <!-- Heading -->
    <div class="mb-8 text-center">
      <h2
        v-motion
        :initial="{ opacity: 0, x: -40 }"
        :visible-once="{
          opacity: 1,
          x: 0,
          transition: { type: 'spring', stiffness: 150, damping: 15 },
        }"
      >
        <span class="tracking-wide text-editor drop-shadow-sm">
          {{ t('editorCreative.title') }}
        </span>
      </h2>
      <p
        v-motion
        :initial="{ opacity: 0, y: 10 }"
        :visible-once="{
          opacity: 1,
          y: 0,
          transition: { type: 'spring', stiffness: 150, damping: 15, delay: 100 },
        }"
        class="mt-2 text-base font-medium tracking-wide text-fg-muted md:text-lg"
      >
        {{ t('editorCreative.subtitle') }}
        <span class="font-bold text-editor">{{ t('editorCreative.subtitleHighlight') }}</span>
        {{ t('editorCreative.subtitleEnd') }}
      </p>
    </div>

    <!-- Card -->
    <div
      v-motion
      :initial="{ opacity: 0, y: 24, scale: 0.97 }"
      :visible-once="{
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { type: 'spring', stiffness: 160, damping: 16, delay: 150 },
      }"
      class="channel-card group relative mx-auto max-w-4xl cursor-pointer overflow-hidden rounded-2xl border border-editor/30 bg-surface-100/35 ring-1 ring-inset ring-white/5 transition-[border-color,box-shadow] duration-500 hover:border-editor/60 hover:shadow-[0_0_48px_-8px_var(--color-editor)]"
      @click="openChannel"
    >
      <!-- Glow orbs — CSS loop -->
      <div
        class="glow-orb pointer-events-none absolute -left-10 -top-10 h-48 w-48 rounded-full bg-editor/15 blur-3xl"
        aria-hidden="true"
      />
      <div
        class="glow-orb-right pointer-events-none absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-editor/10 blur-2xl"
        aria-hidden="true"
      />

      <!-- Shimmer border sweep — CSS loop -->
      <div class="shimmer-border pointer-events-none absolute inset-0 rounded-2xl" aria-hidden="true" />

      <!-- Content -->
      <div class="relative z-10 flex flex-col items-center gap-6 p-8 md:flex-row">
        <!-- Avatar + pulse rings -->
        <div class="relative shrink-0">
          <div class="avatar-pulse absolute inset-0 rounded-full border-2 border-editor/40" />
          <div class="avatar-pulse-delay absolute inset-0 rounded-full border border-editor/20" />
          <div class="rounded-full border-2 border-editor/50 p-1.5 shadow-[0_0_20px_-4px_var(--color-editor)] transition-shadow duration-500 group-hover:shadow-[0_0_32px_-4px_var(--color-editor)]">
            <img
              :src="youtubeOFurryLink"
              :alt="t('editorCreative.channelAlt')"
              class="h-24 w-24 rounded-full object-cover"
            />
          </div>
        </div>

        <!-- Info -->
        <div class="flex flex-1 flex-col items-center gap-3 text-center md:items-start md:text-left">
          <p class="text-pretty text-sm leading-relaxed tracking-wide text-fg-muted md:text-base">
            {{ t('editorCreative.channelDescription') }}
            <span class="font-semibold text-editor">{{ t('editorCreative.channelHighlight') }}</span>
            {{ t('editorCreative.channelEnd') }}
          </p>

          <!-- CTA pill -->
          <span
            v-motion
            :initial="{ opacity: 0, scale: 0.85 }"
            :visible-once="{
              opacity: 1,
              scale: 1,
              transition: { type: 'spring', stiffness: 280, damping: 14, delay: 280 },
            }"
            class="inline-flex items-center gap-2 rounded-full border border-editor/40 bg-editor/15 px-4 py-1.5 text-sm font-semibold text-editor transition-colors duration-300 group-hover:border-editor/70 group-hover:bg-editor/25"
          >
            <i class="pi pi-youtube" />
            {{ t('editorCreative.exploreChannel') }}
            <i class="pi pi-arrow-right text-[10px]" />
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Glow orb float */
.glow-orb {
  animation: orb-float 5s ease-in-out infinite alternate;
}
.glow-orb-right {
  animation: orb-float 7s ease-in-out infinite alternate-reverse;
}
@keyframes orb-float {
  from { transform: translate(0, 0) scale(1); opacity: 0.7; }
  to   { transform: translate(12px, 16px) scale(1.15); opacity: 1; }
}

/* Avatar pulse rings */
.avatar-pulse {
  animation: ring-pulse 2.8s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
.avatar-pulse-delay {
  animation: ring-pulse 2.8s cubic-bezier(0.4, 0, 0.6, 1) 1.4s infinite;
}
@keyframes ring-pulse {
  0%   { transform: scale(1); opacity: 0.7; }
  70%  { transform: scale(1.55); opacity: 0; }
  100% { transform: scale(1.55); opacity: 0; }
}

/* Shimmer border sweep */
.shimmer-border::before {
  content: '';
  position: absolute;
  inset: -1px;
  border-radius: inherit;
  background: conic-gradient(
    from 0deg,
    transparent 0%,
    transparent 30%,
    var(--color-editor) 50%,
    transparent 70%,
    transparent 100%
  );
  opacity: 0.25;
  animation: border-spin 4s linear infinite;
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
  -webkit-mask-composite: xor;
  padding: 1px;
}
@keyframes border-spin {
  to { transform: rotate(360deg); }
}

@media (prefers-reduced-motion: reduce) {
  .glow-orb,
  .glow-orb-right,
  .avatar-pulse,
  .avatar-pulse-delay,
  .shimmer-border::before {
    animation: none;
  }
}
</style>
