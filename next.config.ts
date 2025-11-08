import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    domains: ["i.pinimg.com"], // ✅ allow external images from Pinterest CDN
  },
};

export default nextConfig;
