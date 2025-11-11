import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "i.pinimg.com",
      },
      {
        protocol: 'https',
        hostname: 'videos.pexels.com',
      },
      {
        protocol: 'https',
        hostname: 'www.shutterstock.com',
      },
    ],
  },
};

export default nextConfig;
