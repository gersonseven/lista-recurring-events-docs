---
sidebar_position: 10
title: Query Behaviour
description: Control how today's in-progress events are treated across every query path.
---

# Query Behaviour

Control how today's in-progress events are treated across the calendar, query loops, shortcodes, and the public API.

## Overview

By default, when an upcoming events list runs at 10:30 AM today, an event scheduled for 8:30 AM – 9:00 AM is *not* shown — it's already finished. But what about an event running right now, from 10:00 AM – 11:00 AM? Should it still appear in "upcoming events"?

That's what the **Query Behaviour** settings control.

You'll find them under **Recurring Events → Settings → Query Behaviour**.

## The Setting

### Treat in-progress events as past

| Mode | Meaning |
| --- | --- |
| **Off** (default) | Events that have started but haven't ended yet are still shown as "upcoming" until their end time has passed. |
| **On** | Events are removed from upcoming results the moment their start time has passed today, even if they haven't ended yet. |

In both modes, events that have *already finished today* are always excluded from upcoming queries — that part doesn't change.

## Where It Applies

The setting affects every upcoming-events query path the plugin owns:

- Bricks Builder query loops (Recurring Events query type)
- Elementor Pro loop grid integration
- The LRE Events Loop widget for Elementor
- The `[lre_events]` shortcode
- The `lre_get_events()` public PHP API
- Frontend AJAX filtering on any of the above

:::note
The **site calendar is not affected** by this setting — the calendar continues to display all events within the visible date range, regardless of whether they're in progress.
:::

## Per-Instance Overrides

Every Bricks query loop, Elementor loop widget, and most filter elements expose a **Hide In-Progress Events** dropdown with three options:

| Option | Behaviour |
| --- | --- |
| **Use Global** | Follow the site-wide setting |
| **Hide once started** | Remove the event as soon as its start time passes |
| **Show until ended** | Keep the event visible while it's running |

This lets you build, for example, a "Happening Now" section that uses **Show until ended**, alongside a "Coming Up Next" section that uses **Hide once started**, on the same page.

## Shortcode and API Parameter

The `[lre_events]` shortcode and `lre_get_events()` public API both accept a `hide_in_progress` argument that mirrors the override:

```
[lre_events hide_in_progress="hide"]
[lre_events hide_in_progress="show"]
[lre_events hide_in_progress="default"]
```

```php
$events = lre_get_events([
    'hide_in_progress' => 'hide', // or 'show', or 'default'
    'per_page'         => 12,
]);
```

`default` (the default value) uses the global setting.

## Choosing the Right Default

A good rule of thumb:

- **Off** (default) suits most sites — visitors landing during an event session can still see it in upcoming lists.
- **On** suits sites where "upcoming" should mean "you can still arrive on time" — gym timetables, lecture schedules, livestream listings.

Whichever you choose, you can always override per loop or per shortcode.
