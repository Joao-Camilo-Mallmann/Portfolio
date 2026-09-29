# Spec Delta

## Purpose

Establishes search engine optimization standards across metadata, hreflang annotations, canonicalization, semantic headings, sitemaps, and structured data.

## ADDED Requirements

### Requirement: Hreflang and Alternate Language Annotations
Every indexable page SHALL output reciprocal `hreflang` alternate links for all supported locales along with an `x-default` entry pointing to the international fallback.

#### Scenario: Alternate tags presence on rendered page
- **WHEN** a page is rendered under either `/pt-br/*` or `/en-us/*`
- **THEN** the `<head>` section SHALL include `<link rel="alternate" hreflang="pt-br" ...>`, `<link rel="alternate" hreflang="en-us" ...>`, and `<link rel="alternate" hreflang="x-default" ...>` pointing to the equivalent page in each language

### Requirement: Self-Referencing Canonical Links
Every indexable page SHALL contain a canonical link tag referencing its own full URL including the active locale prefix.

#### Scenario: Canonical tag on localized page
- **WHEN** any page is rendered at `/pt-br/dev`
- **THEN** the canonical tag href SHALL be `https://joao-camilo-mallmann.com/pt-br/dev`

### Requirement: Keyword-Rich Page Titles and Meta Descriptions
Every page SHALL have a unique title and meta description tailored to the active locale and target keywords, containing the author brand name and primary professional disciplines.

#### Scenario: Viewing home page in Portuguese
- **WHEN** the user visits `/pt-br`
- **THEN** the title SHALL contain "João Camilo Mallmann" alongside "Desenvolvedor Frontend" and "Editor de Vídeo"

#### Scenario: Viewing home page in English
- **WHEN** the user visits `/en-us`
- **THEN** the title SHALL contain "João Camilo Mallmann" alongside "Frontend Developer" and "Video Editor"

### Requirement: Semantic Heading Hierarchy
Every page SHALL contain exactly one primary `<h1>` tag representing the main topic of the page, avoiding duplicate `<h1>` elements in global navigation components.

#### Scenario: Global navigation heading element
- **WHEN** the site header component is rendered
- **THEN** the brand logo title SHALL NOT use an `<h1>` heading tag

### Requirement: International XML Sitemap with Multilingual Alternates
The site SHALL provide an XML sitemap complying with the sitemaps.org standard with `xmlns:xhtml` namespace and alternate links for each URL.

#### Scenario: Inspecting sitemap entries
- **WHEN** the sitemap XML is retrieved
- **THEN** every route entry SHALL specify its canonical location and all reciprocal `xhtml:link` alternate locale entries

### Requirement: Localized and Enriched Structured Data
The site SHALL output JSON-LD structured data representing the Person and WebSite entities, localized to the current page language and linking verified social profiles.

#### Scenario: Inspecting JSON-LD on English view
- **WHEN** an English view is rendered
- **THEN** the JSON-LD schema SHALL specify `inLanguage: "en-US"` and include verified `sameAs` links for GitHub, LinkedIn, and YouTube
