<script setup>
import HomeSplitter from '@/components/HomeSplitter.vue'
import SocialMediaButton from '@/components/SocialMediaButton.vue'
import { useI18n } from '@/composables/useI18n'
import { useHead } from '@unhead/vue'
import { computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const { t, locale } = useI18n()

useHead({
  title: computed(() => t('seo.homeTitle')),
  meta: [
    {
      name: 'description',
      content: computed(() => t('seo.homeDescription')),
    },
    {
      name: 'keywords',
      content: computed(() => t('seo.homeKeywords')),
    },
    // Open Graph
    {
      property: 'og:title',
      content: computed(() => t('seo.ogTitle')),
    },
    {
      property: 'og:description',
      content: computed(() => t('seo.ogDescription')),
    },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://joao-camilo-mallmann.com/' },
    { property: 'og:image', content: 'https://joao-camilo-mallmann.com/favicon.ico' },
    {
      property: 'og:locale',
      content: computed(() => (locale.value === 'pt-BR' ? 'pt_BR' : 'en_US')),
    },
    // Twitter
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: computed(() => t('seo.twitterTitle')) },
    {
      name: 'twitter:description',
      content: computed(() => t('seo.twitterDescription')),
    },
  ],
  link: [{ rel: 'canonical', href: 'https://joao-camilo-mallmann.com/' }],
})

