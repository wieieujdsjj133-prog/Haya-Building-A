/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,

  images: {
    domains: [
      "localhost"
    ]
  },

  experimental: {
    serverActions: true
  },

  env: {
    APP_NAME: "Haya Building A"
  }
};

module.exports = nextConfig;
