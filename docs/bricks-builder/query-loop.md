---
sidebar_position: 1
---

# Query Loop Integration

Display recurring events in Bricks Builder using the custom query loop type.

## Overview

Lista Recurring Events adds a **Recurring Events** query type to Bricks Builder. This query type:

- Returns individual occurrences (not just posts)
- Supports sorting by occurrence date
- Filters past events automatically (optional)
- Integrates with AJAX filtering

## Creating a Query Loop

### Step 1: Add a Container

1. In Bricks editor, add a **Container**, **Block**, or **Div** element
2. This element will contain your event layout

### Step 2: Enable Query Loop

1. Select the container element
2. In the settings panel, find **Query Loop**
3. Toggle it **On**

![Enable Query Loop](/img/query-loop.jpg)

### Step 3: Select Query Type

1. Click the **Type** dropdown
2. Select **Recurring Events**

### Step 4: Configure Query Settings

Once Recurring Events is selected, you'll see custom options:

![Query Settings](/img/query-loop-options.jpg)

#### Basic Options

| Option | Description | Default |
|--------|-------------|---------|
| **Post Type** | Which post type(s) to query | All configured |
| **Hide Past Events** | Only show future occurrences | On |
| **Order By** | Sort criterion | Next Occurrence |
| **Order** | Ascending or Descending | Ascending |
| **Include Non-Recurring** | Include one-time events | On |
| **Occurrences Per Event** | How many dates per event | 1 |
| **Posts Per Page** | Results per page | 10 |

#### Advanced Options

| Option | Description |
|--------|-------------|
| **Offset** | Skip first X results |
| **Include IDs** | Only show specific event IDs |
| **Exclude IDs** | Hide specific event IDs |
| **Taxonomy Filter** | Filter by category/tag |
| **Date Range** | Limit to date range |
| **Meta Query** | Filter by custom fields |

### Step 5: Build Your Layout

Add elements inside the container to design your event card:

- Heading for event title
- Text elements with dynamic tags for dates
- Image element for featured image
- Button linking to the event

## Query Loop Example

```
Container (Query Loop: Recurring Events)
├── Heading: {post_title}
├── Div (Date display)
│   ├── Text: {lre_next_weekday}
│   ├── Text: {lre_next_date}
│   └── Text: {lre_next_time}
├── Image: {featured_image}
└── Button: View Event → {post_url}
```

## Understanding Occurrences Per Event

This setting controls how many occurrence "rows" each event generates:

- **1**: Each event appears once (with its next occurrence)
- **3**: Each event appears up to 3 times (next 3 occurrences)
- **5**: Each event appears up to 5 times

Setting this higher than 1 creates a list showing multiple upcoming dates for each event.

## Sorting Options

### By Next Occurrence (Default)

Events sorted by their next occurrence date. Soonest events appear first (ascending) or last (descending).

### By Title

Alphabetical sorting by event title.

### By Publish Date

Sort by when the event post was created.

## Filtering Integration

Query loops work with the filter elements:

- Date Filter
- Date Range Filter
- Taxonomy Filter
- Search Filter
- Event Type Filter

See [Filter Elements](./filter-elements) for setup instructions.

## Pagination

Add the **LRE Pagination** element to paginate results:

1. Add the Pagination element outside your query loop
2. Target your query loop container
3. Style the pagination controls

See [Pagination](./pagination) for detailed configuration.

## Performance Tips

1. **Use reasonable limits** — Keep "Occurrences Per Event" low for better performance
2. **Enable caching** — Ensure cache duration is set in plugin settings
3. **Paginate large lists** — Use pagination instead of showing all events at once
4. **Hide past events** — Reduces the number of calculations needed
