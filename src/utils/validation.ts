export const isGitHubUsernameValid = (username: string) => {
  const pattern = /^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i
  return pattern.test(username)
}
export const isMediumUsernameValid = (username: string) => {
  if (username) {
    return username[0] === "@"
  }
  return true
}

export const isTwitterUsernameValid = (username: string) => {
  const pattern = /^[a-zA-Z0-9_]{1,15}$/
  return pattern.test(username)
}
