/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["fakestoreapi.com"],
  },
  env: {
    API_URL: "https://fakestoreapi.com",
  },
};

module.exports = nextConfig;
