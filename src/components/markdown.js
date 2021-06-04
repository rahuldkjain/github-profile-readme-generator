import React from "react"
import { isMediumUsernameValid } from "../utils/validation"
import { icons, skills, skillWebsites } from "../constants/skills"
import {
  githubStatsLinkGenerator,
  topLanguagesLinkGenerator,
  streakStatsLinkGenerator,
} from "../utils/link-generators"
const Title = props => {
  if (props.prefix && props.title) {
    return (
      <>
        {`<h1 align="center">${props.prefix + " " + props.title}</h1>`}
        <br />
      </>
    )
  }
  return ""
}
const SubTitle = props => {
  if (props.subtitle) {
    return (
      <>
        {`<h3 align="center">${props.subtitle}</h3>`}
        <br />
        <br />
      </>
    )
  }
  return ""
}
const SectionTitle = props => {
  if (props.label) {
    return (
      <>
        {`<h3 align="left">${props.label}</h3>`}
        <br />
      </>
    )
  }
  return ""
}
const DisplayWork = props => {
  if (props.prefix && props.project) {
    if (props.link) {
      return (
        <>
          {`- ${props.prefix} [${props.project}](${props.link})`}
          <br />
          <br />
        </>
      )
    } else {
      return (
        <>
          {`- ${props.prefix} **${props.project}**`}
          <br />
          <br />
        </>
      )
    }
  }
  if (props.prefix && props.link) {
    return (
      <>
        {`- ${props.prefix} [${props.link}](${props.link})`}
        <br />
        <br />
      </>
    )
  }
  return ""
}
const DisplaySocial = props => {
  if (props.username) {
    return (
      <>
        {`<a href="${props.base}/${props.username}" target="blank"><img align="center" src="${props.icon}" alt="${props.username}" height="30" width="40" /></a>`}
        <br />
      </>
    )
  }
  return ""
}
const VisitorsBadge = props => {
  let link =
    "https://komarev.com/ghpvc/?username=" +
    props.github +
    `&label=${props.badgeOptions.badgeLabel}` +
    `&color=${props.badgeOptions.badgeColor}` +
    `&style=${props.badgeOptions.badgeStyle}`
  if (props.show) {
    return (
      <>
        {`<p align="left"> <img src="${link}" alt="${props.github}" /> </p>`}
        <br />
        <br />
      </>
    )
  }
  return ""
}
const TwitterBadge = props => {
  let link =
    "https://img.shields.io/twitter/follow/" +
    props.twitter +
    "?logo=twitter&style=for-the-badge"
  if (props.show) {
    return (
      <>
        {`<p align="left"> <a href="${props.base}/${props.twitter}" target="blank"><img src="${link}" alt="${props.twitter}" /></a> </p>`}
        <br />
        <br />
      </>
    )
  }
  return ""
}
const GithubProfileTrophy = props => {
  let link =
    "https://github-profile-trophy.vercel.app/?username=" + props.github
  if (props.show) {
    return (
      <>
        {`<p align="left"> <a href="https://github.com/ryo-ma/github-profile-trophy"><img src="${link}" alt="${props.github}" /></a> </p>`}
        <br />
        <br />
      </>
    )
  }
  return ""
}
const GitHubStats = ({ show, github, options }) => {
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
  return ""
}
const isSocial = social => {
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
const DisplaySkills = props => {
  const listChosenSkills = []
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
  ) : (
    ""
  )
}
const DisplayDynamicBlogs = props => {
  if (props.show) {
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
  return ""
}
const DisplayTopLanguages = props => {
  if (props.show) {
    if (!props.showStats) {
      return (
        <>
          {`<p><img align="center" src="${topLanguagesLinkGenerator({
            github: props.github,
            options: props.options,
          })}" alt="${props.github}" /></p>`}
          <br />
          <br />
        </>
      )
    }
    return (
      <>
        {`<p><img align="left" src="${topLanguagesLinkGenerator({
          github: props.github,
          options: props.options,
        })}" alt="${props.github}" /></p>`}
        <br />
        <br />
      </>
    )
  }
  return ""
}
const DisplayStreakStats = props => {
  if (props.show) {
    return (
      <>
        {`<p><img align="center" src="${streakStatsLinkGenerator({
          github: props.github,
          options: props.options,
        })}" alt="${props.github}" /></p>`}
        <br />
        <br />
      </>
    )
  }
  return ""
}
const DisplaySupport = props => {
  let viewSupport = false
  Object.keys(props.support).forEach(key => {
    if (props.support[key]) {
      viewSupport = true
    }
  })
  return viewSupport ? (
    <div>
      <SectionTitle label="Support:" />
      {`<p>`}
      {props.support.buyMeACoffee &&
        `<a href="https://www.buymeacoffee.com/${props.support.buyMeACoffee}">
      <img align="left" src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" height="50" width="210" alt="${props.support.buyMeACoffee}" /></a>`}
      {`</p><br><br>`}
      <br />
      <br />
    </div>
  ) : (
    ""
  )
}
const Markdown = props => {
  const icon_base_url =
    "https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/";
    
  return (
    <div id="markdown-content" className="break-words">
      <>
        <Title prefix={props.prefix.title} title={props.data.title} />
      </>
      <>
        <SubTitle subtitle={props.data.subtitle} />
      </>
      <>
        <VisitorsBadge
          show={props.data.visitorsBadge}
          github={props.social.github}
          badgeOptions={{
            badgeLabel: encodeURI(props.data.badgeLabel),
            badgeColor: props.data.badgeColor,
            badgeStyle: props.data.badgeStyle,
          }}
        />
      </>
      <>
        <GithubProfileTrophy
          show={props.data.githubProfileTrophy}
          github={props.social.github}
        />
        <TwitterBadge
          base="https://twitter.com"
          show={props.data.twitterBadge}
          twitter={props.social.twitter}
        />
      </>
      <>
        <DisplayWork
          prefix={props.prefix.currentWork}
          project={props.data.currentWork}
          link={props.link.currentWork}
        />
      </>
      <>
        <DisplayWork
          prefix={props.prefix.currentLearn}
          project={props.data.currentLearn}
        />
      </>
      <>
        <DisplayWork
          prefix={props.prefix.collaborateOn}
          project={props.data.collaborateOn}
          link={props.link.collaborateOn}
        />
      </>
      <>
        <DisplayWork
          prefix={props.prefix.helpWith}
          project={props.data.helpWith}
          link={props.link.helpWith}
        />
      </>
      <>
        <DisplayWork
          prefix={props.prefix.portfolio}
          link={props.link.portfolio}
        />
      </>
      <>
        <DisplayWork prefix={props.prefix.blog} link={props.link.blog} />
      </>
      <>
        <DisplayWork prefix={props.prefix.ama} project={props.data.ama} />
      </>
      <>
        <DisplayWork
          prefix={props.prefix.contact}
          project={props.data.contact}
        />
      </>
      <>
        <DisplayWork prefix={props.prefix.resume} link={props.link.resume} />
      </>
      <>
        <DisplayWork
          prefix={props.prefix.funFact}
          project={props.data.funFact}
        />
      </>
      <>
        <DisplayDynamicBlogs
          show={
            (props.data.devDynamicBlogs && props.social.dev) ||
            (props.data.rssDynamicBlogs && props.social.rssurl) ||
            (props.data.mediumDynamicBlogs &&
              props.social.medium &&
              isMediumUsernameValid(props.social.medium))
          }
        />
      </>
      {isSocial(props.social) ? (
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
      {isSocial(props.social) ? (
        <>
          {`</p>`}
          <br />
          <br />
        </>
      ) : (
        ""
      )}
      <>
        <DisplaySkills skills={props.skills} />
      </>
      <>
        <DisplaySupport support={props.support} />
      </>
      <>
        <DisplayTopLanguages
          show={props.data.topLanguages}
          showStats={props.data.githubStats}
          github={props.social.github}
          options={props.data.topLanguagesOptions}
        />
      </>
      <>
        <GitHubStats
          show={props.data.githubStats}
          github={props.social.github}
          options={props.data.githubStatsOptions}
        />
      </>
      <>
        <DisplayStreakStats
          show={props.data.streakStats}
          github={props.social.github}
          options={props.data.streakStatsOptions}
        />
      </>
    </div>
  )
}
export default Markdown
