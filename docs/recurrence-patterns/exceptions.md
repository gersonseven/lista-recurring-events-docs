---
sidebar_position: 3
---

# Exception Dates

Exclude specific dates from your recurrence pattern without changing the pattern itself.

## What Are Exception Dates?

Exception dates are specific dates that should be skipped even though they match the recurrence pattern. They're perfect for:

- **Holidays**: Skip Christmas, New Year's, etc.
- **Venue closures**: Building maintenance, renovation periods
- **Conflicts**: Dates when another event takes priority
- **Cancellations**: One-time cancellations without changing the pattern

## Adding Exception Dates

### Quick Add

In the Recurrence Settings metabox:

1. Ensure recurrence is enabled
2. Find the Exception Dates section
3. Click **Manage Exclusions**

![Manage Exclusions Button](/img/date-exclusions.jpg)

### Exclusions Modal

The modal shows all calculated occurrences:

![Exclusions Modal](/img/manage-exclusions.jpg)

Features:
- **Search**: Find specific dates quickly
- **Pagination**: Navigate through many occurrences
- **Checkboxes**: Select dates to exclude
- **Selected count**: See how many dates are excluded

### Steps to Exclude Dates

1. Open the Manage Exclusions modal
2. Browse or search for the date(s) to exclude
3. Check the checkbox next to each date
4. Click **Save Changes**

## Viewing Excluded Dates

Excluded dates appear in the metabox with a strikethrough or badge indicating they're excluded.

## Removing Exceptions

To restore an excluded date:

1. Open Manage Exclusions
2. Uncheck the date
3. Save changes

The date will resume appearing in the recurrence.

## Exception Dates vs. Pattern Changes

| Scenario | Use Exception Dates | Change Pattern |
|----------|---------------------|----------------|
| Skip one holiday | ✅ | ❌ |
| Event permanently moves to different day | ❌ | ✅ |
| Skip multiple specific dates | ✅ | ❌ |
| Reduce frequency permanently | ❌ | ✅ |

## Technical Notes

- Exception dates are stored as an array in post meta (`_lre_exception_dates`)
- Maximum exceptions limited by the 375 occurrence cap
- Exceptions are checked during occurrence calculation
- Cache is cleared when exceptions change
