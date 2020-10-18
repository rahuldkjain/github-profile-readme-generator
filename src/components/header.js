import React, { useEffect, useState } from "react"
import { StarIcon, RepoForkedIcon } from "@primer/octicons-react"
import logo from "../images/mdg.png"
import links from "../constants/page-links"
import gsap from "gsap"
import axios from "axios"
import { Link } from "gatsby"
import { act } from "react-dom/test-utils"

const Header = props => {
  const shouldRequestStats = () => {
    const isFirstRequest = stats.starsCount === 0
    const isVisible = window.document.visibilityState === 'visible'
    const hasFocus = window.document.hasFocus()
    return isFirstRequest || isVisible && hasFocus
  }

  const fetchData = async () => {
    if (shouldRequestStats()) {
      var response = await axios.get(
        "https://api.github.com/repos/rahuldkjain/github-profile-readme-generator"
      )

      const { stargazers_count, forks_count } = response.data

      act(() =>
        setstats({
          starsCount: stargazers_count,
          forksCount: forks_count,
        })
      )
    }
  }

  const [stats, setstats] = useState({
    starsCount: 0,
    forksCount: 0,
  })

  useEffect(() => {
    fetchData()
    setInterval(fetchData, 60000)

    gsap.set(".star, .fork", {
      transformOrigin: "center",
    })
    gsap.to(".star, .fork", {
      rotateZ: "360",
      duration: 2,
      ease: "elastic.inOut",
      repeat: -1,
      yoyo: true,
    })
  }, [])

  return (
    <div className="shadow flex items-center justify-center flex-col mb-2 py-2">
      <Link to={links.home}>
        <h1 className="text-base font-bold font-title sm:text-2xl font-medium text-blue-800 flex justify-center items-center flex-col">
          <img
            src={logo}
            className="w-12 h-12"
            alt="github profile markdown generator logo"
          />
          <div>{props.heading}</div>
        </h1>
      </Link>
      <div className="flex justify-center items-center">
        <a
          href="https://github.com/rahuldkjain/github-profile-readme-generator"
          aria-label="Star rahuldkjain/github-profile-readme-generator on GitHub"
          target="blank"
          className="mr-2"
        >
          <div className="text-xxs sm:text-sm border-2 border-solid border-gray-900 bg-gray-100 flex items-center justify-center py-1 px-2">
            <StarIcon size={16} id="star-icon" className="px-1 w-6 star" />
            Star this repo
            <span className="github-count px-1 sm:px-2">
              {stats.starsCount}
            </span>
          </div>
        </a>
        <a
          href="https://github.com/rahuldkjain/github-profile-readme-generator/fork"
          aria-label="Fork rahuldkjain/github-profile-readme-generator on GitHub"
          target="blank"
        >
          <div className="text-xxs sm:text-sm border-2 border-solid border-gray-900 bg-gray-100 flex items-center justify-center py-1 px-2">
            <RepoForkedIcon
              size={16}
              id="fork-icon"
              className="px-1 w-6 fork"
            />
            Fork on GitHub
            <span className="github-count px-1 sm:px-2">
              {stats.forksCount}
            </span>
          </div>
        </a>
      </div>
    </div>
  )
}

export default Header
