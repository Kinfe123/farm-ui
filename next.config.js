/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    DB_URI: process.env.DB_URI,
    URL: process.env.URL,
    SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,

    API_KEY: process.env.API_KEY,
    AUTH_DOMAIN: process.env.AUTH_DOMAIN,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "api.uifaces.co",
      },
      {
        protocol: "https",
        hostname: "randomuser.me",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

module.exports = nextConfig;
