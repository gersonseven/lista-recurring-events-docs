---
sidebar_position: 2
---

# Filter Widgets

Add AJAX-powered filtering to your Elementor event listings.

## Available Filter Widgets

Lista Recurring Events provides two filter widgets for Elementor:

- **LRE Date Filter** — Filter by preset date ranges
- **LRE Taxonomy Filter** — Filter by category/tag

Both work via AJAX for a seamless user experience.

## Date Filter Widget

Filter events by preset date ranges.

### Content Settings

| Setting | Description |
|---------|-------------|
| **Date Options** | Which presets to show |
| **Show "All" Option** | Include "All Dates" choice |
| **All Label** | Text for "All" option |

### Available Presets

- Today
- Tomorrow
- This Week
- Next Week
- This Month
- Next Month
- This Year

### Style Settings

| Setting | Description |
|---------|-------------|
| **Display Type** | Buttons, Pills, or Dropdown |
| **Typography** | Font settings |
| **Normal Colors** | Text and background |
| **Active Colors** | Selected state styling |
| **Hover Colors** | Hover state styling |
| **Border** | Border settings |
| **Border Radius** | Corner rounding |
| **Padding** | Internal spacing |
| **Gap** | Space between items |

---

## Taxonomy Filter Widget

Filter by categories, tags, or custom taxonomies.

### Content Settings

| Setting | Description |
|---------|-------------|
| **Taxonomy** | Select taxonomy (Category, Tag, etc.) |
| **Selection Mode** | Single or Multiple selection |
| **Show "All" Option** | Include "All" choice |
| **Show Event Counts** | Display count per term |
| **Include Terms** | Limit to specific terms |
| **Exclude Terms** | Hide specific terms |

### Style Settings

| Setting | Description |
|---------|-------------|
| **Display Type** | Buttons, Pills, Dropdown, Checkboxes, or Radio |
| **Typography** | Font settings |
| **Colors** | Normal, Active, Hover states |
| **Border & Radius** | Border styling |
| **Padding & Gap** | Spacing |
| **Count Badge** | Styling for count display |

---

## Connecting Filters to Loop

Filters automatically connect to the **LRE Events Loop** widget on the same page. No manual targeting needed.

If you have multiple loop widgets, filters affect all of them.

---

## Filter Layout Examples

### Horizontal Bar

Place filters in a row above your events:

```
Section (Flex, Row)
├── LRE Date Filter
├── LRE Taxonomy Filter
└── Spacer
─────────────────────
Section
└── LRE Events Loop
```

### Sidebar

Filters in a sidebar column:

```
Section (2 Columns)
├── Column (25%)
│   ├── LRE Date Filter
│   └── LRE Taxonomy Filter
└── Column (75%)
    └── LRE Events Loop
```

---

## AJAX Behavior

When filters change:

1. Filter sends request to server
2. Events loop shows loading state
3. Results update without page reload
4. URL updates (shareable/bookmarkable)
5. Pagination resets to page 1

### Loading State

During filtering, the loop container fades. Customize with CSS:

```css
.lre-elementor-loop.lre-loading {
    opacity: 0.6;
    pointer-events: none;
}
```

---

## Reset Filters

Users can reset all filters by:

1. Clicking the "All" option on any filter
2. Manually removing filter parameters from URL
3. Adding a custom reset button (see below)

### Custom Reset Button

Add an Elementor button with this link:

```
#lre-reset-filters
```

Then add this JavaScript:

```javascript
document.querySelector('[href="#lre-reset-filters"]').addEventListener('click', function(e) {
    e.preventDefault();
    window.history.pushState({}, '', window.location.pathname);
    window.LREFilters.applyFilters({});
});
```

---

## Styling Tips

### Consistent Button Sizes

Use fixed width/height for uniform filter buttons:

```css
.lre-filter-button {
    min-width: 100px;
    text-align: center;
}
```

### Mobile Optimization

Stack filters vertically on mobile using Elementor's responsive controls:

1. Select the filter section
2. Switch to mobile view
3. Change Flex Direction to Column
4. Adjust gaps and padding

### Active State Visibility

Ensure active filters are clearly distinguishable:

- Use a bold color contrast
- Consider adding a checkmark icon
- Make active state obvious
