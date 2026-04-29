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

    <!-- Profile — Spring Entry + Orbiting Dots -->
    <section
      v-motion
      :initial="{ opacity: 0, scale: 0.5, rotate: -8 }"
      :visible-once="{
        opacity: 1,
        scale: 1,
        rotate: 0,
        transition: { type: 'spring', stiffness: 180, damping: 14 },
      }"
      class="flex justify-center sm:-mt-4 md:-mt-20 relative z-10"
    >
      <header class="profile-container">
        <img
          src="https://avatars.githubusercontent.com/u/94570639"
          alt="Foto de perfil de João Camilo Mallmann"
          class="profile-image w-40 h-40 object-cover rounded-full shadow-xl border-4 border-black"
        />
        <span class="orbit-dot orbit-dot-dev" aria-hidden="true"></span>
        <span class="orbit-dot orbit-dot-editor" aria-hidden="true"></span>
        <span class="orbit-dot orbit-dot-white" aria-hidden="true"></span>
      </header>
    </section>

    <section class="max-w-5xl mx-auto p-8 mt-4 text-center">
      <!-- Alternador de Idioma — Materialização horizontal -->
      <div
        v-motion
        :initial="{ opacity: 0, scaleX: 0 }"
        :visible-once="{
          opacity: 1,
          scaleX: 1,
          transition: { type: 'spring', stiffness: 200, damping: 18, delay: 200 },
        }"
        class="flex justify-center mb-8"
      >
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
            class="pi pi-sync text-sm ml-2 text-gray-500 sync-icon transition-[color] duration-500 group-hover:text-white"
          ></i>
        </button>
      </div>

      <!-- Título — Slide from left -->
      <h1
        v-motion
        :initial="{ opacity: 0, x: -40 }"
        :visible-once="{
          opacity: 1,
          x: 0,
          transition: { type: 'spring', stiffness: 150, damping: 15, delay: 100 },
        }"
        class="text-2xl font-semibold text-white mb-4 text-balance"
      >
        {{ t('home.aboutMe') }}
      </h1>

      <!-- Apresentação Principal — Spring overshoot + name underline -->
      <article
        v-motion
        :initial="{ opacity: 0, scale: 0.95, y: 10 }"
        :visible-once="{
          opacity: 1,
          scale: 1,
          y: 0,
          transition: { type: 'spring', stiffness: 120, damping: 12, delay: 150 },
        }"
        class="mb-4"
      >
        <div
          class="border border-border shadow-sm ring-1 ring-inset ring-white/5 rounded-2xl p-6 text-fg"
        >
          <div class="text-base leading-relaxed m-0 text-fg tracking-wide">
            {{ t('home.greeting') }}
            <strong class="text-white name-highlight">João Camilo Mallmann</strong>,
            {{ t('home.role') }}<br />
            {{ t('home.passion') }}
          </div>
        </div>
      </article>

      <!-- Cards — Entradas de direções opostas + float em contra-fase -->
      <section class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
        <!-- Dev Card — Entra da esquerda com rotação -->
        <div class="card-float">
          <article
            v-motion
            :initial="{ opacity: 0, x: -60, y: 16, rotate: -4, scale: 0.97 }"
            :visible-once="{
              opacity: 1,
              x: 0,
              y: 0,
              rotate: 0,
              scale: 1,
              transition: { type: 'spring', stiffness: 80, damping: 18, mass: 1.1 },
            }"
            :hovered="{
              y: -8,
              scale: 1.015,
              transition: { type: 'spring', stiffness: 260, damping: 22 },
            }"
            :tapped="{
              scale: 0.97,
              y: 2,
              transition: { type: 'spring', stiffness: 400, damping: 28 },
            }"
            class="cursor-pointer"
          >
            <div
              class="skill-card skill-card-dev border border-border shadow-sm ring-1 ring-inset ring-white/5 rounded-2xl border-l-4 border-l-dev h-full flex flex-col transition-shadow duration-300 hover:shadow-[0_8px_30px_-8px_rgba(77,145,234,0.25)]"
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
        </div>

        <!-- Editor Card — Entra da direita com rotação -->
        <div class="card-float-alt">
          <article
            v-motion
            :initial="{ opacity: 0, x: 60, y: 16, rotate: 4, scale: 0.97 }"
            :visible-once="{
              opacity: 1,
              x: 0,
              y: 0,
              rotate: 0,
              scale: 1,
              transition: { type: 'spring', stiffness: 80, damping: 18, mass: 1.1, delay: 140 },
            }"
            :hovered="{
              y: -8,
              scale: 1.015,
              transition: { type: 'spring', stiffness: 260, damping: 22 },
            }"
            :tapped="{
              scale: 0.97,
              y: 2,
              transition: { type: 'spring', stiffness: 400, damping: 28 },
            }"
            class="cursor-pointer"
          >
            <div
              class="skill-card skill-card-editor border border-border shadow-sm ring-1 ring-inset ring-white/5 rounded-2xl border-l-4 border-l-editor h-full flex flex-col transition-shadow duration-300 hover:shadow-[0_8px_30px_-8px_rgba(234,166,77,0.25)]"
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
                    <span class="text-fg font-semibold">After Effects</span>. Especializado em
                    vídeos institucionais, comerciais e conteúdo para redes sociais.
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
        </div>
      </section>

      <!-- Filosofia — scroll reveal + star rotation + tag spring pop -->
      <article
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :visible-once="{
          opacity: 1,
          y: 0,
          transition: { type: 'keyframes', ease: [0.16, 1, 0.3, 1], duration: 600 },
        }"
        class="mt-4"
      >
        <div
          class="border border-border shadow-sm ring-1 ring-inset ring-white/5 rounded-2xl text-fg"
        >
          <header class="flex items-center justify-center gap-3 p-6">
            <i class="pi pi-star text-xl text-yellow-400 star-spin-cw" aria-hidden="true"></i>
            <h2 class="text-white font-semibold text-balance">{{ t('home.philosophyTitle') }}</h2>
            <i class="pi pi-star text-xl text-yellow-400 star-spin-ccw" aria-hidden="true"></i>
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
              <div
                v-motion
                :initial="{ opacity: 0, scale: 0 }"
                :visible-once="{
                  opacity: 1,
                  scale: 1,
                  transition: { type: 'spring', stiffness: 300, damping: 12, delay: 100 },
                }"
                class="flex items-center gap-2 text-sm text-fg-muted"
              >
                <i class="pi pi-code text-dev" aria-hidden="true"></i>
                <span>{{ t('home.tagTechnology') }}</span>
              </div>
              <div
                v-motion
                :initial="{ opacity: 0, scale: 0 }"
                :visible-once="{
                  opacity: 1,
                  scale: 1,
                  transition: { type: 'spring', stiffness: 300, damping: 12, delay: 250 },
                }"
                class="flex items-center gap-2 text-sm text-fg-muted"
              >
                <i class="pi pi-video text-editor" aria-hidden="true"></i>
                <span>{{ t('home.tagCreativity') }}</span>
              </div>
              <div
                v-motion
                :initial="{ opacity: 0, scale: 0 }"
                :visible-once="{
                  opacity: 1,
                  scale: 1,
                  transition: { type: 'spring', stiffness: 300, damping: 12, delay: 400 },
                }"
                class="flex items-center gap-2 text-sm text-fg-muted"
              >
                <i class="pi pi-heart text-red-400" aria-hidden="true"></i>
                <span>{{ t('home.tagDedication') }}</span>
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>

    <!-- Footer -->
    <div v-motion-scroll-visible :delay="100">
      <footer-contact primary-color="#ffffff" :cta-text="t('footer.ctaDefault')" />
    </div>
  </main>
