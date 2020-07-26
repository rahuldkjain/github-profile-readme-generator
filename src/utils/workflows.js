const latestBlogs = (devUsername) => {
    let rssFeed = 'https://dev.to/feed/' + devUsername
    let data = `
        name: Latest blog post workflow
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