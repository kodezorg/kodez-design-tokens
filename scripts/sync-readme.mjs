#!/usr/bin/env node
// Regenerates token-table sections in README.md from current token values.
// Looks for <!-- kz:autogen:start:SECTION --> ... <!-- kz:autogen:end:SECTION -->
// markers and replaces the content between them.
// Run after any change to src/tokens.ts.

import { readFileSync, writeFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { getCssVars } from '../dist/index.js';

const __dir = dirname(fileURLToPath(import.meta.url));
const root  = resolve(__dir, '..');

const light = getCssVars('light');
const dark  = getCssVars('dark');

// ── Table cell helpers ───────────────────────────────────────────────────────

function badge(hex) {
  if (!hex || hex.startsWith('rgba')) return null;
  const slug = hex.replace('#', '%23');
  const code = hex.replace('#', '');
  return `![${hex}](https://img.shields.io/badge/-${slug}-${code}?style=flat-square)`;
}

function cell(v) {
  if (!v) return '— | —';
  const b = badge(v);
  return b ? `${b} | \`${v}\`` : `— | \`${v}\``;
}

function row(name, lv, dv) {
  return `| \`--${name}\` | ${cell(lv)} | ${cell(dv)} |`;
}

const HEADER = '| Token | Light | | Dark | |\n|---|---|---|---|---|';

// ── Token groups ─────────────────────────────────────────────────────────────

function tokenRows(keys) {
  return keys.map(k => row(k, light[`--kz-${k}`], dark[`--kz-${k}`])).join('\n');
}

const SECTIONS = {
  surfaces: [
    HEADER,
    tokenRows(['surface-0', 'surface-1', 'surface-2', 'surface-3', 'surface-4', 'surface-5']),
    '| `--surface-kpi` | — | — | — | `rgba(28,25,26,0.72)` |',
  ].join('\n'),

  text: [
    HEADER,
    tokenRows(['text-primary', 'text-secondary', 'text-tertiary', 'text-accent', 'text-disabled', 'text-inverse']),
  ].join('\n'),

  strokes: [
    HEADER,
    tokenRows(['stroke-subtle', 'stroke-default', 'stroke-strong', 'stroke-hover', 'stroke-interactive']),
  ].join('\n'),

  brand: [
    HEADER,
    tokenRows([
      'brand-primary', 'brand-hover', 'brand-active',
      'brand-bg-subtle', 'brand-border', 'brand-border-subtle',
      'brand-text', 'brand-gradient-1', 'brand-gradient-2',
    ]),
  ].join('\n'),

  'semantic-error': [
    HEADER,
    tokenRows(['error-bg-solid', 'error-bg-subtle', 'error-border', 'error-border-subtle', 'error-text']),
  ].join('\n'),

  'semantic-success': [
    HEADER,
    tokenRows(['success-bg-solid', 'success-bg-subtle', 'success-border', 'success-border-subtle', 'success-text']),
  ].join('\n'),

  'semantic-warning': [
    HEADER,
    tokenRows(['warning-bg-solid', 'warning-bg-subtle', 'warning-border', 'warning-border-subtle', 'warning-text']),
  ].join('\n'),

  'semantic-info': [
    HEADER,
    tokenRows(['info-bg-solid', 'info-bg-subtle', 'info-border', 'info-border-subtle', 'info-text']),
  ].join('\n'),
};

// ── Inject into README.md ────────────────────────────────────────────────────

let readme  = readFileSync(resolve(root, 'README.md'), 'utf8');
let changed = false;

for (const [key, content] of Object.entries(SECTIONS)) {
  const start = `<!-- kz:autogen:start:${key} -->`;
  const end   = `<!-- kz:autogen:end:${key} -->`;
  const block = `${start}\n${content}\n${end}`;
  const re    = new RegExp(`${start}[\\s\\S]*?${end}`);

  if (readme.includes(start)) {
    const updated = readme.replace(re, block);
    if (updated !== readme) { changed = true; readme = updated; }
  } else {
    console.warn(`  ⚠  Marker not found for section "${key}" — skipping.`);
  }
}

if (changed) {
  writeFileSync(resolve(root, 'README.md'), readme);
  console.log('README.md token tables updated.');
} else {
  console.log('README.md already up to date.');
}
