import React from "react";
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MarkdownPreview, { GithubProfileTrophyPreview, GitHubStatsPreview, SkillsPreview, SocialPreview, SubTitlePreview, TitlePreview, TopLanguagesPreview, TwitterBadgePreview, VisitorsBadgePreview, WorkPreview, SectionTitle, DisplayWork, DisplaySocial } from "../markdownPreview"

configure({ adapter: new Adapter() });

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
    blog: "📝 I regularly write articles on",
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
        const tree = shallow(<MarkdownPreview
                prefix={prefix}
                data={data}
                link={link}
                social={social}
                skills={skills} />)

        expect(tree).toMatchSnapshot()
    })
})
describe("Title Preview", () => {
    it("renders correctly", () => {
        let prefix = DEFAULT_PREFIX;
        let data = DEFAULT_DATA;
        const tree = shallow(<TitlePreview prefix={prefix.title} title={data.title} />)

        expect(tree).toMatchSnapshot()
    })
    it("renders correctly with no prefix", () => {
        let prefix = DEFAULT_PREFIX;
        const tree = shallow(<TitlePreview prefix={prefix.title} title={""} />)

        expect(tree).toMatchSnapshot()
    })
    it("renders correctly with no title", () => {
        let data = DEFAULT_DATA;
        const tree = shallow(<TitlePreview title={data.title} prefix={""} />)

        expect(tree).toMatchSnapshot()
    })
    it("renders correctly with no title and prefix", () => {
        const tree = shallow(<TitlePreview />)

        expect(tree).toMatchSnapshot()
    })
})
describe("SubTitle Preview", () => {
    it("renders correctly", () => {
        let data = DEFAULT_DATA;
        const tree = shallow(<SubTitlePreview subtitle={data.subtitle} />)

        expect(tree).toMatchSnapshot()
    })
    it("renders correctly with no subtitle", () => {
        const tree = shallow(<SubTitlePreview subtitle={""} />)

        expect(tree).toMatchSnapshot()
    })
})
describe("SectionTitle Preview", () => {
    it("renders correctly", () => {
        const tree = shallow(<SectionTitle visible={true} label={"dummy"} />)

        expect(tree).toMatchSnapshot()
    })
    it("renders correctly with no label", () => {
        const tree = shallow(<SectionTitle visible={true} label={""} />)

        expect(tree).toMatchSnapshot()
    })
    it("renders correctly with visible false", () => {
        const tree = shallow(<SectionTitle visible={false} label={"dummy"} />)

        expect(tree).toMatchSnapshot()
    })
})
describe("DisplayWork Preview", () => {
    it("renders correctly", () => {
        let prefix = DEFAULT_PREFIX;
        let data = DEFAULT_DATA;
        let link = DEFAULT_LINK;
        const tree = shallow(<DisplayWork prefix={prefix} project={data.currentWork} link={link.currentWork} />)

        expect(tree).toMatchSnapshot()
    })
    it("renders correctly with no prefix, link and project", () => {
        const tree = shallow(<DisplayWork prefix={undefined} project={undefined} link={undefined} />)

        expect(tree).toMatchSnapshot()
    })
    it("renders correctly with no prefix", () => {
        let data = DEFAULT_DATA;
        let link = DEFAULT_LINK;
        const tree = shallow(<DisplayWork prefix={undefined} project={data.currentWork} link={link.currentWork} />)

        expect(tree).toMatchSnapshot()
    })
    it("renders correctly with no project", () => {
        let prefix = DEFAULT_PREFIX;
        let link = DEFAULT_LINK;
        const tree = shallow(<DisplayWork prefix={prefix} project={undefined} link={link.currentWork} />)

        expect(tree).toMatchSnapshot()
    })
    it("renders correctly with no link", () => {
        let prefix = DEFAULT_PREFIX;
        let data = DEFAULT_DATA;
        const tree = shallow(<DisplayWork prefix={prefix} project={data.currentWork} link={undefined}/>)

        expect(tree).toMatchSnapshot()
    })
    it("renders correctly with no prefix and link", () => {
        let data = DEFAULT_DATA;
        const tree = shallow(<DisplayWork project={data.currentWork} />)

        expect(tree).toMatchSnapshot()
    })
    it("renders correctly with no project and link", () => {
        let prefix = DEFAULT_PREFIX;
        const tree = shallow(<DisplayWork prefix={prefix} />)

        expect(tree).toMatchSnapshot()
    })
    it("renders correctly with no project and prefix", () => {
        let link = DEFAULT_LINK;
        const tree = shallow(<DisplayWork link={link.currentWork} />)

        expect(tree).toMatchSnapshot()
    })
})
describe("DisplaySocial Preview", () => {
    it("renders correctly", () => {
        let social = DEFAULT_SOCIAL;
        const tree = shallow(<DisplaySocial
                base="https://codepen.io"
                icon="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/codepen.svg"
                username={social.codepen}
            />
            )

        expect(tree).toMatchSnapshot()
    })
    it("renders correctly with no username", () => {
        const tree = shallow(<DisplaySocial
                base="https://codepen.io"
                icon="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/codepen.svg"
                username={""}
            />
            )

        expect(tree).toMatchSnapshot()
    })
})
describe("VisitorsBadge Preview", () => {
    it("renders correctly", () => {
        let data = DEFAULT_DATA;
        let social = DEFAULT_SOCIAL;
        const tree = shallow(<VisitorsBadgePreview
                show={data.visitorsBadge}
                github={social.github}
                badgeOptions={{
                    badgeLabel: encodeURI(data.badgeLabel),
                    badgeColor: data.badgeColor,
                    badgeStyle: data.badgeStyle,
                }}
            />
            )

        expect(tree).toMatchSnapshot()
    })
    it("renders correctly with show true", () => {
        let data = DEFAULT_DATA;
        let social = DEFAULT_SOCIAL;
        const tree = shallow(<VisitorsBadgePreview
                show={true}
                github={social.github}
                badgeOptions={{
                    badgeLabel: encodeURI(data.badgeLabel),
                    badgeColor: data.badgeColor,
                    badgeStyle: data.badgeStyle,
                }}
            />
            )

        expect(tree).toMatchSnapshot()
    })
})
describe("GithubProfileTrophy Preview", () => {
    it("renders correctly", () => {
        let data = DEFAULT_DATA;
        let social = DEFAULT_SOCIAL;
        const tree = shallow(<GithubProfileTrophyPreview
                show={data.githubProfileTrophy}
                github={social.github}
            />)

        expect(tree).toMatchSnapshot()
    })
    it("renders correctly with show true", () => {
        let data = DEFAULT_DATA;
        let social = DEFAULT_SOCIAL;
        const tree = shallow(<GithubProfileTrophyPreview
                show={true}
                github={social.github}
            />)

        expect(tree).toMatchSnapshot()
    })
})
describe("TwitterBadgePreview Preview", () => {
    it("renders correctly", () => {
        let data = DEFAULT_DATA;
        let social = DEFAULT_SOCIAL;
        const tree = shallow(<TwitterBadgePreview
                show={data.twitterBadge}
                twitter={social.twitter}
            />)

        expect(tree).toMatchSnapshot()
    })
    it("renders correctly with show true", () => {
        let data = DEFAULT_DATA;
        let social = DEFAULT_SOCIAL;
        const tree = shallow(<TwitterBadgePreview
                show={true}
                twitter={social.twitter}
            />)

        expect(tree).toMatchSnapshot()
    })
})
describe("Work Preview", () => {
    it("renders correctly", () => {
        let data = DEFAULT_DATA;
        let prefix = DEFAULT_PREFIX;
        let link = DEFAULT_LINK;
        let props = { data: data, prefix: prefix, link: link }
        const tree = shallow(<WorkPreview work={props} />)

        expect(tree).toMatchSnapshot()
    })
})
describe("Social Preview", () => {
    it("renders correctly", () => {
        let social = DEFAULT_SOCIAL;
        const tree = shallow(<SocialPreview social={social} />)

        expect(tree).toMatchSnapshot()
    })
})
describe("Skills Preview", () => {
    it("renders correctly", () => {
        let skills = DUMMY_SKILLS.skills
        const tree = shallow(<SkillsPreview skills={skills} />)

        expect(tree).toMatchSnapshot()
    })
    it("renders correctly with no skills", () => {
        let skills = {}
        const tree = shallow(<SkillsPreview skills={skills} />)

        expect(tree).toMatchSnapshot()
    })
})
describe("TopLanguages Preview", () => {
    it("renders correctly", () => {
        let data = DEFAULT_DATA;
        let social = DEFAULT_SOCIAL;
        const tree = shallow(<TopLanguagesPreview
                show={data.topLanguages}
                github={social.github}
                options={data.topLanguagesOptions}
            />)

        expect(tree).toMatchSnapshot()
    })
    it("renders correctly with show true", () => {
        let data = DEFAULT_DATA;
        let social = DEFAULT_SOCIAL;
        const tree = shallow(<TopLanguagesPreview
                show={true}
                github={social.github}
                options={data.topLanguagesOptions}
            />)

        expect(tree).toMatchSnapshot()
    })
})
describe("GitHubStats Preview", () => {
    it("renders correctly", () => {
        let data = DEFAULT_DATA;
        let social = DEFAULT_SOCIAL;
        const tree = shallow(<GitHubStatsPreview
                show={data.githubStats}
                github={social.github}
                options={data.githubStatsOptions}
            />)

        expect(tree).toMatchSnapshot()
    })
    it("renders correctly", () => {
        let data = DEFAULT_DATA;
        let social = DEFAULT_SOCIAL;
        const tree = shallow(<GitHubStatsPreview
                show={true}
                github={social.github}
                options={data.githubStatsOptions}
            />)

        expect(tree).toMatchSnapshot()
    })
})
