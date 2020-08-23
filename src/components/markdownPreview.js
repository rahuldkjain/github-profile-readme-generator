import React from "react"
import { icons, skills } from "../constants/skills"
import socialList from "./../constants/social-list"
import { workKeys } from "./../constants/work"

const MarkdownPreview = props => {
  const TitlePreview = props => {
    if (props.prefix && props.title) {
      return <h1 className="title">{props.prefix + " " + props.title}</h1>
    }

    return null
  }

  const SubTitlePreview = props => {
    if (props.subtitle) {
      return <h3 className="subtitle">{props.subtitle}</h3>
    }

    return null
  }

  const DisplayWork = props => {
    if (props.prefix && props.project) {
      if (props.link) {
        return (
          <div>
            {props.prefix + " "}
            <a href={props.link} className="link" target="blank">
              {props.project}
            </a>
          </div>
        )
      } else {
        return (
          <div>
            {props.prefix + " "}
            <b>{props.project}</b>
          </div>
        )
      }
    }

    if (props.prefix && props.link) {
      return (
        <div>
          {props.prefix + " "}
          <a href={props.link} className="link" target="blank">
            {props.link}
          </a>
        </div>
      )
    }

    return null
  }

  const WorkPreview = props => {
    return (
      <>
        {workKeys.map(key => (
          <DisplayWork
            key={key}
            prefix={props.work.prefix[key]}
            project={props.work.data[key]}
            link={props.work.link[key]}
          />
        ))}
      </>
    )
  }

  const DisplaySocial = props => {
    if (props.username) {
      return (
        <a
          className="link social-icon"
          href={`${props.base}/${props.username}`}
          target="blank"
        >
          <img className="icon" src={props.icon} alt="props.username" />
        </a>
      )
    }

    return null
  }

  const SocialPreview = props => {
    return (
      <div className="social">
        {socialList.map(item => (
          <DisplaySocial
            key={item.key}
            base={item.base}
            icon={item.icon}
            {...{}}
            username={props.social[item.key] ? props.social[item.key] : null}
          />
        ))}
      </div>
    )
  }

  const VisitorsBadgePreview = props => {
    let link = "https://komarev.com/ghpvc/?username=" + props.github

    if (props.show) {
      return (
        <div className="badge">
          {" "}
          <img className="badgeImage" src={link} alt={props.github} />{" "}
        </div>
      )
    }

    return null
  }

  const GithubStatsPreview = props => {
    if (!props.show) {
      return null
    }

    const link = `https://github-readme-stats.vercel.app/api?username=${props.github}&show_icons=true`
    return (
      <div className="github-stats-card">
        <img src={link} alt={props.github} />
      </div>
    )
  }

  const TopLanguagesPreview = props => {
    if (!props.show) {
      return <div className="top-languages-card"> &nbsp;</div>
    }

    const link = `https://github-readme-stats.vercel.app/api/top-langs/?username=${props.github}&layout=compact&hide=html`
    return (
      <div className="top-languages-card">
        <img src={link} alt={props.github} />
      </div>
    )
  }

  const SkillsPreview = props => {
    const listSkills = []

    skills.forEach(skill => {
      if (props.skills[skill]) {
        listSkills.push(
          <img
            className="skill-preview-icon"
            key={skill}
            src={icons[skill]}
            alt={skill}
          />
        )
      }
    })

    return listSkills.length > 0 ? (
      <div className="skills-preview">{listSkills}</div>
    ) : (
      ""
    )
  }

  return (
    <div id="markdown-preview">
      <TitlePreview prefix={props.prefix.title} title={props.data.title} />
      <SubTitlePreview subtitle={props.data.subtitle} />
      <VisitorsBadgePreview
        show={props.data.visitorsBadge}
        github={props.social.github}
      />
      <WorkPreview work={props} />
      <SkillsPreview skills={props.skills} />
      <div className="github-cards">
        <TopLanguagesPreview
          show={props.data.topLanguages}
          github={props.social.github}
        />
        <GithubStatsPreview
          show={props.data.githubStats}
          github={props.social.github}
        />
      </div>
      <SocialPreview social={props.social} />
    </div>
  )
}

export default MarkdownPreview
