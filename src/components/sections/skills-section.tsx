'use client';

import { useState, useMemo, useEffect } from 'react';
import { Info } from 'lucide-react';
import { UseFormRegister } from 'react-hook-form';
import { FormCheckbox } from '@/components/forms/form-checkbox';
import { FormInput } from '@/components/forms/form-input';
import { Select } from '@/components/ui/select';
import { CollapsibleSection } from '@/components/ui/collapsible-section';
import { categorizedSkills, categories } from '@/constants/skills';
import { getSkillIconUrl } from '@/lib/markdown-generator';
import type { ProfileFormData } from '@/lib/validations';

interface SkillsSectionProps {
  selectedSkills: Record<string, boolean>;
  onSkillChange: (skill: string, checked: boolean) => void;
  registerProfile: UseFormRegister<ProfileFormData>;
}

export function SkillsSection({
  selectedSkills,
  onSkillChange,
  registerProfile,
}: SkillsSectionProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [isMobile, setIsMobile] = useState(false);

  // Check if we're on mobile for responsive behavior
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const selectedCount = useMemo(() => {
    return Object.values(selectedSkills).filter(Boolean).length;
  }, [selectedSkills]);

  const filteredCategories = useMemo(() => {
    if (selectedCategory !== 'all') {
      return [selectedCategory];
    }
    return categories;
  }, [selectedCategory]);

  const filterSkills = (skills: string[]) => {
    if (!searchQuery) return skills;
    return skills.filter((skill) => skill.toLowerCase().includes(searchQuery.toLowerCase()));
  };

  // Create options for the select component
  const categoryOptions = [
    { value: 'all', label: 'All Categories' },
    ...categories.map((category) => ({
      value: category,
      label: categorizedSkills[category].title,
    })),
  ];

  return (
    <div className="space-y-6">
      <div className="border-border border-b pb-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold">Skills & Technologies</h2>
            <p className="text-muted-foreground mt-1 text-sm">
              Select the skills you want to showcase ({selectedCount} selected)
            </p>
          </div>
        </div>
      </div>

      {/* Search and Filter - Stack on mobile */}
      <div className="flex flex-col gap-4 sm:grid sm:grid-cols-2">
        <FormInput
          id="skill-search"
          placeholder="Search skills..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        <Select
          value={selectedCategory}
          onChange={setSelectedCategory}
          options={categoryOptions}
          placeholder="Select category"
        />
      </div>

      {/* Skills Grid - Responsive layout */}
      <div className="space-y-6">
        {filteredCategories.map((category) => {
          const { title, skills } = categorizedSkills[category];
          const filtered = filterSkills(skills);

          if (filtered.length === 0) return null;

          const skillsGrid = (
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              {filtered.map((skill) => {
                const iconUrl = getSkillIconUrl(skill);
                const isSelected = selectedSkills[skill] || false;

                return (
                  <button
                    key={skill}
                    type="button"
                    onClick={() => onSkillChange(skill, !isSelected)}
                    className={`relative flex flex-col items-center gap-2 rounded-lg border-2 p-2 transition-all hover:scale-105 sm:p-3 ${
                      isSelected
                        ? 'border-primary bg-primary/10'
                        : 'border-border hover:border-primary/50'
                    }`}
                    aria-pressed={isSelected}
                  >
                    <img
                      src={iconUrl}
                      alt={skill}
                      className="h-8 w-8 object-contain sm:h-10 sm:w-10"
                      loading="eager"
                    />
                    <span className="text-center text-xs leading-tight capitalize">
                      {skill.replace(/_/g, ' ')}
                    </span>
                    {isSelected && (
                      <div className="bg-primary absolute top-1 right-1 h-2 w-2 rounded-full" />
                    )}
                  </button>
                );
              })}
            </div>
          );

          // On mobile, use collapsible sections for better organization
          if (isMobile && selectedCategory === 'all') {
            return (
              <CollapsibleSection
                key={category}
                title={title}
                description={`${filtered.length} skills available`}
                icon="🛠️"
                defaultOpen={filtered.some((skill) => selectedSkills[skill])}
              >
                {skillsGrid}
              </CollapsibleSection>
            );
          }

          // Desktop layout or when a specific category is selected
          return (
            <div key={category} className="space-y-4">
              <h3 className="text-lg font-semibold">{title}</h3>
              {skillsGrid}
            </div>
          );
        })}
      </div>

      {searchQuery &&
        filteredCategories.every(
          (cat) => filterSkills(categorizedSkills[cat].skills).length === 0
        ) && (
          <div className="text-muted-foreground py-8 text-center">
            <p>No skills found matching "{searchQuery}"</p>
          </div>
        )}

      {/* GitHub Stats & Badges - Mobile-friendly layout */}
      <div className="border-border mt-8 border-t pt-6">
        <div
          className={`space-y-4 rounded-lg p-4 transition-all sm:p-6 ${selectedCount > 0 ? 'bg-accent/50' : 'bg-muted/30'}`}
        >
          <div>
            <h4 className="mb-1 flex items-center gap-2 text-base font-semibold sm:text-lg">
              <span>📈</span>
              <span>GitHub Profile Enhancements</span>
            </h4>
            <p className="text-muted-foreground text-sm">
              Add visual statistics and achievements to your profile
            </p>
            {selectedCount === 0 && (
              <p className="text-muted-foreground mt-2 flex items-center gap-1 text-xs">
                <Info className="h-3 w-3" />
                Select at least one skill above to enable these enhancements
              </p>
            )}
          </div>

          {/* Mobile: Use collapsible section, Desktop: Show grid */}
          {isMobile ? (
            <CollapsibleSection
              title="Enhancement Options"
              description={`${selectedCount > 0 ? 'Available' : 'Disabled'} - Select skills first`}
              icon="⚙️"
              defaultOpen={selectedCount > 0}
            >
              <div
                className={`space-y-3 ${selectedCount === 0 ? 'pointer-events-none opacity-50' : ''}`}
              >
                <FormCheckbox
                  {...registerProfile('githubStats')}
                  id="githubStats"
                  label="GitHub Stats Card"
                  disabled={selectedCount === 0}
                />
                <FormCheckbox
                  {...registerProfile('topLanguages')}
                  id="topLanguages"
                  label="Top Languages Card"
                  disabled={selectedCount === 0}
                />
                <FormCheckbox
                  {...registerProfile('streakStats')}
                  id="streakStats"
                  label="GitHub Streak Stats"
                  disabled={selectedCount === 0}
                />
                <FormCheckbox
                  {...registerProfile('githubProfileTrophy')}
                  id="githubProfileTrophy"
                  label="GitHub Profile Trophy"
                  disabled={selectedCount === 0}
                />
              </div>
            </CollapsibleSection>
          ) : (
            <div
              className={`grid gap-3 sm:grid-cols-2 ${selectedCount === 0 ? 'pointer-events-none opacity-50' : ''}`}
            >
              <FormCheckbox
                {...registerProfile('githubStats')}
                id="githubStats"
                label="GitHub Stats Card"
                disabled={selectedCount === 0}
              />
              <FormCheckbox
                {...registerProfile('topLanguages')}
                id="topLanguages"
                label="Top Languages Card"
                disabled={selectedCount === 0}
              />
              <FormCheckbox
                {...registerProfile('streakStats')}
                id="streakStats"
                label="GitHub Streak Stats"
                disabled={selectedCount === 0}
              />
              <FormCheckbox
                {...registerProfile('githubProfileTrophy')}
                id="githubProfileTrophy"
                label="GitHub Profile Trophy"
                disabled={selectedCount === 0}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
