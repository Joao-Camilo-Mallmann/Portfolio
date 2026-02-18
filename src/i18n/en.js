// English Translations
// Importa e unifica traduções contextuais das subpastas
import enDev from './dev/en.js'
import enEditor from './editor/en.js'
import enHome from './home/en.js'

export default {
  // Seções compartilhadas (footer, social, seo, header, loading)
  footer: {
    title: "Let's Work Together?",
    subtitle: "I'm always open to new projects and collaborations.",
    ctaDefault: 'Get in touch with me!',
  },

  social: {
    linkedin: 'LinkedIn',
    github: 'GitHub',
    youtube: 'YouTube',
    whatsapp: 'WhatsApp',
    email: 'Email',
    curriculo: 'Resume',
  },

  seo: {
    homeTitle: 'Home',
    homeDescription:
      'João Camilo Mallmann Portfolio - Frontend Developer specializing in Vue.js/JavaScript and Professional Video Editor with Adobe Premiere Pro and After Effects.',
    homeKeywords:
      'João Camilo Mallmann, frontend developer, Vue.js, JavaScript, video editor, Adobe Premiere Pro, portfolio, freelancer Brazil',
    ogTitle: 'João Camilo Mallmann - Frontend Developer & Video Editor',
    ogDescription:
      'Professional portfolio: Web development with Vue.js and audiovisual editing with Adobe Creative Suite.',
    twitterTitle: 'João Camilo Mallmann - Portfolio',
    twitterDescription: 'Frontend Developer and Professional Video Editor.',
  },

  header: {
    home: 'Home',
    dev: 'Dev',
    editor: 'Editor',
    developer: 'Developer',
    videoEditor: 'Video Editor',
  },

  loading: 'Loading experience...',

  // Seções contextuais (importadas das subpastas)
  ...enHome,
  ...enDev,
  ...enEditor,
}
