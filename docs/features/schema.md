---
sidebar_position: 4
---

# Schema.org Structured Data

Automatic JSON-LD markup for Google-compatible rich search results.

## Overview

Lista Recurring Events can output [Schema.org Event](https://schema.org/Event) structured data as JSON-LD on single event pages. This helps search engines understand your events and can enable rich results in Google Search, including event dates, locations, and status information.

## Enabling Schema

1. Go to **Recurring Events → Settings**
2. Click the **Schema** tab
3. Toggle **Enable Schema.org Output** to On
4. Configure global defaults
5. Save changes

## Schema Settings

### Global Defaults

Set default values that apply to all events unless overridden:

| Setting | Description |
|---------|-------------|
| **Organizer Name** | Default event organizer |
| **Organizer URL** | Organizer website |
| **Location Name** | Default venue name |
| **Address Fields** | Street, City, State, Postal Code, Country |
| **Attendance Mode** | Online, Offline, or Mixed |
| **Online Event URL** | Default URL for online events |

### Per-Event Overrides

Each event can override the global schema defaults in the **Event Schema** tab of the metabox:

- **Event Status** — Scheduled, Cancelled, Postponed, or Rescheduled
- **Display Label** — Custom frontend label
- **Location** — Override venue name and address
- **Organizer** — Override organizer details

### Structured Address Fields

When schema is enabled, the location address field expands into structured sub-fields:

- Street Address
- City / Locality
- State / Region
- Postal Code
- Country

These fields sync bidirectionally — entering a full address in the main field populates the sub-fields, and vice versa.

When schema is disabled, the address field reverts to a single textarea for simplicity.

## Generated Markup

The plugin outputs a `<script type="application/ld+json">` block in the `<head>` of single event pages. Here's an example of the generated structure:

```json
{
  "@context": "https://schema.org",
  "@type": "Event",
  "name": "Weekly Yoga Class",
  "startDate": "2026-01-15T09:00:00+08:00",
  "endDate": "2026-01-15T10:00:00+08:00",
  "eventStatus": "https://schema.org/EventScheduled",
  "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
  "location": {
    "@type": "Place",
    "name": "Downtown Studio",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Main Street",
      "addressLocality": "Perth",
      "addressRegion": "WA",
      "postalCode": "6000",
      "addressCountry": "AU"
    }
  },
  "organizer": {
    "@type": "Organization",
    "name": "Yoga Studio",
    "url": "https://example.com"
  },
  "description": "Join us for a relaxing yoga session...",
  "image": "https://example.com/wp-content/uploads/yoga.jpg"
}
```

### Timezone Handling

Dates include timezone offsets (e.g., `+08:00`) based on your WordPress timezone setting, ensuring search engines interpret times correctly.

### Rescheduled Events

When an occurrence has been rescheduled, the markup includes `previousStartDate` pointing to the original date, as recommended by Google's event structured data guidelines.

## Occurrence Context

On single event pages with the `?lre_date=YYYY-MM-DD` parameter, the schema output uses that specific occurrence's data — including any per-occurrence overrides for status, location, or other fields.

Without the URL parameter, the schema uses the event's next upcoming occurrence.

## Testing Your Markup

Use Google's [Rich Results Test](https://search.google.com/test/rich-results) to verify your schema output:

1. Navigate to a single event page on your site
2. Copy the URL
3. Paste it into the Rich Results Test
4. Check that the Event structured data is detected

## Extensibility

### Hooks

| Hook | Type | Description |
|------|------|-------------|
| `lre_schema_event_data` | Filter | Modify the complete schema data array before output |
| `lre_schema_enabled` | Filter | Conditionally enable/disable schema per event |
| `lre_schema_location_data` | Filter | Modify location data in the schema |

### Example: Add Custom Properties

```php
add_filter('lre_schema_event_data', function($data, $post_id, $date) {
    // Add performer information
    $data['performer'] = [
        '@type' => 'Person',
        'name'  => get_post_meta($post_id, 'performer_name', true),
    ];
    return $data;
}, 10, 3);
```

### Example: Disable Schema for Specific Events

```php
add_filter('lre_schema_enabled', function($enabled, $post_id) {
    // Disable schema for draft-status events
    if (get_post_status($post_id) !== 'publish') {
        return false;
    }
    return $enabled;
}, 10, 2);
```
