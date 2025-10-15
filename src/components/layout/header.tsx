'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { AccessibilityMenu } from '@/components/ui/accessibility-menu';
import { GitHubStats } from '@/components/ui/github-stats';

const navigation = [
  { name: 'Generator', href: '/' },
  { name: 'Addons', href: '/addons' },
  { name: 'About', href: '/about' },
  { name: 'Support', href: '/support' },
];

interface HeaderProps {
  saveStatus?: 'idle' | 'saving' | 'saved';
  lastSaved?: Date | null;
}

export function Header({}: HeaderProps = {}) {
  const pathname = usePathname();

  return (
    <header className="border-border bg-card sticky top-0 z-50 border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo, Title, and GitHub Stats */}
          <div className="flex items-center gap-4">
            <Link href="/" prefetch={true} className="flex items-center gap-3 hover:opacity-80">
              <Image
                src="/mdg.png"
                alt="GitHub Profile README Generator Logo"
                width={40}
                height={40}
                className="h-10 w-10"
                priority
                unoptimized
              />
              <span className="hidden text-xl font-bold sm:inline-block lg:text-2xl">
                GitHub Profile README Generator
              </span>
            </Link>
            <GitHubStats />
          </div>

          {/* Right side content */}
          <div className="flex items-center gap-3">
            <nav className="hidden lg:block" aria-label="Main navigation">
              <ul className="flex gap-4">
                {navigation.map((item) => {
                  // Normalize paths for comparison (remove trailing slashes)
                  const normalizedPathname = pathname.replace(/\/$/, '') || '/';
                  const normalizedHref = item.href.replace(/\/$/, '') || '/';
                  const isActive = normalizedPathname === normalizedHref;
                  return (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        prefetch={true}
                        className={`hover:text-primary text-sm font-medium transition-colors ${
                          isActive ? 'text-primary font-semibold' : 'text-muted-foreground'
                        }`}
                        aria-current={isActive ? 'page' : undefined}
                      >
                        {item.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div className="flex items-center gap-2">
              <AccessibilityMenu />
              <ThemeToggle />
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <nav className="mt-4 lg:hidden" aria-label="Mobile navigation">
          <ul className="flex gap-4 overflow-x-auto">
            {navigation.map((item) => {
              // Normalize paths for comparison (remove trailing slashes)
              const normalizedPathname = pathname.replace(/\/$/, '') || '/';
              const normalizedHref = item.href.replace(/\/$/, '') || '/';
              const isActive = normalizedPathname === normalizedHref;
              return (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    prefetch={true}
                    className={`hover:text-primary text-sm font-medium whitespace-nowrap transition-colors ${
                      isActive ? 'text-primary font-semibold' : 'text-muted-foreground'
                    }`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
