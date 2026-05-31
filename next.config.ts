import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,

  // Static export for GitHub Pages (served from custom domain root).
  output: "export",

  // GitHub Pages has no image optimization server.
  images: {
    unoptimized: true,
  },

  // Emit `/route/index.html` so directory-style URLs resolve on a static host.
  trailingSlash: true,
};

export default nextConfig;
