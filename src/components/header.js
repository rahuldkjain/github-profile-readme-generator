import { Link } from "gatsby"
import React from "react"
import GitHubButton from 'react-github-btn'

const Header = (props) => {
  return (
    <div className="header">
      <h1 className="heading">
        <Link to="/" style={{textDecoration: 'none', color: '#0a0a23'}}>
          {props.heading}
        </Link>
      </h1>
      <GitHubButton id="star-github" href="https://github.com/rahuldkjain/github-profile-readme-generator"
        data-icon="octicon-star" aria-label="Star rahuldkjain/github-profile-readme-generator on GitHub">
        Star this repo</GitHubButton>
      <GitHubButton id="fork-github" href="https://github.com/rahuldkjain/github-profile-readme-generator/fork"
        data-icon="octicon-repo-forked"
        aria-label="Fork rahuldkjain/github-profile-readme-generator on GitHub">Fork on Github</GitHubButton>
    </div>
  )
}

export default Header
