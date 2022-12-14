// @ts-check
/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation.
 * This is especially useful for Docker builds.
 */
!process.env.SKIP_ENV_VALIDATION && (await import("./src/env/server.mjs"));

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      }
    ]
  },
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  eslint: {
    ignoreDuringBuilds: true,
 },
  typescript: {
    ignoreBuildErrors: true,
  },
};
export default config;
