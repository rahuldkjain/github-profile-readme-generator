import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Support',
  description:
    'Support the development of GitHub Profile README Generator and help make it better. Learn how to contribute, report issues, and sponsor the project.',
  alternates: {
    canonical: '/support',
  },
  openGraph: {
    title: 'Support | GitHub Profile README Generator',
    description:
      'Support the development of GitHub Profile README Generator and help make it better',
    url: '/support',
  },
};

export default function SupportPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="container mx-auto flex-1 px-4 py-12">
        <div className="page-content mx-auto max-w-4xl">
          <h1 className="mb-6 text-4xl font-bold">💵 Support OSS</h1>

          <blockquote className="border-primary border-l-4 pl-4 italic">
            Think of giving not as a duty but as a privilege - John D. Rockefeller Jr.
          </blockquote>

          <p className="text-lg">
            🚀 GitHub Profile README Generator tool is free and will always be free. Numerous
            developers has put their time and efforts to make this tool more powerful. However,
            these developers are doing their full time job along with open-source contributions.
          </p>

          <p>
            You can come forward to support the developers by making small donations. You will never
            know what this support mean to them. If you find the tool really helpful, then it will
            be very grateful to support the tool 🙇.
          </p>

          <div className="my-6 flex flex-wrap gap-3">
            <a
              href="https://www.paypal.me/rahuldkjain/10"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="https://ionicabizau.github.io/badges/paypal.svg" alt="PayPal" />
            </a>
            <a href="https://ko-fi.com/A0A81XXSX" target="_blank" rel="noopener noreferrer">
              <img
                height="23"
                width="100"
                src="https://cdn.ko-fi.com/cdn/kofi3.png?v=2"
                alt="Buy Coffee for rahuldkjain"
              />
            </a>
            <a
              href="https://www.buymeacoffee.com/rahuldkjain"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://cdn.buymeacoffee.com/buttons/default-orange.png"
                alt="Buy Me A Coffee"
                height="23"
                width="100"
                style={{ borderRadius: '2px' }}
              />
            </a>
          </div>

          <hr className="my-8" />

          <h2 className="mb-4 text-3xl font-bold">Social Support 🤝</h2>

          <a
            href="https://twitter.com/intent/tweet?text=Wow:&url=https%3A%2F%2Frahuldkjain.github.io%2Fgithub-profile-readme-generator"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Frahuldkjain.github.io%2Fgithub-profile-readme-generator"
              alt="tweet github profile readme generator"
            />
          </a>

          <p>Let the world know how you feel using this tool. Share with others on twitter.</p>

          <hr className="my-8" />

          <h2 className="mb-4 text-3xl font-bold">Sponsors 🙏</h2>

          <ul className="space-y-3">
            <li>
              <a
                href="https://github.com/scottcwilson"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Scott C Wilson
              </a>{' '}
              donated the first ever grant to this tool. A big thanks to him.
            </li>
            <li>
              <a
                href="https://github.com/mxschmitt"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Max Schmitt
              </a>{' '}
              loved the tool and showed the support with his donation. Thanks a lot.
            </li>
          </ul>

          <hr className="my-8" />

          <div className="bg-primary/5 border-primary/20 rounded-lg border p-6">
            <h3 className="mb-3 text-xl font-semibold">Other Ways to Support</h3>
            <ul className="space-y-2">
              <li>⭐ Star the project on GitHub</li>
              <li>🐛 Report bugs and issues</li>
              <li>💡 Suggest new features</li>
              <li>🔧 Contribute code via pull requests</li>
              <li>📢 Share the tool with your network</li>
              <li>📝 Write articles or tutorials about the tool</li>
            </ul>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
