---
sidebar_position: 4
---

# Event Elements

Specialized Bricks elements for displaying event information.

## Event Occurrences Element

Display upcoming dates for a single event—perfect for event detail pages.

![Event Occurrences Element](/img/lre-event-occurrences.jpg)

### Adding the Element

1. On your single event template, add the **LRE Event Occurrences** element
2. Configure display mode and styling

### Display Modes

#### List Mode

Shows occurrences as a formatted list.

**List Settings:**

| Setting | Description |
|---------|-------------|
| **Layout** | Vertical or Horizontal |
| **Show Weekday** | Display day name |
| **Show Time** | Display event time |
| **Max Items** | Limit number shown |
| **Link Dates** | Make dates clickable |
| **Separator Style** | Line between items (solid, dashed, dotted, double) |
| **Separator Color** | Line color |

**Styling Controls:**
- Container: width, padding, background, border, border radius
- Item: padding, gap between items
- Typography: separate controls for date, weekday, and time

#### Mini Calendar Mode

Shows a compact monthly calendar highlighting occurrence dates.

![Mini Calendar Mode](/img/mini-calendar.jpg)

**Calendar Settings:**

| Setting | Description |
|---------|-------------|
| **Dot Color** | Color of occurrence indicators |
| **Show Navigation** | Prev/Next month arrows |
| **Custom Arrow Icons** | Use your uploaded calendar arrows |

**Styling Controls:**
- Width and padding
- Day cell backgrounds (normal, today, occurrence)
- Typography for headers and dates
- Border and border radius

### Common Settings

| Setting | Description |
|---------|-------------|
| **Number of Occurrences** | How many dates to show (max 375) |
| **Exclude Current** | Hide the currently viewed occurrence |
| **Empty Message** | Text when no upcoming dates |
| **Date Format** | PHP date format string |

### Use Cases

- **Event detail page**: Show "Other Dates" for recurring events
- **Sidebar widget**: Quick view of upcoming sessions
- **Registration page**: Let users see all available dates

---

## Pagination Element

Add pagination to your Recurring Events query loops.

### Setup

1. Ensure your query loop has "Posts Per Page" set
2. Add the **LRE Pagination** element below your query loop
3. Select your query loop as the target

### Settings

| Setting | Description |
|---------|-------------|
| **Target Query** | Which query loop to paginate |
| **Show Page Numbers** | Display numbered page links |
| **Show Prev/Next** | Navigation arrows |
| **Previous Text** | Text for previous button |
| **Next Text** | Text for next button |
| **Max Page Links** | How many page numbers to show |

### Styling

Full control over:
- Button/number appearance
- Active page styling
- Hover states
- Spacing and alignment
- Disabled state

### Behavior

- Updates via AJAX (no page reload)
- Works with active filters
- Updates URL for shareable links
- Scrolls to top of query loop on page change

---

## Element Best Practices

### Performance

1. **Limit occurrences** — Don't request more than needed
2. **Use pagination** — Don't show hundreds of events at once
3. **Lazy load images** — Enable browser lazy loading

### Accessibility

1. **Meaningful labels** — Use descriptive text for navigation
2. **Keyboard navigation** — Test that filters work with keyboard
3. **Screen reader text** — Add context for assistive technology

### Mobile

1. **Stack filters** — Use column layout on mobile
2. **Touch-friendly** — Ensure adequate tap targets
3. **Test date picker** — Flatpickr works on mobile, but verify

### Responsive Design

Use Bricks' responsive controls to adjust:
- Number of columns in query loops
- Filter layout (row → column on mobile)
- Typography sizes
- Spacing
