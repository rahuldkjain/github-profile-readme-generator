'use client';

import { useEffect } from 'react';
import { useThemeStore } from '@/lib/store';
import type { ThemeMode } from '@/types/theme';

export function useTheme() {
  const { mode, resolvedTheme, setMode, setResolvedTheme } = useThemeStore();

  useEffect(() => {
    const root = document.documentElement;
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const updateTheme = () => {
      const isDark = mode === 'dark' || (mode === 'system' && mediaQuery.matches);
      const newTheme = isDark ? 'dark' : 'light';

      // Only update if theme actually changed
      if (resolvedTheme !== newTheme) {
        setResolvedTheme(newTheme);

        // Temporarily disable transitions for instant theme switch
        root.classList.add('theme-switching');

        // Use requestAnimationFrame for smoother transitions
        requestAnimationFrame(() => {
          // Remove both classes first to avoid conflicts
          root.classList.remove('dark', 'light');

          // Add the new theme class
          root.classList.add(newTheme);

          // Re-enable transitions after a short delay (matching CSS transition duration)
          setTimeout(() => {
            root.classList.remove('theme-switching');
          }, 25); // Half of 100ms for optimal timing
        });
      }
    };

    updateTheme();

    const listener = () => {
      if (mode === 'system') {
        updateTheme();
      }
    };

    mediaQuery.addEventListener('change', listener);
    return () => mediaQuery.removeEventListener('change', listener);
  }, [mode, resolvedTheme, setResolvedTheme]);

  const setTheme = (newMode: ThemeMode) => {
    setMode(newMode);
  };

  return {
    theme: mode,
    resolvedTheme,
    setTheme,
  };
}
