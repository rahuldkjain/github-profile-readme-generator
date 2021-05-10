import React from "react"
import { icons, skills, skillWebsites } from "../constants/skills"
import {
  githubStatsLinkGenerator,
  topLanguagesLinkGenerator,
  streakStatsLinkGenerator,
} from "../utils/link-generators"

export const TitlePreview = props => {
  if (props.prefix && props.title) {
    return (
      <h1 className="text-center text-xl font-bold">
        {props.prefix + " " + props.title}
      </h1>
    )
  }
  return null
}

export const SubTitlePreview = props => {
  if (props.subtitle) {
    return <h3 className="text-center font-medium">{props.subtitle}</h3>
  }
  return null
}

export const SectionTitle = props => {
  if (!props.visible) return null
  else if (props.label) {
    return <h3 className="w-full text-lg sm:text-xl">{props.label}</h3>
  }
  return null
}

export const DisplayWork = props => {
  if (props.prefix && props.project) {
    if (props.link) {
      return (
        <div className="my-2">
          {props.prefix + " "}
          <a
            href={props.link}
            className="no-underline text-blue-700"
            target="blank"
          >
            {props.project}
          </a>
        </div>
      )
    } else {
      return (
        <div className="my-2">
          {props.prefix + " "}
          <b>{props.project}</b>
        </div>
      )
    }
  }
  if (props.prefix && props.link) {
    return (
      <div className="my-2">
        {props.prefix + " "}
        <a
          href={props.link}
          className="no-underline text-blue-700"
          target="blank"
        >
          {props.link}
        </a>
      </div>
    )
  }
  return null
}

export const WorkPreview = props => {
  const prefix = props.work.prefix
  const data = props.work.data
  const link = props.work.link
  return (
    <>
      <DisplayWork
        prefix={prefix.currentWork}
        project={data.currentWork}
        link={link.currentWork}
      />
      <DisplayWork prefix={prefix.currentLearn} project={data.currentLearn} />
      <DisplayWork
        prefix={prefix.helpWith}
        project={data.helpWith}
        link={link.helpWith}
      />
      <DisplayWork
        prefix={prefix.collaborateOn}
        project={data.collaborateOn}
        link={link.collaborateOn}
      />
      <DisplayWork prefix={prefix.ama} project={data.ama} />
      <DisplayWork prefix={prefix.portfolio} link={link.portfolio} />
      <DisplayWork prefix={prefix.blog} link={link.blog} />
      <DisplayWork prefix={prefix.resume} link={link.resume} />
      <DisplayWork prefix={prefix.contact} project={data.contact} />
      <DisplayWork prefix={prefix.funFact} project={data.funFact} />
    </>
  )
}

export const DisplaySocial = props => {
  if (props.username) {
    return (
      <a
        className="no-underline text-blue-700 m-2"
        href={props.base + "/" + props.username}
        target="blank"
      >
        <img className="w-6 h-6" src={props.icon} alt="props.username" />
      </a>
    )
  }
  return null
}

