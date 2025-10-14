'use client';

import { useEffect, useState } from 'react';
import { Sun, Moon, Monitor } from 'lucide-react';
import { useTheme } from '@/hooks/use-theme';
import type { ThemeMode } from '@/types/theme';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch by only rendering after mount
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleToggle = () => {
    const modes: ThemeMode[] = ['light', 'dark', 'system'];
    const currentIndex = modes.indexOf(theme);
    const nextIndex = (currentIndex + 1) % modes.length;
    setTheme(modes[nextIndex]);
  };

  const getIcon = () => {
    switch (theme) {
      case 'light':
        return <Sun className="h-5 w-5" />;
      case 'dark':
        return <Moon className="h-5 w-5" />;
      case 'system':
        return <Monitor className="h-5 w-5" />;
    }
  };

  // Render a skeleton button during SSR to prevent layout shift
  if (!mounted) {
    return (
      <button
        className="border-border bg-card flex h-11 w-11 items-center justify-center rounded-lg border !p-3"
        aria-label="Toggle theme"
        title="Toggle theme"
        disabled
      >
        <Monitor className="h-5 w-5" />
      </button>
    );
  }

  return (
    <button
      onClick={handleToggle}
      className="border-border bg-card hover:bg-accent flex h-11 w-11 items-center justify-center rounded-lg border !p-3 transition-colors"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : theme === 'dark' ? 'system' : 'light'} mode`}
      title={`Current: ${theme} mode. Click to switch.`}
    >
      {getIcon()}
    </button>
  );
}
