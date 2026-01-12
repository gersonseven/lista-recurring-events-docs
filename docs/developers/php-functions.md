---
sidebar_position: 1
---

# PHP Functions

Use these PHP functions to integrate recurring events into your custom code.

## Getting the Calculator

All occurrence calculations go through the Calculator class:

```php
$calculator = \Listapage\RecurringEvents\Core\Plugin::get_instance()->get_calculator();
```

## Calculator Methods

### get_next_occurrence()

Get the next occurrence date for an event.

```php
$next = $calculator->get_next_occurrence($post_id);

if ($next) {
    echo $next->format('Y-m-d'); // 2026-01-15
    echo $next->format('l');     // Saturday
}
```

**Returns:** `DateTime|null` — Next occurrence date or null if none.

---

### get_occurrences()

Get multiple upcoming occurrences.

```php
$occurrences = $calculator->get_occurrences($post_id, 10);

foreach ($occurrences as $date) {
    echo $date->format('Y-m-d') . "\n";
}
```

**Parameters:**
- `$post_id` (int) — Event post ID
- `$limit` (int) — Maximum occurrences to return (default: 10)

**Returns:** `DateTime[]` — Array of occurrence dates.

---

### get_anchor_date()

Get the event's anchor (start) date from the configured date field.

```php
$anchor = $calculator->get_anchor_date($post_id);

if ($anchor) {
    echo "Event starts: " . $anchor->format('F j, Y');
}
```

**Returns:** `DateTime|null` — Anchor date or null if not set.

---

### get_recurrence_description()

Get a human-readable description of the recurrence pattern.

```php
$description = $calculator->get_recurrence_description($post_id);
echo $description; // "Every Tuesday" or "First Monday of every month"
```

**Returns:** `string` — Pattern description.

---

### get_recurrence_settings()

Get all recurrence settings for an event.

```php
$settings = $calculator->get_recurrence_settings($post_id);

print_r($settings);
/*
Array (
    [enabled] => 1
    [type] => weekly
    [daily_interval] => 1
    [weekly_interval] => 1
    [weekly_days] => Array ( [0] => 2 )
    [monthly_week] => 1
    [monthly_weekday] => 0
    [month_interval] => 1
    [end_type] => never
    [end_date] => 
    [end_count] => 0
    [exception_dates] => Array ()
)
*/
```

**Returns:** `array` — All recurrence settings.

---

## Static Methods

### Calculator::clear_cache()

Clear cached calculations for a specific event.

```php
\Listapage\RecurringEvents\Recurrence\Calculator::clear_cache($post_id);
```

Useful after programmatically updating recurrence settings.

---

## Override Manager

Work with occurrence overrides:

```php
use Listapage\RecurringEvents\Core\OverrideManager;

// Get override value for a specific field and date
$value = OverrideManager::get_override($post_id, '2026-01-15', 'event_location');

// Get field value with override support (returns default if no override)
$value = OverrideManager::get_field_value('event_location', $post_id, '2026-01-15');

// Check if date has been rescheduled
$reschedules = OverrideManager::get_all_reschedules($post_id);

// Get current occurrence context (from URL or query loop)
$current_date = OverrideManager::get_current_date();
```

---

## Config Helpers

```php
use Listapage\RecurringEvents\Core\Config;

// Get configured post types
$post_types = Config::get_post_types(); // ['event', 'workshop']

// Check if a post type is configured
$is_event = Config::is_configured_post_type('event'); // true/false

// Get date format setting
$format = Config::get_date_format(); // 'j F, Y'

// Get date field name
$field = Config::get_date_field(); // 'event_start_date'

// Format a date using plugin settings
$formatted = Config::format_date($datetime, 'F j, Y');
```

---

## Complete Example

Display the next 5 occurrences for an event:

```php
function my_display_upcoming_dates($post_id) {
    $calculator = \Listapage\RecurringEvents\Core\Plugin::get_instance()->get_calculator();
    
    $occurrences = $calculator->get_occurrences($post_id, 5);
    
    if (empty($occurrences)) {
        return '<p>No upcoming dates.</p>';
    }
    
    $output = '<ul class="upcoming-dates">';
    
    foreach ($occurrences as $date) {
        $output .= sprintf(
            '<li><a href="%s?lre_date=%s">%s</a></li>',
            get_permalink($post_id),
            $date->format('Y-m-d'),
            $date->format('l, F j, Y')
        );
    }
    
    $output .= '</ul>';
    
    return $output;
}
```

---

## Namespaces

The plugin uses the `Listapage\RecurringEvents` namespace:

```php
// Calculator
\Listapage\RecurringEvents\Recurrence\Calculator

// Core classes
\Listapage\RecurringEvents\Core\Plugin
\Listapage\RecurringEvents\Core\Config
\Listapage\RecurringEvents\Core\OverrideManager
\Listapage\RecurringEvents\Core\FieldRetriever
\Listapage\RecurringEvents\Core\FieldDetector
```
