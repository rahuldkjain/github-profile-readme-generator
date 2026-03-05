import { describe, expect, it } from 'vitest';

import { generateMarkdown } from './markdown-generator';

describe('generateMarkdown social URL generation', () => {
  it('builds canonical social URLs from usernames, handles, and full URLs', () => {
    const markdown = generateMarkdown({
      profile: {},
      links: {},
      social: {
        github: ' @octocat ',
        linkedin: 'https://www.linkedin.com/in/jane-doe/',
        twitter: 'https://twitter.com/octo',
        medium: '@writer',
        hackerearth: 'https://www.hackerearth.com/@coder/',
        youtube: 'https://www.youtube.com/@codechannel',
        stackoverflow: 'https://stackoverflow.com/users/12345/jane-doe',
      },
      support: {},
      skills: {},
    });

    expect(markdown).toContain('href="https://github.com/octocat"');
    expect(markdown).toContain('href="https://linkedin.com/in/jane-doe"');
    expect(markdown).toContain('href="https://twitter.com/octo"');
    expect(markdown).toContain('href="https://medium.com/@writer"');
    expect(markdown).toContain('href="https://hackerearth.com/@coder"');
    expect(markdown).toContain('href="https://youtube.com/@codechannel"');
    expect(markdown).toContain('href="https://stackoverflow.com/users/12345/jane-doe"');
  });

  it('uses normalized github username for stats and badges', () => {
    const markdown = generateMarkdown({
      profile: {
        visitorsBadge: true,
        githubProfileTrophy: true,
        githubStats: true,
        streakStats: true,
      },
      links: {},
      social: {
        github: 'https://github.com/octocat/',
      },
      support: {},
      skills: {},
    });

    expect(markdown).toContain('ghpvc/?username=octocat');
    expect(markdown).toContain('github-profile-trophy.vercel.app/?username=octocat');
    expect(markdown).toContain('github-readme-stats.vercel.app/api/top-langs?username=octocat');
    expect(markdown).toContain('github-readme-streak-stats.herokuapp.com/?user=octocat');
    expect(markdown).not.toContain('username=https://github.com/octocat');
  });

  it('uses normalized twitter handle for badge URL', () => {
    const markdown = generateMarkdown({
      profile: {},
      links: {},
      social: {
        twitterBadge: true,
        twitter: '@devhandle',
      },
      support: {},
      skills: {},
    });

    expect(markdown).toContain('href="https://twitter.com/devhandle"');
    expect(markdown).toContain('img.shields.io/twitter/follow/devhandle');
  });
});
