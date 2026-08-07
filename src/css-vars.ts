import type { TokenName } from './tokens.js';

const KZ = 'kz-';

/**
 * Returns a strongly-typed CSS var reference for a design token.
 * @example getCssVar('surface-0') // 'var(--kz-surface-0)'
 */
export function getCssVar(name: TokenName): string {
  return `var(--${KZ}${name})`;
}

/**
 * Returns a flat object of CSS custom property entries derived from a token map.
 * Keys are prefixed with `--kz-` so the result can be spread directly into any
 * style injection mechanism (MUI CssBaseline, CSS-in-JS, inline style, etc.).
 *
 * @example
 * const vars = getCssVars(lightTokens);
 * // { '--kz-surface-0': '#FEFEFE', '--kz-brand-primary': '#FF7F56', ... }
 */
export function getCssVars(tokens: Record<string, string>): Record<string, string> {
  return Object.fromEntries(
    Object.entries(tokens).map(([key, value]) => [`--${KZ}${key}`, value]),
  );
}

/**
 * Serialises token values into a CSS rule block, suitable for injecting into a
 * `<style>` tag in SSR contexts.
 *
 * @example
 * const css = getCssString(lightTokens, ':root');
 * return <style dangerouslySetInnerHTML={{ __html: css }} />;
 */
export function getCssString(
  tokens: Record<string, string>,
  selector = ':root',
): string {
  const declarations = Object.entries(tokens)
    .map(([key, value]) => `  --${KZ}${key}: ${value};`)
    .join('\n');
  return `${selector} {\n${declarations}\n}\n`;
}

/**
 * Injects token values as CSS custom properties onto a DOM element.
 * Defaults to `document.documentElement` (i.e. `:root`).
 * SSR-safe — no-op when `document` is not defined.
 *
 * @example
 * useEffect(() => { injectCssVars(isDark ? darkTokens : lightTokens); }, [isDark]);
 */
export function injectCssVars(
  tokens: Record<string, string>,
  element?: HTMLElement,
): void {
  if (typeof document === 'undefined') return;
  const target = element ?? document.documentElement;
  for (const [key, value] of Object.entries(tokens)) {
    target.style.setProperty(`--${KZ}${key}`, value);
  }
}
