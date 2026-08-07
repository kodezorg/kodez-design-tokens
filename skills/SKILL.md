---
name: kodez-design-tokens
description: Reference guide for the @kodez/design-tokens package. Use when writing, reviewing, or auditing UI code in any Kodez project to ensure correct token usage, theme switching, and Tailwind integration.
metadata:
  author: kodez
  version: "2.0.0"
  argument-hint: <file-or-pattern>
---

# Kodez Design Tokens

Reference guide for `@kodez/design-tokens` (v2.0). Use this when writing or reviewing UI code in any Kodez project to enforce consistent token usage across themes.

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
| `surface-0`   | `#FEFEFE`   | `#09090E`   |
| `surface-1`   | `#F7F7FB`   | `#0F0F16`   |
| `surface-2`   | `#F0F0F6`   | `#15151E`   |
| `surface-3`   | `#E8E8F0`   | `#1C1C27`   |
| `surface-4`   | `#E0E0EC`   | `#222230`   |
| `surface-5`   | `#D8D8E6`   | `#2B2B3F`   |
| `surface-kpi` | —           | `rgba(21,21,30,0.72)` |

Use `surface-0` as the page background. Higher numbers = higher elevation (cards, modals, popovers). `surface-kpi` is dark-mode only — reduced-opacity surface for KPI/metric cards.

### Text hierarchy

| Token            | Purpose                               |
|------------------|---------------------------------------|
| `text-primary`   | Body copy, headings                   |
| `text-secondary` | Supporting labels, captions           |
| `text-tertiary`  | Metadata, timestamps, helper text     |
| `text-accent`    | Links only (mode-adaptive)            |
| `text-disabled`  | Disabled buttons, inputs, menu items  |
| `text-inverse`   | Text on brand/dark/inverted surfaces  |

### Strokes (borders)

| Token                | Usage                          |
|----------------------|--------------------------------|
| `stroke-subtle`      | Dividers, ghost separators     |
| `stroke-default`     | Standard input/card borders    |
| `stroke-strong`      | Emphasized containers          |
| `stroke-hover`       | Hover state borders            |
| `stroke-interactive` | Focused inputs, active controls |

### Brand (`#FF7F56`)

| Token                 | Usage                                      |
|-----------------------|--------------------------------------------|
| `brand-primary`       | Brand CTAs, primary buttons, highlights    |
| `brand-hover`         | Hover state on brand elements              |
| `brand-active`        | Pressed/active state on brand elements     |
| `brand-bg-subtle`     | Low-emphasis brand background (banners, tags) |
| `brand-border`        | High-emphasis brand border                 |
| `brand-border-subtle` | Medium-emphasis brand border               |
| `brand-text`          | Brand-colored text — mode-adaptive         |
| `brand-gradient-1`    | Brand gradient stop 1 (`#F89474`)          |
| `brand-gradient-2`    | Brand gradient stop 2 (`#F0673D`)          |

### Semantic colors

Each semantic category provides five tokens:

| Suffix          | Role                               |
|-----------------|------------------------------------|
| `-bg-solid`     | Solid background (badges, chips)   |
| `-bg-subtle`    | Translucent background (banners)   |
| `-border`       | Strong container border            |
| `-border-subtle`| Secondary/low-emphasis border      |
| `-text`         | Foreground text / copy             |

Categories: `error-*`, `success-*`, `warning-*`, `info-*`

| Base token         | Light bg-solid | Dark bg-solid |
|--------------------|----------------|---------------|
| `error-bg-solid`   | `#DC2626`      | `#F46969`     |
| `success-bg-solid` | `#16A34A`      | `#22C55E`     |
| `warning-bg-solid` | `#D97706`      | `#F59E0B`     |
| `info-bg-solid`    | `#2563EB`      | `#3B82F6`     |

---

## Injecting Tokens (CSS Variables)

### Client-side (React, Vue, vanilla JS)

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

```html
<link rel="stylesheet" href="node_modules/@kodez/design-tokens/dist/tokens.css" />
```

Or in CSS:
```css
@import "@kodez/design-tokens/dist/tokens.css";
```

The file includes `:root` (light), `.dark` (class-based), and `@media (prefers-color-scheme: dark)` blocks.

### Manual CSS vars object

`getCssVars` returns a `Record<string, string>` object with `--` prefixed keys:

```ts
import { getCssVars, darkTokens } from '@kodez/design-tokens';

const vars = getCssVars(darkTokens);
// { '--kz-surface-0': '#09090E', '--kz-brand-primary': '#FF7F56', ... }

// Spread into MUI CssBaseline or CSS-in-JS:
const sx = { ...getCssVars(lightTokens) };
```

