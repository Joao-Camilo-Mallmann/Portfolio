<script setup>
import { useI18n } from '@/composables/useI18n'
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'

const { t } = useI18n()
const router = useRouter()

const isLoaded = ref(false)
const selectedPanel = ref(null)
const hoveredPanel = ref(null)

const urlDevImg =
  'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=crop'
const urlEditorImg =
  'https://images.unsplash.com/photo-1574717025058-2f8737d2e2b7?q=80&w=687&auto=format&fit=crop'

onMounted(() => {
  setTimeout(() => {
    isLoaded.value = true
  }, 80)
})

const selectProfile = (profile, path) => {
  if (selectedPanel.value) return
  hoveredPanel.value = null
  selectedPanel.value = profile
  setTimeout(() => {
    router.push(path)
  }, 880)
}
</script>

<template>
  <div class="splitter-container">
    <div
      :class="[
        'profile-splitter',
        {
          loaded: isLoaded,
          'hovered-dev': hoveredPanel === 'dev',
          'hovered-editor': hoveredPanel === 'editor',
        },
      ]"
    >
      <!-- Dev Panel -->
      <div
        :class="[
          'profile-panel dev-panel',
          {
            selected: selectedPanel === 'dev',
            dismissed: selectedPanel !== null && selectedPanel !== 'dev',
          },
        ]"
        @click="selectProfile('dev', '/dev')"
        @mouseenter="hoveredPanel = 'dev'"
        @mouseleave="hoveredPanel = null"
      >
        <div class="panel-bg-image" :style="{ backgroundImage: `url('${urlDevImg}')` }"></div>
        <div class="panel-shine"></div>
        <div class="panel-content">
          <div class="panel-icon-wrapper">
            <i class="pi pi-code panel-icon"></i>
          </div>
          <h2 class="panel-title text-balance">{{ t('splitter.devTitle') }}</h2>
          <p class="panel-description text-pretty">{{ t('splitter.devDescription') }}</p>
          <div class="panel-action">
            <span class="action-text">{{ t('splitter.devAction') }}</span>
            <i class="pi pi-arrow-right action-arrow"></i>
          </div>
        </div>
        <div class="panel-click-flash"></div>
      </div>

      <!-- Glowing center divider -->
      <div
        :class="[
          'panels-divider',
          {
            hidden: selectedPanel !== null,
            lifted: hoveredPanel !== null && selectedPanel === null,
          },
        ]"
      ></div>

      <!-- Editor Panel -->
      <div
        :class="[
          'profile-panel editor-panel',
          {
            selected: selectedPanel === 'editor',
            dismissed: selectedPanel !== null && selectedPanel !== 'editor',
          },
        ]"
        @click="selectProfile('editor', '/editor')"
        @mouseenter="hoveredPanel = 'editor'"
        @mouseleave="hoveredPanel = null"
      >
        <div class="panel-bg-image" :style="{ backgroundImage: `url('${urlEditorImg}')` }"></div>
        <div class="panel-shine"></div>
        <div class="panel-content">
          <div class="panel-icon-wrapper">
            <i class="pi pi-video panel-icon"></i>
          </div>
          <h2 class="panel-title text-balance">{{ t('splitter.editorTitle') }}</h2>
          <p class="panel-description text-pretty">{{ t('splitter.editorDescription') }}</p>
          <div class="panel-action">
            <span class="action-text">{{ t('splitter.editorAction') }}</span>
            <i class="pi pi-arrow-right action-arrow"></i>
          </div>
        </div>
        <div class="panel-click-flash"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* ===== Keyframes ===== */
@keyframes slideInLeft {
  from {
    transform: translateX(-90px) scale(0.97);
    opacity: 0;
  }
  to {
    transform: translateX(0) scale(1);
    opacity: 1;
  }
}

@keyframes slideInRight {
  from {
    transform: translateX(90px) scale(0.97);
    opacity: 0;
  }
  to {
    transform: translateX(0) scale(1);
    opacity: 1;
  }
}

@keyframes slideInTop {
  from {
    transform: translateY(-70px) scale(0.97);
    opacity: 0;
  }
  to {
    transform: translateY(0) scale(1);
    opacity: 1;
  }
}

