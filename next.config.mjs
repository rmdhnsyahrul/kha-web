/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  basePath: process.env.PAGES_BASE_PATH,
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost:3000",
      },
      {
        protocol: "https",
        hostname: "rmdhnsyahrul.github.io/kha-web/",
      },
    ],
  },
};

export default nextConfig;
