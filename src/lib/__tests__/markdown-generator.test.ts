import { describe, it, expect } from 'vitest';
import { generateMarkdown } from '../markdown-generator';

describe('generateMarkdown', () => {
  it('adds a Bluesky link when a handle is provided', () => {
    const md = generateMarkdown({
      profile: {},
      links: {},
      support: {},
      skills: {},
      social: { bluesky: 'alice.bsky.social' },
    });
    expect(md).toContain('https://bsky.app/profile/alice.bsky.social');
    expect(md).toContain('Social/bluesky.svg');
  });
});