After injection, use tokens in any CSS or inline style via `var(--token-name)`:

```css
.card {
  background: var(--kz-surface-2);
  border: 1px solid var(--kz-stroke-default);
  color: var(--kz-text-primary);
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
// Surfaces
bg-surface-0  bg-surface-1  bg-surface-2  bg-surface-3  bg-surface-4  bg-surface-5
bg-surface-kpi  (dark only)

// Text  (via theme.extend.textColor — generates text-primary directly)
text-primary  text-secondary  text-tertiary  text-accent  text-disabled  text-inverse
text-brand  text-error  text-success  text-warning  text-info

// Strokes  (via theme.extend.borderColor — generates border-subtle directly)
border-subtle  border-default  border-strong  border-hover  border-interactive

// Brand
bg-brand-primary  bg-brand-hover  bg-brand-active
bg-brand-bg-subtle  bg-brand-border  bg-brand-border-subtle
bg-brand-gradient-1  bg-brand-gradient-2

// Semantic backgrounds and borders
bg-error-bg-solid    bg-error-bg-subtle    bg-error-border    bg-error-border-subtle
bg-success-bg-solid  bg-success-bg-subtle  bg-success-border  bg-success-border-subtle
bg-warning-bg-solid  bg-warning-bg-subtle  bg-warning-border  bg-warning-border-subtle
bg-info-bg-solid     bg-info-bg-subtle     bg-info-border     bg-info-border-subtle

// Typography
font-sans  font-mono   (Inter / JetBrains Mono)
```

### Tailwind v4

Import the provided CSS file in your main stylesheet:

```css
@import "tailwindcss";
@import "@kodez/design-tokens/dist/tailwind-v4.css";
```

No `tailwind.config.js` needed. The file handles token injection and `@theme inline` mapping.

**Note on text/stroke naming in v4:** Tailwind v4 generates utilities from `--color-*` names, so `--color-text-primary` produces `text-text-primary`. Use arbitrary values for cleaner text color classes:
```html
<p class="text-[var(--kz-text-primary)]">...</p>
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

### getCssVar helper

```ts
import { getCssVar } from '@kodez/design-tokens';
// Strongly typed — only accepts valid TokenName values
const bg = getCssVar('surface-2');   // 'var(--kz-surface-2)'
const fg = getCssVar('text-primary'); // 'var(--kz-text-primary)'
```

---

## ESLint Plugin

Import the plugin to enforce `--kz-` prefix usage in your codebase:

```js
// eslint.config.js
import kodezTokens from '@kodez/design-tokens/eslint-plugin';

export default [
  kodezTokens.configs.recommended,
];
```

The `no-raw-token-var` rule warns when you write `var(--surface-0)` (missing `kz-` prefix) or reference an unknown token name.

---

## Review Rules

When reviewing UI code in any Kodez project, enforce the following:

- **No hardcoded hex colors** — any color matching a token value must use `var(--token-name)` or the corresponding Tailwind class instead.
- **Surface hierarchy** — lighter surfaces must not sit beneath darker ones without intentional reason. Follow the `surface-0` (page) → `surface-1` (nav) → `surface-2` (card) → `surface-3+` (nested/hover) model.
- **Semantic tokens for state** — use `error-*` / `success-*` / `warning-*` / `info-*` token families for feedback states; never use raw red/green/yellow/blue hex values.
- **Focus rings** — keyboard focus must use `var(--kz-stroke-interactive)` or `getCssVar('stroke-interactive')` for typed access. Do not use browser default outlines without replacement.
- **Brand for interactive elements** — primary buttons, active nav items, and interactive borders must use `brand-primary` / `var(--kz-stroke-interactive)`, not arbitrary colors.
- **Brand text** — use `var(--brand-text)` (or `text-brand`) for brand-colored text; it is mode-adaptive. Never use `--brand-primary` directly as a text color.
- **Links** — always use `var(--text-accent)` (or `text-accent`) for hyperlinks; never use raw hex for link color.
- **Typography** — font families must be `Inter` (sans) or `JetBrains Mono` (mono). Flag other font-family declarations.
- **Dark mode** — every surface, text, and stroke token already has a dark variant; never add separate dark-mode color overrides using raw values.
- **SSR safety** — `injectCssVars` must only be called in browser contexts (inside `useEffect`, event handlers, or after a `typeof document !== 'undefined'` guard). For server-rendered apps use `getCssString` + a `<style>` tag.

Flag violations with a `[design-token]` prefix in review output.
