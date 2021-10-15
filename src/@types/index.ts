import { STATS_THEMES, STREAK_STATS_THEMES } from "../constants/options"
import {
  DEFAULT_PREFIX,
  DEFAULT_DATA,
  DEFAULT_LINK,
  DEFAULT_SOCIAL,
  DEFAULT_SUPPORT,
} from "../constants/defaults"
import {
  initialSkillState,
  skills,
  categorizedSkills,
} from "../constants/skills"

export type StatsType = {
  theme: keyof typeof STATS_THEMES
  titleColor: string
  textColor: string
  bgColor: string
  hideBorder: boolean
  cacheSeconds: number | null
  locale: string
}

export type StreakStatsType = {
  theme: keyof typeof STREAK_STATS_THEMES
}

export type Blogs = {
  rssurl: {
    show: boolean
    username: string
  }
  dev: {
    show: boolean
    username: string
  }
  medium: {
    show: boolean
    username: string
  }
}

export type Skill = typeof skills[number]
export type Category = keyof typeof categorizedSkills

export type BadgeOptions = {
  badgeLabel: string
  badgeColor: string
  badgeStyle: string
}

export type ProfileInfo = {
  prefix: typeof DEFAULT_PREFIX
  data: typeof DEFAULT_DATA
  link: typeof DEFAULT_LINK
  social: typeof DEFAULT_SOCIAL
  skills: typeof initialSkillState
  support: typeof DEFAULT_SUPPORT
}

export type ProfilePrefixHandle = Pick<ProfileInfo, "prefix"> & {
  handlePrefixChange: (
    key: keyof ProfileInfo["prefix"],
    event: React.ChangeEvent<HTMLInputElement>
  ) => void
}

export type ProfileDataHandle = Pick<ProfileInfo, "data"> & {
  handleDataChange: (
    key: keyof ProfileInfo["data"],
    event: React.ChangeEvent<HTMLInputElement>
  ) => void
}

export type ProfileLinkHandle = Pick<ProfileInfo, "link"> & {
  handleLinkChange: (
    key: keyof ProfileInfo["link"],
    event: React.ChangeEvent<HTMLInputElement>
  ) => void
}

export type ProfileSocialHandle = Pick<ProfileInfo, "social"> & {
  handleSocialChange: (
    key: keyof ProfileInfo["social"],
    event: React.ChangeEvent<HTMLInputElement>
  ) => void
}

export type ProfileSkillsHandle = Pick<ProfileInfo, "skills"> & {
  handleSkillsChange: (
    key: keyof ProfileInfo["skills"],
    event: React.ChangeEvent<HTMLInputElement>
  ) => void
}

export type ProfileSupportHandle = Pick<ProfileInfo, "support"> & {
  handleSupportChange: (
    key: keyof ProfileInfo["support"],
    event: React.ChangeEvent<HTMLInputElement>
  ) => void
}
