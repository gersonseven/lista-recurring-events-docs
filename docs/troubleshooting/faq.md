---
sidebar_position: 2
---

# FAQ

Frequently asked questions about Lista Recurring Events.

## General

### How many events can I create?

There's no limit on the number of event posts. The plugin calculates occurrences dynamically, so database size stays manageable.

### Does each occurrence create a new post?

No. Each event is a single post. Occurrences are calculated on-the-fly and cached—no duplicate posts are created.

### What happens if I change a recurrence pattern?

The cache is automatically cleared and new occurrences are calculated based on the new pattern. All future occurrences update instantly.

### Can I use this with any custom post type?

Yes. Configure your post type(s) in the plugin settings. The only requirement is a date field for the anchor date.

---

## Licensing

### What's included in the free version?

- Daily recurrence pattern
- Single occurrence display
- Basic shortcodes
- Calendar display

### What requires a license?

- Weekly, Monthly, Yearly, and Custom patterns
- Multiple occurrences display
- Bricks/Elementor query loop integration
- AJAX filtering
- Full dynamic tags
- Field overrides

### Can I use one license on multiple sites?

License terms depend on your purchase. Check your license details at [listapage.au](https://listapage.au).

### What happens when my license expires?

The plugin continues working, but you won't receive updates or support. Pro features remain functional.

---

## Technical

### What PHP version is required?

PHP 8.1 or higher.

### What WordPress version is required?

WordPress 6.8 or higher.

### Does it work with page caching?

Yes, but cached pages may show stale occurrence data. Consider:
- Excluding event pages from cache
- Using shorter cache times
- Setting up cache purging when events update

### Does it work with multisite?

Yes. Activate the plugin on individual sites or network-activate.

### Which field plugins are supported?

- Advanced Custom Fields (ACF)
- ACPT (Advanced Custom Post Types)
- JetEngine
- Meta Box
- Pods
- Standard WordPress custom fields

---

## Page Builders

### Does it work with Gutenberg?

Yes, using shortcodes. There are no dedicated Gutenberg blocks yet.

### Does it work with Elementor Free?

Partially. The Events Loop widget works with Elementor Free using Section templates. Some features require Elementor Pro.

### Does it work with other page builders?

Yes, using shortcodes. Deep integration is available for Bricks Builder and Elementor.

### Can I use it without a page builder?

Absolutely. Use shortcodes in any theme.

---

## Functionality

### Can an event have different content for different occurrences?

Yes, using the Overrides feature. Configure which fields can be overridden, then set specific values for individual dates.

### Can I exclude holidays from recurring events?

Yes, using Exception Dates. Add dates to exclude in the Manage Exclusions modal.

### Can I show multiple occurrences per event?

Yes. Set "Occurrences Per Event" in your query loop settings (requires license).

### Can events span multiple days?

Yes. Configure an end date field and the calendar will display multi-day events correctly.

### Can I import recurring events?

The plugin doesn't include import functionality, but you can:
- Use WP All Import with custom scripts
- Create events programmatically via PHP
- Use the WordPress REST API

---

## Calendar

### Can I customize the calendar appearance?

Yes, via:
- Theme presets (Default, Minimal, Dark)
- Custom colors per-calendar via shortcode attributes
- Custom colors per-event via the metabox
- CSS customization

### Can I have multiple calendars on one page?

Yes. Each shortcode creates an independent calendar:

```
[lre_calendar post_type="workshop"]
[lre_calendar post_type="meeting"]
```

### Does the calendar work on mobile?

Yes. The calendar is responsive and touch-friendly.

### Can visitors add events to their calendars?

Yes, using the Add to Calendar feature. Supports Google Calendar, Apple Calendar, Outlook, and more.

---

## Data & Privacy

### Where is event data stored?

All data is stored in your WordPress database:
- Event content in `wp_posts`
- Recurrence settings in `wp_postmeta`
- Cached calculations in `wp_options` (transients)

### Does the plugin send data externally?

Only for:
- License validation (to listapage.au)
- Plugin updates (to listapage.au)

Event data never leaves your server.

### Is the plugin GDPR compliant?

The plugin itself doesn't collect user data. The Add to Calendar feature sends event data to third-party calendar services when users click to add an event.

---

## Migration & Compatibility

### Can I migrate from another events plugin?

There's no automatic migration, but you can:
- Map your existing date fields
- Use exception dates to handle existing patterns
- Gradually transition events

### Does it conflict with other calendar plugins?

Generally no, but avoid:
- Running multiple event management plugins simultaneously
- Plugins that heavily modify the `wp_posts` table
- Conflicting FullCalendar implementations

### Can I use it alongside WooCommerce?

Yes. The plugin works independently of WooCommerce. For event ticketing, consider dedicated integrations.
