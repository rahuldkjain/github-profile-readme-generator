'use client';

// Analytics utility for GA4 custom event tracking
// Only tracks events if user has given consent

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * Check if analytics consent has been given
 */
export function hasAnalyticsConsent(): boolean {
  if (typeof window === 'undefined') return false;

  try {
    const consent = localStorage.getItem('analytics-consent');
    return consent === 'accepted';
  } catch {
    return false;
  }
}

/**
 * Send custom event to GA4 if consent is given
 */
function trackEvent(eventName: string, parameters?: Record<string, unknown>) {
  // Only track if consent is given and gtag is available
  if (!hasAnalyticsConsent() || typeof window === 'undefined' || !window.gtag) {
    return;
  }

  try {
    window.gtag('event', eventName, {
      // Add default parameters
      timestamp: new Date().toISOString(),
      page_location: window.location.href,
      page_title: document.title,
      // Add custom parameters
      ...parameters,
    });
  } catch (error) {
    console.warn('Analytics tracking failed:', error);
  }
}

/**
 * Track GitHub auto-fill usage
 */
export function trackGitHubAutofill(username?: string) {
  trackEvent('github_autofill_used', {
    event_category: 'engagement',
    event_label: 'github_integration',
    has_username: !!username,
    // Don't track actual username for privacy
  });
}

/**
 * Track README generation completion
 */
export function trackReadmeGenerated(data?: {
  hasSkills?: boolean;
  hasSocial?: boolean;
  hasLinks?: boolean;
  stepCount?: number;
}) {
  trackEvent('readme_generated', {
    event_category: 'conversion',
    event_label: 'readme_completion',
    value: 1, // Conversion value
    has_skills: data?.hasSkills || false,
    has_social: data?.hasSocial || false,
    has_links: data?.hasLinks || false,
    step_count: data?.stepCount || 0,
  });
}

/**
 * Track file export/download actions
 */
export function trackFileExported(action: 'copy' | 'download' | 'json_export', format?: string) {
  trackEvent('file_exported', {
    event_category: 'engagement',
    event_label: 'file_export',
    export_action: action,
    file_format: format || 'markdown',
    value: action === 'download' ? 2 : 1, // Downloads are more valuable
  });
}

/**
 * Initialize analytics with consent
 */
export function initializeAnalytics() {
  if (!hasAnalyticsConsent()) {
    return;
  }

  // Configure GA4 for privacy
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', process.env.NEXT_PUBLIC_GA_ID || '', {
      // Privacy-friendly configuration
      anonymize_ip: true,
      allow_google_signals: false,
      allow_ad_personalization_signals: false,
      // Custom configuration
      page_title: document.title,
      page_location: window.location.href,
    });
  }
}

/**
 * Disable analytics tracking (for opt-out)
 */
export function disableAnalytics() {
  if (typeof window !== 'undefined') {
    // Set GA4 opt-out flag
    const gaId = process.env.NEXT_PUBLIC_GA_ID;
    if (gaId) {
      (window as unknown as Record<string, boolean>)[`ga-disable-${gaId}`] = true;
    }

    // Remove consent
    try {
      localStorage.removeItem('analytics-consent');
    } catch {
      // Ignore localStorage errors
    }
  }
}
