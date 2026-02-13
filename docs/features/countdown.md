---
sidebar_position: 3
---

# Countdown & Relative Time

Display contextual labels like "Today at 2:00 pm", "Starting in 45 minutes", or a live countdown to upcoming events.

## Overview

The Countdown feature provides smart, time-aware labels for event occurrences. Instead of showing a static date, you can display context that helps visitors understand how soon an event is.

## Display Modes

### Smart Label

Outputs natural-language labels based on proximity:

| Proximity | Output |
|-----------|--------|
| Happening now | "Happening now" |
| Less than 1 hour away | "Starting in 45 minutes" |
| Today | "Today at 2:00 pm" |
| Tomorrow | "Tomorrow at 9:00 am" |
| This week | "Wednesday at 7:00 pm" |
| Further away | "15 January, 2026" |

### Countdown Units

Displays a structured countdown with individual time units:

```
3 days  12 hours  45 minutes  30 seconds
```

Each unit can be toggled on or off in the element settings. The countdown ticks live using JavaScript.

### Compact Badge

A minimal, badge-style display ideal for event cards:

```
3d 12h 45m
```

Compact Badge supports the same unit toggles and live ticking as Countdown Units.

## Usage

### Bricks Builder Element

1. Search for **LRE Countdown** in the elements panel
2. Add it to your event template or query loop
3. Configure the display mode and styling

**Content Settings:**

| Setting | Description |
|---------|-------------|
| **Display Mode** | Smart Label, Countdown Units, or Compact Badge |
| **Show Days** | Toggle days unit visibility |
| **Show Hours** | Toggle hours unit visibility |
| **Show Minutes** | Toggle minutes unit visibility |
| **Show Seconds** | Toggle seconds unit visibility |

**Style Settings:**

Full control over typography, colors, spacing, and per-unit styling. Status-aware color controls let you style "Happening now" differently from a future countdown.

### Bricks Builder Dynamic Tag

Use `{lre_countdown}` in any text element for inline countdown output. The tag uses the Smart Label mode by default.

### Elementor Widget

The **Events Countdown** widget is available in the Lista Recurring Events widget category. It includes both Content and Style tabs with the same configuration options as the Bricks element.

### Shortcode

```
[lre_countdown]
[lre_countdown mode="units"]
[lre_countdown mode="badge"]
[lre_countdown id="123"]
```

| Attribute | Description | Default |
|-----------|-------------|---------|
| `id` | Post ID | Current post |
| `mode` | Display mode: smart, units, badge | smart |

## Live Ticker

In Countdown Units and Compact Badge modes, the display updates in real-time using JavaScript. When the countdown reaches zero, it transitions to "Happening now" automatically.

The live ticker also works correctly with translated labels — if your site is in German, the JavaScript countdown displays German labels to match the server-rendered output.

## "Happening Now" Detection

The countdown is aware of event start and end times. If the current time falls between the start and end of an occurrence, it displays "Happening now" instead of a countdown or a past-event label.

## Context

The countdown element uses the same occurrence context as other LRE elements:

- **In query loops:** Automatically uses each iteration's occurrence
- **On single event pages:** Uses the `?lre_date=` URL parameter or the next upcoming occurrence
- **In shortcodes:** Uses the current post or a specified `id`
