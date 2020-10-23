import React from "react"
import renderer from "react-test-renderer"

import Subtitle from "../subtitle"

describe("Subtitle", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<Subtitle data={{ subtitle: "A passionate frontend developer from India" }} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
