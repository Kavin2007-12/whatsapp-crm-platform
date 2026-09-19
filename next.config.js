const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  compress: true,
  poweredByHeader: false,
  output: 'export',
  basePath: isProd ? '/whatsapp-crm-platform' : '',
  assetPrefix: isProd ? '/whatsapp-crm-platform/' : '',
  trailingSlash: true,
  images: {
    domains: ['images.unsplash.com', 'cdn.simpleicons.org'],
    unoptimized: true,
  },
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
};

module.exports = nextConfig;
