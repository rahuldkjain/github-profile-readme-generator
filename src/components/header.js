import React, { useEffect, useState } from "react"
import { StarIcon, RepoForkedIcon } from '@primer/octicons-react'
import logo from '../images/mdg.png'
import gsap from 'gsap';
import axios from 'axios';

const Header = (props) => {
  const fetchData = async () => {
    var response = await axios.get('https://api.github.com/repos/rahuldkjain/github-profile-readme-generator');
    
    const {stargazers_count,forks_count} = response.data;
    
    setstats({
      starsCount : stargazers_count,
      forksCount : forks_count
    });
  }

  const [stats, setstats] = useState({
    starsCount : 0,
    forksCount : 0
  });          

  useEffect(() => {
    fetchData();
    setInterval( fetchData, 15000);
  }, []);

  useEffect(()=>{
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
  })
  return (
    <div className="header">
      <h1 className="heading">
        <img src={logo} onClick={() => window.location.reload(false)}
          className="logo" alt="github profile markdown generator logo" />
        <div onClick={() => window.location.reload(false)} role="button" tabIndex="0">
          {props.heading}
        </div>
      </h1>
      <div className="github" >
        <a href="https://github.com/rahuldkjain/github-profile-readme-generator"
          aria-label="Star rahuldkjain/github-profile-readme-generator on GitHub" target="blank">
          <div className="github-button" style={{width:"200px"}}> <StarIcon size={16} className="star-icon" /> Star this repo { stats.starsCount }</div>
        </a>
        <a href="https://github.com/rahuldkjain/github-profile-readme-generator/fork"
          aria-label="Fork rahuldkjain/github-profile-readme-generator on GitHub" target="blank">
          <div className="github-button" style={{width:"200px"}}><RepoForkedIcon size={16} className="fork-icon" /> Fork on Github { stats.forksCount }</div>
        </a>
      </div>
    </div>
  )
}

export default Header
