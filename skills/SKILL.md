---
name: kodez-design-tokens
description: Reference guide for the @kodez/design-tokens package. Use when writing, reviewing, or auditing UI code in any Kodez project to ensure correct token usage, theme switching, and Tailwind integration.
metadata:
  author: kodez
  version: "1.5.1"
  argument-hint: <file-or-pattern>
---

# Kodez Design Tokens

Reference guide for `@kodez/design-tokens` (v1.2.0). Use this when writing or reviewing UI code in any Kodez project to enforce consistent token usage across themes.

## Package

```
@kodez/design-tokens
```

Published to the internal Azure Artifacts registry. Requires `.npmrc` with the `@kodez` scope configured (see README). Exports both ESM and CJS.

---

## What the Package Exports

```ts
// Core (framework-agnostic)
import { lightTokens, darkTokens } from '@kodez/design-tokens';
import type { ThemeMode } from '@kodez/design-tokens';
import { getCssVars, getCssString, injectCssVars } from '@kodez/design-tokens';

// Tailwind v3 integration
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

### Client-side (React, Vue, vanilla JS)

The recommended setup — inject tokens once at the root of the app:

```ts
import { injectCssVars, lightTokens } from '@kodez/design-tokens';

// Inject light theme by default
injectCssVars(lightTokens);

// Switch to dark theme
import { darkTokens } from '@kodez/design-tokens';
injectCssVars(darkTokens);
```

React theme switching with `useEffect`:

```tsx
import { useEffect } from 'react';
import { injectCssVars, lightTokens, darkTokens } from '@kodez/design-tokens';

function ThemeProvider({ isDark, children }) {
  useEffect(() => {
    injectCssVars(isDark ? darkTokens : lightTokens);
  }, [isDark]);
  return children;
}
```

### SSR / Next.js App Router (Server Components)

`injectCssVars` is a no-op on the server (no `document`). Use `getCssString` to inject tokens via a `<style>` tag instead:

```tsx
// app/layout.tsx — Server Component, no `document` access needed
import { getCssString, lightTokens, darkTokens } from '@kodez/design-tokens';

export default function RootLayout({ children }) {
  const lightCss = getCssString(lightTokens, ':root');
  const darkCss  = getCssString(darkTokens,  '.dark');
  return (
    <html>
      <head>
        <style dangerouslySetInnerHTML={{ __html: lightCss + darkCss }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
```

Toggle dark mode by adding/removing the `dark` class on `<html>`:
```ts
document.documentElement.classList.toggle('dark', isDark);
```

### Static CSS (no JavaScript required)

For standalone HTML, email templates, or any project that prefers a stylesheet:

```html
<link rel="stylesheet" href="node_modules/@kodez/design-tokens/dist/tokens.css" />
```

Or in CSS:
```css
@import "@kodez/design-tokens/dist/tokens.css";
```

The file includes `:root` (light), `.dark` (class-based), and `@media (prefers-color-scheme: dark)` blocks.

### Manual CSS string

`getCssVars` returns a `Record<string, string>` object with `--` prefixed keys:

```ts
import { getCssVars, darkTokens } from '@kodez/design-tokens';

const vars = getCssVars(darkTokens);
// { '--surface-0': '#09090E', '--accent': '#5153F6', ... }

// Spread into MUI CssBaseline or CSS-in-JS:
const sx = { ...getCssVars(lightTokens) };
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

### Tailwind v3

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
  (via theme.extend.textColor — generates text-primary directly, not text-text-primary)

border-subtle  border-default  border-strong  border-hover  border-interactive
  (via theme.extend.borderColor — generates border-subtle directly)

bg-accent  bg-accent-hover  bg-accent-dim  bg-accent-border  bg-accent-glow
bg-accent-soft-08  bg-accent-soft-12  bg-accent-soft-14  bg-accent-soft-55

bg-brand  bg-brand-hover  bg-brand-dim  bg-brand-glow

bg-danger  bg-danger-bg  bg-danger-border
bg-success  bg-success-bg  bg-success-border  bg-success-soft-12  bg-success-soft-14
bg-warning  bg-warning-bg  bg-warning-soft-16
bg-info  bg-info-bg  bg-info-soft-12  bg-info-soft-14

font-sans  font-mono   (Inter / JetBrains Mono)
ring-focus
```

### Tailwind v4

Import the provided CSS file in your main stylesheet:

```css
@import "tailwindcss";
@import "@kodez/design-tokens/dist/tailwind-v4.css";
```

No `tailwind.config.js` needed. The file handles token injection and `@theme inline` mapping.

**Note on text/border naming in v4:** Tailwind v4 generates utilities from `--color-*` names, so `--color-text-primary` produces `text-text-primary`. Use arbitrary values for cleaner text color classes:
```html
<p class="text-[var(--text-primary)]">...</p>
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
- **SSR safety** — `injectCssVars` must only be called in browser contexts (inside `useEffect`, event handlers, or after a `typeof document !== 'undefined'` guard). For server-rendered apps use `getCssString` + a `<style>` tag.

Flag violations with a `[design-token]` prefix in review output.
