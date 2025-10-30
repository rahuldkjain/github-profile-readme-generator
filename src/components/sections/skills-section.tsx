'use client';

import { useState, useMemo, useEffect } from 'react';
import { Info, X, Check, Link as LinkIcon } from 'lucide-react';
import { UseFormRegister, FieldErrors, UseFormWatch, UseFormSetValue } from 'react-hook-form';
import { FormCheckbox } from '@/components/forms/form-checkbox';
import { FormInput } from '@/components/forms/form-input';
import { FormSelect } from '@/components/forms/form-select';
import { Select } from '@/components/ui/select';
import { CollapsibleSection } from '@/components/ui/collapsible-section';
import { categorizedSkills, categories } from '@/constants/skills';
import { getSkillIconUrl } from '@/lib/markdown-generator';
import { DEFAULT_GIFS, GIF_CATEGORIES, MAX_GIFS } from '@/constants/gifs';
import { useErrorToast, useSuccessToast } from '@/components/ui/toast';
import type { ProfileFormData, GifFormData } from '@/lib/validations';
import type { GifItem } from '@/types/gifs';

interface SkillsSectionProps {
  selectedSkills: Record<string, boolean>;
  onSkillChange: (skill: string, checked: boolean) => void;
  registerProfile: UseFormRegister<ProfileFormData>;
  // GIF-related props
  registerGifs: UseFormRegister<GifFormData>;
  errorsGifs: FieldErrors<GifFormData>;
  watchGifs: UseFormWatch<GifFormData>;
  setGifValue: UseFormSetValue<GifFormData>;
  selectedGifs: GifItem[];
  onGifSelect: (gif: GifItem) => void;
  onGifRemove: (gifId: string) => void;
  onCustomGifAdd: (url: string, name: string) => void;
  onGifUpdate: (gifId: string, updates: Partial<GifItem>) => void;
}

