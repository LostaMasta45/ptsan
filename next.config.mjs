/** @type {import('next').NextConfig} */
// Force rebuild to clear Vercel cache
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
};

export default nextConfig;
