// Generates .vscode/kz-tokens.css-data.json for VS Code CSS custom property autocomplete.
import { lightTokens, darkTokens } from '../dist/index.js';
import { writeFileSync, mkdirSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');

const allKeys = [...new Set([...Object.keys(lightTokens), ...Object.keys(darkTokens)])];

const properties = allKeys.map(key => {
  const lightVal = lightTokens[key];
  const darkVal  = darkTokens[key];

  const parts = [];
  if (lightVal) parts.push(`Light: ${lightVal}`);
  if (darkVal && darkVal !== lightVal) parts.push(`Dark: ${darkVal}`);

  return {
    name: `--kz-${key}`,
    description: parts.join(' | '),
    browsers: ['C', 'E', 'FF', 'S'],
  };
});

const cssData = {
  version: 1.1,
  properties,
};

const outDir = resolve(root, '.vscode');
mkdirSync(outDir, { recursive: true });
writeFileSync(resolve(outDir, 'kz-tokens.css-data.json'), JSON.stringify(cssData, null, 2));
console.log(`  ✓ .vscode/kz-tokens.css-data.json (${properties.length} properties)`);
