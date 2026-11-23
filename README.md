# Lista Recurring Events - documentation

The documentation and changelog for the Lista Recurring Events WordPress plugin, published at https://docs.listarecurringevents.com.

Built with [Docusaurus](https://docusaurus.io/).

## Where things are

| Folder | What it holds |
| --- | --- |
| `docs/` | The documentation pages. The sidebar is generated from the folder structure |
| `changelog/` | One Markdown file per release, shown at `/changelog` |
| `static/img/` | Images used in the pages |

## Adding a release to the changelog

Create `changelog/YYYY-MM-DD-vX.Y.Z-short-name.md`:

```md
---
title: Version X.Y.Z - Short title
description: One or two sentences for the list page and search engines.
date: YYYY-MM-DD
tags:
  - Fix
slug: vX-Y-Z
---

A one-paragraph summary.

<!-- truncate -->

The full notes.
```

Curly braces and angle brackets must sit inside backticks or a code block, for example `{lre_next_date}`. Outside code they break the build.

## Local development

```bash
npm install
npm start
```

## Build

```bash
npm run build
```

The build fails on broken internal links, so run it before pushing.
