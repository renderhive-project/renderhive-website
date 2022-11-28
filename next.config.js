module.exports = {
  images: {
    unoptimized: true,
  },
  exportPathMap: function () {
      return {
        '/': { page: '/' }
      }
  },
  output: 'standalone',
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }
    return config;
  },
};
