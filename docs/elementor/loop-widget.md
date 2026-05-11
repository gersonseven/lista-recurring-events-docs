---
sidebar_position: 1
title: Recurring Events Loop Widget
description: Display recurring events in Elementor (the free version) using the dedicated loop widget.
---

# Recurring Events Loop Widget

Display recurring events in Elementor (the free version) using the dedicated loop widget.

## Overview

The **Recurring Events Loop** widget provides a complete solution for displaying recurring events in Elementor. It includes:

- Built-in event card template (no template creation required)
- Support for custom Elementor Section templates
- Responsive column controls
- Three pagination styles
- AJAX filtering support
- Accessible pagination with proper navigation landmarks and per-page labels

## Adding the Widget

1. In Elementor editor, search for "Recurring Events Loop"
2. Or find it in the **Lista Recurring Events** widget category
3. Drag it onto your page

## Widget Settings

### Content Tab

#### Query Settings

| Setting | Description | Default |
| --- | --- | --- |
| **Post Types** | Which event types to show | All configured |
| **Date Range** | Filter by date range | None |
| **Occurrences Per Event** | Dates per event | 1 |
| **Taxonomy Filters** | Filter by category/tag | None |
| **Order By** | Sort criterion | Occurrence Date |
| **Order** | Ascending/Descending | Ascending |
| **Include Past** | Show past occurrences | No |
| **Hide In-Progress Events** | Override the global Query Behaviour: Use Global, Hide once started, or Show until ended | Use Global |

#### Layout Settings

| Setting | Description | Default |
| --- | --- | --- |
| **Columns** | Grid columns | 3 |
| **Gap** | Space between items | 20px |
| **Items Per Page** | Results per page | 9 |

#### Template

| Setting | Description |
| --- | --- |
| **Template Source** | Default Card or Custom Section |
| **Custom Template** | Select your Section template (if Custom) |

### Style Tab

When using the Default Card template:

#### Card Styling

- Background color
- Border and border radius
- Box shadow
- Padding

#### Image Styling

- Height/aspect ratio
- Border radius

#### Content Styling

- Typography for title, date, excerpt
- Colors
- Spacing

### Pagination Tab

| Setting | Description |
| --- | --- |
| **Pagination Type** | Numbers, Load More, or Infinite Scroll |
| **Load More Text** | Button label for Load More |
| **Alignment** | Left, Center, Right |

## Hide In-Progress Events (Per-Widget Override)

Each Loop widget can override the global **Settings → Query Behaviour → Treat in-progress events as past** setting:

- **Use Global** — follow the site-wide setting
- **Hide once started** — drop today's events from the list as soon as their start time has passed
- **Show until ended** — keep today's events visible while they're running

Today's events that have already ended are always excluded from upcoming queries regardless of this setting. See [Query Behaviour](/features/query-behaviour) for more.

## Default Card Template

The built-in template includes:

- Featured image
- Event title
- Occurrence date and time
- Excerpt
- "View Event" button

This requires no template creation—just add the widget and style it.

## Using Custom Templates

For more control, create an Elementor Section template:

### Create the Template

1. Go to **Templates → Saved Templates**
2. Click **Add New**
3. Choose **Section** type
4. Design your event card layout
5. Use dynamic tags for event data (see below)
6. Save the template

### Use in Widget

1. In the Events Loop widget, set **Template Source** to Custom Section
2. Select your template from the dropdown
3. Your template replaces the default card

## Dynamic Tags for Templates

Use these dynamic tags in your custom template:

### Available Tags

| Tag | Category | Description |
| --- | --- | --- |
| **Occurrence Date** | LRE | Formatted occurrence date |
| **Occurrence Time** | LRE | Event time |
| **Occurrence End Date** | LRE | End date/time |
| **Event Duration** | LRE | Calculated duration |
| **Next Occurrence** | LRE | Next date (for single pages) |
| **Post Title** | LRE | Event title |
| **Post URL** | LRE | Event link with date param |
| **Featured Image** | LRE | Event thumbnail |
| **Post Excerpt** | LRE | Event excerpt |
| **Post Terms** | LRE | Category/tag list |
| **Event Status** | LRE | Status label (Scheduled, Cancelled, etc.) |
| **Event Label** | LRE | Custom display label |
| **Event Color** | LRE | Hex colour from the event or its category |
| **Countdown** | LRE | Relative time / countdown label |

### Using Tags

1. Add a text element in your template
2. Click the Dynamic Tags icon
3. Choose from the **Lista Recurring Events** category

### Tag Options

Most tags have options when selected:

**Occurrence Date:**

- Format: Multiple date formats available
- Fallback: Text if no date

**Post Terms:**

- Taxonomy: Category, tag, or custom
- Separator: Between terms
- Link Terms: Make clickable

**Featured Image:**

- Size: Thumbnail, medium, large, full
- Fallback: Default image if none set

## Pagination Styles

### Page Numbers

Traditional numbered pagination with prev/next arrows. The pagination is wrapped in a navigation landmark with a proper "current page" indication and per-page accessible labels (for example "Page 2"), making it easier to navigate with assistive technology.

### Load More

Button that loads additional events without page change.

### Infinite Scroll

Automatically loads more events as user scrolls down.

## Events Countdown Widget

A standalone widget for displaying countdown or relative time labels.

### Adding the Widget

1. Search for **Events Countdown** in the Elementor panel
2. Or find it in the **Lista Recurring Events** widget category
3. Add it inside a Loop widget template or on a single event template

### Content Tab

| Setting | Description |
| --- | --- |
| **Display Mode** | Smart Label, Countdown Units, or Compact Badge |
| **Show Days** | Toggle days unit |
| **Show Hours** | Toggle hours unit |
| **Show Minutes** | Toggle minutes unit |
| **Show Seconds** | Toggle seconds unit |

### Style Tab

Full control over typography, colors, spacing, and per-unit styling. Includes status-aware color controls for styling the "Happening now" state differently.

See [Countdown & Relative Time](/features/countdown) for full details on display modes.

---

## Free vs Pro Elementor

The widget works differently based on your Elementor version:

| Feature | Free Elementor | Elementor Pro |
| --- | --- | --- |
| Default Card Template | ✅ | ✅ |
| Section Templates | ✅ | ✅ |
| Loop Builder Templates | ❌ | Coming Soon |
| Theme Builder | ❌ | ✅ |

## Performance Tips

1. **Limit occurrences** — Keep "Occurrences Per Event" low
2. **Use pagination** — Don't show all events at once
3. **Optimize images** — Use appropriate image sizes
4. **Cache results** — Plugin caches calculations automatically
