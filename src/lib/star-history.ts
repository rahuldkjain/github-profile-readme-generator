export interface StarHistoryParams {
  repos: string[];
  type?: 'Date' | 'Timeline';
  theme?: 'light' | 'dark';
}

/**
 * Generate Star History chart URL
 */
export const generateStarHistoryURL = (params: StarHistoryParams): string => {
  const searchParams = new URLSearchParams({
    repos: params.repos.join(','),
    type: params.type || 'Date',
  });

  if (params.theme === 'dark') {
    searchParams.append('theme', 'dark');
  }

  return `https://api.star-history.com/svg?${searchParams.toString()}`;
};

/**
 * Validate repository format (owner/repo)
 */
export const validateRepoFormat = (repo: string): boolean => {
  const trimmedRepo = repo.trim();
  if (!trimmedRepo) return false;
  
  return /^[a-zA-Z0-9_.-]+\/[a-zA-Z0-9_.-]+$/.test(trimmedRepo);
};

/**
 * Validate multiple repositories
 */
export const validateRepos = (repos: string[]): { valid: boolean; errors: string[] } => {
  const errors: string[] = [];
  
  if (repos.length === 0) {
    errors.push('At least one repository is required');
  }
  
  if (repos.length > 5) {
    errors.push('Maximum 5 repositories allowed');
  }
  
  repos.forEach((repo, index) => {
    if (!validateRepoFormat(repo)) {
      errors.push(`Repository "${repo}" has invalid format. Use "owner/repo" format.`);
    }
  });
  
  return {
    valid: errors.length === 0,
    errors
  };
};

/**
 * Parse repositories from comma-separated string
 */
export const parseRepos = (input: string): string[] => {
  return input
    .split(',')
    .map(repo => repo.trim())
    .filter(repo => repo.length > 0);
};

/**
 * Generate markdown for Star History chart
 */
export const generateStarHistoryMarkdown = (config: {
  enabled: boolean;
  repos: string[];
  chartType: 'Date' | 'Timeline';
  theme: 'light' | 'dark' | 'auto';
}): string => {
  if (!config.enabled || !config.repos || config.repos.length === 0) {
    return '';
  }

  const url = generateStarHistoryURL({
    repos: config.repos,
    type: config.chartType,
    theme: config.theme === 'auto' ? undefined : config.theme
  });

  const altText = 'Star History Chart';
  const starHistoryUrl = `https://star-history.com/#${config.repos.join('&')}&${config.chartType}`;

  // For auto theme, use picture tag with media queries and make it clickable
  if (config.theme === 'auto') {
    return `
  <a href="${starHistoryUrl}" target="_blank" rel="noopener noreferrer">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="${url}&theme=dark" />
      <source media="(prefers-color-scheme: light)" srcset="${url}" />
      <img alt="${altText}" src="${url}" />
    </picture>
  </a>`.trim();
  }

  // For light/dark theme, use simple markdown image with link
  return `[![${altText}](${url})](${starHistoryUrl})`;
};
