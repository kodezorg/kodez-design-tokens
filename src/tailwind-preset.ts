/**
 * Tailwind v3 preset — color and typography extensions only.
 *
 * Intentionally omits `darkMode` and `corePlugins.preflight` — those are
 * application-level decisions that vary by design system:
 *   - MUI apps typically set `preflight: false` and `darkMode: 'class'`
 *   - Non-MUI apps may want preflight enabled or a different dark strategy
 *
 * Text tokens live in `theme.extend.textColor` so `text-primary` works directly
 * (not the double-prefixed `text-text-primary`). Border tokens live in
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
        // ── Surfaces (elevation scale) ──────────────────────────────────────────
        'surface-0': 'var(--surface-0)',
        'surface-1': 'var(--surface-1)',
        'surface-2': 'var(--surface-2)',
        'surface-3': 'var(--surface-3)',
        'surface-4': 'var(--surface-4)',
        'surface-5': 'var(--surface-5)',

        // ── Accent ──────────────────────────────────────────────────────────────
        'accent':         'var(--accent)',
        'accent-hover':   'var(--accent-hover)',
        'accent-dim':     'var(--accent-dim)',
        'accent-border':  'var(--accent-border)',
        'accent-glow':    'var(--accent-glow)',
        'accent-soft-08': 'var(--accent-soft-08)',
        'accent-soft-12': 'var(--accent-soft-12)',
        'accent-soft-14': 'var(--accent-soft-14)',
        'accent-soft-55': 'var(--accent-soft-55)',

        // ── Brand ────────────────────────────────────────────────────────────────
        'brand':       'var(--brand-primary)',
        'brand-hover': 'var(--brand-hover)',
        'brand-dim':   'var(--brand-dim)',
        'brand-glow':  'var(--brand-glow)',

        // ── Semantic ─────────────────────────────────────────────────────────────
        'danger':           'var(--color-danger)',
        'danger-bg':        'var(--color-danger-bg)',
        'danger-border':    'var(--color-danger-border)',
        'success':          'var(--color-success)',
        'success-bg':       'var(--color-success-bg)',
        'success-border':   'var(--color-success-border)',
        'success-soft-12':  'var(--success-soft-12)',
        'success-soft-14':  'var(--success-soft-14)',
        'warning':          'var(--color-warning)',
        'warning-bg':       'var(--color-warning-bg)',
        'warning-soft-16':  'var(--warning-soft-16)',
        'info':             'var(--color-info)',
        'info-bg':          'var(--color-info-bg)',
        'info-soft-12':     'var(--info-soft-12)',
        'info-soft-14':     'var(--info-soft-14)',
      },

      // Text tokens in their own section → generates text-primary, not text-text-primary
      textColor: {
        primary:   'var(--text-primary)',
        secondary: 'var(--text-secondary)',
        muted:     'var(--text-muted)',
        inverse:   'var(--text-inverse)',
      },

      // Border tokens in their own section → generates border-subtle, not border-border-subtle
      borderColor: {
        subtle:      'var(--border-subtle)',
        default:     'var(--border-default)',
        strong:      'var(--border-strong)',
        hover:       'var(--border-hover)',
        interactive: 'var(--border-interactive)',
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
