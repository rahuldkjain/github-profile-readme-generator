'use client';

import { useState } from 'react';
import Image from 'next/image';
import { UseFormRegister, FieldErrors, UseFormWatch, UseFormSetValue } from 'react-hook-form';
import { X, Check, Link as LinkIcon } from 'lucide-react';
import { CollapsibleSection } from '@/components/ui/collapsible-section';
import { FormCheckbox } from '@/components/forms/form-checkbox';
import { FormSelect } from '@/components/forms/form-select';
import type { GifFormData } from '@/lib/validations';
import type { GifItem } from '@/types/gifs';
import { DEFAULT_GIFS, GIF_CATEGORIES, MAX_GIFS } from '@/constants/gifs';
import { useErrorToast, useSuccessToast } from '@/components/ui/toast';

interface GifsSectionProps {
  register: UseFormRegister<GifFormData>;
  errors: FieldErrors<GifFormData>;
  watch: UseFormWatch<GifFormData>;
  setValue: UseFormSetValue<GifFormData>;
  selectedGifs: GifItem[];
  onGifSelect: (gif: GifItem) => void;
  onGifRemove: (gifId: string) => void;
  onCustomGifAdd: (url: string, name: string) => void;
  onGifUpdate: (gifId: string, updates: Partial<GifItem>) => void;
}

