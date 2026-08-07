/**
 * Tailwind v3 preset — color and typography extensions only.
 *
 * Intentionally omits `darkMode` and `corePlugins.preflight` — those are
 * application-level decisions that vary by design system:
 *   - MUI apps typically set `preflight: false` and `darkMode: 'class'`
 *   - Non-MUI apps may want preflight enabled or a different dark strategy
 *
 * Text tokens live in `theme.extend.textColor` so `text-primary` works directly
 * (not the double-prefixed `text-text-primary`). Stroke tokens live in
 * `theme.extend.borderColor` for the same reason.
 *
 * Usage in tailwind.config.js:
 *   import { tailwindPreset } from '@kodez/design-tokens';
 *   export default {
 *     presets: [tailwindPreset],
 *     content: ['./src/**\/*.{ts,tsx}'],
 *     darkMode: 'class',                    // ← app decides
 *     corePlugins: { preflight: false },    // ← app decides (false for MUI apps)
 *   };
 *
 * For Tailwind v4 use dist/tailwind-v4.css instead.
 */
const tailwindPreset = {
  theme: {
    extend: {
      colors: {
        // ── Surfaces ─────────────────────────────────────────────────────────────
        'surface-0':             'var(--surface-0)',
        'surface-1':             'var(--surface-1)',
        'surface-2':             'var(--surface-2)',
        'surface-3':             'var(--surface-3)',
        'surface-4':             'var(--surface-4)',
        'surface-5':             'var(--surface-5)',
        'surface-kpi':           'var(--surface-kpi)',

        // ── Brand ────────────────────────────────────────────────────────────────
        'brand-primary':         'var(--brand-primary)',
        'brand-hover':           'var(--brand-hover)',
        'brand-active':          'var(--brand-active)',
        'brand-bg-subtle':       'var(--brand-bg-subtle)',
        'brand-border':          'var(--brand-border)',
        'brand-border-subtle':   'var(--brand-border-subtle)',
        'brand-gradient-1':      'var(--brand-gradient-1)',
        'brand-gradient-2':      'var(--brand-gradient-2)',

        // ── Semantic: error ───────────────────────────────────────────────────────
        'error-bg-solid':        'var(--error-bg-solid)',
        'error-bg-subtle':       'var(--error-bg-subtle)',
        'error-border':          'var(--error-border)',
        'error-border-subtle':   'var(--error-border-subtle)',

        // ── Semantic: success ─────────────────────────────────────────────────────
        'success-bg-solid':      'var(--success-bg-solid)',
        'success-bg-subtle':     'var(--success-bg-subtle)',
        'success-border':        'var(--success-border)',
        'success-border-subtle': 'var(--success-border-subtle)',

        // ── Semantic: warning ─────────────────────────────────────────────────────
        'warning-bg-solid':      'var(--warning-bg-solid)',
        'warning-bg-subtle':     'var(--warning-bg-subtle)',
        'warning-border':        'var(--warning-border)',
        'warning-border-subtle': 'var(--warning-border-subtle)',

        // ── Semantic: info ────────────────────────────────────────────────────────
        'info-bg-solid':         'var(--info-bg-solid)',
        'info-bg-subtle':        'var(--info-bg-subtle)',
        'info-border':           'var(--info-border)',
        'info-border-subtle':    'var(--info-border-subtle)',
      },

      // Text tokens in their own section → generates text-primary, not text-text-primary
      textColor: {
        primary:   'var(--text-primary)',
        secondary: 'var(--text-secondary)',
        tertiary:  'var(--text-tertiary)',
        accent:    'var(--text-accent)',
        disabled:  'var(--text-disabled)',
        inverse:   'var(--text-inverse)',
        brand:     'var(--brand-text)',
        error:     'var(--error-text)',
        success:   'var(--success-text)',
        warning:   'var(--warning-text)',
        info:      'var(--info-text)',
      },

      // Stroke tokens in their own section → generates border-subtle, not border-border-subtle
      borderColor: {
        subtle:      'var(--stroke-subtle)',
        default:     'var(--stroke-default)',
        strong:      'var(--stroke-strong)',
        hover:       'var(--stroke-hover)',
        interactive: 'var(--stroke-interactive)',
      },

      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
    },
  },
};

export default tailwindPreset;
