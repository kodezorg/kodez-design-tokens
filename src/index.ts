// ── Core (framework-agnostic) ─────────────────────────────────────────────────
export { lightTokens, darkTokens } from './tokens.js';
export type { ThemeMode, TokenName, LightTokenName, DarkTokenName } from './tokens.js';
export { getCssVars, getCssString, injectCssVars, getCssVar } from './css-vars.js';

// ── Tailwind integration ──────────────────────────────────────────────────────
export { default as tailwindPreset } from './tailwind-preset.js';
