# @kodez/design-tokens

Design token package for Kodez projects. Provides light/dark theme tokens as CSS custom properties, with first-class support for React, Next.js (including App Router SSR), standalone HTML, Tailwind v3, and Tailwind v4.

All semantic and accent color values meet **WCAG AAA (7:1 contrast)** against their intended backgrounds.

## Compatibility

| Environment | Status | Notes |
|---|---|---|
| React + Vite | ✅ Full | ESM — use `injectCssVars` in a `useEffect` |
| React + webpack / CRA | ✅ Full | CJS bundle included |
| Next.js App Router (RSC) | ✅ Full | Use `getCssString` + `<style>` tag in layout |
| Next.js Pages Router | ✅ Full | Use `injectCssVars` in `_app.tsx` effect |
| Next.js ≤12 | ✅ Full | CJS bundle resolves via `require` automatically |
| Standalone HTML | ✅ Full | Link `dist/tokens.css`; no JavaScript needed |
| Tailwind v3 | ✅ Full | Import `tailwindPreset` |
| Tailwind v4 | ✅ Full | Import `dist/tailwind-v4.css` |
| Jest (default config) | ✅ Full | CJS bundle resolves automatically |
| Node.js (ESM or CJS) | ✅ Full | Both module formats shipped |
| SSR / edge runtimes | ✅ Safe | `injectCssVars` is a no-op outside the browser |

---

## Installation

This package is published to the internal Azure Artifacts registry. Add the following to your project's `.npmrc` before installing:

```
@kodez:registry=https://pkgs.dev.azure.com/kodez/kodez-connect/_packaging/kodez-connect-packages/npm/registry/
always-auth=true
```

Then install:

```sh
npm install @kodez/design-tokens
```

Tailwind integration is optional — only install `tailwindcss` if you use it:

```sh
npm install tailwindcss   # only needed for Tailwind preset / v4 CSS
```

---

## How it works

> All CSS custom properties use the `--kz-` namespace prefix (e.g. `--kz-surface-0`, `--kz-brand-primary`). This prevents collisions with other CSS variable libraries in your project.

```mermaid
flowchart TD
    A["tokens.ts\nlightTokens / darkTokens"] --> B["getCssVars()\nReturns { '--token': value }"]
    A --> C["getCssString()\nReturns CSS rule string (SSR-safe)"]
    A --> D["injectCssVars()\nSets CSS vars on :root (browser only)"]
    A --> E["tailwindPreset\nMaps tokens → Tailwind color keys"]

    C --> F["<style> tag injection\nfor Server Components"]
    D --> G[":root CSS custom properties\n--kz-surface-0, --kz-brand-primary, etc."]
    B --> G
    E --> H["tailwind.config.js\npresets: [tailwindPreset]"]

    G --> I["CSS / inline styles\nvar(--kz-surface-1)"]
    H --> J["Tailwind utility classes\nbg-surface-1, text-primary, etc."]
```

---

## Quick Start

**Option A — JavaScript injection (React, Vue, Vite)**

```ts
import { injectCssVars, lightTokens } from '@kodez/design-tokens';
injectCssVars(lightTokens);  // injects all tokens as :root CSS variables
```

**Option B — Static CSS (no JavaScript required)**

```html
<link rel="stylesheet" href="node_modules/@kodez/design-tokens/dist/tokens.css" />
```

**Option C — SSR / Next.js App Router**

```tsx
import { getCssString, lightTokens, darkTokens } from '@kodez/design-tokens';
const css = getCssString(lightTokens, ':root') + getCssString(darkTokens, '.dark');
return <style dangerouslySetInnerHTML={{ __html: css }} />;
```

---

## React

### Vite / CRA — inject at app root

```tsx
// main.tsx
import { injectCssVars, lightTokens } from '@kodez/design-tokens';
injectCssVars(lightTokens);
```

### Theme switching

```tsx
import { useEffect, useState } from 'react';
import { injectCssVars, lightTokens, darkTokens } from '@kodez/design-tokens';

function useTheme() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    injectCssVars(dark ? darkTokens : lightTokens);
    document.documentElement.classList.toggle('dark', dark);
  }, [dark]);

  return { dark, setDark };
}
```

---

## Next.js

### App Router (React Server Components)

