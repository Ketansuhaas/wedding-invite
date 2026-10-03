import type { NextConfig } from "next";

/**
 * GitHub Pages serves plain static files, so we export the site as HTML.
 *
 * `basePath` matters: if the site lives at https://<user>.github.io/<repo>,
 * every link and asset needs the "/<repo>" prefix. The deploy workflow sets
 * NEXT_PUBLIC_BASE_PATH from the repository name automatically, so you should
 * not need to touch this. Leave it empty for a <user>.github.io root repo.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  // Emits /events/index.html rather than /events.html, which GitHub Pages
  // resolves more predictably.
  trailingSlash: true,
  images: {
    // There is no server to optimise images on a static host.
    unoptimized: true,
  },
};

export default nextConfig;
