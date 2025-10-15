import Link from 'next/link';
import Image from 'next/image';

// Import the logo as a static asset for GitHub Pages compatibility
import logoImage from '@/images/mdg.png';

export function Footer() {
  return (
    <footer className="border-border bg-card border-t py-8">
      <div className="container mx-auto px-4">
        {/* Logo Section */}
        <div className="mb-8 flex items-center justify-center gap-3">
          <Image
            src={logoImage}
            alt="GitHub Profile README Generator Logo"
            width={48}
            height={48}
            className="h-12 w-12"
          />
          <span className="text-xl font-bold">GitHub Profile README Generator</span>
        </div>

        <div className="grid gap-8 md:grid-cols-4">
          {/* About */}
          <div>
            <h3 className="mb-3 font-semibold">About</h3>
            <p className="text-muted-foreground text-sm">
              Create an awesome GitHub profile README with ease. Made with ❤️ for the developer
              community.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-3 font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Generator
                </Link>
              </li>
              <li>
                <Link
                  href="/addons"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Addons
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/support"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="mb-3 font-semibold">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://github.com/rahuldkjain/github-profile-readme-generator"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub Repository
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/rahuldkjain/github-profile-readme-generator/issues"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Report Issues
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/rahuldkjain/github-profile-readme-generator/blob/master/LICENSE"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  License
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="mb-3 font-semibold">Connect</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://github.com/rahuldkjain"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/rahuldkjain"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/rahuldkjain"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-muted-foreground border-border mt-8 border-t pt-6 text-center text-sm">
          <p>
            © {new Date().getFullYear()} GitHub Profile README Generator. Made with ❤️ by{' '}
            <a
              href="https://github.com/rahuldkjain"
              className="text-primary font-medium hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Rahul Jain
            </a>
          </p>
          <p className="mt-2">
            Open source under the{' '}
            <a
              href="https://github.com/rahuldkjain/github-profile-readme-generator/blob/master/LICENSE"
              className="text-primary hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Apache License 2.0
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
