import { z } from 'zod';

// Profile validation schema
export const profileSchema = z.object({
  // Basic Information
  title: z.string().min(1, 'Name is required').max(100, 'Name is too long'),
  subtitle: z.string().max(200, 'Subtitle is too long'),

  // About sections
  currentWork: z.string().max(200),
  currentLearn: z.string().max(200),
  collaborateOn: z.string().max(200),
  helpWith: z.string().max(200),
  ama: z.string().max(200),
  contact: z.string().email('Invalid email').or(z.string().max(100)),
  funFact: z.string().max(200),

  // Badges
  visitorsBadge: z.boolean(),
  badgeStyle: z.enum(['flat', 'flat-square', 'plastic', 'for-the-badge']),
  badgeColor: z.string().regex(/^[0-9a-fA-F]{6}$/, 'Invalid color hex'),
  badgeLabel: z.string().max(50),

  // GitHub Stats
  githubProfileTrophy: z.boolean(),
  githubStats: z.boolean(),
  githubStatsOptions: z.object({
    theme: z.string(),
    titleColor: z.string(),
    textColor: z.string(),
    bgColor: z.string(),
    hideBorder: z.boolean(),
    cacheSeconds: z.number().nullable(),
    locale: z.string(),
  }),

  // Top Languages
  topLanguages: z.boolean(),
  topLanguagesOptions: z.object({
    theme: z.string(),
    titleColor: z.string(),
    textColor: z.string(),
    bgColor: z.string(),
    hideBorder: z.boolean(),
    cacheSeconds: z.number().nullable(),
    locale: z.string(),
  }),

  // Streak Stats
  streakStats: z.boolean(),
  streakStatsOptions: z.object({
    theme: z.string(),
  }),

  // Blog Integration
  devDynamicBlogs: z.boolean(),
  mediumDynamicBlogs: z.boolean(),
  rssDynamicBlogs: z.boolean(),
});

// Links validation schema
export const linksSchema = z.object({
  currentWork: z.string().url('Invalid URL').or(z.literal('')),
  collaborateOn: z.string().url('Invalid URL').or(z.literal('')),
  helpWith: z.string().url('Invalid URL').or(z.literal('')),
  portfolio: z.string().url('Invalid URL').or(z.literal('')),
  blog: z.string().url('Invalid URL').or(z.literal('')),
  resume: z.string().url('Invalid URL').or(z.literal('')),
});

// Social links validation schema
export const socialSchema = z.object({
  github: z.string().max(100),
  dev: z.string().max(100),
  linkedin: z.string().max(100),
  codepen: z.string().max(100),
  stackoverflow: z.string().max(100),
  kaggle: z.string().max(100),
  codesandbox: z.string().max(100),
  fb: z.string().max(100),
  instagram: z.string().max(100),
  twitter: z.string().max(100),
  dribbble: z.string().max(100),
  behance: z.string().max(100),
  medium: z.string().max(100),
  youtube: z.string().max(100),
  codechef: z.string().max(100),
  hackerrank: z.string().max(100),
  codeforces: z.string().max(100),
  leetcode: z.string().max(100),
  topcoder: z.string().max(100),
  hackerearth: z.string().max(100),
  geeks_for_geeks: z.string().max(100),
  discord: z.string().max(100),
  rssurl: z.string().url('Invalid URL').or(z.literal('')),

  // Twitter Badge Enhancement
  twitterBadge: z.boolean(),
});

// Support validation schema
export const supportSchema = z.object({
  buyMeACoffee: z.string().max(100),
});

// Complete form schema
export const completeFormSchema = z.object({
  profile: profileSchema,
  links: linksSchema,
  social: socialSchema,
  support: supportSchema,
  skills: z.record(z.string(), z.boolean()),
});

export type ProfileFormData = z.infer<typeof profileSchema>;
export type LinksFormData = z.infer<typeof linksSchema>;
export type SocialFormData = z.infer<typeof socialSchema>;
export type SupportFormData = z.infer<typeof supportSchema>;
export type CompleteFormData = z.infer<typeof completeFormSchema>;
