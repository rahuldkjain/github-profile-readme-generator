import React from "react"
import { shallow } from "enzyme"
import toJson from "enzyme-to-json"

import Loader from "../loader"

describe("Loader", () => {
  const component = shallow(<Loader />)

  it("renders correctly", () => {
    expect(toJson(component)).toMatchSnapshot()
  })
})
