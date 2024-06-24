/** @type {import('next').NextConfig} */
import { withContentlayer } from "next-contentlayer";
const nextConfig = {
  // async rewrites() {
  //   return [
  //     {
  //       source: '/:path*',
  //       destination: '/coming-spon',
  //     },
  //   ];
  // },
  env: {
    DATABASE_URL: process.env.DATABASE_URL,
    COMPONENT_REGISTERY_API_URL: process.env.COMPONENT_REGISTERY_API_URL,
    GITHUB_CLIENT_ID: process.env.GITHUB_CLIENT_ID,
    GITHUB_CLIENT_SECRET: process.env.GITHUB_CLIENT_SECRET,
    UPSTASH_REDIS_REST_URL: process.env.UPSTASH_REDIS_REST_URL,
    UPSTASH_REDIS_REST_TOKEN: process.env.UPSTASH_REDIS_REST_TOKEN,
    REDIS_URL: process.env.REDIS_URL,
    REDIS_TOKEN: process.env.REDIS_TOKEN
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "pipe.com",
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
      {
        protocol: "https",
        hostname: "github.com",
      },
    ],
  },
};

export default withContentlayer(nextConfig);
