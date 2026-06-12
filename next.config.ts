import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: "/template-floral",
  assetPrefix: "/template-floral",
};

export default nextConfig;
