---
sidebar_position: 4
---

# Translating the Plugin

Lista Recurring Events is translation ready. It does not ship with translations, so you create one for your language from the template included in the plugin.

## Before You Start

Update to **1.7.9 or later**. Its translation template is complete. The template in earlier versions was missing the text added in 1.7.6 and 1.7.7.

You need:

- The template file, `languages/lista-recurring-events.pot`, inside the plugin folder
- Your site's locale code, for example `de_DE`, `de_DE_formal`, `cs_CZ` or `fr_FR`. It matches the language chosen under **Settings → General → Site Language**

## Option 1: Loco Translate

1. Install and activate the [Loco Translate](https://wordpress.org/plugins/loco-translate/) plugin
2. Go to **Loco Translate → Plugins → Lista Recurring Events**
3. Click **New language** and choose your language
4. For the location, choose **Custom**, which is `wp-content/languages/loco/plugins/`. Loco Translate keeps files there safe from updates
5. Translate the strings and save

## Option 2: Poedit

1. Open [Poedit](https://poedit.net/) and choose **Create new translation**
2. Select `lista-recurring-events.pot` and choose your language
3. Translate the strings
4. Save the file as `lista-recurring-events-{locale}.po`, for example `lista-recurring-events-de_DE.po`. Poedit creates the matching `.mo` file beside it
5. Upload both files to `wp-content/languages/plugins/`

## Where to Keep Your Files

Keep translation files outside the plugin's own `languages` folder: in `wp-content/languages/plugins/`, or in Loco Translate's custom folder. Files inside the plugin folder are replaced every time the plugin updates.

## After a Plugin Update

New versions can add or change text. In Loco Translate, click **Sync**. In Poedit, choose **Translation → Update from POT file** and select the new template. Then translate anything new.

## What Is Already Translated for You

Dates, month names and weekday names follow your site language without a translation file.

## Known Limitation

A few labels in the front-end filters are still fixed in English and cannot be translated yet, for example "Clear Selection", "Select options..." and the "3 selected" count. This is a known fault and will be corrected in a later 1.7 release.
