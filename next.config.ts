import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "(?<subdomain>.+)\\.digresumepro\\.vercel\\.app",
          },
        ],
        destination: "/site/:subdomain/:path*",
      },
    ];
  },
};

export default nextConfig;
