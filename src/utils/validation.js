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

const isHackerEarthUsernameValid = username => {
  if (username) {
    return username[0] === "@"
  }
  return true
}

const isGFGUsernameValid = username => {
  if (username) {
    // strips off '/profile' from username
    return username.slice(username.length - 8) === "/profile"
  }
  return true
}

export {
  isGitHubUsernameValid,
  isMediumUsernameValid,
  isHackerEarthUsernameValid,
  isGFGUsernameValid,
}
