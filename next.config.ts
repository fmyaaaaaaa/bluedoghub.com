import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Coinly was renamed to Alcoin. The released v1 app and its App Store listing link to the old
      // /products/coinly/terms and /products/coinly/privacy URLs, so these redirects must stay.
      { source: "/products/coinly", destination: "/products/alcoin", permanent: true },
      { source: "/products/coinly/:path*", destination: "/products/alcoin/:path*", permanent: true },
    ];
  },
};

export default nextConfig;
