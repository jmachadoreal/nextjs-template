/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  optimizeFonts: true,
  trailingSlash: true,
  compress: true,
  images: {
    domains: [],
    formats: ['image/webp']
  }
}

module.exports = nextConfig
