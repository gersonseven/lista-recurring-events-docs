---
sidebar_position: 1
---

# Calendar Configuration

Display events in a beautiful, interactive calendar using the `[lre_calendar]` shortcode.

## Overview

The calendar integration uses FullCalendar to provide:

- Monthly grid view
- Click-to-view event details
- Smooth month navigation
- Mobile-responsive design
- Multi-day event support
- Custom theming

![Calendar Overview](/img/calendar.jpg)

## Basic Usage

Add the calendar to any page or post:

```
[lre_calendar]
```

That's it! The calendar displays all events with "Display in calendar" enabled.

## Shortcode Attributes

Customize the calendar with attributes:

```
[lre_calendar theme="dark" height="600px" event_display="link"]
```

### Available Attributes

| Attribute | Description | Default | Options |
|-----------|-------------|---------|---------|
| `theme` | Color theme | default | default, minimal, dark |
| `primary_color` | Override primary color | — | Any hex color |
| `event_bg` | Event background color | — | Any hex color |
| `event_text` | Event text color | — | Any hex color |
| `event_display` | Click behavior | offcanvas | offcanvas, link, none |
| `height` | Calendar height | auto | auto, 600px, 80vh, etc. |
| `post_type` | Filter by post type | all | event, workshop, etc. |
| `view` | Initial view | dayGridMonth | dayGridMonth |
| `class` | CSS class | — | Any class name |

## Theme Presets

### Default Theme

Clean, professional blue styling.

```
[lre_calendar theme="default"]
```

### Minimal Theme

Subtle borders, clean aesthetic.

```
[lre_calendar theme="minimal"]
```

### Dark Theme

Dark background for low-light environments.

```
[lre_calendar theme="dark"]
```

## Custom Colors

Override theme colors per-calendar:

```
[lre_calendar primary_color="#e74c3c" event_bg="#ff6b6b" event_text="#ffffff"]
```

## Event Click Behavior

### Offcanvas (Default)

Slides in a panel from the side with event details.

```
[lre_calendar event_display="offcanvas"]
```

The offcanvas panel shows:
- Event title
- Date and time
- Featured image (optional)
- Excerpt (optional)
- "View Event" button
- Add to Calendar button (if enabled)

### Direct Link

Navigates directly to the event page.

```
[lre_calendar event_display="link"]
```

### Disabled

Events display but aren't clickable.

```
[lre_calendar event_display="none"]
```

## Calendar Height

Control calendar dimensions:

```
[lre_calendar height="600px"]
[lre_calendar height="80vh"]
[lre_calendar height="auto"]
```

- `auto` — Expands to fit content
- Fixed pixel value — Specific height
- Viewport height — Percentage of screen

## Filtering by Post Type

Show events from specific post types:

```
[lre_calendar post_type="workshop"]
[lre_calendar post_type="event,workshop,class"]
```

## Multiple Calendars

Add multiple calendars with different configurations:

```
[lre_calendar post_type="workshop" theme="minimal"]

[lre_calendar post_type="meeting" theme="dark"]
```

Each calendar operates independently.

## Global Settings

Configure defaults in **Recurring Events → Settings → Calendar**:

### View Settings

- **Week Starts On**: Sunday or Monday
- **Default Height**: Auto or fixed
- **Initial View**: Starting calendar view

### Theme & Styling

- **Theme Preset**: Default theme for all calendars
- **Custom Navigation Icons**: Upload custom arrow images

### Event Display

- **Click Behavior**: Default offcanvas/link/none
- **Show Featured Image**: In offcanvas panel
- **Show Excerpt**: In offcanvas panel
- **Show Time**: In offcanvas panel
- **Button Text**: "View Event" button label
- **Open in New Tab**: Link behavior

### Offcanvas Settings

- **Position**: Left or Right
- **Width**: Panel width (e.g., 400px)
- **Background Color**: Panel background
- **Text Color**: Auto-calculated for contrast

### Default Display

- **Default Display for [Post Type]**: Auto-enable calendar display for new posts

## Per-Event Colors

Set custom colors on individual events. Colors can be configured in Settings → Calendar.

![Event Color](/img/event-colors.jpg)

You can change the color headings from here as well.
