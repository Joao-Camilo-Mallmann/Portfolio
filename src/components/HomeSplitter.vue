<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const selectedPanel = ref(null)
const isAnimating = ref(false)
const urlDevImg = ref(
  'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=crop',
)
const urlEditorImg = ref(
  'https://images.unsplash.com/photo-1574717025058-2f8737d2e2b7?q=80&w=687&auto=format&fit=crop',
)

const selectProfile = (profile, path) => {
  if (isAnimating.value) return
  isAnimating.value = true
  selectedPanel.value = profile

  // Aguarda a animação de expansão antes de navegar
  setTimeout(() => {
    router.push(path)
  }, 1000) // Tempo sincronizado com animação otimizada
}
</script>

<template>
  <div class="splitter-container">
    <splitter class="profile-splitter component" :class="{ animating: isAnimating }">
      <splitterpanel
        :class="[
          'profile-panel',
          'dev-panel',
          {
            selected: selectedPanel === 'dev',
            'panel-expanding': selectedPanel === 'dev' && isAnimating,
            'panel-shrinking': selectedPanel === 'editor' && isAnimating,
          },
        ]"
        @click="selectProfile('dev', '/dev')"
      >
        <div class="panel-bg-image" :style="{ backgroundImage: `url('${urlDevImg}')` }"></div>
        <div class="panel-content">
          <i class="pi pi-code panel-icon"></i>
          <h2 class="panel-title">Desenvolvedor</h2>
          <p class="panel-description">
            Projetos de desenvolvimento web, apps e automações. Explore meu portfólio como DEV!
          </p>
          <div class="panel-action">
            <span class="action-text">Clique para ver perfil</span>
            <i class="pi pi-arrow-right action-arrow"></i>
          </div>
        </div>
      </splitterpanel>
      <splitterpanel
        :class="[
          'profile-panel',
          'editor-panel',
          {
            selected: selectedPanel === 'editor',
            'panel-expanding': selectedPanel === 'editor' && isAnimating,
            'panel-shrinking': selectedPanel === 'dev' && isAnimating,
          },
        ]"
        @click="selectProfile('editor', '/editor')"
      >
        <div class="panel-bg-image" :style="{ backgroundImage: `url('${urlEditorImg}')` }"></div>
        <div class="panel-content">
          <i class="pi pi-video panel-icon"></i>
          <h2 class="panel-title">Editor de Vídeo</h2>
          <p class="panel-description">
            Criação audiovisual profissional com Adobe Premiere Pro, Photoshop e After Effects.
            Vídeos e conteúdo para redes sociais
          </p>
          <div class="panel-action">
            <span class="action-text">Clique para ver portfólio</span>
            <i class="pi pi-arrow-right action-arrow"></i>
          </div>
        </div>
      </splitterpanel>
    </splitter>
  </div>
</template>

<style scoped>
.splitter-container {
  width: 100%;
  animation: fadeIn 1.2s cubic-bezier(0.16, 1, 0.3, 1);
}

.profile-splitter {
  height: 65vh;
  border: none;
  background-color: transparent;
  overflow: hidden;
  border-radius: 0 !important;
}

.profile-panel {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: opacity 0.5s ease-out;
  border: 2px solid transparent;
  backface-visibility: hidden;
  -webkit-font-smoothing: antialiased;
}

.profile-panel:hover {
  opacity: 0.92;
  z-index: 2;
}

.panel-bg-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  transition: transform 0.8s ease-out;
  z-index: 0;
  backface-visibility: hidden;
  transform: translateZ(0);
}

.profile-panel:hover .panel-bg-image {
  transform: scale(1.02) translateZ(0);
}

.profile-panel::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0.15) 100%);
  z-index: 1;
  transition: opacity 0.6s ease-out;
  backface-visibility: hidden;
}

.dev-panel::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    0deg,
    rgba(77, 145, 234, 0.75) 0%,
    rgba(77, 145, 234, 0.2) 50%,
    rgba(0, 0, 0, 0.05) 100%
  );
  z-index: 1;
  opacity: 0;
  transition: opacity 0.6s ease-out;
  backface-visibility: hidden;
}

.dev-panel:hover::after {
  opacity: 1;
}

.editor-panel::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    0deg,
    rgba(234, 166, 77, 0.75) 0%,
    rgba(234, 166, 77, 0.2) 50%,
    rgba(0, 0, 0, 0.05) 100%
  );
  z-index: 1;
  opacity: 0;
  transition: opacity 0.6s ease-out;
  backface-visibility: hidden;
}

.editor-panel:hover::after {
  opacity: 1;
}

.panel-content {
  position: relative;
  z-index: 2;
  text-align: center;
  color: #fff;
  padding: 2rem;
  transition: transform 0.6s ease-out;
  text-shadow: 0px 2px 10px rgba(0, 0, 0, 0.7);
  backface-visibility: hidden;
  transform: translateZ(0);
}

.profile-panel:hover .panel-content {
  transform: translateY(-6px) translateZ(0);
}

.panel-action {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1.2rem;
  font-size: 1.1rem;
  font-weight: 500;
  transition: transform 0.5s ease-out;
}

.profile-panel:hover .panel-action {
  transform: scale(1.03);
}

