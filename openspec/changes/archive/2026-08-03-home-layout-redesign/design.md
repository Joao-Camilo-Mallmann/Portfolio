# Technical Design: Home Page Layout Redesign

## Context

The current `HomeView.vue` follows a traditional portfolio structure: a fixed navbar (`HeaderCore`), a 65vh split panel (`HomeSplitter`), an about section with an avatar, skill cards, philosophy text, and a comprehensive footer (`FooterContact`). While functional, it does not deliver the editorial, cinematic experience aligned with high-end tech portfolios (e.g., Stripe, Linear, Apple, Framer).

This technical design details the architecture, component decomposition, data handling, animation patterns, and responsive strategies required to implement the new storytelling-driven home page layout.

## Goals / Non-Goals

### Goals
- Replace the 65vh split panel with an immersive 100vh full-bleed interactive Hero section (`HeroSection.vue`) featuring two background panels (Developer & Video Editor) with a floating personal identity overlay.
- Build a continuous, storytelling-driven scroll flow composed of 10 modular sub-components under `src/components/Home/`.
- Provide smooth micro-interactions (staggered spring entrance, competitive 60/40 hover expansion, scroll indicators, interactive tech chips, scroll-snap video gallery).
- Maintain 100% compatibility with existing design tokens (`--color-dev`, `--color-editor`, `--color-obsidian`, etc.) and dark mode aesthetics.
- Preserve accessibility (WCAG AA text contrast, `prefers-reduced-motion` compliance, minimum 40x40px hit areas, semantic HTML landmarks).
- Implement clean i18n support in both Portuguese (`pt-BR`) and English (`en`).

### Non-Goals
- No changes to sub-page routes (`/dev`, `/editor`, `/easter-egg`) or their dedicated components.
- No changes to CSS variables or design system color tokens in `src/assets/main.css`.
- No introduction of new third-party npm packages (e.g., GSAP, Swiper, Locomotive Scroll).
- No light mode theme support (portfolio is strictly dark obsidian themed).

---

## Decisions

### 1. Component Architecture & File Structure

The home page layout will be decomposed into 10 modular, single-responsibility components under `src/components/Home/`, orchestrated by `src/views/HomeView.vue`.

```
src/
├── components/
│   └── Home/
│       ├── HeroSection.vue       # 100vh split background panels + floating identity
│       ├── ScrollIndicator.vue   # Animated "↓ Scroll to discover" indicator
│       ├── FloatingSocials.vue   # Floating social links (GitHub, LinkedIn, Email)
│       ├── StorytellingSection.vue # "Beyond the Code" bio + photo + language toggle
│       ├── StatsHighlights.vue   # Counter grid (years, projects, hours, videos)
│       ├── TimelineSection.vue    # Career evolution timeline (2021 -> Today)
│       ├── TechChips.vue         # Interactive technology badge chips
│       ├── FeaturedProjects.vue  # Apple-style curated project cards
│       ├── VideoGallery.vue      # Cinematic horizontal video showcase
│       └── MinimalContact.vue    # Simple CTA ending section
└── views/
    └── HomeView.vue              # Main home view orchestrator
```

#### Component Responsibilities:

1. **`HeroSection.vue`**: Fills 100vh/100dvh. Houses two flex background panels with Unsplash images (Developer code studio / Editor premiere suite) and an absolutely-positioned floating identity overlay (photo `eu.jpg`, name, dual title, subtitle).
2. **`ScrollIndicator.vue`**: Positioned at bottom center of the hero section with a bouncing CSS keyframe animation prompting users to scroll.
3. **`FloatingSocials.vue`**: Fixed/absolute icon bar at bottom left of hero section providing quick access to social profiles.
4. **`StorytellingSection.vue`**: Asymmetric layout containing profile photo, narrative bio, and embedded language toggle component.
5. **`StatsHighlights.vue`**: 4-column metric counter grid displaying key achievements with spring pop animations.
6. **`TimelineSection.vue`**: Horizontal chronological milestones detailing progression from 2021 to Present.
7. **`TechChips.vue`**: Floating chip badges organized by domain (Frontend, Backend, Audiovisual, Tools) replacing linear progress bars.
8. **`FeaturedProjects.vue`**: Showcase of top 3-4 curated projects with full-width cards, high-res previews, and subtle scale-up on hover.
9. **`VideoGallery.vue`**: Horizontal scrolling container with CSS scroll-snap (`snap-x snap-mandatory`) presenting video work previews.
10. **`MinimalContact.vue`**: Minimalist closing section with headline "Let's build something together." and primary contact actions.

---

### 2. Hero Panel Architecture & Micro-Interactions

```
+-------------------------------------------------------------------+
| Floating Photo (top-left)                                         |
|                                                                   |
|              +-------------------------------------+              |
|              |      FLOATING PERSONAL IDENTITY     |              |
|              |   (João Camilo - Dev & Video Editor) |              |
|              +-------------------------------------+              |
|                                                                   |
| [ DEV PANEL ] (Flex 50% -> 60%) | [ EDITOR PANEL ] (Flex 50% -> 60%)|
|  Background: Code Studio        |  Background: Premiere Suite     |
|                                 |                                 |
| Floating Socials (bottom-left)    Scroll Indicator (bottom-center)|
+-------------------------------------------------------------------+
```

