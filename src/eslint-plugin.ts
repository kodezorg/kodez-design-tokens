/**
 * @kodez/design-tokens ESLint plugin
 *
 * Usage (ESLint v9 flat config):
 *   import kodezTokens from '@kodez/design-tokens/eslint-plugin';
 *   export default [
 *     { plugins: { '@kodez/design-tokens': kodezTokens },
 *       rules: { '@kodez/design-tokens/no-raw-token-var': 'warn' } },
 *   ];
 *
 * Or use the bundled config:
 *   import kodezTokens from '@kodez/design-tokens/eslint-plugin';
 *   export default [kodezTokens.configs.recommended];
 */

const TOKEN_NAMES = new Set([
  'brand-primary','brand-hover','brand-active',
  'brand-border','brand-border-subtle','brand-text',
  'brand-gradient-1','brand-gradient-2',
  'surface-0','surface-1','surface-2','surface-3','surface-4','surface-5',
  'section-bg-page','section-bg-base','section-bg-raised','section-bg-overlay','section-bg-glow',
  'stroke-subtle','stroke-default','stroke-strong','stroke-hover','stroke-interactive',
  'success-bg-solid','success-bg-subtle','success-border','success-border-subtle','success-text',
  'warning-bg-solid','warning-bg-subtle','warning-border','warning-border-subtle','warning-text',
  'error-bg-solid','error-bg-subtle','error-border','error-border-subtle','error-text',
  'overlay-backdrop',
  'shadow-card',
  'text-primary','text-secondary','text-tertiary','text-disabled','text-inverse',
]);

// Matches var(--some-name) that does NOT start with kz-
const RAW_VAR_RE = /var(--(?!kz-)([a-z][a-z0-9-]*))/g;
// Matches var(--kz-some-name) to validate the name is a known token
const KZ_VAR_RE  = /var(--kz-([a-z][a-z0-9-]*))/g;

function checkString(node: any, raw: string, context: any) {
  let m: RegExpExecArray | null;

  RAW_VAR_RE.lastIndex = 0;
  while ((m = RAW_VAR_RE.exec(raw)) !== null) {
    if (!TOKEN_NAMES.has(m[1])) continue;
    context.report({
      node,
      messageId: 'missingPrefix',
      data: { name: m[1] },
    });
  }

  KZ_VAR_RE.lastIndex = 0;
  while ((m = KZ_VAR_RE.exec(raw)) !== null) {
    if (!TOKEN_NAMES.has(m[1])) {
      context.report({ node, messageId: 'unknownToken', data: { name: m[1] } });
    }
  }
}

const noRawTokenVar = {
  meta: {
    type: 'suggestion' as const,
    docs: {
      description: "Enforce --kz- prefix on Kodez design token CSS variables",
      url: 'https://github.com/kodezorg/kodez-design-tokens',
    },
    messages: {
      missingPrefix: "Use 'var(--kz-{{name}})' instead of 'var(--{{name}})' for Kodez design tokens.",
      unknownToken:  "'--kz-{{name}}' is not a recognised Kodez design token.",
    },
    schema: [],
  },
  create(context: any) {
    return {
      Literal(node: any) {
        if (typeof node.value === 'string') checkString(node, node.value, context);
      },
      TemplateLiteral(node: any) {
        for (const quasi of node.quasis) checkString(quasi, quasi.value.raw, context);
      },
    };
  },
};

const plugin = {
  meta: { name: '@kodez/design-tokens', version: '1.9.1' },
  rules: { 'no-raw-token-var': noRawTokenVar },
  configs: {} as Record<string, any>,
};

plugin.configs.recommended = {
  plugins: { '@kodez/design-tokens': plugin },
  rules:   { '@kodez/design-tokens/no-raw-token-var': 'warn' },
};

export default plugin;
