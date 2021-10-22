import React from "react"
import { shallow } from "enzyme"
import toJson from "enzyme-to-json"
import Work from "../work"
import type { ProfileInfo } from "../../@types"

describe("Work", () => {
  const mockEvent = { target: { value: "This is a mock event" } }
  const props = {
    prefix: {
      title: "test_title",
      currentWork: "test_currentwork",
    } as ProfileInfo["prefix"],
    data: { title: "test_data" } as ProfileInfo["data"],
    link: { currentWork: "test_currentwork" } as ProfileInfo["link"],
    handlePrefixChange: jest.fn().mockReturnValue({}),
    handleLinkChange: jest.fn().mockReturnValue({}),
    handleDataChange: jest.fn().mockReturnValue({}),
  }

  it("renders work component correctly", () => {
    const component = shallow(<Work {...props} />)
    for (let i = 0; i < component.find("input").length; i++) {
      component.find("input").at(i).simulate("change", mockEvent)
    }
    expect(toJson(component)).toMatchSnapshot()
  })
})
