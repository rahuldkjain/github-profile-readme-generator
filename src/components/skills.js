import React, {useState} from "react"
import { icons, categorizedSkills } from "../constants/skills"

const Skills = props => {
  const [search, update] = useState('')
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
    <div className="px-2 sm:px-6 mb-10 ">
      <div className="text-xl sm:text-2xl font-bold font-title mt-2 mb-4 flex justify-between">
        Skills
        <input 
          type="search" 
          onChange={(e) => update(e.target.value)} 
          className="leading:none text-xs my-0 py-0 sm:text-xl rounded-sm border border-gray-600 hover:border-gray-900 focus:outline-none focus:shadow-outline p-2 m-2" 
          placeholder="Search Skills" 
        />
      </div>
     
      {Object.keys(categorizedSkills)
      .filter(key => {
        let filtered = categorizedSkills[key].skills.filter(skill => {
          return skill.includes(search.toLowerCase())
        })
        return filtered.length !== 0
      })
      .map(key => (
        <div key={key}>
            <div className="text-sm sm:text-xl text-gray-900 text-left border-b border-r p-2 border-gray-400 m-2 rounded-sm">
              {categorizedSkills[key].title}
            </div>
          <div className="flex justify-start items-center flex-wrap w-full mb-6 pl-4 sm:pl-10">
            {categorizedSkills[key].skills
            .filter(skill => {
              return skill.includes(search.toLowerCase())
            })
            .map(skill => createSkill(skill))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Skills
