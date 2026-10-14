<script setup>
import { channelOrder, channels } from '@/data/editorProjects'
import { useI18n } from '@/composables/useI18n'

const { t } = useI18n()

// Canais com vídeos editados que não têm aba própria na seção "Canais"
const clientChannels = channelOrder
  .map((key) => channels[key])
  .filter((channel) => !channel.showcase)
</script>

<template>
  <section
    id="sobre"
    class="mx-auto max-w-6xl scroll-mt-32 border-t border-white/5 px-4 py-24 md:px-6 md:py-32"
    aria-labelledby="about-heading"
  >
    <div class="grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:items-center">
      <!-- Foto em moldura de monitor de referência -->
      <figure v-motion-scroll-visible class="relative mx-auto w-full max-w-md lg:mx-0">
        <div
          class="relative aspect-4/5 overflow-hidden rounded-2xl border border-white/10 bg-black ring-1 ring-inset ring-white/5"
        >
          <img
            src="/img/me_home.webp"
            :alt="t('editorAbout.photoAlt')"
            class="h-full w-full object-cover object-[50%_28%]"
            loading="lazy"
          />
          <!-- Guias de área segura -->
          <div
            class="pointer-events-none absolute inset-[6%] border border-white/25"
            aria-hidden="true"
          ></div>
          <div
            class="pointer-events-none absolute inset-[11%] border border-dashed border-white/15"
            aria-hidden="true"
          ></div>
          <span
            class="absolute bottom-4 left-4 rounded-full bg-black/70 px-3 py-1 font-mono text-xs text-editor backdrop-blur-sm"
            aria-hidden="true"
          >
            A001_C004
          </span>
        </div>
      </figure>

      <div>
        <header v-motion-scroll-visible class="mb-8">
          <p class="mb-4 text-xs font-semibold tracking-[0.18em] text-editor uppercase">
            {{ t('editorAbout.eyebrow') }}
          </p>
          <h2
            id="about-heading"
            class="text-4xl font-black tracking-tight text-fg text-balance md:text-5xl"
          >
            {{ t('editorAbout.title') }}
          </h2>
        </header>

        <p class="max-w-2xl text-lg leading-relaxed text-fg-muted text-pretty">
          {{ t('editorAbout.text') }}
          <span class="font-semibold text-fg">{{ t('editorAbout.textHighlight') }}</span>
        </p>

        <dl class="mt-10 grid gap-8 sm:grid-cols-2">
          <div>
            <dt class="mb-3 font-mono text-xs tracking-wider text-fg-muted uppercase">
              {{ t('editorAbout.workedWith') }}
            </dt>
            <dd>
              <ul class="flex flex-wrap gap-2">
                <li
                  v-for="channel in clientChannels"
                  :key="channel.key"
                  class="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-fg"
                >
                  {{ channel.name }}
                </li>
              </ul>
            </dd>
          </div>
          <div>
            <dt class="mb-3 font-mono text-xs tracking-wider text-fg-muted uppercase">
              {{ t('editorAbout.toolsLabel') }}
            </dt>
            <dd class="text-fg text-pretty">{{ t('editorAbout.tools') }}</dd>
          </div>
        </dl>
      </div>
    </div>
  </section>
</template>
