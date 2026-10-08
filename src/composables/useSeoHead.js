import { useI18n } from '@/composables/useI18n'
import { useHead } from '@unhead/vue'
import { computed, unref } from 'vue'

const SITE_URL = 'https://joao-camilo-mallmann.com'
const PROFILE_IMAGE_URL = 'https://joao-camilo-mallmann.com/img/eu.jpg'

const SOCIAL_LINKS = [
  'https://github.com/Joao-Camilo-Mallmann',
  'https://www.linkedin.com/in/joão-camilo-mallmann/',
  'https://www.youtube.com/@J.C-12',
]

/**
 * Composable unificado para configuração de SEO On-page, Hreflang, Canonicals e Schema.org (JSON-LD)
 * @param {object} options
 * @param {string} options.path - Caminho relativo sem barra (ex: '' para home, 'dev', 'editor')
 * @param {Function|Ref<string>} options.title
 * @param {Function|Ref<string>} options.description
 * @param {Function|Ref<string>} [options.keywords]
 * @param {Function|Ref<string>} [options.ogTitle]
 * @param {Function|Ref<string>} [options.ogDescription]
 * @param {string} [options.ogImage]
 * @param {Function|Ref<string>} [options.twitterTitle]
 * @param {Function|Ref<string>} [options.twitterDescription]
 */
export function useSeoHead(options) {
  const { isPt } = useI18n()

  const pathSuffix = options.path ? `/${options.path}` : ''
  const currentLang = computed(() => (isPt.value ? 'pt-br' : 'en-us'))
  const htmlLang = computed(() => (isPt.value ? 'pt-BR' : 'en-US'))

  const canonicalUrl = computed(() => `${SITE_URL}/${currentLang.value}${pathSuffix}`)
  const ptUrl = `${SITE_URL}/pt-br${pathSuffix}`
  const enUrl = `${SITE_URL}/en-us${pathSuffix}`
  const xDefaultUrl = `${SITE_URL}/en-us${pathSuffix}` // Fallback internacional oficial

  const resolvedTitle = computed(() =>
    typeof options.title === 'function' ? options.title() : unref(options.title),
  )
  const resolvedDescription = computed(() =>
    typeof options.description === 'function' ? options.description() : unref(options.description),
  )
  const resolvedKeywords = computed(() =>
    options.keywords
      ? typeof options.keywords === 'function'
        ? options.keywords()
        : unref(options.keywords)
      : '',
  )
  const resolvedOgTitle = computed(() =>
    options.ogTitle
      ? typeof options.ogTitle === 'function'
        ? options.ogTitle()
        : unref(options.ogTitle)
      : resolvedTitle.value,
  )
  const resolvedOgDescription = computed(() =>
    options.ogDescription
      ? typeof options.ogDescription === 'function'
        ? options.ogDescription()
        : unref(options.ogDescription)
      : resolvedDescription.value,
  )
  const resolvedTwitterTitle = computed(() =>
    options.twitterTitle
      ? typeof options.twitterTitle === 'function'
        ? options.twitterTitle()
        : unref(options.twitterTitle)
      : resolvedOgTitle.value,
  )
  const resolvedTwitterDescription = computed(() =>
    options.twitterDescription
      ? typeof options.twitterDescription === 'function'
        ? options.twitterDescription()
        : unref(options.twitterDescription)
      : resolvedOgDescription.value,
  )

  const ogImageUrl = options.ogImage || PROFILE_IMAGE_URL

  // Schema.org Graph estruturado e multilíngue
  const schemaOrgGraph = computed(() => ({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: SITE_URL,
        name: 'João Camilo Mallmann Portfolio',
        description: resolvedDescription.value,
        inLanguage: htmlLang.value,
      },
      {
        '@type': 'Person',
        '@id': `${SITE_URL}/#person`,
        name: 'João Camilo Mallmann',
        alternateName: 'João Camilo',
        url: canonicalUrl.value,
        image: PROFILE_IMAGE_URL,
        sameAs: SOCIAL_LINKS,
        jobTitle: isPt.value
          ? ['Desenvolvedor Frontend & Full Stack', 'Editor de Vídeo Profissional']
          : ['Frontend & Full Stack Developer', 'Professional Video Editor'],
        description: resolvedDescription.value,
        inLanguage: htmlLang.value,
        knowsAbout: [
          'Vue.js',
          'Nuxt',
          'React',
          'JavaScript',
          'TypeScript',
          'Tailwind CSS',
          'Adobe Premiere Pro',
          'After Effects',
          'Motion Graphics',
          'Video Editing',
          'Web Performance',
        ],
        worksFor: {
          '@type': 'Organization',
          name: 'Freelancer',
        },
        address: {
          '@type': 'PostalAddress',
          addressCountry: 'BR',
        },
      },
    ],
  }))

  useHead({
    title: resolvedTitle,
    htmlAttrs: {
      lang: htmlLang,
    },
    meta: [
      {
        name: 'description',
        content: resolvedDescription,
      },
      ...(options.keywords
        ? [
            {
              name: 'keywords',
              content: resolvedKeywords,
            },
          ]
        : []),
      // Open Graph
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: canonicalUrl },
      { property: 'og:title', content: resolvedOgTitle },
      { property: 'og:description', content: resolvedOgDescription },
      { property: 'og:image', content: ogImageUrl },
      { property: 'og:locale', content: computed(() => (isPt.value ? 'pt_BR' : 'en_US')) },
      { property: 'og:site_name', content: 'João Camilo Mallmann Portfolio' },
      // Twitter Card
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:url', content: canonicalUrl },
      { name: 'twitter:title', content: resolvedTwitterTitle },
      { name: 'twitter:description', content: resolvedTwitterDescription },
      { name: 'twitter:image', content: ogImageUrl },
    ],
    link: [
      { rel: 'canonical', href: canonicalUrl },
      { rel: 'alternate', hreflang: 'pt-br', href: ptUrl },
      { rel: 'alternate', hreflang: 'en-us', href: enUrl },
      { rel: 'alternate', hreflang: 'x-default', href: xDefaultUrl },
    ],
    script: [
      {
        type: 'application/ld+json',
        innerHTML: computed(() => JSON.stringify(schemaOrgGraph.value)),
      },
    ],
  })

  return {
    canonicalUrl,
    ptUrl,
    enUrl,
    xDefaultUrl,
    htmlLang,
  }
}
