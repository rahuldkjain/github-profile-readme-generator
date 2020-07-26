import React, { useEffect, useState } from "react"
import { StarIcon, RepoForkedIcon } from "@primer/octicons-react"
import logo from "../images/mdg.png"
import gsap from "gsap"
import axios from "axios"

const Header = props => {
  const fetchData = async () => {
    var response = await axios.get(
      "https://api.github.com/repos/rahuldkjain/github-profile-readme-generator"
    )

    const { stargazers_count, forks_count } = response.data

    setstats({
      starsCount: stargazers_count,
      forksCount: forks_count,
    })
  }

  const [stats, setstats] = useState({
    starsCount: 0,
    forksCount: 0,
  })

  useEffect(() => {
    fetchData()
    setInterval(fetchData, 60000)

    gsap.set(".star-icon, .fork-icon", {
      transformOrigin: "center",
    })
    gsap.to(".star-icon, .fork-icon", {
      rotateZ: "360",
      duration: 2,
      ease: "elastic.inOut",
      repeat: -1,
      yoyo: true,
    })
  }, [])

  return (
    <div className="header">
      <a href="/gh-profile-readme-generator">
        <h1 className="heading">
          <img
            src={logo}
            className="logo"
            alt="github profile markdown generator logo"
          />
          <div>
            {props.heading}
          </div>
        </h1>
      </a>
      <div className="github">
        <a
          href="https://github.com/rahuldkjain/github-profile-readme-generator"
          aria-label="Star rahuldkjain/github-profile-readme-generator on GitHub"
          target="blank"
        >
          <div className="github-button">
            <StarIcon size={16} className="star-icon" /> Star this repo{" "}
            <span className="github-count">{stats.starsCount}</span>
          </div>
        </a>
        <a
          href="https://github.com/rahuldkjain/github-profile-readme-generator/fork"
          aria-label="Fork rahuldkjain/github-profile-readme-generator on GitHub"
          target="blank"
        >
          <div className="github-button">
            <RepoForkedIcon size={16} className="fork-icon" /> Fork on Github{" "}
            <span className="github-count">{stats.forksCount}</span>
          </div>
        </a>
      </div>
    </div>
  )
}

export default Header
