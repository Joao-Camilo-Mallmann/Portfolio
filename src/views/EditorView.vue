<script setup>
import EditorAbout from '@/components/Editor/EditorAbout.vue'
import EditorChannels from '@/components/Editor/EditorChannels.vue'
import EditorFaq from '@/components/Editor/EditorFaq.vue'
import EditorFilmstrip from '@/components/Editor/EditorFilmstrip.vue'
import EditorFinalCta from '@/components/Editor/EditorFinalCta.vue'
import EditorHero from '@/components/Editor/EditorHero.vue'
import EditorProcess from '@/components/Editor/EditorProcess.vue'
import EditorServiceLayers from '@/components/Editor/EditorServiceLayers.vue'
import EditorThumbWall from '@/components/Editor/EditorThumbWall.vue'
import EditorTimelineNav from '@/components/Editor/EditorTimelineNav.vue'
import VideoPlayerModal from '@/components/Editor/VideoPlayerModal.vue'
import FooterContact from '@/components/FooterContact.vue'
import HeaderCore from '@/components/HeaderCore.vue'
import { useI18n } from '@/composables/useI18n'
import { useSeoHead } from '@/composables/useSeoHead'
import { featuredProjects } from '@/data/editorProjects'
import { ref } from 'vue'

const { t } = useI18n()

useSeoHead({
  path: 'editor',
  title: () => t('editor.seoTitle'),
  description: () => t('editor.seoDescription'),
  keywords: () => t('editor.seoKeywords'),
  ogTitle: () => t('editor.ogTitle'),
  ogDescription: () => t('editor.ogDescription'),
  twitterTitle: () => t('editor.twitterTitle'),
  twitterDescription: () => t('editor.twitterDescription'),
})

// Cada clipe da timeline aponta para o id de uma seção da página
// (o FAQ fica dentro do trecho de "Sobre" para a trilha não ficar apertada)
const timelineClips = [
  { id: 'portfolio', labelKey: 'portfolio' },
  { id: 'canais', labelKey: 'channels' },
  { id: 'thumbnails', labelKey: 'thumbnails' },
  { id: 'servicos', labelKey: 'services' },
  { id: 'processo', labelKey: 'process' },
  { id: 'sobre', labelKey: 'about' },
  { id: 'contato', labelKey: 'contact' },
]

const activeVideo = ref(null)

const openPlayer = (project) => {
  activeVideo.value = project
}
</script>

<template>
  <main
    class="page-transition relative min-h-screen overflow-x-clip"
    role="main"
    :aria-label="t('editor.ariaLabel')"
  >
    <header-core />

    <editor-hero @showreel="openPlayer(featuredProjects[0])" />
    <editor-timeline-nav :clips="timelineClips" />

    <editor-filmstrip :projects="featuredProjects" @play="openPlayer" />
    <editor-channels @play="openPlayer" />
    <editor-thumb-wall @play="openPlayer" />
    <editor-service-layers />
    <editor-process />
    <editor-about />
    <editor-faq />
    <editor-final-cta />

    <footer-contact variant="editor" :cta-text="t('footer.ctaDefault')" />

    <video-player-modal :video="activeVideo" @close="activeVideo = null" />
  </main>
</template>
