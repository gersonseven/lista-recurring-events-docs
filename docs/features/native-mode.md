---
sidebar_position: 5
---

# Native Events Mode

Use Lista Recurring Events without any custom field plugin.

## Overview

Native Events Mode provides a built-in **Events** post type with all the date, time, location, and meeting URL fields you need — no ACF, Meta Box, JetEngine, or any other custom field plugin required.

This is ideal if:

- You don't use a custom field plugin and don't want to install one
- You want the simplest possible setup
- You're building a dedicated events site and don't need fields for other purposes

## Setup Wizard

When you first activate Native Events Mode, a setup wizard guides you through the initial configuration:

1. **Post Type** — Confirms the built-in Events post type will be registered
2. **Fields** — Shows which fields are included (start date, end date, start time, end time, location, meeting URL)
3. **Ready** — Completes setup and takes you to create your first event

## Included Fields

Native Mode registers these fields automatically in the event editor:

| Field | Description |
|-------|-------------|
| **Start Date** | Event start date (required) |
| **End Date** | Event end date (for multi-day events) |
| **Start Time** | Event start time |
| **End Time** | Event end time |
| **Location** | Venue or address |
| **Meeting URL** | Link for online events |

These fields appear in a dedicated metabox alongside the recurrence settings.

## Switching Modes

You can switch between Native Mode and Integration Mode at any time:

1. Go to **Recurring Events → Settings → Advanced**
2. Use the **Mode Switcher**
3. Select your preferred mode

### Native → Integration

When switching to Integration Mode, you'll need to:

- Have a custom field plugin installed (ACF, Meta Box, etc.)
- Configure your date field name in plugin settings
- Set up your own post type if you want something other than the built-in Events type

### Integration → Native

When switching to Native Mode:

- The built-in Events post type becomes active
- Your existing events in other post types remain untouched
- You can run both modes conceptually (native Events post type + other configured post types)

## When to Use Native Mode

| Scenario | Recommended Mode |
|----------|-----------------|
| No custom field plugin installed | Native |
| Already using ACF/Meta Box for other things | Integration |
| Want the simplest setup possible | Native |
| Need custom fields beyond date/time/location | Integration |
| Building a dedicated events-only site | Either works |
| Multiple post types as events | Integration |

## Compatibility

Native Mode works with all other plugin features:

- Bricks Builder and Elementor integrations
- Calendar display
- AJAX filtering
- Add to Calendar
- Schema.org structured data
- Overrides and exclusions
- All shortcodes and dynamic tags
