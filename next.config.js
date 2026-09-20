const isProd = process.env.NODE_ENV === 'production';
const isNetlify = Boolean(process.env.NETLIFY);
const basePath = (isProd && !isNetlify) ? '/whatsapp-crm-platform' : '';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  compress: true,
  poweredByHeader: false,
  output: 'export',
  basePath: basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
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
