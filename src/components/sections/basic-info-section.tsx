'use client';

import { Upload } from 'lucide-react';

import { useState, useEffect } from 'react';
import { UseFormRegister, FieldErrors, UseFormWatch } from 'react-hook-form';
import { FormInput } from '@/components/forms/form-input';
import { FormTextarea } from '@/components/forms/form-textarea';
import { FormCheckbox } from '@/components/forms/form-checkbox';
import { GitHubUsernameInput } from '@/components/forms/github-username-input';
import { CollapsibleSection } from '@/components/ui/collapsible-section';
import type { ProfileFormData, LinksFormData, SocialFormData } from '@/lib/validations';

interface BasicInfoSectionProps {
  register: UseFormRegister<ProfileFormData>;
  errors: FieldErrors<ProfileFormData>;
  socialRegister: UseFormRegister<SocialFormData>;
  watchSocial: UseFormWatch<SocialFormData>;
  onGitHubAutoFill?: (data: {
    profile: Partial<ProfileFormData>;
    links: Partial<LinksFormData>;
    social: Partial<SocialFormData>;
    skills: string[];
  }) => void;
  onImportJSON?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClearAll?: () => void;
  hasClearableData?: boolean;
}

export function BasicInfoSection({
  register,
  errors,
  socialRegister,
  watchSocial,
  onGitHubAutoFill,
  onImportJSON,
  onClearAll,
  hasClearableData = true,
}: BasicInfoSectionProps) {
  const githubUsername = watchSocial('github') || '';
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="space-y-6">
      <div className="border-border border-b pb-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold">Basic Information</h2>
            <p className="text-muted-foreground mt-1 text-sm">
              Tell us about yourself and what you do
            </p>
          </div>
          {/* Action Buttons */}
          <div className="flex items-center gap-2">
            {/* Clear All Button */}
            {onClearAll && (
              <button
                onClick={onClearAll}
                disabled={!hasClearableData}
                className={`flex items-center justify-center rounded-lg border p-3 transition-colors ${
                  hasClearableData
                    ? 'bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground border-border'
                    : 'bg-muted text-muted-foreground border-border cursor-not-allowed opacity-50'
                }`}
                title={hasClearableData ? 'Clear all data' : 'No data to clear'}
                aria-label={hasClearableData ? 'Clear all data' : 'No data to clear'}
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
                <span className="ml-2 text-sm">Clear All</span>
              </button>
            )}

            {/* Import JSON Button */}
            {onImportJSON && (
              <label className="bg-secondary text-secondary-foreground hover:bg-secondary/90 flex cursor-pointer items-center justify-center rounded-lg p-3 transition-colors">
                <Upload className="h-5 w-5" />
                <input
                  type="file"
                  accept=".json"
                  onChange={onImportJSON}
                  className="hidden"
                  title="Import profile data from JSON"
                  aria-label="Import profile data from JSON"
                />
              </label>
            )}
          </div>
        </div>
      </div>

      {/* Quick Start: GitHub Auto-fill */}
      {onGitHubAutoFill && (
        <div className="border-primary/30 bg-primary/5 rounded-lg border-2 p-4">
          <div className="mb-3 flex items-start gap-2">
            <span className="text-2xl">🚀</span>
            <div className="flex-1">
              <h3 className="text-sm font-semibold">Quick Start with GitHub</h3>
              <p className="text-muted-foreground mt-1 text-xs">
                Enter your GitHub username to automatically populate your profile with smart
                defaults
              </p>
            </div>
          </div>
          <GitHubUsernameInput
            {...socialRegister('github')}
            value={githubUsername}
            onDataFetched={onGitHubAutoFill}
          />
        </div>
      )}

      {/* Basic Fields - Always visible */}
      <div className="grid gap-6 md:grid-cols-2">
        <FormInput
          {...register('title')}
          id="title"
          label="Your Name"
          placeholder="John Doe"
          error={errors.title?.message}
          required
        />

        <FormInput
          {...register('subtitle')}
          id="subtitle"
          label="Subtitle"
          placeholder="A passionate developer"
          error={errors.subtitle?.message}
        />
      </div>

      {/* Additional Fields - Collapsible on mobile */}
      {isMobile ? (
        <div className="space-y-3">
          <CollapsibleSection title="Current Work" icon="🔭" description="What you're working on">
            <FormTextarea
              {...register('currentWork')}
              id="currentWork"
              label="I'm currently working on"
              placeholder="a MERN Stack project"
              rows={2}
              error={errors.currentWork?.message}
            />
          </CollapsibleSection>

          <CollapsibleSection title="Learning" icon="🌱" description="What you're learning">
            <FormTextarea
              {...register('currentLearn')}
              id="currentLearn"
              label="I'm currently learning"
              placeholder="GraphQL and TypeScript"
              rows={2}
              error={errors.currentLearn?.message}
            />
          </CollapsibleSection>

          <CollapsibleSection
            title="Collaboration"
            icon="👯"
            description="What you want to collaborate on"
          >
            <FormTextarea
              {...register('collaborateOn')}
              id="collaborateOn"
              label="I'm looking to collaborate on"
              placeholder="open source projects"
              rows={2}
              error={errors.collaborateOn?.message}
            />
          </CollapsibleSection>

          <CollapsibleSection title="Help Needed" icon="🤝" description="What you need help with">
            <FormTextarea
              {...register('helpWith')}
              id="helpWith"
              label="I'm looking for help with"
              placeholder="learning system design"
              rows={2}
              error={errors.helpWith?.message}
            />
          </CollapsibleSection>

          <CollapsibleSection title="Ask Me About" icon="💬" description="Your areas of expertise">
            <FormTextarea
              {...register('ama')}
              id="ama"
              label="Ask me about"
              placeholder="React, Node.js, and web development"
              rows={2}
              error={errors.ama?.message}
            />
          </CollapsibleSection>

          <CollapsibleSection title="Contact" icon="📫" description="How to reach you">
            <FormInput
              {...register('contact')}
              id="contact"
              label="How to reach me"
              type="email"
              placeholder="your.email@example.com"
              error={errors.contact?.message}
            />
          </CollapsibleSection>

          <CollapsibleSection
            title="Fun Fact"
            icon="⚡"
            description="Something interesting about you"
          >
            <FormTextarea
              {...register('funFact')}
              id="funFact"
              label="Fun fact"
              placeholder="I think I am funny"
              rows={2}
              error={errors.funFact?.message}
            />
          </CollapsibleSection>
        </div>
      ) : (
        <>
          <FormTextarea
            {...register('currentWork')}
            id="currentWork"
            label="🔭 I'm currently working on"
            placeholder="a MERN Stack project"
            rows={2}
            error={errors.currentWork?.message}
          />

          <FormTextarea
            {...register('currentLearn')}
            id="currentLearn"
            label="🌱 I'm currently learning"
            placeholder="GraphQL and TypeScript"
            rows={2}
            error={errors.currentLearn?.message}
          />

          <FormTextarea
            {...register('collaborateOn')}
            id="collaborateOn"
            label="👯 I'm looking to collaborate on"
            placeholder="open source projects"
            rows={2}
            error={errors.collaborateOn?.message}
          />

          <FormTextarea
            {...register('helpWith')}
            id="helpWith"
            label="🤝 I'm looking for help with"
            placeholder="learning system design"
            rows={2}
            error={errors.helpWith?.message}
          />

          <FormTextarea
            {...register('ama')}
            id="ama"
            label="💬 Ask me about"
            placeholder="React, Node.js, and web development"
            rows={2}
            error={errors.ama?.message}
          />

          <FormInput
            {...register('contact')}
            id="contact"
            label="📫 How to reach me"
            type="email"
            placeholder="your.email@example.com"
            error={errors.contact?.message}
          />

          <FormTextarea
            {...register('funFact')}
            id="funFact"
            label="⚡ Fun fact"
            placeholder="I think I am funny"
            rows={2}
            error={errors.funFact?.message}
          />
        </>
      )}

      {/* Profile Badge Option */}
      <div className="border-border mt-6 border-t pt-6">
        <div className="bg-accent/50 rounded-lg p-4">
          <h4 className="mb-2 flex items-center gap-2 text-sm font-semibold">
            <span>📊</span>
            <span>Profile Enhancement</span>
          </h4>
          <FormCheckbox
            {...register('visitorsBadge')}
            id="visitorsBadge"
            label="Show profile visitors counter badge"
          />
        </div>
      </div>
    </div>
  );
}
