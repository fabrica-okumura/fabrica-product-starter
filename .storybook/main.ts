import type { StorybookConfig } from "@storybook/nextjs";

const config: StorybookConfig = {
  stories: [
    "../src/components/**/*.stories.@(ts|tsx)",
    "../src/components/**/*.mdx",
  ],
  addons: ["@storybook/addon-docs"],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
};

export default config;
