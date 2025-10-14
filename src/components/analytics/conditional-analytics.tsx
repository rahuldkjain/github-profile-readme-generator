'use client';

import { useEffect } from 'react';
import { GoogleAnalytics } from '@next/third-parties/google';
import { useConsent } from '@/hooks/use-consent';
import { initializeAnalytics } from '@/lib/analytics';

/**
 * Conditionally loads Google Analytics based on user consent
 */
export function ConditionalAnalytics() {
  const { status } = useConsent();
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  // Initialize analytics when consent is accepted
  useEffect(() => {
    if (status === 'accepted' && gaId) {
      // Small delay to ensure GA4 is loaded
      const timer = setTimeout(() => {
        initializeAnalytics();
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [status, gaId]);

  // Only render GoogleAnalytics if consent is accepted and GA ID exists
  if (status !== 'accepted' || !gaId) {
    return null;
  }

  return <GoogleAnalytics gaId={gaId} />;
}
