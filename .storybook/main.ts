import type { StorybookConfig } from "@storybook/angular";

const config: StorybookConfig = {
  stories: [
    "../projects/ng-ui-kit-lib/src/**/*.mdx",
    "../projects/ng-ui-kit-lib/src/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: ["@storybook/addon-docs", "@storybook/addon-onboarding"],
  framework: {
    name: "@storybook/angular",
    options: {
      enableIvy: true,
    },
  },
  staticDirs: ["../projects/ng-ui-kit-lib/src/assets"],
  typescript: {
    check: false,
  },

  webpackFinal: async (config, { configType }) => {
    config.resolve = config.resolve || {};
    config.resolve.fallback = {
      ...config.resolve.fallback,
      process: false,
    };

    return config;
  },
};

export default config;
