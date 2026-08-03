# Capability: storytelling-section

'Beyond the Code' section with asymmetric photo/bio, stats, timeline, and language toggle.

## ADDED Requirements

### Requirement: Section Title and Heading
The storytelling section SHALL display a prominent title reading 'Beyond the Code.' localized via the project's i18n system.

#### Scenario: Displaying section title
WHEN the storytelling section is scrolled into view
THEN the title 'Beyond the Code.' is displayed clearly as the section header.

---

### Requirement: Asymmetric Photo and Bio Layout
The section SHALL feature an asymmetric layout containing a personal portrait photo on one side and identity details (name, professional title, and bio text) on the opposite side.

#### Scenario: Rendering photo and biography
WHEN viewing the storytelling section
THEN a photo using `/img/eu.jpg` is positioned asymmetrically alongside the bio content
AND the bio content displays the creator's name, title, and detailed bio narrative.

---

### Requirement: Bio Content Scope
The bio narrative text SHALL describe the developer's passion for combining software engineering performance, user experience usability, and visual creativity.

#### Scenario: Reading bio narrative
WHEN inspecting the bio text
THEN the content explicitly articulates a passion for merging technical performance, UI/UX usability, and creative visual design.

---

### Requirement: Embedded Language Toggle
A language toggle control (🇧🇷/🇺🇸) SHALL be integrated directly within the storytelling section to allow switching between `pt-BR` and `en` locales.

#### Scenario: Toggling locale within the section
WHEN the user clicks the language toggle (🇧🇷/🇺🇸) in the storytelling section
THEN the application locale toggles between Portuguese (`pt-BR`) and English (`en`)
AND all localized strings across the section update reactively.

---

### Requirement: Stat Highlights with Scroll Entrance Animations
The section SHALL display four statistical highlights:
1. 4+ Years
2. 30+ Projects
3. Thousands of hours coding
4. Video productions

The stat highlights SHALL animate into view using count-up numerical effects or `@vueuse/motion` spring pop physics when scrolling into viewport visibility.

#### Scenario: Scrolling down to statistical highlights
WHEN the stats block enters the viewport upon scrolling
THEN the four statistical items (4+ Years, 30+ Projects, Thousands of hours coding, Video productions) animate smoothly into view
AND counters or pop animations execute automatically.

---

### Requirement: Horizontal Timeline with Sequential Scroll Animations
The section SHALL display a timeline with 4 sequential milestones:
- 2021: Started programming
- 2022: Frontend specialization
- 2023: Professional experience
- Today: Engineering + creativity

On desktop viewports (width >= 768px), the timeline SHALL render horizontally. The timeline connecting line SHALL draw in progressively as the section becomes visible on scroll, and the milestone nodes SHALL pop in with a staggered animation delay.

#### Scenario: Desktop viewport timeline rendering
WHEN viewing the timeline on a screen width of 768px or wider
THEN the 4 milestones (2021, 2022, 2023, Today) are arranged horizontally
AND the connecting timeline line draws progressively on scroll
AND each milestone node pops into view with a staggered entrance delay.

---

### Requirement: Responsive Mobile Timeline Transformation
On mobile viewports (width < 768px), the timeline layout SHALL automatically transform from a horizontal layout into a stacked vertical timeline for optimal readability.

#### Scenario: Mobile viewport timeline rendering
WHEN the viewport width is reduced below 768px
THEN the timeline switches automatically to a vertical stacked layout
AND all 4 milestone cards and indicators remain fully accessible and legible.

---

### Requirement: Internationalization (i18n) Support
All textual elements within the storytelling section — including section heading, bio text, stat metric labels, and timeline milestone descriptions — SHALL support `pt-BR` and `en` locales via i18n.

#### Scenario: Viewing storytelling section in Portuguese vs English
WHEN locale is `pt-BR`
THEN heading, bio, stats, and timeline descriptions render in Portuguese
WHEN locale is `en`
THEN heading, bio, stats, and timeline descriptions render in English.
