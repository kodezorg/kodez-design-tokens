import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts', 'src/eslint-plugin.ts'],
  format: ['esm', 'cjs'],
  dts: true,
  splitting: false,
  clean: true,
  outDir: 'dist',
  external: ['react', 'react-dom', '@base-ui/react'],
});
