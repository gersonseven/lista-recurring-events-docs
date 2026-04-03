---
sidebar_position: 2
---

# Hooks & Filters

Customize Lista Recurring Events behavior with actions and filters.

## Actions

### lre_cache_cleared

Fires when an event's cache is cleared.

```php
add_action('lre_cache_cleared', function($post_id) {
    // Perform additional cleanup
    delete_transient('my_custom_cache_' . $post_id);
}, 10, 1);
```

**Parameters:**
- `$post_id` (int) — The event post ID

---

### lre_init

Fires when the plugin initializes. Useful for add-ons.

```php
add_action('lre_init', function() {
    // Register custom functionality
    my_addon_init();
});
```

---

### lre_after_save_recurrence

Fires after recurrence settings are saved for an event.

```php
add_action('lre_after_save_recurrence', function($post_id, $settings) {
    // Sync with external calendar
    sync_to_google_calendar($post_id, $settings);
}, 10, 2);
```

**Parameters:**
- `$post_id` (int) — The event post ID
- `$settings` (array) — The saved recurrence settings

---

### lre_settings_tabs_nav

Add custom tabs to the settings page navigation.

```php
add_action('lre_settings_tabs_nav', function() {
    echo '<li><a href="#my-tab">My Add-on</a></li>';
});
```

---

### lre_settings_tab_content

Add content for custom settings tabs.

```php
add_action('lre_settings_tab_content', function() {
    echo '<div id="my-tab" class="lre-tab-content">';
    echo '<h2>My Add-on Settings</h2>';
    // Settings form here
    echo '</div>';
});
```

---

### lre_metabox_tabs_nav

Add custom tabs to the event metabox.

```php
add_action('lre_metabox_tabs_nav', function($post) {
    echo '<button class="lre-tab-button" data-tab="my-tab">My Tab</button>';
}, 10, 1);
```

---

### lre_metabox_tabs_panels

Add content for custom metabox tabs.

```php
add_action('lre_metabox_tabs_panels', function($post) {
    echo '<div id="my-tab" class="lre-tab-panel">';
    // Tab content here
    echo '</div>';
}, 10, 1);
```

---

## Filters

### lre_date_format

Modify the date format used for output.

```php
add_filter('lre_date_format', function($format, $context) {
    if ($context === 'shortcode') {
        return 'Y-m-d';
    }
    return $format;
}, 10, 2);
```

**Parameters:**
- `$format` (string) — The date format
- `$context` (string) — Where it's being used (shortcode, dynamic_tag, etc.)

---

### lre_calendar_theme_presets

Add custom calendar theme presets.

```php
add_filter('lre_calendar_theme_presets', function($presets) {
    $presets['ocean'] = [
        'name' => 'Ocean',
        'category' => 'custom',
        'styles' => [
            'primary_color' => '#0077b6',
            'event_bg' => '#00b4d8',
            'event_text' => '#ffffff',
            'today_bg' => '#caf0f8',
            'border_color' => '#90e0ef',
        ],
    ];
    return $presets;
});
```

---

### lre_calendar_event_data

Modify event data sent to the calendar.

```php
add_filter('lre_calendar_event_data', function($event, $post_id, $date) {
    // Add custom properties
    $event['extendedProps']['venue'] = get_post_meta($post_id, 'venue_name', true);
    $event['extendedProps']['capacity'] = get_post_meta($post_id, 'event_capacity', true);
    
    return $event;
}, 10, 3);
```

**Parameters:**
- `$event` (array) — Event data array
- `$post_id` (int) — Event post ID
- `$date` (string) — Occurrence date (Y-m-d)

---

### lre_calendar_events_query_args

Modify the query arguments for calendar events.

```php
add_filter('lre_calendar_events_query_args', function($args, $request) {
    // Only show featured events
    $args['tax_query'] = [
        [
            'taxonomy' => 'event_category',
            'field' => 'slug',
            'terms' => 'featured',
        ],
    ];
    return $args;
}, 10, 2);
```

**Parameters:**
- `$args` (array) — WP_Query arguments
- `$request` (WP_REST_Request) — The REST request object