@keyframes slideInBottom {
  from {
    transform: translateY(70px) scale(0.97);
    opacity: 0;
  }
  to {
    transform: translateY(0) scale(1);
    opacity: 1;
  }
}

@keyframes contentReveal {
  from {
    opacity: 0;
    transform: translateY(22px);
    filter: blur(8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
    filter: blur(0);
  }
}

@keyframes titleReveal {
  from {
    opacity: 0;
    letter-spacing: 0.3em;
    transform: translateY(12px);
  }
  to {
    opacity: 1;
    letter-spacing: inherit;
    transform: translateY(0);
  }
}

@keyframes iconFloat {
  0%,
  100% {
    transform: translateY(0) scale(1);
  }
  50% {
    transform: translateY(-8px) scale(1.07);
  }
}

@keyframes dividerGlow {
  0%,
  100% {
    opacity: 0.4;
  }
  50% {
    opacity: 0.9;
  }
}

@keyframes flashBloom {
  0% {
    opacity: 0.6;
    transform: translate(-50%, -50%) scale(0);
  }
  100% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(1.8);
  }
}

/* ===== Container ===== */
.splitter-container {
  width: 100%;
}

.profile-splitter {
  height: 65vh;
  display: flex;
  flex-direction: row;
  overflow: hidden;
  position: relative;
  width: 100%;
}

/* ===== Panels ===== */
.profile-panel {
  flex: 1 1 50%;
  min-width: 0;
  min-height: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition:
    flex-basis 0.72s cubic-bezier(0.4, 0, 0.2, 1),
    flex-grow 0.72s cubic-bezier(0.4, 0, 0.2, 1),
    opacity 0.5s ease-out,
    filter 0.55s ease-out;
  backface-visibility: hidden;
  -webkit-font-smoothing: antialiased;
}

/* Entrance: hidden before loaded */
.profile-splitter:not(.loaded) .profile-panel {
  opacity: 0;
}

/* Entrance animations */
.profile-splitter.loaded .dev-panel {
  animation: slideInLeft 1.05s cubic-bezier(0.16, 1, 0.3, 1) both;
}

.profile-splitter.loaded .editor-panel {
  animation: slideInRight 1.05s cubic-bezier(0.16, 1, 0.3, 1) 0.1s both;
}

/* Competitive hover — hovered grows, other shrinks */
.hovered-dev .dev-panel {
  flex-basis: 63%;
}
.hovered-dev .editor-panel {
  flex-basis: 37%;
}
.hovered-editor .editor-panel {
  flex-basis: 63%;
}
.hovered-editor .dev-panel {
  flex-basis: 37%;
}

/* Selected & dismissed */
.profile-panel.selected {
  flex: 1 1 100%;
  pointer-events: none;
}

.profile-panel.dismissed {
  flex: 0 0 0%;
  opacity: 0;
  filter: blur(12px);
  pointer-events: none;
}

/* ===== Background image ===== */
.panel-bg-image {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  transition: transform 1s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 0;
  will-change: transform;
}

.profile-panel:hover .panel-bg-image {
  transform: scale(1.07);
}
.profile-panel.selected .panel-bg-image {
  transform: scale(1.13);
}

/* ===== Dark gradient overlay (::before) ===== */
.profile-panel::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.9) 0%,
    rgba(0, 0, 0, 0.25) 60%,
    rgba(0, 0, 0, 0.05) 100%
  );
  z-index: 1;
  transition: opacity 0.6s ease-out;
}

.profile-panel:hover::before {
  opacity: 0.75;
}

/* ===== Color overlay (::after) ===== */
.dev-panel::after,
.editor-panel::after {
  content: '';
  position: absolute;
  inset: 0;
  z-index: 1;
  opacity: 0;
  transition: opacity 0.75s ease-out;
}

.dev-panel::after {
  background: radial-gradient(
    ellipse at 50% 115%,
    color-mix(in srgb, var(--color-dev) 70%, transparent) 0%,
    transparent 62%
  );
}

.editor-panel::after {
  background: radial-gradient(
    ellipse at 50% 115%,
    color-mix(in srgb, var(--color-editor) 70%, transparent) 0%,
    transparent 62%
  );
}

