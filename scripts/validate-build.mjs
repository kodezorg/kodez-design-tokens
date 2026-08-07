#!/usr/bin/env node
// Verifies that all CSS custom properties in the generated output use the --kz- prefix.
import { readFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const distDir   = resolve(__dirname, '../dist');

function checkFile(filename) {
  const css  = readFileSync(resolve(distDir, filename), 'utf8');
  // Match CSS var declarations: --something:
  const vars = [...css.matchAll(/--([a-zA-Z][a-zA-Z0-9-]*)s*:/g)].map(m => m[1]);
  // Allow --kz-* and font/color vars created by Tailwind v4 @theme (--color-*, --font-*)
  const invalid = vars.filter(v => !v.startsWith('kz-') && !v.startsWith('color-') && !v.startsWith('font-'));

  if (invalid.length > 0) {
    console.error(`  ✗ ${filename}: found CSS vars without --kz- prefix:`, invalid.slice(0, 5));
    return false;
  }

  console.log(`  ✓ ${filename}: ${vars.length} CSS vars, all correctly prefixed`);
  return true;
}

const ok = ['tokens.css', 'tailwind-v4.css'].map(checkFile).every(Boolean);
if (!ok) process.exit(1);
