'use client';

import { useState } from 'react';
import { Settings } from 'lucide-react';
import { Select } from '@/components/ui/select';
import { useThemeStore } from '@/lib/store';

export function AccessibilityMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const { accessibility, setAccessibility } = useThemeStore();

  // Font size options for the select component
  const fontSizeOptions = [
    { value: 'small', label: 'Small' },
    { value: 'medium', label: 'Medium (Default)' },
    { value: 'large', label: 'Large' },
  ];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="border-border bg-card hover:bg-accent flex h-11 w-11 items-center justify-center rounded-lg border !p-3 transition-colors"
        aria-label="Accessibility settings"
        title="Accessibility settings"
        aria-expanded={isOpen}
      >
        <Settings className="h-5 w-5" />
      </button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} aria-hidden="true" />

          {/* Menu */}
          <div className="border-border bg-card absolute top-full right-0 z-50 mt-2 w-72 rounded-lg border p-4 shadow-lg">
            <h3 className="mb-4 text-sm font-semibold">Accessibility Settings</h3>

            <div className="space-y-4">
              {/* High Contrast */}
              <label className="flex cursor-pointer items-center justify-between">
                <span className="text-sm">High Contrast Mode</span>
                <input
                  type="checkbox"
                  checked={accessibility.highContrast}
                  onChange={(e) => setAccessibility({ highContrast: e.target.checked })}
                  className="border-border bg-input text-primary focus:ring-ring h-4 w-4 rounded focus:ring-2"
                />
              </label>

              {/* Font Size */}
              <div className="space-y-2">
                <Select
                  label="Font Size"
                  value={accessibility.fontSize}
                  onChange={(value) =>
                    setAccessibility({ fontSize: value as 'small' | 'medium' | 'large' })
                  }
                  options={fontSizeOptions}
                  id="fontSize"
                />
              </div>

              {/* Reduced Motion */}
              <label className="flex cursor-pointer items-center justify-between">
                <span className="text-sm">Reduce Motion</span>
                <input
                  type="checkbox"
                  checked={accessibility.reducedMotion}
                  onChange={(e) => setAccessibility({ reducedMotion: e.target.checked })}
                  className="border-border bg-input text-primary focus:ring-ring h-4 w-4 rounded focus:ring-2"
                />
              </label>
            </div>

            <p className="border-border text-muted-foreground mt-4 border-t pt-3 text-xs">
              These settings are saved locally and persist across sessions.
            </p>
          </div>
        </>
      )}
    </div>
  );
}
