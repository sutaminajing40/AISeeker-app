/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  // これがないとfaiss-nodeが使えない
  experimental: {
    serverComponentsExternalPackages: ["faiss-node"],
  },
};

module.exports = nextConfig;
