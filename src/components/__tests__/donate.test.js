import React from "react"
import renderer from "react-test-renderer"

import Donate from "../donate"

describe("Donate", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<Donate />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
