// Generates dist/tokens.json in W3C Design Token Community Group format.
import { getCssVars } from '../dist/index.js';
import { writeFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const lightVars = getCssVars('light');
const darkVars  = getCssVars('dark');
const allKeys   = [...new Set([...Object.keys(lightVars), ...Object.keys(darkVars)])];

function tokenType(value) {
  if (value.startsWith('#') || value.startsWith('rgb')) return 'color';
  return 'other';
}

// '--kz-surface-0' → 'kz-surface-0'
function buildGroup(vars) {
  return Object.fromEntries(
    Object.entries(vars).map(([key, value]) => [
      key.slice(2),
      { $value: value, $type: tokenType(value) },
    ])
  );
}

const w3c = {
  $schema: 'https://design-tokens.github.io/community-group/format/',
  light: buildGroup(lightVars),
  dark:  buildGroup(darkVars),
};

const dest = resolve(__dirname, '../dist/tokens.json');
writeFileSync(dest, JSON.stringify(w3c, null, 2));
console.log(`  ✓ dist/tokens.json (${allKeys.length} tokens)`);
