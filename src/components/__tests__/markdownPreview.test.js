import React from "react";
import renderer from "react-test-renderer";

import MarkdownPreview, { GithubProfileTrophyPreview, GitHubStatsPreview, SkillsPreview, SocialPreview, SubTitlePreview, TitlePreview, TopLanguagesPreview, TwitterBadgePreview, VisitorsBadgePreview, WorkPreview, SectionTitle, DisplayWork, DisplaySocial } from "../markdownPreview"

const DEFAULT_PREFIX = {
    title: "Hi 👋, I'm",
    currentWork: "🔭 I’m currently working on",
    currentLearn: "🌱 I’m currently learning",
    collaborateOn: "👯 I’m looking to collaborate on",
    helpWith: "🤝 I’m looking for help with",
    ama: "💬 Ask me about",
    contact: "📫 How to reach me",
    resume: "📄 Know about my experiences",
    funFact: "⚡ Fun fact",
    portfolio: "👨‍💻 All of my projects are available at",
    blog: "📝 I regulary write articles on",
}

const DEFAULT_DATA = {
    title: "dummy",
    subtitle: "A passionate frontend developer from India",
    currentWork: "readme-generator",
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
}

const DEFAULT_LINK = {
    currentWork: "https://dummy.com",
    collaborateOn: "",
    helpWith: "",
    portfolio: "",
    blog: "",
    resume: "",
}

const DEFAULT_SOCIAL = {
    github: "",
    dev: "",
    linkedin: "",
    codepen: "dummy",
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
}

const DUMMY_SKILLS = {
    skills: {
        unity: true,
        android: false,
        angularjs: false,
        apachecordova: false,
    }
}

