'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, ShieldCheck } from 'lucide-react';
import { useConsent } from '@/hooks/use-consent';

export function CookieConsent() {
  const { showBanner, acceptConsent, rejectConsent } = useConsent();

  return (
    <AnimatePresence>
      {showBanner && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm"
            aria-hidden="true"
          />

          {/* Consent Banner */}
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.95 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="fixed right-4 bottom-4 left-4 z-50 mx-auto max-w-2xl"
            role="dialog"
            aria-labelledby="cookie-consent-title"
            aria-describedby="cookie-consent-description"
          >
            <div className="bg-card border-border rounded-xl border p-6 shadow-2xl">
              {/* Header */}
              <div className="mb-4 flex items-start gap-3">
                <div className="bg-primary/10 text-primary rounded-lg p-2">
                  <Cookie className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <h3 id="cookie-consent-title" className="text-lg font-semibold">
                    We use cookies to improve your experience
                  </h3>
                  <p
                    id="cookie-consent-description"
                    className="text-muted-foreground mt-1 text-sm leading-relaxed"
                  >
                    We use Google Analytics to understand how you interact with our site and improve
                    your experience. Your data is anonymized and we don't track personal
                    information.
                  </p>
                </div>
              </div>

              {/* Privacy Info */}
              <div className="bg-muted/50 mb-4 rounded-lg p-3">
                <div className="flex items-center gap-2 text-sm">
                  <ShieldCheck className="h-4 w-4 text-green-600" />
                  <span className="font-medium">Privacy-friendly tracking</span>
                </div>
                <ul className="text-muted-foreground mt-2 space-y-1 text-xs">
                  <li>• IP addresses are anonymized</li>
                  <li>• No personal data is collected</li>
                  <li>• You can opt-out anytime</li>
                </ul>
              </div>

              {/* Actions */}
              <div className="flex flex-col gap-3 sm:flex-row sm:justify-between">
                <div className="flex gap-2">
                  <button
                    onClick={acceptConsent}
                    className="bg-primary text-primary-foreground hover:bg-primary/90 flex-1 rounded-lg px-4 py-2 text-sm font-medium transition-colors sm:flex-none"
                  >
                    Accept Analytics
                  </button>
                  <button
                    onClick={rejectConsent}
                    className="border-border hover:bg-accent flex-1 rounded-lg border px-4 py-2 text-sm font-medium transition-colors sm:flex-none"
                  >
                    Reject
                  </button>
                </div>

                {/* Learn More Link */}
                <div className="flex items-center justify-center text-xs">
                  <a
                    href="https://policies.google.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground underline transition-colors"
                  >
                    Learn about Google's privacy policy
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

/**
 * Privacy Settings Component (for settings page or footer)
 */
export function PrivacySettings() {
  const { status, resetConsent } = useConsent();

  if (status === 'pending') {
    return null;
  }

  return (
    <div className="border-border bg-card rounded-lg border p-4">
      <div className="flex items-center justify-between">
        <div>
          <h4 className="font-medium">Analytics Cookies</h4>
          <p className="text-muted-foreground text-sm">
            Status: {status === 'accepted' ? 'Enabled' : 'Disabled'}
          </p>
        </div>
        <button
          onClick={resetConsent}
          className="border-border hover:bg-accent rounded-lg border px-3 py-2 text-sm transition-colors"
        >
          Change Settings
        </button>
      </div>
    </div>
  );
}
