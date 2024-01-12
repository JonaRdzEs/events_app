/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com", "wembleypark.com", "picsum.photos"],
  }
};
module.exports = nextConfig;
