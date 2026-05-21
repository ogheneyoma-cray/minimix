/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ae-pic-a1.aliexpress-media.com',
      },
      {
        protocol: 'https',
        hostname: 'ae01.alicdn.com',
      },
    ],
  },
};

module.exports = nextConfig;
