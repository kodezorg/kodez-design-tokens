#!/usr/bin/env node
// Syncs component-contract.yaml with current token values.
// Updates: meta.updated date, contrast ratios for all documented fg/bg pairs.
// Run after any change to src/tokens.ts.

import { readFileSync, writeFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { getCssVars } from '../dist/index.js';

const __dir = dirname(fileURLToPath(import.meta.url));
const root  = resolve(__dir, '..');
const contractPath = resolve(root, 'component-contract.yaml');

// ── WCAG contrast helpers ────────────────────────────────────────────────────

function linearise(c) {
  const s = c / 255;
  return s <= 0.04045 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
}

function luminance(hex) {
  const h = hex.replace('#', '');
  const r = parseInt(h.slice(0, 2), 16);
  const g = parseInt(h.slice(2, 4), 16);
  const b = parseInt(h.slice(4, 6), 16);
  return 0.2126 * linearise(r) + 0.7152 * linearise(g) + 0.0722 * linearise(b);
}

function contrast(fg, bg) {
  if (!fg?.startsWith('#') || !bg?.startsWith('#')) return null;
  const l1 = luminance(fg), l2 = luminance(bg);
  const hi = Math.max(l1, l2), lo = Math.min(l1, l2);
  return +((hi + 0.05) / (lo + 0.05)).toFixed(2);
}

function wcagLevel(ratio) {
  if (ratio === null) return null;
  if (ratio >= 7)   return 'AAA';
  if (ratio >= 4.5) return 'AA';
  if (ratio >= 3)   return 'AA-Large';
  return 'FAIL';
}

// ── Recompute known fg/bg pairs ──────────────────────────────────────────────
// These are the same pairs that component-contract.yaml documents explicitly.
// The script validates them and outputs a summary.  A non-zero exit signals
// that a regression was introduced (used as a CI gate in ci.yml).

const light = getCssVars('light');
const dark  = getCssVars('dark');

const PAIRS = [
  // Primary button
  { label: 'button_primary light',    fg: light['--kz-text-primary'],  bg: light['--kz-brand-primary'],    min: 4.5 },
  { label: 'button_primary dark',     fg: '#231F20',                   bg: dark['--kz-brand-primary'],     min: 4.5 },
  // Success button
  { label: 'button_success light',    fg: light['--kz-text-primary'],  bg: light['--kz-success-bg-solid'], min: 4.5 },
  { label: 'button_success dark',     fg: light['--kz-text-primary'],  bg: dark['--kz-success-bg-solid'],  min: 4.5 },
  // Warning button
  { label: 'button_warning light',    fg: light['--kz-text-primary'],  bg: light['--kz-warning-bg-solid'], min: 4.5 },
  { label: 'button_warning dark',     fg: light['--kz-text-primary'],  bg: dark['--kz-warning-bg-solid'],  min: 4.5 },
  // Danger button
  { label: 'button_danger light',     fg: light['--kz-text-inverse'],  bg: light['--kz-error-bg-solid'],   min: 4.5 },
  { label: 'button_danger dark',      fg: light['--kz-text-primary'],  bg: dark['--kz-error-bg-solid'],    min: 4.5 },
  // Info button
  { label: 'button_info light',       fg: light['--kz-text-inverse'],  bg: light['--kz-info-bg-solid'],    min: 4.5 },
  { label: 'button_info dark (near-AA)', fg: light['--kz-text-primary'], bg: dark['--kz-info-bg-solid'],   min: 3.0 },
  // Brand badge
  { label: 'badge_brand_solid light', fg: light['--kz-text-primary'],  bg: light['--kz-brand-primary'],    min: 4.5 },
  { label: 'badge_brand_solid dark',  fg: '#231F20',                   bg: dark['--kz-brand-primary'],     min: 4.5 },
  // Tooltip
  { label: 'tooltip light',           fg: light['--kz-surface-1'],     bg: light['--kz-text-secondary'],   min: 4.5 },
  { label: 'tooltip dark',            fg: dark['--kz-text-primary'],   bg: dark['--kz-surface-5'],          min: 4.5 },
  // Body text (core)
  { label: 'text-primary on surface-0 light',    fg: light['--kz-text-primary'],   bg: light['--kz-surface-0'], min: 7 },
  { label: 'text-secondary on surface-0 light',  fg: light['--kz-text-secondary'], bg: light['--kz-surface-0'], min: 4.5 },
  { label: 'text-primary on surface-0 dark',     fg: dark['--kz-text-primary'],    bg: dark['--kz-surface-0'],  min: 7 },
  { label: 'text-secondary on surface-0 dark',   fg: dark['--kz-text-secondary'],  bg: dark['--kz-surface-0'],  min: 4.5 },
  // Pagination active
  { label: 'pagination active light', fg: light['--kz-text-primary'],  bg: light['--kz-brand-primary'],    min: 4.5 },
  { label: 'pagination active dark',  fg: dark['--kz-surface-0'],      bg: dark['--kz-brand-primary'],     min: 4.5 },
  // Skip link
  { label: 'skip-link (both modes)',  fg: '#231F20',                   bg: light['--kz-brand-primary'],    min: 4.5 },
];

let failures = 0;
const rows = [];

for (const p of PAIRS) {
  const ratio = contrast(p.fg, p.bg);
  const level = wcagLevel(ratio);
  const pass  = ratio !== null && ratio >= p.min;
  if (!pass) failures++;
  rows.push({ label: p.label, ratio, level, pass, min: p.min });
}

// ── Print results table ──────────────────────────────────────────────────────

console.log('\ncomponent-contract contrast audit\n');
console.log('Ratio  Level      Min   Pass  Pair');
console.log('─'.repeat(70));
for (const r of rows) {
  const status = r.pass ? '✓' : '✗';
  const ratio  = r.ratio?.toFixed(2).padStart(5) ?? ' n/a';
  const level  = (r.level ?? '—').padEnd(10);
  const min    = String(r.min).padEnd(5);
  console.log(`${ratio}  ${level} ${min} ${status}     ${r.label}`);
}
console.log('─'.repeat(70));
console.log(`${rows.length} pairs checked. ${failures} failure(s).\n`);

// ── Update meta.updated date in component-contract.yaml ─────────────────────

const today = new Date().toISOString().slice(0, 10);
let yaml = readFileSync(contractPath, 'utf8');
const updated = yaml.replace(
  /^(  updated:\s*)"[0-9-]+"/m,
  `$1"${today}"`
);

if (updated !== yaml) {
  writeFileSync(contractPath, updated);
  console.log(`component-contract.yaml meta.updated → ${today}`);
} else {
  console.log('component-contract.yaml already up to date.');
}

if (failures > 0) {
  console.error(`\n${failures} contrast pair(s) fail their minimum ratio. Fix before merging.\n`);
  process.exit(1);
}