.dev-panel:hover::after,
.dev-panel.selected::after,
.editor-panel:hover::after,
.editor-panel.selected::after {
  opacity: 1;
}

/* ===== Diagonal shine sweep ===== */
.panel-shine {
  position: absolute;
  inset: 0;
  z-index: 2;
  background: linear-gradient(
    108deg,
    transparent 33%,
    rgba(255, 255, 255, 0.1) 50%,
    transparent 67%
  );
  transform: translateX(-160%);
  transition: transform 1s cubic-bezier(0.4, 0, 0.2, 1);
  pointer-events: none;
}

.profile-panel:hover .panel-shine {
  transform: translateX(210%);
}

/* ===== Click bloom ===== */
.panel-click-flash {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 220%;
  aspect-ratio: 1;
  transform: translate(-50%, -50%) scale(0);
  z-index: 3;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.5) 0%, transparent 60%);
  pointer-events: none;
  opacity: 0;
}

.profile-panel.selected .panel-click-flash {
  animation: flashBloom 0.75s cubic-bezier(0.4, 0, 0.6, 1) forwards;
}

/* ===== Panel content ===== */
.panel-content {
  position: relative;
  z-index: 4;
  text-align: center;
  color: #fff;
  padding: 2rem;
  text-shadow: 0 2px 16px rgba(0, 0, 0, 0.9);
  backface-visibility: hidden;
  transition: transform 0.65s cubic-bezier(0.16, 1, 0.3, 1);
}

.profile-panel:hover .panel-content {
  transform: translateY(-12px);
}
.profile-panel.selected .panel-content {
  transform: translateY(-12px) scale(1.05);
}

/* Staggered entrance for dev panel */
.profile-splitter.loaded .dev-panel .panel-icon-wrapper {
  animation: contentReveal 0.75s cubic-bezier(0.16, 1, 0.3, 1) 0.5s both;
}
.profile-splitter.loaded .dev-panel .panel-title {
  animation: titleReveal 0.75s cubic-bezier(0.16, 1, 0.3, 1) 0.65s both;
}
.profile-splitter.loaded .dev-panel .panel-description {
  animation: contentReveal 0.75s cubic-bezier(0.16, 1, 0.3, 1) 0.8s both;
}
.profile-splitter.loaded .dev-panel .panel-action {
  animation: contentReveal 0.75s cubic-bezier(0.16, 1, 0.3, 1) 0.95s both;
}

/* Staggered entrance for editor panel (offset by 0.12s) */
.profile-splitter.loaded .editor-panel .panel-icon-wrapper {
  animation: contentReveal 0.75s cubic-bezier(0.16, 1, 0.3, 1) 0.62s both;
}
.profile-splitter.loaded .editor-panel .panel-title {
  animation: titleReveal 0.75s cubic-bezier(0.16, 1, 0.3, 1) 0.77s both;
}
.profile-splitter.loaded .editor-panel .panel-description {
  animation: contentReveal 0.75s cubic-bezier(0.16, 1, 0.3, 1) 0.92s both;
}
.profile-splitter.loaded .editor-panel .panel-action {
  animation: contentReveal 0.75s cubic-bezier(0.16, 1, 0.3, 1) 1.07s both;
}

/* ===== Icon ===== */
.panel-icon-wrapper {
  display: inline-block;
  margin-bottom: 1.5rem;
}

.panel-icon {
  font-size: 4rem;
  display: block;
  transition:
    color 0.45s ease,
    filter 0.45s ease;
}

.dev-panel:hover .panel-icon {
  color: var(--color-dev);
  filter: drop-shadow(0 0 16px color-mix(in srgb, var(--color-dev) 85%, transparent));
  animation: iconFloat 2.5s ease-in-out infinite;
}

.editor-panel:hover .panel-icon {
  color: var(--color-editor);
  filter: drop-shadow(0 0 16px color-mix(in srgb, var(--color-editor) 85%, transparent));
  animation: iconFloat 2.5s ease-in-out infinite;
}

/* ===== Title ===== */
.panel-title {
  font-size: 2.25rem;
  font-weight: 700;
  margin-bottom: 1rem;
  transition:
    text-shadow 0.45s ease,
    letter-spacing 0.45s ease;
}

