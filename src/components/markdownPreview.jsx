import React from 'react';
import PropTypes from 'prop-types';
import { icons, skills as SKILLS, skillWebsites } from '../constants/skills';
import { githubStatsLinkGenerator, topLanguagesLinkGenerator, streakStatsLinkGenerator } from '../utils/link-generators';
import { DEFAULT_DATA, DEFAULT_PREFIX, DEFAULT_SOCIAL, DEFAULT_SUPPORT } from '../constants/defaults';

export const TitlePreview = (props) => {
  const { prefix, title } = props;
  if (prefix && title) {
    return <h1 className="text-center text-xl font-bold">{`${prefix} ${title}`}</h1>;
  }
  return null;
};
TitlePreview.propTypes = {
  prefix: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export const SubTitlePreview = (props) => {
  const { subtitle } = props;
  if (subtitle) {
    return <h3 className="text-center font-medium">{subtitle}</h3>;
  }
  return null;
};
SubTitlePreview.propTypes = {
  subtitle: PropTypes.string.isRequired,
};

export const SectionTitle = (props) => {
  const { visible, label } = props;
  if (!visible) return null;
  if (label) {
    return <h3 className="w-full text-lg sm:text-xl">{label}</h3>;
  }
  return null;
};
SectionTitle.defaultProps = {
  visible: false,
};
SectionTitle.propTypes = {
  visible: PropTypes.bool,
  label: PropTypes.string.isRequired,
};

export const DisplayWork = (props) => {
  const { prefix, project, link } = props;
  if (prefix && project) {
    if (link) {
      return (
        <div className="my-2">
          {`${prefix} `}
          <a href={link} className="no-underline text-blue-700" target="blank">
            {project}
          </a>
        </div>
      );
    }
    return (
      <div className="my-2">
        {`${prefix} `}
        <b>{project}</b>
      </div>
    );
  }
  if (prefix && link) {
    return (
      <div className="my-2">
        {`${prefix} `}
        <a href={link} className="no-underline text-blue-700" target="blank">
          {link}
        </a>
      </div>
    );
  }
  return null;
};

DisplayWork.defaultProps = {
  prefix: '',
  project: '',
  link: '',
};

DisplayWork.propTypes = {
  prefix: PropTypes.string,
  project: PropTypes.string,
  link: PropTypes.string,
};

export const WorkPreview = (props) => {
  const { work } = props;
  const { prefix, data, link } = work;
  return (
    <>
      <DisplayWork prefix={prefix.currentWork} project={data.currentWork} link={link.currentWork} />
      <DisplayWork prefix={prefix.currentLearn} project={data.currentLearn} />
      <DisplayWork prefix={prefix.helpWith} project={data.helpWith} link={link.helpWith} />
      <DisplayWork prefix={prefix.collaborateOn} project={data.collaborateOn} link={link.collaborateOn} />
      <DisplayWork prefix={prefix.ama} project={data.ama} />
      <DisplayWork prefix={prefix.portfolio} link={link.portfolio} />
      <DisplayWork prefix={prefix.blog} link={link.blog} />
      <DisplayWork prefix={prefix.resume} link={link.resume} />
      <DisplayWork prefix={prefix.contact} project={data.contact} />
      <DisplayWork prefix={prefix.funFact} project={data.funFact} />
    </>
  );
};
WorkPreview.propTypes = {
  work: PropTypes.object.isRequired,
};

export const DisplaySocial = (props) => {
  const { username, base, icon } = props;
  if (username) {
    return (
      <a className="no-underline text-blue-700 m-2" href={`${base}/${username}`} target="blank">
        <img className="w-6 h-6" src={icon} alt="username" />
      </a>
    );
  }
  return null;
};
DisplaySocial.defaultProps = {
  username: '',
  base: '',
  icon: '',
};
DisplaySocial.propTypes = {
  username: PropTypes.string,
  base: PropTypes.string,
  icon: PropTypes.string,
};

export const SocialPreview = (props) => {
  const { social } = props;
  let viewSocial = false;
  const iconBaseUrl = 'https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/';
  Object.keys(social).forEach((key) => {
    if (social[key] && key !== 'github') viewSocial = true;
  });
  return (
    <div className="flex justify-start items-end flex-wrap">
      <SectionTitle label="Connect with me:" visible={viewSocial} />
      <>
        <DisplaySocial base="https://codepen.io" icon={`${iconBaseUrl}codepen.svg`} username={social.codepen} />
      </>
      <>
        <DisplaySocial base="https://dev.to" icon={`${iconBaseUrl}devto.svg`} username={social.dev} />
      </>
      <>
        <DisplaySocial base="https://twitter.com" icon={`${iconBaseUrl}twitter.svg`} username={social.twitter} />
      </>
      <>
        <DisplaySocial base="https://linkedin.com/in" icon={`${iconBaseUrl}linked-in-alt.svg`} username={social.linkedin} />
      </>
      <>
        <DisplaySocial base="https://stackoverflow.com/users" icon={`${iconBaseUrl}stack-overflow.svg`} username={social.stackoverflow} />
      </>
      <>
        <DisplaySocial base="https://codesandbox.com" icon={`${iconBaseUrl}codesandbox.svg`} username={social.codesandbox} />
      </>
      <>
        <DisplaySocial base="https://kaggle.com" icon={`${iconBaseUrl}kaggle.svg`} username={social.kaggle} />
      </>
      <>
        <DisplaySocial base="https://fb.com" icon={`${iconBaseUrl}facebook.svg`} username={social.fb} />
      </>
      <>
        <DisplaySocial base="https://instagram.com" icon={`${iconBaseUrl}instagram.svg`} username={social.instagram} />
      </>
      <>
        <DisplaySocial base="https://dribbble.com" icon={`${iconBaseUrl}dribbble.svg`} username={social.dribbble} />
      </>
      <>
        <DisplaySocial base="https://www.behance.net" icon={`${iconBaseUrl}behance.svg`} username={social.behance} />
      </>
      <>
        <DisplaySocial base="https://hashnode.com" icon={`${iconBaseUrl}hashnode.svg`} username={social.hashnode} />
      </>
      <>
        <DisplaySocial base="https://medium.com" icon={`${iconBaseUrl}medium.svg`} username={social.medium} />
      </>
      <>
        <DisplaySocial base="https://www.youtube.com/c" icon={`${iconBaseUrl}youtube.svg`} username={social.youtube} />
      </>
      <>
        <DisplaySocial base="https://www.codechef.com/users" icon="https://cdn.jsdelivr.net/npm/simple-icons@3.1.0/icons/codechef.svg" username={social.codechef} />
      </>
      <>
        <DisplaySocial base="https://www.hackerrank.com" icon={`${iconBaseUrl}hackerrank.svg`} username={social.hackerrank} />
      </>
      <>
        <DisplaySocial base="https://codeforces.com/profile" icon={`${iconBaseUrl}codeforces.svg`} username={social.codeforces} />
      </>
      <>
        <DisplaySocial base="https://www.leetcode.com" icon={`${iconBaseUrl}leet-code.svg`} username={social.leetcode} />
      </>
      <>
        <DisplaySocial base="https://www.hackerearth.com" icon={`${iconBaseUrl}hackerearth.svg`} username={social.hackerearth} />
      </>
      <>
        <DisplaySocial base="https://auth.geeksforgeeks.org/user" icon={`${iconBaseUrl}geeks-for-geeks.svg`} username={social.geeks_for_geeks} />
      </>
      <>
        <DisplaySocial base="https://www.topcoder.com/members" icon={`${iconBaseUrl}topcoder.svg`} username={social.topcoder} />
      </>
      <>
        <DisplaySocial base="https://discord.gg" icon={`${iconBaseUrl}discord.svg`} username={social.discord} />
      </>
      <>
        <DisplaySocial base="" icon={`${iconBaseUrl}rss.svg`} username={social.rssurl} />
      </>
    </div>
  );
};
SocialPreview.propTypes = {
  social: PropTypes.object.isRequired,
};

export const VisitorsBadgePreview = (props) => {
  const { github, show, badgeOptions } = props;
  const link = `https://komarev.com/ghpvc/?username=${github}&label=${badgeOptions.badgeLabel}&color=${badgeOptions.badgeColor}&style=${badgeOptions.badgeStyle}`;
  if (show) {
    return (
      <div className="text-left my-2">
        {' '}
        <img className="h-4 sm:h-6" src={link} alt={github} />{' '}
      </div>
    );
  }
  return null;
};
VisitorsBadgePreview.defaultProps = {
  github: '',
  show: false,
  badgeOptions: {},
};
VisitorsBadgePreview.propTypes = {
  github: PropTypes.string,
  show: PropTypes.bool,
  badgeOptions: PropTypes.object,
};

export const TwitterBadgePreview = (props) => {
  const { twitter, show } = props;
  const link = `https://img.shields.io/twitter/follow/${twitter}?logo=twitter&style=for-the-badge`;
  if (show) {
    return (
      <div className="text-left my-2">
        {' '}
        <a href={`https://twitter.com/${twitter}`} target="_blank" rel="noreferrer">
          <img className="h-4 sm:h-6" src={link} alt={twitter} />
        </a>{' '}
      </div>
    );
  }
  return null;
};
TwitterBadgePreview.defaultProps = {
  twitter: '',
  show: false,
};
TwitterBadgePreview.propTypes = {
  twitter: PropTypes.string,
  show: PropTypes.bool,
};

export const GithubProfileTrophyPreview = (props) => {
  const { github, show } = props;
  const link = `https://github-profile-trophy.vercel.app/?username=${github}`;
  if (show) {
    return (
      <div className="text-left my-2">
        {' '}
        <a href="https://github.com/ryo-ma/github-profile-trophy">
          <img src={link} alt={github} />
        </a>{' '}
      </div>
    );
  }
  return null;
};
GithubProfileTrophyPreview.defaultProps = {
  github: '',
  show: false,
};
GithubProfileTrophyPreview.propTypes = {
  github: PropTypes.string,
  show: PropTypes.bool,
};

export const GitHubStatsPreview = ({ github, options, show }) => {
  if (show) {
    return (
      <div className="text-center mx-4 mb-4">
        <img src={githubStatsLinkGenerator({ github, options })} alt={github} />
      </div>
    );
  }
  return null;
};
GitHubStatsPreview.defaultProps = {
  github: '',
  options: {},
  show: false,
};
GitHubStatsPreview.propTypes = {
  github: PropTypes.string,
  options: PropTypes.object,
  show: PropTypes.bool,
};

export const TopLanguagesPreview = ({ github, options, show }) => {
  if (show) {
    return (
      <div className="text-center mx-4 mb-4">
        <img src={topLanguagesLinkGenerator({ github, options })} alt={github} />
      </div>
    );
  }
  return <div className="text-center mx-4 mb-4"> &nbsp;</div>;
};
TopLanguagesPreview.defaultProps = {
  github: '',
  options: {},
  show: false,
};
TopLanguagesPreview.propTypes = {
  github: PropTypes.string,
  options: PropTypes.object,
  show: PropTypes.bool,
};

export const StreakStatsPreview = ({ github, options, show }) => {
  if (show) {
    return (
      <div className="text-center mx-4 mb-4">
        <img src={streakStatsLinkGenerator({ github, options })} alt={github} />
      </div>
    );
  }
  return null;
};
StreakStatsPreview.defaultProps = {
  github: '',
  options: {},
  show: false,
};
StreakStatsPreview.propTypes = {
  github: PropTypes.string,
  options: PropTypes.object,
  show: PropTypes.bool,
};

export const SkillsPreview = (props) => {
  const { skills } = props;
  const listSkills = [];
  SKILLS.forEach((skill) => {
    if (skills[skill]) {
      listSkills.push(
        <a href={skillWebsites[skill]} key={skill} target="_blank" rel="noreferrer">
          <img className="mb-4 mr-4 h-6 w-6 sm:h-10 sm:w-10" src={icons[skill]} alt={skill} />
        </a>,
      );
    }
  });
  return listSkills.length > 0 ? (
    <div className="flex flex-wrap justify-start items-center">
      <SectionTitle label="Languages and Tools:" visible />
      {listSkills}
    </div>
  ) : (
    ''
  );
};
SkillsPreview.propTypes = {
  skills: PropTypes.array.isRequired,
};

export const SupportPreview = (props) => {
  const { support } = props;
  let viewSupport = false;
  Object.keys(support).forEach((key) => {
    if (support[key]) {
      viewSupport = true;
    }
  });
  return support.buyMeACoffee || support.buyMeAKofi ? (
    <div className="flex flex-wrap justify-start items-center">
      <SectionTitle label="Support:" visible={viewSupport} />
      {support.buyMeACoffee && (
        <a href={`https://www.buymeacoffee.com/${support.buyMeACoffee}`} target="_blank" rel="noreferrer">
          <img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" className="mb-4 mr-4 w-36 h-8 sm:w-52 sm:h-12" />
        </a>
      )}
      {support.buyMeAKofi && (
        <a href={`https://ko-fi.com/${support.buyMeAKofi}`} target="_blank" rel="noreferrer">
          <img src="https://cdn.ko-fi.com/cdn/kofi3.png?v=3" alt="Buy Me A Ko-fi" className="mb-4 mr-4 w-36 h-8 sm:w-52 sm:h-12" />
        </a>
      )}
    </div>
  ) : (
    ''
  );
};
SupportPreview.propTypes = {
  support: PropTypes.object.isRequired,
};

const MarkdownPreview = (props) => {
  const { prefix, data, social, skills, support } = props;
  return (
    <div id="markdown-preview">
      <TitlePreview prefix={prefix.title} title={data.title} />
      <SubTitlePreview subtitle={data.subtitle} />
      <VisitorsBadgePreview
        show={data.visitorsBadge}
        github={social.github}
        badgeOptions={{
          badgeLabel: encodeURI(data.badgeLabel),
          badgeColor: data.badgeColor,
          badgeStyle: data.badgeStyle,
        }}
      />
      <GithubProfileTrophyPreview show={data.githubProfileTrophy} github={social.github} />
      <TwitterBadgePreview show={data.twitterBadge} twitter={social.twitter} />
      <WorkPreview work={props} />
      <SocialPreview social={social} />
      <SkillsPreview skills={skills} />
      <SupportPreview support={support} />
      <div className="block sm:flex sm:justify-center sm:items-start">
        <TopLanguagesPreview show={data.topLanguages} github={social.github} options={data.topLanguagesOptions} />
        <GitHubStatsPreview show={data.githubStats} github={social.github} options={data.githubStatsOptions} />
        <StreakStatsPreview show={data.streakStats} github={social.github} options={data.streakStatsOptions} />
      </div>
    </div>
  );
};

export default MarkdownPreview;

MarkdownPreview.defaultProps = {
  prefix: DEFAULT_PREFIX,
  data: DEFAULT_DATA,
  social: DEFAULT_SOCIAL,
  support: DEFAULT_SUPPORT,
  skills: [],
};

MarkdownPreview.propTypes = {
  prefix: PropTypes.object,
  data: PropTypes.object,
  social: PropTypes.object,
  skills: PropTypes.object,
  support: PropTypes.object,
};