function goToPage(path) {
  router.push(path)
}
</script>

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

    <home-splitter />

    <section class="flex justify-center sm:-mt-4 md:-mt-20 relative z-10">
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

    <section class="text-gray-200 max-w-3xl mx-auto p-8 mt-4 text-center animate-fade-in">
      <h1 class="text-2xl font-semibold text-white mb-4 animate-slide-down">
        {{ t('home.aboutMe') }}
      </h1>

      <!-- Apresentação Principal -->
      <article class="mb-4 animate-slide-up">
        <card class="border border-white/10 text-gray-300">
          <template #content>
            <p class="text-base leading-7 text-gray-300 m-0">
              {{ t('home.greeting') }}
              <strong class="text-white typing-effect">João Camilo Mallmann</strong>,
              {{ t('home.role') }}<br />
              {{ t('home.passion') }}
            </p>
          </template>
        </card>
      </article>

      <!-- Seções de Habilidades -->
      <section class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
        <!-- Seção Software Developer | Frontend Specialist -->
        <article
          class="animate-slide-left card-hover-glow hover:scale-102 transition-transform duration-300"
        >
          <card
            class="border-l-4 !h-full border-dev !transition-all !duration-300 hover:shadow-2xl text-gray-300"
          >
            <template #header>
              <header class="flex items-center justify-center gap-2 p-4">
                <i class="pi pi-desktop text-xl text-dev" aria-hidden="true"></i>
                <h2 class="text-lg font-semibold text-dev m-0">{{ t('home.devTitle') }}</h2>
              </header>
            </template>
            <template #content>
              <p class="text-gray-300 leading-relaxed m-0">
                {{ t('home.devDescription') }}
              </p>
            </template>

            <template #footer>
              <br />
              <button
                class="w-full !bg-transparent !border-0 !text-dev !font-semibold !py-3 !px-6 hover:!text-dev/80 !justify-end !transition-all !duration-300 hover:!scale-105 hover:!translate-x-2 flex items-center gap-2"
                :aria-label="t('home.devButtonAria')"
                @click="goToPage('/dev')"
              >
                <span>{{ t('home.devButton') }}</span>
                <i class="pi pi-arrow-right"></i>
              </button>
            </template>
          </card>
        </article>

        <!-- Seção Editor de Vídeo -->
        <article
          class="animate-slide-right card-hover-glow hover:scale-102 transition-transform duration-300"
        >
          <card
            class="border-l-4 border-editor !transition-all !duration-300 hover:shadow-2xl text-gray-300"
          >
            <template #header>
              <header class="flex items-center justify-center gap-2 p-4">
                <i class="pi pi-video text-xl text-editor" aria-hidden="true"></i>
                <h2 class="text-lg font-semibold text-editor m-0">{{ t('home.editorTitle') }}</h2>
              </header>
            </template>
            <template #content>
              <p class="text-gray-300 leading-relaxed m-0">
                <span class="text-editor font-semibold">{{ t('home.editorCreation') }}</span>
                {{ ' ' }}
                <template v-if="locale === 'pt-BR'">
                  com <span class="text-white font-semibold">Adobe Premiere Pro</span>,
                  <span class="text-white font-semibold">Photoshop</span> e
                  <span class="text-white font-semibold">After Effects</span>. Especializado em
                  vídeos institucionais, comerciais e conteúdo para redes sociais.
                </template>
                <template v-else>
                  with <span class="text-white font-semibold">Adobe Premiere Pro</span>,
                  <span class="text-white font-semibold">Photoshop</span> and
                  <span class="text-white font-semibold">After Effects</span>. Specialized in
                  institutional, commercial videos and social media content.
                </template>
              </p>
              <br />
            </template>
            <template #footer>
              <button
                class="w-full !bg-transparent !border-0 !text-editor !font-semibold !py-3 !px-6 hover:!text-editor/80 !justify-end !transition-all !duration-300 hover:!scale-105 hover:!translate-x-2 flex items-center gap-2"
                :aria-label="t('home.editorButtonAria')"
                @click="goToPage('/editor')"
              >
                <span>{{ t('home.editorButton') }}</span>
                <i class="pi pi-play"></i>
              </button>
            </template>
          </card>
        </article>
      </section>

      <!-- Conclusão -->
      <article class="mt-4 animate-fade-in-delayed conclusion-card">
        <card class="border border-white/10 text-gray-300">
          <template #header>
            <header class="flex items-center justify-center gap-3 p-4">
              <i
                class="pi pi-star text-xl text-yellow-400 animate-spin-slow"
                aria-hidden="true"
              ></i>
              <h2 class="text-white font-semibold">{{ t('home.philosophyTitle') }}</h2>
              <i
                class="pi pi-star text-xl text-yellow-400 animate-spin-slow"
                aria-hidden="true"
              ></i>
            </header>
          </template>
          <template #content>
            <div class="relative overflow-hidden">
              <p class="text-gray-300 leading-relaxed m-0 relative z-10">
                <span class="text-dev font-semibold">{{ t('home.philosophyCreativity') }}</span>
                {{ ' ' }}
                <template v-if="locale === 'pt-BR'">com</template>
                <template v-else>with</template>
                {{ ' ' }}
                <span class="text-editor font-semibold">{{ t('home.philosophyVision') }}</span>
                {{ ' ' }} {{ t('home.philosophyDelivery') }} {{ ' ' }}
                <span class="text-white font-semibold">{{ t('home.philosophyInterfaces') }}</span>
                {{ ' ' }}
                <template v-if="locale === 'pt-BR'">ou produzindo</template>
                <template v-else>or producing</template>
                {{ ' ' }}
                <span class="text-white font-semibold">{{ t('home.philosophyContent') }}</span
                >, {{ t('home.philosophyFocus') }} {{ ' ' }}
                <span
                  class="text-gradient bg-gradient-to-r from-dev to-editor bg-clip-text text-transparent font-bold"
                  >{{ t('home.philosophyExcellence') }}</span
                >.
              </p>
              <div class="flex justify-center flex-wrap mt-4 gap-4">
                <div class="flex items-center gap-2 text-sm text-gray-400">
                  <i class="pi pi-code text-dev" aria-hidden="true"></i>
                  <span>{{ t('home.tagTechnology') }}</span>
                </div>
                <div class="flex items-center gap-2 text-sm text-gray-400">
                  <i class="pi pi-video text-editor" aria-hidden="true"></i>
                  <span>{{ t('home.tagCreativity') }}</span>
                </div>
                <div class="flex items-center gap-2 text-sm text-gray-400">
                  <i class="pi pi-heart text-red-400 animate-heartbeat" aria-hidden="true"></i>
                  <span>{{ t('home.tagDedication') }}</span>
                </div>
              </div>
            </div>
          </template>
        </card>
      </article>

      <!-- Redes Sociais -->
      <footer class="mt-8 pt-8 animate-slide-up-delayed">
        <divider align="center" type="solid" />

        <nav
          class="flex flex-wrap justify-center gap-3 mt-6 social-buttons-container"
          :aria-label="t('home.socialAria')"
        >
          <social-media-button
            link="https://www.linkedin.com/in/joão-camilo-mallmann/"
            platform="linkedin"
          />
          <social-media-button link="https://github.com/Joao-Camilo-Mallmann" platform="github" />
          <social-media-button link="https://www.youtube.com/@J.C-12" platform="youtube" />
          <!-- <SocialMediaButton link="https://wa.me/5551994461433" platform="whatsapp" /> -->
          <social-media-button link="mailto:jcamilomallmann@hotmail.com" platform="email" />
        </nav>
      </footer>
    </section>
  </main>
</template>

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
