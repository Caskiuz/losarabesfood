import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Un solo deploy portable: sin optimización de imágenes externa (no requiere sharp).
  images: { unoptimized: true },
};

export default nextConfig;
