import React from "react"
import { shallow } from "enzyme"
import toJson from "enzyme-to-json"

import Skills from "../skills"

jest.mock("../../constants/skills", () => ({
  __esModule: true,
  categorizedSkills: {
    language: {
      title: "Programming Languages",
      skills: ["javascript"],
    },
    frontend_dev: {
      title: "Frontend Development",
      skills: ["react", "svelte"],
    },
  },
  icons: {
    javascript: "javascript.svg",
    react: "react.svg",
    svelte: "svelte.svg",
  },
}))

describe("Skills", () => {
  it("renders correctly", () => {
    const component = shallow(<Skills skills={{ javascript: true }} />)
    expect(toJson(component)).toMatchSnapshot()
  })

  it("calls handleSkillsChange prop when a skill is clicked", () => {
    const mockFn = jest.fn()
    const component = shallow(
      <Skills skills={{ javascript: true }} handleSkillsChange={mockFn} />
    )

    component.find("#javascript").simulate("change")

    expect(mockFn).toHaveBeenCalledTimes(1)
  })
})
