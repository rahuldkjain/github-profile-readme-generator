import React from "react"
import { shallow } from "enzyme"
import toJson from "enzyme-to-json"

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
      blog: '📝 I regularly write articles on',
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


  it("renders without subtitle", () => {
    const component = shallow(
        <Markdown
          {...props}
          data={{
            ...props.data,
            subtitle: '',
          }}
        />
      )
    expect(toJson(component)).toMatchSnapshot()
  })

  it("renders without prefix.title and data.title", () => {
    const component = shallow(
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
    expect(toJson(component)).toMatchSnapshot()
  })

  it("renders topLanguages is true", () => {
    const component = shallow(
        <Markdown
          {...props}
          data={{
            ...props.data,
            topLanguages: true,
          }}
        />
      )
    expect(toJson(component)).toMatchSnapshot()
  })

  it("renders topLanguages is true and githubStats is true", () => {
    const component = shallow(
        <Markdown
          {...props}
          data={{
            ...props.data,
            topLanguages: true,
            githubStats: true,
          }}
        />
      )
    expect(toJson(component)).toMatchSnapshot()
  })

  it("renders devDynamicBlogs is true", () => {
    const component = shallow(
        <Markdown
          {...props}
          data={{
            ...props.data,
            devDynamicBlogs: true,
          }}
        />
      )
    expect(toJson(component)).toMatchSnapshot()
  })

  it("renders without link.currentWork", () => {
    const component = shallow(
        <Markdown
          {...props}
          link={{
            ...props.data,
            currentWork: '',
          }}
        />
      )
    expect(toJson(component)).toMatchSnapshot()
  })

  it("renders visitorsBadge is true", () => {
    const component = shallow(
        <Markdown
          {...props}
          data={{
            ...props.data,
            visitorsBadge: true,
          }}
        />
      )
    expect(toJson(component)).toMatchSnapshot()
  })

  it("renders twitterBadge is true", () => {
    const component = shallow(
        <Markdown
          {...props}
          data={{
            ...props.data,
            twitterBadge: true,
          }}
        />
      )
    expect(toJson(component)).toMatchSnapshot()
  })

  it("renders githubProfileTrophy is true", () => {
    const component = shallow(
        <Markdown
          {...props}
          data={{
            ...props.data,
            githubProfileTrophy: true,
          }}
        />
      )
    expect(toJson(component)).toMatchSnapshot()
  })

  it("renders githubProfileTrophy is true", () => {
    const component = shallow(
        <Markdown
          {...props}
          data={{
            ...props.data,
            githubProfileTrophy: true,
          }}
        />
      )
    expect(toJson(component)).toMatchSnapshot()
  })
})
