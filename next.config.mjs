const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable default image optimization
  },
  assetPrefix: isProd ? '/mani-cmd.github.io' : '',
  basePath: isProd ? '/mani-cmd.github.io' : '',
  output: 'export'
};

export default nextConfig;