---

### lre_show_any_tabs

Control whether metabox tabs container is shown.

```php
add_filter('lre_show_any_tabs', function($show, $post, $show_recurrence, $show_calendar) {
    // Always show tabs if our add-on is active
    if (my_addon_is_active()) {
        return true;
    }
    return $show;
}, 10, 4);
```

---

### lre_occurrences

Filter the calculated occurrences.

```php
add_filter('lre_occurrences', function($occurrences, $post_id, $limit) {
    // Remove weekends
    return array_filter($occurrences, function($date) {
        $day = $date->format('N');
        return $day < 6; // Mon-Fri only
    });
}, 10, 3);
```

---

### lre_recurrence_types

Add or modify available recurrence types.

```php
add_filter('lre_recurrence_types', function($types) {
    $types['biweekly'] = __('Bi-Weekly', 'my-addon');
    return $types;
});
```

---

## Extension Points

### Creating an Add-on

```php
/**
 * My LRE Add-on
 */
add_action('lre_init', function() {
    // Add settings tab
    add_action('lre_settings_tabs_nav', 'my_addon_settings_tab');
    add_action('lre_settings_tab_content', 'my_addon_settings_content');
    
    // Add metabox tab
    add_action('lre_metabox_tabs_nav', 'my_addon_metabox_tab');
    add_action('lre_metabox_tabs_panels', 'my_addon_metabox_content');
    
    // Hook into save
    add_action('lre_after_save_recurrence', 'my_addon_handle_save', 10, 2);
});

function my_addon_settings_tab() {
    echo '<li><a href="#my-addon-tab">My Add-on</a></li>';
}

function my_addon_settings_content() {
    ?>
    <div id="my-addon-tab" class="lre-tab-content">
        <h2>My Add-on Settings</h2>
        <!-- Settings form -->
    </div>
    <?php
}
```

---

## Best Practices

1. **Use appropriate priority** — Default is 10; use lower numbers to run earlier
2. **Check context** — Verify you're modifying the right data
3. **Return filtered values** — Always return something from filters
4. **Namespace your functions** — Avoid conflicts with other code
5. **Document your hooks** — Help users understand your add-on's extension points

---

## Occurrence Change Hooks

These action hooks fire when occurrences are modified. They're designed for notification systems, activity logging, and third-party integrations.

### lre_occurrence_changed

Fires when any occurrence change is detected (cancellation, restoration, reschedule, or override change).

```php
add_action('lre_occurrence_changed', function($post_id, $date, $change_type, $data) {
    // $change_type: 'cancelled', 'restored', 'rescheduled', 'override_added', etc.
    error_log("Event {$post_id}: occurrence {$date} was {$change_type}");
}, 10, 4);
```

**Parameters:**
- `$post_id` (int) — Event post ID
- `$date` (string) — Occurrence date (Y-m-d)
- `$change_type` (string) — Type of change
- `$data` (array) — Additional data about the change

---

### lre_occurrence_cancelled

Fires when an occurrence is cancelled (excluded).

```php
add_action('lre_occurrence_cancelled', function($post_id, $date) {
    // Notify registered attendees
    notify_attendees_of_cancellation($post_id, $date);
}, 10, 2);
```

---

### lre_occurrence_restored

Fires when a previously cancelled occurrence is restored.

```php
add_action('lre_occurrence_restored', function($post_id, $date) {
    // Re-enable registration
}, 10, 2);
```

---

### lre_occurrence_rescheduled

Fires when an occurrence is moved to a different date.

```php
add_action('lre_occurrence_rescheduled', function($post_id, $original_date, $new_date) {
    // Notify attendees of date change
}, 10, 3);
```

---

### lre_occurrence_changes_complete

Fires after all occurrence changes for a single save operation are processed. Useful for batching notifications.

```php
add_action('lre_occurrence_changes_complete', function($post_id, $changes) {
    // $changes is an array of all changes made in this save
    // Send a single digest email instead of one per change
    send_change_digest($post_id, $changes);
}, 10, 2);
```

