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
  pageExtensions: isProd ? ["stories.tsx", "tsx"] : ["tsx"],
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    const plugins = [
      ...config.plugins,
      new webpack.IgnorePlugin({
        resourceRegExp: /.*\.test(\.).*(ts|tsx)$/,
      }),
    ];

    if (isProd) {
      plugins.push(new CompressionPlugin());
    }

    return { ...config, plugins, devtool: isProd ? false : "eval" };
  },
};

module.exports = nextConfig;
