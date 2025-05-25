/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "rankslice.com",
      },
      // Add more image domains if needed
    ],
  },
};

export default nextConfig;
