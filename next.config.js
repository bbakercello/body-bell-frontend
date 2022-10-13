/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['"i.scdn.co','https://api.spotify.com/v1/artists']
  }
}

module.exports = nextConfig