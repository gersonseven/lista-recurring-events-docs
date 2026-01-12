---
sidebar_position: 3
---

# Creating Your First Recurring Event

Learn how to create a recurring event and configure its recurrence pattern.

## Create an Event Post

1. Navigate to your events post type in WordPress admin
2. Click **Add New**
3. Enter your event title and content
4. Fill in the date field you configured in settings (e.g., `event_start_date`)

![Create Event](/img/event-creation.jpg)

## The Recurrence Settings Metabox

When editing an event, you'll see the **Recurrence Settings** metabox. This is where you configure how the event repeats.

![Recurrence Metabox](/img/recurrence-metabox.jpg)

### Enable Recurring Event

Switch this toggle to **Yes** to make the event repeat. When enabled, additional options appear.

![Recurrence Metabox On](/img/recurrence-on.jpg)

### Display Event in Calendar

Switch this toggle to **Yes** to show the event on the `[lre_calendar]` calendar. You can enable calendar display without enabling recurrence—useful for one-off events.

![Calendar Display On](/img/calendar-display-on.jpg)

## Choosing a Recurrence Pattern

Select your recurrence pattern from the dropdown:

### Daily

Event repeats every day or every X days.

- **Every day**: Event occurs daily
- **Every X days**: Set an interval (e.g., every 3 days)

![Daily Pattern](/img/daily-pattern.jpg)

### Weekly

Event repeats on specific days of the week.

- **Days**: Select which days (Mon, Tue, Wed, etc.)
- **Interval**: Every week, every 2 weeks, etc.

![Weekly Pattern](/img/weekly-pattern.jpg)

### Monthly (Nth Weekday)

Event occurs on a specific weekday of the month.

- **Ordinal**: First, Second, Third, Fourth, or Last
- **Weekday**: Sunday through Saturday
- **Interval**: Every month, every 2 months, etc.

**Examples:**
- First Monday of every month
- Second Tuesday every 2 months
- Last Friday of every month

![Monthly Nth Weekday](/img/monthly-nth-pattern.jpg)

### Monthly (Same Date)

Event repeats on the same date each month.

- Uses the anchor date's day number
- **Interval**: Every month, every 2 months, every 3 months, every 6 months, etc.

![Monthly Same Day](/img/monthly-same-day-pattern.jpg)

### Yearly

Event occurs once per year on the same date.

### Custom Dates

Manually select specific dates for irregular schedules.

![Custom Dates](/img/custom-pattern.jpg)

## End Recurrence Options

Control when the recurrence stops:

| Option | Description |
|--------|-------------|
| **Never** | Continues indefinitely |
| **On Date** | Ends on a specific date |
| **After X Occurrences** | Stops after a set number of occurrences |

## Exception Dates

Exclude specific dates from the recurrence pattern. Perfect for:

- Holidays
- Venue closures
- One-time cancellations

1. Click **Manage Exclusions**
2. Browse or search available dates
3. Check dates to exclude
4. Save changes

![Manage Exclusions](/img/manage-exclusions.jpg)

## Calendar Display Tab

When "Display event in calendar" is enabled, additional options appear:

### Event Color

Choose a custom color for this event in the calendar. Leave empty to use the default theme color.

## Save Your Event

Click **Publish** (or **Update** for existing events) to save your recurrence settings. The plugin will automatically calculate upcoming occurrences.

## Verify It Works

Test your configuration:

1. **Shortcode test**: Add `[lre_next_date]` to a page—it should show the next occurrence
2. **Calendar test**: Add `[lre_calendar]` to see your event on the calendar
3. **Query loop**: If using Bricks or Elementor, create a query loop to list occurrences

## Next Steps

- Learn about [Recurrence Patterns](../recurrence-patterns/overview) in detail
- Set up [Bricks Builder Integration](../bricks-builder/query-loop)
- Configure the [Interactive Calendar](../calendar/configuration)
