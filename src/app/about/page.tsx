import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn about GitHub Profile README Generator - an open-source tool for creating awesome GitHub profile READMEs with customizable templates, skills showcase, and social links integration.',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About | GitHub Profile README Generator',
    description:
      'Learn about GitHub Profile README Generator - an open-source tool for creating awesome GitHub profile READMEs',
    url: '/about',
  },
};

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="container mx-auto flex-1 px-4 py-12">
        <div className="page-content mx-auto max-w-4xl">
          <h1 className="mb-6 text-4xl font-bold">👨‍💻 About</h1>

          <div className="mb-8 flex gap-2">
            <a
              href="https://github.com/rahuldkjain/github-profile-readme-generator/blob/master/LICENSE"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="https://img.shields.io/github/license/rahuldkjain/github-profile-readme-generator?style=flat-square"
                alt="github-profile-readme-generator license"
                width={100}
                height={100}
              />
            </a>
          </div>

          <p className="text-lg">
            <strong>GitHub Profile README Generator</strong> is an OSS (Open Source Software) that
            provides a cool interface to generate GitHub profile README in markdown.
          </p>

          <p>
            The tool aims to provide hassle-free experience to add trending addons like profile{' '}
            <strong>visitors count</strong>, <strong>github-stats</strong>,{' '}
            <strong>dynamic blog posts</strong> etc.
          </p>

          <p>
            The profile should be neat and minimal to give a clear overview of the work. Non-uniform
            icons, too much content, too much images/gifs distracts visitors to see your actual
            work.
          </p>

          <p>To solve this, GitHub Profile README Generator came into existence.</p>

          <p>
            So many developers contributed to the project and made it more awesome to use. You can
            contribute too to make it grow even further.
          </p>

          <div className="my-6 flex gap-3">
            <a
              href="https://github.com/rahuldkjain/github-profile-readme-generator/issues"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="https://img.shields.io/github/issues/rahuldkjain/github-profile-readme-generator?style=flat-square"
                alt="github-profile-readme-generator issues"
                width={100}
                height={100}
              />
            </a>
            <a
              href="https://github.com/rahuldkjain/github-profile-readme-generator/pulls"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="https://img.shields.io/github/issues-pr/rahuldkjain/github-profile-readme-generator?style=flat-square"
                alt="github-profile-readme-generator pull-requests"
                width={130}
                height={130}
              />
            </a>
          </div>

          <h3 className="mt-8 mb-4 text-2xl font-bold">Contributors 🙏</h3>

          <p>List of the developers who contributed to the project. A big shout out for them.</p>

          <a
            href="https://github.com/rahuldkjain/github-profile-readme-generator/graphs/contributors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="https://contributors-img.web.app/image?repo=rahuldkjain/github-profile-readme-generator"
              alt="Contributors"
              className="my-4"
              width={600}
              height={600}
            />
          </a>

          <hr className="my-8" />

          <h2 className="mb-4 text-3xl font-bold">How do I create a profile README?</h2>

          <p>
            The profile README is created by creating a new repository that's the same name as your
            username. For example, my GitHub username is <strong>rahuldkjain</strong> so I created a
            new repository with the name <strong>rahuldkjain</strong>. Note: at the time of this
            writing, in order to access the profile README feature, the letter-casing must match
            your GitHub username.
          </p>

          <ol className="list-decimal space-y-3 pl-6">
            <li>
              Create a new repository with the same name (including casing) as your GitHub username:{' '}
              <a
                href="https://github.com/new"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                https://github.com/new
              </a>
            </li>
            <li>
              Create a README.md file inside the new repo with content (text, GIFs, images, emojis,
              etc.)
            </li>
            <li>
              Commit your fancy new README! If you're on GitHub's web interface you can choose to
              commit directly to the repo's main branch (i.e., master or main) which will make it
              immediately visible on your profile
            </li>
            <li>
              Push changes to GitHub (if you made changes locally i.e., on your computer and not
              github.com)
            </li>
          </ol>

          <hr className="my-8" />

          <h2 className="mb-4 text-3xl font-bold">How to use?</h2>

          <p>
            Tired of editing profile README(.md) to add new features like visitors-count badge,
            github-stats etc?
          </p>

          <p>Don't worry. Keep calm, fill the form and let the tool do the work for you</p>

          <Image
            src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/github-profile-readme-generator.gif"
            alt="github profile readme generator"
            width="320"
            height={100}
            className="my-6"
          />

          <hr className="my-8" />

          <h2 className="mb-4 text-3xl font-bold">Why visitors count keeps on increasing?</h2>

          <p>
            So many users raised an issue that the counter keeps on increasing everytime the page
            reloads.
          </p>

          <p>
            Well it is visitors count not "unique" visitors count. The goal of the addon is to
            provide a good stat of how well the github profile is doing.
          </p>

          <p>
            Proper use or misuse of the addon is the sole responsibility of the user. The developer
            of the addon is working on it to fix this issue.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
