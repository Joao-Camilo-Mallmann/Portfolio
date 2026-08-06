# Capability: tech-chips

Floating technology chip badges section.

## ADDED Requirements

### Requirement: Tech Stack Section Heading
The section SHALL display a prominent 'Tech Stack' title localized using the project's i18n composable.

#### Scenario: Displaying section header
WHEN scrolling to the technology section
THEN the title 'Tech Stack' is displayed as the section heading in the active language.

---

### Requirement: Floating Badge Format and Centered Flex Layout
Technologies SHALL be rendered as floating chip/badge UI elements arranged inside a flex-wrap centered container with generous spacing between items. The section SHALL NOT use linear progress bars, percentage indicators, or rigid table grids.

#### Scenario: Rendering floating tech chips container
WHEN viewing the tech stack section
THEN technologies are rendered as individual rounded chip/badge elements
AND the chips are positioned within a centered flex-wrap container with generous gap spacing
AND no progress bars or percentage metrics are displayed.

---

### Requirement: Required Technology Chip Items
The tech stack section SHALL include chip badges for the following 12 technologies:
- Vue
- Nuxt
- React
- TypeScript
- Rust
- Node
- Docker
- Git
- Figma
- Premiere
- After Effects
- Motion Graphics

Each chip SHALL display the technology name and MAY optionally include an icon representation.

#### Scenario: Verifying tech stack items
WHEN inspecting the rendered technology chips
THEN chips for Vue, Nuxt, React, TypeScript, Rust, Node, Docker, Git, Figma, Premiere, After Effects, and Motion Graphics are all present
AND each chip displays its corresponding technology label and optional tech icon.

---

### Requirement: Scroll-Triggered Spring Pop Entrance Animations
Tech chips SHALL animate into view using spring pop physics (`@vueuse/motion`) with staggered delay offsets when the section becomes visible upon scrolling.

#### Scenario: Scrolling into the tech chips section
WHEN the user scrolls down to reveal the tech stack section
THEN individual tech chips pop into view with spring motion physics
AND each chip enters sequentially using staggered animation timing.

---

### Requirement: Interactive Hover Scale and Glow Effects
Tech chips SHALL exhibit subtle hover interactions, including a scale increase transformation and a glow box-shadow highlight when a cursor hovers over them.

#### Scenario: Hovering over a tech chip
WHEN a user hovers the cursor over any technology chip badge
THEN the targeted chip scales up slightly
AND displays a luminous glow shadow highlight.

---

### Requirement: Internationalization (i18n) Support
All textual labels within the tech chips section, including the section title and technology names or alt attributes, SHALL support localization in `pt-BR` and `en` via i18n.

#### Scenario: Switching language locale for tech stack
WHEN locale is set to `pt-BR`
THEN the section title and relevant technology labels display in Portuguese
WHEN locale is switched to `en`
THEN the section title and labels update reactively to English.
