# Spec Delta

## Purpose

Provides localized URL routing with language prefixing, intelligent visitor locale detection, synchronized language switching, and dual-locale static HTML pre-rendering.

## ADDED Requirements

### Requirement: Localized URL Path Structure
The system SHALL route all portfolio views under explicit lowercase locale prefixes (`/pt-br` and `/en-us`).

#### Scenario: Navigating to localized home
- **WHEN** a user navigates to `/pt-br` or `/en-us`
- **THEN** the system SHALL render the Home view with content matching the specified locale

#### Scenario: Navigating to localized inner view
- **WHEN** a user navigates to `/pt-br/dev` or `/en-us/dev`
- **THEN** the system SHALL render the Developer view with content matching the specified locale

### Requirement: Root Language Auto-Detection with Fallback
The system SHALL detect visitor language preference when accessing the bare root path `/` and redirect to the corresponding localized prefix, defaulting to `/en-us` as the fallback.

#### Scenario: Visitor with Portuguese browser setting
- **WHEN** a visitor with browser language starting with `pt` accesses `/` without an existing stored preference
- **THEN** the system SHALL redirect the visitor to `/pt-br/`

#### Scenario: Visitor with English or other international language
- **WHEN** a visitor with non-Portuguese browser language accesses `/` without an existing stored preference
- **THEN** the system SHALL redirect the visitor to `/en-us/`

#### Scenario: Visitor with stored locale preference
- **WHEN** a visitor who previously selected a language accesses `/`
- **THEN** the system SHALL redirect to the stored locale route

### Requirement: Bidirectional Synchronized Locale Switching
The system SHALL allow users to switch languages via the UI header toggle, navigating to the identical relative path under the target locale.

#### Scenario: Toggling language from a subpage
- **WHEN** a user on `/pt-br/dev` triggers the language switcher to English
- **THEN** the system SHALL navigate to `/en-us/dev` and persist `en-us` in storage

#### Scenario: Toggling language from English home
- **WHEN** a user on `/en-us` triggers the language switcher to Portuguese
- **THEN** the system SHALL navigate to `/pt-br` and persist `pt-br` in storage

### Requirement: Dual Locale Static HTML Generation
The static site generation build SHALL pre-render separate HTML index files for both locales across all public routes.

#### Scenario: Static HTML generation for all supported locales
- **WHEN** the static build command executes
- **THEN** the output directory SHALL contain distinct pre-rendered HTML files for both `/pt-br/` and `/en-us/` variants of all routes