`injectCssVars` requires `document` and cannot run in Server Components. Use `getCssString` to render tokens as a `<style>` tag — works in any RSC including `app/layout.tsx`:

```tsx
// app/layout.tsx
import { getCssString, lightTokens, darkTokens } from '@kodez/design-tokens';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const lightCss = getCssString(lightTokens, ':root');
  const darkCss  = getCssString(darkTokens,  '.dark');

  return (
    <html lang="en">
      <head>
        <style dangerouslySetInnerHTML={{ __html: lightCss + darkCss }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
```

Toggle dark mode from a Client Component:

```tsx
'use client';
function DarkModeToggle() {
  return (
    <button onClick={() => document.documentElement.classList.toggle('dark')}>
      Toggle theme
    </button>
  );
}
```

### Pages Router (`_app.tsx`)

```tsx
// pages/_app.tsx
import { useEffect } from 'react';
import { injectCssVars, lightTokens } from '@kodez/design-tokens';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    injectCssVars(lightTokens);
  }, []);

  return <Component {...pageProps} />;
}
```

### next.config.js — no extra config needed

The package ships a CJS bundle (`dist/index.cjs`) resolved via the `require` export condition. No `transpilePackages` or `experimental.esmExternals` required.

---

## Standalone HTML

### Option A — Link the static CSS file

No JavaScript required. Includes light (`:root`), dark (`.dark` class), and OS-preference (`@media (prefers-color-scheme: dark)`) blocks:

```html
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="node_modules/@kodez/design-tokens/dist/tokens.css" />
  </head>
  <body style="background: var(--kz-surface-0); color: var(--kz-text-primary);">
    Hello, design tokens!
  </body>
</html>
```

Toggle dark mode with a class:

```js
document.documentElement.classList.toggle('dark');
```

### Option B — ESM script tag

```html
<script type="module">
  import { injectCssVars, lightTokens } from './node_modules/@kodez/design-tokens/dist/index.js';
  injectCssVars(lightTokens);
</script>
```

---

## Tailwind v3

Add the preset to `tailwind.config.js`:

```js
import { tailwindPreset } from '@kodez/design-tokens';

export default {
  presets: [tailwindPreset],
  content: ['./src/**/*.{ts,tsx,html}'],
  darkMode: 'class',                    // app decides
  corePlugins: { preflight: false },    // false for MUI apps
};
```

Available utility classes:

```
// Surfaces
bg-surface-0  bg-surface-1  bg-surface-2  bg-surface-3  bg-surface-4  bg-surface-5
bg-surface-kpi  (dark only — reduced-emphasis KPI surface)

// Text (generated via theme.extend.textColor — no double prefix)
text-primary  text-secondary  text-tertiary  text-accent  text-disabled  text-inverse
text-brand    (brand-colored text — mode-adaptive)
text-error    text-success    text-warning    text-info

// Strokes (generated via theme.extend.borderColor — no double prefix)
border-subtle  border-default  border-strong  border-hover  border-interactive

// Brand
bg-brand-primary  bg-brand-hover  bg-brand-active
bg-brand-bg-subtle  bg-brand-border  bg-brand-border-subtle
bg-brand-gradient-1  bg-brand-gradient-2

// Semantic — backgrounds and borders
bg-error-bg-solid    bg-error-bg-subtle    bg-error-border    bg-error-border-subtle
bg-success-bg-solid  bg-success-bg-subtle  bg-success-border  bg-success-border-subtle
bg-warning-bg-solid  bg-warning-bg-subtle  bg-warning-border  bg-warning-border-subtle
bg-info-bg-solid     bg-info-bg-subtle     bg-info-border     bg-info-border-subtle

// Typography
font-sans  font-mono   (Inter / JetBrains Mono)
```

---

## Tailwind v4

Import the provided CSS file after `@import "tailwindcss"`:

```css
/* app/globals.css or your CSS entry point */
@import "tailwindcss";
@import "@kodez/design-tokens/dist/tailwind-v4.css";
```

No `tailwind.config.js` needed. The file handles:
- Token injection (`:root` light, `.dark` class, OS dark mode via `@media`)
- `@theme inline` mapping for Tailwind utility generation

Available utilities:

