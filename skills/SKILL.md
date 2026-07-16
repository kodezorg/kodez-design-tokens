---
name: kodez-design-tokens
description: Reference guide for the @kodez/design-tokens package. Use when writing, reviewing, or auditing UI code in any Kodez project to ensure correct token usage, theme switching, and Tailwind integration.
metadata:
  author: kodez
  version: "1.1.2"
  argument-hint: <file-or-pattern>
---

# Kodez Design Tokens

Reference guide for `@kodez/design-tokens` (v1.1.2). Use this when writing or reviewing UI code in any Kodez project to enforce consistent token usage across themes.

## Package

```
@kodez/design-tokens
```

Published to the internal Azure Artifacts registry. Exports are ESM-only.

---

## What the Package Exports

```ts
// Core (framework-agnostic)
import { lightTokens, darkTokens } from '@kodez/design-tokens';
import type { ThemeMode } from '@kodez/design-tokens';
import { getCssVars, injectCssVars } from '@kodez/design-tokens';

// Tailwind integration
import { tailwindPreset } from '@kodez/design-tokens';
```

---

## Token Categories

All tokens exist in both `lightTokens` and `darkTokens` objects. At runtime they are injected as CSS custom properties (`--token-name`).

### Surfaces (elevation scale)

| Token         | Light       | Dark        |
|---------------|-------------|-------------|
| `surface-0`   | `#F5F7FA`   | `#09090E`   |
| `surface-1`   | `#FFFFFF`   | `#0F0F16`   |
| `surface-2`   | `#EFF0F2`   | `#15151E`   |
| `surface-3`   | `#E7E9EC`   | `#1C1C27`   |
| `surface-4`   | `#DFE3E8`   | `#222230`   |
| `surface-5`   | `#D4DAE1`   | `#2B2B3F`   |

Use `surface-0` as the page background. Higher numbers = higher elevation (cards, modals, popovers).

### Text hierarchy

| Token            | Purpose                        |
|------------------|--------------------------------|
| `text-primary`   | Body copy, headings            |
| `text-secondary` | Supporting labels, captions    |
| `text-muted`     | Placeholders, disabled text    |
| `text-inverse`   | Text on dark/accent backgrounds|

### Borders

| Token                | Usage                          |
|----------------------|--------------------------------|
| `border-subtle`      | Dividers, ghost separators     |
| `border-default`     | Standard input/card borders    |
| `border-strong`      | Emphasized containers          |
| `border-hover`       | Hover state borders            |
| `border-interactive` | Focused inputs (maps to accent)|

### Accent (primary interactive color — `#5153F6`)

| Token            | Usage                          |
|------------------|--------------------------------|
| `accent`         | Buttons, links, active states  |
| `accent-hover`   | Hover state of accent elements |
| `accent-dim`     | Subtle accent fills            |
| `accent-border`  | Accent-tinted borders          |
| `accent-glow`    | Glow / shadow effects          |
| `focus-ring`     | Keyboard focus ring            |
| `accent-soft-08` | 8% opacity accent fill         |
| `accent-soft-12` | 12% opacity accent fill        |
| `accent-soft-14` | 14% opacity accent fill        |
| `accent-soft-55` | 55% opacity accent fill        |

### Brand (secondary highlight color — `#FF7F56`)

| Token         | Usage                     |
|---------------|---------------------------|
| `brand-primary` | Brand CTAs, highlights  |
| `brand-hover`   | Hover on brand elements |
| `brand-dim`     | Subtle brand fills      |
| `brand-glow`    | Brand glow effects      |

### Semantic colors

| Token                  | Purpose                   |
|------------------------|---------------------------|
| `color-danger`         | Error text                |
| `color-danger-bg`      | Error background          |
| `color-danger-border`  | Error border              |
| `color-success`        | Success text              |
| `color-success-bg`     | Success background        |
| `color-success-border` | Success border            |
| `color-warning`        | Warning text              |
| `color-warning-bg`     | Warning background        |
| `color-info`           | Info text                 |
| `color-info-bg`        | Info background           |

