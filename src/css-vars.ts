/**
 * Returns a flat object of CSS custom property entries derived from a token map.
 * Keys are prefixed with `--` so the result can be spread directly into any
 * style injection mechanism (MUI CssBaseline, CSS-in-JS, inline style, etc.).
 *
 * @example
 * const vars = getCssVars(lightTokens);
 * // { '--surface-0': '#F5F7FA', '--accent': '#5153F6', ... }
 */
export function getCssVars(tokens: Record<string, string>): Record<string, string> {
  return Object.fromEntries(
    Object.entries(tokens).map(([key, value]) => [`--${key}`, value]),
  );
}

/**
 * Serialises token values into a CSS rule block, suitable for injecting into a
 * `<style>` tag in SSR contexts (Next.js Server Components, `getServerSideProps`, etc.).
 *
 * @example
 * // app/layout.tsx — Server Component, no `document` needed
 * const css = getCssString(lightTokens, ':root');
 * return <style dangerouslySetInnerHTML={{ __html: css }} />;
 *
 * // Dynamic dark mode (inject both and toggle .dark class on <html>)
 * const light = getCssString(lightTokens, ':root');
 * const dark  = getCssString(darkTokens,  '.dark');
 * return <style dangerouslySetInnerHTML={{ __html: light + dark }} />;
 */
export function getCssString(
  tokens: Record<string, string>,
  selector = ':root',
): string {
  const declarations = Object.entries(tokens)
    .map(([key, value]) => `  --${key}: ${value};`)
    .join('\n');
  return `${selector} {\n${declarations}\n}\n`;
}

/**
 * Injects token values as CSS custom properties onto a DOM element.
 * Defaults to `document.documentElement` (i.e. `:root`).
 *
 * Safe to import in SSR environments — the function is a no-op when
 * `document` is not available. For SSR token injection use `getCssString`.
 *
 * @example
 * // React effect-based theme switching
 * useEffect(() => {
 *   injectCssVars(isDark ? darkTokens : lightTokens);
 * }, [isDark]);
 */
export function injectCssVars(
  tokens: Record<string, string>,
  element?: HTMLElement,
): void {
  if (typeof document === 'undefined') return;
  const target = element ?? document.documentElement;
  for (const [key, value] of Object.entries(tokens)) {
    target.style.setProperty(`--${key}`, value);
  }
}