- **Flex-Basis Expansion**: The split panels use a flex container layout (`flex: 1 1 50%`). Hovering over the Developer panel transitions its `flex-basis` to `60%` while reducing the Editor panel to `40%` (and vice-versa), using `transition: flex-basis 0.72s cubic-bezier(0.4, 0, 0.2, 1)`.
- **Z-Index Layering**:
  - `z-0`: High-resolution background images with `transform` scale on hover (`scale(1.07)`).
  - `z-1`: Multi-layer radial/linear dark gradient overlays to guarantee WCAG AA contrast.
  - `z-2`: Diagonal shine sweep (`.panel-shine`).
  - `z-5`: Glowing vertical divider (`.panels-divider`).
  - `z-10`: Floating identity container with `pointer-events: none` on wrapper and `pointer-events: auto` on interactive CTA buttons.
- **Click Transition**: Clicking a panel expands it to `flex-basis: 100%`, applies a blur effect (`filter: blur(12px)`) and fade-out to the unselected panel, and executes `router.push('/dev')` or `router.push('/editor')` after an 880ms timeout.

---

### 3. Animation Strategy & Zero New Dependencies

All animations leverage existing project tooling: **`@vueuse/motion`** for entrance and scroll-reveal transitions, and **CSS keyframes** for continuous loops and pseudo-element effects.

| Pattern | Technique | Implementation Detail |
|---|---|---|
| Section Reveals | VueUse Motion | `v-motion-scroll-visible` with spring physics (`stiffness: 180, damping: 14`) |
| Hero Entrance | Motion + Stagger | `initial` opacity 0 / y: 30, staggered delays (80ms increments) |
| Card Hover | Tailwind + CSS | `transition-transform duration-300 hover:-translate-y-1` |
| Floating Elements | CSS Keyframes | `@keyframes float` translateY(-5px to 0px) continuously |
| Shimmer Effects | CSS Pseudo-elements | `::after` gradient sliding across titles (`@keyframes shimmer`) |
| Underline Draw | CSS Keyframes | `transform: scaleX(1)` with `transform-origin: left` |

---

### 4. i18n Strategy

Translations follow the established modular structure in `src/i18n/home/pt-BR.js` and `src/i18n/home/en.js`, integrated via `useI18n()`.

#### New Key Structure:
- `home.hero.*`: Headline, subtitle, taglines, button labels, aria tags.
- `home.storytelling.*`: Section header, bio paragraphs, experience callout.
- `home.stats.*`: Labels for years, projects, coding hours, video productions.
- `home.timeline.*`: Milestone dates, titles, and descriptions (2021–Today).
- `home.techChips.*`: Domain category titles and badge labels.
- `home.featured.*`: Section title, card tags, view project CTAs.
- `home.videoGallery.*`: Section title, channel link, preview labels.
- `home.minimalContact.*`: Heading, subtext, action links.

---

### 5. Data Strategy

- **Tech Chips**: Defined directly inside `TechChips.vue` as a structured array containing icon classes, category (`dev` / `editor`), tag name, and color theme.
- **Featured Projects**: Curated list of 3-4 top projects extracted from `DevProjectsSection.vue` data structure, passed as props or imported from a shared data module.
- **Video Gallery**: Reuses YouTube feed / playlist fetch logic from `PlaylistSection.vue`, with static video fallbacks (thumbnails, titles, YouTube URLs, preview videos).
- **Stats Highlights**: Static metric definitions matching i18n keys with animated counter interpolation.

---

### 6. Responsive & Mobile Strategy

| Viewport | Layout Adaptation | Touch / Hover Adjustments |
|---|---|---|
| Desktop (>=1024px) | Full 100vh hero split, 60/40 competitive hover, side-by-side storytelling, multi-column grid | Full hover animations enabled |
| Tablet (768px - 1023px) | 100vh hero split with adjusted text sizing, 2-column project grid | Touch tap triggers preview state |
| Mobile (<768px) | Hero panels stack vertically (`50dvh` each), 1-column project cards, vertical timeline axis | Flex-basis hover expansion disabled; video gallery uses CSS scroll-snap |

#### iOS Dynamic Viewport Fix:
Hero container uses `height: 100dvh` (Dynamic Viewport Height) with `min-height: 100vh` fallback to prevent layout shifting caused by iOS Safari's auto-collapsing address bar.

---

### 7. SEO & Accessibility (a11y)

- **Metadata**: `useHead` retained in `HomeView.vue` with updated title ("João Camilo | Software Developer & Video Editor"), description, OpenGraph images, and canonical links.
- **Semantic Structure**: Proper HTML5 landmarks (`<header>`, `<main>`, `<section>`, `<footer>`, `<nav>`).
- **Hit Areas**: All clickable elements (social icons, language toggle, project cards) adhere to minimum **40x40px** touch target criteria with `active:scale-95` feedback.
- **Reduced Motion**: CSS `@media (prefers-reduced-motion: reduce)` block included in all scoped styles to suppress keyframes and transitions for users preferring reduced motion.

---

## Risks / Trade-offs

| Risk | Impact | Mitigation Strategy |
|---|---|---|
| **Text Legibility over Hero Backgrounds** | High | Deep multi-layered dark overlays (`rgba(0,0,0,0.85)` bottom to `rgba(0,0,0,0.3)` top) + explicit `text-shadow: 0 2px 16px rgba(0,0,0,0.9)` on all floating text. |
| **Mobile 100vh Jumps (iOS Safari)** | Medium | Use CSS `100dvh` primary sizing with `100vh` fallback. Disable heavy height transitions on mobile resize events. |
| **Video Autoplay Restrictions on Mobile** | Low/Medium | Use `muted`, `playsinline`, `autoplay` attributes on video elements. Fall back gracefully to high-res poster images if video playback is blocked by battery saver / browser policy. |
| **Animation Performance Bottlenecks** | Medium | Animate only GPU-accelerated properties (`transform`, `opacity`). Use `visible-once` on Motion directives so elements remain rendered after initial reveal. |
