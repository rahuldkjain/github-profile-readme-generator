import React, { useEffect, useState } from "react"
import { StarIcon, RepoForkedIcon } from '@primer/octicons-react'
import logo from '../images/mdg.png'
import gsap from 'gsap';

const Header = (props) => {
  const [stats, setStats] = useState({ stars: 0, forks: 0 });

  const fetchStats = async () => {
    console.log('stats:updated')
    const response = await fetch('https://api.github.com/repos/rahuldkjain/github-profile-readme-generator');
    if (response.ok) {
      const {forks_count: forks, stargazers_count: stars } = await response.json();
      setStats({ stars, forks });
    } else {
      throw 'Api fetching failed'
    }
  }

  const showStat = (count) => count ? `(${count})` : '';

  useEffect(()=> {
    gsap.set('.star-icon, .fork-icon', {
      transformOrigin: 'center',
    });
    gsap.to('.star-icon, .fork-icon', {
      rotateZ: '360',
      duration: 2,
      ease: 'elastic.inOut',
      repeat: -1,
      yoyo: true,
    });

    // repo stats
    fetchStats(); // async initial
    window.addEventListener('visibilitychange', () => !document.hidden && window.setTimeout(fetchStats, 5000)); // post 5 secs
    window.setInterval(fetchStats, 900000); // every 15 mins
  }, [])

  return (
    <div className="header">
      <h1 className="heading">
        <img src={logo} onClick={() => window.location.reload(false)}
          className="logo" alt="github profile markdown generator logo" />
        <div onClick={() => window.location.reload(false)} role="button" tabIndex="0">
          {props.heading}
        </div>
      </h1>
      <div className="github">
        <a href="https://github.com/rahuldkjain/github-profile-readme-generator"
          aria-label="Star rahuldkjain/github-profile-readme-generator on GitHub" target="blank">
          <div className="github-button"> <StarIcon size={16} className="star-icon" /> Star this repo {showStat(stats.stars)} </div>
        </a>
        <a href="https://github.com/rahuldkjain/github-profile-readme-generator/fork"
          aria-label="Fork rahuldkjain/github-profile-readme-generator on GitHub" target="blank">
          <div className="github-button"><RepoForkedIcon size={16} className="fork-icon" /> Fork on Github {showStat(stats.forks)} </div>
        </a>
      </div>
    </div>
  )
}

export default Header