```
bg-surface-0  bg-surface-1  bg-surface-2  bg-surface-3  bg-surface-4  bg-surface-5  bg-surface-kpi
bg-brand-primary  bg-brand-hover  bg-brand-active  bg-brand-bg-subtle
bg-error-bg-solid  bg-error-bg-subtle  bg-success-bg-solid  bg-success-bg-subtle
bg-warning-bg-solid  bg-warning-bg-subtle  bg-info-bg-solid  bg-info-bg-subtle
```

**Text and border colors in v4:** Tailwind v4 generates utility names from `--color-*` variable names, so `--color-text-primary` produces `text-text-primary`. Use arbitrary values for cleaner markup:

```html
<!-- Recommended: arbitrary value -->
<p class="text-[var(--kz-text-primary)]">Body text</p>

<!-- Generated utility (works but verbose) -->
<p class="text-text-primary">Body text</p>
```

---

## API Reference

### `injectCssVars(tokens, element?)`

Injects token values as CSS custom properties. Defaults to `document.documentElement` (`:root`).
**SSR-safe** — silently no-ops when `document` is not defined.

```ts
injectCssVars(lightTokens);
injectCssVars(darkTokens, document.querySelector('#scoped-root')!);
```

### `getCssString(tokens, selector?)`

Returns a CSS rule block string for `<style>` tag injection in SSR contexts.
Default selector is `':root'`.

```ts
const css = getCssString(lightTokens, ':root');
// ':root {\n  --kz-surface-0: #FFFFFF;\n  ...\n}\n'
```

### `getCssVars(tokens)`

Returns a `Record<string, string>` with `--` prefixed keys. Useful for spreading into CSS-in-JS or MUI `sx` props.

```ts
const vars = getCssVars(lightTokens);
// { '--kz-surface-0': '#FFFFFF', '--kz-brand-primary': '#FF7F56', ... }
```

### `lightTokens` / `darkTokens`

Plain `Record<string, string>` objects with all token values for each theme.

### `tailwindPreset`

Tailwind v3 preset. Pass to `presets: [tailwindPreset]` in `tailwind.config.js`.

### `ThemeMode`

TypeScript type: `'light' | 'dark'`.

---

## Color Palette

Color swatches shown for solid hex values; `rgba` tokens are listed as values only.

### Surfaces

