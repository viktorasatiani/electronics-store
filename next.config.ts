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
    APPWRITE_COMPUTERS_COLLECTION_KEY:
      process.env.APPWRITE_COMPUTERS_COLLECTION_KEY,
    APPWRITE_TABLETS_COLLECTION_KEY:
      process.env.APPWRITE_TABLETS_COLLECTION_KEY,
    APPWRITE_DRONES_COLLECTION_KEY: process.env.APPWRITE_DRONES_COLLECTION_KEY,
    APPWRITE_HEADPHONES_COLLECTION_KEY:
      process.env.APPWRITE_HEADPHONES_COLLECTION_KEY,
    APPWRITE_MOBILES_COLLECTION_KEY:
      process.env.APPWRITE_MOBILES_COLLECTION_KEY,
    APPWRITE_SPEAKERS_COLLECTION_KEY:
      process.env.APPWRITE_SPEAKERS_COLLECTION_KEY,
    APPWRITE_TVCINEMAS_COLLECTION_KEY:
      process.env.APPWRITE_TVCINEMAS_COLLECTION_KEY,
    APPWRITE_WEARABLES_COLLECTION_KEY:
      process.env.APPWRITE_WEARABLES_COLLECTION_KEY,
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