export const SocialPreview = props => {
  let viewSocial = false
    const icon_base_url =
    "https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/";
  Object.keys(props.social).forEach(key => {
    if (props.social[key] && key != "github") viewSocial = true
  })
  return (
    <div className="flex justify-start items-end flex-wrap">
      <SectionTitle label="Connect with me:" visible={viewSocial} />
      <>
        <DisplaySocial
          base="https://codepen.io"
          icon={icon_base_url + "codepen.svg"}
          username={props.social.codepen}
        />
      </>
      <>
        <DisplaySocial
          base="https://dev.to"
          icon="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/dev-dot-to.svg"
          username={props.social.dev}
        />
      </>
      <>
        <DisplaySocial
          base="https://twitter.com"
          icon={icon_base_url + "twitter.svg"}
          username={props.social.twitter}
        />
      </>
      <>
        <DisplaySocial
          base="https://linkedin.com/in"    
          icon={icon_base_url + "linked-in-alt.svg"}
          username={props.social.linkedin}
        />
      </>
      <>
        <DisplaySocial
          base="https://stackoverflow.com/users"
          icon={icon_base_url + "stack-overflow.svg"}
          username={props.social.stackoverflow}
        />
      </>
      <>
        <DisplaySocial
          base="https://codesandbox.com"
          icon="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/codesandbox.svg"
          username={props.social.codesandbox}
        />
      </>
      <>
        <DisplaySocial
          base="https://kaggle.com"
          icon={icon_base_url + "kaggle.svg"}
          username={props.social.kaggle}
        />
      </>
      <>
        <DisplaySocial
          base="https://fb.com"
          icon={icon_base_url + "facebook.svg"}
          username={props.social.fb}
        />
      </>
      <>
        <DisplaySocial
          base="https://instagram.com"
          icon={icon_base_url + "instagram.svg"}
          username={props.social.instagram}
        />
      </>
      <>
        <DisplaySocial
          base="https://dribbble.com"
          icon={icon_base_url + "dribbble.svg"}
          username={props.social.dribbble}
        />
      </>
      <>
        <DisplaySocial
          base="https://www.behance.net"
          icon={icon_base_url + "behance.svg"}
          username={props.social.behance}
        />
      </>
      <>
        <DisplaySocial
          base="https://medium.com"
          icon={icon_base_url + "medium.svg"}
          username={props.social.medium}
        />
      </>
      <>
        <DisplaySocial
          base="https://www.youtube.com/c"
          icon={icon_base_url + "youtube.svg"}
          username={props.social.youtube}
        />
      </>
      <>
        <DisplaySocial
          base="https://www.codechef.com/users"
          icon="https://cdn.jsdelivr.net/npm/simple-icons@3.1.0/icons/codechef.svg"
          username={props.social.codechef}
        />
      </>
      <>
        <DisplaySocial
          base="https://www.hackerrank.com"
          icon={icon_base_url + "hackerrank.svg"}
          username={props.social.hackerrank}
        />
      </>
      <>
        <DisplaySocial
          base="https://codeforces.com/profile"
          icon="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/codeforces.svg"
          username={props.social.codeforces}
        />
      </>
      <>
        <DisplaySocial
          base="https://www.leetcode.com"
          icon={icon_base_url+"leet-code.svg"}
          username={props.social.leetcode}
        />
      </>
      <>
        <DisplaySocial
          base="https://www.hackerearth.com"
          icon={icon_base_url+"hackerearth.svg"}
          username={props.social.hackerearth}
        />
      </>
      <>
        <DisplaySocial
          base="https://auth.geeksforgeeks.org/user"
          icon={icon_base_url + "geeks-for-geeks.svg"}
          username={props.social.geeks_for_geeks}
        />
      </>
      <>
        <DisplaySocial
          base="https://www.topcoder.com/members"
          icon="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/topcoder.svg"
          username={props.social.topcoder}
        />
      </>
      <>
        <DisplaySocial
          base="https://discord.gg"
          icon={icon_base_url + "discord.svg"}
          username={props.social.discord}
        />
      </>
      <>
        <DisplaySocial
          base=""
          icon={icon_base_url + "rss.svg"}
          username={props.social.rssurl}
        />
      </>
    </div>
  )
}

export const VisitorsBadgePreview = props => {
  let link =
    "https://komarev.com/ghpvc/?username=" +
    props.github +
    `&label=${props.badgeOptions.badgeLabel}` +
    `&color=${props.badgeOptions.badgeColor}` +
    `&style=${props.badgeOptions.badgeStyle}`
  if (props.show) {
    return (
      <div className="text-left my-2">
        {" "}
        <img className="h-4 sm:h-6" src={link} alt={props.github} />{" "}
      </div>
    )
  }
  return null
}

export const TwitterBadgePreview = props => {
  let link =
    "https://img.shields.io/twitter/follow/" +
    props.twitter +
    "?logo=twitter&style=for-the-badge"
  if (props.show) {
    return (
      <div className="text-left my-2">
        {" "}
        <a href="https://twitter.com/${props.twitter}" target="blank">
          <img className="h-4 sm:h-6" src={link} alt={props.twitter} />
        </a>{" "}
      </div>
    )
  }
  return null
}

