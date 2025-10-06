import React from 'react';
import { Link } from 'gatsby';
import { useTranslation } from 'react-i18next';
import links from '../constants/page-links';
import logo from '../images/mdg.png';
import discord from '../images/Discord-Logo.png';

const Footer = () => {
  const { t } = useTranslation();
  
  return (
    <div className="bg-gray-100 p-4 flex flex-col justify-center items-center shadow-inner mt-2">"
    <div className="w-full flex flex-col sm:flex-row justify-evenly py-2">
      <div className="sm:ml-0 sm:mr-6 order-last sm:order-none flex">
        <h1 className="text-base font-bold font-title text-xl sm:text-2xl mt-3 sm:mt-0">
          <div className="flex sm:flex-col items-start mb-3 sm:mb-0">
            <img src={logo} className="hidden sm:block h-24" alt="github profile markdown generator logo" />
            <div className="mr-2 sm:mr-0">
              GitHub Profile{' '}
              <img src={logo} className="inline sm:hidden h-12" alt="github profile markdown generator logo" />
              <span className="block sm:inline">README Generator</span>
            </div>
          </div>
        </h1>
      </div>
      <div className="text-xl sm:text-base font-light sm:font-normal">
        <div className="font-title font-bold mb-4 sm:mb-2">
          <strong>{t('footer.pages')}</strong>
        </div>
        <div className="ml-2 sm:ml-0">
          <Link to={links.addons} activeStyle={{ color: '#002ead' }}>
            {t('footer.addons')}
          </Link>
        </div>
        <div className="ml-2 sm:ml-0">
          <Link to={links.support} activeStyle={{ color: '#002ead' }}>
            {t('footer.support')}
          </Link>
        </div>
        <div className="ml-2 sm:ml-0">
          <Link to={links.about} activeStyle={{ color: '#002ead' }}>
            {t('footer.about')}
          </Link>
        </div>
      </div>
      <div className="text-xl sm:text-base font-light sm:font-normal">
        <div className="font-title font-bold my-4 sm:my-0 sm:mb-2">
          <strong>{t('footer.more')}</strong>
        </div>
        <div className="ml-2 sm:ml-0">
          <a
            href="https://github.com/rahuldkjain/github-profile-readme-generator"
            aria-label="Github rahuldkjain/github-profile-readme-generator"
            target="blank"
          >
            {t('footer.github')}
          </a>
        </div>
        <div className="ml-2 sm:ml-0">
          <a
            href="https://github.com/rahuldkjain/github-profile-readme-generator/releases"
            aria-label="Releases on Github rahuldkjain/github-profile-readme-generator"
            target="blank"
          >
            {t('footer.releases')}
          </a>
        </div>
        <div className="ml-2 sm:ml-0">
          <a
            href="https://github.com/rahuldkjain/github-profile-readme-generator/issues"
            aria-label="Issues in rahuldkjain/github-profile-readme-generator"
            target="blank"
          >
            {t('footer.issues')}
          </a>
        </div>
        <div className="ml-2 sm:ml-0">
          <a
            href="https://github.com/rahuldkjain/github-profile-readme-generator/pulls"
            aria-label="Pull Requests in rahuldkjain/github-profile-readme-generator"
            target="blank"
          >
            {t('footer.pullRequests')}
          </a>
        </div>
      </div>
      <div>
        <div className="font-title font-bold text-xl sm:text-base my-4 sm:my-0 sm:mb-2">
          <strong>{t('footer.joinCommunity')}</strong>
        </div>
        <div className="ml-2 sm:ml-0">
          <a href="https://discord.gg/HHMs7Eg" aria-label="Discord of the community" target="blank">
            <img src={discord} className="h-12" alt="Discord of the community" />
          </a>
        </div>
      </div>
    </div>
    <div className="py-2 mt-2">
      {t('footer.developedInIndia')}{' '}
      <span role="img" aria-label="india">
        {' '}
        🇮🇳
      </span>
    </div>
  </div>
);
};
export default Footer;
