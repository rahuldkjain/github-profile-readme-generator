import React from "react"
import { shallow } from "enzyme"
import toJson from "enzyme-to-json"

import Social from "../social"

describe("Social", () => {
  const mockEvent = { target: { value: "This is a mock event" } }
  const props = {
    social: {
      github: "github ",
      twitter: "twitter",
      dev: "dev",
      codepen: "codepen",
      codesandbox: "codesandbodx",
      stackoverflow: "stackoverflow",
      linkedin: "linkedin",
      kaggle: "kaggle",
      fb: "fb",
      instagram: "instagram",
      dribble: "dribble",
      behance: "behance",
      medium: "medium",
      youtube: "youtube",
      codechef: "codechef",
      hackerrack: "hackerranck",
      codeforces: "codeforces",
      leetcode: "leetcode",
      topcoder: "topcoder",
      hackerearth: "@hackerearth",
      geeks_for_geeks: "geeks_for_geeks",
      discord: "discord",
      rssurl: "rssurl",
    },
    handleSocialChange: jest.fn().mockReturnValue({}),
  }
  it("renders correctly", () => {
    const component = shallow(<Social {...props} />)
    for (let i = 0; i < component.find("input").length; i++) {
      component.find("input").at(i).simulate("change", mockEvent)
    }
    expect(toJson(component)).toMatchSnapshot()
  })
})
