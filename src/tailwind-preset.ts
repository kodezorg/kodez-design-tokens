/**
 * Tailwind v3 preset — color and typography extensions only.
 *
 * Intentionally omits `darkMode` and `corePlugins.preflight` — those are
 * application-level decisions that vary by design system.
 *
 * Usage in tailwind.config.js:
 *   import { tailwindPreset } from '@kodez/design-tokens';
 *   export default {
 *     presets: [tailwindPreset],
 *     content: ['./src/**\/*.{ts,tsx}'],
 *     darkMode: 'class',
 *     corePlugins: { preflight: false },
 *   };
 *
 * For Tailwind v4 use dist/tailwind-v4.css instead.
 */
const tailwindPreset = {
  theme: {
    extend: {
      colors: {
        // ── Surfaces ─────────────────────────────────────────────────────────────
        'surface-0':             'var(--kz-surface-0)',
        'surface-1':             'var(--kz-surface-1)',
        'surface-2':             'var(--kz-surface-2)',
        'surface-3':             'var(--kz-surface-3)',
        'surface-4':             'var(--kz-surface-4)',
        'surface-5':             'var(--kz-surface-5)',
        'surface-kpi':           'var(--kz-surface-kpi)',

        // ── Brand ────────────────────────────────────────────────────────────────
        'brand-primary':         'var(--kz-brand-primary)',
        'brand-hover':           'var(--kz-brand-hover)',
        'brand-active':          'var(--kz-brand-active)',
        'brand-bg-subtle':       'var(--kz-brand-bg-subtle)',
        'brand-border':          'var(--kz-brand-border)',
        'brand-border-subtle':   'var(--kz-brand-border-subtle)',
        'brand-gradient-1':      'var(--kz-brand-gradient-1)',
        'brand-gradient-2':      'var(--kz-brand-gradient-2)',

        // ── Semantic: error ───────────────────────────────────────────────────────
        'error-bg-solid':        'var(--kz-error-bg-solid)',
        'error-bg-subtle':       'var(--kz-error-bg-subtle)',
        'error-border':          'var(--kz-error-border)',
        'error-border-subtle':   'var(--kz-error-border-subtle)',

        // ── Semantic: success ─────────────────────────────────────────────────────
        'success-bg-solid':      'var(--kz-success-bg-solid)',
        'success-bg-subtle':     'var(--kz-success-bg-subtle)',
        'success-border':        'var(--kz-success-border)',
        'success-border-subtle': 'var(--kz-success-border-subtle)',

        // ── Semantic: warning ─────────────────────────────────────────────────────
        'warning-bg-solid':      'var(--kz-warning-bg-solid)',
        'warning-bg-subtle':     'var(--kz-warning-bg-subtle)',
        'warning-border':        'var(--kz-warning-border)',
        'warning-border-subtle': 'var(--kz-warning-border-subtle)',

        // ── Semantic: info ────────────────────────────────────────────────────────
        'info-bg-solid':         'var(--kz-info-bg-solid)',
        'info-bg-subtle':        'var(--kz-info-bg-subtle)',
        'info-border':           'var(--kz-info-border)',
        'info-border-subtle':    'var(--kz-info-border-subtle)',
      },

      // Text tokens → generates text-primary, not text-text-primary
      textColor: {
        primary:   'var(--kz-text-primary)',
        secondary: 'var(--kz-text-secondary)',
        tertiary:  'var(--kz-text-tertiary)',
        accent:    'var(--kz-text-accent)',
        disabled:  'var(--kz-text-disabled)',
        inverse:   'var(--kz-text-inverse)',
        brand:     'var(--kz-brand-text)',
        error:     'var(--kz-error-text)',
        success:   'var(--kz-success-text)',
        warning:   'var(--kz-warning-text)',
        info:      'var(--kz-info-text)',
      },

      // Stroke tokens → generates border-subtle, not border-border-subtle
      borderColor: {
        subtle:      'var(--kz-stroke-subtle)',
        default:     'var(--kz-stroke-default)',
        strong:      'var(--kz-stroke-strong)',
        hover:       'var(--kz-stroke-hover)',
        interactive: 'var(--kz-stroke-interactive)',
      },

      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
    },
  },
};

export default tailwindPreset;
