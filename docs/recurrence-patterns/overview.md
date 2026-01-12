---
sidebar_position: 1
---

# Recurrence Patterns Overview

Lista Recurring Events supports multiple recurrence patterns to handle virtually any scheduling need.

## Understanding Recurrence

Each event has an **anchor date**—the date stored in your configured date field. This anchor date serves as the starting point for all recurrence calculations.

The plugin calculates future occurrences dynamically based on:

- The anchor date
- The current date
- The selected recurrence pattern
- Any exception dates

**No additional posts are created.** Occurrences are calculated virtually and cached for performance.

## Available Patterns

| Pattern | Description | Example |
|---------|-------------|---------|
| **Daily** | Every X days | Every day, every 3 days |
| **Weekly** | Specific days each week | Mon/Wed/Fri every week |
| **Monthly (Nth Weekday)** | Specific weekday of month | First Monday, Last Friday |
| **Monthly (Same Date)** | Same date each month | 15th of every month |
| **Yearly** | Once per year | Same date annually |
| **Custom Dates** | Manually selected dates | Irregular schedule |

## Pattern Selection

Choose your pattern in the Recurrence Settings metabox.

## How Calculations Work

When you request the next occurrence:

1. Plugin checks the cache first
2. If not cached, it calculates from the anchor date
3. It finds the next date matching the pattern
4. Excludes any exception dates
5. Returns the result and caches it

### Example Calculation

**Anchor date:** January 15, 2026  
**Pattern:** Weekly on Monday  
**Current date:** January 20, 2026

The plugin calculates that the next Monday after January 15 is January 20, which is today. The next occurrence after today is January 27, 2026.

## Pattern Limits

To prevent performance issues:

- Maximum **375 occurrences** can be calculated
- "After X Occurrences" end option caps at 375
- Cache expires based on your cache duration setting

## Combining with End Options

Each pattern can be combined with end options:

- **Never** — Continues indefinitely
- **On Date** — Stops at a specific end date
- **After X Occurrences** — Stops after a set count

## Exception Dates

Any pattern can have exception dates—specific dates that are skipped even if they match the pattern.

[Learn more about Exception Dates →](./exceptions)
