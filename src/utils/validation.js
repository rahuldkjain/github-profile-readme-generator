const isGitHubUsernameValid = username => {
  var pattern = /^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i
  return pattern.test(username)
}
const isMediumUsernameValid = username => {
  if (username) {
    return username[0] === "@"
  }
  return true
}

const isTwitterUsernameValid = username => {
  var pattern = /^[a-zA-Z0-9_]{1,15}$/
  return pattern.test(username)
}

export { isGitHubUsernameValid, isMediumUsernameValid, isTwitterUsernameValid }
