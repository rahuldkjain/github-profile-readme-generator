'use client';

import { useEffect, useState } from 'react';
import { useTheme } from '@/hooks/use-theme';
import { useThemeStore } from '@/lib/store';

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);
  const { accessibility } = useThemeStore();
  useTheme(); // Initialize theme

  useEffect(() => {
    setMounted(true);
  }, []);

  // Apply accessibility settings to document
  useEffect(() => {
    if (!mounted) return;

    const root = document.documentElement;

    // High contrast mode
    if (accessibility.highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }

    // Font size
    root.classList.remove('text-small', 'text-large');
    if (accessibility.fontSize === 'small') {
      root.classList.add('text-small');
    } else if (accessibility.fontSize === 'large') {
      root.classList.add('text-large');
    }

    // Reduced motion (already handled by CSS)
    if (accessibility.reducedMotion) {
      root.style.setProperty('--motion-reduce', '1');
    } else {
      root.style.removeProperty('--motion-reduce');
    }
  }, [mounted, accessibility]);

  // Prevent flash of unstyled content
  if (!mounted) {
    return <div style={{ visibility: 'hidden' }}>{children}</div>;
  }

  return <>{children}</>;
}
