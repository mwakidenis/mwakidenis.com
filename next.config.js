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
  // Cloudflare Pages uses serverless rendering (not static export)
  images: {
    unoptimized: true, // Required for Cloudflare Pages
  }
}

module.exports = nextConfig
