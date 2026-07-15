/**
 * Tailwind v3 preset — color and typography extensions only.
 *
 * Intentionally omits `darkMode` and `corePlugins.preflight` — those are
 * application-level decisions that vary by design system:
 *   - MUI apps typically set `preflight: false` and `darkMode: 'class'`
 *   - Non-MUI apps may want preflight enabled or a different dark strategy
 *
 * Usage in tailwind.config.js:
 *   import { tailwindPreset } from '@kodez/design-tokens';
 *   export default {
 *     presets: [tailwindPreset],
 *     content: ['./src/** /*.{ts,tsx}'],
 *     darkMode: 'class',          // ← app decides
 *     corePlugins: { preflight: false }, // ← app decides
 *   };
 */
declare const tailwindPreset: {
    theme: {
        extend: {
            colors: {
                'surface-0': string;
                'surface-1': string;
                'surface-2': string;
                'surface-3': string;
                'surface-4': string;
                'surface-5': string;
                'text-primary': string;
                'text-secondary': string;
                'text-muted': string;
                'text-inverse': string;
                'border-subtle': string;
                'border-default': string;
                'border-strong': string;
                'border-hover': string;
                'border-interactive': string;
                accent: string;
                'accent-hover': string;
                'accent-dim': string;
                brand: string;
                'brand-hover': string;
                'brand-dim': string;
                danger: string;
                'danger-bg': string;
                'danger-border': string;
                success: string;
                'success-bg': string;
                'success-border': string;
                warning: string;
                'warning-bg': string;
                info: string;
                'info-bg': string;
            };
            fontFamily: {
                sans: string[];
                mono: string[];
            };
            ringColor: {
                focus: string;
            };
        };
    };
};
export default tailwindPreset;
