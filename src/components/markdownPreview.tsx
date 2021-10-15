import React from "react"
import { icons, skills, skillWebsites } from "../constants/skills"
import {
  githubStatsLinkGenerator,
  topLanguagesLinkGenerator,
  streakStatsLinkGenerator,
} from "../utils/link-generators"
import type {
  ProfileInfo,
  StatsType,
  StreakStatsType,
  Skill,
  BadgeOptions,
} from "../@types"

export const TitlePreview = ({
  prefix,
  title,
}: {
  prefix?: string
  title?: string
}) => {
  if (prefix && title) {
    return (
      <h1 className="text-center text-xl font-bold">{prefix + " " + title}</h1>
    )
  }
  return null
}

export const SubTitlePreview = ({ subtitle }: { subtitle?: string }) => {
  if (subtitle) {
    return <h3 className="text-center font-medium">{subtitle}</h3>
  }
  return null
}

export const SectionTitle = ({
  visible,
  label,
}: {
  visible?: boolean
  label?: string
}) => {
  if (!visible) return null
  else if (label) {
    return <h3 className="w-full text-lg sm:text-xl">{label}</h3>
  }
  return null
}

export const DisplayWork = ({
  prefix,
  project,
  link,
}: {
  prefix?: string
  project?: string
  link?: string
}) => {
  if (prefix && project) {
    if (link) {
      return (
        <div className="my-2">
          {prefix + " "}
          <a href={link} className="no-underline text-blue-700" target="blank">
            {project}
          </a>
        </div>
      )
    } else {
      return (
        <div className="my-2">
          {prefix + " "}
          <b>{project}</b>
        </div>
      )
    }
  }
  if (prefix && link) {
    return (
      <div className="my-2">
        {prefix + " "}
        <a href={link} className="no-underline text-blue-700" target="blank">
          {link}
        </a>
      </div>
    )
  }
  return null
}

