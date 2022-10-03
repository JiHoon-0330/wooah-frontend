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
    formats: ["image/avif", "image/webp"],
    domains: [
      "cdn-contents-web.weverse.io",
      "weverse-phinf.pstatic.net",
      "pbs.twimg.com",
    ],
    deviceSizes: [5, 280, 320, 375, 425],
    imageSizes: [1, 270, 315, 360, 520],
  },
  async rewrites() {
    return [
      {
        source: "/instagram/:path*",
        destination: `https://scontent.cdninstagram.com/:path*`,
      },
      {
        source: "/twitter-video/:path*",
        destination: `https://video.twimg.com/:path*`,
      },
    ];
  },
  pageExtensions: isProd ? ["stories.tsx", "tsx", "ts"] : ["tsx", "ts"],
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    if (!dev && !isServer) {
      Object.assign(config.resolve.alias, {
        react: "preact/compat",
        "react-dom": "preact/compat",
      });
    }

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
              ? "https://wooah-api.dlwlrma.app"
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
