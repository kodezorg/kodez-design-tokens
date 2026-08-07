// ── Types ─────────────────────────────────────────────────────────────────────
export type { ThemeMode, TokenName, LightTokenName, DarkTokenName } from './tokens.js';
export type { KzCssVar, KzCssVarRef } from './css-vars.js';

// ── Core API ──────────────────────────────────────────────────────────────────
// Raw token objects are intentionally NOT exported.
// All token access goes through mode-based functions that output --kz-* CSS vars.
export {
  KZ_PREFIX,
  getCssVar,
  toCssVarName,
  getCssVars,
  getCssString,
  injectCssVars,
} from './css-vars.js';

// ── Tailwind integration ──────────────────────────────────────────────────────
export { default as tailwindPreset } from './tailwind-preset.js';
