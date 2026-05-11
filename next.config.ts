import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media3.giphy.com',
        pathname: '/**', // This allows any image path from this domain
      },
      {
        protocol: 'https',
        hostname: 'i.ibb.co',
        pathname: '/**', // This allows any image path from this domain
      },
    ],
  },
};

export default nextConfig;