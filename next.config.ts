import type {NextConfig} from "next";
import path from "path";

const nextConfig: NextConfig = {
    /* config options here */
    reactCompiler: true,
    turbopack: {
        root: path.join(__dirname, '..'),
    },
    experimental: {
        optimizePackageImports: ['@/components'],
    },
    allowedDevOrigins: ['192.168.1.12'],
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'juixhd2gcyyv123g.public.blob.vercel-storage.com',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'lh3.googleusercontent.com',
                pathname: '/**',
            },
        ],
    },
};

export default nextConfig;
