import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { ThemeMode, ResolvedTheme, AccessibilitySettings } from '@/types/theme';

interface ThemeState {
  mode: ThemeMode;
  resolvedTheme: ResolvedTheme;
  accessibility: AccessibilitySettings;
  setMode: (mode: ThemeMode) => void;
  setResolvedTheme: (theme: ResolvedTheme) => void;
  setAccessibility: (settings: Partial<AccessibilitySettings>) => void;
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      mode: 'system',
      resolvedTheme: 'light',
      accessibility: {
        highContrast: false,
        fontSize: 'medium',
        reducedMotion: false,
      },
      setMode: (mode) => set({ mode }),
      setResolvedTheme: (resolvedTheme) => set({ resolvedTheme }),
      setAccessibility: (settings) =>
        set((state) => ({
          accessibility: { ...state.accessibility, ...settings },
        })),
    }),
    {
      name: 'theme-storage',
      partialize: (state) => ({ mode: state.mode, accessibility: state.accessibility }),
    }
  )
);
