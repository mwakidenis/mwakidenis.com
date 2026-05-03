/** @type {import('next').NextConfig} */
// Force Next.js to use the JS (Babel) compiler when SWC binary isn't available
process.env.NEXT_DISABLE_SWC = process.env.NEXT_DISABLE_SWC || '1';
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['jsx', 'js', 'tsx', 'ts'],
  experimental: {
    appDir: false, // Keep using pages router
  },
  swcMinify: false,
  // Cloudflare Pages optimization
  output: process.env.CF_PAGES ? 'standalone' : undefined,
  images: {
    unoptimized: process.env.CF_PAGES ? true : false,
  }
}

module.exports = nextConfig
