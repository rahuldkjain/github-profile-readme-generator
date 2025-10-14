'use client';

import { useState, useEffect } from 'react';

export type ConsentStatus = 'pending' | 'accepted' | 'rejected';

interface ConsentState {
  status: ConsentStatus;
  showBanner: boolean;
  acceptConsent: () => void;
  rejectConsent: () => void;
  resetConsent: () => void;
}

/**
 * Hook for managing GDPR cookie consent
 */
export function useConsent(): ConsentState {
  const [status, setStatus] = useState<ConsentStatus>('pending');
  const [showBanner, setShowBanner] = useState(false);

  // Load consent status from localStorage on mount
  useEffect(() => {
    if (typeof window === 'undefined') return;

    try {
      const savedConsent = localStorage.getItem('analytics-consent');
      const consentTimestamp = localStorage.getItem('analytics-consent-timestamp');

      if (savedConsent && consentTimestamp) {
        // Check if consent is still valid (30 days)
        const consentDate = new Date(consentTimestamp);
        const thirtyDaysAgo = new Date();
        thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

        if (consentDate > thirtyDaysAgo) {
          setStatus(savedConsent as ConsentStatus);
          setShowBanner(false);
        } else {
          // Consent expired, show banner again
          setStatus('pending');
          setShowBanner(true);
        }
      } else {
        // No consent found, show banner
        setStatus('pending');
        setShowBanner(true);
      }
    } catch (error) {
      console.warn('Failed to load consent status:', error);
      setStatus('pending');
      setShowBanner(true);
    }
  }, []);

  const acceptConsent = () => {
    try {
      localStorage.setItem('analytics-consent', 'accepted');
      localStorage.setItem('analytics-consent-timestamp', new Date().toISOString());
      setStatus('accepted');
      setShowBanner(false);

      // Reload page to initialize analytics
      if (typeof window !== 'undefined') {
        window.location.reload();
      }
    } catch (error) {
      console.warn('Failed to save consent:', error);
    }
  };

  const rejectConsent = () => {
    try {
      localStorage.setItem('analytics-consent', 'rejected');
      localStorage.setItem('analytics-consent-timestamp', new Date().toISOString());
      setStatus('rejected');
      setShowBanner(false);
    } catch (error) {
      console.warn('Failed to save consent rejection:', error);
    }
  };

  const resetConsent = () => {
    try {
      localStorage.removeItem('analytics-consent');
      localStorage.removeItem('analytics-consent-timestamp');
      setStatus('pending');
      setShowBanner(true);
    } catch (error) {
      console.warn('Failed to reset consent:', error);
    }
  };

  return {
    status,
    showBanner,
    acceptConsent,
    rejectConsent,
    resetConsent,
  };
}
