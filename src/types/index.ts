import { STATS_THEMES, STREAK_STATS_THEMES } from "../constants/options"

export type StatsType = {
  theme: keyof typeof STATS_THEMES
  titleColor: string
  textColor: string
  bgColor: string
  hideBorder: boolean
  cacheSeconds: number
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
