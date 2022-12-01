import type { StorybookConfig } from '@storybook/builder-vite';

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx|svelte)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-interactions"],
  framework: {
    name: "@storybook/svelte-vite",
    options: {}
  },
  features: {
    storyStoreV7: true
  },
  docs: {
    docsPage: "automatic"
  }
};
export default config;
