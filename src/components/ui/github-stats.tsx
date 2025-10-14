'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useErrorToast } from '@/components/ui/toast';

interface GitHubStats {
  stars: number;
  forks: number;
}

export function GitHubStats() {
  const [stats, setStats] = useState<GitHubStats | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const errorToast = useErrorToast();

  useEffect(() => {
    // Smart request logic like original
    const shouldRequestStats = () => {
      const isFirstRequest = stats === null;
      const isVisible = typeof window !== 'undefined' && document.visibilityState === 'visible';
      const hasFocus = typeof window !== 'undefined' && document.hasFocus();
      return isFirstRequest || (isVisible && hasFocus);
    };

    const fetchStats = async () => {
      if (!shouldRequestStats()) return;

      try {
        const response = await fetch(
          'https://api.github.com/repos/rahuldkjain/github-profile-readme-generator'
        );

        if (!response.ok) {
          if (response.status === 403) {
            const rateLimitRemaining = response.headers.get('X-RateLimit-Remaining');
            if (rateLimitRemaining === '0') {
              console.warn('GitHub API rate limit exceeded for stats');
              setError(true);
              setIsLoading(false);
              return;
            }
          }
          throw new Error(`Failed to fetch stats (${response.status})`);
        }

        const data = await response.json();
        setStats({
          stars: data.stargazers_count || 0,
          forks: data.forks_count || 0,
        });
        setIsLoading(false);
      } catch (err) {
        console.error('Error fetching GitHub stats:', err);
        setError(true);
        setIsLoading(false);

        // Only show error toast on first load, not on periodic refreshes
        if (stats === null) {
          errorToast(
            'Failed to load GitHub stats',
            "Unable to fetch repository statistics. This won't affect the generator functionality.",
            {
              label: 'Retry',
              onClick: fetchStats,
            }
          );
        }
      }
    };

    // Initial fetch
    fetchStats();

    // Periodic refresh like original (every minute)
    const interval = setInterval(fetchStats, 60000);

    return () => clearInterval(interval);
  }, []); // Remove stats dependency to prevent infinite loop

  if (error || isLoading) {
    return null; // Don't show anything if loading or error
  }

  if (!stats) {
    return null;
  }

  return (
    <motion.div
      className="hidden items-center gap-3 lg:flex"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      {/* Star Button - Styled like original */}
      <motion.a
        href="https://github.com/rahuldkjain/github-profile-readme-generator"
        target="_blank"
        rel="noopener noreferrer"
        className="border-foreground bg-muted hover:bg-accent flex items-center gap-1.5 border-2 px-3 py-1.5 text-xs font-medium transition-colors"
        title="Star rahuldkjain/github-profile-readme-generator on GitHub"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.svg
          className="h-4 w-4"
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 2,
            ease: 'easeInOut',
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </motion.svg>
        <span>Stars</span>
        <span className="font-bold">{stats.stars.toLocaleString()}</span>
      </motion.a>

      {/* Fork Button - Styled like original */}
      <motion.a
        href="https://github.com/rahuldkjain/github-profile-readme-generator/fork"
        target="_blank"
        rel="noopener noreferrer"
        className="border-foreground bg-muted hover:bg-accent flex items-center gap-1.5 border-2 px-3 py-1.5 text-xs font-medium transition-colors"
        title="Fork rahuldkjain/github-profile-readme-generator on GitHub"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.svg
          className="h-4 w-4"
          fill="currentColor"
          viewBox="0 0 16 16"
          aria-hidden="true"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 2,
            ease: 'easeInOut',
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        >
          <path d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z" />
        </motion.svg>
        <span>Forks</span>
        <span className="font-bold">{stats.forks.toLocaleString()}</span>
      </motion.a>
    </motion.div>
  );
}
