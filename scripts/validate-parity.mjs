#!/usr/bin/env node
// Validates that lightTokens and darkTokens have the same keys (except known dark-only tokens).
import { lightTokens, darkTokens } from '../dist/index.js';

const DARK_ONLY = new Set(['surface-kpi']);

const lightKeys = new Set(Object.keys(lightTokens));
const darkKeys  = new Set(Object.keys(darkTokens));
let errors = 0;

for (const key of darkKeys) {
  if (!lightKeys.has(key) && !DARK_ONLY.has(key)) {
    console.error(`  ✗ parity: "${key}" in darkTokens but missing from lightTokens`);
    errors++;
  }
}

for (const key of lightKeys) {
  if (!darkKeys.has(key)) {
    console.error(`  ✗ parity: "${key}" in lightTokens but missing from darkTokens`);
    errors++;
  }
}

if (errors > 0) {
  console.error(`\n  Token parity check failed: ${errors} mismatch(es)\n`);
  process.exit(1);
}

console.log(`  ✓ Token parity: ${lightKeys.size} light / ${darkKeys.size} dark tokens in sync`);
