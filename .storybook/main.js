module.exports = {
  target: "node",
  core: {
    builder: "webpack5",
  },
  plugins: [require("postcss-flexbugs-fixes"), require("autoprefixer")],
  stories: [
    "../(pages|components)/**/*.stories.mdx",
    "../(pages|components)/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/builder-webpack5",
    "@storybook/manager-webpack5",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-postcss",
    "storybook-css-modules-preset",
    "storybook-addon-next-router",
  ],
  staticDirs: ["../public"],
  framework: "@storybook/react",
  // webpackFinal: async (config) => {
  //   config.resolve.alias["worker"] = require.resolve("../mocks/browser.ts");
  //   return config;
  // },
};
