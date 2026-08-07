// Generates dist/tokens.json in W3C Design Token Community Group format.
// Compatible with Figma Tokens plugin, Style Dictionary, and token tooling.
import { lightTokens, darkTokens } from '../dist/index.js';
import { writeFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));

function tokenType(value) {
  if (value.startsWith('#') || value.startsWith('rgb')) return 'color';
  return 'other';
}

function buildGroup(tokens) {
  return Object.fromEntries(
    Object.entries(tokens).map(([key, value]) => [
      `kz-${key}`,
      { $value: value, $type: tokenType(value) },
    ])
  );
}

const allKeys = [...new Set([...Object.keys(lightTokens), ...Object.keys(darkTokens)])];

const w3c = {
  $schema: 'https://design-tokens.github.io/community-group/format/',
  light: buildGroup(lightTokens),
  dark:  buildGroup(darkTokens),
};

const dest = resolve(__dirname, '../dist/tokens.json');
writeFileSync(dest, JSON.stringify(w3c, null, 2));
console.log(`  ✓ dist/tokens.json (${allKeys.length} tokens)`);
