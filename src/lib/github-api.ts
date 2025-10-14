interface GitHubUser {
  login: string;
  name: string | null;
  bio: string | null;
  location: string | null;
  blog: string | null;
  twitter_username: string | null;
  public_repos: number;
  followers: number;
  following: number;
  company: string | null;
  email: string | null;
}

interface GitHubRepo {
  name: string;
  language: string | null;
  stargazers_count: number;
  description: string | null;
}

export interface GitHubUserData {
  username: string;
  name: string;
  bio: string;
  location: string;
  blog: string;
  twitter: string;
  email: string;
  topLanguages: string[];
  totalRepos: number;
  totalStars: number;
}

export interface GitHubApiError {
  message: string;
  type: 'rate_limit' | 'not_found' | 'network' | 'unknown';
  retryAfter?: number;
}

export async function fetchGitHubUser(username: string): Promise<GitHubUserData | null> {
  try {
    // Fetch user data
    const userResponse = await fetch(`https://api.github.com/users/${username}`);

    if (!userResponse.ok) {
      // Handle specific error cases
      if (userResponse.status === 403) {
        const rateLimitRemaining = userResponse.headers.get('X-RateLimit-Remaining');
        const rateLimitReset = userResponse.headers.get('X-RateLimit-Reset');

        if (rateLimitRemaining === '0') {
          const resetTime = rateLimitReset ? new Date(parseInt(rateLimitReset) * 1000) : null;
          const retryAfter = resetTime
            ? Math.ceil((resetTime.getTime() - Date.now()) / 1000 / 60)
            : null;

          const error: GitHubApiError = {
            message: `GitHub API rate limit exceeded. ${retryAfter ? `Try again in ${retryAfter} minutes.` : 'Please try again later.'}`,
            type: 'rate_limit',
            retryAfter: retryAfter || undefined,
          };
          throw error;
        }
      }

      if (userResponse.status === 404) {
        const error: GitHubApiError = {
          message: `GitHub user "${username}" not found. Please check the username.`,
          type: 'not_found',
        };
        throw error;
      }

      // Generic error for other status codes
      const error: GitHubApiError = {
        message: `Failed to fetch GitHub user data (${userResponse.status}). Please try again.`,
        type: 'unknown',
      };
      throw error;
    }

    const user: GitHubUser = await userResponse.json();

    // Fetch user repos to analyze languages
    const reposResponse = await fetch(
      `https://api.github.com/users/${username}/repos?sort=updated&per_page=100`
    );

    let repos: GitHubRepo[] = [];
    if (reposResponse.ok) {
      repos = await reposResponse.json();
    } else if (reposResponse.status === 403) {
      // Rate limit hit on repos endpoint, continue with user data only
      console.warn('GitHub API rate limit hit for repos endpoint, continuing with basic user data');
    }

    // Analyze top languages
    const languageCounts: Record<string, number> = {};
    let totalStars = 0;

    repos.forEach((repo) => {
      if (repo.language) {
        languageCounts[repo.language] = (languageCounts[repo.language] || 0) + 1;
      }
      totalStars += repo.stargazers_count;
    });

    // Sort languages by frequency
    const topLanguages = Object.entries(languageCounts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .map(([lang]) => lang.toLowerCase());

    return {
      username: user.login,
      name: user.name || user.login,
      bio: user.bio || '',
      location: user.location || '',
      blog: user.blog || '',
      twitter: user.twitter_username || '',
      email: user.email || '',
      topLanguages,
      totalRepos: user.public_repos,
      totalStars,
    };
  } catch (error) {
    console.error('Error fetching GitHub user:', error);

    // Re-throw GitHubApiError for proper handling
    if (error && typeof error === 'object' && 'type' in error) {
      throw error as GitHubApiError;
    }

    // Network or other errors
    const networkError: GitHubApiError = {
      message: 'Network error occurred. Please check your connection and try again.',
      type: 'network',
    };
    throw networkError;
  }
}

// Map GitHub languages to skill IDs in our system
export function mapLanguageToSkills(language: string): string[] {
  const languageMap: Record<string, string[]> = {
    javascript: ['javascript', 'nodejs', 'react', 'express'],
    typescript: ['typescript', 'nodejs', 'react'],
    python: ['python', 'django', 'flask'],
    java: ['java', 'spring'],
    go: ['go'],
    rust: ['rust'],
    ruby: ['ruby', 'rails'],
    php: ['php', 'laravel'],
    swift: ['swift'],
    kotlin: ['kotlin', 'android'],
    csharp: ['csharp', 'dotnet'],
    cpp: ['cplusplus'],
    c: ['c'],
    scala: ['scala'],
    html: ['html5', 'css3'],
    css: ['css3', 'sass'],
  };

  return languageMap[language] || [language];
}

// Generate smart subtitle based on user data
export function generateSmartSubtitle(userData: GitHubUserData): string {
  const { topLanguages, totalRepos } = userData;

  if (topLanguages.length === 0) {
    return 'A passionate developer from around the world';
  }

  const primaryLang = topLanguages[0];
  const langDisplay = primaryLang.charAt(0).toUpperCase() + primaryLang.slice(1);

  if (totalRepos < 5) {
    return `A budding ${langDisplay} developer`;
  } else if (totalRepos < 20) {
    return `A passionate ${langDisplay} developer`;
  } else if (totalRepos < 50) {
    return `An experienced ${langDisplay} developer`;
  } else {
    return `A seasoned ${langDisplay} developer`;
  }
}
