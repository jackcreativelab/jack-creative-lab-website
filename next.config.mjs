/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/jack-creative-lab-website',
  env: {
    NEXT_PUBLIC_BASE_PATH: '/jack-creative-lab-website',
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig