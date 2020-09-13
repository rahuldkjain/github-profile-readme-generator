import React from "react"
import { icons, categorizedSkills } from "../constants/skills"

const Skills = props => {
  const createSkill = skill => {
    return (
      <div className="w-1/3 sm:w-1/4 my-6" key={skill}>
        <label
          htmlFor={skill}
          className="skillCheckboxLabel cursor-pointer flex items-center justify-start"
        >
          <input
            id={skill}
            type="checkbox"
            checked={props.skills[skill]}
            onChange={event => props.handleSkillsChange(skill)}
          />
          <img
            className="ml-4 w-8 h-8 sm:w-10 sm:h-10"
            src={icons[skill]}
            alt={skill}
          />
          <span className="tooltiptext">{skill}</span>
        </label>
      </div>
    )
  }

  return (
    <div className="px-2 sm:px-6 mb-10">
      <div className="text-xl sm:text-2xl font-bold font-title mt-2 mb-2">
        Skills
      </div>

      {Object.keys(categorizedSkills).map(key => (
        <div key={key}>
          <h4 className="text-sm sm:text-xl text-gray-900 text-center">
            {categorizedSkills[key].title}
          </h4>
          <div className="flex justify-start items-center flex-wrap w-full mb-6 pl-4 sm:pl-10">
            {categorizedSkills[key].skills.map(skill => createSkill(skill))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Skills
