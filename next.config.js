/** @type {import('next').NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS || false;
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || (isGithubActions ? "/deadoceamor_site" : "");

const nextConfig = {
  reactStrictMode: true,
  output: isGithubActions ? "export" : undefined,
  basePath: basePath || undefined,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath
  },
  images: {
    unoptimized: true,
    formats: ["image/avif", "image/webp"]
  }
};

module.exports = nextConfig;
