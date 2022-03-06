const CompressionPlugin = require("compression-webpack-plugin");
const isProd = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  compress: true,
  reactStrictMode: true,
  compiler: {
    removeConsole: isProd,
  },
  images: {
    domains: ["cdn-contents-web.weverse.io", "pbs.twimg.com"],
  },
  pageExtensions: isProd ? ["stories.tsx", "tsx"] : ["tsx"],
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    const plugins = [
      ...config.plugins,
      new webpack.IgnorePlugin({
        resourceRegExp: /.*\.test(\.).*(ts|tsx)$/,
      }),
      new webpack.DefinePlugin({
        "process.env": {
          BUILD_ID: JSON.stringify(buildId),
          STORYBOOK: JSON.stringify("false"),
          API_DOMAIN: JSON.stringify(
            isProd ? "https://api.wooah.shop" : "http://localhost:3000",
          ),
        },
      }),
    ];

    if (isProd) {
      plugins.push(new CompressionPlugin());
    }

    return { ...config, plugins, devtool: isProd ? false : "eval" };
  },
};

module.exports = nextConfig;