describe("Markdown Preview", () => {
    it("renders correctly", () => {
        let prefix = DEFAULT_PREFIX;
        let data = DEFAULT_DATA;
        let link = DEFAULT_LINK;
        let social = DEFAULT_SOCIAL;
        let skills = {}
        const tree = renderer
            .create(<MarkdownPreview
                prefix={prefix}
                data={data}
                link={link}
                social={social}
                skills={skills} />)
            .toJSON()
        expect(tree).toMatchSnapshot()
    })
})
describe("Title Preview", () => {
    it("renders correctly", () => {
        let prefix = DEFAULT_PREFIX;
        let data = DEFAULT_DATA;
        const tree = renderer
            .create(<TitlePreview prefix={prefix.title} title={data.title} />)
            .toJSON()
        expect(tree).toMatchSnapshot()
    })
    it("renders correctly with no prefix", () => {
        let prefix = DEFAULT_PREFIX;
        const tree = renderer
            .create(<TitlePreview prefix={prefix.title} title={""} />)
            .toJSON()
        expect(tree).toMatchSnapshot()
    })
    it("renders correctly with no title", () => {
        let data = DEFAULT_DATA;
        const tree = renderer
            .create(<TitlePreview title={data.title} prefix={""} />)
            .toJSON()
        expect(tree).toMatchSnapshot()
    })
    it("renders correctly with no title and prefix", () => {
        const tree = renderer
            .create(<TitlePreview />)
            .toJSON()
        expect(tree).toMatchSnapshot()
    })
})
describe("SubTitle Preview", () => {
    it("renders correctly", () => {
        let data = DEFAULT_DATA;
        const tree = renderer
            .create(<SubTitlePreview subtitle={data.subtitle} />)
            .toJSON()
        expect(tree).toMatchSnapshot()
    })
    it("renders correctly with no subtitle", () => {
        const tree = renderer
            .create(<SubTitlePreview subtitle={""} />)
            .toJSON()
        expect(tree).toMatchSnapshot()
    })
})
describe("SectionTitle Preview", () => {
    it("renders correctly", () => {
        const tree = renderer
            .create(<SectionTitle visible={true} label={"dummy"} />)
            .toJSON()
        expect(tree).toMatchSnapshot()
    })
    it("renders correctly with no label", () => {
        const tree = renderer
            .create(<SectionTitle visible={true} label={""} />)
            .toJSON()
        expect(tree).toMatchSnapshot()
    })
    it("renders correctly with visible false", () => {
        const tree = renderer
            .create(<SectionTitle visible={false} label={"dummy"} />)
            .toJSON()
        expect(tree).toMatchSnapshot()
    })
})
describe("DisplayWork Preview", () => {
    it("renders correctly", () => {
        let prefix = DEFAULT_PREFIX;
        let data = DEFAULT_DATA;
        let link = DEFAULT_LINK;
        const tree = renderer
            .create(<DisplayWork prefix={prefix} project={data.currentWork} link={link.currentWork} />)
            .toJSON()
        expect(tree).toMatchSnapshot()
    })
    it("renders correctly with no prefix, link and project", () => {
        const tree = renderer
            .create(<DisplayWork prefix={undefined} project={undefined} link={undefined} />)
            .toJSON()
        expect(tree).toMatchSnapshot()
    })
    it("renders correctly with no prefix", () => {
        let data = DEFAULT_DATA;
        let link = DEFAULT_LINK;
        const tree = renderer
            .create(<DisplayWork prefix={undefined} project={data.currentWork} link={link.currentWork} />)
            .toJSON()
        expect(tree).toMatchSnapshot()
    })
    it("renders correctly with no project", () => {
        let prefix = DEFAULT_PREFIX;
        let link = DEFAULT_LINK;
        const tree = renderer
            .create(<DisplayWork prefix={prefix} project={undefined} link={link.currentWork} />)
            .toJSON()
        expect(tree).toMatchSnapshot()
    })
    it("renders correctly with no link", () => {
        let prefix = DEFAULT_PREFIX;
        let data = DEFAULT_DATA;
        const tree = renderer
            .create(<DisplayWork prefix={prefix} project={data.currentWork} link={undefined}/>)
            .toJSON()
        expect(tree).toMatchSnapshot()
    })
    it("renders correctly with no prefix and link", () => {
        let data = DEFAULT_DATA;
        const tree = renderer
            .create(<DisplayWork project={data.currentWork} />)
            .toJSON()
        expect(tree).toMatchSnapshot()
    })
    it("renders correctly with no project and link", () => {
        let prefix = DEFAULT_PREFIX;
        const tree = renderer
            .create(<DisplayWork prefix={prefix} />)
            .toJSON()
        expect(tree).toMatchSnapshot()
    })
    it("renders correctly with no project and prefix", () => {
        let link = DEFAULT_LINK;
        const tree = renderer
            .create(<DisplayWork link={link.currentWork} />)
            .toJSON()
        expect(tree).toMatchSnapshot()
    })
})
describe("DisplaySocial Preview", () => {
    it("renders correctly", () => {
        let social = DEFAULT_SOCIAL;
        const tree = renderer
            .create(<DisplaySocial
                base="https://codepen.io"
                icon="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/codepen.svg"
                username={social.codepen}
            />
            )
            .toJSON()
        expect(tree).toMatchSnapshot()
    })
    it("renders correctly with no username", () => {
        const tree = renderer
            .create(<DisplaySocial
                base="https://codepen.io"
                icon="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/codepen.svg"
                username={""}
            />
            )
            .toJSON()
        expect(tree).toMatchSnapshot()
    })
})
describe("VisitorsBadge Preview", () => {
    it("renders correctly", () => {
        let data = DEFAULT_DATA;
        let social = DEFAULT_SOCIAL;
        const tree = renderer
            .create(<VisitorsBadgePreview
                show={data.visitorsBadge}
                github={social.github}
                badgeOptions={{
                    badgeLabel: encodeURI(data.badgeLabel),
                    badgeColor: data.badgeColor,
                    badgeStyle: data.badgeStyle,
                }}
            />
            )
            .toJSON()
        expect(tree).toMatchSnapshot()
    })
    it("renders correctly with show true", () => {
        let data = DEFAULT_DATA;
        let social = DEFAULT_SOCIAL;
        const tree = renderer
            .create(<VisitorsBadgePreview
                show={true}
                github={social.github}
                badgeOptions={{
                    badgeLabel: encodeURI(data.badgeLabel),
                    badgeColor: data.badgeColor,
                    badgeStyle: data.badgeStyle,
                }}
            />
            )
            .toJSON()
        expect(tree).toMatchSnapshot()
    })
})
describe("GithubProfileTrophy Preview", () => {
    it("renders correctly", () => {
        let data = DEFAULT_DATA;
        let social = DEFAULT_SOCIAL;
        const tree = renderer
            .create(<GithubProfileTrophyPreview
                show={data.githubProfileTrophy}
                github={social.github}
            />)
            .toJSON()
        expect(tree).toMatchSnapshot()
    })
    it("renders correctly with show true", () => {
        let data = DEFAULT_DATA;
        let social = DEFAULT_SOCIAL;
        const tree = renderer
            .create(<GithubProfileTrophyPreview
                show={true}
                github={social.github}
            />)
            .toJSON()
        expect(tree).toMatchSnapshot()
    })
})
describe("TwitterBadgePreview Preview", () => {
    it("renders correctly", () => {
        let data = DEFAULT_DATA;
        let social = DEFAULT_SOCIAL;
        const tree = renderer
            .create(<TwitterBadgePreview
                show={data.twitterBadge}
                twitter={social.twitter}
            />)
            .toJSON()
        expect(tree).toMatchSnapshot()
    })
    it("renders correctly with show true", () => {
        let data = DEFAULT_DATA;
        let social = DEFAULT_SOCIAL;
        const tree = renderer
            .create(<TwitterBadgePreview
                show={true}
                twitter={social.twitter}
            />)
            .toJSON()
        expect(tree).toMatchSnapshot()
    })
})
describe("Work Preview", () => {
    it("renders correctly", () => {
        let data = DEFAULT_DATA;
        let prefix = DEFAULT_PREFIX;
        let link = DEFAULT_LINK;
        let props = { data: data, prefix: prefix, link: link }
        const tree = renderer
            .create(<WorkPreview work={props} />)
            .toJSON()
        expect(tree).toMatchSnapshot()
    })
})
describe("Social Preview", () => {
    it("renders correctly", () => {
        let social = DEFAULT_SOCIAL;
        const tree = renderer
            .create(<SocialPreview social={social} />)
            .toJSON()
        expect(tree).toMatchSnapshot()
    })
})
describe("Skills Preview", () => {
    it("renders correctly", () => {
        let skills = DUMMY_SKILLS.skills
        const tree = renderer
            .create(<SkillsPreview skills={skills} />)
            .toJSON()
        expect(tree).toMatchSnapshot()
    })
    it("renders correctly with no skills", () => {
        let skills = {}
        const tree = renderer
            .create(<SkillsPreview skills={skills} />)
            .toJSON()
        expect(tree).toMatchSnapshot()
    })
})
describe("TopLanguages Preview", () => {
    it("renders correctly", () => {
        let data = DEFAULT_DATA;
        let social = DEFAULT_SOCIAL;
        const tree = renderer
            .create(<TopLanguagesPreview
                show={data.topLanguages}
                github={social.github}
                options={data.topLanguagesOptions}
            />)
            .toJSON()
        expect(tree).toMatchSnapshot()
    })
    it("renders correctly with show true", () => {
        let data = DEFAULT_DATA;
        let social = DEFAULT_SOCIAL;
        const tree = renderer
            .create(<TopLanguagesPreview
                show={true}
                github={social.github}
                options={data.topLanguagesOptions}
            />)
            .toJSON()
        expect(tree).toMatchSnapshot()
    })
})
describe("GitHubStats Preview", () => {
    it("renders correctly", () => {
        let data = DEFAULT_DATA;
        let social = DEFAULT_SOCIAL;
        const tree = renderer
            .create(<GitHubStatsPreview
                show={data.githubStats}
                github={social.github}
                options={data.githubStatsOptions}
            />)
            .toJSON()
        expect(tree).toMatchSnapshot()
    })
    it("renders correctly", () => {
        let data = DEFAULT_DATA;
        let social = DEFAULT_SOCIAL;
        const tree = renderer
            .create(<GitHubStatsPreview
                show={true}
                github={social.github}
                options={data.githubStatsOptions}
            />)
            .toJSON()
        expect(tree).toMatchSnapshot()
    })
})
