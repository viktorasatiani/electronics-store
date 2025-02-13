import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  env: {
    APPWRITE_API_KEY: process.env.APPWRITE_API_KEY,
    APPWRITE_DATABASE_KEY: process.env.APPWRITE_DATABASE_KEY,
    APPWRITE_JOBAPPLY_COLLECTION_KEY:
      process.env.APPWRITE_JOBAPPLY_COLLECTION_KEY,
    APPWRITE_HELPMESSAGES_COLLECTION_KEY:
      process.env.APPWRITE_HELPMESSAGES_COLLECTION_KEY,

    APPWRITE_PRODUCTLIST_COLLECTION_KEY:
      process.env.APPWRITE_PRODUCTLIST_COLLECTION_KEY,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cloud.appwrite.io",

        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
