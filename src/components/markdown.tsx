import React from "react"
import { isMediumUsernameValid } from "../utils/validation"
import { icons, skills, skillWebsites } from "../constants/skills"
import {
  githubStatsLinkGenerator,
  topLanguagesLinkGenerator,
  streakStatsLinkGenerator,
} from "../utils/link-generators"
import type { StatsType, ProfileInfo, Skill, StreakStatsType } from "../@types"

const Title = ({ prefix, title }: { prefix?: string; title?: string }) => {
  if (prefix && title) {
    return (
      <>
        {`<h1 align="center">${prefix + " " + title}</h1>`}
        <br />
      </>
    )
  }
  return null
}
const SubTitle = ({ subtitle }: { subtitle?: string }) => {
  if (subtitle) {
    return (
      <>
        {`<h3 align="center">${subtitle}</h3>`}
        <br />
        <br />
      </>
    )
  }
  return null
}
const SectionTitle = ({ label }: { label?: string }) => {
  if (label) {
    return (
      <>
        {`<h3 align="left">${label}</h3>`}
        <br />
      </>
    )
  }
  return null
}
const DisplayWork = ({
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
        <>
          {`- ${prefix} [${project}](${link})`}
          <br />
          <br />
        </>
      )
    } else {
      return (
        <>
          {`- ${prefix} **${project}**`}
          <br />
          <br />
        </>
      )
    }
  }
  if (prefix && link) {
    return (
      <>
        {`- ${prefix} [${link}](${link})`}
        <br />
        <br />
      </>
    )
  }
  return null
}
const DisplaySocial = ({
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
      <>
        {`<a href="${base}/${username}" target="blank"><img align="center" src="${icon}" alt="${username}" height="30" width="40" /></a>`}
        <br />
      </>
    )
  }
  return null
}
const VisitorsBadge = ({
  badgeOptions,
  github,
  show,
}: {
  badgeOptions: { badgeLabel: string; badgeColor: string; badgeStyle: string }
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
      <>
        {`<p align="left"> <img src="${link}" alt="${github}" /> </p>`}
        <br />
        <br />
      </>
    )
  }
  return null
}
const TwitterBadge = ({
  twitter,
  show,
  base,
}: {
  twitter: string
  show: boolean
  base: string
}) => {
  const link =
    "https://img.shields.io/twitter/follow/" +
    twitter +
    "?logo=twitter&style=for-the-badge"
  if (show) {
    return (
      <>
        {`<p align="left"> <a href="${base}/${twitter}" target="blank"><img src="${link}" alt="${twitter}" /></a> </p>`}
        <br />
        <br />
      </>
    )
  }
  return null
}
const GithubProfileTrophy = ({
  github,
  show,
}: {
  github: string
  show: boolean
}) => {
  const link = "https://github-profile-trophy.vercel.app/?username=" + github
  if (show) {
    return (
      <>
        {`<p align="left"> <a href="https://github.com/ryo-ma/github-profile-trophy"><img src="${link}" alt="${github}" /></a> </p>`}
        <br />
        <br />
      </>
    )
  }
  return null
}
const GitHubStats = ({
  show,
  github,
  options,
}: {
  show: boolean
  github: string
  options: StatsType
}) => {
  if (show) {
    return (
      <>
        {`<p>&nbsp;<img align="center" src="${githubStatsLinkGenerator({
          github: github,
          options,
        })}" alt="${github}" /></p>`}
        <br />
        <br />
      </>
    )
  }
  return null
}
const isSocial = (social: Partial<ProfileInfo["social"]>) => {
  return (
    social.dev ||
    social.twitter ||
    social.codepen ||
    social.codesandbox ||
    social.stackoverflow ||
    social.linkedin ||
    social.kaggle ||
    social.instagram ||
    social.fb ||
    social.dribbble ||
    social.behance ||
    social.medium ||
    social.youtube ||
    social.codechef ||
    social.hackerrank ||
    social.codeforces ||
    social.leetcode ||
    social.topcoder ||
    social.hackerearth ||
    social.geeks_for_geeks ||
    social.discord ||
    social.rssurl
  )
}
const DisplaySkills = (props: { skills: Record<Skill, boolean> }) => {
  const listChosenSkills = [] as string[]
  skills.forEach(skill => {
    if (props.skills[skill]) {
      listChosenSkills.push(
        `
        <a href="${skillWebsites[skill]}" target="_blank">
          <img src="${icons[skill]}" alt="${skill}" width="40" height="40"/>
        </a>
        `
      )
    }
  })
  return listChosenSkills.length > 0 ? (
    <>
      <SectionTitle label="Languages and Tools:" />
      {`<p align="left">${listChosenSkills.join(" ")}</p>`}
      <br />
      <br />
    </>
  ) : null
}
const DisplayDynamicBlogs = ({ show }: { show: boolean }) => {
  if (show) {
    return (
      <>
        {`### Blogs posts`}
        <br />
        {`<!-- BLOG-POST-LIST:START -->`}
        <br />
        {`<!-- BLOG-POST-LIST:END -->`}
        <br /> <br />
      </>
    )
  }
  return null
}
const DisplayTopLanguages = ({
  show,
  showStats,
  github,
  options,
}: {
  show: boolean
  showStats: boolean
  github: string
  options: StatsType
}) => {
  if (show) {
    if (!showStats) {
      return (
        <>
          {`<p><img align="center" src="${topLanguagesLinkGenerator({
            github: github,
            options: options,
          })}" alt="${github}" /></p>`}
          <br />
          <br />
        </>
      )
    }
    return (
      <>
        {`<p><img align="left" src="${topLanguagesLinkGenerator({
          github: github,
          options: options,
        })}" alt="${github}" /></p>`}
        <br />
        <br />
      </>
    )
  }
  return null
}
const DisplayStreakStats = ({
  show,
  github,
  options,
}: {
  show: boolean
  github: string
  options: StreakStatsType
}) => {
  if (show) {
    return (
      <>
        {`<p><img align="center" src="${streakStatsLinkGenerator({
          github: github,
          options: options,
        })}" alt="${github}" /></p>`}
        <br />
        <br />
      </>
    )
  }
  return null
}
const DisplaySupport = ({ support }: Pick<ProfileInfo, "support">) => {
  let viewSupport = false
  Object.keys(support).forEach(key => {
    if (`${key}` in support) {
      viewSupport = true
    }
  })
  return viewSupport ? (
    <div>
      <SectionTitle label="Support:" />
      {`<p>`}
      {support.buyMeACoffee &&
        `<a href="https://www.buymeacoffee.com/${support.buyMeACoffee}">
      <img align="left" src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" height="50" width="210" alt="${support.buyMeACoffee}" /></a>`}
      {support.buyMeAKofi &&
        `<a href="https://ko-fi.com/${support.buyMeAKofi}">
      <img align="left" src="https://cdn.ko-fi.com/cdn/kofi3.png?v=3" height="50" width="210" alt="${support.buyMeAKofi}" /></a>`}
      {`</p><br><br>`}
      <br />
      <br />
    </div>
  ) : null
}
const Markdown = ({
  prefix,
  data,
  social,
  link,
  skills,
  support,
}: ProfileInfo) => {
  const icon_base_url =
    "https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/"

  return (
    <div id="markdown-content" className="break-words">
      <>
        <Title prefix={prefix.title} title={data.title} />
      </>
      <>
        <SubTitle subtitle={data.subtitle} />
      </>
      <>
        <VisitorsBadge
          show={data.visitorsBadge}
          github={social.github}
          badgeOptions={{
            badgeLabel: encodeURI(data.badgeLabel),
            badgeColor: data.badgeColor,
            badgeStyle: data.badgeStyle,
          }}
        />
      </>
      <>
        <GithubProfileTrophy
          show={data.githubProfileTrophy}
          github={social.github}
        />
        <TwitterBadge
          base="https://twitter.com"
          show={data.twitterBadge}
          twitter={social.twitter}
        />
      </>
      <>
        <DisplayWork
          prefix={prefix.currentWork}
          project={data.currentWork}
          link={link.currentWork}
        />
      </>
      <>
        <DisplayWork prefix={prefix.currentLearn} project={data.currentLearn} />
      </>
      <>
        <DisplayWork
          prefix={prefix.collaborateOn}
          project={data.collaborateOn}
          link={link.collaborateOn}
        />
      </>
      <>
        <DisplayWork
          prefix={prefix.helpWith}
          project={data.helpWith}
          link={link.helpWith}
        />
      </>
      <>
        <DisplayWork prefix={prefix.portfolio} link={link.portfolio} />
      </>
      <>
        <DisplayWork prefix={prefix.blog} link={link.blog} />
      </>
      <>
        <DisplayWork prefix={prefix.ama} project={data.ama} />
      </>
      <>
        <DisplayWork prefix={prefix.contact} project={data.contact} />
      </>
      <>
        <DisplayWork prefix={prefix.resume} link={link.resume} />
      </>
      <>
        <DisplayWork prefix={prefix.funFact} project={data.funFact} />
      </>
      <>
        <DisplayDynamicBlogs
          show={
            !!(
              (data.devDynamicBlogs && social.dev) ||
              (data.rssDynamicBlogs && social.rssurl) ||
              (data.mediumDynamicBlogs &&
                social.medium &&
                isMediumUsernameValid(social.medium))
            )
          }
        />
      </>
      {isSocial(social) ? (
        <>
          <SectionTitle label="Connect with me:" />
          {`<p align="left">`}
        </>
      ) : (
        ""
      )}
      <br />
      <>
        <DisplaySocial
          base="https://codepen.io"
          icon={icon_base_url + "codepen.svg"}
          username={social.codepen}
        />
      </>
      <>
        <DisplaySocial
          base="https://dev.to"
          icon={icon_base_url + "devto.svg"}
          username={social.dev}
        />
      </>
      <>
        <DisplaySocial
          base="https://twitter.com"
          icon={icon_base_url + "twitter.svg"}
          username={social.twitter}
        />
      </>
      <>
        <DisplaySocial
          base="https://linkedin.com/in"
          icon={icon_base_url + "linked-in-alt.svg"}
          username={social.linkedin}
        />
      </>
      <>
        <DisplaySocial
          base="https://stackoverflow.com/users"
          icon={icon_base_url + "stack-overflow.svg"}
          username={social.stackoverflow}
        />
      </>
      <>
        <DisplaySocial
          base="https://codesandbox.com"
          icon={icon_base_url + "codesandbox.svg"}
          username={social.codesandbox}
        />
      </>
      <>
        <DisplaySocial
          base="https://kaggle.com"
          icon={icon_base_url + "kaggle.svg"}
          username={social.kaggle}
        />
      </>
      <>
        <DisplaySocial
          base="https://fb.com"
          icon={icon_base_url + "facebook.svg"}
          username={social.fb}
        />
      </>
      <>
        <DisplaySocial
          base="https://instagram.com"
          icon={icon_base_url + "instagram.svg"}
          username={social.instagram}
        />
      </>
      <>
        <DisplaySocial
          base="https://dribbble.com"
          icon={icon_base_url + "dribbble.svg"}
          username={social.dribbble}
        />
      </>
      <>
        <DisplaySocial
          base="https://www.behance.net"
          icon={icon_base_url + "behance.svg"}
          username={social.behance}
        />
      </>
      <>
        <DisplaySocial
          base="https://medium.com"
          icon={icon_base_url + "medium.svg"}
          username={social.medium}
        />
      </>
      <>
        <DisplaySocial
          base="https://www.youtube.com/c"
          icon={icon_base_url + "youtube.svg"}
          username={social.youtube}
        />
      </>
      <>
        <DisplaySocial
          base="https://www.codechef.com/users"
          icon="https://cdn.jsdelivr.net/npm/simple-icons@3.1.0/icons/codechef.svg"
          username={social.codechef}
        />
      </>
      <>
        <DisplaySocial
          base="https://www.hackerrank.com"
          icon={icon_base_url + "hackerrank.svg"}
          username={social.hackerrank}
        />
      </>
      <>
        <DisplaySocial
          base="https://codeforces.com/profile"
          icon={icon_base_url + "codeforces.svg"}
          username={social.codeforces}
        />
      </>
      <>
        <DisplaySocial
          base="https://www.leetcode.com"
          icon={icon_base_url + "leet-code.svg"}
          username={social.leetcode}
        />
      </>
      <>
        <DisplaySocial
          base="https://www.hackerearth.com"
          icon={icon_base_url + "hackerearth.svg"}
          username={social.hackerearth}
        />
      </>
      <>
        <DisplaySocial
          base="https://auth.geeksforgeeks.org/user"
          icon={icon_base_url + "geeks-for-geeks.svg"}
          username={social.geeks_for_geeks}
        />
      </>
      <>
        <DisplaySocial
          base="https://www.topcoder.com/members"
          icon={icon_base_url + "topcoder.svg"}
          username={social.topcoder}
        />
      </>
      <>
        <DisplaySocial
          base="https://discord.gg"
          icon={icon_base_url + "discord.svg"}
          username={social.discord}
        />
      </>
      <>
        <DisplaySocial
          base=""
          icon={icon_base_url + "rss.svg"}
          username={social.rssurl}
        />
      </>
      {isSocial(social) ? (
        <>
          {`</p>`}
          <br />
          <br />
        </>
      ) : null}
      <>
        <DisplaySkills skills={skills} />
      </>
      <>
        <DisplaySupport support={support} />
      </>
      <>
        <DisplayTopLanguages
          show={data.topLanguages}
          showStats={data.githubStats}
          github={social.github}
          options={data.topLanguagesOptions as StatsType}
        />
      </>
      <>
        <GitHubStats
          show={data.githubStats}
          github={social.github}
          options={data.githubStatsOptions as StatsType}
        />
      </>
      <>
        <DisplayStreakStats
          show={data.streakStats}
          github={social.github}
          options={data.streakStatsOptions as StreakStatsType}
        />
      </>
    </div>
  )
}
export default Markdown
