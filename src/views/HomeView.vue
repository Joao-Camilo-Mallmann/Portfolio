<template>
  <div class="splitter-container">
    <splitter class="profile-splitter component">
      <splitterpanel
        :class="['profile-panel', 'dev-panel', { selected: selectedPanel === 'dev' }]"
        @click="selectProfile('dev', '/portfolio/dev')"
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
        :class="['profile-panel', 'editor-panel', { selected: selectedPanel === 'editor' }]"
        @click="selectProfile('editor', '/portfolio/editor')"
      >
        <div class="panel-bg-image" :style="{ backgroundImage: `url('${urlEditorImg}')` }"></div>
        <div class="panel-content">
          <i class="pi pi-video panel-icon"></i>
          <h2 class="panel-title">Editor de Vídeo</h2>
          <p class="panel-description">
            Trabalhos com edição de vídeo, motion design e produção. Veja meu portfólio de Editor!
          </p>
          <div class="panel-action">
            <span class="action-text">Clique para ver perfil</span>
            <i class="pi pi-arrow-right action-arrow"></i>
          </div>
        </div>
      </splitterpanel>
    </splitter>
  </div>

  <div class="profile-photo-container" ref="profilePhoto">
    <img
      src="https://randomuser.me/api/portraits/men/32.jpg"
      alt="Minha foto"
      class="profile-photo"
    />
  </div>
  <div class="introduction-section mt-6 text-center" ref="introSection">
    <h3 class="intro-title">Sobre Mim</h3>
    <p class="intro-text pb-5">
      Olá! Sou <strong>João Camilo Mallmann</strong>, um Desenvolvedor de Software apaixonado por
      tecnologia e criatividade. Meu objetivo é criar soluções inovadoras que proporcionem a melhor
      experiência para o usuário. <br /><br />
      Como Web Developer, meu foco é construir aplicações com código de alta qualidade, seguro e
      flexível, utilizando tecnologias como Vue.js, JavaScript/TypeScript e PHP. Paralelamente,
      exploro minha paixão pela produção de conteúdo audiovisual para criar projetos impactantes e
      visualmente atraentes.
    </p>

    <div class="social-links mt-5 pt-5">
      <a
        href="https://www.linkedin.com/in/joão-camilo-mallmann/"
        target="_blank"
        class="social-button linkedin"
      >
        <i class="pi pi-linkedin"></i> LinkedIn
      </a>
      <a
        href="https://github.com/Joao-Camilo-Mallmann"
        target="_blank"
        class="social-button github"
      >
        <i class="pi pi-github"></i> GitHub
      </a>
    </div>
  </div>
</template>

<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Registra o plugin do ScrollTrigger
gsap.registerPlugin(ScrollTrigger)

export default {
  name: 'ProfileSplitter',
  data() {
    return {
      selectedPanel: null,
      isAnimating: false, // Trava para evitar cliques duplos durante a animação
      urlDevImg:
        'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=crop',
      urlEditorImg:
        'https://images.unsplash.com/photo-1574717025058-2f8737d2e2b7?q=80&w=687&auto=format&fit=crop',
    }
  },
  methods: {
    selectProfile(profile, path) {
      // Impede a execução se uma animação já estiver em andamento
      if (this.isAnimating) return
      this.isAnimating = true
      this.selectedPanel = profile

      const selectedEl = `.${profile}-panel`
      const otherEl = profile === 'dev' ? '.editor-panel' : '.dev-panel'

      // Animação com GSAP Timeline para controle total
      const tl = gsap.timeline({
        onComplete: () => {
          // Navega para a rota após a animação (requer vue-router)
          // this.$router.push(path);
          console.log(`Navegando para ${path}...`) // Placeholder para navegação

          // Reseta o estado após a navegação
          setTimeout(() => {
            this.isAnimating = false
            this.selectedPanel = null
            gsap.set('.profile-panel, .panel-content', { clearProps: 'all' })
          }, 500)
        },
      })

      tl.to(`${otherEl} .panel-content`, {
        opacity: 0,
        scale: 0.8,
        duration: 0.5,
        ease: 'power3.in',
      })
        .to(otherEl, { width: '0%' }, '-=0.3')
        .to(selectedEl, { width: '100%' }, '<')
        .to(
          `${selectedEl} .panel-bg-image`,
          {
            scale: 1.1,
            duration: 1.2,
            ease: 'power3.inOut',
          },
          '<',
        )
    },
  },
  mounted() {
    // Animação 1: Entrada suave dos painéis
    gsap.from('.panel-content', {
      duration: 1,
      y: 30,
      opacity: 0,
      stagger: 0.2,
      ease: 'power3.out',
      delay: 0.2,
    })

    // Animação 2: Revela a seção "Sobre Mim" e a foto ao rolar
    // Acessando os elementos via this.$refs
    gsap.from([this.$refs.profilePhoto, this.$refs.introSection], {
      scrollTrigger: {
        trigger: this.$refs.profilePhoto,
        start: 'top 90%',
        toggleActions: 'play none none none',
      },
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.3,
      ease: 'power3.out',
    })
  },
}
</script>

<style>
/* Estilos permanecem os mesmos */
.splitter-container {
  width: 100%;
  animation: fadeIn 1s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
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
  background: linear-gradient(0deg, rgba(29, 78, 216, 0.7) 0%, rgba(0, 0, 0, 0.1) 100%);
}
.editor-panel:hover::before {
  background: linear-gradient(0deg, rgba(107, 33, 168, 0.7) 0%, rgba(0, 0, 0, 0.1) 100%);
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
  display: none;
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

.panel-action:hover {
  display: flex !important;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1.2rem;
  font-size: 1.1rem;
  font-weight: 500;
  transition: color 0.3s;
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

.profile-photo-container {
  display: flex;
  justify-content: center;
  margin-top: -80px;
  position: relative;
  z-index: 10;
}
.profile-photo {
  width: 160px;
  height: 160px;
  object-fit: cover;
  border-radius: 50%;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  border: 4px solid #1e293b;
}

.introduction-section {
  color: #e0e0e0;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  padding: 2rem;
  margin-top: 1rem;
}

.intro-title {
  font-size: 1.75rem;
  font-weight: 600;
  color: #fff;
  margin-bottom: 1rem;
}

.intro-text {
  font-size: 1.1rem;
  line-height: 1.7;
  color: #c0c0c0;
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 1rem; /* Espaçamento entre os botões */
}

.social-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  color: #fff;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
  border: 1px solid transparent;
  margin-top: 24px;
}

.social-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.social-button .pi {
  margin-right: 0.5rem;
  font-size: 1.2rem;
}

/* Cores específicas */
.social-button.linkedin {
  background-color: #0077b5;
  border-color: #0077b5;
}

.social-button.github {
  background-color: #333;
  border-color: #333;
}
</style>
