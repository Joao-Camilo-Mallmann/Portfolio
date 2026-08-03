# Capability: video-gallery

Cinematic horizontal scrolling video gallery section for the home layout redesign.

## ADDED Requirements

### Requirement: Display Video Portfolio Section Title
The video gallery section SHALL display a section title (e.g. "Video Portfolio") localized in `pt-BR` and `en`.

#### Scenario: User views the video portfolio title
WHEN the video gallery section is rendered
THEN it MUST display the section header localized according to the current locale (`pt-BR` or `en`).

### Requirement: Horizontal Scrolling Gallery Container
The video gallery SHALL be organized as a horizontal scrolling container with cinematic aspect ratio (16:9) video thumbnails.

#### Scenario: Rendering the video gallery items
WHEN video gallery items are rendered
THEN they MUST be aligned horizontally within a single-row scrollable container with thumbnails styled in a cinematic 16:9 aspect ratio.

### Requirement: Hover Autoplay Muted Preview
Videos SHALL automatically begin muted video playback when hovered by the user cursor, and pause when the cursor leaves the item.

#### Scenario: User hovers cursor over a video thumbnail
WHEN the user moves the mouse cursor over a video card thumbnail
THEN the video MUST immediately start playing automatically with audio muted.

#### Scenario: User moves cursor away from video thumbnail
WHEN the mouse cursor leaves the video card thumbnail
THEN video playback MUST pause and reset to the poster image frame.

### Requirement: CSS Scroll-Snap Behavior
The horizontal scrolling container SHALL utilize CSS scroll-snap properties to provide smooth, aligned scrolling between video items.

#### Scenario: Scrolling horizontally through gallery items
WHEN the user scrolls horizontally through the video gallery
THEN the container scroll position MUST snap smoothly to align with the nearest video item boundary.

### Requirement: YouTube Data Integration
Video metadata SHALL be sourced from YouTube using the existing RSS feed fetch pattern utilized by `PlaylistSection`.

#### Scenario: Fetching video portfolio items
WHEN the video gallery component initializes
THEN it MUST fetch video data (titles, thumbnails, video IDs) from the YouTube RSS feed service.

### Requirement: Interactive Video Selection
Clicking a video thumbnail card SHALL open or play the full video (via modal, inline expanded player, or direct YouTube link).

#### Scenario: User selects a video card
WHEN the user clicks on a video thumbnail card
THEN the full video player MUST launch or open for viewing.

### Requirement: Skeleton Loading States
The gallery SHALL display animated skeleton loader placeholders while video data is being fetched from the RSS feed.

#### Scenario: Video data is loading
WHEN the video gallery is fetching RSS feed data
THEN it MUST display animated skeleton placeholders matching the dimensions of cinematic video cards.

### Requirement: Mobile Touch and Swipe Responsiveness
On mobile viewports, the video gallery SHALL remain horizontally scrollable using touch drag and swipe gestures.

#### Scenario: User swipes gallery on a mobile device
WHEN a user performs a horizontal swipe gesture on the video gallery on a mobile screen
THEN the gallery container MUST smoothly scroll through items matching the swipe gesture.

### Requirement: View Full Portfolio Navigation Link
The section SHALL feature a "View full portfolio →" link that navigates the user to the `/editor` route when clicked.

#### Scenario: User clicks View Full Portfolio link
WHEN the user clicks the "View full portfolio →" link
THEN the router MUST navigate to the `/editor` page.

### Requirement: Complete Internationalization Support
All user-facing text within the video gallery section SHALL support dynamic i18n localization in `pt-BR` and `en`.

#### Scenario: Switching active language locale
WHEN the application locale changes between English and Portuguese
THEN all text content in the video gallery section MUST immediately translate to the chosen language.
