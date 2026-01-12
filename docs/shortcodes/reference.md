---
sidebar_position: 1
---

# Shortcode Reference

Complete reference for all available shortcodes.

## Date Shortcodes

### [lre_next_date]

Displays the full formatted date of the next occurrence.

```
[lre_next_date]
[lre_next_date id="123"]
[lre_next_date format="F j, Y"]
```

| Attribute | Description | Default |
|-----------|-------------|---------|
| `id` | Post ID | Current post |
| `format` | PHP date format | Plugin setting |

**Output:** "January 15, 2026"

---

### [lre_next_day]

Displays just the day number.

```
[lre_next_day]
[lre_next_day leading_zero="true"]
```

| Attribute | Description | Default |
|-----------|-------------|---------|
| `id` | Post ID | Current post |
| `leading_zero` | Include leading zero | false |

**Output:** "15" or "05"

---

### [lre_next_month]

Displays the month name.

```
[lre_next_month]
[lre_next_month format="short"]
[lre_next_month format="number"]
```

| Attribute | Description | Default |
|-----------|-------------|---------|
| `id` | Post ID | Current post |
| `format` | full, short, or number | full |

**Output:** "January", "Jan", or "1"

---

### [lre_next_year]

Displays the year.

```
[lre_next_year]
[lre_next_year short="true"]
```

| Attribute | Description | Default |
|-----------|-------------|---------|
| `id` | Post ID | Current post |
| `short` | Two-digit year | false |

**Output:** "2026" or "26"

---

### [lre_next_weekday]

Displays the weekday name.

```
[lre_next_weekday]
[lre_next_weekday format="short"]
```

| Attribute | Description | Default |
|-----------|-------------|---------|
| `id` | Post ID | Current post |
| `format` | full or short | full |

**Output:** "Saturday" or "Sat"

---

### [lre_next_time]

Displays the event time.

```
[lre_next_time]
[lre_next_time format="H:i"]
```

| Attribute | Description | Default |
|-----------|-------------|---------|
| `id` | Post ID | Current post |
| `format` | PHP time format | g:i a |

**Output:** "2:00 pm" or "14:00"

---

## Information Shortcodes

### [lre_pattern]

Displays a human-readable recurrence pattern description.

```
[lre_pattern]
[lre_pattern id="123"]
```

| Attribute | Description | Default |
|-----------|-------------|---------|
| `id` | Post ID | Current post |

**Output:** "Every Tuesday", "First Monday of every month", etc.

---

### [lre_is_recurring]

Returns "1" if the event has recurrence enabled, "0" if not.

```
[lre_is_recurring]
```

Useful for conditional display logic.

---

### [lre_occurrences]

Displays a list of upcoming occurrences.

```
[lre_occurrences]
[lre_occurrences limit="5"]
[lre_occurrences limit="3" format="D, M j"]
[lre_occurrences before="<li>" after="</li>" sep=""]
```

| Attribute | Description | Default |
|-----------|-------------|---------|
| `id` | Post ID | Current post |
| `limit` | Max occurrences | Plugin setting |
| `format` | Date format | j F, Y |
| `sep` | Separator | ", " |
| `before` | Before each date | "" |
| `after` | After each date | "" |
| `display` | list or mini-calendar | list |
| `show_weekday` | Show day name | false |
| `show_time` | Show time | false |
| `link` | Make dates clickable | false |

**Basic Output:** "January 15, January 22, January 29"

**List Output:**
```html
<li>January 15</li>
<li>January 22</li>
<li>January 29</li>
```

---

## Field Shortcodes

### [lre_field]

Displays a field value with override support.

```
[lre_field name="event_location"]
[lre_field name="event_location" id="123"]
[lre_field name="_thumbnail_id" size="medium"]
```

| Attribute | Description | Default |
|-----------|-------------|---------|
| `id` | Post ID | Current post |
| `name` | Field name | (required) |
| `size` | Image size (for images) | full |

Returns the override value if one exists for the current occurrence, otherwise returns the default field value.

---

### [lre_reschedule_note]

Displays the reschedule note for the current occurrence.

```
[lre_reschedule_note]
```

Only outputs if the current occurrence has been rescheduled and has a note.

---

## Calendar Shortcode

### [lre_calendar]

Displays an interactive calendar. See [Calendar Configuration](../calendar/configuration) for full details.

```
[lre_calendar]
[lre_calendar theme="dark" height="600px"]
```

---

## Add to Calendar Shortcode

### [lre_add_to_calendar]

Displays the Add to Calendar button. See [Add to Calendar](../calendar/add-to-calendar) for full details.

```
[lre_add_to_calendar]
[lre_add_to_calendar label="Save Event" calendars="Google,Apple"]
```

---

## Filter Shortcodes

For themes not using Bricks or Elementor:

### [lre_filter_date]

Date preset filter.

```
[lre_filter_date]
[lre_filter_date style="dropdown"]
```

### [lre_filter_date_range]

Date range picker filter.

```
[lre_filter_date_range]
```

### [lre_filter_taxonomy]

Taxonomy filter.

```
[lre_filter_taxonomy taxonomy="event_category"]
[lre_filter_taxonomy taxonomy="event_category" style="checkboxes"]
```

### [lre_filter_search]

Search filter.

```
[lre_filter_search]
[lre_filter_search placeholder="Search events..."]
```

### [lre_filter_reset]

Reset all filters button.

```
[lre_filter_reset]
[lre_filter_reset label="Clear Filters"]
```

---

## Using Shortcodes in Templates

### PHP Templates

```php
<?php echo do_shortcode('[lre_next_date]'); ?>
```

### With Current Post Context

When used in The Loop or single templates, shortcodes automatically use the current post.

### With Specific Post

```
[lre_next_date id="123"]
```

### With URL Parameter Context

On pages accessed with `?lre_date=YYYY-MM-DD`, shortcodes use that occurrence's context for override values.
