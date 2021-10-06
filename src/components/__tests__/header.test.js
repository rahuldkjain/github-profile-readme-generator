import React from "react"
import { shallow } from "enzyme"
import toJson from "enzyme-to-json"

import Header from "../header"

describe("Header", () => {
  const component = shallow(<Header heading="heading" />)

  it("renders correctly", () => {
    expect(toJson(component)).toMatchSnapshot()
  })
})
