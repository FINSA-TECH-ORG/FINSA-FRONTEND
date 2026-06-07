// import type { NextConfig } from "next";


// // 1. Grab your environment variable string safely
// const directusUrl = process.env.NEXT_PUBLIC_DIRECTUS_URL || ""

// // 2. Parse the hostname out dynamically (extracts '127.0.0.1' or 'xxxxx.ngrok-free.app')
// let dynamicHostname = '127.0.0.1';
// let dynamicProtocol = 'http';
// let dynamicPort = '8055';

// try {
//   const parsedUrl = new URL(directusUrl);
//   dynamicHostname = parsedUrl.hostname;
//   dynamicProtocol = parsedUrl.protocol.replace(':', ''); // Removes the trailing colon
//   dynamicPort = parsedUrl.port || (dynamicProtocol === 'https' ? '' : '8055');
// } catch (e) {
//   console.error("Invalid NEXT_PUBLIC_DIRECTUS_URL found in configuration:", e);
// }
// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: dynamicProtocol,
//         hostname: dynamicHostname,
//         port: dynamicPort,
//         pathname: '/assets/**',
//       },
//       // Keep this as a hardcoded local fallback just in case
//       {
//         protocol: 'http',
//         hostname: '127.0.0.1',
//         port: '8055',
//         pathname: '/assets/**',
//       }
//     ],
//   },
// };

// export default nextConfig;
import { URL } from 'url';

const directusUrl = process.env.NEXT_PUBLIC_DIRECTUS_URL;

let dynamicHostname = '';
let isHttps = false;

// Safe wrapper check protects your production builds from throwing "TypeError: Invalid URL"
if (directusUrl && directusUrl.startsWith('http')) {
  try {
    const parsedUrl = new URL(directusUrl);
    dynamicHostname = parsedUrl.hostname;
    isHttps = parsedUrl.protocol === 'https:';
  } catch (e) {
    console.error("Invalid NEXT_PUBLIC_DIRECTUS_URL structure found:", e);
  }
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      // Dynamic fallback for your backend database environment assets
      ...(dynamicHostname ? [{
        protocol: isHttps ? 'https' : 'http',
        hostname: dynamicHostname,
        port: undefined,
        pathname: '/assets/**',
      }] : []),
      
      // Local development container fallbacks
      {
        protocol: 'http',
        hostname: '127.0.0.1',
        port: '8055',
        pathname: '/assets/**',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '8055',
        pathname: '/assets/**',
      }
    ],
  },
};

export default nextConfig;