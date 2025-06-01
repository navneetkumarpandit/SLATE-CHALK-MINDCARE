
import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true, // Keep existing setting, but be aware of implications
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true, // Keep existing setting
  },
  images: {
    // Configure allowed remote image domains and local serving
    remotePatterns: [

      {
        protocol: 'https',
        hostname: 'picsum.photos',
        pathname: '**', // Allowing any path on picsum.photos
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        pathname: '/seed/**' // Allowing images from the /seed path on picsum.photos
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        pathname: '/seed/aboutstory/600/450' // Allowing images from the /seed path on picsum.photos
      },
       // Add localhost if you serve uploaded images locally during development
       // Note: For production, use a proper CDN or cloud storage and add its hostname.
      // {
      //   protocol: 'http',
      //   hostname: 'localhost',
      //   port: process.env.PORT || '9002', // Match your dev server port
      //   pathname: '/uploads/blog/**', // Allow images from your upload folder
      // },
    ],
     // Allow serving images directly from the public folder if needed, though remotePatterns is preferred
     // domains: ['localhost'], // Alternative/older way, less specific than remotePatterns
    domains: ['picsum.photos'],
  },
   // No specific API configuration needed by default for App Router Route Handlers
   // Ensure environment variables like NEXT_PUBLIC_APP_URL, ADMIN_EMAIL, ADMIN_PASSWORD
   // are accessible (e.g., defined in .env.local)
};

export default nextConfig;
