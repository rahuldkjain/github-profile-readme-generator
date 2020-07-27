import { isMediumUsernameVaid } from "../utils/validation"

const latestBlogs = (payload) => {
    let rssFeed = ''
    if (payload.dev.show && payload.dev.username && payload.medium.show && payload.medium.username && isMediumUsernameVaid(payload.medium.username)) {
        rssFeed = 'https://dev.to/feed/' + payload.dev.username + ', https://medium.com/feed/' + payload.medium.username
    } else if(payload.dev.show && payload.dev.username) {
        rssFeed = 'https://dev.to/feed/' + payload.dev.username
    } else {
        rssFeed = 'https://medium.com/feed/' + payload.medium.username
    }
    let data = `name: Latest blog post workflow
on: 
    schedule:
        - cron: '0 * * * *'
jobs: 
    update-readme-with-blog: 
        name: Update this repo's README with latest blog posts
        runs - on: ubuntu - latest
        steps: 
            - uses: actions / checkout@v2
            - uses: gautamkrishnar / blog - post - workflow@master
              with: 
                max_post_count: "4",
                feed_list: "${rssFeed}"`;

    return data
}

export { latestBlogs }