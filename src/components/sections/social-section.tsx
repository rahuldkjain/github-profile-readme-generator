'use client';

import { Info } from 'lucide-react';

import { UseFormRegister, FieldErrors, UseFormWatch } from 'react-hook-form';
import { FormInput } from '@/components/forms/form-input';
import { FormCheckbox } from '@/components/forms/form-checkbox';
import type { SocialFormData } from '@/lib/validations';

interface SocialSectionProps {
  register: UseFormRegister<SocialFormData>;
  errors: FieldErrors<SocialFormData>;
  watch: UseFormWatch<SocialFormData>;
}

export function SocialSection({ register, errors, watch }: SocialSectionProps) {
  const socialPlatforms = [
    { key: 'github', label: 'GitHub', icon: '🐙', placeholder: 'username' },
    { key: 'linkedin', label: 'LinkedIn', icon: '💼', placeholder: 'username' },
    { key: 'twitter', label: 'Twitter', icon: '🐦', placeholder: 'username' },
    { key: 'dev', label: 'Dev.to', icon: '📝', placeholder: 'username' },
    { key: 'stackoverflow', label: 'Stack Overflow', icon: '📚', placeholder: 'userid/username' },
    { key: 'medium', label: 'Medium', icon: '✍️', placeholder: '@username' },
    { key: 'youtube', label: 'YouTube', icon: '📺', placeholder: 'channel-id' },
    { key: 'instagram', label: 'Instagram', icon: '📷', placeholder: 'username' },
    { key: 'fb', label: 'Facebook', icon: '👤', placeholder: 'username' },
    { key: 'codepen', label: 'CodePen', icon: '🖊️', placeholder: 'username' },
    { key: 'codesandbox', label: 'CodeSandbox', icon: '📦', placeholder: 'username' },
    { key: 'kaggle', label: 'Kaggle', icon: '🔬', placeholder: 'username' },
    { key: 'leetcode', label: 'LeetCode', icon: '💻', placeholder: 'username' },
    { key: 'hackerrank', label: 'HackerRank', icon: '🏆', placeholder: 'username' },
    { key: 'codeforces', label: 'Codeforces', icon: '⚡', placeholder: 'username' },
    { key: 'codechef', label: 'CodeChef', icon: '👨‍🍳', placeholder: 'username' },
    { key: 'topcoder', label: 'TopCoder', icon: '🥇', placeholder: 'username' },
    { key: 'hackerearth', label: 'HackerEarth', icon: '🌍', placeholder: '@username' },
    { key: 'geeks_for_geeks', label: 'GeeksforGeeks', icon: '🤓', placeholder: 'username' },
    { key: 'dribbble', label: 'Dribbble', icon: '🎨', placeholder: 'username' },
    { key: 'behance', label: 'Behance', icon: '🎭', placeholder: 'username' },
    { key: 'discord', label: 'Discord', icon: '💬', placeholder: 'invite-code' },
    { key: 'telegram', label: 'Telegram', icon: '✈️', placeholder: '@username' },
    { key: 'rssurl', label: 'RSS Feed', icon: '📡', placeholder: 'https://...' },
  ];

  return (
    <div className="space-y-6">
      <div className="border-border border-b pb-4">
        <h2 className="text-2xl font-bold">Social Profiles</h2>
        <p className="text-muted-foreground mt-1 text-sm">
          Connect your social media and coding platforms
        </p>
      </div>

      {/* Instructions Banner */}
      <div className="border-primary/30 bg-primary/5 rounded-lg border-2 p-4">
        <div className="flex gap-3">
          <div className="flex-shrink-0">
            <svg
              className="text-primary h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div className="flex-1">
            <h4 className="mb-1 text-sm font-semibold">Enter usernames only, not full URLs</h4>
            <p className="text-muted-foreground mb-2 text-sm">
              Just provide your username or handle for each platform. We'll automatically generate
              the correct URLs.
            </p>
            <div className="text-muted-foreground space-y-1 text-xs">
              <div className="flex items-center gap-2">
                <span className="text-green-600 dark:text-green-400">✓</span>
                <span>
                  <strong>Correct:</strong> johndoe
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-red-600 dark:text-red-400">✗</span>
                <span>
                  <strong>Incorrect:</strong> https://twitter.com/johndoe
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {socialPlatforms.map(({ key, label, icon, placeholder }) => (
          <FormInput
            key={key}
            {...register(key as keyof SocialFormData)}
            id={key}
            label={`${icon} ${label}`}
            placeholder={placeholder}
            error={errors[key as keyof SocialFormData]?.message}
          />
        ))}
      </div>

      {/* Twitter Badge Option - Show always with disabled state and hint */}
      <div className="border-border mt-6 border-t pt-6">
        <div
          className={`rounded-lg p-4 transition-all ${watch('twitter') ? 'bg-accent/50' : 'bg-muted/30'}`}
        >
          <h4 className="mb-2 flex items-center gap-2 text-sm font-semibold">
            <span>🐦</span>
            <span>Twitter Enhancement</span>
          </h4>
          {!watch('twitter') && (
            <p className="text-muted-foreground mb-3 flex items-center gap-1 text-xs">
              <Info className="h-3 w-3" />
              Enter your Twitter username above to enable this feature
            </p>
          )}
          <div className={!watch('twitter') ? 'pointer-events-none opacity-50' : ''}>
            <FormCheckbox
              {...register('twitterBadge')}
              id="twitterBadge"
              label="Show Twitter follow badge on profile"
              disabled={!watch('twitter')}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
