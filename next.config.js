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
      {
        protocol: 'https',
        hostname: 'github.com',
        pathname: '/vadimkim0203/cv-website-project/**'
      },
    ],
  },
};

module.exports = nextConfig
