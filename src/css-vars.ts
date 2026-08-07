import { lightTokens, darkTokens } from './tokens.js';
import type { TokenName, ThemeMode } from './tokens.js';

/** The namespace prefix applied to every CSS custom property. */
export const KZ_PREFIX = 'kz-' as const;

/**
 * A valid CSS custom property name for a Kodez token.
 * @example '--kz-surface-0' | '--kz-brand-primary' | ...
 */
export type KzCssVar = `--${typeof KZ_PREFIX}${TokenName}`;

/**
 * A valid CSS var() reference for a Kodez token.
 * @example 'var(--kz-surface-0)' | 'var(--kz-brand-primary)' | ...
 */
export type KzCssVarRef = `var(${KzCssVar})`;

function tokensForMode(mode: ThemeMode): Record<string, string> {
  return mode === 'dark' ? darkTokens : lightTokens;
}

/**
 * Returns a strongly-typed CSS var() reference for a design token.
 * This is the primary way to reference a token in JSX style props or CSS-in-JS.
 * @example getCssVar('surface-0') // 'var(--kz-surface-0)'
 */
export function getCssVar(name: TokenName): KzCssVarRef {
  return `var(--${KZ_PREFIX}${name})`;
}

/**
 * Returns the CSS custom property name for a token — without var().
 * Use this when setting a property directly via style.setProperty().
 * @example toCssVarName('surface-0') // '--kz-surface-0'
 */
export function toCssVarName(name: TokenName): KzCssVar {
  return `--${KZ_PREFIX}${name}`;
}

/**
 * Returns a flat object of `--kz-*` CSS custom property declarations for a theme mode.
 * Keys are always prefixed with `--kz-`. Use this to spread into CSS-in-JS or MUI CssBaseline.
 *
 * @example
 * const vars = getCssVars('light');
 * // { '--kz-surface-0': '#FEFEFE', '--kz-brand-primary': '#FF7F56', ... }
 */
export function getCssVars(mode: ThemeMode): Record<KzCssVar, string> {
  return Object.fromEntries(
    Object.entries(tokensForMode(mode)).map(([key, value]) => [`--${KZ_PREFIX}${key}`, value]),
  ) as Record<KzCssVar, string>;
}

/**
 * Serialises a theme mode into a CSS rule block, suitable for a `<style>` tag in SSR.
 * All declarations use `--kz-` prefixed property names.
 *
 * @example
 * // app/layout.tsx (Next.js App Router)
 * const css = getCssString('light', ':root') + getCssString('dark', '.dark');
 * return <style dangerouslySetInnerHTML={{ __html: css }} />;
 */
export function getCssString(mode: ThemeMode, selector = ':root'): string {
  const declarations = Object.entries(tokensForMode(mode))
    .map(([key, value]) => `  --${KZ_PREFIX}${key}: ${value};`)
    .join('\n');
  return `${selector} {\n${declarations}\n}\n`;
}

/**
 * Injects `--kz-*` CSS custom properties for a theme mode onto a DOM element.
 * Defaults to `document.documentElement` (i.e. `:root`).
 * SSR-safe — no-op when `document` is not defined.
 *
 * @example
 * useEffect(() => { injectCssVars(isDark ? 'dark' : 'light'); }, [isDark]);
 */
export function injectCssVars(mode: ThemeMode, element?: HTMLElement): void {
  if (typeof document === 'undefined') return;
  const target = element ?? document.documentElement;
  for (const [key, value] of Object.entries(tokensForMode(mode))) {
    target.style.setProperty(`--${KZ_PREFIX}${key}`, value);
  }
}
