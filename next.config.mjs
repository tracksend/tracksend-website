/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
      {
        protocol: "https",
        hostname: "cdn.worldvectorlogo.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/lead-generation",
        destination: "/",
        permanent: false,
      },
      {
        source: "/sms-product",
        destination: "/",
        permanent: false,
      },
      {
        source: "/video-tutorials",
        destination: "/",
        permanent: false,
      },
      {
        source: "/trackchat",
        destination: "/",
        permanent: false,
      },
      {
        source: "/landing-page",
        destination: "/",
        permanent: false,
      },
      {
        source: "/customerio",
        destination: "/",
        permanent: false,
      },
      {
        source: "/blog",
        destination: "/resources",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
