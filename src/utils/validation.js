const isGitHubUsernameValid = (username) => {
    var pattern = /^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i
    return pattern.test(username)
}
const isMediumUsernameValid = (username) => {
    if (username) {
        return username[0] === '@'
    }
    return true
}

export { isGitHubUsernameValid, isMediumUsernameValid };
