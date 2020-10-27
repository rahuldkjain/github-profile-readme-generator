import React from "react"
import { shallow } from "enzyme"
import toJson from "enzyme-to-json"

import Subtitle from "../subtitle"

describe("Subtitle", () => {
  const mockEvent = { target: { value: "This is a mock event" } }
  const props = {
    data: {
      subtitle: "A frontend developer",
    },
    handleDataChange: jest.fn().mockReturnValue({}),
  }

  const component = shallow(<Subtitle {...props} />)

  it("renders correctly", () => {
    expect(toJson(component)).toMatchSnapshot()
  })

  it("calls onChange", () => {
    component.find("input").at(0).simulate("change", mockEvent)
    expect(props.handleDataChange).toBeCalledWith("subtitle", mockEvent)
  })
})
