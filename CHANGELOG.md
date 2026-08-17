# @kodez/design-tokens

## 1.9.1

### Patch Changes

- Add `shadow-card` token: `0 18px 36px rgba(0,0,0,0.08)` (light) / `0 18px 36px rgba(0,0,0,0.24)` (dark).

## 1.9.0

### Minor Changes

- Remove deprecated semantic tokens: all `info-*` tokens (`info-bg-solid`, `info-bg-subtle`, `info-border`, `info-border-subtle`, `info-text`), `text-accent`, and `glow-accent`. Add `overlay-backdrop` token to both light and dark modes.

## 1.8.0

### Minor Changes

- Cool Intensified dark theme — token corrections and brand palette export

  **Breaking**

  - Removed `brand-bg-subtle` token (orange wash on backgrounds). Replace with `surface-2` or `surface-3`.

  **New**

  - Added static `brandPalette` export: `brand-orange`, `brand-white`, `brand-offwhite`, `brand-grey`, `brand-lightblack`, `brand-black` — theme-invariant, no dark override.

  **Fixed (dark mode)**

  - Strokes updated to Cool Intensified (B ≈ 2× R/G): `stroke-subtle`, `stroke-default`, `stroke-strong`, `stroke-hover`
  - `text-tertiary` changed from `#837D7E` (warm, fails WCAG AA on S3–S5) to `#8C90A0` (cool-shifted, passes AA ≥ 4.9:1 on all surfaces)
  - `text-secondary` corrected to `#999999`
  - `error-border` corrected to `rgba(244,105,105,0.50)` (was copy-pasted from warning)
  - `success-text` and `warning-text` aligned to solid semantic colours
