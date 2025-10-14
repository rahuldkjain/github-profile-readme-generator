'use client';

import { forwardRef } from 'react';
import {
  fetchGitHubUser,
  mapLanguageToSkills,
  generateSmartSubtitle,
  type GitHubApiError,
} from '@/lib/github-api';
import { useErrorToast, useToast } from '@/components/ui/toast';
import { trackGitHubAutofill } from '@/lib/analytics';
import type { ProfileFormData, LinksFormData, SocialFormData } from '@/lib/validations';

interface GitHubUsernameInputProps {
  value: string;
  name?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onDataFetched?: (data: {
    profile: Partial<ProfileFormData>;
    links: Partial<LinksFormData>;
    social: Partial<SocialFormData>;
    skills: string[];
  }) => void;
}

export const GitHubUsernameInput = forwardRef<HTMLInputElement, GitHubUsernameInputProps>(
  function GitHubUsernameInput({ value, name, onChange, onBlur, onDataFetched }, ref) {
    const errorToast = useErrorToast();
    const { promise } = useToast();

    const handleFetch = async () => {
      if (!value.trim()) {
        errorToast('Please enter a GitHub username');
        return;
      }

      // Track GitHub auto-fill usage
      trackGitHubAutofill(value.trim());

      try {
        const userData = await promise(fetchGitHubUser(value.trim()), {
          loading: `Fetching data for ${value.trim()}...`,
          success: (data) => `Successfully loaded ${data?.name || value.trim()}'s profile!`,
          error: (error: GitHubApiError) => error.message,
        });

        if (!userData) {
          errorToast('Unable to fetch user data', 'Please check the username and try again.');
          return;
        }

        // Map GitHub data to form data
        const suggestedSkills: string[] = [];
        userData.topLanguages.forEach((lang) => {
          suggestedSkills.push(...mapLanguageToSkills(lang));
        });

        if (onDataFetched) {
          onDataFetched({
            profile: {
              title: userData.name,
              subtitle: generateSmartSubtitle(userData),
            },
            links: {
              blog: userData.blog,
            },
            social: {
              github: userData.username,
              twitter: userData.twitter,
            },
            skills: [...new Set(suggestedSkills)], // Remove duplicates
          });
        }
      } catch (error) {
        const apiError = error as GitHubApiError;

        // Handle rate limit errors with retry action
        if (apiError.type === 'rate_limit') {
          errorToast(
            'GitHub API Rate Limit Exceeded',
            apiError.message,
            apiError.retryAfter
              ? {
                  label: `Retry in ${apiError.retryAfter}m`,
                  onClick: () => {
                    setTimeout(() => handleFetch(), apiError.retryAfter! * 60 * 1000);
                  },
                }
              : undefined
          );
        } else {
          // For other errors, show retry action
          errorToast('Failed to fetch GitHub data', apiError.message, {
            label: 'Retry',
            onClick: handleFetch,
          });
        }
      }
    };

    return (
      <div className="space-y-3">
        {/* Mobile: Stack vertically, Desktop: Side by side */}
        <div className="flex flex-col gap-2 sm:flex-row">
          <input
            ref={ref}
            type="text"
            name={name}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            placeholder="Enter GitHub username"
            className="border-border bg-input focus:border-ring focus:ring-ring w-full rounded-lg border px-3 py-2 text-sm focus:ring-2 focus:outline-none sm:flex-1"
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
                handleFetch();
              }
            }}
          />
          <button
            onClick={handleFetch}
            className="bg-primary text-primary-foreground hover:bg-primary/90 w-full rounded-lg px-4 py-2 text-sm font-medium transition-colors sm:w-auto sm:whitespace-nowrap"
            aria-label="Auto-fill from GitHub profile"
          >
            ✨ Auto-fill
          </button>
        </div>

        <p className="text-muted-foreground text-xs">
          Enter your GitHub username and click "Auto-fill" to populate fields with your profile data
          and suggest relevant skills.
        </p>
      </div>
    );
  }
);
