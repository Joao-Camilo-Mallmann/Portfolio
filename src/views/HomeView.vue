<template>
  <HomeSplitter />

  <div ref="profilePhoto" class="profile-photo-container">
    <img
      src="https://avatars.githubusercontent.com/u/94570639"
      alt="Minha foto"
      class="profile-photo"
    />
  </div>

  <div ref="introSection" class="introduction-section">
    <h3 class="intro-title">Sobre Mim</h3>

    <!-- Apresentação Principal -->
    <Card class="intro-card">
      <template #content>
        <p class="intro-text">
          Olá! Sou <strong>João Camilo Mallmann</strong>, desenvolvedor frontend e editor de
          vídeo.<br />
          Minha paixão é criar soluções digitais e conteúdo audiovisual de alta qualidade.
        </p>
      </template>
    </Card>

    <!-- Seções de Habilidades -->
    <div class="skills-grid">
      <!-- Seção Desenvolvedor Frontend -->
      <Card class="skill-card frontend-card">
        <template #header>
          <div class="skill-header">
            <i class="pi pi-desktop skill-icon frontend-icon"></i>
            <h4 class="skill-title">Desenvolvedor Frontend</h4>
          </div>
        </template>
        <template #content>
          <p class="skill-description">
            Especializado em desenvolvimento de aplicações web modernas e responsivas utilizando
            Vue.js, JavaScript/TypeScript e as melhores práticas do mercado.
          </p>
        </template>
      </Card>

      <!-- Seção Editor de Vídeo -->
      <Card class="skill-card video-card">
        <template #header>
          <div class="skill-header">
            <i class="pi pi-video skill-icon video-icon"></i>
            <h4 class="skill-title">Editor de Vídeo</h4>
          </div>
        </template>
        <template #content>
          <p class="skill-description">
            Experiência em produção audiovisual completa, desde o planejamento até a finalização,
            utilizando Adobe Photoshop e Premiere Pro profissionalmente.
          </p>
        </template>
      </Card>
    </div>

    <!-- Conclusão -->
    <Card class="conclusion-card">
      <template #content>
        <p class="conclusion-text">
          Combino criatividade técnica com visão estratégica para entregar projetos que superam
          expectativas. Seja desenvolvendo interfaces intuitivas ou produzindo conteúdo audiovisual
          impactante, meu foco é sempre a excelência.
        </p>
      </template>
    </Card>

    <div class="social-links">
      <SocialMediaButton
        link="https://www.linkedin.com/in/joão-camilo-mallmann/"
        platform="linkedin"
      />
      <SocialMediaButton link="https://github.com/Joao-Camilo-Mallmann" platform="github" />
      <SocialMediaButton link="https://www.youtube.com/@J.C-12" platform="youtube" />
    </div>
  </div>
</template>

<script>
import HomeSplitter from '@/components/HomeSplitter.vue'
import SocialMediaButton from '@/components/SocialMediaButton.vue'

export default {
  name: 'ProfileSplitter',
  components: {
    HomeSplitter,
    SocialMediaButton,
  },
}
</script>

<style>
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
  text-align: center;
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
  margin: 0;
}

.intro-card {
  background: rgba(30, 41, 59, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.1);
  margin-bottom: 1rem;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.skill-card {
  background: rgba(30, 41, 59, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.skill-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4);
}

.frontend-card {
  border-left: 4px solid #42b883;
}

.video-card {
  border-left: 4px solid #ff6b6b;
}

.skill-header {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 1rem;
}

.skill-icon {
  font-size: 1.5rem;
}

.frontend-icon {
  color: #42b883;
}

.video-icon {
  color: #ff6b6b;
}

.skill-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #fff;
  margin: 0;
}

.skill-description {
  color: #c0c0c0;
  line-height: 1.6;
  margin: 0;
}

.conclusion-card {
  background: rgba(30, 41, 59, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.1);
  margin-top: 1rem;
}

.conclusion-text {
  color: #c0c0c0;
  line-height: 1.6;
  margin: 0;
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
  padding-top: 2rem;
}
</style>
