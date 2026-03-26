import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
        port: "",
        pathname: "/**",
      },
    ],
  },

  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Cross-Origin-Opener-Policy",
            value: "same-origin",
          },
          {
            key: "Cross-Origin-Embedder-Policy",
            value: "require-corp",
          },
        ],
      },
    ];
  },

  reactStrictMode: false,

  // Silence the "webpack config but no turbopack config" error
  turbopack: {},

  // Exclude template files from NFT static analysis
  outputFileTracingExcludes: {
    "*": ["./vibecode-starters/**/*"],
  },

  // Copy template files into production output without parsing them
  outputFileTracingIncludes: {
    "/api/templates/**": ["./vibecode-starters/**/*"],
  },
};

export default nextConfig;
