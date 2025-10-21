<template>
  <main class="page-transition min-h-screen relative overflow-hidden">
    <!-- Elementos de fundo animados -->
    <div class="floating-elements" aria-hidden="true">
      <div class="floating-circle circle-1"></div>
      <div class="floating-circle circle-2"></div>
      <div class="floating-circle circle-3"></div>
      <div class="floating-square square-1"></div>
      <div class="floating-square square-2"></div>
    </div>

    <HomeSplitter />

    <section ref="profilePhoto" class="flex justify-center sm:-mt-4 md:-mt-20 relative z-10">
      <header class="profile-container">
        <img
          src="https://avatars.githubusercontent.com/u/94570639"
          alt="Foto de perfil de João Camilo Mallmann"
          class="profile-image w-40 h-40 object-cover rounded-full shadow-xl border-4 border-black"
        />
        <div class="pulse-ring" aria-hidden="true"></div>
        <div class="pulse-ring-2" aria-hidden="true"></div>
      </header>
    </section>

    <section
      ref="introSection"
      class="text-gray-200 max-w-3xl mx-auto p-8 mt-4 text-center animate-fade-in"
    >
      <h1 class="text-2xl font-semibold text-white mb-4 animate-slide-down">Sobre Mim</h1>

      <!-- Apresentação Principal -->
      <article class="mb-4 animate-slide-up">
        <Card class="border border-white/10 text-gray-300">
          <template #content>
            <p class="text-base leading-7 text-gray-300 m-0">
              Olá! Sou <strong class="text-white typing-effect">João Camilo Mallmann</strong>,
              Software Developer | Frontend Specialist e editor de vídeo.<br />
              Minha paixão é criar soluções digitais e conteúdo audiovisual de alta qualidade.
            </p>
          </template>
        </Card>
      </article>

      <!-- Seções de Habilidades -->
      <section class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
        <!-- Seção Software Developer | Frontend Specialist -->
        <article
          class="animate-slide-left card-hover-glow hover:scale-102 transition-transform duration-300"
        >
          <Card
            class="border-l-4 !h-full border-[#4d91ea] !transition-all !duration-300 hover:shadow-2xl text-gray-300"
          >
            <template #header>
              <header class="flex items-center justify-center gap-2 p-4">
                <i class="pi pi-desktop text-xl text-[#4d91ea]" aria-hidden="true"></i>
                <h2 class="text-lg font-semibold text-[#4d91ea] m-0">Software Developer</h2>
              </header>
            </template>
            <template #content>
              <p class="text-gray-300 leading-relaxed m-0">
                Especializado em desenvolvimento de aplicações web modernas e responsivas utilizando
                Vue.js, JavaScript/TypeScript e as melhores práticas do mercado.
              </p>
            </template>

            <template #footer>
              <br />
              <Button
                label="Explorar Projetos"
                icon="pi pi-arrow-right"
                iconPos="right"
                @click="goToPage('/dev')"
                text
                class="w-full !bg-transparent !border-0 !text-dev !font-semibold !py-3 !px-6 hover:!text-dev/80 !justify-end !transition-all !duration-300 hover:!scale-105 hover:!translate-x-2"
                aria-label="Navegar para página de projetos de desenvolvimento"
              />
            </template>
          </Card>
        </article>

        <!-- Seção Editor de Vídeo -->
        <article
          class="animate-slide-right card-hover-glow hover:scale-102 transition-transform duration-300"
        >
          <Card
            class="border-l-4 border-[#eaa64d] !transition-all !duration-300 hover:shadow-2xl text-gray-300"
          >
            <template #header>
              <header class="flex items-center justify-center gap-2 p-4">
                <i class="pi pi-video text-xl text-[#eaa64d]" aria-hidden="true"></i>
                <h2 class="text-lg font-semibold text-[#eaa64d] m-0">Editor de Vídeo</h2>
              </header>
            </template>
            <template #content>
              <p class="text-gray-300 leading-relaxed m-0">
                <span class="text-[#eaa64d] font-semibold">Criação audiovisual profissional</span>
                com <span class="text-white font-semibold">Adobe Premiere Pro</span>,
                <span class="text-white font-semibold">Photoshop</span> e
                <span class="text-white font-semibold">After Effects</span>. Especializado em vídeos
                institucionais, comerciais e conteúdo para redes sociais.
              </p>
              <br />
            </template>
            <template #footer>
              <Button
                label="Ver Portfólio"
                icon="pi pi-play"
                iconPos="right"
                @click="goToPage('/editor')"
                text
                class="w-full !bg-transparent !border-0 !text-editor !font-semibold !py-3 !px-6 hover:!text-editor/80 !justify-end !transition-all !duration-300 hover:!scale-105 hover:!translate-x-2"
                aria-label="Navegar para página de portfólio de edição de vídeo"
              />
            </template>
          </Card>
        </article>
      </section>

      <!-- Conclusão -->
      <article class="mt-4 animate-fade-in-delayed conclusion-card">
        <Card class="border border-white/10 text-gray-300">
          <template #header>
            <header class="flex items-center justify-center gap-3 p-4">
              <i
                class="pi pi-star text-xl text-yellow-400 animate-spin-slow"
                aria-hidden="true"
              ></i>
              <h2 class="text-white font-semibold">Minha Filosofia</h2>
              <i
                class="pi pi-star text-xl text-yellow-400 animate-spin-slow"
                aria-hidden="true"
              ></i>
            </header>
          </template>
          <template #content>
            <div class="relative overflow-hidden">
              <p class="text-gray-300 leading-relaxed m-0 relative z-10">
                <span class="text-[#4d91ea] font-semibold">Combino criatividade técnica</span> com
                <span class="text-[#eaa64d] font-semibold">visão estratégica</span> para entregar
                projetos que superam expectativas. Seja desenvolvendo
                <span class="text-white font-semibold">interfaces intuitivas</span> ou produzindo
                <span class="text-white font-semibold">conteúdo audiovisual impactante</span>, meu
                foco é sempre a
                <span
                  class="text-gradient bg-gradient-to-r from-[#4d91ea] to-[#eaa64d] bg-clip-text text-transparent font-bold"
                  >excelência</span
                >.
              </p>
              <div class="flex justify-center flex-wrap mt-4 gap-4">
                <div class="flex items-center gap-2 text-sm text-gray-400">
                  <i class="pi pi-code text-[#4d91ea]" aria-hidden="true"></i>
                  <span>Tecnologia</span>
                </div>
                <div class="flex items-center gap-2 text-sm text-gray-400">
                  <i class="pi pi-video text-[#eaa64d]" aria-hidden="true"></i>
                  <span>Criatividade</span>
                </div>
                <div class="flex items-center gap-2 text-sm text-gray-400">
                  <i class="pi pi-heart text-red-400 animate-heartbeat" aria-hidden="true"></i>
                  <span>Dedicação</span>
                </div>
              </div>
            </div>
          </template>
        </Card>
      </article>

      <!-- Redes Sociais -->
      <footer class="mt-8 pt-8 animate-slide-up-delayed">
        <Divider align="center" type="solid" />

        <nav
          class="flex flex-wrap justify-center gap-3 mt-6 social-buttons-container"
          aria-label="Links de contato e redes sociais"
        >
          <SocialMediaButton
            link="https://www.linkedin.com/in/joão-camilo-mallmann/"
            platform="linkedin"
          />
          <SocialMediaButton link="https://github.com/Joao-Camilo-Mallmann" platform="github" />
          <SocialMediaButton link="https://www.youtube.com/@J.C-12" platform="youtube" />
          <SocialMediaButton link="https://wa.me/5551994461433" platform="whatsapp" />
          <SocialMediaButton link="mailto:jcamilomallmann@hotmail.com" platform="email" />
        </nav>
      </footer>
    </section>
  </main>
