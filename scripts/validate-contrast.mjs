#!/usr/bin/env node
// WCAG 2.1 contrast ratio validation for text tokens.
import { lightTokens, darkTokens } from '../dist/index.js';

function hexToRgb(hex) {
  const n = parseInt(hex.replace('#', ''), 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}

function linearise(c) {
  const s = c / 255;
  return s <= 0.03928 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
}

function luminance(hex) {
  const [r, g, b] = hexToRgb(hex).map(linearise);
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

function contrast(fg, bg) {
  const l1 = luminance(fg);
  const l2 = luminance(bg);
  const lighter = Math.max(l1, l2);
  const darker  = Math.min(l1, l2);
  return (lighter + 0.05) / (darker + 0.05);
}

function grade(ratio) {
  if (ratio >= 7)   return 'AAA';
  if (ratio >= 4.5) return 'AA';
  if (ratio >= 3)   return 'AA-Large';
  return 'FAIL';
}

const PAIRS = [
  // Light mode — text on surfaces
  { mode: 'light', fg: 'text-primary',   bg: 'surface-0', min: 7 },
  { mode: 'light', fg: 'text-primary',   bg: 'surface-1', min: 7 },
  { mode: 'light', fg: 'text-secondary', bg: 'surface-0', min: 4.5 },
  { mode: 'light', fg: 'text-tertiary',  bg: 'surface-0', min: 4.5 },
  { mode: 'light', fg: 'text-accent',    bg: 'surface-0', min: 4.5 },
  { mode: 'light', fg: 'brand-text',     bg: 'surface-0', min: 4.5 },
  // Light mode — semantic text on surface-0
  { mode: 'light', fg: 'error-text',   bg: 'surface-0', min: 4.5 },
  { mode: 'light', fg: 'success-text', bg: 'surface-0', min: 4.5 },
  { mode: 'light', fg: 'warning-text', bg: 'surface-0', min: 4.5 },
  { mode: 'light', fg: 'info-text',    bg: 'surface-0', min: 4.5 },
  // Dark mode — text on surfaces
  { mode: 'dark', fg: 'text-primary',   bg: 'surface-0', min: 7 },
  { mode: 'dark', fg: 'text-primary',   bg: 'surface-1', min: 7 },
  { mode: 'dark', fg: 'text-secondary', bg: 'surface-1', min: 4.5 },
  { mode: 'dark', fg: 'text-tertiary',  bg: 'surface-1', min: 4.5 },
  { mode: 'dark', fg: 'text-accent',    bg: 'surface-1', min: 4.5 },
  { mode: 'dark', fg: 'brand-text',     bg: 'surface-1', min: 4.5 },
  // Dark mode — semantic text on surface-1
  { mode: 'dark', fg: 'error-text',   bg: 'surface-1', min: 4.5 },
  { mode: 'dark', fg: 'success-text', bg: 'surface-1', min: 4.5 },
  { mode: 'dark', fg: 'warning-text', bg: 'surface-1', min: 4.5 },
  { mode: 'dark', fg: 'info-text',    bg: 'surface-1', min: 4.5 },
];

let errors = 0;

for (const { mode, fg, bg, min } of PAIRS) {
  const tokens = mode === 'light' ? lightTokens : darkTokens;
  const fgVal  = tokens[fg];
  const bgVal  = tokens[bg];

  if (!fgVal || !bgVal) {
    console.warn(`  ? contrast: ${mode}/${fg} on ${bg} — token not found, skipping`);
    continue;
  }

  // Skip rgba values (transparent backgrounds depend on what's behind)
  if (fgVal.startsWith('rgba') || bgVal.startsWith('rgba')) continue;

  const ratio = contrast(fgVal, bgVal);
  const g     = grade(ratio);
  const pass  = ratio >= min;

  if (!pass) {
    console.error(`  ✗ contrast [${mode}] ${fg} on ${bg}: ${ratio.toFixed(2)}:1 (${g}) — need ${min}:1`);
    errors++;
  } else {
    console.log(`  ✓ contrast [${mode}] ${fg} on ${bg}: ${ratio.toFixed(2)}:1 (${g})`);
  }
}

if (errors > 0) {
  console.error(`\n  Contrast check failed: ${errors} pair(s) below threshold\n`);
  process.exit(1);
}

console.log(`  ✓ All contrast checks passed`);
