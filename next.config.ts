import type { NextConfig } from "next";


// 1. Grab your environment variable string safely
const directusUrl = process.env.NEXT_PUBLIC_DIRECTUS_URL || "http://127.0.0.1:8055";

// 2. Parse the hostname out dynamically (extracts '127.0.0.1' or 'xxxxx.ngrok-free.app')
let dynamicHostname = '127.0.0.1';
let dynamicProtocol = 'http';
let dynamicPort = '8055';

try {
  const parsedUrl = new URL(directusUrl);
  dynamicHostname = parsedUrl.hostname;
  dynamicProtocol = parsedUrl.protocol.replace(':', ''); // Removes the trailing colon
  dynamicPort = parsedUrl.port || (dynamicProtocol === 'https' ? '' : '8055');
} catch (e) {
  console.error("Invalid NEXT_PUBLIC_DIRECTUS_URL found in configuration:", e);
}
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: dynamicProtocol,
        hostname: dynamicHostname,
        port: dynamicPort,
        pathname: '/assets/**',
      },
      // Keep this as a hardcoded local fallback just in case
      {
        protocol: 'http',
        hostname: '127.0.0.1',
        port: '8055',
        pathname: '/assets/**',
      }
    ],
  },
};

export default nextConfig;
