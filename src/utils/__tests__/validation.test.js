import { isGitHubUsernameValid, isMediumUsernameValid, isTwitterUsernameValid } from '../validation';

describe('validation', () => {
  it('isGitHubUsernameValid', () => {
    expect(isGitHubUsernameValid('Lorem ipsum dolor sit amet, consectetur adipiscing elit')).toBe(false);
    expect(isGitHubUsernameValid('rahuldkjain')).toBe(true);
  });

  it('isMediumUsernameValid', () => {
    expect(isMediumUsernameValid('rahuldkjain')).toBe(false);
    expect(isMediumUsernameValid('@rahuldkjain')).toBe(true);
  });

  it('isTwitterUsernameValid', () => {
    expect(isTwitterUsernameValid('Lorem ipsum dolor sit amet, consectetur adipiscing elit')).toBe(false);
    expect(isTwitterUsernameValid('rahuldkjain')).toBe(true);
  });
});
