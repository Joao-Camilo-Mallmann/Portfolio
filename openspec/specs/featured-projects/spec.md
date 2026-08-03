# Capability: featured-projects

Apple-style full-width project showcase section for the home layout redesign.

## ADDED Requirements

### Requirement: Display Featured Projects Section Title
The featured projects section SHALL display a prominent section title localized using the project's i18n system (`pt-BR` and `en`).

#### Scenario: User views the featured projects section header
WHEN the user scrolls to or views the featured projects section
THEN the section header MUST display the localized title (e.g. "Featured Projects" in English or "Projetos em Destaque" in Portuguese) according to the active locale.

### Requirement: Full-Width Apple-Style Card Layout
Featured projects SHALL be rendered as large, full-width showcase cards stacked vertically rather than in a multi-column grid, with each card taking up significant vertical space like an Apple product showcase page.

#### Scenario: User views featured project layout
WHEN the featured projects section is rendered on screen
THEN each project item MUST span the full width of the section container as an independent showcase block rather than being constrained into a multi-column grid cell.

### Requirement: Project Card Structure and Content
Each project card SHALL contain a large hero preview image, project name, minimal description text, and a single call-to-action (CTA) button or link.

#### Scenario: Inspecting a project showcase card
WHEN a project card is displayed
THEN it MUST feature a high-resolution hero preview image, the project title, concise descriptive text, and a single CTA link directing to the project details or live site.

### Requirement: Curated Selection of Projects
The section SHALL display a curated selection of top 3 to 4 most impressive projects sourced from the existing project data.

#### Scenario: Loading curated project items
WHEN the featured projects component loads project data
THEN it MUST select and render exactly 3 to 4 top-tier projects from the portfolio project dataset.

### Requirement: Scroll-Triggered Animations and Parallax Effect
Cards SHALL animate on scroll into view with parallax image displacement during scroll and text slide-in motion.

#### Scenario: User scrolls through featured project cards
WHEN the user scrolls through the featured projects section
THEN text content inside each visible card MUST slide into place smoothly and the hero preview image MUST move with a parallax effect relative to scroll position.

### Requirement: View All Projects Navigation Link
The section SHALL display a "View all projects →" navigation link that directs the user to the `/dev` route when clicked.

#### Scenario: User clicks View All Projects link
WHEN the user clicks on the "View all projects →" link
THEN the application router MUST navigate to the `/dev` route.

### Requirement: Premium Visual Styling
Project cards SHALL incorporate premium visual styling including large rounded corners, subtle drop shadows, generous whitespace, and high-contrast dark themes consistent with the portfolio design system.

#### Scenario: Applying design system styles to project cards
WHEN project cards are rendered in the DOM
THEN they MUST utilize large border-radius tokens, subtle elevation shadows, and expansive padding following design system parameters.

### Requirement: Complete Internationalization Support
All textual elements in the featured projects section, including titles, descriptions, and CTA text, SHALL support dynamic internationalization for `pt-BR` and `en` locales.

#### Scenario: Switching active language locale
WHEN the language locale is changed between `en` and `pt-BR`
THEN all displayed text in the featured projects section MUST immediately update to reflect the newly selected locale.
