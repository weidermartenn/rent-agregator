import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  allowedDevOrigins: ['192.168.31.22'],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "bcmlcfdtpugrfvbkbylr.supabase.co",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