<!-- kz:autogen:start:surfaces -->
| Token | Light | | Dark | |
|---|---|---|---|---|
| `--surface-0` | ![#FFFFFF](https://img.shields.io/badge/-%23FFFFFF-FFFFFF?style=flat-square) | `#FFFFFF` | ![#0C0A0B](https://img.shields.io/badge/-%230C0A0B-0C0A0B?style=flat-square) | `#0C0A0B` |
| `--surface-1` | ![#F9F8F7](https://img.shields.io/badge/-%23F9F8F7-F9F8F7?style=flat-square) | `#F9F8F7` | ![#131112](https://img.shields.io/badge/-%23131112-131112?style=flat-square) | `#131112` |
| `--surface-2` | ![#F5F4F2](https://img.shields.io/badge/-%23F5F4F2-F5F4F2?style=flat-square) | `#F5F4F2` | ![#1C191A](https://img.shields.io/badge/-%231C191A-1C191A?style=flat-square) | `#1C191A` |
| `--surface-3` | ![#EDEBE8](https://img.shields.io/badge/-%23EDEBE8-EDEBE8?style=flat-square) | `#EDEBE8` | ![#231F20](https://img.shields.io/badge/-%23231F20-231F20?style=flat-square) | `#231F20` |
| `--surface-4` | ![#E4E1DE](https://img.shields.io/badge/-%23E4E1DE-E4E1DE?style=flat-square) | `#E4E1DE` | ![#2B2728](https://img.shields.io/badge/-%232B2728-2B2728?style=flat-square) | `#2B2728` |
| `--surface-5` | ![#DAD7D3](https://img.shields.io/badge/-%23DAD7D3-DAD7D3?style=flat-square) | `#DAD7D3` | ![#342F31](https://img.shields.io/badge/-%23342F31-342F31?style=flat-square) | `#342F31` |
| `--surface-kpi` | — | — | — | `rgba(28,25,26,0.72)` |
<!-- kz:autogen:end:surfaces -->

### Text

<!-- kz:autogen:start:text -->
| Token | Light | | Dark | |
|---|---|---|---|---|
| `--text-primary` | ![#231F20](https://img.shields.io/badge/-%23231F20-231F20?style=flat-square) | `#231F20` | ![#F5F4F2](https://img.shields.io/badge/-%23F5F4F2-F5F4F2?style=flat-square) | `#F5F4F2` |
| `--text-secondary` | ![#4A4546](https://img.shields.io/badge/-%234A4546-4A4546?style=flat-square) | `#4A4546` | ![#BDB7B8](https://img.shields.io/badge/-%23BDB7B8-BDB7B8?style=flat-square) | `#BDB7B8` |
| `--text-tertiary` | ![#6F6B6C](https://img.shields.io/badge/-%236F6B6C-6F6B6C?style=flat-square) | `#6F6B6C` | ![#837D7E](https://img.shields.io/badge/-%23837D7E-837D7E?style=flat-square) | `#837D7E` |
| `--text-accent` | ![#5153F6](https://img.shields.io/badge/-%235153F6-5153F6?style=flat-square) | `#5153F6` | ![#7475FF](https://img.shields.io/badge/-%237475FF-7475FF?style=flat-square) | `#7475FF` |
| `--text-disabled` | ![#A6A2A3](https://img.shields.io/badge/-%23A6A2A3-A6A2A3?style=flat-square) | `#A6A2A3` | ![#5A5556](https://img.shields.io/badge/-%235A5556-5A5556?style=flat-square) | `#5A5556` |
| `--text-inverse` | ![#FFFFFF](https://img.shields.io/badge/-%23FFFFFF-FFFFFF?style=flat-square) | `#FFFFFF` | ![#231F20](https://img.shields.io/badge/-%23231F20-231F20?style=flat-square) | `#231F20` |
<!-- kz:autogen:end:text -->

### Strokes

<!-- kz:autogen:start:strokes -->
| Token | Light | | Dark | |
|---|---|---|---|---|
| `--stroke-subtle` | ![#EDEBE8](https://img.shields.io/badge/-%23EDEBE8-EDEBE8?style=flat-square) | `#EDEBE8` | ![#2B2728](https://img.shields.io/badge/-%232B2728-2B2728?style=flat-square) | `#2B2728` |
| `--stroke-default` | ![#D5D2CE](https://img.shields.io/badge/-%23D5D2CE-D5D2CE?style=flat-square) | `#D5D2CE` | ![#3D3839](https://img.shields.io/badge/-%233D3839-3D3839?style=flat-square) | `#3D3839` |
| `--stroke-strong` | ![#B9B5B2](https://img.shields.io/badge/-%23B9B5B2-B9B5B2?style=flat-square) | `#B9B5B2` | ![#524D4F](https://img.shields.io/badge/-%23524D4F-524D4F?style=flat-square) | `#524D4F` |
| `--stroke-hover` | ![#9E9A97](https://img.shields.io/badge/-%239E9A97-9E9A97?style=flat-square) | `#9E9A97` | ![#6E6869](https://img.shields.io/badge/-%236E6869-6E6869?style=flat-square) | `#6E6869` |
| `--stroke-interactive` | ![#FF7F56](https://img.shields.io/badge/-%23FF7F56-FF7F56?style=flat-square) | `#FF7F56` | ![#FF7F56](https://img.shields.io/badge/-%23FF7F56-FF7F56?style=flat-square) | `#FF7F56` |
<!-- kz:autogen:end:strokes -->

### Brand

<!-- kz:autogen:start:brand -->
| Token | Light | | Dark | |
|---|---|---|---|---|
| `--brand-primary` | ![#FF7F56](https://img.shields.io/badge/-%23FF7F56-FF7F56?style=flat-square) | `#FF7F56` | ![#FF7F56](https://img.shields.io/badge/-%23FF7F56-FF7F56?style=flat-square) | `#FF7F56` |
| `--brand-hover` | ![#CB6241](https://img.shields.io/badge/-%23CB6241-CB6241?style=flat-square) | `#CB6241` | ![#F89474](https://img.shields.io/badge/-%23F89474-F89474?style=flat-square) | `#F89474` |
| `--brand-active` | ![#743622](https://img.shields.io/badge/-%23743622-743622?style=flat-square) | `#743622` | ![#FAAF97](https://img.shields.io/badge/-%23FAAF97-FAAF97?style=flat-square) | `#FAAF97` |
| `--brand-bg-subtle` | — | `rgba(255,127,86,0.12)` | — | `rgba(255,127,86,0.16)` |
| `--brand-border` | ![#743622](https://img.shields.io/badge/-%23743622-743622?style=flat-square) | `#743622` | ![#FF7F56](https://img.shields.io/badge/-%23FF7F56-FF7F56?style=flat-square) | `#FF7F56` |
| `--brand-border-subtle` | — | `rgba(255,127,86,0.40)` | — | `rgba(255,127,86,0.40)` |
| `--brand-text` | ![#A04C31](https://img.shields.io/badge/-%23A04C31-A04C31?style=flat-square) | `#A04C31` | ![#FF7F56](https://img.shields.io/badge/-%23FF7F56-FF7F56?style=flat-square) | `#FF7F56` |
| `--brand-gradient-1` | ![#F89474](https://img.shields.io/badge/-%23F89474-F89474?style=flat-square) | `#F89474` | ![#F89474](https://img.shields.io/badge/-%23F89474-F89474?style=flat-square) | `#F89474` |
| `--brand-gradient-2` | ![#F0673D](https://img.shields.io/badge/-%23F0673D-F0673D?style=flat-square) | `#F0673D` | ![#F0673D](https://img.shields.io/badge/-%23F0673D-F0673D?style=flat-square) | `#F0673D` |
<!-- kz:autogen:end:brand -->

### Semantic — Error

<!-- kz:autogen:start:semantic-error -->
| Token | Light | | Dark | |
|---|---|---|---|---|
| `--error-bg-solid` | ![#DC2626](https://img.shields.io/badge/-%23DC2626-DC2626?style=flat-square) | `#DC2626` | ![#F46969](https://img.shields.io/badge/-%23F46969-F46969?style=flat-square) | `#F46969` |
| `--error-bg-subtle` | — | `rgba(220,38,38,0.08)` | — | `rgba(244,105,105,0.16)` |
| `--error-border` | ![#B91C1C](https://img.shields.io/badge/-%23B91C1C-B91C1C?style=flat-square) | `#B91C1C` | ![#F59E0B](https://img.shields.io/badge/-%23F59E0B-F59E0B?style=flat-square) | `#F59E0B` |
| `--error-border-subtle` | — | `rgba(220,38,38,0.40)` | — | `rgba(244,105,105,0.40)` |
| `--error-text` | ![#7F1D1D](https://img.shields.io/badge/-%237F1D1D-7F1D1D?style=flat-square) | `#7F1D1D` | ![#F98585](https://img.shields.io/badge/-%23F98585-F98585?style=flat-square) | `#F98585` |
<!-- kz:autogen:end:semantic-error -->

### Semantic — Success

<!-- kz:autogen:start:semantic-success -->
| Token | Light | | Dark | |
|---|---|---|---|---|
| `--success-bg-solid` | ![#16A34A](https://img.shields.io/badge/-%2316A34A-16A34A?style=flat-square) | `#16A34A` | ![#22C55E](https://img.shields.io/badge/-%2322C55E-22C55E?style=flat-square) | `#22C55E` |
| `--success-bg-subtle` | — | `rgba(22,163,74,0.08)` | — | `rgba(34,197,94,0.16)` |
| `--success-border` | ![#15803D](https://img.shields.io/badge/-%2315803D-15803D?style=flat-square) | `#15803D` | ![#005C39](https://img.shields.io/badge/-%23005C39-005C39?style=flat-square) | `#005C39` |
| `--success-border-subtle` | — | `rgba(22,163,74,0.40)` | — | `rgba(34,197,94,0.40)` |
| `--success-text` | ![#14532D](https://img.shields.io/badge/-%2314532D-14532D?style=flat-square) | `#14532D` | ![#4ADE80](https://img.shields.io/badge/-%234ADE80-4ADE80?style=flat-square) | `#4ADE80` |
<!-- kz:autogen:end:semantic-success -->

### Semantic — Warning

<!-- kz:autogen:start:semantic-warning -->
| Token | Light | | Dark | |
|---|---|---|---|---|
| `--warning-bg-solid` | ![#D97706](https://img.shields.io/badge/-%23D97706-D97706?style=flat-square) | `#D97706` | ![#F59E0B](https://img.shields.io/badge/-%23F59E0B-F59E0B?style=flat-square) | `#F59E0B` |
| `--warning-bg-subtle` | — | `rgba(217,119,6,0.08)` | — | `rgba(245,158,11,0.16)` |
| `--warning-border` | ![#B45309](https://img.shields.io/badge/-%23B45309-B45309?style=flat-square) | `#B45309` | ![#71491E](https://img.shields.io/badge/-%2371491E-71491E?style=flat-square) | `#71491E` |
| `--warning-border-subtle` | — | `rgba(217,119,6,0.40)` | — | `rgba(245,158,11,0.40)` |
| `--warning-text` | ![#78350F](https://img.shields.io/badge/-%2378350F-78350F?style=flat-square) | `#78350F` | ![#FBBF24](https://img.shields.io/badge/-%23FBBF24-FBBF24?style=flat-square) | `#FBBF24` |
<!-- kz:autogen:end:semantic-warning -->

### Semantic — Info

<!-- kz:autogen:start:semantic-info -->
| Token | Light | | Dark | |
|---|---|---|---|---|
| `--info-bg-solid` | ![#2563EB](https://img.shields.io/badge/-%232563EB-2563EB?style=flat-square) | `#2563EB` | ![#3B82F6](https://img.shields.io/badge/-%233B82F6-3B82F6?style=flat-square) | `#3B82F6` |
| `--info-bg-subtle` | — | `rgba(37,99,235,0.08)` | — | `rgba(59,130,246,0.16)` |
| `--info-border` | ![#1D4ED8](https://img.shields.io/badge/-%231D4ED8-1D4ED8?style=flat-square) | `#1D4ED8` | ![#15407B](https://img.shields.io/badge/-%2315407B-15407B?style=flat-square) | `#15407B` |
| `--info-border-subtle` | — | `rgba(37,99,235,0.40)` | — | `rgba(59,130,246,0.40)` |
| `--info-text` | ![#1E3A8A](https://img.shields.io/badge/-%231E3A8A-1E3A8A?style=flat-square) | `#1E3A8A` | ![#6AAAFA](https://img.shields.io/badge/-%236AAAFA-6AAAFA?style=flat-square) | `#6AAAFA` |
<!-- kz:autogen:end:semantic-info -->

---

## Token Reference

| Category | Tokens |
|---|---|
| Surfaces | `surface-0` … `surface-5` (page → elevated layers), `surface-kpi` (dark only) |
| Text | `text-primary`, `text-secondary`, `text-tertiary`, `text-accent`, `text-disabled`, `text-inverse` |
| Strokes | `stroke-subtle`, `stroke-default`, `stroke-strong`, `stroke-hover`, `stroke-interactive` |
| Brand | `brand-primary`, `brand-hover`, `brand-active`, `brand-bg-subtle`, `brand-border`, `brand-border-subtle`, `brand-text`, `brand-gradient-1`, `brand-gradient-2` |
| Semantic | `{error/success/warning/info}-bg-solid`, `{error/success/warning/info}-bg-subtle`, `{error/success/warning/info}-border`, `{error/success/warning/info}-border-subtle`, `{error/success/warning/info}-text` |

Example usage:

```css
.card {
  background: var(--kz-surface-2);
  border: 1px solid var(--kz-stroke-default);
  color: var(--kz-text-primary);
}

.card:hover {
  border-color: var(--kz-stroke-hover);
}

.btn-primary {
  background: var(--kz-brand-primary);
  color: var(--kz-text-inverse);
}

.btn-primary:hover {
  background: var(--kz-brand-hover);
}

.btn-primary:active {
  background: var(--kz-brand-active);
}

/* Brand-colored link text (mode-adaptive) */
.link {
  color: var(--kz-brand-text);
}

/* Error state */
.field--error {
  background: var(--kz-error-bg-subtle);
  border-color: var(--kz-error-border);
  color: var(--kz-error-text);
}
```

---

## Font Loading

The Tailwind preset and v4 CSS register Inter and JetBrains Mono but do not load the font files. Add your preferred loading method:

**HTML:**
```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=JetBrains+Mono&display=swap" rel="stylesheet" />
```

**Next.js (`next/font`):**
```ts
import { Inter, JetBrains_Mono } from 'next/font/google';
export const inter = Inter({ subsets: ['latin'] });
export const mono  = JetBrains_Mono({ subsets: ['latin'] });
```

---

## Development

```sh
npm run build      # tsup (ESM + CJS + .d.ts) then generate dist/tokens.css and dist/tailwind-v4.css
npm run dev        # tsup --watch
npm run typecheck  # tsc --noEmit
```

Build outputs:

| File | Purpose |
|---|---|
| `dist/index.js` | ESM bundle |
| `dist/index.cjs` | CommonJS bundle |
| `dist/index.d.ts` | TypeScript declarations (ESM) |
| `dist/index.d.cts` | TypeScript declarations (CJS) |
| `dist/tokens.css` | Standalone CSS for HTML projects |
| `dist/tailwind-v4.css` | Tailwind v4 integration CSS |

---

## Migration from v1.5.x to v2.0

### Token renames

| v1.5.x token | v2.0 token |
|---|---|
| `--text-muted` | `--text-tertiary` |
| `--border-subtle` | `--stroke-subtle` |
| `--border-default` | `--stroke-default` |
| `--border-strong` | `--stroke-strong` |
| `--border-hover` | `--stroke-hover` |
| `--border-interactive` | `--stroke-interactive` |
| `--color-danger` | `--error-bg-solid` (badge bg) / `--error-text` (text) |
| `--color-danger-bg` | `--error-bg-subtle` |
| `--color-danger-border` | `--error-border` |
| `--color-success` | `--success-bg-solid` / `--success-text` |
| `--color-success-bg` | `--success-bg-subtle` |
| `--color-success-border` | `--success-border` |
| `--color-warning` | `--warning-bg-solid` / `--warning-text` |
| `--color-warning-bg` | `--warning-bg-subtle` |
| `--color-info` | `--info-bg-solid` / `--info-text` |
| `--color-info-bg` | `--info-bg-subtle` |
| `--brand-dim` / `--brand-glow` | `--brand-bg-subtle` |
| `--brand-text-light` | `--brand-text` (now mode-adaptive) |

### Tailwind class renames

| v1.5.x class | v2.0 class |
|---|---|
| `text-muted` | `text-tertiary` |
| `border-subtle` | `border-subtle` _(value now from `--stroke-subtle`)_ |
| `border-default` | `border-default` _(value now from `--stroke-default`)_ |
| `border-interactive` | `border-interactive` _(value now from `--stroke-interactive`)_ |
| `bg-danger` | `bg-error-bg-solid` |
| `bg-danger-bg` | `bg-error-bg-subtle` |
| `bg-success` | `bg-success-bg-solid` |
| `bg-success-bg` | `bg-success-bg-subtle` |
| `bg-warning` | `bg-warning-bg-solid` |
| `bg-info` | `bg-info-bg-solid` |
| `bg-brand` | `bg-brand-primary` |
| `bg-brand-dim` / `bg-brand-glow` | `bg-brand-bg-subtle` |

### Tokens removed (no replacement in v2)

| Removed token | Notes |
|---|---|
| `--accent`, `--accent-hover`, `--accent-text-*`, `--accent-dim`, `--accent-border`, `--accent-glow`, `--focus-ring`, `--accent-soft-*` | Accent system removed. Use `--text-accent` for links, `--stroke-interactive` for focus rings. |
| `--success-soft-12`, `--success-soft-14`, `--warning-soft-16`, `--info-soft-12`, `--info-soft-14` | Use `--*-bg-subtle` tokens instead. |
| `--page-gradient`, `--page-gradient-muted`, `--portal-hero-bg` | Define app-specific gradients locally. |

### New tokens in v2

| New token | Notes |
|---|---|
| `--text-accent` | Mode-adaptive link/accent text color |
| `--text-disabled` | Disabled UI element text |
| `--brand-active` | Pressed/active state for brand elements |
| `--brand-border`, `--brand-border-subtle` | Brand-tinted borders |
| `--brand-gradient-1`, `--brand-gradient-2` | Brand gradient stops |
| `--surface-kpi` | Reduced-opacity surface for KPI/metric cards (dark only) |
| `--stroke-strong` | High-emphasis separator |
| `--*-border-subtle` | Secondary-emphasis semantic borders |
| `--*-text` | Semantic foreground text colors |