</template>

<style scoped>
/* ── Profile ── */
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

/* ── Orbiting Dots ── */
.orbit-dot {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  z-index: 2;
  pointer-events: none;
}

.orbit-dot-dev {
  background: #4d91ea;
  box-shadow: 0 0 8px rgba(77, 145, 234, 0.6);
  animation: orbit-cw 6s linear infinite;
  --orbit-radius: 85px;
}

.orbit-dot-editor {
  background: #eaa64d;
  box-shadow: 0 0 8px rgba(234, 166, 77, 0.6);
  animation: orbit-ccw 8s linear infinite;
  --orbit-radius: 95px;
}

.orbit-dot-white {
  background: #ffffff;
  box-shadow: 0 0 6px rgba(255, 255, 255, 0.4);
  animation: orbit-cw 10s linear infinite;
  --orbit-radius: 105px;
}

@keyframes orbit-cw {
  from {
    transform: translate(-50%, -50%) rotate(0deg) translateX(var(--orbit-radius)) rotate(0deg);
  }
  to {
    transform: translate(-50%, -50%) rotate(360deg) translateX(var(--orbit-radius)) rotate(-360deg);
  }
}

@keyframes orbit-ccw {
  from {
    transform: translate(-50%, -50%) rotate(360deg) translateX(var(--orbit-radius)) rotate(-360deg);
  }
  to {
    transform: translate(-50%, -50%) rotate(0deg) translateX(var(--orbit-radius)) rotate(0deg);
  }
}