</template>

<script setup>
import HomeSplitter from '@/components/HomeSplitter.vue'
import SocialMediaButton from '@/components/SocialMediaButton.vue'
import { useRouter } from 'vue-router'

const router = useRouter()
function goToPage(path) {
  router.push(path)
}
</script>

<style scoped>
/* Elementos flutuantes de fundo */
.floating-elements {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.floating-circle {
  position: absolute;
  border-radius: 50%;
  background: linear-gradient(45deg, rgba(77, 145, 234, 0.1), rgba(234, 166, 77, 0.1));
  animation: float 6s ease-in-out infinite;
}

.floating-square {
  position: absolute;
  background: linear-gradient(45deg, rgba(234, 166, 77, 0.08), rgba(77, 145, 234, 0.08));
  transform: rotate(45deg);
  animation: floatReverse 8s ease-in-out infinite;
}

.circle-1 {
  width: 60px;
  height: 60px;
  top: 20%;
  left: 10%;
  animation-delay: 0s;
}

.circle-2 {
  width: 80px;
  height: 80px;
  top: 60%;
  right: 15%;
  animation-delay: 2s;
}

.circle-3 {
  width: 40px;
  height: 40px;
  top: 80%;
  left: 20%;
  animation-delay: 4s;
}

.square-1 {
  width: 50px;
  height: 50px;
  top: 30%;
  right: 10%;
  animation-delay: 1s;
}

.square-2 {
  width: 30px;
  height: 30px;
  top: 70%;
  right: 30%;
  animation-delay: 3s;
}

/* Animação da foto de perfil */
.profile-container {
  position: relative;
  display: inline-block;
}

.profile-image {
  position: relative;
  z-index: 3;
  transition: transform 0.3s ease;
}

.profile-image:hover {
  transform: scale(1.05);
}

.pulse-ring,
.pulse-ring-2 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  border: 2px solid rgba(77, 145, 234, 0.4);
  animation: pulse 2s infinite;
}