---

### lre_occurrences_regenerated

Fires after stored occurrences are regenerated for an event (e.g., after saving recurrence settings).

```php
add_action('lre_occurrences_regenerated', function($post_id, $count) {
    error_log("Regenerated {$count} occurrences for event {$post_id}");
}, 10, 2);
```

:::tip
During bulk regeneration, individual occurrence hooks (`lre_occurrence_changed`, etc.) are automatically suppressed to prevent hook spam. Only `lre_occurrences_regenerated` fires.
:::

---

## Schema Filters

### lre_schema_event_data

Modify the complete Schema.org data array before JSON-LD output.

```php
add_filter('lre_schema_event_data', function($data, $post_id, $date) {
    $data['performer'] = [
        '@type' => 'Person',
        'name'  => get_post_meta($post_id, 'performer_name', true),
    ];
    return $data;
}, 10, 3);
```

---

### lre_schema_enabled

Conditionally enable or disable schema output per event.

```php
add_filter('lre_schema_enabled', function($enabled, $post_id) {
    // Disable for private events
    if (get_post_meta($post_id, 'is_private', true)) {
        return false;
    }
    return $enabled;
}, 10, 2);
```

---

### lre_schema_location_data

Modify the location data in the schema output.

```php
add_filter('lre_schema_location_data', function($location, $post_id) {
    // Add geo coordinates
    $location['geo'] = [
        '@type' => 'GeoCoordinates',
        'latitude' => get_post_meta($post_id, 'venue_lat', true),
        'longitude' => get_post_meta($post_id, 'venue_lng', true),
    ];
    return $location;
}, 10, 2);
```

---

## Event Status Filters

### lre_event_statuses

Add or modify available event status options.

```php
add_filter('lre_event_statuses', function($statuses) {
    $statuses['sold_out'] = __('Sold Out', 'my-theme');
    return $statuses;
});
```

---

### lre_resolved_event_status

Modify the resolved status for a specific occurrence.

```php
add_filter('lre_resolved_event_status', function($status, $post_id, $date) {
    // Force cancelled status for past events
    if (strtotime($date) < time()) {
        return 'completed';
    }
    return $status;
}, 10, 3);
```

---

### lre_resolved_event_label

Modify the resolved display label for a specific occurrence.

```php
add_filter('lre_resolved_event_label', function($label, $post_id, $date) {
    // Add "FULL" label if capacity reached
    if (is_event_at_capacity($post_id, $date)) {
        return __('Sold Out', 'my-theme');
    }
    return $label;
}, 10, 3);
```

---

## Addon Query & Output Filters

These filters give addons fine-grained control over every event query path — Bricks query loops, stored occurrences, AJAX filtering, shortcodes, and the public PHP API.

### lre_excluded_post_ids

Exclude posts from all event query paths with a single hook. Results are cached per request for zero performance impact.

```php
add_filter('lre_excluded_post_ids', function($excluded_ids) {
    // Exclude members-only events for non-members
    if (!current_user_can('access_member_content')) {
        $member_events = get_member_only_event_ids();
        $excluded_ids = array_merge($excluded_ids, $member_events);
    }
    return $excluded_ids;
});
```

---

### lre_post_access_flags

Attach access metadata to individual posts. Addons use this to provide a standardised data shape for frontend templates to render access indicators like lock icons or membership badges.

```php
add_filter('lre_post_access_flags', function($flags, $post_id) {
    $flags['members_only'] = (bool) get_post_meta($post_id, '_members_only', true);
    $flags['required_tier'] = get_post_meta($post_id, '_required_tier', true);
    return $flags;
}, 10, 2);
```

**Parameters:**
- `$flags` (array) — Key-value access flags
- `$post_id` (int) — Event post ID

---

### lre_bricks_query_args

Modify WP_Query arguments for Bricks query loops before the query executes.

```php
add_filter('lre_bricks_query_args', function($args) {
    // Only show events with a specific meta value
    $args['meta_query'][] = [
        'key'   => '_featured',
        'value' => '1',
    ];
    return $args;
});
```

