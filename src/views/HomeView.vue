<script setup>
import FooterContact from '@/components/FooterContact.vue'
import HomeSplitter from '@/components/HomeSplitter.vue'
import { useI18n } from '@/composables/useI18n'
import { useHead } from '@unhead/vue'
import { computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const { t, locale, toggleLocale } = useI18n()

// Refs para parallax

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
    {
      property: 'og:image',
      content:
        'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=crop',
    },
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
    <home-splitter />

    <!-- Profile — v-motion -->
    <section v-motion-scroll-visible class="flex justify-center sm:-mt-4 md:-mt-20 relative z-10">
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

    <section class="max-w-5xl mx-auto p-8 mt-4 text-center">
      <!-- Alternador de Idioma na Home -->
      <div v-motion-scroll-visible class="flex justify-center mb-8">
        <button
          class="home-locale-toggle group shadow-sm ring-1 ring-inset ring-white/20 rounded-full min-h-10 px-6 py-2 transition-opacity duration-300 hover:opacity-60"
          :aria-label="locale === 'pt-BR' ? 'Switch to English' : 'Mudar para Português'"
          @click="toggleLocale"
        >
          <div class="flex items-center gap-3">
            <span class="text-xl transition-transform duration-300 group-hover:scale-110">
              {{ locale === 'pt-BR' ? '🇺🇸' : '🇧🇷' }}
            </span>
            <span class="font-medium tracking-wide text-sm text-fg transition-colors">
              {{ locale === 'pt-BR' ? 'View in English' : 'Ver em Português' }}
            </span>
          </div>
          <i
            class="pi pi-sync text-sm ml-2 text-gray-500 transition-[color,transform] duration-500 group-hover:rotate-180 group-hover:text-white"
          ></i>
        </button>
      </div>

      <!-- Título -->
      <h1
        v-motion-scroll-visible
        :delay="100"
        class="text-2xl font-semibold text-white mb-4 text-balance"
      >
        {{ t('home.aboutMe') }}
      </h1>

      <!-- Apresentação Principal -->
      <article v-motion-scroll-visible :delay="200" class="mb-4">
        <div
          class="order border-border shadow-sm ring-1 ring-inset ring-white/5 rounded-2xl p-6 text-fg"
        >
          <div class="text-base leading-relaxed m-0 text-fg tracking-wide">
            {{ t('home.greeting') }}
            <strong class="text-white typing-effect">João Camilo Mallmann</strong>,
            {{ t('home.role') }}<br />
            {{ t('home.passion') }}
          </div>
        </div>
      </article>

      <!-- Seções de Habilidades -->
      <section class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
        <!-- Seção Software Developer | Frontend Specialist -->
        <article v-motion-scroll-visible :delay="300" class="duration-300 cursor-pointer">
          <div
            class="border border-border shadow-sm ring-1 ring-inset ring-white/5 rounded-2xl border-l-4 border-l-dev h-full flex flex-col"
          >
            <header class="flex items-center justify-center gap-2 p-4">
              <i class="pi pi-desktop text-xl text-dev" aria-hidden="true"></i>
              <h2 class="text-lg font-semibold text-dev m-0 text-balance">
                {{ t('home.devTitle') }}
              </h2>
            </header>
            <div class="p-4 grow">
              <p class="text-fg-muted tracking-wide leading-relaxed m-0">
                {{ t('home.devDescription') }}
              </p>
            </div>

            <div class="p-4 mt-auto">
              <button
                class="w-full bg-transparent border-0 text-dev font-semibold py-3 px-6 justify-end flex items-center gap-2 transition-opacity duration-300 hover:opacity-60"
                :aria-label="t('home.devButtonAria')"
                @click="goToPage('/dev')"
              >
                <span>{{ t('home.devButton') }}</span>
                <i class="pi pi-arrow-right"></i>
              </button>
            </div>
          </div>
        </article>

        <!-- Seção Editor de Vídeo -->
        <article v-motion-scroll-visible :delay="400" class="duration-300 cursor-pointer">
          <div
            class="border border-border shadow-sm ring-1 ring-inset ring-white/5 rounded-2xl border-l-4 border-l-editor h-full flex flex-col"
          >
            <header class="flex items-center justify-center gap-2 p-4">
              <i class="pi pi-video text-xl text-editor" aria-hidden="true"></i>
              <h2 class="text-lg font-semibold text-editor m-0 text-balance">
                {{ t('home.editorTitle') }}
              </h2>
            </header>
            <div class="p-4 grow">
              <p class="text-fg-muted tracking-wide leading-relaxed m-0">
                <span class="text-editor font-semibold">{{ t('home.editorCreation') }}</span>
                {{ ' ' }}
                <template v-if="locale === 'pt-BR'">
                  com <span class="text-fg font-semibold">Adobe Premiere Pro</span>,
                  <span class="text-fg font-semibold">Photoshop</span> e
                  <span class="text-fg font-semibold">After Effects</span>. Especializado em vídeos
                  institucionais, comerciais e conteúdo para redes sociais.
                </template>
                <template v-else>
                  with <span class="text-fg font-semibold">Adobe Premiere Pro</span>,
                  <span class="text-fg font-semibold">Photoshop</span> and
                  <span class="text-fg font-semibold">After Effects</span>. Specialized in
                  institutional, commercial videos and social media content.
                </template>
              </p>
            </div>
            <div class="p-4 mt-auto">
              <button
                class="w-full bg-transparent border-0 text-editor font-semibold py-3 px-6 justify-end flex items-center gap-2 transition-opacity duration-300 hover:opacity-60"
                :aria-label="t('home.editorButtonAria')"
                @click="goToPage('/editor')"
              >
                <span>{{ t('home.editorButton') }}</span>
                <i class="pi pi-play"></i>
              </button>
            </div>
          </div>
        </article>
      </section>

      <!-- Conclusão -->
      <article v-motion-scroll-visible :delay="500" class="mt-4">
        <div
          class="border border-border shadow-sm ring-1 ring-inset ring-white/5 rounded-2xl text-fg"
        >
          <header class="flex items-center justify-center gap-3 p-6">
            <i class="pi pi-star text-xl text-yellow-400" aria-hidden="true"></i>
            <h2 class="text-white font-semibold text-balance">{{ t('home.philosophyTitle') }}</h2>
            <i class="pi pi-star text-xl text-yellow-400" aria-hidden="true"></i>
          </header>
          <div class="relative overflow-hidden p-6 pt-0">
            <p class="text-fg-muted leading-relaxed m-0 relative z-10 tracking-wide">
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
                class="text-gradient bg-linear-to-r from-dev to-editor bg-clip-text text-transparent font-bold"
                >{{ t('home.philosophyExcellence') }}</span
              >.
            </p>
            <div class="flex justify-center flex-wrap mt-4 gap-4">
              <div class="flex items-center gap-2 text-sm text-fg-muted">
                <i class="pi pi-code text-dev" aria-hidden="true"></i>
                <span>{{ t('home.tagTechnology') }}</span>
              </div>
              <div class="flex items-center gap-2 text-sm text-fg-muted">
                <i class="pi pi-video text-editor" aria-hidden="true"></i>
                <span>{{ t('home.tagCreativity') }}</span>
              </div>
              <div class="flex items-center gap-2 text-sm text-fg-muted">
                <i class="pi pi-heart text-red-400" aria-hidden="true"></i>
                <span>{{ t('home.tagDedication') }}</span>
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>

    <!-- Footer Padrão -->
    <div v-motion-scroll-visible :delay="100">
      <footer-contact primary-color="#ffffff" :cta-text="t('footer.ctaDefault')" />
    </div>
  </main>
</template>

<style scoped>
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

/* Toggle de Idioma na Home */
.home-locale-toggle {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 24px;
  border-radius: 9999px;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.01));
  border: 1px solid rgba(255, 255, 255, 0.1);
  cursor: pointer;
  transition:
    background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1),
    border-color 0.3s cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1),
    color 0.3s cubic-bezier(0.4, 0, 0.2, 1),
    opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(10px);
}

.home-locale-toggle:hover {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.03));
  border-color: rgba(255, 255, 255, 0.25);
  transform: translateY(-2px);
  box-shadow:
    0 8px 25px -6px rgba(0, 0, 0, 0.4),
    inset 0 0 0 1px rgba(255, 255, 255, 0.05);
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

/* Responsividade para os círculos da foto */
@media (max-width: 768px) {
  .pulse-ring,
  .pulse-ring-2 {
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
