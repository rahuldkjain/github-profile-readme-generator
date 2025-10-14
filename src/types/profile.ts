// Profile data types
export interface ProfilePrefix {
  title: string;
  currentWork: string;
  currentLearn: string;
  collaborateOn: string;
  helpWith: string;
  ama: string;
  contact: string;
  resume: string;
  funFact: string;
  portfolio: string;
  blog: string;
}

export interface GithubStatsOptions {
  theme: string;
  titleColor: string;
  textColor: string;
  bgColor: string;
  hideBorder: boolean;
  cacheSeconds: number | null;
  locale: string;
}

export interface TopLanguagesOptions {
  theme: string;
  titleColor: string;
  textColor: string;
  bgColor: string;
  hideBorder: boolean;
  cacheSeconds: number | null;
  locale: string;
}

export interface StreakStatsOptions {
  theme: string;
}

export interface ProfileData {
  title: string;
  subtitle: string;
  currentWork: string;
  currentLearn: string;
  collaborateOn: string;
  helpWith: string;
  ama: string;
  contact: string;
  funFact: string;
  visitorsBadge: boolean;
  badgeStyle: 'flat' | 'flat-square' | 'plastic' | 'for-the-badge';
  badgeColor: string;
  badgeLabel: string;
  githubProfileTrophy: boolean;
  githubStats: boolean;
  githubStatsOptions: GithubStatsOptions;
  topLanguages: boolean;
  topLanguagesOptions: TopLanguagesOptions;
  streakStats: boolean;
  streakStatsOptions: StreakStatsOptions;
  devDynamicBlogs: boolean;
  mediumDynamicBlogs: boolean;
  rssDynamicBlogs: boolean;
}

export interface ProfileLinks {
  currentWork: string;
  collaborateOn: string;
  helpWith: string;
  portfolio: string;
  blog: string;
  resume: string;
}

export interface SocialLinks {
  github: string;
  dev: string;
  linkedin: string;
  codepen: string;
  stackoverflow: string;
  kaggle: string;
  codesandbox: string;
  fb: string;
  instagram: string;
  twitter: string;
  dribbble: string;
  behance: string;
  medium: string;
  youtube: string;
  codechef: string;
  hackerrank: string;
  codeforces: string;
  leetcode: string;
  topcoder: string;
  hackerearth: string;
  geeks_for_geeks: string;
  discord: string;
  rssurl: string;
  twitterBadge: boolean;
}

export interface SupportLinks {
  buyMeACoffee: string;
}

export interface Skills {
  [key: string]: boolean;
}
