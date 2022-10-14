/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    REDIRECT_URI: process.env.REDIRECT_URI
  },
  images: {
    domains: ['"i.scdn.co','https://api.spotify.com/v1/artists']
  }
}

module.exports = nextConfig