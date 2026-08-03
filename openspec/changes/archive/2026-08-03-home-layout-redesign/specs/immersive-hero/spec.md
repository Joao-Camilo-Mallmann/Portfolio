# Capability: immersive-hero

Full 100vh hero with two full-bleed interactive panels as background, personal identity floating on top.

## ADDED Requirements

### Requirement: Viewport-Filling Hero Layout Without Header
The hero section SHALL occupy exactly `100vh` of the viewport height such that no subsequent page content is visible prior to scrolling. The hero section SHALL NOT render a traditional header or `HeaderCore` navbar component.

#### Scenario: User visits the home page on desktop
WHEN a user navigates to the home page (`/`)
THEN the hero section fills exactly 100% of the viewport height (`100vh`)
AND no content below the hero section is visible without scrolling
AND no traditional navbar or `HeaderCore` component is rendered inside the hero.

---

### Requirement: Full-Bleed Interactive Dual Background Panels
The background of the hero section SHALL consist of two side-by-side flex container panels: a Developer panel on the left and a Video Editor panel on the right. Each panel SHALL feature a full-bleed background image representing its respective creative track.

#### Scenario: Initial rendering of dual background panels
WHEN the hero section renders
THEN the left side displays the Developer panel with its track background image
AND the right side displays the Video Editor panel with its track background image
AND together both panels fill 100% of the width and height of the hero background.

---

### Requirement: Panel Content and Call to Action
Each panel SHALL display its track title, a short description, and a Call-To-Action (CTA) link. The Developer panel SHALL display an "Explore Projects →" link, and the Video Editor panel SHALL display a "Watch Portfolio →" link.

#### Scenario: Viewing panel descriptions and CTAs
WHEN observing the Developer and Video Editor panels
THEN the Developer panel displays its title, short description, and the CTA link "Explore Projects →"
AND the Video Editor panel displays its title, short description, and the CTA link "Watch Portfolio →".

---

### Requirement: Smooth Hover Expansion and Compression Dynamics
When hovering over either panel, the hero background layout SHALL smoothly adjust flex width using CSS flex-basis transitions. Hovering over one panel SHALL expand its width to 60% while shrinking the opposite panel to 40%.

#### Scenario: Hovering over the Developer panel
WHEN a user moves the cursor over the Developer panel on the left
THEN the Developer panel expands smoothly to 60% of the total hero width
AND the Video Editor panel shrinks smoothly to 40% of the total hero width.

#### Scenario: Hovering over the Video Editor panel
WHEN a user moves the cursor over the Video Editor panel on the right
THEN the Video Editor panel expands smoothly to 60% of the total hero width
AND the Developer panel shrinks smoothly to 40% of the total hero width.

#### Scenario: Mouse leaves both panels
WHEN the user moves the cursor away from both panels
THEN both panels smoothly return to an equal 50%/50% flex split.

---

### Requirement: Interactive Panel Visual Hover Effects
Each panel SHALL exhibit interactive hover effects upon hover focus, including subtle background image zoom, scale transformation, border highlight colored according to the track's theme (--color-dev blue `#4d91ea` for Developer, --color-editor orange `#eaa64d` for Video Editor), and outer glow shadow effects.

#### Scenario: Hovering over Developer panel for visual effects
WHEN hovering over the Developer panel
THEN the panel displays a blue glow border highlight (`#4d91ea`)
AND the panel background image performs a subtle zoom scale animation.

#### Scenario: Hovering over Video Editor panel for visual effects
WHEN hovering over the Video Editor panel
THEN the panel displays an orange glow border highlight (`#eaa64d`)
AND the panel background image performs a subtle zoom scale animation.

---

### Requirement: Panel Navigation Routing
Clicking anywhere on the Developer panel SHALL navigate the application to the `/dev` route. Clicking anywhere on the Video Editor panel SHALL navigate the application to the `/editor` route.

#### Scenario: Clicking the Developer panel
WHEN a user clicks on the Developer panel or its CTA link
THEN the router navigates to `/dev`.

#### Scenario: Clicking the Video Editor panel
WHEN a user clicks on the Video Editor panel or its CTA link
THEN the router navigates to `/editor`.

---

### Requirement: Floating Personal Identity Overlay
A centered personal identity overlay SHALL float on top of the background panels with a higher z-index (`z-10` or higher). The overlay SHALL display the user's name ('JOÃO CAMILO MALLMANN'), title ('Software Engineer • Creative Developer'), tagline ('Engineering meets Creativity.'), and subtitle text.

#### Scenario: Rendering floating identity on top of hero panels
WHEN the hero section is displayed
THEN the personal identity overlay floats centered above both background panels
AND the name 'JOÃO CAMILO MALLMANN' is prominently displayed
AND the title 'Software Engineer • Creative Developer' and tagline 'Engineering meets Creativity.' are visible
AND the overlay elements have a higher z-index than the background panels.

---

### Requirement: Top-Left Floating Avatar
A small, round profile photo using `/img/eu.jpg` SHALL float at the top-left corner of the hero section.

#### Scenario: Displaying top-left profile photo
WHEN the hero section is visible
THEN a circular profile image referencing `/img/eu.jpg` is positioned at the top-left corner of the viewport.

---

### Requirement: Floating Social Icons
Floating social media links (GitHub, LinkedIn, Email) SHALL be positioned at the bottom-center or bottom-right of the hero section.

#### Scenario: Interacting with floating social links
WHEN viewing the bottom area of the hero section
THEN interactive social icons for GitHub, LinkedIn, and Email are rendered floating above the background
AND clicking an icon opens the corresponding social profile or triggers a `mailto:` link.

---

### Requirement: Animated Scroll Indicator
An animated scroll indicator displaying text '↓ Scroll to discover' SHALL be rendered at the bottom center of the hero section.

#### Scenario: Viewing the scroll indicator
WHEN viewing the bottom center of the hero section
THEN an indicator displaying '↓ Scroll to discover' is present
AND the indicator animates gently to signify scrollable content below.

---

### Requirement: Internationalization (i18n) Support
All textual content in the hero section, including panel titles, descriptions, CTA links, tagline, subtitle, and scroll indicator, SHALL support dual-language localization in `pt-BR` and `en` via the custom `useI18n` composable.

#### Scenario: Switching language locale in the hero
WHEN the active locale is set to `pt-BR`
THEN all hero text elements are displayed in Portuguese
WHEN the active locale is switched to `en`
THEN all hero text elements update reactively to English.
