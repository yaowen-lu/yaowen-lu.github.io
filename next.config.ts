import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // Remove basePath for a <username>.github.io repo; set to "/<repo-name>" for a project repo.
  // basePath: process.env.NODE_ENV === "production" ? "/<repo-name>" : "",
  images: { unoptimized: true },
};

export default nextConfig;
