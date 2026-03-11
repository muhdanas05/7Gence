import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "stratusbridge.ai" },
      { protocol: "https", hostname: "callbutlerai.website" },
      { protocol: "https", hostname: "framerusercontent.com" },
      { protocol: "https", hostname: "icarusmarketing.nl" },
      { protocol: "https", hostname: "cdn.wegic.ai" },
    ],
  },
};

export default nextConfig;
