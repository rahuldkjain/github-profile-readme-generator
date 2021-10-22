import React from "react"
import toJson from "enzyme-to-json"
import { shallow } from "enzyme"

import Donate from "../donate"

describe("Donate", () => {
  it("renders correctly", () => {
    const component = shallow(<Donate />)
    expect(toJson(component)).toMatchSnapshot()
  })
})
