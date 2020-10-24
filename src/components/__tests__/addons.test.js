import React from "react"
import renderer from "react-test-renderer"

import Addons from "../addons"

describe("Addons", () => {
  const dataInput = {
    title: "",
    subtitle: "A passionate frontend developer from India",
    currentWork: "",
    currentLearn: "",
    collaborateOn: "",
    helpWith: "",
    ama: "",
    contact: "",
    funFact: "",
    twitterBadge: false,
    visitorsBadge: false,
    badgeStyle: "flat",
    badgeColor: "0e75b6",
    badgeLabel: "Profile views",
    githubProfileTrophy: false,
    githubStats: false,
    githubStatsOptions: {
      theme: "",
      titleColor: "",
      textColor: "",
      bgColor: "",
      hideBorder: false,
      cacheSeconds: null,
      locale: "en",
    },
    topLanguages: false,
    topLanguagesOptions: {
      theme: "",
      titleColor: "",
      textColor: "",
      bgColor: "",
      hideBorder: false,
      cacheSeconds: null,
      locale: "en",
    },
    devDynamicBlogs: false,
    mediumDynamicBlogs: false,
    rssDynamicBlogs: false,
  };
  const socialInput = {
    github: "",
    dev: "",
    linkedin: "",
    codepen: "",
    stackoverflow: "",
    kaggle: "",
    codesandbox: "",
    fb: "",
    instagram: "",
    twitter: "",
    dribbble: "",
    behance: "",
    medium: "",
    youtube: "",
    codechef: "",
    hackerrank: "",
    codeforces: "",
    leetcode: "",
    topcoder: "",
    hackerearth: "",
    geeks_for_geeks: "",
    discord: "",
    rssurl: "",
  };

  let mockHandleCheckChange;
  let mockHandleDataChange;
  beforeEach(() => {
    mockHandleCheckChange = jest.fn();
    mockHandleDataChange = jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders correctly", () => {
    const tree = renderer
      .create(<Addons
        data={dataInput}
        social={socialInput}
        handleCheckChange={mockHandleCheckChange}
        handleDataChange={mockHandleDataChange}
      />)
      .toJSON()
    expect(tree).toMatchSnapshot();
  });
});