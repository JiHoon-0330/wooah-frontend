const CompressionPlugin = require("compression-webpack-plugin");
const isProd = process.env.NODE_ENV === "production";
const isTest = process.env.TEST === "true";

/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  compress: true,
  reactStrictMode: true,
  compiler: {
    removeConsole: isProd,
  },
  experimental: {
    workerThreads: true,
  },
  images: {
    domains: ["cdn-contents-web.weverse.io", "pbs.twimg.com"],
  },
  async rewrites() {
    return [
      {
        source: "/instagram/:path*",
        destination: `https://scontent.cdninstagram.com/:path*`,
      },
    ];
  },
  pageExtensions: isProd ? ["stories.tsx", "tsx", "ts"] : ["tsx", "ts"],
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
            isProd || isTest
              ? "https://api.wooah.shop"
              : "http://localhost:3000",
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
