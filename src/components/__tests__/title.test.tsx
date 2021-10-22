import React from "react"
import { shallow } from "enzyme"
import toJson from "enzyme-to-json"
import Title from "../title"
import type { ProfileInfo } from "../../@types"

describe("Title", () => {
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

  it("renders title component correctly", () => {
    const component = shallow(<Title {...props} />)
    component.find("input").at(0).simulate("change", mockEvent)
    component.find("input").at(1).simulate("change", mockEvent)
    expect(toJson(component)).toMatchSnapshot()
  })
})
