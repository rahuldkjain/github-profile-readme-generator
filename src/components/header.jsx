import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { StarIcon, RepoForkedIcon } from '@primer/octicons-react';
import gsap from 'gsap';
import axios from 'axios';
import { Link } from 'gatsby';
import { act } from 'react-dom/test-utils';
import links from '../constants/page-links';
import logo from '../images/mdg.png';

const Header = (props) => {
  const { heading } = props;
  // Theme state: 'light' or 'dark'. Persisted to localStorage.
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'light';
    const stored = window.localStorage.getItem('theme');
    if (stored) return stored;
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });
  const [stats, setstats] = useState({
    starsCount: 0,
    forksCount: 0,
  });

  const shouldRequestStats = () => {
    const isFirstRequest = stats.starsCount === 0;
    const isVisible = window.document.visibilityState === 'visible';
    const hasFocus = window.document.hasFocus();
    return isFirstRequest || (isVisible && hasFocus);
  };

  const fetchData = async () => {
    if (shouldRequestStats()) {
      const response = await axios.get('https://api.github.com/repos/rahuldkjain/github-profile-readme-generator');

      const { stargazers_count: stargazersCount, forks_count: forksCount } = response.data;

      act(() =>
        setstats({
          starsCount: stargazersCount,
          forksCount,
        }),
      );
    }
  };
  useEffect(() => {
  fetchData();
    setInterval(fetchData, 60000);

    gsap.set('.star, .fork', {
      transformOrigin: 'center',
    });
    gsap.to('.star, .fork', {
      rotateZ: '360',
      duration: 2,
      ease: 'elastic.inOut',
      repeat: -1,
      yoyo: true,
    });
  }, []);

  // Apply theme to document root and persist selection
  useEffect(() => {
    if (typeof document !== 'undefined') {
      if (theme === 'dark') document.documentElement.classList.add('dark');
      else document.documentElement.classList.remove('dark');
    }
    if (typeof window !== 'undefined') window.localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));

  return (
    <div className="shadow flex items-center justify-center flex-col mb-2 py-2">
      <Link to={links.home}>
  <h1 className="text-base font-bold font-title sm:text-2xl text-blue-800 flex justify-center items-center flex-col">
          <img src={logo} className="w-12 h-12" alt="github profile markdown generator logo" />
          <div>{heading}</div>
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
            <span className="github-count px-1 sm:px-2">{stats.starsCount}</span>
          </div>
        </a>
        <button
          type="button"
          onClick={toggleTheme}
          aria-label="Toggle dark mode"
          className="ml-2 text-xxs sm:text-sm border-2 border-solid border-gray-900 bg-gray-100 flex items-center justify-center py-1 px-2 rounded"
        >
          {theme === 'dark' ? 'Light' : 'Dark'}
        </button>
        <a
          href="https://github.com/rahuldkjain/github-profile-readme-generator/fork"
          aria-label="Fork rahuldkjain/github-profile-readme-generator on GitHub"
          target="blank"
        >
          <div className="text-xxs sm:text-sm border-2 border-solid border-gray-900 bg-gray-100 flex items-center justify-center py-1 px-2">
            <RepoForkedIcon size={16} id="fork-icon" className="px-1 w-6 fork" />
            Fork on GitHub
            <span className="github-count px-1 sm:px-2">{stats.forksCount}</span>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Header;
Header.propTypes = {
  heading: PropTypes.string.isRequired,
};
