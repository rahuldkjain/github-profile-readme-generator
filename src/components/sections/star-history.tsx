'use client';

import { useState, useEffect } from 'react';
import { UseFormRegister, UseFormWatch, UseFormSetValue } from 'react-hook-form';
import { FormCheckbox } from '@/components/forms/form-checkbox';
import { FormInput } from '@/components/forms/form-input';
import type { ProfileFormData } from '@/lib/validations';
import { generateStarHistoryURL, parseRepos, validateRepos } from '@/lib/star-history';

interface StarHistoryProps {
  register: UseFormRegister<ProfileFormData>;
  watch: UseFormWatch<ProfileFormData>;
  setValue: UseFormSetValue<ProfileFormData>;
}


export function StarHistory({ register, watch, setValue }: StarHistoryProps) {
  const [reposInput, setReposInput] = useState<string>('');
  const [previewUrl, setPreviewUrl] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [errors, setErrors] = useState<string[]>([]);

  // Watch form values
  const starHistoryEnabled = watch('starHistory');
  const starHistoryConfig = watch('starHistoryConfig');
  const repos = starHistoryConfig?.repos || [];
  const chartType = starHistoryConfig?.chartType || 'Date';
  const theme = starHistoryConfig?.theme || 'auto';

  // Initialize repos input only once when component mounts or repos change from empty
  useEffect(() => {
    // Only set reposInput if it's empty and we have repos
    if (repos.length > 0 && reposInput === '') {
      setReposInput(repos.join(', '));
    }
  }, [repos]); // Intentionally exclude reposInput from dependencies to prevent infinite loops when updating its value; note this creates a hidden dependency issue if reposInput changes independently.

  // Update preview when config changes
  const updatePreview = useCallback(() => {
    // ...original updatePreview logic here...
  }, [repos, chartType, theme]);

  useEffect(() => {
    updatePreview();
  }, [updatePreview]);

  // Add this useEffect to sync the states
  useEffect(() => {
  const configEnabled = configData?.enabled;
  
  // If they're out of sync, fix it
  if (mainEnabled !== configEnabled) {
    setValue('starHistoryConfig.enabled', mainEnabled, { shouldValidate: true });
  }
  }, [watch('starHistory'), configData?.enabled, setValue]);

  const updatePreview = async () => {
    if (!starHistoryEnabled || repos.length === 0) {
      setPreviewUrl('');
      return;
    }

    setLoading(true);
    try {
      const effectiveTheme = theme === 'auto' ? 'light' : theme;
      const url = generateStarHistoryURL({
        repos: repos,
        type: chartType,
        theme: effectiveTheme as 'light' | 'dark'
      });
      setPreviewUrl(url);
    } catch (error) {
      console.error('Error generating preview:', error);
      setErrors(['Failed to generate preview']);
    } finally {
      setLoading(false);
    }
  };

  const handleReposChange = (value: string) => {
    setReposInput(value);
    
    // Parse repositories
    const parsedRepos = parseRepos(value);
    
    // Validate
    const validation = validateRepos(parsedRepos);
    setErrors(validation.errors);
    
    if (validation.valid) {
      setValue('starHistoryConfig.repos', parsedRepos, { shouldValidate: true });
    }
    else {
      // Clear repos if invalid
      setValue('starHistoryConfig.repos', [], { shouldValidate: true });
    }
  };

  const handleChartTypeChange = (type: 'Date' | 'Timeline') => {
    setValue('starHistoryConfig.chartType', type, { shouldValidate: true });
  };

  const handleThemeChange = (theme: 'light' | 'dark' | 'auto') => {
    setValue('starHistoryConfig.theme', theme, { shouldValidate: true });
  };

  return (
    <div className="border-border mt-6 border-t pt-6">
      <div className={`rounded-lg p-4 transition-all ${starHistoryEnabled ? 'bg-accent/50' : 'bg-muted/30'}`}>
        <h4 className="mb-2 flex items-center gap-2 text-sm font-semibold">
          <span>⭐</span>
          <span>Star History Charts</span>
        </h4>
        
        <FormCheckbox
          {...register('starHistory')}
          id="starHistory"
          label="Show Star History chart on profile"
        />

        {starHistoryEnabled && (
          <div className="mt-4 space-y-4">
            {/* Repositories Input */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Repositories (comma-separated):
              </label>
              <FormInput
                id="starHistoryRepos"
                value={reposInput}
                onChange={(e) => handleReposChange(e.target.value)}
                placeholder="facebook/react, vuejs/vue, microsoft/vscode"
                helperText="💡 Enter repositories in 'owner/repo' format. Example: facebook/react, vuejs/vue"
              />
              {errors.length > 0 && (
                <div className="text-red-500 text-xs mt-2 space-y-1">
                  {errors.map((error, index) => (
                    <div key={index}>• {error}</div>
                  ))}
                </div>
              )}
            </div>

            {/* Chart Type */}
            <div>
              <label className="block text-sm font-medium mb-2">Chart Type:</label>
              <div className="flex flex-wrap gap-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="chartType"
                    value="Date"
                    checked={chartType === 'Date'}
                    onChange={() => handleChartTypeChange('Date')}
                    className="mr-2"
                  />
                  Date
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="chartType"
                    value="Timeline"
                    checked={chartType === 'Timeline'}
                    onChange={() => handleChartTypeChange('Timeline')}
                    className="mr-2"
                  />
                  Timeline
                </label>
              </div>
            </div>

            {/* Theme */}
            <div>
              <label className="block text-sm font-medium mb-2">Theme:</label>
              <div className="flex flex-wrap gap-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="theme"
                    value="light"
                    checked={theme === 'light'}
                    onChange={() => handleThemeChange('light')}
                    className="mr-2"
                  />
                  Light
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="theme"
                    value="dark"
                    checked={theme === 'dark'}
                    onChange={() => handleThemeChange('dark')}
                    className="mr-2"
                  />
                  Dark
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="theme"
                    value="auto"
                    checked={theme === 'auto'}
                    onChange={() => handleThemeChange('auto')}
                    className="mr-2"
                  />
                  Auto (match profile)
                </label>
              </div>
            </div>

            {/* Preview */}
            <div>
              <label className="block text-sm font-medium mb-2">Preview:</label>
              <div className="border rounded p-4 bg-gray-50 dark:bg-gray-900 min-h-[200px] flex items-center justify-center">
                {loading ? (
                  <div className="text-gray-500">Loading preview...</div>
                ) : previewUrl ? (
                  <img 
                    src={previewUrl} 
                    alt="Star History Preview" 
                    className="max-w-full h-auto"
                    onError={() => setErrors(['Failed to load preview. Check repository names.'])}
                  />
                ) : (
                  <div className="text-gray-500">Enter repositories to see preview</div>
                )}
              </div>
            </div>

            {/* Help Text */}
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded p-3">
              <p className="text-blue-800 dark:text-blue-300 text-sm">
                <strong>Tip:</strong> The Star History chart shows the growth of GitHub stars over time. 
                Perfect for showcasing project popularity and growth trends.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}