## 1. i18n — New Translation Keys

- [x] 1.1 Add hero translation keys to `src/i18n/home/pt-BR.js` and `src/i18n/home/en.js`: `home.hero.name`, `home.hero.title`, `home.hero.subtitle`, `home.hero.tagline`, `home.hero.devTitle`, `home.hero.devDescription`, `home.hero.devCta`, `home.hero.editorTitle`, `home.hero.editorDescription`, `home.hero.editorCta`, `home.hero.scrollIndicator`
- [x] 1.2 Add storytelling keys: `home.storytelling.title` ("Beyond the Code."), `home.storytelling.bio`, `home.storytelling.role`
- [x] 1.3 Add stats keys: `home.stats.years`, `home.stats.yearsLabel`, `home.stats.projects`, `home.stats.projectsLabel`, `home.stats.codingHours`, `home.stats.codingHoursLabel`, `home.stats.videoProductions`, `home.stats.videoProductionsLabel`
- [x] 1.4 Add timeline keys: `home.timeline.2021Title`, `home.timeline.2021Desc`, `home.timeline.2022Title`, `home.timeline.2022Desc`, `home.timeline.2023Title`, `home.timeline.2023Desc`, `home.timeline.todayTitle`, `home.timeline.todayDesc`
- [x] 1.5 Add tech chips keys: `home.techChips.title`
- [x] 1.6 Add featured projects keys: `home.featured.title`, `home.featured.viewAll`, individual project `name`, `description`, `cta` keys
- [x] 1.7 Add video gallery keys: `home.videoGallery.title`, `home.videoGallery.viewAll`
- [x] 1.8 Add minimal contact keys: `home.minimalContact.heading` ("Let's build something together.")

## 2. Hero Section — Core Components

- [x] 2.1 Create `src/components/Home/HeroSection.vue` — 100vh/100dvh container with two flex panels (Developer left, Video Editor right). Background images via Unsplash. Dark gradient overlays for text contrast. Competitive flex-basis hover (50/50 → 60/40). Click expands panel to 100% + blur other + navigate after 880ms delay. Panel content: icon, title, short description, CTA link
- [x] 2.2 Add floating personal identity overlay inside HeroSection — absolutely positioned z-10 container with: profile photo (`/img/eu.jpg`, small, round) at top-left, centered name (JOÃO CAMILO MALLMANN), title (Software Engineer • Creative Developer), tagline ("Engineering meets Creativity."), subtitle. `pointer-events: none` on wrapper, `pointer-events: auto` on interactive elements
- [x] 2.3 Create `src/components/Home/ScrollIndicator.vue` — animated "↓ Scroll to discover" at bottom center of hero with CSS `@keyframes` bounce animation
- [x] 2.4 Create `src/components/Home/FloatingSocials.vue` — floating social icon links (GitHub, LinkedIn, Email) at bottom-left/bottom-right of hero. Spring pop-in on mount with stagger delay. Use existing social link URLs

## 3. Storytelling Section

- [x] 3.1 Create `src/components/Home/StorytellingSection.vue` — "Beyond the Code." section with large title, asymmetric layout (photo left + name/title/bio right on desktop, stacked on mobile). Uses `/img/eu.jpg`. Language toggle (🇧🇷/🇺🇸) integrated inside this section using existing `toggleLocale` from `useI18n`
- [x] 3.2 Create `src/components/Home/StatsHighlights.vue` — 4-column grid of stats (4+ Years, 30+ Projects, Thousands of hours coding, Video productions). Spring pop entrance on `v-motion-scroll-visible` with stagger. Responsive: 2-col on tablet, 1-col on mobile
- [x] 3.3 Create `src/components/Home/TimelineSection.vue` — horizontal timeline with 4 milestones (2021, 2022, 2023, Today). Line draws in with `scaleX` animation. Nodes pop in with stagger delay. Vertical layout on mobile (<768px)

## 4. Tech Stack & Projects

- [x] 4.1 Create `src/components/Home/TechChips.vue` — "Tech Stack" section with floating chip badges in a flex-wrap centered layout. Technologies: Vue, Nuxt, React, TypeScript, Rust, Node, Docker, Git, Figma, Premiere, After Effects, Motion Graphics. Spring pop-in with stagger on scroll. Subtle hover scale + glow. Chips styled with dev/editor color accents based on category
- [x] 4.2 Create `src/components/Home/FeaturedProjects.vue` — "Featured Projects" section with Apple-style full-width cards. Top 3-4 curated projects from existing data (Vimasi, Industrial Dashboard, Better Rich Presence, Portfolio). Each card: large image, minimal text, single CTA. Scroll-triggered parallax on image + text slide-in. "View all projects →" link to `/dev`

## 5. Video Gallery & Contact

- [x] 5.1 Create `src/components/Home/VideoGallery.vue` — "Video Portfolio" section with cinematic horizontal scroll gallery. CSS scroll-snap (`snap-x snap-mandatory`). Video thumbnails in 16:9 aspect ratio. Autoplay muted on hover (`muted`, `playsinline`). Skeleton loading states. Data from YouTube RSS (reuse PlaylistSection pattern). "View full portfolio →" link to `/editor`. Touch/swipe support on mobile
- [x] 5.2 Create `src/components/Home/MinimalContact.vue` — "Let's build something together." heading with 3 social links (GitHub, LinkedIn, Email). Minimal whitespace-rich styling. No copyright, no large footer. Scroll-visible entrance animation

## 6. HomeView Rewrite

- [x] 6.1 Rewrite `src/views/HomeView.vue` template — remove HeaderCore, HomeSplitter, profile avatar section, language toggle, greeting card, skill cards grid, philosophy section, and FooterContact. Compose new template: `<hero-section />` → `<storytelling-section />` → `<stats-highlights />` → `<timeline-section />` → `<tech-chips />` → `<featured-projects />` → `<video-gallery />` → `<minimal-contact />`
- [x] 6.2 Update `src/views/HomeView.vue` script — update imports to new Home/ components. Update `useHead` meta (title, description, OG tags) to match new page content. Remove unused composable calls and router helpers that are no longer needed
- [x] 6.3 Remove old scoped styles from HomeView that referenced removed components (orbit dots, card-float, skill-card, name-highlight animations)

## 7. Responsive & Polish

- [x] 7.1 Test and tune hero panels stacking on mobile (<768px) — panels stack vertically at 50dvh each, flex-basis hover expansion disabled
- [x] 7.2 Verify text contrast over hero background images — ensure WCAG AA compliance with dark overlays and text-shadow
- [x] 7.3 Add `@media (prefers-reduced-motion: reduce)` blocks to all new components with CSS keyframe animations
- [x] 7.4 Verify all interactive elements have minimum 40x40px hit areas and `active:scale-95` feedback
- [x] 7.5 Test full i18n toggle flow — all new sections switch cleanly between pt-BR and en
- [x] 7.6 Verify SEO: `useHead` title/description/OG/Twitter cards updated, semantic HTML landmarks, proper heading hierarchy (single h1)
