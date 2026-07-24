export type ThemeMode = 'light' | 'dark';

const ACCENT        = '#5153F6';
const ACCENT_HOVER  = '#6E70F8';
const BRAND_PRIMARY = '#FF7F56';
const BRAND_HOVER   = '#FF9A78';

const accentAlphas = {
  'accent-soft-04': 'rgba(81,83,246,0.04)',
  'accent-soft-06': 'rgba(81,83,246,0.06)',
  'accent-soft-08': 'rgba(81,83,246,0.08)',
  'accent-soft-10': 'rgba(81,83,246,0.10)',
  'accent-soft-12': 'rgba(81,83,246,0.12)',
  'accent-soft-14': 'rgba(81,83,246,0.14)',
  'accent-soft-16': 'rgba(81,83,246,0.16)',
  'accent-soft-18': 'rgba(81,83,246,0.18)',
  'accent-soft-20': 'rgba(81,83,246,0.20)',
  'accent-soft-25': 'rgba(81,83,246,0.25)',
  'accent-soft-30': 'rgba(81,83,246,0.30)',
  'accent-soft-55': 'rgba(81,83,246,0.55)',
};

// Overlay tokens — always dark-surface–based scrims; same in light and dark mode
// so they work correctly as modal backdrops and sidebar overlays regardless of theme.
const overlayTokens = {
  'modal-backdrop': 'rgba(9,9,14,0.72)',
  'modal-shadow':   'rgba(9,9,14,0.55)',
  'overlay-dark':   'rgba(9,9,14,0.78)',
  'overlay-mid':    'rgba(15,15,22,0.45)',
  'overlay-shadow': 'rgba(9,9,14,0.60)',
  'overlay-soft':   'rgba(15,15,22,0.22)',
};

