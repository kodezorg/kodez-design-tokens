#!/usr/bin/env node
// Validates that light and dark modes have the same --kz-* tokens (except known dark-only tokens).
import { getCssVars } from '../dist/index.js';

const DARK_ONLY = new Set(['--kz-surface-kpi']);

const lightKeys = new Set(Object.keys(getCssVars('light')));
const darkKeys  = new Set(Object.keys(getCssVars('dark')));
let errors = 0;

for (const key of darkKeys) {
  if (!lightKeys.has(key) && !DARK_ONLY.has(key)) {
    console.error(`  ✗ parity: "${key}" in dark but missing from light`);
    errors++;
  }
}

for (const key of lightKeys) {
  if (!darkKeys.has(key)) {
    console.error(`  ✗ parity: "${key}" in light but missing from dark`);
    errors++;
  }
}

if (errors > 0) {
  console.error(`\n  Token parity check failed: ${errors} mismatch(es)\n`);
  process.exit(1);
}

console.log(`  ✓ Token parity: ${lightKeys.size} light / ${darkKeys.size} dark tokens in sync`);
