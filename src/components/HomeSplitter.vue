<script>
export default {
  data() {
    return {
      selectedPanel: null,
      isAnimating: false,
      urlDevImg:
        'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=crop',
      urlEditorImg:
        'https://images.unsplash.com/photo-1574717025058-2f8737d2e2b7?q=80&w=687&auto=format&fit=crop',
    }
  },
  methods: {
    selectProfile(profile, path) {
      if (this.isAnimating) return
      this.isAnimating = true
      this.selectedPanel = profile

      // Aguarda a animação de expansão antes de navegar
      setTimeout(() => {
        this.$router.push(path)
      }, 800) // Tempo da animação de expansão
    },
  },
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

<style lang="css">
.splitter-container {
  width: 100%;
  animation: fadeIn 1s ease-out;
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
  transition:
    box-shadow 0.4s ease,
    border-color 0.4s ease;
  border: 2px solid transparent;
}

.profile-panel:hover {
  opacity: 0.75;
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
  transition: transform 0.8s cubic-bezier(0.165, 0.84, 0.44, 1);
  z-index: 0;
}

.profile-panel:hover .panel-bg-image {
  transform: scale(1.05);
}

.profile-panel::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.2) 100%);
  z-index: 1;
  transition: background 0.5s ease;
}

.dev-panel:hover::before {
  background: linear-gradient(0deg, rgba(77, 145, 234, 0.7) 0%, rgba(0, 0, 0, 0.1) 100%);
}

.editor-panel:hover::before {
  background: linear-gradient(0deg, rgba(234, 166, 77, 0.7) 0%, rgba(0, 0, 0, 0.1) 100%);
}

.panel-content {
  position: relative;
  z-index: 2;
  text-align: center;
  color: #fff;
  padding: 2rem;
  transition: transform 0.5s ease;
  text-shadow: 0px 2px 10px rgba(0, 0, 0, 0.7);
}

.profile-panel:hover .panel-content {
  transform: translateY(-10px);
}

.panel-action {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1.2rem;
  font-size: 1.1rem;
  font-weight: 500;
  transition: color 0.3s;
}

.action-arrow {
  transition: transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.profile-panel:hover .action-arrow {
  transform: translateX(8px);
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

/* Animações de expansão */
.profile-splitter.animating {
  overflow: hidden;
}

.panel-expanding {
  animation: expandPanel 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
  z-index: 10 !important;
}

.panel-shrinking {
  animation: shrinkPanel 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
  z-index: 1 !important;
}

@keyframes expandPanel {
  0% {
    flex: 1;
    transform: scale(1);
  }
  30% {
    flex: 1.5;
    transform: scale(1.02);
  }
  70% {
    flex: 3;
    transform: scale(1.05);
  }
  100% {
    flex: 10;
    transform: scale(1.1);
    width: 100%;
  }
}

@keyframes shrinkPanel {
  0% {
    flex: 1;
    opacity: 1;
    transform: scale(1);
    width: 50%;
  }
  30% {
    flex: 0.5;
    opacity: 0.5;
    transform: scale(0.95);
    width: 30%;
  }
  70% {
    flex: 0.1;
    opacity: 0.2;
    transform: scale(0.9);
    width: 10%;
  }
  100% {
    flex: 0;
    opacity: 0;
    transform: scale(0.8);
    width: 0%;
    display: none;
  }
}

.panel-expanding .panel-content {
  animation: contentExpand 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
}

.panel-shrinking .panel-content {
  animation: contentShrink 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
}

@keyframes contentExpand {
  0% {
    transform: translateY(0) scale(1);
    opacity: 1;
  }
  40% {
    transform: translateY(-15px) scale(1.05);
    opacity: 0.95;
  }
  80% {
    transform: translateY(-25px) scale(1.15);
    opacity: 1;
  }
  100% {
    transform: translateY(-30px) scale(1.2);
    opacity: 1;
  }
}

@keyframes contentShrink {
  0% {
    transform: translateY(0) scale(1);
    opacity: 1;
  }
  50% {
    transform: translateY(10px) scale(0.9);
    opacity: 0.3;
  }
  100% {
    transform: translateY(20px) scale(0.7);
    opacity: 0;
  }
}

.panel-expanding .panel-bg-image {
  animation: bgExpand 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
}

.panel-shrinking .panel-bg-image {
  animation: bgShrink 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
}

@keyframes bgExpand {
  0% {
    transform: scale(1);
    filter: brightness(1);
  }
  50% {
    transform: scale(1.05);
    filter: brightness(1.1);
  }
  100% {
    transform: scale(1.15);
    filter: brightness(1.3);
  }
}

@keyframes bgShrink {
  0% {
    transform: scale(1);
    filter: brightness(1);
    opacity: 1;
  }
  100% {
    transform: scale(0.8);
    filter: brightness(0.5);
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

  /* Animações simplificadas para mobile */
  .panel-expanding {
    animation: expandPanelMobile 0.6s ease-out forwards;
  }

  .panel-shrinking {
    animation: shrinkPanelMobile 0.6s ease-out forwards;
  }

  @keyframes expandPanelMobile {
    0% {
      transform: scale(1);
      opacity: 1;
      height: 50vh;
    }
    50% {
      transform: scale(1.02);
      opacity: 1;
      height: 70vh;
    }
    100% {
      transform: scale(1.05);
      opacity: 1;
      height: 100vh;
    }
  }

  @keyframes shrinkPanelMobile {
    0% {
      transform: scale(1);
      opacity: 1;
      height: 50vh;
    }
    50% {
      transform: scale(0.98);
      opacity: 0.5;
      height: 20vh;
    }
    100% {
      transform: scale(0.95);
      opacity: 0;
      height: 0vh;
      display: none;
    }
  }

  .panel-expanding .panel-content {
    animation: contentExpandMobile 0.6s ease-out forwards;
  }

  .panel-shrinking .panel-content {
    animation: contentShrinkMobile 0.6s ease-out forwards;
  }

  @keyframes contentExpandMobile {
    0% {
      transform: scale(1);
      opacity: 1;
    }
    100% {
      transform: scale(1.1);
      opacity: 1;
    }
  }

  @keyframes contentShrinkMobile {
    0% {
      transform: scale(1);
      opacity: 1;
    }
    100% {
      transform: scale(0.8);
      opacity: 0;
    }
  }
}
</style>