export const WorkPreview = ({
  work: { prefix, data, link },
}: {
  work: {
    prefix: ProfileInfo["prefix"]
    data: ProfileInfo["data"]
    link: ProfileInfo["link"]
  }
}) => {
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

export const DisplaySocial = ({
  username,
  base,
  icon,
}: {
  username?: string
  base?: string
  icon?: string
}) => {
  if (username) {
    return (
      <a
        className="no-underline text-blue-700 m-2"
        href={base + "/" + username}
        target="blank"
      >
        <img className="w-6 h-6" src={icon} alt="props.username" />
      </a>
    )
  }
  return null
}

export const SocialPreview = (props: Pick<ProfileInfo, "social">) => {
  let viewSocial = false
  const icon_base_url =
    "https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/"
  Object.keys(props.social).forEach(key => {
    if (props.social[key as keyof ProfileInfo["social"]] && key != "github")
      viewSocial = true
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
          icon={icon_base_url + "devto.svg"}
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
          icon={icon_base_url + "codesandbox.svg"}
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
          icon={icon_base_url + "codeforces.svg"}
          username={props.social.codeforces}
        />
      </>
      <>
        <DisplaySocial
          base="https://www.leetcode.com"
          icon={icon_base_url + "leet-code.svg"}
          username={props.social.leetcode}
        />
      </>
      <>
        <DisplaySocial
          base="https://www.hackerearth.com"
          icon={icon_base_url + "hackerearth.svg"}
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
          icon={icon_base_url + "topcoder.svg"}
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

export const VisitorsBadgePreview = ({
  badgeOptions,
  github,
  show,
}: {
  badgeOptions: BadgeOptions
  github: string
  show: boolean
}) => {
  const link =
    "https://komarev.com/ghpvc/?username=" +
    github +
    `&label=${badgeOptions.badgeLabel}` +
    `&color=${badgeOptions.badgeColor}` +
    `&style=${badgeOptions.badgeStyle}`
  if (show) {
    return (
      <div className="text-left my-2">
        {" "}
        <img className="h-4 sm:h-6" src={link} alt={github} />{" "}
      </div>
    )
  }
  return null
}

export const TwitterBadgePreview = ({
  twitter,
  show,
}: {
  twitter: string
  show: boolean
}) => {
  let link =
    "https://img.shields.io/twitter/follow/" +
    twitter +
    "?logo=twitter&style=for-the-badge"
  if (show) {
    return (
      <div className="text-left my-2">
        {" "}
        <a href={`https://twitter.com/${twitter}`} target="blank">
          <img className="h-4 sm:h-6" src={link} alt={twitter} />
        </a>{" "}
      </div>
    )
  }
  return null
}

export const GithubProfileTrophyPreview = ({
  github,
  show,
}: {
  github: string
  show: boolean
}) => {
  const link = "https://github-profile-trophy.vercel.app/?username=" + github
  if (show) {
    return (
      <div className="text-left my-2">
        {" "}
        <a href="https://github.com/ryo-ma/github-profile-trophy">
          <img src={link} alt={github} />
        </a>{" "}
      </div>
    )
  }
  return null
}

export const GitHubStatsPreview = ({
  github,
  options,
  show,
}: {
  github: string
  options: StatsType
  show: boolean
}) => {
  if (show) {
    return (
      <div className="text-center mx-4 mb-4">
        <img src={githubStatsLinkGenerator({ github, options })} alt={github} />
      </div>
    )
  }
  return null
}

export const TopLanguagesPreview = ({
  github,
  options,
  show,
}: {
  github: string
  options: StatsType
  show: boolean
}) => {
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

export const StreakStatsPreview = ({
  github,
  options,
  show,
}: {
  github: string
  options: StreakStatsType
  show: boolean
}) => {
  if (show) {
    return (
      <div className="text-center mx-4 mb-4">
        <img src={streakStatsLinkGenerator({ github, options })} alt={github} />
      </div>
    )
  }
  return null
}

export const SkillsPreview = (props: { skills: Record<Skill, boolean> }) => {
  const listSkills = [] as JSX.Element[]
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
  ) : null
}

export const SupportPreview = ({ support }: Pick<ProfileInfo, "support">) => {
  let viewSupport = false
  Object.keys(support).forEach(key => {
    if (`${key}` in support) {
      viewSupport = true
    }
  })
  return support.buyMeACoffee || support.buyMeAKofi ? (
    <div className="flex flex-wrap justify-start items-center">
      <SectionTitle label="Support:" visible={viewSupport} />
      {support.buyMeACoffee && (
        <a
          href={`https://www.buymeacoffee.com/` + support.buyMeACoffee}
          target="_blank"
        >
          <img
            src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
            alt="Buy Me A Coffee"
            className="mb-4 mr-4 w-36 h-8 sm:w-52 sm:h-12"
          />
        </a>
      )}
      {support.buyMeAKofi && (
        <a href={`https://ko-fi.com/` + support.buyMeAKofi} target="_blank">
          <img
            src="https://cdn.ko-fi.com/cdn/kofi3.png?v=3"
            alt="Buy Me A Ko-fi"
            className="mb-4 mr-4 w-36 h-8 sm:w-52 sm:h-12"
          />
        </a>
      )}
    </div>
  ) : null
}

const MarkdownPreview = ({
  prefix,
  data,
  social,
  link,
  skills,
  support,
}: ProfileInfo) => {
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
      <GithubProfileTrophyPreview
        show={data.githubProfileTrophy}
        github={social.github}
      />
      <TwitterBadgePreview show={data.twitterBadge} twitter={social.twitter} />
      <WorkPreview work={{ prefix, data, link }} />
      <SocialPreview social={social} />
      <SkillsPreview skills={skills} />
      <SupportPreview support={support} />
      <div className="block sm:flex sm:justify-center sm:items-start">
        <TopLanguagesPreview
          show={data.topLanguages}
          github={social.github}
          options={data.topLanguagesOptions as StatsType}
        />
        <GitHubStatsPreview
          show={data.githubStats}
          github={social.github}
          options={data.githubStatsOptions as StatsType}
        />
        <StreakStatsPreview
          show={data.streakStats}
          github={social.github}
          options={data.streakStatsOptions as StreakStatsType}
        />
      </div>
    </div>
  )
}

export default MarkdownPreview
