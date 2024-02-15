import type { StorybookConfig } from '@storybook/nextjs';

// https://storybook.js.org/tutorials/intro-to-storybook/react/en/simple-component/
const config: StorybookConfig = {
  stories: ['../components/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-styling-webpack',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  staticDirs: ['../public'],
  docs: {
    autodocs: 'tag',
  },
  async webpackFinal(config) {
    const path = require('path');
    if (!config.resolve) return config;
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, '../'),
    };

    return config;
  },
};
export default config;
