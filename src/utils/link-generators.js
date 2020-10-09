export const githubStatsLinkGenerator = ({github, options, show}) => {
  const params = {
    username: github,
    show_icons: true,
    ...(options.theme && options.theme !== "none") && { theme: options.theme },
    ...options.titleColor && { "title_color": options.titleColor },
    ...options.textColor && { "text_color": options.textColor},
    ...options.bgColor && { "bg_color": options.bgColor},
    ...options.hideBorder && { "hide_border": options.hideBorder},
    ...options.cacheSeconds && { "cache_seconds": options.cacheSeconds},
    ...options.locale && { "locale": options.locale},
  }
  console.log(params);
  const query_string = Object.entries(params).map(([key, value]) => `${key}=${value}`).join("&")
  const link = `https://github-readme-stats.vercel.app/api?${query_string}`
  return link
}