.dev-panel:hover .panel-title {
  text-shadow: 0 0 36px color-mix(in srgb, var(--color-dev) 80%, transparent);
  letter-spacing: 0.03em;
}

.editor-panel:hover .panel-title {
  text-shadow: 0 0 36px color-mix(in srgb, var(--color-editor) 80%, transparent);
  letter-spacing: 0.03em;
}

/* ===== Description ===== */
.panel-description {
  font-size: 1.1rem;
  max-width: 350px;
  line-height: 1.6;
  opacity: 0.88;
  transition: opacity 0.4s ease;
}

.profile-panel:hover .panel-description {
  opacity: 1;
}

/* ===== Action ===== */
.panel-action {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1.2rem;
  font-size: 1.1rem;
  font-weight: 500;
}

.action-arrow {
  transition: transform 0.55s cubic-bezier(0.16, 1, 0.3, 1);
  display: inline-block;
}

.profile-panel:hover .action-arrow {
  transform: translateX(9px);
}

/* ===== Center glowing divider ===== */
.panels-divider {
  position: absolute;
  left: 50%;
  top: 6%;
  bottom: 6%;
  width: 1px;
  transform: translateX(-50%);
  background: linear-gradient(
    180deg,
    transparent 0%,
    rgba(255, 255, 255, 0.32) 25%,
    rgba(255, 255, 255, 0.65) 50%,
    rgba(255, 255, 255, 0.32) 75%,
    transparent 100%
  );
  box-shadow: 0 0 10px 2px rgba(255, 255, 255, 0.12);
  z-index: 5;
  pointer-events: none;
  animation: dividerGlow 3.5s ease-in-out infinite;
  transition:
    opacity 0.45s ease,
    left 0.72s cubic-bezier(0.4, 0, 0.2, 1),
    transform 0.55s cubic-bezier(0.16, 1, 0.3, 1);
}

.panels-divider.hidden {
  opacity: 0;
}
.panels-divider.lifted {
  transform: translateX(-50%) translateY(-12px);
}
.hovered-dev .panels-divider {
  left: 63%;
  opacity: 0.45;
}
.hovered-editor .panels-divider {
  left: 37%;
  opacity: 0.45;
}

/* ===== Mobile ===== */
@media (max-width: 768px) {
  .profile-splitter {
    height: 65vh;
    flex-direction: column;
  }

  .profile-splitter.loaded .dev-panel {
    animation: slideInTop 1.05s cubic-bezier(0.16, 1, 0.3, 1) both;
  }

  .profile-splitter.loaded .editor-panel {
    animation: slideInBottom 1.05s cubic-bezier(0.16, 1, 0.3, 1) 0.1s both;
  }

  /* Disable competitive hover sizing on touch */
  .hovered-dev .dev-panel,
  .hovered-dev .editor-panel,
  .hovered-editor .editor-panel,
  .hovered-editor .dev-panel {
    flex-basis: 50%;
  }

  /* Horizontal divider on mobile */
  .panels-divider {
    left: 6%;
    right: 6%;
    top: 50%;
    bottom: auto;
    width: auto;
    height: 1px;
    transform: translateY(-50%);
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(255, 255, 255, 0.32) 25%,
      rgba(255, 255, 255, 0.65) 50%,
      rgba(255, 255, 255, 0.32) 75%,
      transparent 100%
    );
  }

  .panel-content {
    padding: 1.5rem 1rem;
  }

  .panel-icon {
    font-size: 2.5rem;
  }

  .panel-title {
    font-size: 1.5rem;
    margin-bottom: 0.8rem;
    line-height: 1.2;
  }

  .panel-description {
    font-size: 0.9rem;
    max-width: 100%;
    line-height: 1.4;
  }

  .panel-action {
    font-size: 0.9rem;
    margin-top: 1rem;
    gap: 0.3rem;
  }

  /* Disable hover effects on touch */
  .profile-panel:hover .panel-content {
    transform: none;
  }
  .profile-panel:hover .panel-bg-image {
    transform: none;
  }
  .profile-panel:hover .action-arrow {
    transform: none;
  }
  .profile-panel:hover .panel-shine {
    transform: translateX(-160%);
  }
  .dev-panel:hover .panel-icon,
  .editor-panel:hover .panel-icon {
    animation: none;
  }
}
</style>
