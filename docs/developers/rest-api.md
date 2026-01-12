---
sidebar_position: 3
---

# REST API

Access recurring event data via the WordPress REST API.

## Base URL

```
https://yoursite.com/wp-json/lre/v1/
```

## Authentication

Public endpoints require no authentication. The API respects WordPress capabilities for any write operations.

## Endpoints

### GET /events

Retrieve events for a date range (used by the calendar).

```
GET /wp-json/lre/v1/events?start=2026-01-01&end=2026-01-31
```

#### Parameters

| Parameter | Type | Description | Required |
|-----------|------|-------------|----------|
| `start` | string | Start date (ISO format) | Yes |
| `end` | string | End date (ISO format) | Yes |
| `post_type` | string | Filter by post type(s) | No |

#### Example Request

```bash
curl "https://yoursite.com/wp-json/lre/v1/events?start=2026-01-01&end=2026-01-31&post_type=event"
```

#### Example Response

```json
[
  {
    "id": 123,
    "title": "Weekly Yoga Class",
    "start": "2026-01-07T09:00:00",
    "end": "2026-01-07T10:00:00",
    "url": "https://yoursite.com/event/weekly-yoga-class/?lre_date=2026-01-07",
    "backgroundColor": "#3788d8",
    "textColor": "#ffffff",
    "extendedProps": {
      "postId": 123,
      "occurrenceDate": "2026-01-07",
      "isRecurring": true,
      "featuredImage": "https://yoursite.com/wp-content/uploads/yoga.jpg",
      "excerpt": "Join us for a relaxing yoga session..."
    }
  },
  {
    "id": 123,
    "title": "Weekly Yoga Class",
    "start": "2026-01-14T09:00:00",
    "end": "2026-01-14T10:00:00",
    "url": "https://yoursite.com/event/weekly-yoga-class/?lre_date=2026-01-14",
    "backgroundColor": "#3788d8",
    "textColor": "#ffffff",
    "extendedProps": {
      "postId": 123,
      "occurrenceDate": "2026-01-14",
      "isRecurring": true,
      "featuredImage": "https://yoursite.com/wp-content/uploads/yoga.jpg",
      "excerpt": "Join us for a relaxing yoga session..."
    }
  }
]
```

---

### GET /event/\{id\}

Retrieve details for a specific event occurrence.

```
GET /wp-json/lre/v1/event/123?date=2026-01-15
```

#### Parameters

| Parameter | Type | Description | Required |
|-----------|------|-------------|----------|
| `id` | int | Event post ID | Yes (URL) |
| `date` | string | Occurrence date (Y-m-d) | No |

#### Example Request

```bash
curl "https://yoursite.com/wp-json/lre/v1/event/123?date=2026-01-15"
```

#### Example Response

```json
{
  "id": 123,
  "title": "Weekly Yoga Class",
  "content": "<p>Full event description...</p>",
  "excerpt": "Join us for a relaxing yoga session...",
  "url": "https://yoursite.com/event/weekly-yoga-class/?lre_date=2026-01-15",
  "featuredImage": {
    "url": "https://yoursite.com/wp-content/uploads/yoga.jpg",
    "alt": "Yoga class in session"
  },
  "date": "2026-01-15",
  "time": "09:00",
  "endTime": "10:00",
  "location": "Downtown Studio",
  "isRecurring": true,
  "recurrencePattern": "Every Wednesday",
  "addToCalendar": {
    "google": "https://calendar.google.com/calendar/render?...",
    "yahoo": "https://calendar.yahoo.com/?...",
    "ics": "data:text/calendar;charset=utf-8,..."
  }
}
```

---

## Response Format

All responses are JSON. The API follows FullCalendar's event object format for calendar endpoints.

### Event Object Properties

| Property | Type | Description |
|----------|------|-------------|
| `id` | int | Post ID |
| `title` | string | Event title |
| `start` | string | Start datetime (ISO 8601) |
| `end` | string | End datetime (ISO 8601) |
| `url` | string | Event permalink with date param |
| `backgroundColor` | string | Hex color |
| `textColor` | string | Hex color |
| `extendedProps` | object | Additional data |

### Extended Props

| Property | Type | Description |
|----------|------|-------------|
| `postId` | int | WordPress post ID |
| `occurrenceDate` | string | Date (Y-m-d) |
| `isRecurring` | bool | Has recurrence enabled |
| `featuredImage` | string | Image URL |
| `excerpt` | string | Event excerpt |

---

## Error Responses

### Invalid Date Range

```json
{
  "code": "invalid_dates",
  "message": "Both start and end dates are required",
  "data": {
    "status": 400
  }
}
```

### Event Not Found

```json
{
  "code": "not_found",
  "message": "Event not found",
  "data": {
    "status": 404
  }
}
```

---

## Filtering Results

### By Post Type

```
GET /events?start=...&end=...&post_type=workshop
```

Multiple types:

```
GET /events?start=...&end=...&post_type=event,workshop,class
```

### By Taxonomy (via filter)

Use the `lre_calendar_events_query_args` filter:

```php
add_filter('lre_calendar_events_query_args', function($args, $request) {
    // Get category from request parameter
    $category = $request->get_param('category');
    
    if ($category) {
        $args['tax_query'] = [
            [
                'taxonomy' => 'event_category',
                'field' => 'slug',
                'terms' => $category,
            ],
        ];
    }
    
    return $args;
}, 10, 2);
```

Then:

```
GET /events?start=...&end=...&category=workshops
```

---

## Using with JavaScript

### Fetch Events

```javascript
async function fetchEvents(start, end) {
    const response = await fetch(
        `/wp-json/lre/v1/events?start=` + start + `&end=` + end
    );
    return response.json();
}

// Usage
const events = await fetchEvents('2026-01-01', '2026-01-31');
console.log(events);
```

### Fetch Event Details

```javascript
async function fetchEventDetails(eventId, date) {
    const url = date 
        ? `/wp-json/lre/v1/event/` + eventId + `?date=` + date
        : `/wp-json/lre/v1/event/` + eventId;
    
    const response = await fetch(url);
    return response.json();
}

// Usage
const event = await fetchEventDetails(123, '2026-01-15');
console.log(event.title, event.location);
```

---

## Rate Limiting

The API has no built-in rate limiting. For high-traffic sites, consider:

- Caching responses at the server level
- Using a CDN
- Implementing application-level rate limiting

---

## CORS

The API respects WordPress CORS settings. For cross-origin requests, ensure proper headers are configured.
