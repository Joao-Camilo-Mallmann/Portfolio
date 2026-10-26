// English Translations - Home
export default {
  home: {
    ariaLabel: 'Portfolio home page',

    // Hero: name + Dev / Editor split
    hero: {
      nameFirst: 'João Camilo',
      nameLast: 'Mallmann',
      roleDev: 'Software Engineer',
      roleEditor: 'Video Editor',
      tagline: 'Engineering meets Creativity.',
      bio: 'Full stack developer and video editor: front end to back end, apps to automations, and videos that hold attention. Pick a side to see the work.',
      splitLabel: 'Choose a portfolio area',
      hint: 'Hover to highlight a side. Click to open it full screen.',
      hintTouch: 'Tap a side to open it.',
      dev: {
        title: 'Developer',
        description: 'Web, back end, desktop apps and automations with Vue, React and Node.',
        cta: 'See projects',
        aria: 'Open the development area',
      },
      editor: {
        title: 'Video Editor',
        description: 'Editing, motion and thumbnails for YouTube channels.',
        cta: 'See portfolio',
        aria: 'Open the video editing area',
      },
    },

    // About + What I do
    about: {
      photoAlt: 'Black and white portrait of João Camilo Mallmann',
      title: 'I build the product and tell its story.',
      text: "I'm a full stack developer and video editor. In code, I build the whole product: Vue and React interfaces, Node APIs, databases, desktop apps and automations. In the edit, I turn hours of footage into videos with rhythm, color and sound in the right place.",
      stats: {
        years: '4+ years',
        yearsTail: 'coding,',
        projects: '30+ projects',
        projectsTail: 'shipped and',
        videos: '30+ videos',
        videosTail: 'edited.',
      },
      servicesTitle: 'What I do',
      frontend: {
        title: 'Interfaces that load fast and work on any phone.',
        sticker: 'Vue + Nuxt',
        sites: ['Vimasi Vedações', 'Travel Mate', 'Urban Mobility', 'Industrial Dashboard'],
      },
      backend: {
        title: 'Back end and APIs',
        text: 'Node, TypeScript, Postgres and Docker.',
      },
      apps: {
        title: 'Apps and automations',
        toggle: 'Automatic daily report',
        toggleState: 'On',
        text: 'Dashboards, Tauri desktop apps and routines that save your team hours.',
      },
      video: {
        title: 'Video editing',
        text: 'Cuts, motion, color and thumbnails for YouTube.',
        sticker: 'Premiere + AE',
      },
    },

    // Contact
    contact: {
      title: 'Got an idea? Let’s make it real.',
      copyEmail: 'Copy my email',
      copied: 'Email copied',
      dev: {
        label: 'Development',
        title: 'I need a developer',
        action: 'See dev projects',
      },
      editor: {
        label: 'Video editing',
        title: 'I need a video editor',
        action: 'See video portfolio',
      },
    },
  },

  // Splitter keys preserved for backwards compat
  splitter: {
    devTitle: 'Developer',
    devDescription: 'Web development projects, apps and automations. Explore my DEV portfolio!',
    devAction: 'Click to view profile',
    editorTitle: 'Video Editor',
    editorDescription:
      'Professional audiovisual creation with Adobe Premiere Pro, Photoshop and After Effects. Videos and social media content',
    editorAction: 'Click to view portfolio',
  },
}
