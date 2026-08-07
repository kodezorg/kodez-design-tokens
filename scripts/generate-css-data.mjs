// Generates .vscode/kz-tokens.css-data.json for VS Code CSS custom property autocomplete.
import { getCssVars } from '../dist/index.js';
import { writeFileSync, mkdirSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');

const lightVars = getCssVars('light');
const darkVars  = getCssVars('dark');
const allKeys   = [...new Set([...Object.keys(lightVars), ...Object.keys(darkVars)])];

const properties = allKeys.map(varKey => {
  const lightVal = lightVars[varKey];
  const darkVal  = darkVars[varKey];

  const parts = [];
  if (lightVal) parts.push(`Light: ${lightVal}`);
  if (darkVal && darkVal !== lightVal) parts.push(`Dark: ${darkVal}`);

  return {
    name: varKey,
    description: parts.join(' | '),
    browsers: ['C', 'E', 'FF', 'S'],
  };
});

const cssData = { version: 1.1, properties };

const outDir = resolve(root, '.vscode');
mkdirSync(outDir, { recursive: true });
writeFileSync(resolve(outDir, 'kz-tokens.css-data.json'), JSON.stringify(cssData, null, 2));
console.log(`  ✓ .vscode/kz-tokens.css-data.json (${properties.length} properties)`);