/* ── Name Underline ── */
.name-highlight {
  position: relative;
}

.name-highlight::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, var(--color-dev), var(--color-editor));
  transform: scaleX(0);
  transform-origin: left;
  animation: name-underline-draw 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.8s forwards;
}

@keyframes name-underline-draw {
  to {
    transform: scaleX(1);
  }
}

/* ── Card Float (contra-fase) ── */
.card-float {
  animation: card-float-a 5s ease-in-out infinite;
}

.card-float-alt {
  animation: card-float-b 5s ease-in-out infinite;
}

@keyframes card-float-a {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
}

@keyframes card-float-b {
  0%,
  100% {
    transform: translateY(-5px);
  }
  50% {
    transform: translateY(0);
  }
}

/* ── Card Border Glow Travel ── */
.skill-card {
  position: relative;
  overflow: hidden;
}

.skill-card::after {
  content: '';
  position: absolute;
  left: 0;
  top: -100%;
  width: 4px;
  height: 60%;
  border-radius: 2px;
  pointer-events: none;
  animation: border-glow-travel 3s ease-in-out infinite;
}

.skill-card-dev::after {
  background: linear-gradient(to bottom, transparent, rgba(77, 145, 234, 0.8), transparent);
  box-shadow: 0 0 10px rgba(77, 145, 234, 0.4);
}

.skill-card-editor::after {
  background: linear-gradient(to bottom, transparent, rgba(234, 166, 77, 0.8), transparent);
  box-shadow: 0 0 10px rgba(234, 166, 77, 0.4);
}

@keyframes border-glow-travel {
  0% {
    top: -60%;
  }
  100% {
    top: 100%;
  }
}

/* ── Star Rotation ── */
.star-spin-cw {
  animation: star-rotate 8s linear infinite;
  display: inline-block;
}

.star-spin-ccw {
  animation: star-rotate 8s linear infinite reverse;
  display: inline-block;
}

@keyframes star-rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

/* ── Locale Toggle ── */
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

/* Sync icon spin on hover */
.home-locale-toggle:hover .sync-icon {
  animation: sync-spin 1.2s ease-in-out infinite;
}

@keyframes sync-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

/* ── Responsive ── */
@media (max-width: 768px) {
  .orbit-dot {
    display: none;
  }
}

/* ── Reduced Motion ── */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }

  .orbit-dot,
  .card-float,
  .card-float-alt {
    animation: none !important;
  }
}
</style>
