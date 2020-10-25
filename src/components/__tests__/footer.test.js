import React from "react"
import { shallow } from "enzyme"
import toJson from "enzyme-to-json"

import Footer from "../footer"

describe("Footer component", () => {
  const component = shallow(<Footer />)

  it("renders correctly", () => {
    expect(toJson(component)).toMatchSnapshot()
  })
})
