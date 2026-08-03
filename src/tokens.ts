export type ThemeMode = 'light' | 'dark';

const ACCENT        = '#5153F6';
const ACCENT_HOVER  = '#6E70F8';
const BRAND_PRIMARY = '#FF7F56';
const BRAND_HOVER   = '#FF9A78';

// ── AAA-compliant text variants ───────────────────────────────────────────────
// These are the safe foreground tokens for rendering text in each mode.
// The base ACCENT and BRAND_PRIMARY values are kept for non-text / decorative use.

// Light mode text tokens (on white #FFFFFF and surface-0 #F5F7FA)
const ACCENT_TEXT_LIGHT = '#3739DC'; // 7.55:1 on white, 7.04:1 on surface-0 — AAA ✓
const BRAND_TEXT_LIGHT  = '#A82800'; // 7.07:1 on white — AAA ✓

// Dark mode text tokens (on surface-1 #0F0F16 and surface-0 #09090E)
const ACCENT_TEXT_DARK  = '#9092FF'; // 7.04:1 on surface-1 — AAA ✓

const accentAlphas = {
  'accent-soft-08': 'rgba(81,83,246,0.08)',
  'accent-soft-12': 'rgba(81,83,246,0.12)',
  'accent-soft-14': 'rgba(81,83,246,0.14)',
  'accent-soft-55': 'rgba(81,83,246,0.55)',
};

const brandTokens = {
  'brand-primary': BRAND_PRIMARY,
  'brand-hover':   BRAND_HOVER,
};

const accentBase = {
  'accent':       ACCENT,
  'accent-hover': ACCENT_HOVER,
};

export const lightTokens: Record<string, string> = {
  // ── Surfaces ─────────────────────────────────────────────────────────────────
  'surface-0': '#F5F7FA',
  'surface-1': '#FFFFFF',
  'surface-2': '#EFF0F2',
  'surface-3': '#E7E9EC',
  'surface-4': '#DFE3E8',
  'surface-5': '#D4DAE1',

  // ── Text ─────────────────────────────────────────────────────────────────────
  // text-primary:   18.3:1 on surface-1 — AAA ✓
  'text-primary':   '#141515',
  // text-secondary: 7.05:1 on white — AAA ✓
  'text-secondary': '#55595F',
  // text-muted:     7.03:1 on white — AAA ✓
  'text-muted':     '#555961',
  'text-inverse':   '#EEEEF5',

  // ── Borders ──────────────────────────────────────────────────────────────────
  'border-subtle':      '#E4E6E9',
  'border-default':     '#D8DDE3',
  'border-strong':      '#C6CDD6',
  'border-hover':       '#B5BCC5',
  'border-interactive': ACCENT,

  // ── Accent ───────────────────────────────────────────────────────────────────
  // accent (#5153F6): decorative fills, borders, focus rings — NOT for text
  // accent-text-light: use for links and accent-colored text — AAA ✓
  ...accentBase,
  'accent-text-light': ACCENT_TEXT_LIGHT, // 7.55:1 on white, 7.04:1 on surface-0 — AAA ✓
  'accent-dim':    'rgba(81,83,246,0.08)',
  'accent-border': 'rgba(81,83,246,0.25)',
  'accent-glow':   'rgba(81,83,246,0.15)',
  'focus-ring':    'rgba(81,83,246,0.20)',
  ...accentAlphas,

  // ── Brand ────────────────────────────────────────────────────────────────────
  // brand-primary (#FF7F56): logo, decorative, illustration — NOT for text
  // brand-text-light: use for brand-colored text on light surfaces — AAA ✓
  ...brandTokens,
  'brand-text-light': BRAND_TEXT_LIGHT,   // 7.07:1 on white — AAA ✓
  'brand-dim':  'rgba(255,127,86,0.10)',
  'brand-glow': 'rgba(255,127,86,0.15)',

  // ── Semantic: danger ─────────────────────────────────────────────────────────
  // 8.10:1 on white, 7.06:1 on danger-bg — AAA ✓
  'color-danger':        '#A0130B',
  'color-danger-bg':     '#FBECEB',
  'color-danger-border': '#EFC5C2',

  // ── Semantic: success ─────────────────────────────────────────────────────────
  // 7.10:1 on success-bg, 9.42:1 on white — AAA ✓
  'color-success':        '#0E5D26',
  'color-success-bg':     '#E7F4EC',
  'color-success-border': 'rgba(14,93,38,0.25)',
  'success-soft-12':      'rgba(14,93,38,0.12)',
  'success-soft-14':      'rgba(14,93,38,0.14)',

  // ── Semantic: warning ─────────────────────────────────────────────────────────
  // 7.02:1 on white — AAA ✓
  'color-warning':    '#A92800',
  'color-warning-bg': 'rgba(169,40,0,0.12)',
  'warning-soft-16':  'rgba(169,40,0,0.16)',

  // ── Semantic: info ────────────────────────────────────────────────────────────
  // 7.02:1 on white — AAA ✓
  'color-info':    '#005AA3',
  'color-info-bg': 'rgba(0,90,163,0.12)',
  'info-soft-12':  'rgba(0,90,163,0.12)',
  'info-soft-14':  'rgba(0,90,163,0.14)',

  // ── Legacy --app-* aliases ────────────────────────────────────────────────────
  'app-ink':                '#141515',
  'app-paper':              '#F5F7FA',
  'app-paper-warm':         '#FFFFFF',
  'app-paper-deep':         '#E7E9EC',
  'app-rule':               '#E4E6E9',
  'app-muted':              '#555961',
  'app-accent':             ACCENT,
  'app-green':              '#0E5D26',
  'app-blue':               '#005AA3',
  'app-gold':               '#A92800',
  'app-accent-soft-08':     'rgba(81,83,246,0.08)',
  'app-accent-soft-12':     'rgba(81,83,246,0.12)',
  'app-accent-soft-14':     'rgba(81,83,246,0.14)',
  'app-accent-soft-55':     'rgba(81,83,246,0.55)',
  'app-green-soft-12':      'rgba(14,93,38,0.12)',
  'app-green-soft-14':      'rgba(14,93,38,0.14)',
  'app-blue-soft-12':       'rgba(0,90,163,0.12)',
  'app-blue-soft-14':       'rgba(0,90,163,0.14)',
  'app-gold-soft-16':       'rgba(169,40,0,0.16)',
  'app-paper-deep-soft-42': 'rgba(233,237,242,0.42)',

  // ── Legacy --ds-* aliases ─────────────────────────────────────────────────────
  'ds-surface-1':          '#FFFFFF',
  'ds-surface-2':          '#EFF0F2',
  'ds-surface-3':          '#E7E9EC',
  'ds-surface-4':          '#DFE3E8',
  'ds-surface-5':          '#D4DAE1',
  'ds-stroke-subtle':      '#E4E6E9',
  'ds-stroke-default':     '#D8DDE3',
  'ds-stroke-hover':       '#B5BCC5',
  'ds-stroke-interactive': ACCENT,
  'ds-action-primary':     ACCENT,
  'ds-focus-ring':         'rgba(81,83,246,0.20)',
  'ds-danger':             '#A0130B',
  'ds-danger-bg':          '#FBECEB',
  'ds-success':            '#0E5D26',
  'ds-success-bg':         '#E7F4EC',

  // ── Portal gradients ──────────────────────────────────────────────────────────
  'page-gradient':
    'radial-gradient(ellipse at 16% 14%,rgba(81,83,246,0.08),transparent 30%),radial-gradient(ellipse at 86% 76%,rgba(255,127,86,0.06),transparent 30%)',
  'page-gradient-muted':
    'radial-gradient(ellipse at 12% 18%,rgba(81,83,246,0.05),transparent 28%),radial-gradient(ellipse at 84% 78%,rgba(81,83,246,0.04),transparent 28%)',
  'portal-hero-bg':
    'linear-gradient(135deg,rgba(255,255,255,0.98),rgba(245,247,250,0.96)),radial-gradient(ellipse at 84% 18%,rgba(81,83,246,0.10),transparent 28%)',
};

