/** @type {import('next').NextConfig} */

const nextConfig = {
  sassOptions: {
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image.uniqlo.com',
      },
    ],
  },
}

module.exports = nextConfig
