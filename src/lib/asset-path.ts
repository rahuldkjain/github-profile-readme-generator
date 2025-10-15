/**
 * Get the correct asset path with basePath for GitHub Pages
 * Uses NEXT_PUBLIC_BASE_PATH environment variable if set
 */

export function getAssetPath(path: string): string {
  // Ensure path starts with /
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;

  // Use NEXT_PUBLIC_BASE_PATH if set, otherwise detect based on build
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

  return `${basePath}${normalizedPath}`;
}
