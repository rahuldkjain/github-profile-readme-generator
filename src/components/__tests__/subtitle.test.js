import React from "react"
import { shallow } from "enzyme"
import toJson from "enzyme-to-json"

import Subtitle from "../subtitle"

describe("Subtitle", () => {
  const component = shallow(
    <Subtitle data={{ subtitle: "A frontend developer" }} />
  )

  it("renders correctly", () => {
    expect(toJson(component)).toMatchSnapshot()
  })
})
