import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  env: {
    APPWRITE_API_KEY: process.env.APPWRITE_API_KEY,
    APPWRITE_DATABASE_KEY: process.env.APPWRITE_DATABASE_KEY,
    APPWRITE_JOBAPPLY_COLLECTION_KEY:
      process.env.APPWRITE_JOBAPPLY_COLLECTION_KEY,
  },
};

export default nextConfig;
