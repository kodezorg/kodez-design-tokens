export type ThemeMode = 'light' | 'dark';

const _light = {
  // ── Brand ─────────────────────────────────────────────────────────────────────
  'brand-primary':         '#FF7F56',
  'brand-hover':           '#CB6241',
  'brand-active':          '#743622',
  'brand-bg-subtle':       'rgba(255,127,86,0.12)',
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

  // ── Semantic: info ────────────────────────────────────────────────────────────
  'info-bg-solid':         '#2563EB',
  'info-bg-subtle':        'rgba(37,99,235,0.08)',
  'info-border':           '#1D4ED8',
  'info-border-subtle':    'rgba(37,99,235,0.40)',
  'info-text':             '#1E3A8A',

  // ── Text ─────────────────────────────────────────────────────────────────────
  'text-primary':          '#231F20',
  'text-secondary':        '#4A4546',
  'text-tertiary':         '#6F6B6C',
  'text-accent':           '#5153F6',
  'text-disabled':         '#A6A2A3',
  'text-inverse':          '#FFFFFF',
} satisfies Record<string, string>;

const _dark = {
  // ── Brand ─────────────────────────────────────────────────────────────────────
  'brand-primary':         '#FF7F56',
  'brand-hover':           '#F89474',
  'brand-active':          '#FAAF97',
  'brand-bg-subtle':       'rgba(255,127,86,0.16)',
  'brand-border':          '#FF7F56',
  'brand-border-subtle':   'rgba(255,127,86,0.40)',
  'brand-text':            '#FF7F56',

  // ── Brand Gradient ────────────────────────────────────────────────────────────
  'brand-gradient-1':      '#F89474',
  'brand-gradient-2':      '#F0673D',

  // ── Surfaces ─────────────────────────────────────────────────────────────────
  'surface-0':             '#0C0A0B',
  'surface-1':             '#131112',
  'surface-2':             '#1C191A',
  'surface-kpi':           'rgba(28,25,26,0.72)',
  'surface-3':             '#231F20',
  'surface-4':             '#2B2728',
  'surface-5':             '#342F31',

  // ── Stroke ───────────────────────────────────────────────────────────────────
  'stroke-subtle':         '#2B2728',
  'stroke-default':        '#3D3839',
  'stroke-strong':         '#524D4F',
  'stroke-hover':          '#6E6869',
  'stroke-interactive':    '#FF7F56',

  // ── Semantic: success ─────────────────────────────────────────────────────────
  'success-bg-solid':      '#22C55E',
  'success-bg-subtle':     'rgba(34,197,94,0.16)',
  'success-border':        '#005C39',
  'success-border-subtle': 'rgba(34,197,94,0.40)',
  'success-text':          '#4ADE80',

  // ── Semantic: warning ─────────────────────────────────────────────────────────
  'warning-bg-solid':      '#F59E0B',
  'warning-bg-subtle':     'rgba(245,158,11,0.16)',
  'warning-border':        '#71491E',
  'warning-border-subtle': 'rgba(245,158,11,0.40)',
  'warning-text':          '#FBBF24',

  // ── Semantic: error ───────────────────────────────────────────────────────────
  'error-bg-solid':        '#F46969',
  'error-bg-subtle':       'rgba(244,105,105,0.16)',
  'error-border':          '#F59E0B',
  'error-border-subtle':   'rgba(244,105,105,0.40)',
  'error-text':            '#F98585',

  // ── Semantic: info ────────────────────────────────────────────────────────────
  'info-bg-solid':         '#3B82F6',
  'info-bg-subtle':        'rgba(59,130,246,0.16)',
  'info-border':           '#15407B',
  'info-border-subtle':    'rgba(59,130,246,0.40)',
  'info-text':             '#6AAAFA',

  // ── Text ─────────────────────────────────────────────────────────────────────
  'text-primary':          '#F5F4F2',
  'text-secondary':        '#BDB7B8',
  'text-tertiary':         '#837D7E',
  'text-accent':           '#7475FF',
  'text-disabled':         '#5A5556',
  'text-inverse':          '#231F20',
} satisfies Record<string, string>;

export const lightTokens: Record<string, string> = _light;
export const darkTokens:  Record<string, string> = _dark;

export type LightTokenName = keyof typeof _light;
export type DarkTokenName  = keyof typeof _dark;
export type TokenName      = LightTokenName | DarkTokenName;
