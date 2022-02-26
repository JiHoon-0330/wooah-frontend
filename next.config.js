/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ["stories.tsx", "tsx"],
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.plugins.push(
      new webpack.IgnorePlugin({
        resourceRegExp: /.*\.test(\.).*(ts|tsx)$/,
      }),
    );

    return config;
  },
};

module.exports = nextConfig;
