/**
 * Returns a flat object of CSS custom property entries derived from a token map.
 * Keys are prefixed with `--` so the result can be spread directly into any
 * style injection mechanism (MUI CssBaseline, CSS-in-JS, inline style, etc.).
 *
 * @example
 * const vars = getCssVars(lightTokens);
 * // { '--surface-0': '#F5F7FA', '--accent': '#5153F6', ... }
 */
export declare function getCssVars(tokens: Record<string, string>): Record<string, string>;
/**
 * Injects token values as CSS custom properties onto a DOM element.
 * Defaults to `document.documentElement` (i.e. `:root`).
 *
 * Framework-agnostic — works with React, Vue, Svelte, vanilla JS, etc.
 *
 * @example
 * injectCssVars(isDark ? darkTokens : lightTokens);
 */
export declare function injectCssVars(tokens: Record<string, string>, element?: HTMLElement): void;
