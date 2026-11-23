// English Translations - Dev
import profile from '@/data/profile.generated.json'

const syncedDevProfile = profile.devProfile.en

export default {
  // Dev Page
  dev: {
    ariaLabel: 'Development Portfolio',
    seoTitle: 'João Camilo Mallmann | Frontend & Full Stack Developer (Vue.js, React)',
    seoDescription:
      'João Camilo Mallmann Development Portfolio. Frontend and Full Stack Developer specializing in Vue.js, React and TypeScript. Scalable web architecture and performance.',
    seoKeywords:
      'João Camilo Mallmann, frontend developer, full stack developer, Vue.js, React, TypeScript, software architecture, web performance',
    ogTitle: 'João Camilo Mallmann | Frontend & Full Stack Developer',
    ogDescription:
      'Frontend and Full Stack Developer specializing in Vue.js, React and TypeScript. Scalable web architecture and performance.',
    twitterTitle: 'João Camilo Mallmann | Frontend & Full Stack Developer',
    twitterDescription:
      'Frontend & Full Stack Developer | Vue.js & React Specialist. Scalable architecture and web performance.',
    funText: '🎉 Congratulations! You survived my portfolio without crashing!',
    funAchievement: 'Achievement Unlocked:',
    funBadge: '"Brave Visitor" 😎',
    funPS: 'PS: If you found a bug, it was an undocumented feature 🐛✨',
    funKonamiHint:
      "🎮 What if you used the Konami Code anywhere on the site... wouldn't it be cool to have an easter egg? 🤫",
    heroGreeting: 'Hey, Im',
    heroName: profile.identity.shortName,
    ctaProjects: 'View Projects',
    ctaGithub: 'GitHub',
  },

  // Dev Profile Card
  devProfile: {
    role: syncedDevProfile.role,
    description: syncedDevProfile.description,
    summary: syncedDevProfile.summary,
    whatMotivates: 'What motivates me',
    cleanCode: 'Clean Code & Architecture',
    uxDesign: 'UX/UI Design',
    teamwork: 'Team Collaboration',
    innovation: 'Innovation & Learning',
    softSkills: 'Soft Skills',
    softSkillArchitecture: 'Software Architecture',
    softSkillProblemSolving: 'Problem Solving',
    softSkillTeamwork: 'Teamwork',
    softSkillAdaptability: 'Adaptability',
    softSkillAgile: 'Agile Methodologies',
    softSkillCommunication: 'Clear Communication',
    softSkillCriticalThinking: 'Critical Thinking',
    softSkillLearning: 'Continuous Learning',
    experienceTitle: 'Experience & Education',
    currentlyStudying: 'Currently studying',
    engineeringDegree: 'Software Engineering',
    graduatedAs: 'at university and graduated as',
    technicianDegree: 'Industrial Automation Technician',
    technicianPeriod: 'from a federal institute (2019-2023).',
    professionalExperience: 'Professional Experience',
    jobTitle: syncedDevProfile.jobTitle,
    jobCompany: syncedDevProfile.jobCompany,
    jobPeriod: syncedDevProfile.jobPeriod,
    additionalTraining: 'Additional Training',
  },

  // Dev Certifications
  devCerts: {
    title: 'Certifications',
    verify: 'Verify credential',
    aluraTitle: 'Featured Alura courses',
    seeAll: 'See all on LinkedIn',
  },

  // Dev Projects
  devProjects: {
    mainTitle: 'Main Projects',
    subtitle: 'Some of my most relevant work',
    relevantBadge: 'Featured Projects',
    primaryFeatured: 'Primary Project',
    relevantFeatured: 'Most Relevant',
    thisPortfolio: 'This Portfolio',
    public: 'Public',
    private: 'Private',
    restricted: 'Restricted',
    visitSite: 'Visit Site',
    viewSite: 'View Site',
    code: 'Code',
    completed: 'Completed',
    inProgress: 'In Progress',
    active: 'Active',
    project1Title: 'Vimasi Vedações 🔧',
    project1Alt: 'Vimasi Vedações website screenshot',
    project1Desc:
      'High-performance institutional site with Nuxt. Implementation of advanced Technical SEO and SSG (Static Site Generation) strategies, resulting in optimized Core Web Vitals and high conversion rates.',
    project2Title: 'Travel Mate - Tourism Agency',
    project2Alt: 'Travel Mate screenshot',
    project2Desc:
      'Scalable Full Stack solution with modular monolithic architecture in Node.js. Documented RESTful API, integration with optimized SQLite database and automated deployment pipeline on Railway.',
    project3Title: 'Urban Mobility System',
    project3Alt: 'SMU screenshot',
    project3Desc:
      'Mission-critical live panel for fleet and field agent monitoring via WebSockets (Pusher). Operational map optimized for high volume of points combining Google Maps, clustering, and Deck.gl heatmaps with Vue 3, TypeScript, Vuetify, and Pinia.',
    project4Title: 'Personal Portfolio (This Site)',
    project4Alt: 'Personal portfolio icon',
    project4Desc:
      'Technology showcase developed with focus on DX and performance. Uses Vue 3 Composition API, Tailwind v4 and CI/CD automation. Implementation of accessibility (a11y) and semantic SEO practices.',
    project5Title: 'Industrial Monitoring Dashboard ',
    project5Alt: 'Industrial Dashboard icon',
    project5Desc:
      'Full stack solution for real-time monitoring of industrial machines featuring asynchronous simulation, React panels and robust NodeJS REST API. Includes embedded SQLite and Tailwind CSS v4.',
    project6Title: 'Better Rich Presence 🎮',
    project6Alt: 'Better Rich Presence screenshot',
    project6Desc:
      'Lightweight desktop application built with Rust and Tauri with direct Discord RPC/IPC integration. Features a React & TypeScript interface for automatic detection, live preview, and low background resource consumption.',
    project7Title: 'Vimasi Panel — Industrial Catalog & Inventory 📦',
    project7Alt: 'Vimasi Panel screenshot',
    project7Desc:
      'High-performance SPA built with React, TypeScript, Vite, and Tailwind CSS v4 with an intelligent search engine for 1,500+ industrial items. Includes Python scripts for automated PDF parsing and persistence in Supabase (PostgreSQL, RLS).',
    moreProjectsHint: 'Want to see more complete projects, experiments, and real-world cases?',
    moreProjectsCta: 'See More Projects on GitHub',
  },

  // Dev Stack
  devStack: {
    title: 'Tech Stack',
    subtitle: 'Main technologies I use in development',
    categories: {
      core: 'Core & Languages',
      frontend: 'Frontend Ecosystem',
      design: 'UI & Design Systems',
      backend: 'Runtime & Backend',
      devops: 'DevOps & Cloud',
      databases: 'Databases',
      testing: 'Testing & Quality',
      aiTools: 'AI & Tools',
    },
  },
}
