---
sidebar_position: 2
---

# Event Status & Labels

Set event statuses and custom display labels at the event level or per occurrence.

## Overview

Events can have a **status** (Scheduled, Cancelled, Postponed, Rescheduled) and a freeform **display label** (e.g., "Sold Out", "Almost Full", "Free Entry"). Both can be set globally for the event or overridden for specific occurrences.

## Event Status

### Available Statuses

| Status | Description | Schema.org Value |
|--------|-------------|------------------|
| **Scheduled** | Normal/active event (default) | `EventScheduled` |
| **Cancelled** | Event will not take place | `EventCancelled` |
| **Postponed** | Event delayed, new date TBD | `EventPostponed` |
| **Rescheduled** | Event moved to a different date | `EventRescheduled` |

### Setting Status

#### Per Event

1. Edit your event post
2. In the Recurrence Settings metabox, open the **Event Schema** tab
3. Select a status from the **Event Status** dropdown
4. Save the event

#### Per Occurrence

Statuses can also be set per occurrence using overrides:

1. In the metabox, go to **Manage Occurrences**
2. Add or edit an override for a specific date
3. Set the status for that occurrence

The plugin also auto-detects status from existing data — if an occurrence has been cancelled via the exclusions system, it can reflect that as "Cancelled", and rescheduled dates automatically get the "Rescheduled" status.

## Display Labels

Display labels are freeform text fields for frontend badges. Unlike status (which has fixed options and maps to schema.org), labels are completely custom.

### Common Examples

- "Sold Out"
- "Almost Full"
- "Free Entry"
- "New Time!"
- "Special Guest"
- "Members Only"

### Setting Labels

Labels are configured in the same **Event Schema** tab as status. Set a label at the event level, or override it for specific occurrences in Manage Occurrences.

## Displaying Status & Labels

### Bricks Builder Dynamic Tags

| Tag | Output |
|-----|--------|
| `{lre_event_status}` | Human-readable status (e.g., "Cancelled") |
| `{lre_event_status_label}` | Status formatted for display |
| `{lre_event_label}` | Custom display label text |

These tags work in text elements and can also be used in **Bricks conditions** to conditionally show/hide elements based on status.

#### Conditional Display Example

Show a red "Cancelled" badge only for cancelled occurrences:

1. Add a Div with a styled "Cancelled" text
2. Set condition: `{lre_event_status}` equals `cancelled`

### Shortcodes

```
[lre_status]
[lre_status format="key"]
[lre_status format="schema"]
[lre_label]
```

| Shortcode | Output |
|-----------|--------|
| `[lre_status]` | Human-readable status label |
| `[lre_status format="key"]` | Raw status key (e.g., `cancelled`) |
| `[lre_status format="schema"]` | Schema.org value (e.g., `EventCancelled`) |
| `[lre_label]` | Custom display label |

### Calendar Integration

Event status is reflected in the FullCalendar display. Cancelled events can be visually distinguished, and the offcanvas panel shows the current status.

## Schema.org Integration

When [Schema.org structured data](./schema) is enabled, event status automatically maps to the correct `eventStatus` value in the JSON-LD markup. Rescheduled events also include `previousStartDate` for proper Google rich results.

## Extensibility

### Hooks

| Hook | Type | Description |
|------|------|-------------|
| `lre_event_statuses` | Filter | Add or modify available status options |
| `lre_resolved_event_status` | Filter | Modify the resolved status for a specific occurrence |
| `lre_resolved_event_label` | Filter | Modify the resolved label for a specific occurrence |

### Custom Statuses

Add your own status options:

```php
add_filter('lre_event_statuses', function($statuses) {
    $statuses['sold_out'] = __('Sold Out', 'my-theme');
    return $statuses;
});
```
