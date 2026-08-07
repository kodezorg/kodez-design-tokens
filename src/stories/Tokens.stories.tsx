import React from 'react';
import type { Meta } from '@storybook/react';
import { lightTokens, darkTokens } from '../tokens.js';

interface SwatchProps { name: string; light?: string; dark?: string; }

function Swatch({ name, light, dark }: SwatchProps) {
  const val = light ?? dark ?? '';
  const isColor = val.startsWith('#') || val.startsWith('rgb');
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 12, padding: '8px 0',
      borderBottom: '1px solid var(--kz-stroke-subtle)',
    }}>
      {isColor && (
        <div style={{
          width: 40, height: 40, borderRadius: 8, flexShrink: 0,
          background: `var(--kz-${name})`,
          border: '1px solid var(--kz-stroke-subtle)',
        }} />
      )}
      <div style={{ flex: 1 }}>
        <code style={{ fontSize: 12, color: 'var(--kz-text-primary)', display: 'block' }}>
          --kz-{name}
        </code>
        {light && (
          <span style={{ fontSize: 11, color: 'var(--kz-text-tertiary)', marginRight: 12 }}>
            Light: {light}
          </span>
        )}
        {dark && (
          <span style={{ fontSize: 11, color: 'var(--kz-text-tertiary)' }}>
            Dark: {dark}
          </span>
        )}
      </div>
    </div>
  );
}

function Section({ title, names }: { title: string; names: string[] }) {
  const allKeys = [...new Set([...Object.keys(lightTokens), ...Object.keys(darkTokens)])];
  const tokens = names.filter(n => allKeys.includes(n));
  return (
    <div style={{ marginBottom: 40 }}>
      <h3 style={{
        color: 'var(--kz-text-secondary)', fontSize: 11, fontWeight: 600,
        textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 8,
      }}>
        {title}
      </h3>
      {tokens.map(n => (
        <Swatch key={n} name={n} light={lightTokens[n]} dark={darkTokens[n]} />
      ))}
    </div>
  );
}

function TokenViewer() {
  const groups: [string, string[]][] = [
    ['Surfaces', ['surface-0','surface-1','surface-2','surface-3','surface-4','surface-5','surface-kpi']],
    ['Text', ['text-primary','text-secondary','text-tertiary','text-accent','text-disabled','text-inverse']],
    ['Strokes', ['stroke-subtle','stroke-default','stroke-strong','stroke-hover','stroke-interactive']],
    ['Brand', ['brand-primary','brand-hover','brand-active','brand-bg-subtle','brand-border','brand-border-subtle','brand-text','brand-gradient-1','brand-gradient-2']],
    ['Error', ['error-bg-solid','error-bg-subtle','error-border','error-border-subtle','error-text']],
    ['Success', ['success-bg-solid','success-bg-subtle','success-border','success-border-subtle','success-text']],
    ['Warning', ['warning-bg-solid','warning-bg-subtle','warning-border','warning-border-subtle','warning-text']],
    ['Info', ['info-bg-solid','info-bg-subtle','info-border','info-border-subtle','info-text']],
  ];

  return (
    <div style={{ padding: 32, background: 'var(--kz-surface-0)', minHeight: '100vh' }}>
      <h2 style={{ color: 'var(--kz-text-primary)', marginBottom: 8, fontSize: 20, fontWeight: 600 }}>
        Design Tokens
      </h2>
      <p style={{ color: 'var(--kz-text-secondary)', marginBottom: 40, fontSize: 13 }}>
        All tokens are available as CSS custom properties prefixed with <code>--kz-</code>.
        Toggle the theme in the toolbar above to preview light / dark values.
      </p>
      {groups.map(([title, names]) => (
        <Section key={title} title={title} names={names} />
      ))}
    </div>
  );
}

const meta: Meta = {
  title: 'Design System/Tokens',
  component: TokenViewer,
  parameters: { layout: 'fullscreen' },
};
export default meta;

export const AllTokens = () => <TokenViewer />;
AllTokens.storyName = 'All Tokens';