export function SkillsSection({
  selectedSkills,
  onSkillChange,
  registerProfile,
  registerGifs,
  errorsGifs,
  watchGifs,
  setGifValue,
  selectedGifs,
  onGifSelect,
  onGifRemove,
  onCustomGifAdd,
  onGifUpdate,
}: SkillsSectionProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [isMobile, setIsMobile] = useState(false);
  
  // GIF state
  const [activeGifCategory, setActiveGifCategory] = useState<string>('all');
  const [customGifUrl, setCustomGifUrl] = useState('');
  const [customGifName, setCustomGifName] = useState('');
  const showError = useErrorToast();
  const showSuccess = useSuccessToast();

  const gifsEnabled = watchGifs('enabled');
  const gifAlignment = watchGifs('alignment');
  const gifSize = watchGifs('size');
  const gifPosition = watchGifs('position');

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

  // GIF handlers
  const filteredGifs =
    activeGifCategory === 'all'
      ? DEFAULT_GIFS
      : DEFAULT_GIFS.filter((gif) => gif.category === activeGifCategory);

  const handleAddCustomGif = () => {
    if (!customGifUrl.trim()) {
      showError('URL required', 'Please enter a GIF URL');
      return;
    }

    if (!customGifName.trim()) {
      showError('Name required', 'Please enter a name for the GIF');
      return;
    }

    try {
      new URL(customGifUrl);
    } catch {
      showError('Invalid URL', 'Please enter a valid URL');
      return;
    }

    if (selectedGifs.length >= MAX_GIFS) {
      showError('Limit reached', `Maximum ${MAX_GIFS} GIFs allowed`);
      return;
    }

    onCustomGifAdd(customGifUrl.trim(), customGifName.trim());
    setCustomGifUrl('');
    setCustomGifName('');
    showSuccess('GIF added!', 'Custom GIF added successfully');
  };

  const isGifSelected = (gifId: string) => selectedGifs.some((g) => g.id === gifId);
  const canSelectMore = selectedGifs.length < MAX_GIFS;

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

      {/* Animated GIFs Section */}
      <div className="border-border mt-8 border-t pt-6">
        <div className="space-y-6">
          <div>
            <h4 className="mb-1 flex items-center gap-2 text-base font-semibold sm:text-lg">
              <span>🎬</span>
              <span>Animated GIFs</span>
            </h4>
            <p className="text-muted-foreground text-sm">
              Add personality to your profile with animated GIFs
            </p>
          </div>

          {/* Enable GIFs Toggle */}
          <div className="bg-muted/30 rounded-lg border border-border p-4">
            <FormCheckbox
              label="Enable animated GIFs in README"
              {...registerGifs('enabled')}
            />
            <p className="text-muted-foreground mt-2 text-sm">
              Show animated GIFs in your GitHub profile README
            </p>
          </div>

          {gifsEnabled && (
            <>
              {/* GIF Settings */}
              <CollapsibleSection title="Default GIF Settings" defaultOpen>
                <p className="text-muted-foreground mb-3 text-sm">
                  Set default settings for all GIFs. You can customize each GIF individually below.
                </p>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                  <FormSelect
                    label="Default Alignment"
                    error={errorsGifs.alignment?.message}
                    options={[
                      { value: 'left', label: '⬅️ Left' },
                      { value: 'center', label: '↔️ Center' },
                      { value: 'right', label: '➡️ Right' },
                    ]}
                    value={gifAlignment}
                    onChange={(value) => setGifValue('alignment', value as 'left' | 'center' | 'right')}
                  />

                  <FormSelect 
                    label="Default Size" 
                    error={errorsGifs.size?.message}
                    options={[
                      { value: 'small', label: 'Small (200px)' },
                      { value: 'medium', label: 'Medium (300px)' },
                      { value: 'large', label: 'Large (400px)' },
                    ]}
                    value={gifSize}
                    onChange={(value) => setGifValue('size', value as 'small' | 'medium' | 'large')}
                  />

                  <FormSelect
                    label="Default Position"
                    error={errorsGifs.position?.message}
                    options={[
                      { value: 'top', label: '🔝 Top (After title)' },
                      { value: 'middle', label: '🎯 Middle (After about)' },
                      { value: 'bottom', label: '⬇️ Bottom (End)' },
                    ]}
                    value={gifPosition}
                    onChange={(value) => setGifValue('position', value as 'top' | 'middle' | 'bottom')}
                  />
                </div>
              </CollapsibleSection>

              {/* Selected GIFs Preview */}
              {selectedGifs.length > 0 && (
                <div className="bg-muted/50 border-border rounded-lg border p-4">
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="font-semibold">
                      Selected GIFs ({selectedGifs.length}/{MAX_GIFS})
                    </h3>
                  </div>

                  <div className="space-y-4">
                    {selectedGifs.map((gif) => (
                      <div key={gif.id} className="bg-background border-border rounded-lg border p-4">
                        <div className="flex flex-col gap-4 md:flex-row">
                          {/* GIF Preview */}
                          <div className="group relative w-full md:w-48 flex-shrink-0">
                            <img
                              src={gif.url}
                              alt={gif.name}
                              className="border-primary h-32 w-full rounded-lg border-2 object-cover"
                            />
                            <button
                              type="button"
                              onClick={() => onGifRemove(gif.id)}
                              className="bg-destructive text-destructive-foreground absolute -right-2 -top-2 rounded-full p-2 opacity-0 transition-opacity group-hover:opacity-100"
                              aria-label={`Remove ${gif.name}`}
                            >
                              <X className="h-4 w-4" />
                            </button>
                            <p className="mt-2 text-sm font-medium truncate">{gif.name}</p>
                          </div>

                          {/* Individual Controls */}
                          <div className="flex-1 space-y-3">
                            <h4 className="text-sm font-semibold">Customize This GIF</h4>
                            
                            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                              {/* Position */}
                              <div>
                                <label className="mb-1 block text-xs font-medium">Position</label>
                                <select
                                  value={gif.position || gifPosition}
                                  onChange={(e) =>
                                    onGifUpdate(gif.id, {
                                      position: e.target.value as 'top' | 'middle' | 'bottom',
                                    })
                                  }
                                  className="border-border bg-background w-full rounded-lg border px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                                >
                                  <option value="top">🔝 Top (After title)</option>
                                  <option value="middle">🎯 Middle (After about)</option>
                                  <option value="bottom">⬇️ Bottom (End)</option>
                                </select>
                              </div>

                              {/* Alignment */}
                              <div>
                                <label className="mb-1 block text-xs font-medium">Alignment</label>
                                <select
                                  value={gif.alignment || gifAlignment}
                                  onChange={(e) =>
                                    onGifUpdate(gif.id, {
                                      alignment: e.target.value as 'left' | 'center' | 'right',
                                    })
                                  }
                                  className="border-border bg-background w-full rounded-lg border px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                                >
                                  <option value="left">⬅️ Left</option>
                                  <option value="center">↔️ Center</option>
                                  <option value="right">➡️ Right</option>
                                </select>
                              </div>

                              {/* Size */}
                              <div>
                                <label className="mb-1 block text-xs font-medium">Size</label>
                                <select
                                  value={gif.size || gifSize}
                                  onChange={(e) =>
                                    onGifUpdate(gif.id, {
                                      size: e.target.value as 'small' | 'medium' | 'large' | 'custom',
                                    })
                                  }
                                  className="border-border bg-background w-full rounded-lg border px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                                >
                                  <option value="small">Small (200px)</option>
                                  <option value="medium">Medium (300px)</option>
                                  <option value="large">Large (400px)</option>
                                  <option value="custom">✏️ Custom</option>
                                </select>
                              </div>
                            </div>

                            {/* Custom Size Inputs - Show only if size is custom */}
                            {(gif.size === 'custom' || (!gif.size && gifSize === 'custom')) && (
                              <div className="grid grid-cols-2 gap-3 mt-3 p-3 bg-muted/30 rounded-lg border border-border">
                                <div>
                                  <label className="mb-1 block text-xs font-medium">Width (px)</label>
                                  <input
                                    type="number"
                                    min="50"
                                    max="1000"
                                    value={gif.customWidth ?? ''}
                                    onChange={(e) => {
                                      const value = e.target.value;
                                      if (value === '') {
                                        onGifUpdate(gif.id, { customWidth: null });
                                      } else {
                                        const numValue = parseInt(value);
                                        if (!isNaN(numValue)) {
                                          onGifUpdate(gif.id, { customWidth: numValue });
                                        }
                                      }
                                    }}
                                    onBlur={(e) => {
                                      const value = e.target.value;
                                      if (value === '' || isNaN(parseInt(value))) {
                                        onGifUpdate(gif.id, { customWidth: 300 });
                                      } else {
                                        const numValue = parseInt(value);
                                        if (numValue < 50) {
                                          onGifUpdate(gif.id, { customWidth: 50 });
                                        } else if (numValue > 1000) {
                                          onGifUpdate(gif.id, { customWidth: 1000 });
                                        }
                                      }
                                    }}
                                    className="border-border bg-background w-full rounded-lg border px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                                    placeholder="300"
                                  />
                                </div>
                                <div>
                                  <label className="mb-1 block text-xs font-medium">Height (px)</label>
                                  <input
                                    type="number"
                                    min="50"
                                    max="1000"
                                    value={gif.customHeight ?? ''}
                                    onChange={(e) => {
                                      const value = e.target.value;
                                      if (value === '') {
                                        onGifUpdate(gif.id, { customHeight: null });
                                      } else {
                                        const numValue = parseInt(value);
                                        if (!isNaN(numValue)) {
                                          onGifUpdate(gif.id, { customHeight: numValue });
                                        }
                                      }
                                    }}
                                    onBlur={(e) => {
                                      const value = e.target.value;
                                      if (value === '' || isNaN(parseInt(value))) {
                                        onGifUpdate(gif.id, { customHeight: 225 });
                                      } else {
                                        const numValue = parseInt(value);
                                        if (numValue < 50) {
                                          onGifUpdate(gif.id, { customHeight: 50 });
                                        } else if (numValue > 1000) {
                                          onGifUpdate(gif.id, { customHeight: 1000 });
                                        }
                                      }
                                    }}
                                    className="border-border bg-background w-full rounded-lg border px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                                    placeholder="225"
                                  />
                                </div>
                                <p className="col-span-2 text-xs text-muted-foreground">
                                  💡 Range: 50-1000px
                                </p>
                              </div>
                            )}

                            {/* Position Preview Badge */}
                            <div className="flex items-center gap-2 text-xs text-muted-foreground">
                              <span className="font-medium">Will appear:</span>
                              <span className="bg-primary/10 text-primary rounded px-2 py-1">
                                {gif.position === 'top' || (!gif.position && gifPosition === 'top')
                                  ? '🔝 At the top of your README'
                                  : gif.position === 'middle' || (!gif.position && gifPosition === 'middle')
                                    ? '🎯 In the middle section'
                                    : '⬇️ At the bottom of your README'}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* GIF Gallery & Custom URL */}
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                {/* Built-in Gallery */}
                <CollapsibleSection title="📚 Built-in GIFs Gallery" defaultOpen>
                  {/* Category Filter */}
                  <div className="mb-4 flex flex-wrap gap-2">
                    {GIF_CATEGORIES.map((cat) => (
                      <button
                        key={cat.id}
                        type="button"
                        onClick={() => setActiveGifCategory(cat.id)}
                        className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
                          activeGifCategory === cat.id
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-muted text-muted-foreground hover:bg-muted/80'
                        }`}
                      >
                        {cat.icon} {cat.label}
                      </button>
                    ))}
                  </div>

                  {/* GIF Gallery Grid - Scrollable with theme-aware scrollbar */}
                  <div className="gif-gallery-scroll max-h-96 overflow-y-auto pr-2 -mr-2">
                    <div className="grid grid-cols-2 gap-3">
                      {filteredGifs.map((gif) => {
                        const isSelected = isGifSelected(gif.id);
                        const canSelect = canSelectMore || isSelected;

                        return (
                          <div
                            key={gif.id}
                            onClick={() => canSelect && !isSelected && onGifSelect(gif)}
                            className={`relative cursor-pointer overflow-hidden rounded-lg border-2 transition-all ${
                              isSelected
                                ? 'border-primary ring-primary/20 ring-2'
                                : canSelect
                                  ? 'border-border hover:border-primary/50'
                                  : 'border-border cursor-not-allowed opacity-50'
                            }`}
                          >
                            <img src={gif.url} alt={gif.name} className="h-20 w-full object-cover" />
                            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent p-2">
                              <p className="text-xs font-medium text-white">{gif.name}</p>
                            </div>
                            {isSelected && (
                              <div className="bg-primary text-primary-foreground absolute right-1 top-1 rounded-full p-1">
                                <Check className="h-3 w-3" />
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {!canSelectMore && (
                    <p className="text-muted-foreground mt-3 text-center text-sm">
                      Maximum {MAX_GIFS} GIFs selected. Remove a GIF to select another.
                    </p>
                  )}
                </CollapsibleSection>

                {/* Custom GIF URL */}
                <CollapsibleSection title="🔗 Add Custom GIF (URL)" defaultOpen>
                  <div className="space-y-4">
                    <div>
                      <label className="mb-2 block text-sm font-medium">GIF URL</label>
                      <input
                        type="url"
                        value={customGifUrl}
                        onChange={(e) => setCustomGifUrl(e.target.value)}
                        placeholder="https://user-images.githubusercontent.com/74038190/..."
                        className="border-border bg-background w-full rounded-lg border px-3 py-2 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-medium">GIF Name</label>
                      <input
                        type="text"
                        value={customGifName}
                        onChange={(e) => setCustomGifName(e.target.value)}
                        placeholder="My Awesome GIF"
                        className="border-border bg-background w-full rounded-lg border px-3 py-2 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                      />
                    </div>

                    <button
                      type="button"
                      onClick={handleAddCustomGif}
                      disabled={!customGifUrl || !customGifName || !canSelectMore}
                      className="bg-primary text-primary-foreground hover:bg-primary/90 disabled:bg-muted disabled:text-muted-foreground flex w-full items-center justify-center gap-2 rounded-lg px-4 py-2 font-medium transition-colors disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <LinkIcon className="h-4 w-4" />
                      Add Custom GIF
                    </button>
                  </div>
                </CollapsibleSection>
              </div>

              {/* Error Messages */}
              {errorsGifs.selectedGifs && (
                <div className="bg-destructive/10 text-destructive rounded-lg border border-destructive/20 p-4">
                  <p className="text-sm font-medium">{errorsGifs.selectedGifs.message}</p>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
