## Why

The current HomeView layout follows a conventional portfolio pattern — fixed navbar, 65vh split panel, profile avatar, about-me text, two skill cards, philosophy section, and a full footer. While functional, it doesn't match the premium editorial experience the project aspires to. The first screen should immediately communicate "two worlds" (Software Engineering + Video Editing) through an immersive, cinematic hero that fills the entire viewport, followed by a storytelling-driven scroll experience inspired by Apple, Linear, Stripe, and Framer.

## What Changes

- **BREAKING**: Remove `HeaderCore` from `HomeView.vue` — the home page has no traditional navbar
- **BREAKING**: Replace `HomeSplitter` (65vh split) with a full 100vh immersive hero where the two panels ARE the viewport background and personal identity floats on top
- Remove the profile avatar with orbiting dots overlay section from the home
- Remove the language toggle from the hero area
- Remove the two-column skill cards grid (Dev/Editor cards)
- Remove the philosophy article section
- Remove `FooterContact` from the home — replaced by a minimal contact ending
- Add floating profile photo (`eu.jpg`, small, round) at top-left of hero
- Add centered floating identity: name, title, subtitle, tagline over the full-bleed panels
- Add floating social icons (GitHub, LinkedIn, Email) at bottom of hero
- Add animated scroll indicator ("↓ Scroll to discover") at bottom of hero
- Add "Beyond the Code" storytelling section with asymmetric photo + bio layout
- Add language toggle inside the storytelling section
- Add stats highlights (years, projects, coding hours, video productions)
- Add horizontal timeline (2021 → 2022 → 2023 → Today)
- Add floating tech chips section (replacing progress bars)
- Add Apple-style featured project cards (full-width, large images, minimal text)
- Add cinematic horizontal video portfolio gallery (autoplay on hover)
- Add minimal contact section ("Let's build something together." + 3 social links, no large footer)

## Capabilities

### New Capabilities
- `immersive-hero`: Full 100vh hero with two full-bleed interactive panels (Developer/Video Editor) as background, personal identity floating on top, floating social icons, scroll indicator. Panels expand 60/40 on hover with glow, scale, and border animations. Clicking navigates to `/dev` or `/editor`.
- `storytelling-section`: "Beyond the Code" section with asymmetric photo/bio layout, stats highlights with animated counters, horizontal timeline, and language toggle.
- `tech-chips`: Floating technology chip badges replacing progress bars — Vue, Nuxt, React, TypeScript, Rust, Node, Docker, Git, Figma, Premiere, After Effects, Motion Graphics.
- `featured-projects`: Apple-style full-width project showcase cards with large images, minimal text, and single CTA. Curated selection from existing project data.
- `video-gallery`: Cinematic horizontal scrolling gallery for video portfolio. Videos autoplay muted on hover.
- `minimal-contact`: Simple ending section with "Let's build something together." heading and three social links (GitHub, LinkedIn, Email). No large footer.

### Modified Capabilities

_None — no existing spec-level requirements are changing. Sub-pages (`/dev`, `/editor`) and the design system remain untouched._

## Impact

- **Files modified**: `src/views/HomeView.vue` (complete rewrite of template and script)
- **Components removed from home**: `HeaderCore`, `HomeSplitter`, `FooterContact` (components themselves stay — used by sub-pages)
- **New components created**: ~10 new components under `src/components/Home/`
- **i18n**: New translation keys needed across `src/i18n/home/pt-BR.js` and `src/i18n/home/en.js`
- **Dependencies**: No new npm packages — leverages existing `@vueuse/motion`, Tailwind v4, and CSS keyframes
- **Routes**: No routing changes — `/`, `/dev`, `/editor`, `/easter-egg` all remain
- **Design system**: Zero changes to color tokens, typography, animation patterns, or Tailwind theme
