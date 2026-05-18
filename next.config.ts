import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === "production" ? "/aiprofile" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/aiprofile/" : "",
};

export default nextConfig;
