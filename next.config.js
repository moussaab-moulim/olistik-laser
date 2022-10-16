const { i18n } = require("./next-i18next.config");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
    enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer({
    i18n,
    productionBrowserSourceMaps: true,
    reactStrictMode: true,
    trailingSlash: true,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    images: {
        format: ["image/webp", "image/avif"],
        domains: ["olistik-laser.cdn.prismic.io", "images.prismic.io"],
        deviceSizes: [320, 480, 640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    },
});
