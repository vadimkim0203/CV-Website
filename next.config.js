/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol:"https",
        hostname: 'raw.githubusercontent.com',
      },
      {
        protocol:"https",
        hostname: 'scontent-ssn1-1.cdninstagram.com',
      },
    ],
  },
  experimental: {
    serverActions: true
  },
};

module.exports = nextConfig
