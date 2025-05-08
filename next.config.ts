const isProd = process.env.NODE_ENV === 'production';

import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  // create static files for GH pages
  // the default is to use Node
  output: "export",
  reactStrictMode: true,
  basePath: isProd ? "/nany-d.github.io" : ""
};

export default nextConfig;
