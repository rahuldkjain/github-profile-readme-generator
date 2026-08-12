'use client';

import { useState, useEffect, useMemo, lazy, Suspense, useCallback, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Eye, EyeOff, Maximize2, Minimize2 } from 'lucide-react';
import { profileSchema, linksSchema, socialSchema } from '@/lib/validations';
import { DEFAULT_DATA, DEFAULT_LINK, DEFAULT_SOCIAL } from '@/constants/defaults';
import { initialSkillState } from '@/constants/skills';
import { BasicInfoSection } from '@/components/sections/basic-info-section';
import { LinksSection } from '@/components/sections/links-section';
import { SocialSection } from '@/components/sections/social-section';
import { generateMarkdown } from '@/lib/markdown-generator';
import { saveFormData, loadFormData, clearFormData } from '@/lib/storage';
import type { ProfileFormData, LinksFormData, SocialFormData } from '@/lib/validations';
import { DEFAULT_SUPPORT } from '@/constants/defaults';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { useErrorToast, useSuccessToast } from '@/components/ui/toast';
import { trackReadmeGenerated, trackFileExported } from '@/lib/analytics';
import { useConfirmDialog } from '@/components/ui/confirm-dialog';

// Lazy load heavy components
const SkillsSection = lazy(() =>
  import('@/components/sections/skills-section').then((module) => ({
    default: module.SkillsSection,
  }))
);
const MarkdownPreview = lazy(() =>
  import('@/components/ui/markdown-preview').then((module) => ({ default: module.MarkdownPreview }))
);
// Mini preview is lighter, used in side panel
import { MiniMarkdownPreview } from '@/components/ui/markdown-preview';

type Step = 'basic' | 'links' | 'social' | 'skills' | 'preview';

const steps: { id: Step; title: string; description: string }[] = [
  { id: 'basic', title: 'Basic Info', description: 'Tell us about yourself' },
  { id: 'links', title: 'Links', description: 'Portfolio, blog, resume' },
  { id: 'social', title: 'Social', description: 'Social media profiles' },
  { id: 'skills', title: 'Skills', description: 'Technologies you know' },
  { id: 'preview', title: 'Preview', description: 'Review and generate' },
];