export const GithubProfileTrophyPreview = props => {
  let link =
    "https://github-profile-trophy.vercel.app/?username=" + props.github
  if (props.show) {
    return (
      <div className="text-left my-2">
        {" "}
        <a href="https://github.com/ryo-ma/github-profile-trophy">
          <img src={link} alt={props.github} />
        </a>{" "}
      </div>
    )
  }
  return null
}

export const GitHubStatsPreview = ({ github, options, show }) => {
  if (show) {
    return (
      <div className="text-center mx-4 mb-4">
        <img src={githubStatsLinkGenerator({ github, options })} alt={github} />
      </div>
    )
  }
  return null
}

export const TopLanguagesPreview = ({ github, options, show }) => {
  if (show) {
    return (
      <div className="text-center mx-4 mb-4">
        <img
          src={topLanguagesLinkGenerator({ github, options })}
          alt={github}
        />
      </div>
    )
  }
  return <div className="text-center mx-4 mb-4"> &nbsp;</div>
}

export const StreakStatsPreview = ({ github, options, show }) => {
  if (show) {
    return (
      <div className="text-center mx-4 mb-4">
        <img src={streakStatsLinkGenerator({ github, options })} alt={github} />
      </div>
    )
  }
  return null
}

export const SkillsPreview = props => {
  var listSkills = []
  skills.forEach(skill => {
    if (props.skills[skill]) {
      listSkills.push(
        <a
          href={skillWebsites[skill]}
          key={skill}
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="mb-4 mr-4 h-6 w-6 sm:h-10 sm:w-10"
            src={icons[skill]}
            alt={skill}
          />
        </a>
      )
    }
  })
  return listSkills.length > 0 ? (
    <div className="flex flex-wrap justify-start items-center">
      <SectionTitle label="Languages and Tools:" visible={true} />
      {listSkills}
    </div>
  ) : (
    ""
  )
}

export const SupportPreview = props => {
  let viewSupport = false
  Object.keys(props.support).forEach(key => {
    if (props.support[key]) {
      viewSupport = true
    }
  })
  return (
    <div className="mb-4">
      <SectionTitle label="Support:" visible={viewSupport} />
      {props.support.buyMeACoffee && (
        <div style={{ width: "210px" }}>
          <a
            href={`https://www.buymeacoffee.com/` + props.support.buyMeACoffee}
            target="_blank"
          >
            <img
              src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
              alt="Buy Me A Coffee"
              className="w-36 h-8 sm:w-52 sm:h-12"
            />
          </a>
        </div>
      )}
    </div>
  )
}

const MarkdownPreview = props => {
  return (
    <div id="markdown-preview">
      <TitlePreview prefix={props.prefix.title} title={props.data.title} />
      <SubTitlePreview subtitle={props.data.subtitle} />
      <VisitorsBadgePreview
        show={props.data.visitorsBadge}
        github={props.social.github}
        badgeOptions={{
          badgeLabel: encodeURI(props.data.badgeLabel),
          badgeColor: props.data.badgeColor,
          badgeStyle: props.data.badgeStyle,
        }}
      />
      <GithubProfileTrophyPreview
        show={props.data.githubProfileTrophy}
        github={props.social.github}
      />
      <TwitterBadgePreview
        show={props.data.twitterBadge}
        twitter={props.social.twitter}
      />
      <WorkPreview work={props} />
      <SocialPreview social={props.social} />
      <SkillsPreview skills={props.skills} />
      <SupportPreview support={props.support} />
      <div className="block sm:flex sm:justify-center sm:items-start">
        <TopLanguagesPreview
          show={props.data.topLanguages}
          github={props.social.github}
          options={props.data.topLanguagesOptions}
        />
        <GitHubStatsPreview
          show={props.data.githubStats}
          github={props.social.github}
          options={props.data.githubStatsOptions}
        />
        <StreakStatsPreview
          show={props.data.streakStats}
          github={props.social.github}
          options={props.data.streakStatsOptions}
        />
      </div>
    </div>
  )
}

export default MarkdownPreview
