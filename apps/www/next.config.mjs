/** @type {import('next').NextConfig} */
import {withContentlayer} from "next-contentlayer"
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
    NODE_ENV: process.env.NODE_ENV
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
    ],
  }, 


};

export default withContentlayer(nextConfig)