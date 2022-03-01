module.exports = {
  stories: [
    "../(pages|components)/**/*.stories.mdx",
    "../(pages|components)/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "storybook-css-modules-preset",
    "storybook-addon-next-router",
  ],
  staticDirs: ["../public"],
  framework: "@storybook/react",
};
