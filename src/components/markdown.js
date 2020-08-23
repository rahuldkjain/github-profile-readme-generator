import React from "react"
import { isMediumUsernameValid } from "../utils/validation"
import { icons, skills } from "../constants/skills"
import socialList from "./../constants/social-list"
import { workKeys } from "./../constants/work"

const Markdown = props => {
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
    if (!props.username) {
      return ""
    }

    return (
      <>
        {`<a href="${props.base}/${props.username}" target="blank"><img align="center" src="${props.icon}" alt="${props.username}" height="30" width="30" /></a>`}
        <br />
      </>
    )
  }

  const VisitorsBadge = props => {
    if (!props.show) {
      return ""
    }

    const link = `https://komarev.com/ghpvc/?username=${props.github}`

    return (
      <>
        {`<p align="left"> <img src="${link}" alt="${props.github}" /> </p>`}
        <br />
        <br />
      </>
    )
  }

  const GithubStats = props => {
    if (!props.show) {
      return ""
    }

    const link = `https://github-readme-stats.vercel.app/api?username=${props.github}&show_icons=true`

    return (
      <>
        {`<p>&nbsp;<img align="center" src="${link}" alt="${props.github}" /></p>`}
        <br />
        <br />
      </>
    )
  }

  const isSocial = social => Object.keys(social).some(key => social[key])

  const DisplaySkills = props => {
    const listChosenSkills = []

    skills.forEach(skill => {
      if (props.skills[skill]) {
        listChosenSkills.push(
          `<img src="${icons[skill]}" alt="${skill}" width="40" height="40"/>`
        )
      }
    })

    return listChosenSkills.length > 0
      ? `<p align="left">${listChosenSkills.join(" ")}</p>`
      : ""
  }

  const DisplayDynamicBlogs = props => {
    if (!props.show) {
      return ""
    }

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

  const DisplayTopLanguages = props => {
    const link = `https://github-readme-stats.vercel.app/api/top-langs/?username=${props.github}&layout=compact&hide=html`

    if (!props.show) {
      return ""
    }

    if (!props.showStats) {
      return (
        <>
          {`<p><img align="center" src="${link}" alt="${props.github}" /></p>`}
          <br />
          <br />
        </>
      )
    }

    return (
      <>
        {`<p><img align="left" src="${link}" alt="${props.github}" /></p>`}
        <br />
        <br />
      </>
    )
  }

  return (
    <div id="markdown-content">
      <Title prefix={props.prefix.title} title={props.data.title} />
      <SubTitle subtitle={props.data.subtitle} />
      <VisitorsBadge
        show={props.data.visitorsBadge}
        github={props.social.github}
      />
      {workKeys.map(key => (
        <DisplayWork
          key={key}
          prefix={props.prefix[key]}
          project={props.data[key]}
          link={props.link[key]}
        />
      ))}
      <DisplayDynamicBlogs
        show={
          (props.data.devDynamicBlogs && props.social.dev) ||
          (props.data.mediumDynamicBlogs &&
            props.social.medium &&
            isMediumUsernameValid(props.social.medium))
        }
      />
      <DisplaySkills skills={props.skills} />
      <DisplayTopLanguages
        show={props.data.topLanguages}
        showStats={props.data.githubStats}
        github={props.social.github}
      />
      <GithubStats show={props.data.githubStats} github={props.social.github} />
      {isSocial(props.social) ? `<p align="center">` : ""} <br />
      {socialList.map(item => (
        <DisplaySocial
          key={item.key}
          base={item.base}
          icon={item.icon}
          username={props.social[item.key]}
        />
      ))}
      {isSocial(props.social) ? `</p>` : ""}
    </div>
  )
}

export default Markdown
