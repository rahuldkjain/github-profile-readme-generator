import React, { Fragment } from "react"
import { icons, categorizedSkills } from "../constants/skills"

const Skills = props => {
  const createSkill = skill => {
    return (
      <div className="skillCheckbox" key={skill}>
        <label htmlFor={skill} className="skillCheckboxLabel">
          <input
            id={skill}
            type="checkbox"
            checked={props.skills[skill]}
            onChange={event => props.handleSkillsChange(skill)}
          />
          <img className="skill-icon" src={icons[skill]} alt={skill} />
          <span className="tooltiptext">{skill}</span>
        </label>
      </div>
    )
  }

  return (
    <div>
      <div className="section-title">Skills</div>

      {Object.keys(categorizedSkills).map(key => (
        <Fragment>
          <h4 className="skills-category-title">
            {categorizedSkills[key].title}
          </h4>
          <div className="skills">
            {categorizedSkills[key].skills.map(skill => createSkill(skill))}
          </div>
        </Fragment>
      ))}
    </div>
  )
}

export default Skills
