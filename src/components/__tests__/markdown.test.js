import React from "react"
import renderer from "react-test-renderer"

import Markdown from "../markdown"

describe("Markdown", () => {
  const props = {
    data: {
      ama: '',
      badgeColor: '0e75b6',
      badgeLabel: 'Profile views',
      badgeStyle: 'flat',
      collaborateOn: '',
      contact: '',
      currentLearn: '',
      currentWork: 'currentWork',
      devDynamicBlogs: false,
      funFact: '',
      githubProfileTrophy: false,
      githubStats: false,
      githubStatsOptions: {
        bgColor: '',
        cacheSeconds: null,
        hideBorder: false,
        locale: 'en',
        textColor: '',
        theme: '',
        titleColor: '',
      },
      helpWith: '',
      mediumDynamicBlogs: false,
      rssDynamicBlogs: false,
      subtitle: 'A passionate frontend developer from India',
      title: 'title',
      topLanguages: false,
      topLanguagesOptions: {
        bgColor: '',
        cacheSeconds: null,
        hideBorder: false,
        locale: 'en',
        textColor: '',
        theme: '',
        titleColor: '',
      },
      twitterBadge: false,
      visitorsBadge: false,
    },
    link: {
      blog: 'blog',
      collaborateOn: 'collaborateOn',
      currentWork: 'currentWork',
      helpWith: 'helpWith',
      portfolio: 'portfolio',
      resume: 'resume',
    },
    prefix: {
      ama: '💬 Ask me about',
      blog: '📝 I regulary write articles on',
      collaborateOn: '👯 I’m looking to collaborate on',
      contact: '📫 How to reach me',
      currentLearn: '🌱 I’m currently learning',
      currentWork: '🔭 I’m currently working on',
      funFact: '⚡ Fun fact',
      helpWith: '🤝 I’m looking for help with',
      portfolio: '👨‍💻 All of my projects are available at',
      resume: '📄 Know about my experiences',
      title: "Hi 👋, I'm",
    },
    skills: {
      javascript: true,
      express: false,
    },
    social: {
      dev: 'dev',
      codechef: '',
    },
  };

  it("renders correctly", () => {
    const tree = renderer.create(
        <Markdown
          {...props}
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it("renders without subtitle", () => {
    const tree = renderer.create(
        <Markdown
          {...props}
          data={{
            ...props.data,
            subtitle: '',
          }}
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it("renders without prefix.title and data.title", () => {
    const tree = renderer.create(
        <Markdown
          {...props}
          data={{
            ...props.data,
            title: '',
          }}
          prefix={{
            ...props.prefix,
            title: '',
          }}
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it("renders topLanguages is true", () => {
    const tree = renderer.create(
        <Markdown
          {...props}
          data={{
            ...props.data,
            topLanguages: true,
          }}
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it("renders topLanguages is true and githubStats is true", () => {
    const tree = renderer.create(
        <Markdown
          {...props}
          data={{
            ...props.data,
            topLanguages: true,
            githubStats: true,
          }}
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it("renders devDynamicBlogs is true", () => {
    const tree = renderer.create(
        <Markdown
          {...props}
          data={{
            ...props.data,
            devDynamicBlogs: true,
          }}
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it("renders without link.currentWork", () => {
    const tree = renderer.create(
        <Markdown
          {...props}
          link={{
            ...props.data,
            currentWork: '',
          }}
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it("renders visitorsBadge is true", () => {
    const tree = renderer.create(
        <Markdown
          {...props}
          data={{
            ...props.data,
            visitorsBadge: true,
          }}
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it("renders twitterBadge is true", () => {
    const tree = renderer.create(
        <Markdown
          {...props}
          data={{
            ...props.data,
            twitterBadge: true,
          }}
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it("renders githubProfileTrophy is true", () => {
    const tree = renderer.create(
        <Markdown
          {...props}
          data={{
            ...props.data,
            githubProfileTrophy: true,
          }}
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it("renders githubProfileTrophy is true", () => {
    const tree = renderer.create(
        <Markdown
          {...props}
          data={{
            ...props.data,
            githubProfileTrophy: true,
          }}
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