---

### lre_bricks_occurrence_results

Modify occurrence results from Bricks query loops before pagination is applied.

```php
add_filter('lre_bricks_occurrence_results', function($results) {
    // Remove events that require login
    return array_filter($results, function($item) {
        return !get_post_meta($item->post_id, '_login_required', true) || is_user_logged_in();
    });
});
```

---

### lre_occurrence_store_query_args

Modify the arguments passed to the OccurrenceStore query.

```php
add_filter('lre_occurrence_store_query_args', function($args) {
    $args['post_type'] = 'workshop';
    return $args;
});
```

---

### lre_occurrence_store_query_where

Modify the WHERE clause for stored occurrence database queries.

```php
add_filter('lre_occurrence_store_query_where', function($where, $args) {
    // Add custom SQL condition
    $where .= " AND post_id NOT IN (SELECT post_id FROM wp_postmeta WHERE meta_key = '_hidden' AND meta_value = '1')";
    return $where;
}, 10, 2);
```

---

### lre_occurrence_store_query_results

Modify the results returned from stored occurrence database queries.

```php
add_filter('lre_occurrence_store_query_results', function($results, $args) {
    // Annotate results with extra data
    foreach ($results as &$result) {
        $result->venue = get_post_meta($result->post_id, 'venue_name', true);
    }
    return $results;
}, 10, 2);
```

---

### lre_filter_query_args

Modify the query when users apply frontend AJAX filters.

```php
add_filter('lre_filter_query_args', function($args) {
    // Force a taxonomy condition on filtered results
    $args['tax_query'][] = [
        'taxonomy' => 'event_visibility',
        'field'    => 'slug',
        'terms'    => 'public',
    ];
    return $args;
});
```

---

### lre_get_events_args

Modify the arguments passed to the public `lre_get_events()` function.

```php
add_filter('lre_get_events_args', function($args) {
    $args['posts_per_page'] = 50;
    return $args;
});
```

---

### lre_get_events_results

Modify the results returned by the public `lre_get_events()` function.

```php
add_filter('lre_get_events_results', function($results, $args) {
    // Add computed data to each result
    foreach ($results as &$event) {
        $event['spots_remaining'] = calculate_spots($event['post_id'], $event['date']);
    }
    return $results;
}, 10, 2);
```

---

### lre_shortcode_output

Modify or wrap the output of any LRE shortcode.

```php
add_filter('lre_shortcode_output', function($output, $tag, $atts) {
    if ($tag === 'lre_next_date') {
        $output = '<span class="my-date-wrapper">' . $output . '</span>';
    }
    return $output;
}, 10, 3);
```

**Parameters:**
- `$output` (string) — The shortcode HTML output
- `$tag` (string) — The shortcode name (e.g., `lre_next_date`)
- `$atts` (array) — The shortcode attributes

---

## Waitlist Filters

### lre_ticketing_active

Lets ticketing addons signal their presence so core features like waitlist settings only appear when relevant.

```php
add_filter('lre_ticketing_active', '__return_true');
```

---

### lre_ticketing_waitlist_enabled

Read the event-level waitlist enabled status.

```php
add_filter('lre_ticketing_waitlist_enabled', function($enabled, $post_id) {
    return $enabled;
}, 10, 2);
```

---

### lre_ticketing_waitlist_max

Read the event-level maximum waitlist size.

```php
add_filter('lre_ticketing_waitlist_max', function($max, $post_id) {
    return $max;
}, 10, 2);
```

---

## AccessControl Utility

The `AccessControl` utility class provides a centralised way to merge excluded post IDs into both `WP_Query` and `OccurrenceStore` query arguments. Use it in your addon instead of duplicating the merge logic across multiple hooks.

```php
use ListaRecurringEvents\Utilities\AccessControl;

// Merge exclusions into WP_Query args
$args = AccessControl::merge_exclusions_wp_query($args, $excluded_ids);

// Merge exclusions into OccurrenceStore args
$args = AccessControl::merge_exclusions_occurrence_store($args, $excluded_ids);
```
