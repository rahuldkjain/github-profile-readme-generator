import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Output as static site for GitHub Pages
  output: 'export',

  // Base path for GitHub Pages (only in production)
  basePath: process.env.NODE_ENV === 'production' ? '/github-profile-readme-generator' : '',

  // Image optimization for static export
  images: {
    unoptimized: true, // Required for static export
  },

  // Trailing slashes for better compatibility
  trailingSlash: true,

  // Enable strict mode for better error catching
  reactStrictMode: true,

  // Enable experimental features for better performance
  experimental: {
    // Optimize CSS
    optimizeCss: true,
    // Enable optimized package imports for heavy libraries
    optimizePackageImports: [
      'framer-motion',
      '@hookform/resolvers',
      'react-markdown',
      'remark-gfm',
      'rehype-raw',
      'rehype-sanitize',
      'zod',
      'zustand',
      'lucide-react',
      '@headlessui/react',
    ],
  },

  // Compiler options for better performance
  compiler: {
    // Remove console.log in production
    removeConsole: process.env.NODE_ENV === 'production' ? { exclude: ['error', 'warn'] } : false,
    // Enable React compiler optimizations
    reactRemoveProperties: process.env.NODE_ENV === 'production',
  },

  // Optimize transpilation
  transpilePackages: ['react-markdown', 'remark-gfm', 'rehype-raw', 'rehype-sanitize'],

  // Turbopack configuration (replaces webpack config)
  turbopack: {
    // Enable faster module resolution
    resolveAlias: {
      // Optimize common imports
      '@': './src',
    },
  },

  // Webpack optimizations for development (only when not using Turbopack)
  webpack: (config, { dev, isServer }) => {
    if (dev && !isServer && !process.env.TURBOPACK) {
      // Optimize development builds
      config.optimization = {
        ...config.optimization,
        splitChunks: {
          chunks: 'all',
          cacheGroups: {
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              name: 'vendors',
              chunks: 'all',
              priority: 10,
            },
            markdown: {
              test: /[\\/]node_modules[\\/](react-markdown|remark-|rehype-)/,
              name: 'markdown',
              chunks: 'all',
              priority: 20,
            },
          },
        },
      };

      // Enable faster rebuilds
      config.cache = {
        type: 'filesystem',
        buildDependencies: {
          config: [__filename],
        },
      };
    }

    return config;
  },
};

export default nextConfig;
