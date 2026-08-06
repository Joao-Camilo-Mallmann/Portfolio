# Capability: minimal-contact

Simple ending contact section for the home layout redesign.

## ADDED Requirements

### Requirement: Display Call-to-Action Heading
The section SHALL display a prominent call-to-action heading "Let's build something together." localized in `pt-BR` and `en`.

#### Scenario: User views minimal contact section heading
WHEN the user scrolls to the minimal contact section
THEN the heading MUST display "Let's build something together." (or its Portuguese equivalent) clearly centered or aligned on screen.

### Requirement: Exact Social Links Selection
The contact section SHALL display exactly 3 social contact links: GitHub, LinkedIn, and Email.

#### Scenario: Inspecting social links in minimal contact
WHEN the minimal contact section is rendered
THEN it MUST contain exactly 3 social links corresponding to GitHub, LinkedIn, and Email, with no additional social platforms displayed.

### Requirement: Integration with Existing Social Data
Social links SHALL utilize existing URL configurations and social link metadata from the project data.

#### Scenario: User clicks a social contact link
WHEN the user clicks any of the 3 social links (GitHub, LinkedIn, or Email)
THEN the link MUST navigate to the correct target URL specified in the project's existing social link data.

### Requirement: Minimal Footprint Exclusion
The contact section SHALL NOT contain heavy traditional footer elements, copyright text, YouTube links, Discord links, or complex footer sitemaps.

#### Scenario: Verifying absence of traditional footer elements
WHEN the minimal contact section is rendered at the page bottom
THEN copyright notices, secondary navigation footers, YouTube badges, and Discord links MUST NOT be present.

### Requirement: Consistent Hover Effects
Social links SHALL display interactive hover effects (color transition, scale adjustment, or subtle glow) consistent with the design system tokens (`--color-dev`, `--color-editor`).

#### Scenario: User hovers over a social link
WHEN the user hovers over any of the social contact links
THEN the link element MUST smoothly animate using the design system hover state styles.

### Requirement: Minimalist Layout and Whitespace
The section SHALL feature generous whitespace, minimalist visual styling, and clean typographic spacing.

#### Scenario: Rendering minimal contact section layout
WHEN the section is displayed on screen
THEN it MUST present expansive padding around elements without visual clutter or heavy card borders.

### Requirement: Scroll-Triggered Reveal Animation
The section SHALL trigger a reveal animation (fade-in or slide-up) when it becomes visible in the viewport during scroll.

#### Scenario: Minimal contact section comes into viewport
WHEN the user scrolls down and the minimal contact section enters the visible viewport
THEN the section content MUST execute a smooth scroll-triggered entry animation.

### Requirement: Complete Internationalization Support
All text within the minimal contact section SHALL support dynamic internationalization in `pt-BR` and `en`.

#### Scenario: Switching active language locale
WHEN the language locale is toggled between English and Portuguese
THEN all text in the minimal contact section MUST update to match the active locale.