export const darkTokens: Record<string, string> = {
  // ── Surfaces ─────────────────────────────────────────────────────────────────
  'surface-0': '#09090E',
  'surface-1': '#0F0F16',
  'surface-2': '#15151E',
  'surface-3': '#1C1C27',
  'surface-4': '#222230',
  'surface-5': '#2B2B3F',

  // ── Text ─────────────────────────────────────────────────────────────────────
  // text-primary:   16.53:1 on surface-1 — AAA ✓
  'text-primary':   '#EEEEF5',
  // text-secondary: 8.50:1 on surface-1 — AAA ✓ (higher than muted to preserve hierarchy)
  'text-secondary': '#ABABC4',
  // text-muted:     7.04:1 on surface-1 — AAA ✓
  'text-muted':     '#9B9BB4',
  'text-inverse':   '#141515',

  // ── Borders ──────────────────────────────────────────────────────────────────
  'border-subtle':      'rgba(255,255,255,0.05)',
  'border-default':     'rgba(255,255,255,0.09)',
  'border-strong':      'rgba(255,255,255,0.20)',
  'border-hover':       'rgba(255,255,255,0.15)',
  'border-interactive': ACCENT_HOVER,

  // ── Accent ───────────────────────────────────────────────────────────────────
  // accent (#5153F6): 3.56:1 — decorative fills, borders, glows only — NOT for text
  // accent-hover (#6E70F8): 4.85:1 — interactive borders/indicators only
  // accent-text-dark: use for all accent-colored text in dark mode — AAA ✓
  ...accentBase,
  'accent-text-dark':  ACCENT_TEXT_DARK,  // 7.04:1 on surface-1 — AAA ✓
  'accent-dim':    'rgba(81,83,246,0.18)',
  'accent-border': 'rgba(81,83,246,0.35)',
  'accent-glow':   'rgba(81,83,246,0.35)',
  'focus-ring':    'rgba(81,83,246,0.25)',
  ...accentAlphas,

  // ── Brand ────────────────────────────────────────────────────────────────────
  // brand-primary (#FF7F56): 7.65:1 on surface-1 — AAA ✓ in dark mode
  ...brandTokens,
  'brand-dim':  'rgba(255,127,86,0.18)',
  'brand-glow': 'rgba(255,127,86,0.30)',

  // ── Semantic: danger ─────────────────────────────────────────────────────────
  // 7.05:1 on surface-1 — AAA ✓
  'color-danger':        '#EA7C8C',
  'color-danger-bg':     'rgba(234,124,140,0.12)',
  'color-danger-border': 'rgba(234,124,140,0.25)',

  // ── Semantic: success ─────────────────────────────────────────────────────────
  // 9.49:1 on surface-1 — AAA ✓
  'color-success':        '#81C784',
  'color-success-bg':     'rgba(129,199,132,0.12)',
  'color-success-border': 'rgba(129,199,132,0.25)',
  'success-soft-12':      'rgba(129,199,132,0.12)',
  'success-soft-14':      'rgba(129,199,132,0.14)',

  // ── Semantic: warning ─────────────────────────────────────────────────────────
  // 11.03:1 on surface-1 — AAA ✓
  'color-warning':    '#FFB74D',
  'color-warning-bg': 'rgba(255,183,77,0.16)',
  'warning-soft-16':  'rgba(255,183,77,0.16)',

  // ── Semantic: info ────────────────────────────────────────────────────────────
  // 9.53:1 on surface-1 — AAA ✓
  'color-info':    '#4FC3F7',
  'color-info-bg': 'rgba(79,195,247,0.12)',
  'info-soft-12':  'rgba(79,195,247,0.12)',
  'info-soft-14':  'rgba(79,195,247,0.14)',

  // ── Legacy --app-* aliases ────────────────────────────────────────────────────
  'app-ink':                '#EEEEF5',
  'app-paper':              '#09090E',
  'app-paper-warm':         '#15151E',
  'app-paper-deep':         '#1C1C27',
  'app-rule':               'rgba(255,255,255,0.05)',
  'app-muted':              '#9B9BB4',
  'app-accent':             ACCENT,
  'app-green':              '#81C784',
  'app-blue':               '#4FC3F7',
  'app-gold':               '#FFB74D',
  'app-accent-soft-08':     'rgba(81,83,246,0.08)',
  'app-accent-soft-12':     'rgba(81,83,246,0.12)',
  'app-accent-soft-14':     'rgba(81,83,246,0.14)',
  'app-accent-soft-55':     'rgba(81,83,246,0.55)',
  'app-green-soft-12':      'rgba(129,199,132,0.12)',
  'app-green-soft-14':      'rgba(129,199,132,0.14)',
  'app-blue-soft-12':       'rgba(79,195,247,0.12)',
  'app-blue-soft-14':       'rgba(79,195,247,0.14)',
  'app-gold-soft-16':       'rgba(255,183,77,0.16)',
  'app-paper-deep-soft-42': 'rgba(28,28,39,0.42)',

  // ── Legacy --ds-* aliases ─────────────────────────────────────────────────────
  'ds-surface-1':          '#0F0F16',
  'ds-surface-2':          '#15151E',
  'ds-surface-3':          '#1C1C27',
  'ds-surface-4':          '#222230',
  'ds-surface-5':          '#2B2B3F',
  'ds-stroke-subtle':      'rgba(255,255,255,0.05)',
  'ds-stroke-default':     'rgba(255,255,255,0.09)',
  'ds-stroke-hover':       'rgba(255,255,255,0.15)',
  'ds-stroke-interactive': ACCENT_HOVER,
  'ds-action-primary':     ACCENT,
  'ds-focus-ring':         'rgba(81,83,246,0.25)',
  'ds-danger':             '#EA7C8C',
  'ds-danger-bg':          'rgba(234,124,140,0.12)',
  'ds-success':            '#81C784',
  'ds-success-bg':         'rgba(129,199,132,0.12)',

  // ── Portal gradients ──────────────────────────────────────────────────────────
  'page-gradient':
    'radial-gradient(ellipse at 18% 10%,rgba(81,83,246,0.18),transparent 40%),radial-gradient(ellipse at 86% 78%,rgba(255,127,86,0.10),transparent 35%)',
  'page-gradient-muted':
    'radial-gradient(ellipse at 50% 40%,rgba(81,83,246,0.12),transparent 68%)',
  'portal-hero-bg':
    'radial-gradient(ellipse at 50% 40%,rgba(81,83,246,0.12) 0%,transparent 68%)',
};
