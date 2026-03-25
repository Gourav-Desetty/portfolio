import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Mandatory for GitHub Pages
  output: 'export', 
  
  // Required because GitHub Pages is a static host
  images: {
    unoptimized: true, 
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },

  // Optional: Only uncomment and edit if your site is NOT at yourname.github.io
  // basePath: '/your-repo-name', 
  
  devIndicators: false,
  reactStrictMode: false,
}

export default nextConfig