// Genai severity — purple accent, same across both themes
const genaiTokens = {
  'color-genai':    '#8b5cf6',
  'color-genai-bg': 'rgba(139,92,246,0.12)',
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
  'text-primary':   '#141515',
  'text-secondary': '#5C6066',
  'text-muted':     '#9498A0',
  'text-inverse':   '#EEEEF5',

  // ── Borders ──────────────────────────────────────────────────────────────────
  'border-subtle':      '#E4E6E9',
  'border-default':     '#D8DDE3',
  'border-strong':      '#C6CDD6',
  'border-hover':       '#B5BCC5',
  'border-interactive': ACCENT,

  // ── Accent ───────────────────────────────────────────────────────────────────
  ...accentBase,
  'accent-dim':    'rgba(81,83,246,0.08)',
  'accent-border': 'rgba(81,83,246,0.25)',
  'accent-glow':   'rgba(81,83,246,0.15)',
  'focus-ring':    'rgba(81,83,246,0.20)',
  ...accentAlphas,

  // ── Brand ────────────────────────────────────────────────────────────────────
  ...brandTokens,
  'brand-dim':  'rgba(255,127,86,0.10)',
  'brand-glow': 'rgba(255,127,86,0.15)',

  // ── Semantic: danger ─────────────────────────────────────────────────────────
  'color-danger':        '#B3261E',
  'color-danger-bg':     '#FBECEB',
  'color-danger-border': '#EFC5C2',

  // ── Semantic: success ─────────────────────────────────────────────────────────
  'color-success':        '#2E7D46',
  'color-success-bg':     '#E7F4EC',
  'color-success-border': 'rgba(46,125,70,0.25)',
  'success-soft-12':      'rgba(46,125,70,0.12)',
  'success-soft-14':      'rgba(46,125,70,0.14)',

  // ── Semantic: warning ─────────────────────────────────────────────────────────
  'color-warning':    '#ED6C02',
  'color-warning-bg': 'rgba(237,108,2,0.12)',
  'warning-soft-16':  'rgba(237,108,2,0.16)',

  // ── Semantic: info ────────────────────────────────────────────────────────────
  'color-info':    '#0288D1',
  'color-info-bg': 'rgba(2,136,209,0.12)',
  'info-soft-12':  'rgba(2,136,209,0.12)',
  'info-soft-14':  'rgba(2,136,209,0.14)',

  // ── Legacy --app-* aliases ────────────────────────────────────────────────────
  'app-ink':                '#141515',
  'app-paper':              '#F5F7FA',
  'app-paper-warm':         '#FFFFFF',
  'app-paper-deep':         '#E7E9EC',
  'app-rule':               '#E4E6E9',
  'app-muted':              '#5C6066',
  'app-accent':             ACCENT,
  'app-green':              '#2E7D46',
  'app-blue':               '#0288D1',
  'app-gold':               '#ED6C02',
  'app-accent-soft-08':     'rgba(81,83,246,0.08)',
  'app-accent-soft-12':     'rgba(81,83,246,0.12)',
  'app-accent-soft-14':     'rgba(81,83,246,0.14)',
  'app-accent-soft-55':     'rgba(81,83,246,0.55)',
  'app-green-soft-12':      'rgba(46,125,70,0.12)',
  'app-green-soft-14':      'rgba(46,125,70,0.14)',
  'app-blue-soft-12':       'rgba(2,136,209,0.12)',
  'app-blue-soft-14':       'rgba(2,136,209,0.14)',
  'app-gold-soft-16':       'rgba(237,108,2,0.16)',
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
  'ds-danger':             '#B3261E',
  'ds-danger-bg':          '#FBECEB',
  'ds-success':            '#2E7D46',
  'ds-success-bg':         '#E7F4EC',

  // ── Semantic: status aliases (Pulse / workflow UI) ────────────────────────────
  'status-error':          '#B3261E',
  'status-error-dim':      'rgba(179,38,30,0.10)',
  'status-error-border':   'rgba(179,38,30,0.26)',
  'status-success':        '#2E7D46',
  'status-success-dim':    'rgba(46,125,70,0.10)',
  'status-success-border': 'rgba(46,125,70,0.24)',
  'status-warning':        '#ED6C02',
  'status-warning-dim':    'rgba(237,108,2,0.12)',
  'status-warning-border': 'rgba(237,108,2,0.28)',

  // ── Shadows ───────────────────────────────────────────────────────────────────
  'shadow-card': '0 10px 24px rgba(0,0,0,0.08)',
  'shadow-4':    '0 14px 34px rgba(0,0,0,0.12)',

  // ── Overlays & modal scrims ───────────────────────────────────────────────────
  ...overlayTokens,

  // ── Genai severity ────────────────────────────────────────────────────────────
  ...genaiTokens,

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
  'surface-3': '#1A1A24',
  'surface-4': '#1F1F2D',
  'surface-5': '#242438',

  // ── Text ─────────────────────────────────────────────────────────────────────
  'text-primary':   '#EEEEF5',
  'text-secondary': '#8A8AA3',
  'text-muted':     '#808099',
  'text-inverse':   '#141515',

  // ── Borders ──────────────────────────────────────────────────────────────────
  'border-subtle':      'rgba(255,255,255,0.05)',
  'border-default':     'rgba(255,255,255,0.09)',
  'border-strong':      'rgba(255,255,255,0.20)',
  'border-hover':       'rgba(255,255,255,0.15)',
  'border-interactive': ACCENT_HOVER,

  // ── Accent ───────────────────────────────────────────────────────────────────
  ...accentBase,
  'accent-dim':    'rgba(81,83,246,0.18)',
  'accent-border': 'rgba(81,83,246,0.35)',
  'accent-glow':   'rgba(81,83,246,0.35)',
  'focus-ring':    'rgba(81,83,246,0.25)',
  ...accentAlphas,

  // ── Brand ────────────────────────────────────────────────────────────────────
  ...brandTokens,
  'brand-dim':  'rgba(255,127,86,0.18)',
  'brand-glow': 'rgba(255,127,86,0.30)',

  // ── Semantic: danger ─────────────────────────────────────────────────────────
  'color-danger':        '#D86A7A',
  'color-danger-bg':     'rgba(216,106,122,0.12)',
  'color-danger-border': 'rgba(216,106,122,0.25)',

  // ── Semantic: success ─────────────────────────────────────────────────────────
  'color-success':        '#81C784',
  'color-success-bg':     'rgba(129,199,132,0.12)',
  'color-success-border': 'rgba(129,199,132,0.25)',
  'success-soft-12':      'rgba(129,199,132,0.12)',
  'success-soft-14':      'rgba(129,199,132,0.14)',

  // ── Semantic: warning ─────────────────────────────────────────────────────────
  'color-warning':    '#FFB74D',
  'color-warning-bg': 'rgba(255,183,77,0.16)',
  'warning-soft-16':  'rgba(255,183,77,0.16)',

  // ── Semantic: info ────────────────────────────────────────────────────────────
  'color-info':    '#4FC3F7',
  'color-info-bg': 'rgba(79,195,247,0.12)',
  'info-soft-12':  'rgba(79,195,247,0.12)',
  'info-soft-14':  'rgba(79,195,247,0.14)',

  // ── Legacy --app-* aliases ────────────────────────────────────────────────────
  'app-ink':                '#EEEEF5',
  'app-paper':              '#09090E',
  'app-paper-warm':         '#15151E',
  'app-paper-deep':         '#1A1A24',
  'app-rule':               'rgba(255,255,255,0.05)',
  'app-muted':              '#808099',
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
  'app-paper-deep-soft-42': 'rgba(26,26,36,0.42)',

  // ── Legacy --ds-* aliases ─────────────────────────────────────────────────────
  'ds-surface-1':          '#0F0F16',
  'ds-surface-2':          '#15151E',
  'ds-surface-3':          '#1A1A24',
  'ds-surface-4':          '#1F1F2D',
  'ds-surface-5':          '#242438',
  'ds-stroke-subtle':      'rgba(255,255,255,0.05)',
  'ds-stroke-default':     'rgba(255,255,255,0.09)',
  'ds-stroke-hover':       'rgba(255,255,255,0.15)',
  'ds-stroke-interactive': ACCENT_HOVER,
  'ds-action-primary':     ACCENT,
  'ds-focus-ring':         'rgba(81,83,246,0.25)',
  'ds-danger':             '#D86A7A',
  'ds-danger-bg':          'rgba(216,106,122,0.12)',
  'ds-success':            '#81C784',
  'ds-success-bg':         'rgba(129,199,132,0.12)',

  // ── Semantic: status aliases (Pulse / workflow UI) ────────────────────────────
  'status-error':          '#D86A7A',
  'status-error-dim':      'rgba(216,106,122,0.18)',
  'status-error-border':   'rgba(216,106,122,0.36)',
  'status-success':        '#81C784',
  'status-success-dim':    'rgba(129,199,132,0.16)',
  'status-success-border': 'rgba(129,199,132,0.34)',
  'status-warning':        '#FFB74D',
  'status-warning-dim':    'rgba(255,183,77,0.18)',
  'status-warning-border': 'rgba(255,183,77,0.38)',

  // ── Shadows ───────────────────────────────────────────────────────────────────
  'shadow-card': '0 10px 24px rgba(0,0,0,0.28)',
  'shadow-4':    '0 14px 34px rgba(0,0,0,0.34)',

  // ── Overlays & modal scrims ───────────────────────────────────────────────────
  ...overlayTokens,

  // ── Genai severity ────────────────────────────────────────────────────────────
  ...genaiTokens,

  // ── Portal gradients ──────────────────────────────────────────────────────────
  'page-gradient':
    'radial-gradient(ellipse at 18% 10%,rgba(81,83,246,0.18),transparent 40%),radial-gradient(ellipse at 86% 78%,rgba(255,127,86,0.10),transparent 35%)',
  'page-gradient-muted':
    'radial-gradient(ellipse at 50% 40%,rgba(81,83,246,0.12),transparent 68%)',
  'portal-hero-bg':
    'radial-gradient(ellipse at 50% 40%,rgba(81,83,246,0.12) 0%,transparent 68%)',
};