export function GifsSection({
  register,
  errors,
  watch,
  setValue,
  selectedGifs,
  onGifSelect,
  onGifRemove,
  onCustomGifAdd,
  onGifUpdate,
}: GifsSectionProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [customGifUrl, setCustomGifUrl] = useState('');
  const [customGifName, setCustomGifName] = useState('');
  const showError = useErrorToast();
  const showSuccess = useSuccessToast();

  const enabled = watch('enabled');
  const alignment = watch('alignment');
  const size = watch('size');
  const position = watch('position');

  const filteredGifs =
    activeCategory === 'all'
      ? DEFAULT_GIFS
      : DEFAULT_GIFS.filter((gif) => gif.category === activeCategory);

  const handleAddCustomGif = () => {
    if (!customGifUrl.trim()) {
      showError('URL required', 'Please enter a GIF URL');
      return;
    }

    if (!customGifName.trim()) {
      showError('Name required', 'Please enter a name for the GIF');
      return;
    }

    // Basic URL validation
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

  return (
    <div className="space-y-6">
      <div className="border-border border-b pb-4">
        <h2 className="text-2xl font-bold">GIFs Gallery</h2>
        <p className="text-muted-foreground mt-1 text-sm">
          Add animated GIFs to make your GitHub profile more engaging and expressive
        </p>
      </div>

      {/* Enable GIFs Toggle */}
      <div className="bg-muted/30 rounded-lg border border-border p-4">
        <FormCheckbox
          label="Enable GIFs in README"
          {...register('enabled')}
        />
        <p className="text-muted-foreground mt-2 text-sm">
          Show animated GIFs in your GitHub profile README
        </p>
      </div>

      {enabled && (
        <>
          {/* GIF Settings */}
          <CollapsibleSection title="Default GIF Settings" defaultOpen>
            <p className="text-muted-foreground mb-3 text-sm">
              Set default settings for all GIFs. You can customize each GIF individually below.
            </p>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <FormSelect
                label="Default Alignment"
                error={errors.alignment?.message}
                options={[
                  { value: 'left', label: '⬅️ Left' },
                  { value: 'center', label: '↔️ Center' },
                  { value: 'right', label: '➡️ Right' },
                ]}
                value={alignment}
                onChange={(value) => setValue('alignment', value as 'left' | 'center' | 'right')}
              />

              <FormSelect 
                label="Default Size" 
                error={errors.size?.message}
                options={[
                  { value: 'small', label: 'Small (200px)' },
                  { value: 'medium', label: 'Medium (300px)' },
                  { value: 'large', label: 'Large (400px)' },
                ]}
                value={size}
                onChange={(value) => setValue('size', value as 'small' | 'medium' | 'large')}
              />

              <FormSelect
                label="Default Position"
                error={errors.position?.message}
                options={[
                  { value: 'top', label: '🔝 Top (After title)' },
                  { value: 'middle', label: '🎯 Middle (After about)' },
                  { value: 'bottom', label: '⬇️ Bottom (End)' },
                ]}
                value={position}
                onChange={(value) => setValue('position', value as 'top' | 'middle' | 'bottom')}
              />
            </div>
          </CollapsibleSection>

          {/* Selected GIFs with Individual Controls */}
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
                        <Image
                          src={gif.url}
                          alt={gif.name}
                          width={192}
                          height={128}
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
                        <div className="mt-2">
                          <p className="text-sm font-medium truncate">{gif.name}</p>
                        </div>
                      </div>

                      {/* Individual Controls */}
                      <div className="flex-1 space-y-3">
                        <h4 className="text-sm font-semibold">GIF Settings</h4>
                        
                        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                          {/* Position */}
                          <div>
                            <label className="mb-1 block text-xs font-medium">Position</label>
                            <select
                              value={gif.position || position}
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
                              value={gif.alignment || alignment}
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
                              value={gif.size || size}
                              onChange={(e) =>
                                onGifUpdate(gif.id, {
                                  size: e.target.value as 'small' | 'medium' | 'large',
                                })
                              }
                              className="border-border bg-background w-full rounded-lg border px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                            >
                              <option value="small">Small (200px)</option>
                              <option value="medium">Medium (300px)</option>
                              <option value="large">Large (400px)</option>
                            </select>
                          </div>
                        </div>

                        {/* Position Preview Badge */}
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <span className="font-medium">Will appear:</span>
                          <span className="bg-primary/10 text-primary rounded px-2 py-1">
                            {gif.position === 'top' || (!gif.position && position === 'top')
                              ? '🔝 At the top of your README'
                              : gif.position === 'middle' || (!gif.position && position === 'middle')
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

          {/* Add GIF Methods */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {/* Built-in Gallery */}
            <CollapsibleSection title="📚 Built-in GIFs Gallery" defaultOpen>
              <div className="bg-blue-50 dark:bg-blue-950/30 border-blue-200 dark:border-blue-800 mb-4 rounded-lg border p-3">
                <p className="text-blue-900 dark:text-blue-100 text-xs">
                  💡 <strong>GIFs from Cool-GIFs-For-GitHub</strong> (MIT Licensed)
                </p>
                <p className="text-blue-800 dark:text-blue-200 mt-1 text-xs">
                  Browse 200+ more GIFs at{' '}
                  <a
                    href="https://github.com/Anmol-Baranwal/Cool-GIFs-For-GitHub"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-blue-600"
                  >
                    github.com/Anmol-Baranwal/Cool-GIFs-For-GitHub
                  </a>
                </p>
              </div>

              {/* Category Filter */}
              <div className="mb-4 flex flex-wrap gap-2">
                {GIF_CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setActiveCategory(cat.id)}
                    className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                      activeCategory === cat.id
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted text-muted-foreground hover:bg-muted/80'
                    }`}
                  >
                    {cat.icon} {cat.label}
                  </button>
                ))}
              </div>

              {/* GIF Gallery Grid */}
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
                      <Image src={gif.url} alt={gif.name} width={200} height={96} className="h-24 w-full object-cover" />
                      <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent p-2">
                        <p className="text-xs font-medium text-white">{gif.name}</p>
                      </div>
                      {isSelected && (
                        <div className="bg-primary text-primary-foreground absolute right-2 top-2 rounded-full p-1">
                          <Check className="h-3 w-3" />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {!canSelectMore && (
                <p className="text-muted-foreground mt-3 text-center text-sm">
                  Maximum {MAX_GIFS} GIFs selected. Remove a GIF to select another.
                </p>
              )}
            </CollapsibleSection>

            {/* Custom GIF URL */}
            <div className="space-y-6">
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
                    <p className="text-muted-foreground mt-1 text-xs">
                      Get more GIF URLs from{' '}
                      <a
                        href="https://github.com/Anmol-Baranwal/Cool-GIFs-For-GitHub"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary underline hover:text-primary/80"
                      >
                        Cool-GIFs-For-GitHub
                      </a>
                      {' '}(MIT Licensed)
                    </p>
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
          </div>

          {/* Error Messages */}
          {errors.selectedGifs && (
            <div className="bg-destructive/10 text-destructive rounded-lg border border-destructive/20 p-4">
              <p className="text-sm font-medium">{errors.selectedGifs.message}</p>
            </div>
          )}
        </>
      )}
    </div>
  );
}
