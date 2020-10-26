const githubStatsStylingQueryString = options => {
  const params = {
    show_icons: true,
    ...(options.theme && options.theme !== "none") && { theme: options.theme },
    ...options.titleColor && { "title_color": options.titleColor },
    ...options.textColor && { "text_color": options.textColor},
    ...options.bgColor && { "bg_color": options.bgColor},
    ...options.hideBorder && { "hide_border": options.hideBorder},
    ...options.cacheSeconds && { "cache_seconds": options.cacheSeconds},
    ...options.locale && { "locale": options.locale},
  }
  const query_string = Object.entries(params).map(([key, value]) => `${key}=${value}`).join("&")
  return query_string
}

const streakStatsStylingQueryString = options => {
  const params = {
    ...(options.theme && options.theme !== "none") && { theme: options.theme },
  }
  const query_string = Object.entries(params).map(([key, value]) => `${key}=${value}`).join("&")
  return query_string
}

export const githubStatsLinkGenerator = ({github, options}) =>
  `https://github-readme-stats.vercel.app/api?username=${github}&${githubStatsStylingQueryString(options)}`

export const topLanguagesLinkGenerator = ({github, options}) =>
 `https://github-readme-stats.vercel.app/api/top-langs?username=${github}&${githubStatsStylingQueryString(options)}&layout=compact`

export const streakStatsLinkGenerator = ({github, options}) =>
 `https://github-readme-streak-stats.herokuapp.com/?user=${github}&${streakStatsStylingQueryString(options)}`