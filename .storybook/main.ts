import type { StorybookConfig } from "@storybook/angular";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: ["@storybook/addon-docs", "@storybook/addon-onboarding"],
  framework: {
    name: "@storybook/angular",
    options: {
      enableIvy: true,
    },
  },
  staticDirs: ["../src/assets"],
  typescript: {
    check: false,
  },
  webpackFinal: async (config) => {
    config.resolve = config.resolve || {};
    config.resolve.fallback = {
      ...config.resolve.fallback,
      process: false,
    };

    return config;
  },
};
export default config;
