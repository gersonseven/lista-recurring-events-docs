---
sidebar_position: 1
---

# Common Issues

Solutions to frequently encountered problems.

## Next Occurrence Not Showing

### Check the Date Field

1. Go to **Recurring Events → Settings**
2. Verify the **Date Field** name matches your actual field
3. Edit an event and confirm the field has a date value

### Check Recurrence is Enabled

1. Edit the event
2. Look for the **Recurrence Settings** metabox
3. Ensure "Enable recurring event" is toggled **On**

### Verify the Anchor Date

The anchor date must match your recurrence pattern:

- **Weekly (Monday)**: Anchor should be a Monday
- **Monthly (15th)**: Anchor should be the 15th
- **Monthly (First Tuesday)**: Anchor should be a first Tuesday

### Clear the Cache

1. Go to **Recurring Events → Settings**
2. Click **Clear All Cache**
3. Refresh and test again

---

## Wrong Dates Showing

### Check WordPress Timezone

1. Go to **Settings → General**
2. Verify your timezone is correct
3. Save changes even if it looks correct

### Check Date Format in Field

Ensure your date field stores dates in a format PHP can parse:

- ✅ `2026-01-15` (Y-m-d)
- ✅ `15/01/2026` (d/m/Y)
- ✅ `January 15, 2026`
- ❌ Custom formats may not work

### Clear Cache After Changes

After fixing date issues:

1. Clear plugin cache
2. Clear any page caching plugins
3. Test in an incognito browser

---

## Bricks Dynamic Tags Not Appearing

### Verify Bricks is Active

The tags only register when Bricks Builder is active.

### Check the Tag Group

1. In Bricks, click the dynamic data icon
2. Look for **Recurring Events** group
3. If missing, try refreshing the editor

### Check Query Loop Context

Dynamic tags may not appear if you're not inside a query loop or single event context.

---

## Query Loop Not Showing Events

### Verify Query Type

1. Select your query loop container
2. Check that **Query Type** is set to "Recurring Events"
3. Not the standard "Posts" type

### Check License Status

Multiple occurrences require a valid license:

1. Go to **Recurring Events → Settings → License**
2. Verify license is active
3. If expired, renew and reactivate

### Check "Hide Past Events"

If enabled, only future occurrences show. If all your test events are in the past, they won't appear.

### Verify Post Type

Ensure the post type in query settings matches your configured post types.

---

## Calendar Not Displaying

### Check Shortcode

Verify the shortcode is correct:

```
[lre_calendar]
```

Not:
```
[lre-calendar]
[calendar]
```

### Check Events Have Calendar Enabled

Events must have "Display event in calendar" toggled On in the metabox.

### Check JavaScript Console

Open browser developer tools (F12) and check the Console tab for errors.

### Check for Plugin Conflicts

Temporarily deactivate other plugins to identify conflicts, especially:
- Other calendar plugins
- JavaScript optimization plugins
- Caching plugins

---

## Filters Not Working

### AJAX Not Loading

Check browser console for JavaScript errors.

### URL Not Updating

AJAX filters update the URL. If this isn't working:
- Check for JavaScript errors
- Verify no plugin is blocking History API
- Test in incognito mode

### Wrong Query Being Filtered

Ensure the filter is targeting the correct query loop:
- In Bricks: Check "Target Query Loop" setting
- Multiple loops: Each filter can only target one loop

---

## Add to Calendar Not Working

### Button Not Appearing

1. Enable the feature in **Settings → General → Add to Calendar**
2. Configure the **Start Time Field**
3. Ensure the event has a time value

### Wrong Event Times

1. Verify your time field format (HH:mm or h:i a)
2. Check WordPress timezone settings
3. Test with a simple time like "14:00"

### ICS Download Issues

1. Check for JavaScript errors
2. Disable security plugins temporarily
3. Test in different browser

---

## Performance Issues

### Slow Page Load

1. Reduce "Occurrences Per Event" in query settings
2. Lower "Default Occurrences" in plugin settings
3. Increase cache duration
4. Use pagination instead of showing all events

### Database Timeouts

1. Check if transients table is bloated
2. Clear plugin cache
3. Consider using object caching (Redis/Memcached)

---

## Override Values Not Showing

### Check Field Configuration

1. Go to **Settings → Overrides**
2. Ensure the field is checked as overridable
3. Save settings

### Check URL Parameter

Single event pages need the `?lre_date=YYYY-MM-DD` parameter for override context:

```
yoursite.com/event/yoga/?lre_date=2026-01-15
```

### Verify Override Exists

1. Edit the event
2. Go to Manage Occurrences
3. Confirm an override exists for that date and field

---

## Still Having Issues?

1. **Enable Debug Mode**: Add `?lre_debug=1` to your URL
2. **Check Debug Log**: Go to Settings → Debug tab (if enabled)
3. **Contact Support**: Visit [listapage.au](https://listapage.au) with:
   - WordPress version
   - PHP version
   - Plugin version
   - Steps to reproduce
   - Any error messages
