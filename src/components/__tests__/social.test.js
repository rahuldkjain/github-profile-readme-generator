import React from "react"
import renderer from "react-test-renderer"

import Social from "../social"

describe("Social", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<Social social={{ github: "github" }} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
