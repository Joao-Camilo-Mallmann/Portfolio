// Traduções em Português (Brasil)
// Importa e unifica traduções contextuais das subpastas
import ptBRDev from './dev/pt-BR.js'
import ptBREditor from './editor/pt-BR.js'
import ptBRHome from './home/pt-BR.js'
import ptBRSecret from './secret/pt-BR.js'

export default {
  // Seções compartilhadas (footer, social, seo, header, loading)
  footer: {
    title: 'Vamos Trabalhar Juntos?',
    subtitle: 'Estou sempre aberto a novos projetos e colaborações.',
    ctaDefault: 'Entre em contato comigo!',
  },

  social: {
    linkedin: 'LinkedIn',
    github: 'GitHub',
    youtube: 'YouTube',
    whatsapp: 'WhatsApp',
    email: 'E-mail',
    curriculo: 'Currículo',
    discord: 'Discord',
  },

  seo: {
    homeTitle: 'João Camilo Mallmann | Desenvolvedor Frontend Vue.js & Editor de Vídeo',
    homeDescription:
      'Portfólio de João Camilo Mallmann - Desenvolvedor Frontend especialista em Vue.js/JavaScript e Editor de Vídeo profissional com Adobe Premiere Pro e After Effects.',
    homeKeywords:
      'João Camilo Mallmann, desenvolvedor frontend, Vue.js, JavaScript, editor de vídeo, Adobe Premiere Pro, portfolio, freelancer Brasil',
    ogTitle: 'João Camilo Mallmann | Desenvolvedor Frontend & Editor de Vídeo',
    ogDescription:
      'Portfólio profissional: Desenvolvimento web com Vue.js e edição audiovisual com Adobe Creative Suite.',
    twitterTitle: 'João Camilo Mallmann | Desenvolvedor Frontend & Editor de Vídeo',
    twitterDescription: 'Desenvolvedor Frontend e Editor de Vídeo profissional.',
  },

  header: {
    home: 'Home',
    dev: 'Dev',
    editor: 'Editor',
    developer: 'Desenvolvedor',
    videoEditor: 'Editor de Vídeo',
  },

  loading: 'Carregando experiência...',

  // Seções contextuais (importadas das subpastas)
  ...ptBRHome,
  ...ptBRDev,
  ...ptBREditor,
  ...ptBRSecret,
}
