import type { NextConfig } from 'next';
import { AWS_S3_BUCKET_HOST_NAME } from './config';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: `${AWS_S3_BUCKET_HOST_NAME}`,
        port: '',
        pathname: '/**',
      },
    ],
  },
  // Ensure the SQLite file created during `pnpm run initdb` is bundled into the server output.
  // Without this, Next's output file tracing may omit `meals.db`, causing SQLITE_CANTOPEN at runtime.
  outputFileTracingIncludes: {
    '/*': ['./meals.db'],
  },
};

export default nextConfig;
