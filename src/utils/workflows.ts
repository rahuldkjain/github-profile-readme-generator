import { isMediumUsernameValid } from "./validation"
import type { Blogs } from "../types"

export const latestBlogs = ({ dev, rssurl, medium }: Blogs) => {
  let rssFeed = ""
  if (
    dev.show &&
    dev.username &&
    rssurl.show &&
    rssurl.username &&
    medium.show &&
    medium.username &&
    isMediumUsernameValid(medium.username)
  ) {
    rssFeed =
      "https://dev.to/feed/" +
      dev.username +
      ", https://medium.com/feed/" +
      medium.username +
      ", " +
      rssurl.username
  }
  //when any two blog providers are selected
  else if (dev.show && dev.username && rssurl.show && rssurl.username) {
    rssFeed = "https://dev.to/feed/" + dev.username + ", " + rssurl.username
  } else if (
    rssurl.show &&
    rssurl.username &&
    medium.show &&
    medium.username &&
    isMediumUsernameValid(medium.username)
  ) {
    rssFeed =
      "https://medium.com/feed/" + medium.username + ", " + rssurl.username
  } else if (
    dev.show &&
    dev.username &&
    medium.show &&
    medium.username &&
    isMediumUsernameValid(medium.username)
  ) {
    rssFeed =
      "https://dev.to/feed/" +
      dev.username +
      ", https://medium.com/feed/" +
      medium.username
  }
  // when only one blog provider is selected
  else if (dev.show && dev.username) {
    rssFeed = "https://dev.to/feed/" + dev.username
  } else if (rssurl.show && rssurl.username) {
    rssFeed = rssurl.username
  } else {
    rssFeed = "https://medium.com/feed/" + medium.username
  }

  return `name: Latest blog post workflow
on: 
    schedule:
        - cron: '0 * * * *'
jobs: 
    update-readme-with-blog: 
        name: Update this repo's README with latest blog posts
        runs-on: ubuntu-latest
        steps: 
            - uses: actions/checkout@v2
            - uses: gautamkrishnar/blog-post-workflow@master
              with: 
                max_post_count: "4"
                feed_list: "${rssFeed}"`
}
