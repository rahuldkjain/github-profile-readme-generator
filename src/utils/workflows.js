import { isMediumUsernameValid } from "../utils/validation"

const latestBlogs = payload => {
  let rssFeed = ""
  if (
    payload.dev.show &&
    payload.dev.username &&
    payload.rssurl.show &&
    payload.rssurl.username &&
    payload.medium.show &&
    payload.medium.username &&
    isMediumUsernameValid(payload.medium.username)
  ) {
    rssFeed =
      "https://dev.to/feed/" +
      payload.dev.username +
      ", https://medium.com/feed/" +
      payload.medium.username +
      ", " +
      payload.rssurl.username
  }
  //when any two blog providers are selected
  else if (
    payload.dev.show &&
    payload.dev.username &&
    payload.rssurl.show &&
    payload.rssurl.username
  ) {
    rssFeed =
      "https://dev.to/feed/" +
      payload.dev.username +
      ", " +
      payload.rssurl.username
  } else if (
    payload.rssurl.show &&
    payload.rssurl.username &&
    payload.medium.show &&
    payload.medium.username &&
    isMediumUsernameValid(payload.medium.username)
  ) {
    rssFeed =
      "https://medium.com/feed/" +
      payload.medium.username +
      ", " +
      payload.rssurl.username
  } else if (
    payload.dev.show &&
    payload.dev.username &&
    payload.medium.show &&
    payload.medium.username &&
    isMediumUsernameValid(payload.medium.username)
  ) {
    rssFeed =
      "https://dev.to/feed/" +
      payload.dev.username +
      ", https://medium.com/feed/" +
      payload.medium.username
  }
  // when only one blog provider is selected
  else if (payload.dev.show && payload.dev.username) {
    rssFeed = "https://dev.to/feed/" + payload.dev.username
  } else if (payload.rssurl.show && payload.rssurl.username) {
    rssFeed = payload.rssurl.username
  } else {
    rssFeed = "https://medium.com/feed/" + payload.medium.username
  }
  let data = `name: Latest blog post workflow
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

  return data
}

export { latestBlogs }
