import type { NextConfig } from 'next';
import { PHASE_PRODUCTION_BUILD } from 'next/constants';

const nextConfig = (phase: string): NextConfig => {
  // Determine if we should use basePath (production build, not Surge preview)
  const isProductionBuild = phase === PHASE_PRODUCTION_BUILD;
  const isSurgePreview = process.env.SURGE_PREVIEW === 'true';
  const shouldUseBasePath = isProductionBuild && !isSurgePreview;
  const basePath = shouldUseBasePath ? '/github-profile-readme-generator' : '';

  return {
    // Output as static site for GitHub Pages
    output: 'export',

    // Base path for GitHub Pages (only for production builds, not Surge previews)
    basePath,

    // Asset prefix to ensure all assets use the correct path
    assetPrefix: shouldUseBasePath ? '/github-profile-readme-generator/' : '',

    // Environment variables
    env: {
      NEXT_PUBLIC_BASE_PATH: basePath,
    },

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
      removeConsole: isProductionBuild ? { exclude: ['error', 'warn'] } : false,
      // Enable React compiler optimizations
      reactRemoveProperties: isProductionBuild,
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
};

export default nextConfig;
