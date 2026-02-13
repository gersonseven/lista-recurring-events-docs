---
sidebar_position: 1
---

# Stored Occurrences

Pre-calculated occurrence storage for instant calendar navigation and faster query loops.

## Overview

In version 1.5.0, Lista Recurring Events introduces the **Stored Occurrences Performance System**. Instead of calculating occurrences on-the-fly every time a page loads, the plugin now pre-calculates and stores occurrences in a dedicated database table.

This means:

- **Instant calendar navigation** — jumping to dates months or years ahead is immediate (previously 5–20+ seconds)
- **Faster query loops** — optimised database queries replace real-time calculations
- **Better scalability** — sites with hundreds of events see the biggest improvements

## How It Works

When you save an event, the plugin calculates all upcoming occurrences and stores them in the `{prefix}_lre_occurrences` database table. Query loops and the calendar then read directly from this table instead of recalculating every time.

### Automatic Extension

Events set to recur "forever" (no end date) can't have infinite occurrences stored. The plugin handles this with a weekly background task:

1. A scheduled task runs via **Action Scheduler** (preferred) or **WP-Cron** (fallback)
2. It checks stored occurrences and extends them further into the future
3. This keeps the stored window ahead of users browsing far-future dates

You don't need to configure this — it happens automatically.

### Regeneration on Save

Every time you save an event's recurrence settings, stored occurrences are regenerated for that event. This includes changes to:

- Recurrence pattern or interval
- End date or occurrence count
- Exception dates
- Custom dates

## Advanced Tab

The Advanced tab in **Recurring Events → Settings** provides tools for managing the stored occurrences system.

### Mode Switcher

Switch between **Native Mode** (built-in Events post type) and **Integration Mode** (use your own post types with a custom field plugin). See [Native Events Mode](./native-mode) for details.

### Reset Plugin Data

A complete fresh start option that clears all plugin data including stored occurrences, settings, and cached calculations. This requires administrator access and a confirmation step.

:::warning
Reset Plugin Data is destructive and cannot be undone. It removes all recurrence settings from your events. Use with caution.
:::

### Data Information Panel

View technical details about your installation:

| Info | Description |
|------|-------------|
| **Table Name** | The database table storing occurrences |
| **Post Types** | Currently configured event post types |
| **Stored Occurrences** | Total count of stored occurrence rows |
| **Plugin Version** | Currently installed version |

## Migration from Earlier Versions

When upgrading from a version before 1.5.0, stored occurrences are generated automatically. The plugin detects events that haven't been migrated and falls back to the calculator for those events until they're saved again.

To bulk-regenerate all events:

1. Open any event and re-save it — occurrences are stored on save
2. Alternatively, editing and saving recurrence settings triggers regeneration

## Performance Comparison

| Scenario | Before 1.5.0 | With Stored Occurrences |
|----------|--------------|-------------------------|
| Calendar month navigation | 5–20+ seconds for distant dates | Instant |
| Query loop with 100 events | Multiple calculations per load | Single database query |
| Filtering by date range | Calculate then filter | Direct database query |
| Events with "Never" end | Limited look-ahead | Auto-extending window |

## Technical Details

- Stored occurrences respect all recurrence settings: pattern, interval, end type, exclusions, and overrides
- The table uses indexed columns for efficient date range queries
- Transient caches are version-stamped and flush automatically on plugin updates
- Query loops intelligently choose between database queries (for date/taxonomy filters) and the calculator (for search/meta queries)
