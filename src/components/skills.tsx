import React, { useState } from "react"
import { icons, categorizedSkills, categories } from "../constants/skills"
import { SearchIcon, XIcon } from "@primer/octicons-react"
import type { ProfileSkillsHandle, Skill } from "../@types"

const Skills = (props: ProfileSkillsHandle) => {
  const [search, setSearch] = useState("")
  const [debounce, setDebounce] = useState<NodeJS.Timeout | undefined>(
    undefined
  )
  const inputRef = React.createRef<HTMLInputElement>()
  const createSkill = (skill: keyof ProfileSkillsHandle["skills"]) => {
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
            onChange={event => props.handleSkillsChange(skill, event)}
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

  const onSearchChange = (value: string) => {
    const callback = () => {
      setSearch(value)
    }
    clearTimeout(debounce!)
    setDebounce(setTimeout(callback, 50))
  }

  return (
    <div className="px-2 sm:px-6 mb-10 ">
      <div className="text-xl sm:text-2xl font-bold font-title mt-2 mb-4 flex justify-between">
        Skills
        <div className="relative flex">
          <input
            type="text"
            onChange={e => onSearchChange(e.target.value)}
            className="leading:none text-xs my-0 py-1 px-2 pr-8 sm:text-xl border-2 border-gray-900 focus:border-blue-700 placeholder-gray-700"
            placeholder="Search Skills"
            ref={inputRef}
          />
          <span className="absolute" style={{ right: "10px" }}>
            {search !== "" ? (
              <button
                className="focus:outline-none"
                onClick={() => {
                  setSearch("")
                  inputRef.current!.value = ""
                }}
              >
                <XIcon
                  size={16}
                  className="mb-1 transform scale-100 md:scale-125"
                />
              </button>
            ) : (
              <SearchIcon
                size={16}
                className="mb-1 transform scale-100 md:scale-125"
              />
            )}
          </span>
        </div>
      </div>

      {categories
        .filter(category => {
          const filtered = ((categorizedSkills[category]
            .skills as unknown) as Skill[]).filter(skill => {
            return skill.includes(search.toLowerCase())
          })
          return filtered.length !== 0
        })
        .map(category => (
          <div key={category} className="divide-y divide-gray-500">
            <div className="text-sm sm:text-xl text-gray-900 text-left py-1">
              {categorizedSkills[category].title}
            </div>
            <div className="flex justify-start items-center flex-wrap w-full mb-6 pl-4 sm:pl-10">
              {((categorizedSkills[category].skills as unknown) as Skill[])
                .filter(skill => {
                  return skill.includes(search.toLowerCase())
                })
                .map(skill => createSkill(skill))}
            </div>
          </div>
        ))}
      <span className="flex justify-center text-gray-900">
        {categories.filter(category => {
          const filtered = ((categorizedSkills[category]
            .skills as unknown) as Skill[]).filter(skill => {
            return skill.includes(search.toLowerCase())
          })
          return filtered.length !== 0
        }).length === 0
          ? "No Results Found"
          : null}
      </span>
    </div>
  )
}

export default Skills
