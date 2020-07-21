const isGithubUsernameValid = (username) => {
    var pattern = /^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i
    return pattern.test(username)
}

export {isGithubUsernameValid};