import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Addons',
  description:
    'Discover the awesome open-source addons and tools used in GitHub Profile README Generator. Explore the technology stack and libraries that power this amazing tool.',
  alternates: {
    canonical: '/addons',
  },
  openGraph: {
    title: 'Addons | GitHub Profile README Generator',
    description:
      'Discover the awesome open-source addons and tools used in GitHub Profile README Generator',
    url: '/addons',
  },
};

export default function AddonsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="container mx-auto flex-1 px-4 py-12">
        <div className="page-content mx-auto max-w-4xl">
          <h1 className="mb-6 text-4xl font-bold">🚀 Addons</h1>

          <p className="text-lg">
            GitHub Profile README Generator tool uses few open-source addons developed by other
            developers. Including such features makes the tool useful. The developers of this tool
            is very grateful to use these awesome addons.
          </p>

          <hr className="my-8" />

          <h2 className="text-3xl font-bold">
            <a
              href="https://github.com/anuraghazra/github-readme-stats"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              GitHub README Stats
            </a>
          </h2>

          <p>⚡️ Dynamically generated stats for your github readmes</p>

          <h4 className="mt-6 mb-3 text-xl font-semibold">GitHub Stats Card</h4>

          <a href="https://github.com/rahuldkjain" target="_blank" rel="noopener noreferrer">
            <img
              src="https://github-readme-stats.vercel.app/api?username=rahuldkjain&show_icons=true"
              width="320"
              alt="Rahul's github stats"
            />
          </a>

          <h4 className="mt-6 mb-3 text-xl font-semibold">Top Skills Card</h4>

          <a href="https://github.com/rahuldkjain" target="_blank" rel="noopener noreferrer">
            <img
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=rahuldkjain&layout=compact&hide=html"
              width="320"
              alt="Rahul's github top skills"
            />
          </a>

          <p>
            Developed by{' '}
            <a
              href="https://github.com/anuraghazra"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Anurag Hazra
            </a>
            .
          </p>

          <p>
            You can customize the theme too. See how to customize yours{' '}
            <a
              href="https://github.com/anuraghazra/github-readme-stats"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              here
            </a>
          </p>

          <hr className="my-8" />

          <h2 className="text-3xl font-bold">
            <a
              href="https://github.com/DenverCoder1/github-readme-streak-stats"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              GitHub Readme Streak Stats
            </a>
          </h2>

          <p>
            Stay motivated while contributing to open source by displaying your current contribution
            streak
          </p>

          <img
            src="https://github-readme-streak-stats.herokuapp.com/?user=rahuldkjain"
            alt="rahuldkjain"
            className="my-4"
          />

          <p>
            Developed by{' '}
            <a
              href="https://github.com/DenverCoder1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Jonah Lawrence
            </a>
            .
          </p>

          <p>
            See how to customize the theme{' '}
            <a
              href="https://github.com/DenverCoder1/github-readme-streak-stats"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              here
            </a>
          </p>

          <hr className="my-8" />

          <h2 className="text-3xl font-bold">
            <a
              href="https://github.com/antonkomarev/github-profile-views-counter"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              GitHub Profile Views Counter
            </a>
          </h2>

          <p>
            It counts how many times your GitHub profile has been viewed. Free cloud micro-service.
          </p>

          <img
            src="https://komarev.com/ghpvc/?username=rahuldkjain&style=flat-square"
            alt="rahuldkjain"
            className="my-4"
          />

          <p>
            Developed by{' '}
            <a
              href="https://github.com/antonkomarev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Anton Komarev
            </a>
            .
          </p>

          <p>
            You can customize the color, label and style too. See how to customize{' '}
            <a
              href="https://github.com/antonkomarev/github-profile-views-counter"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              here
            </a>
          </p>

          <hr className="my-8" />

          <h2 className="text-3xl font-bold">
            <a
              href="https://github.com/gautamkrishnar/blog-post-workflow"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Dynamic Latest Blog Posts
            </a>
          </h2>

          <p>
            Show your latest blog posts from any sources (like dev.to, medium etc) or StackOverflow
            activity on your GitHub profile/project readme automatically using the RSS feed.
          </p>

          <img
            src="https://user-images.githubusercontent.com/8397274/88047382-29b8b280-cb6f-11ea-9efb-2af2b10f3e0c.png"
            width="320"
            alt="dynamic latest blog example"
            className="my-4"
          />

          <p>
            Developed by{' '}
            <a
              href="https://github.com/gautamkrishnar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Gautam Krishna R
            </a>
          </p>

          <h3 className="mt-6 mb-3 text-2xl font-semibold">How to use</h3>

          <ul className="list-disc space-y-3 pl-6">
            <li>Go to your repository</li>
            <li>
              Add the following section to your **README.md** file, you can give whatever title you
              want. Just make sure that you use **&lt;!-- BLOG-POST-LIST:START --&gt;&lt;!--
              BLOG-POST-LIST:END --&gt;** in your readme. The workflow will replace this comment
              with the actual blog post list:
            </li>
          </ul>

          <pre className="my-4 overflow-x-auto rounded-lg bg-slate-800 p-4 text-sm text-white dark:bg-slate-900">
            <code>{`# Blog posts

<!-- BLOG-POST-LIST:START -->
<!-- BLOG-POST-LIST:END -->`}</code>
          </pre>

          <ul className="list-disc space-y-3 pl-6">
            <li>
              Create a folder named <code>.github</code> and create <code>workflows</code> folder
              inside it if it doesn't exist.
            </li>
            <li>
              Create a new file named <code>blog-post-workflow.yml</code> with the following
              contents inside the workflows folder:
            </li>
          </ul>

          <pre className="my-4 overflow-x-auto rounded-lg bg-slate-800 p-4 text-sm text-white dark:bg-slate-900">
            <code>{`name: Latest blog post workflow
on:
  schedule:
    # Runs every hour
    - cron: '0 * * * *'
jobs:
  update-readme-with-blog:
    name: Update this repo's README with latest blog posts
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: gautamkrishnar/blog-post-workflow@master
        with:
          feed_list: 'https://dev.to/feed/rahuldkjain, https://medium.com/feed/@rahuldkjain'`}</code>
          </pre>

          <ul className="list-disc space-y-3 pl-6">
            <li>Replace the above url list with your own rss feed urls.</li>
            <li>Commit and wait for it to run</li>
          </ul>

          <p>
            To know more, check out the{' '}
            <a
              href="https://github.com/gautamkrishnar/blog-post-workflow"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              official github repository
            </a>
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
