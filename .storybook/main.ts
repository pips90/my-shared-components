import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@chromatic-com/storybook",
    "@storybook/addon-vitest",
    "@storybook/addon-a11y",
    "@storybook/addon-docs",
    "@storybook/addon-onboarding",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },

  // 👇 This is the important part: tell Vite/Storybook to hash asset filenames
  viteFinal: async (config) => {
    return {
      ...config,
      build: {
        ...(config.build ?? {}),
        rollupOptions: {
          ...(config.build?.rollupOptions ?? {}),
          output: {
            ...(config.build?.rollupOptions?.output ?? {}),
            entryFileNames: "assets/[name].[hash].js",
            chunkFileNames: "assets/[name].[hash].js",
            assetFileNames: "assets/[name].[hash].[ext]",
          },
        },
      },
    };
  },
};

export default config;