.pulse-ring {
  width: 180px;
  height: 180px;
  animation-delay: 0s;
}

.pulse-ring-2 {
  width: 200px;
  height: 200px;
  border-color: rgba(234, 166, 77, 0.3);
  animation-delay: 1s;
}

/* Efeito de digitação */
.typing-effect {
  position: relative;
  overflow: hidden;
}

.typing-effect::after {
  content: '|';
  animation: blink 1s infinite;
  margin-left: 2px;
}

/* Hover glow para cards */
.card-hover-glow {
  position: relative;
  overflow: hidden;
  cursor: pointer;
}

.card-hover-glow::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
  transition: left 0.5s;
  z-index: 1;
}

.card-hover-glow:hover::before {
  left: 100%;
}

/* Container dos botões sociais com animação escalonada */
.social-buttons-container > * {
  animation: slideInScale 0.6s ease-out forwards;
  opacity: 0;
  transform: translateY(20px) scale(0.8);
}

.social-buttons-container > *:nth-child(1) {
  animation-delay: 0.1s;
}
.social-buttons-container > *:nth-child(2) {
  animation-delay: 0.2s;
}
.social-buttons-container > *:nth-child(3) {
  animation-delay: 0.3s;
}
.social-buttons-container > *:nth-child(4) {
  animation-delay: 0.4s;
}
.social-buttons-container > *:nth-child(5) {
  animation-delay: 0.5s;
}

/* Card de conclusão especial */
.conclusion-card {
  position: relative;
  overflow: hidden;
}

.conclusion-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 1px;
  background: linear-gradient(90deg, transparent, #4d91ea, #eaa64d, transparent);
  animation: borderGlow 3s linear infinite;
}

.text-gradient {
  background-size: 200% 200%;
  animation: gradientShift 3s ease-in-out infinite;
}

/* Animações personalizadas únicas do HomeView */

@keyframes floatReverse {
  0%,
  100% {
    transform: translateY(0px) rotate(45deg);
  }
  50% {
    transform: translateY(-15px) rotate(225deg);
  }
}

@keyframes pulse {
  0% {
    transform: translate(-50%, -50%) scale(0.8);
    opacity: 1;
  }
  100% {
    transform: translate(-50%, -50%) scale(1.2);
    opacity: 0;
  }
}

@keyframes blink {
  0%,
  50% {
    opacity: 1;
  }
  51%,
  100% {
    opacity: 0;
  }
}

@keyframes slideInScale {
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@keyframes borderGlow {
  0% {
    left: -100%;
  }
  100% {
    left: 100%;
  }
}

@keyframes gradientShift {
  0%,
  100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

/* Classes de animação específicas */
.animate-pulse-soft {
  animation: pulseSoft 3s ease-in-out infinite;
}

/* Animações específicas do componente */

@keyframes pulseSoft {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.7;
  }
}

/* Responsividade para animações */
@media (max-width: 768px) {
  .floating-circle,
  .floating-square {
    display: none;
  }

  .pulse-ring,
  .pulse-ring-2 {
    display: none;
  }

  .card-hover-glow::before {
    display: none;
  }
}

/* Reduzir animações para usuários que preferem menos movimento */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }

  .floating-circle,
  .floating-square {
    display: none;
  }
}
</style>
