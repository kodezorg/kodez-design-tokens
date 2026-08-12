export type ThemeMode = 'light' | 'dark';

// Brand palette constants — theme-invariant, never change between light and dark.
// These are the six foundational Kodez brand colours (Brand Guide 2020).
export const brandPalette = {
  'brand-orange':           '#FF7F56',
  'brand-white':            '#FFFFFF',
  'brand-offwhite':         '#F5F4F2',
  'brand-grey':             '#999999',
  'brand-lightblack':       '#231F20',
  'brand-black':            '#000000',
} as const;

const _light = {
  // ── Brand ─────────────────────────────────────────────────────────────────────
  'brand-primary':         '#FF7F56',
  'brand-hover':           '#CB6241',
  'brand-active':          '#743622',
  'brand-border':          '#743622',
  'brand-border-subtle':   'rgba(255,127,86,0.40)',
  'brand-text':            '#A04C31',

  // ── Brand Gradient ────────────────────────────────────────────────────────────
  'brand-gradient-1':      '#F89474',
  'brand-gradient-2':      '#F0673D',

  // ── Surfaces ─────────────────────────────────────────────────────────────────
  'surface-0':             '#FFFFFF',
  'surface-1':             '#F9F8F7',
  'surface-2':             '#F5F4F2',
  'surface-3':             '#EDEBE8',
  'surface-4':             '#E4E1DE',
  'surface-5':             '#DAD7D3',

  // ── Section backgrounds ───────────────────────────────────────────────────────
  'section-bg-page':       '#FFFFFF',
  'section-bg-base':       '#F9F8F7',
  'section-bg-raised':     '#F5F4F2',
  'section-bg-overlay':    '#EDEBE8',
  'section-bg-glow':       'rgba(81,83,246,0.04)',

  // ── Stroke ───────────────────────────────────────────────────────────────────
  'stroke-subtle':         '#EDEBE8',
  'stroke-default':        '#D5D2CE',
  'stroke-strong':         '#B9B5B2',
  'stroke-hover':          '#9E9A97',
  'stroke-interactive':    '#FF7F56',

  // ── Semantic: success ─────────────────────────────────────────────────────────
  'success-bg-solid':      '#16A34A',
  'success-bg-subtle':     'rgba(22,163,74,0.08)',
  'success-border':        '#15803D',
  'success-border-subtle': 'rgba(22,163,74,0.40)',
  'success-text':          '#14532D',

  // ── Semantic: warning ─────────────────────────────────────────────────────────
  'warning-bg-solid':      '#D97706',
  'warning-bg-subtle':     'rgba(217,119,6,0.08)',
  'warning-border':        '#B45309',
  'warning-border-subtle': 'rgba(217,119,6,0.40)',
  'warning-text':          '#78350F',

  // ── Semantic: error ───────────────────────────────────────────────────────────
  'error-bg-solid':        '#DC2626',
  'error-bg-subtle':       'rgba(220,38,38,0.08)',
  'error-border':          '#B91C1C',
  'error-border-subtle':   'rgba(220,38,38,0.40)',
  'error-text':            '#7F1D1D',

  // ── Glow ─────────────────────────────────────────────────────────────────────

  // ── Overlay ──────────────────────────────────────────────────────────────────
  'overlay-backdrop':      'rgba(35, 31, 32, 0.50)',

  // ── Text ─────────────────────────────────────────────────────────────────────
  'text-primary':          '#231F20',
  'text-secondary':        '#4A4546',
  'text-tertiary':         '#6F6B6C',
  'text-disabled':         '#A6A2A3',
  'text-inverse':          '#FFFFFF',
} satisfies Record<string, string>;

const _dark = {
  // ── Brand ─────────────────────────────────────────────────────────────────────
  'brand-primary':         '#FF7F56',
  'brand-hover':           '#F89474',
  'brand-active':          '#FAAF97',
  'brand-border':          '#FF7F56',
  'brand-border-subtle':   'rgba(255,127,86,0.40)',
  'brand-text':            '#FF7F56',

  // ── Brand Gradient ────────────────────────────────────────────────────────────
  'brand-gradient-1':      '#F89474',
  'brand-gradient-2':      '#F0673D',

  // ── Surfaces (Cool Intensified) ──────────────────────────────────────────────
  'surface-0':             '#08080E',
  'surface-1':             '#0D0D1A',
  'surface-2':             '#121224',
  'surface-3':             '#17172E',
  'surface-4':             '#1C1C38',
  'surface-5':             '#212142',

  // ── Section backgrounds ───────────────────────────────────────────────────────
  'section-bg-page':       '#08080E',
  'section-bg-base':       '#0D0D1A',
  'section-bg-raised':     '#121224',
  'section-bg-overlay':    '#17172E',
  'section-bg-glow':       'rgba(81,83,246,0.12)',

  // ── Stroke (Cool Intensified — B ≈ 2× R/G to match surfaces) ────────────────
  'stroke-subtle':         '#1A1A34',
  'stroke-default':        '#262648',
  'stroke-strong':         '#323260',
  'stroke-hover':          '#44447E',
  'stroke-interactive':    '#FF7F56',

  // ── Semantic: success ─────────────────────────────────────────────────────────
  'success-bg-solid':      '#22C55E',
  'success-bg-subtle':     'rgba(34,197,94,0.16)',
  'success-border':        '#005C39',
  'success-border-subtle': 'rgba(34,197,94,0.40)',
  'success-text':          '#22C55E',

  // ── Semantic: warning ─────────────────────────────────────────────────────────
  'warning-bg-solid':      '#F59E0B',
  'warning-bg-subtle':     'rgba(245,158,11,0.16)',
  'warning-border':        '#71491E',
  'warning-border-subtle': 'rgba(245,158,11,0.40)',
  'warning-text':          '#F59E0B',

  // ── Semantic: error ───────────────────────────────────────────────────────────
  'error-bg-solid':        '#F46969',
  'error-bg-subtle':       'rgba(244,105,105,0.16)',
  'error-border':          'rgba(244,105,105,0.50)',
  'error-border-subtle':   'rgba(244,105,105,0.40)',
  'error-text':            '#F98585',


  // ── Glow ─────────────────────────────────────────────────────────────────────

  // ── Overlay ──────────────────────────────────────────────────────────────────
  'overlay-backdrop':      'rgba(8, 8, 14, 0.75)',

  // ── Text ─────────────────────────────────────────────────────────────────────
  'text-primary':          '#F5F4F2',
  'text-secondary':        '#999999',
  'text-tertiary':         '#8C90A0',
  'text-disabled':         '#5A5556',
  'text-inverse':          '#231F20',
} satisfies Record<string, string>;

export const lightTokens: Record<string, string> = _light;
export const darkTokens:  Record<string, string> = _dark;

export type LightTokenName = keyof typeof _light;
export type DarkTokenName  = keyof typeof _dark;
export type TokenName      = LightTokenName | DarkTokenName;
