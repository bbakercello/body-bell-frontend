/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    REDIRECT_URI: "https://body-bell-frontend.vercel.app",
    CLIENT_ID: "afad3723193640e2ad7cf5e9c8bd97c6",
    BACKEND: "https://body-bell-records.herokuapp.com/",
    AUTH_ENDPOINT: "https://accounts.spotify.com/authorize",
    CLIENT_SECRET: "48d87944154846c7a0f5e3273f1af9a7",
  },
  images: {
    domains: [
      '"i.scdn.co',
      "https://api.spotify.com/v1/artists",
      "i.imgur.com",
    ],
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
};


module.exports = nextConfig