.action-arrow {
  transition: transform 0.6s ease-out;
  display: inline-block;
}

.profile-panel:hover .action-arrow {
  transform: translateX(6px);
}

.panel-icon {
  font-size: 4rem;
  margin-bottom: 1.5rem;
}

.panel-title {
  font-size: 2.25rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.panel-description {
  font-size: 1.1rem;
  max-width: 350px;
  line-height: 1.6;
  opacity: 0.9;
}

.splitter-gutter {
  display: none;
}

/* Animações de expansão otimizadas para performance */
.profile-splitter.animating {
  overflow: hidden;
}

.panel-expanding {
  animation: expandPanel 1s ease-out forwards;
  z-index: 10 !important;
}

.panel-shrinking {
  animation: shrinkPanel 1s ease-out forwards;
  z-index: 1 !important;
}

@keyframes expandPanel {
  0% {
    flex: 1;
  }
  100% {
    flex: 10;
    width: 100%;
  }
}

@keyframes shrinkPanel {
  0% {
    flex: 1;
    opacity: 1;
  }
  100% {
    flex: 0;
    opacity: 0;
    width: 0%;
  }
}

.panel-expanding .panel-content {
  animation: contentExpand 1s ease-out forwards;
}

.panel-shrinking .panel-content {
  animation: contentShrink 1s ease-out forwards;
}

@keyframes contentExpand {
  0% {
    transform: translateY(0) translateZ(0);
    opacity: 1;
  }
  100% {
    transform: translateY(-15px) translateZ(0);
    opacity: 1;
  }
}

@keyframes contentShrink {
  0% {
    transform: translateY(0) translateZ(0);
    opacity: 1;
  }
  100% {
    transform: translateY(10px) translateZ(0);
    opacity: 0;
  }
}

.panel-expanding .panel-bg-image {
  animation: bgExpand 1s ease-out forwards;
}

.panel-shrinking .panel-bg-image {
  animation: bgShrink 1s ease-out forwards;
}

@keyframes bgExpand {
  0% {
    transform: scale(1) translateZ(0);
  }
  100% {
    transform: scale(1.05) translateZ(0);
  }
}

@keyframes bgShrink {
  0% {
    transform: scale(1) translateZ(0);
    opacity: 1;
  }
  100% {
    transform: scale(0.95) translateZ(0);
    opacity: 0;
  }
}

/* Mobile adjustments */
@media (max-width: 768px) {
  .profile-splitter {
    height: auto;
    min-height: 500px;
    flex-direction: column !important;
    display: flex !important;
  }

  .splitterpanel {
    min-width: 100% !important;
    width: 100% !important;
    height: 280px !important;
    display: flex !important;
    flex-direction: column !important;
    justify-content: center !important;
    align-items: center !important;
    margin-bottom: 8px !important;
  }

  .panel-content {
    padding: 1.5rem 1rem !important;
    max-width: 90% !important;
  }

  .panel-icon {
    font-size: 2.5rem !important;
    margin-bottom: 1rem !important;
  }

  .panel-title {
    font-size: 1.5rem !important;
    margin-bottom: 0.8rem !important;
    line-height: 1.2 !important;
  }

  .panel-description {
    font-size: 0.9rem !important;
    max-width: 100% !important;
    line-height: 1.4 !important;
    padding: 0 !important;
  }

  .panel-action {
    font-size: 0.9rem !important;
    margin-top: 1rem !important;
    gap: 0.3rem !important;
  }

  .panel-bg-image {
    min-height: 280px !important;
  }

  /* Disable hover effects on mobile */
  .profile-panel:hover {
    opacity: 1;
    transform: none;
  }

  .profile-panel:hover .panel-content {
    transform: none;
  }

  .profile-panel:hover .panel-bg-image {
    transform: none;
  }

  .profile-panel:hover .action-arrow {
    transform: none;
  }

  /* Animações otimizadas para mobile */
  .panel-expanding {
    animation: expandPanelMobile 0.8s ease-out forwards;
  }

  .panel-shrinking {
    animation: shrinkPanelMobile 0.8s ease-out forwards;
  }

  @keyframes expandPanelMobile {
    0% {
      transform: translateZ(0);
      opacity: 1;
      height: 50vh;
    }
    100% {
      transform: translateZ(0);
      opacity: 1;
      height: 100vh;
    }
  }

  @keyframes shrinkPanelMobile {
    0% {
      transform: translateZ(0);
      opacity: 1;
      height: 50vh;
    }
    100% {
      transform: translateZ(0);
      opacity: 0;
      height: 0vh;
    }
  }

  .panel-expanding .panel-content {
    animation: contentExpandMobile 0.8s ease-out forwards;
  }

  .panel-shrinking .panel-content {
    animation: contentShrinkMobile 0.8s ease-out forwards;
  }

  @keyframes contentExpandMobile {
    0% {
      transform: translateZ(0);
      opacity: 1;
    }
    100% {
      transform: translateZ(0);
      opacity: 1;
    }
  }

  @keyframes contentShrinkMobile {
    0% {
      transform: translateZ(0);
      opacity: 1;
    }
    100% {
      transform: translateZ(0);
      opacity: 0;
    }
  }
}
</style>
