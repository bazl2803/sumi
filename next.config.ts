import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  experimental: {
    optimizePackageImports: ['@/components'],
  },
  images: {
    remotePatterns: [new URL('https://juixhd2gcyyv123g.public.blob.vercel-storage.com/**')],
  },
};

export default nextConfig;