### Page / Portal gradients

| Token                | Usage                              |
|----------------------|------------------------------------|
| `page-gradient`      | Full-page background gradient      |
| `page-gradient-muted`| Subtle variant of page gradient    |
| `portal-hero-bg`     | Hero section background            |

---

## Injecting Tokens (CSS Variables)

The recommended setup — inject tokens once at the root of the app:

```ts
import { injectCssVars, lightTokens } from '@kodez/design-tokens';

// Inject light theme by default
injectCssVars(lightTokens);

// Switch to dark theme
import { darkTokens } from '@kodez/design-tokens';
injectCssVars(darkTokens);
```

For manual control, `getCssVars` returns the tokens as a CSS string:

```ts
import { getCssVars, darkTokens } from '@kodez/design-tokens';

const cssString = getCssVars(darkTokens);
// "--surface-0: #09090E; --surface-1: #0F0F16; ..."
```

After injection, use tokens in any CSS or inline style via `var(--token-name)`:

```css
.card {
  background: var(--surface-1);
  border: 1px solid var(--border-default);
  color: var(--text-primary);
}
```

---

## Tailwind Integration

Add the preset to `tailwind.config.js` — the app decides `darkMode` and `preflight`:

```js
import { tailwindPreset } from '@kodez/design-tokens';

export default {
  presets: [tailwindPreset],
  content: ['./src/**/*.{ts,tsx}'],
  darkMode: 'class',                   // app decides
  corePlugins: { preflight: false },   // app decides (false for MUI apps)
};
```

Available Tailwind utility classes after adding the preset:

```
bg-surface-0  bg-surface-1  bg-surface-2  bg-surface-3  bg-surface-4  bg-surface-5
text-primary  text-secondary  text-muted  text-inverse
border-subtle  border-default  border-strong  border-hover  border-interactive
bg-accent  bg-accent-hover  bg-accent-dim
bg-brand  bg-brand-hover  bg-brand-dim
bg-danger  bg-danger-bg  border-danger-border
bg-success  bg-success-bg  border-success-border
bg-warning  bg-warning-bg
bg-info  bg-info-bg
font-sans  font-mono   (Inter / JetBrains Mono)
ring-focus
```

---

## TypeScript Usage

Tokens are typed as `Record<string, string>` and `ThemeMode` is `'light' | 'dark'`:

```ts
import { lightTokens, darkTokens, ThemeMode } from '@kodez/design-tokens';

function getTokens(mode: ThemeMode) {
  return mode === 'dark' ? darkTokens : lightTokens;
}
```

---

## Review Rules

When reviewing UI code in any Kodez project, enforce the following:

- **No hardcoded hex colors** — any color matching a token value must use `var(--token-name)` or the corresponding Tailwind class instead.
- **Surface hierarchy** — lighter surfaces must not sit beneath darker ones without intentional reason. Follow the `surface-0` (page) → `surface-1` (card) → `surface-2+` (nested) model.
- **Semantic tokens for state** — use `color-danger` / `color-success` / `color-warning` / `color-info` for feedback states; never use raw red/green/yellow/blue hex values.
- **Focus rings** — keyboard focus must use `var(--focus-ring)` or `ring-focus` (Tailwind). Do not use browser default outlines without replacement.
- **Accent for interactive elements** — primary buttons, active nav items, and interactive borders must use `accent` / `border-interactive`, not brand or arbitrary colors.
- **Brand for marketing/highlight only** — `brand-primary` is for CTAs and highlights, not for generic interactive states.
- **Typography** — font families must be `Inter` (sans) or `JetBrains Mono` (mono). Flag other font-family declarations.
- **Dark mode** — every surface, text, and border token already has a dark variant; never add separate dark-mode color overrides using raw values.

Flag violations with a `[design-token]` prefix in review output.