export default function GeneratorPage() {
  // Toast hooks
  const showError = useErrorToast();
  const showSuccess = useSuccessToast();
  const { showConfirm, ConfirmDialog } = useConfirmDialog();
  // Load saved data FIRST before any state initialization
  const savedData = useMemo(() => {
    if (typeof window === 'undefined') return null;
    const data = loadFormData();
    console.log('🎯 Initial load - Saved data:', data);
    return data;
  }, []); // Empty deps - only run once on mount

  const [currentStep, setCurrentStep] = useState<Step>('basic');
  const [skills, setSkills] = useState(() => {
    // Lazy initialization - use saved skills if available
    const initialSkills = savedData?.skills || initialSkillState;
    console.log(
      '🎯 Initial skills state:',
      Object.values(initialSkills).filter(Boolean).length,
      'selected'
    );
    return initialSkills;
  });
  const [lastSaved, setLastSaved] = useState<Date | null>(() => {
    if (savedData?.lastSaved) {
      return new Date(savedData.lastSaved);
    }
    return null;
  });
  const [saveStatus, setSaveStatus] = useState<'idle' | 'saving' | 'saved'>('idle');
  const [hasInitialized, setHasInitialized] = useState(false);
  // Live preview state
  const [showLivePreview, setShowLivePreview] = useState(true);
  const [isPreviewExpanded, setIsPreviewExpanded] = useState(false);
  const previewScrollRef = useRef<HTMLDivElement>(null);

  const {
    register: registerProfile,
    formState: { errors: profileErrors },
    watch: watchProfile,
    reset: resetProfile,
    trigger: triggerProfile,
  } = useForm<ProfileFormData>({
    resolver: zodResolver(profileSchema),
    defaultValues: savedData?.profile ? { ...DEFAULT_DATA, ...savedData.profile } : DEFAULT_DATA,
    mode: 'onChange',
  });

  const {
    register: registerLinks,
    formState: { errors: linksErrors },
    watch: watchLinks,
    reset: resetLinks,
    trigger: triggerLinks,
  } = useForm<LinksFormData>({
    resolver: zodResolver(linksSchema),
    defaultValues: savedData?.links ? { ...DEFAULT_LINK, ...savedData.links } : DEFAULT_LINK,
    mode: 'onChange',
  });

  const {
    register: registerSocial,
    formState: { errors: socialErrors },
    watch: watchSocial,
    reset: resetSocial,
    trigger: triggerSocial,
  } = useForm<SocialFormData>({
    resolver: zodResolver(socialSchema),
    defaultValues: savedData?.social ? { ...DEFAULT_SOCIAL, ...savedData.social } : DEFAULT_SOCIAL,
    mode: 'onChange',
  });

  // Watch all form values for live preview
  const profileData = watchProfile();
  const linksData = watchLinks();
  const socialData = watchSocial();

  // Debounced markdown generation for live preview performance
  const [debouncedMarkdown, setDebouncedMarkdown] = useState('');
  const markdown = useMemo(() => {
    return generateMarkdown({
      profile: profileData,
      links: linksData,
      social: socialData,
      support: DEFAULT_SUPPORT,
      skills,
    });
  }, [profileData, linksData, socialData, skills]);

  // Debounce markdown updates (150ms delay)
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedMarkdown(markdown);
    }, 150);
    return () => clearTimeout(timer);
  }, [markdown]);

  // Mark as initialized after first render to enable auto-save
  useEffect(() => {
    console.log('🔍 Mount - Data already loaded in initialization');
    if (savedData) {
      console.log('✅ Mount - Restored from localStorage automatically');
    } else {
      console.log('🆕 Mount - Starting fresh (no saved data)');
    }

    // Set initialized to true after a brief delay to ensure forms are fully set up
    const timer = setTimeout(() => {
      console.log('🎬 Initialization complete - Auto-save now enabled');
      setHasInitialized(true);
    }, 100);

    return () => clearTimeout(timer);
  }, [savedData]);

  // Auto-save form data - only after initialization complete
  useEffect(() => {
    // Skip until initialization is complete
    if (!hasInitialized) {
      console.log('⏭️ Auto-save - Waiting for initialization to complete');
      return;
    }

    console.log('💾 Auto-save - Starting...');
    console.log('📊 Auto-save - Profile data:', profileData);
    console.log('📊 Auto-save - Links data:', linksData);
    console.log('📊 Auto-save - Social data:', socialData);
    console.log('📊 Auto-save - Skills selected:', Object.values(skills).filter(Boolean).length);

    setSaveStatus('saving');
    const timer = setTimeout(() => {
      const now = new Date();
      const dataToSave = {
        profile: profileData,
        links: linksData,
        social: socialData,
        support: DEFAULT_SUPPORT,
        skills,
        lastSaved: now.toISOString(),
      };

      console.log('💾 Auto-save - Saving to localStorage:', dataToSave);
      saveFormData(dataToSave);

      // Verify it was saved
      const savedDataCheck = localStorage.getItem('github-profile-generator');
      console.log('✅ Auto-save - Verified in localStorage:', savedDataCheck ? 'YES' : 'NO');
      console.log('📏 Auto-save - Data size:', savedDataCheck?.length || 0, 'bytes');

      setLastSaved(now);
      setSaveStatus('saved');

      // Reset to idle after animation
      setTimeout(() => setSaveStatus('idle'), 2000);
    }, 1000); // Save 1 second after last change

    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    hasInitialized,
    JSON.stringify(profileData),
    JSON.stringify(linksData),
    JSON.stringify(socialData),
    JSON.stringify(skills),
  ]);

  const handleSkillChange = (skill: string, checked: boolean) => {
    setSkills((prev) => ({ ...prev, [skill]: checked }));
  };

  const handleGitHubAutoFill = (data: {
    profile: Partial<ProfileFormData>;
    links: Partial<LinksFormData>;
    social: Partial<SocialFormData>;
    skills: string[];
  }) => {
    // Update profile data
    if (data.profile.title) {
      resetProfile((prev) => ({ ...prev, ...data.profile }));
    }

    // Update links data
    if (data.links.blog) {
      resetLinks((prev) => ({ ...prev, ...data.links }));
    }

    // Update social data
    if (data.social.github || data.social.twitter) {
      resetSocial((prev) => ({ ...prev, ...data.social }));
    }

    // Update skills
    if (data.skills.length > 0) {
      const newSkills = { ...skills };
      data.skills.forEach((skill) => {
        if (skill in newSkills) {
          newSkills[skill] = true;
        }
      });
      setSkills(newSkills);
    }
  };

  // Restore is now automatic on mount, but keep this for manual restore if needed
  // This function is no longer needed but kept for backwards compatibility

  // Check if there's any meaningful data to clear
  const hasAnyData = useMemo(() => {
    // Check profile data (excluding empty strings)
    const hasProfileData = Object.entries(profileData).some(([key, value]) => {
      if (key === 'subtitle' && value === '') return false; // Empty subtitle is now default
      return typeof value === 'string' ? value.trim() !== '' : value !== false && value !== null;
    });

    // Check links data
    const hasLinksData = Object.values(linksData).some((value) => value && value.trim() !== '');

    // Check social data
    const hasSocialData = Object.values(socialData).some((value) =>
      typeof value === 'string' ? value.trim() !== '' : value === true
    );

    // Check skills data
    const hasSkillsData = Object.values(skills).some((selected) => selected === true);

    return hasProfileData || hasLinksData || hasSocialData || hasSkillsData;
  }, [profileData, linksData, socialData, skills]);

  const handleClearAll = useCallback(() => {
    showConfirm({
      title: 'Clear All Data',
      message:
        'Are you sure you want to clear all data? This will reset all form fields, skills, and settings. This action cannot be undone.',
      confirmText: 'Clear All',
      cancelText: 'Cancel',
      variant: 'warning',
      onConfirm: () => {
        clearFormData();
        resetProfile(DEFAULT_DATA);
        resetLinks(DEFAULT_LINK);
        resetSocial(DEFAULT_SOCIAL);
        setSkills(initialSkillState);
        setLastSaved(null);
        setSaveStatus('idle');
        showSuccess('All data cleared successfully', 'Form has been reset to default values');
      },
    });
  }, [showConfirm, resetProfile, resetLinks, resetSocial, setSkills, showSuccess]);

  const handleDownloadJSON = () => {
    const data = {
      version: '1.0.0',
      exportedAt: new Date().toISOString(),
      profile: profileData,
      links: linksData,
      social: socialData,
      support: DEFAULT_SUPPORT,
      skills: Object.entries(skills)
        .filter(([_, selected]) => selected)
        .map(([skill]) => skill),
    };

    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `github-profile-${new Date().getTime()}.json`;
    document.body.appendChild(a);
    a.click();

    // Track JSON export
    trackFileExported('json_export', 'json');
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleImportJSON = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const imported = JSON.parse(e.target?.result as string);

        // Validate and import data
        if (imported.profile) {
          resetProfile({ ...DEFAULT_DATA, ...imported.profile } as ProfileFormData);
        }
        if (imported.links) {
          resetLinks({ ...DEFAULT_LINK, ...imported.links } as LinksFormData);
        }
        if (imported.social) {
          resetSocial({ ...DEFAULT_SOCIAL, ...imported.social } as SocialFormData);
        }
        if (imported.skills && Array.isArray(imported.skills)) {
          const newSkills = { ...initialSkillState };
          imported.skills.forEach((skill: string) => {
            if (skill in newSkills) {
              newSkills[skill] = true;
            }
          });
          setSkills(newSkills);
        }

        alert('Profile data imported successfully!');
      } catch (error) {
        alert('Error importing JSON: ' + (error as Error).message);
      }
    };
    reader.readAsText(file);

    // Reset input
    event.target.value = '';
  };

  const currentStepIndex = steps.findIndex((s) => s.id === currentStep);

  // Validate current step before navigation
  const validateCurrentStep = async (): Promise<boolean> => {
    let isValid = true;
    const errorMessages: string[] = [];

    switch (currentStep) {
      case 'basic':
        const profileValid = await triggerProfile();
        if (!profileValid) {
          isValid = false;
          // Get specific error messages
          if (profileErrors.title) {
            errorMessages.push(`Name: ${profileErrors.title.message}`);
          }
          // Add other field errors as needed
          Object.entries(profileErrors).forEach(([field, error]) => {
            if (field !== 'title' && error?.message) {
              errorMessages.push(`${field}: ${error.message}`);
            }
          });
        }
        break;

      case 'links':
        const linksValid = await triggerLinks();
        if (!linksValid) {
          isValid = false;
          Object.entries(linksErrors).forEach(([field, error]) => {
            if (error?.message) {
              errorMessages.push(`${field}: ${error.message}`);
            }
          });
        }
        break;

      case 'social':
        const socialValid = await triggerSocial();
        if (!socialValid) {
          isValid = false;
          Object.entries(socialErrors).forEach(([field, error]) => {
            if (error?.message) {
              errorMessages.push(`${field}: ${error.message}`);
            }
          });
        }
        break;

      case 'skills':
        // Skills don't have validation requirements
        break;

      case 'preview':
        // Preview doesn't need validation
        break;
    }

    if (!isValid) {
      const stepName = steps.find((s) => s.id === currentStep)?.title || 'current step';
      showError(
        `Please fix errors in ${stepName}`,
        errorMessages.length > 0 ? errorMessages.join(', ') : 'Please check all required fields'
      );
    }

    return isValid;
  };

  const goToNextStep = async () => {
    // Validate current step before proceeding
    const isValid = await validateCurrentStep();
    if (!isValid) {
      return; // Don't proceed if validation fails
    }

    const nextIndex = currentStepIndex + 1;
    if (nextIndex < steps.length) {
      setCurrentStep(steps[nextIndex].id);

      // Show success message for completing a step
      const currentStepName = steps[currentStepIndex].title;
      showSuccess(`${currentStepName} completed!`, 'Moving to next step');

      // Track README generation completion when reaching preview step
      if (steps[nextIndex].id === 'preview') {
        const socialData = watchSocial();
        const linksData = watchLinks();
        const selectedSkillsCount = Object.values(skills).filter(Boolean).length;

        trackReadmeGenerated({
          hasSkills: selectedSkillsCount > 0,
          hasSocial: Object.values(socialData).some(
            (value) => typeof value === 'string' && value.trim() !== ''
          ),
          hasLinks: Object.values(linksData).some(
            (value) => typeof value === 'string' && value.trim() !== ''
          ),
          stepCount: currentStepIndex + 1,
        });
      }
    }
  };

  const goToPrevStep = () => {
    const prevIndex = currentStepIndex - 1;
    if (prevIndex >= 0) {
      setCurrentStep(steps[prevIndex].id);
    }
  };

  // Live Preview Panel component (inline to avoid prop drilling)
  const LivePreviewPanel = useCallback(() => (
    <div
      ref={previewScrollRef}
      className="border-border bg-card flex min-h-[70vh] flex-col rounded-lg border shadow-sm lg:min-h-0 lg:h-[calc(100vh-120px)]"
    >
      {/* Panel Header */}
      <div className="border-border flex flex-shrink-0 items-center justify-between border-b px-4 py-3">
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 animate-pulse rounded-full bg-green-500" title="Live" />
          <h3 className="font-semibold text-sm">Live Preview</h3>
        </div>
        <div className="flex items-center gap-1">
          <button
            onClick={() => setIsPreviewExpanded(!isPreviewExpanded)}
            className="hover:bg-accent rounded-md p-1.5 text-muted-foreground transition-colors"
            title={isPreviewExpanded ? 'Shrink preview' : 'Expand preview'}
            aria-label={isPreviewExpanded ? 'Shrink preview panel' : 'Expand preview panel'}
          >
            {isPreviewExpanded ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
          </button>
          <button
            onClick={() => setShowLivePreview(false)}
            className="hover:bg-accent rounded-md p-1.5 text-muted-foreground transition-colors"
            title="Hide preview"
            aria-label="Hide live preview panel"
          >
            <EyeOff className="h-4 w-4" />
          </button>
        </div>
      </div>
      {/* Panel Content with scroll - fills remaining height */}
      <div className="flex-1 overflow-y-auto p-4">
        <Suspense
          fallback={
            <div className="animate-pulse space-y-3">
              <div className="h-6 rounded bg-gray-200"></div>
              <div className="h-32 rounded bg-gray-200"></div>
              <div className="h-20 rounded bg-gray-200"></div>
            </div>
          }
        >
          <MiniMarkdownPreview markdown={debouncedMarkdown} />
        </Suspense>
      </div>
    </div>
  ), [debouncedMarkdown, isPreviewExpanded]);

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header with Save Status */}
      <Header saveStatus={saveStatus} lastSaved={lastSaved} />

      <main className="container mx-auto flex-1 px-4 py-6">
        <div className="mx-auto max-w-[1600px]">
          {/* Progress Steps + Preview Toggle */}
          <nav aria-label="Form progress" className="mb-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              {/* Steps */}
              <div className="flex items-center justify-center overflow-x-auto">
                <div className="flex min-w-max items-center">
                  {steps.map((step, index) => (
                    <div key={step.id} className="flex items-center">
                      <button
                        onClick={() => setCurrentStep(step.id)}
                        className={`flex flex-col items-center gap-1 px-2 py-1 ${
                          currentStep === step.id
                            ? 'text-primary'
                            : index < currentStepIndex
                              ? 'text-foreground'
                              : 'text-muted-foreground'
                        }`}
                        aria-label={`Step ${index + 1}: ${step.title}`}
                        aria-current={currentStep === step.id ? 'step' : undefined}
                      >
                        <div
                          className={`flex h-8 w-8 items-center justify-center rounded-full border-2 transition-colors sm:h-10 sm:w-10 ${
                            currentStep === step.id
                              ? 'border-primary bg-primary text-primary-foreground'
                              : index < currentStepIndex
                                ? 'border-primary bg-primary/20'
                                : 'border-border'
                          }`}
                        >
                          <span className="text-xs font-medium sm:text-sm">{index + 1}</span>
                        </div>
                        <div className="hidden text-center sm:block">
                          <p className="text-xs font-medium whitespace-nowrap">{step.title}</p>
                          <p className="text-muted-foreground text-xs whitespace-nowrap">
                            {step.description}
                          </p>
                        </div>
                      </button>
                      {index < steps.length - 1 && (
                        <div
                          className={`mx-2 h-0.5 w-8 sm:mx-4 sm:w-12 ${
                            index < currentStepIndex ? 'bg-primary' : 'bg-border'
                          }`}
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Preview Toggle Button */}
              <button
                onClick={() => setShowLivePreview(!showLivePreview)}
                className={`border-border hover:bg-accent flex items-center justify-center gap-2 self-center rounded-lg border px-4 py-2 text-sm font-medium transition-colors sm:self-auto ${
                  showLivePreview ? 'bg-primary/10 border-primary/30' : ''
                }`}
                aria-label={showLivePreview ? 'Hide live preview' : 'Show live preview'}
              >
                {showLivePreview ? (
                  <>
                    <EyeOff className="h-4 w-4" />
                    <span className="whitespace-nowrap">Hide Preview</span>
                  </>
                ) : (
                  <>
                    <Eye className="h-4 w-4" />
                    <span className="whitespace-nowrap">Show Preview</span>
                  </>
                )}
              </button>
            </div>
            {/* Screen reader announcement for step changes */}
            <div className="sr-only" aria-live="polite" aria-atomic="true">
              Current step: {steps[currentStepIndex].title} - {steps[currentStepIndex].description}
            </div>
          </nav>

          {/* Main Content: Preview (Left) + Form (Right) Split Layout */}
          <div className="flex flex-col gap-6 lg:flex-row">
            {/* ================= LEFT SIDE: LIVE PREVIEW ================= */}
            <AnimatePresence>
              {showLivePreview && currentStep !== 'preview' && (
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                  className="order-1 w-full lg:order-none lg:w-[48%] lg:flex-shrink-0"
                >
                  <div className="lg:sticky lg:top-6">
                    <LivePreviewPanel />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* ================= RIGHT SIDE: FORM EDITOR ================= */}
            <div className={`order-2 flex-1 w-full lg:order-none ${showLivePreview ? '' : ''}`}>
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="border-border bg-card rounded-lg border p-5 shadow-sm md:p-7"
              >
                {currentStep === 'basic' && (
                  <BasicInfoSection
                    register={registerProfile}
                    errors={profileErrors}
                    socialRegister={registerSocial}
                    watchSocial={watchSocial}
                    onGitHubAutoFill={handleGitHubAutoFill}
                    onImportJSON={handleImportJSON}
                    onClearAll={handleClearAll}
                    hasClearableData={hasAnyData}
                  />
                )}
                {currentStep === 'links' && (
                  <LinksSection register={registerLinks} errors={linksErrors} />
                )}
                {currentStep === 'social' && (
                  <SocialSection register={registerSocial} errors={socialErrors} watch={watchSocial} />
                )}
                {currentStep === 'skills' && (
                  <Suspense
                    fallback={
                      <div className="animate-pulse space-y-4">
                        <div className="h-8 rounded bg-gray-200"></div>
                        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
                          {Array.from({ length: 12 }).map((_, i) => (
                            <div key={i} className="h-12 rounded bg-gray-200"></div>
                          ))}
                        </div>
                      </div>
                    }
                  >
                    <SkillsSection
                      selectedSkills={skills}
                      onSkillChange={handleSkillChange}
                      registerProfile={registerProfile}
                    />
                  </Suspense>
                )}
                {currentStep === 'preview' && (
                  <div className="space-y-6">
                    <div className="border-border border-b pb-4">
                      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                          <h2 className="text-xl font-bold sm:text-2xl">Preview & Generate</h2>
                          <p className="text-muted-foreground mt-1 text-sm">
                            Your README is ready! Copy or download it below.
                          </p>
                        </div>
                        <button
                          onClick={handleDownloadJSON}
                          className="bg-primary text-primary-foreground hover:bg-primary/90 flex items-center justify-center gap-2 rounded-lg px-3 py-2 text-sm transition-colors"
                          title="Export profile data as JSON"
                          aria-label="Export profile data as JSON"
                        >
                          <Download className="h-4 w-4" />
                          <span>Export</span>
                        </button>
                      </div>
                    </div>

                    <Suspense
                      fallback={
                        <div className="animate-pulse space-y-4">
                          <div className="h-8 rounded bg-gray-200"></div>
                          <div className="h-96 rounded bg-gray-200"></div>
                        </div>
                      }
                    >
                      <MarkdownPreview markdown={markdown} title="Your GitHub Profile README" />
                    </Suspense>
                  </div>
                )}
              </motion.div>

              {/* Navigation Buttons */}
              <nav className="mt-6 flex justify-between" aria-label="Form navigation">
                <button
                  onClick={goToPrevStep}
                  disabled={currentStepIndex === 0}
                  className="border-border hover:bg-accent rounded-lg border px-6 py-2 font-medium transition-colors disabled:cursor-not-allowed disabled:opacity-50"
                  aria-label={`Go to previous step${currentStepIndex > 0 ? `: ${steps[currentStepIndex - 1].title}` : ''}`}
                >
                  Previous
                </button>
                {currentStepIndex < steps.length - 1 && (
                  <button
                    onClick={goToNextStep}
                    className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg px-6 py-2 font-medium transition-colors"
                    aria-label={`Go to next step: ${steps[currentStepIndex + 1].title}`}
                  >
                    Next
                  </button>
                )}
              </nav>
            </div>
          </div>

          {/* Mobile/Tablet (below lg) - Floating Bottom Sheet fallback */}
          <AnimatePresence>
            {showLivePreview && currentStep !== 'preview' && (
              <>
                {/* Mobile toggle floating button - only below lg */}
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  onClick={() => setIsPreviewExpanded(!isPreviewExpanded)}
                  className="lg:hidden fixed bottom-4 right-4 z-40 bg-primary text-primary-foreground shadow-lg hover:bg-primary/90 flex items-center gap-2 rounded-full px-4 py-3 text-sm font-medium transition-all"
                  aria-label={isPreviewExpanded ? 'Close mobile preview' : 'Open mobile preview'}
                >
                  <Eye className="h-4 w-4" />
                  <span>{isPreviewExpanded ? 'Close' : 'Preview'}</span>
                </motion.button>

                {/* Mobile Bottom Sheet Preview - only below lg */}
                {isPreviewExpanded && (
                  <motion.div
                    initial={{ opacity: 0, y: '100%' }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: '100%' }}
                    transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                    className="lg:hidden fixed inset-x-0 bottom-0 left-0 right-0 z-50 h-[80vh] rounded-t-2xl bg-background shadow-2xl"
                  >
                    <div className="flex justify-center pt-3 pb-1">
                      <div className="h-1.5 w-12 rounded-full bg-muted-foreground/30" />
                    </div>
                    <div className="h-[calc(80vh-24px)] px-4 pb-4">
                      <LivePreviewPanel />
                    </div>
                  </motion.div>
                )}

                {isPreviewExpanded && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setIsPreviewExpanded(false)}
                    className="lg:hidden fixed inset-0 z-40 bg-black/40"
                    aria-label="Close preview backdrop"
                  />
                )}
              </>
            )}
          </AnimatePresence>
        </div>
      </main>
      <Footer />

      {/* Confirmation Dialog */}
      <ConfirmDialog />
    </div>
  );
}
