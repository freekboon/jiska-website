module.exports = {
  reactStrictMode: true,
  i18n: {
    locales: ["en", "fr", "nl"],
    defaultLocale: "nl",
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};
