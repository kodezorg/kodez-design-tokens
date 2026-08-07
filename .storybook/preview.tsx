import React, { useEffect } from 'react';
import type { Preview, Decorator } from '@storybook/react';
import { withThemeByClassName } from '@storybook/addon-themes';
import { injectCssVars, lightTokens, darkTokens } from '../src';
import './global.css';

const ThemeDecorator: Decorator = (Story, context) => {
  const isDark = context.globals['theme'] === 'dark';

  useEffect(() => {
    injectCssVars(isDark ? darkTokens : lightTokens);
  }, [isDark]);

  return (
    <div
      style={{
        backgroundColor: 'var(--kz-surface-0)',
        minHeight: '100vh',
        padding: '24px',
        color: 'var(--kz-text-primary)',
        fontFamily: '"Inter", system-ui, sans-serif',
        transition: 'background-color 0.2s ease, color 0.2s ease',
      }}
    >
      <Story />
    </div>
  );
};

const preview: Preview = {
  decorators: [
    withThemeByClassName({
      themes: { light: '', dark: 'dark' },
      defaultTheme: 'light',
    }),
    ThemeDecorator,
  ],
  globalTypes: {
    theme: {
      description: 'Color theme',
      defaultValue: 'light',
      toolbar: {
        title: 'Theme',
        icon: 'circlehollow',
        items: [
          { value: 'light', icon: 'sun', title: 'Light' },
          { value: 'dark', icon: 'moon', title: 'Dark' },
        ],
        dynamicTitle: true,
      },
    },
  },
  parameters: {
    controls: { matchers: { color: /(background|color)$/i, date: /date/i } },
    backgrounds: { disable: true },
    layout: 'fullscreen',
  },
};

export default preview;
