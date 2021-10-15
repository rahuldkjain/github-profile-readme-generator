import type { StatsType, StreakStatsType } from "../@types"

const githubStatsStylingQueryString = ({
  theme,
  titleColor,
  textColor,
  bgColor,
  hideBorder,
  cacheSeconds,
  locale,
}: StatsType) => {
  const params = {
    show_icons: true,
    ...(theme && theme !== "none" && { theme: theme }),
    ...(titleColor && { title_color: titleColor }),
    ...(textColor && { text_color: textColor }),
    ...(bgColor && { bg_color: bgColor }),
    ...(hideBorder && { hide_border: hideBorder }),
    ...(cacheSeconds && { cache_seconds: cacheSeconds }),
    ...(locale && { locale: locale }),
  }
  return Object.entries(params)
    .map(([key, value]) => `${key}=${value}`)
    .join("&")
}

const streakStatsStylingQueryString = ({ theme }: StreakStatsType) => {
  const params = {
    ...(theme && { theme: theme }),
  }
  return Object.entries(params)
    .map(([key, value]) => `${key}=${value}`)
    .join("&")
}

export const githubStatsLinkGenerator = ({
  github,
  options,
}: {
  github: string
  options: StatsType
}) =>
  `https://github-readme-stats.vercel.app/api?username=${github}&${githubStatsStylingQueryString(
    options
  )}`

export const topLanguagesLinkGenerator = ({
  github,
  options,
}: {
  github: string
  options: StatsType
}) =>
  `https://github-readme-stats.vercel.app/api/top-langs?username=${github}&${githubStatsStylingQueryString(
    options
  )}&layout=compact`

export const streakStatsLinkGenerator = ({
  github,
  options,
}: {
  github: string
  options: StreakStatsType
}) =>
  `https://github-readme-streak-stats.herokuapp.com/?user=${github}&${streakStatsStylingQueryString(
    options
  )}`
