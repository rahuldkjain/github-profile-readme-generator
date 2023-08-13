import { isMediumUsernameValid } from './validation';

export default function latestBlogs(payload) {
  let rssFeed = '';
  if (
    payload.dev.show &&
    payload.dev.username &&
    payload.rssurl.show &&
    payload.rssurl.username &&
    payload.medium.show &&
    payload.medium.username &&
    isMediumUsernameValid(payload.medium.username)
  ) {
    rssFeed = `https://dev.to/feed/${payload.dev.username}, https://medium.com/feed/${payload.medium.username}, ${payload.rssurl.username}`;
  }
  // when any two blog providers are selected
  else if (payload.dev.show && payload.dev.username && payload.rssurl.show && payload.rssurl.username) {
    rssFeed = `https://dev.to/feed/${payload.dev.username}, ${payload.rssurl.username}`;
  } else if (
    payload.rssurl.show &&
    payload.rssurl.username &&
    payload.medium.show &&
    payload.medium.username &&
    isMediumUsernameValid(payload.medium.username)
  ) {
    rssFeed = `https://medium.com/feed/${payload.medium.username}, ${payload.rssurl.username}`;
  } else if (
    payload.dev.show &&
    payload.dev.username &&
    payload.medium.show &&
    payload.medium.username &&
    isMediumUsernameValid(payload.medium.username)
  ) {
    rssFeed = `https://dev.to/feed/${payload.dev.username}, https://medium.com/feed/${payload.medium.username}`;
  }
  // when only one blog provider is selected
  else if (payload.dev.show && payload.dev.username) {
    rssFeed = `https://dev.to/feed/${payload.dev.username}`;
  } else if (payload.rssurl.show && payload.rssurl.username) {
    rssFeed = payload.rssurl.username;
  } else {
    rssFeed = `https://medium.com/feed/${payload.medium.username}`;
  }
  const data = `name: Latest blog post workflow
on: 
    schedule:
        - cron: '0 * * * *'
    workflow_dispatch: # Run workflow manually (without waiting for the cron to be called), through the GitHub Actions Workflow page directly

permissions:
    contents: write # To write the generated contents to the readme

jobs: 
    update-readme-with-blog: 
        name: Update this repo's README with latest blog posts
        runs-on: ubuntu-latest
        steps: 
            - name: Checkout
              uses: actions/checkout@v3
            - name: Pull in posts
              uses: gautamkrishnar/blog-post-workflow@v1
              with: 
                max_post_count: "4"
                feed_list: "${rssFeed}"`;

  return data;
}
