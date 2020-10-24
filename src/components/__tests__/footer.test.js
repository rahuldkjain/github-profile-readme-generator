import React from "react"
import renderer from "react-test-renderer"

import Footer from "../footer"

describe("Footer component", () => {
  test("Matches the snapshot", () => {
    const footer = renderer.create(<Footer />).toJSON();
    expect(footer).toMatchSnapshot();
  });
});
