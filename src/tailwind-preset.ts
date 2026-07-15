/**
 * Tailwind v3 preset — color and typography extensions only.
 *
 * Intentionally omits `darkMode` and `corePlugins.preflight` — those are
 * application-level decisions that vary by design system:
 *   - MUI apps typically set `preflight: false` and `darkMode: 'class'`
 *   - Non-MUI apps may want preflight enabled or a different dark strategy
 *
 * Usage in tailwind.config.js:
 *   import { tailwindPreset } from '@kodez/design-tokens';
 *   export default {
 *     presets: [tailwindPreset],
 *     content: ['./src/** /*.{ts,tsx}'],
 *     darkMode: 'class',          // ← app decides
 *     corePlugins: { preflight: false }, // ← app decides
 *   };
 */
const tailwindPreset = {
  theme: {
    extend: {
      colors: {
        // Surfaces (elevation scale)
        'surface-0': 'var(--surface-0)',
        'surface-1': 'var(--surface-1)',
        'surface-2': 'var(--surface-2)',
        'surface-3': 'var(--surface-3)',
        'surface-4': 'var(--surface-4)',
        'surface-5': 'var(--surface-5)',

        // Text hierarchy
        'text-primary':   'var(--text-primary)',
        'text-secondary': 'var(--text-secondary)',
        'text-muted':     'var(--text-muted)',
        'text-inverse':   'var(--text-inverse)',

        // Borders
        'border-subtle':      'var(--border-subtle)',
        'border-default':     'var(--border-default)',
        'border-strong':      'var(--border-strong)',
        'border-hover':       'var(--border-hover)',
        'border-interactive': 'var(--border-interactive)',

        // Accent
        'accent':       'var(--accent)',
        'accent-hover': 'var(--accent-hover)',
        'accent-dim':   'var(--accent-dim)',

        // Brand
        'brand':       'var(--brand-primary)',
        'brand-hover': 'var(--brand-hover)',
        'brand-dim':   'var(--brand-dim)',

        // Semantic
        'danger':         'var(--color-danger)',
        'danger-bg':      'var(--color-danger-bg)',
        'danger-border':  'var(--color-danger-border)',
        'success':        'var(--color-success)',
        'success-bg':     'var(--color-success-bg)',
        'success-border': 'var(--color-success-border)',
        'warning':        'var(--color-warning)',
        'warning-bg':     'var(--color-warning-bg)',
        'info':           'var(--color-info)',
        'info-bg':        'var(--color-info-bg)',
      },

      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },

      ringColor: {
        focus: 'var(--focus-ring)',
      },
    },
  },
};

export default tailwindPreset;
