/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["api2.rotihouselao.com"],
  },
  env: {
    API_URL: "https://api2.rotihouselao.com",
  },
};

module.exports = nextConfig;
