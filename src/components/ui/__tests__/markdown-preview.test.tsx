import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi, afterEach } from 'vitest';
import { MiniMarkdownPreview, MarkdownPreview } from '../markdown-preview';

afterEach(() => {
  vi.restoreAllMocks();
  vi.useRealTimers();
});

describe('MiniMarkdownPreview', () => {
  it('renders plain text paragraph', () => {
    render(<MiniMarkdownPreview markdown="Hello world" />);
    expect(screen.getByText('Hello world')).toBeInTheDocument();
  });

  it('renders heading elements', () => {
    const md = '# Title\n## Subtitle\n### Section';
    render(<MiniMarkdownPreview markdown={md} />);

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Title');
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Subtitle');
    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent('Section');
  });

  it('renders links with target blank and noreferrer', () => {
    const md = '[example](https://example.com)';
    render(<MiniMarkdownPreview markdown={md} />);

    const link = screen.getByRole('link', { name: 'example' });
    expect(link).toHaveAttribute('href', 'https://example.com');
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noreferrer');
  });

  it('renders skill-sized images (width=40) with compact icon styling', () => {
    const { container } = render(
      <MiniMarkdownPreview
        markdown={'<img src="https://img.dev/logo.png" alt="logo" width="40" />'}
      />
    );

    const img = container.querySelector('img');
    expect(img).not.toBeNull();
    expect(img).toHaveAttribute('src', 'https://img.dev/logo.png');
    expect(img).toHaveClass('inline-block');
    expect(img?.className).toMatch(/h-5/);
  });

  it('renders regular images at natural size (no width=40)', () => {
    const { container } = render(
      <MiniMarkdownPreview
        markdown={'<img src="https://img.dev/badge.png" alt="badge" width="120" />'}
      />
    );

    const img = container.querySelector('img');
    expect(img).not.toBeNull();
    expect(img).toHaveClass('inline-block', 'max-w-full');
    expect(img?.className).not.toMatch(/h-5/);
  });

  it('renders unordered and ordered lists', () => {
    const md = '- one\n- two\n\n1. first\n2. second';
    render(<MiniMarkdownPreview markdown={md} />);

    const lists = screen.getAllByRole('list');
    expect(lists).toHaveLength(2);
    const items = screen.getAllByRole('listitem');
    expect(items).toHaveLength(4);
    expect(screen.getByText('one')).toBeInTheDocument();
    expect(screen.getByText('first')).toBeInTheDocument();
  });

  it('renders GFM tables with header row', () => {
    const md = '| Name | Age |\n| --- | --- |\n| Alice | 30 |';
    render(<MiniMarkdownPreview markdown={md} />);

    expect(screen.getByRole('table')).toBeInTheDocument();
    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('Alice')).toBeInTheDocument();
  });

  it('renders inline code and blockquote', () => {
    const md = 'Use `npm` to install.\n\n> A quoted note';
    render(<MiniMarkdownPreview markdown={md} />);

    expect(screen.getByText('npm')).toHaveClass('font-mono');
    expect(screen.getByText('A quoted note')).toBeInTheDocument();
  });

  it('renders horizontal rule', () => {
    const { container } = render(<MiniMarkdownPreview markdown={'above\n\n***\n\nbelow\n'} />);
    expect(container.querySelector('hr')).toBeInTheDocument();
  });

  it('sanitizes dangerous HTML (script tags stripped)', () => {
    const { container } = render(
      <MiniMarkdownPreview markdown={'<script>alert("xss")</script><p>safe</p>'} />
    );

    expect(container.querySelector('script')).toBeNull();
    expect(screen.getByText('safe')).toBeInTheDocument();
  });

  it('uses role="document" on container for a11y', () => {
    const { container } = render(<MiniMarkdownPreview markdown="x" />);
    expect(container.querySelector('.mini-markdown-preview')).toHaveAttribute('role', 'document');
  });

  it('does not render copy / download buttons (lightweight variant)', () => {
    render(<MiniMarkdownPreview markdown="# hi" />);
    expect(screen.queryByRole('button')).toBeNull();
  });

  it('memoizes: identical markdown keeps the same heading instance', () => {
    const md = '# stable';
    const { rerender } = render(<MiniMarkdownPreview markdown={md} />);
    const firstHeading = screen.getByRole('heading', { level: 1 });

    rerender(<MiniMarkdownPreview markdown={md} />);
    const secondHeading = screen.getByRole('heading', { level: 1 });

    expect(secondHeading).toBe(firstHeading);
  });
});

describe('MarkdownPreview', () => {
  it('renders title in header', () => {
    render(<MarkdownPreview markdown="# hi" title="My Title" />);
    expect(screen.getByText('My Title')).toBeInTheDocument();
  });

  it('defaults to preview view mode showing rendered content', () => {
    render(<MarkdownPreview markdown="rendered text" />);
    expect(screen.getByText('rendered text')).toBeInTheDocument();
  });

  it('toggles to raw markdown view', async () => {
    const user = userEvent.setup();
    render(<MarkdownPreview markdown="# heading text" />);

    await user.click(screen.getByRole('button', { name: 'Show raw markdown' }));

    expect(screen.getByText('# heading text')).toBeInTheDocument();
  });

  it('marks active view mode button with aria-pressed', async () => {
    const user = userEvent.setup();
    render(<MarkdownPreview markdown="x" />);

    const previewBtn = screen.getByRole('button', { name: 'Show rendered preview' });
    const rawBtn = screen.getByRole('button', { name: 'Show raw markdown' });

    expect(previewBtn).toHaveAttribute('aria-pressed', 'true');
    expect(rawBtn).toHaveAttribute('aria-pressed', 'false');

    await user.click(rawBtn);
    expect(rawBtn).toHaveAttribute('aria-pressed', 'true');
    expect(previewBtn).toHaveAttribute('aria-pressed', 'false');
  });

  it('copies markdown to clipboard', async () => {
    const user = userEvent.setup();
    const writeText = vi.fn().mockResolvedValue(undefined);
    // jsdom doesn't ship clipboard; stub it for this test only.
    Object.defineProperty(navigator, 'clipboard', {
      value: { writeText },
      configurable: true,
      writable: true,
    });

    render(<MarkdownPreview markdown="copy me" />);
    await user.click(screen.getByRole('button', { name: 'Copy markdown to clipboard' }));

    await waitFor(() => expect(writeText).toHaveBeenCalledWith('copy me'));
  });

  it('downloads README.md file on click (creates object URL and clicks anchor)', async () => {
    const user = userEvent.setup();
    const createObjectURL = vi.fn(() => 'blob:fake-url');
    const revokeObjectURL = vi.fn();
    vi.stubGlobal('URL', { ...URL, createObjectURL, revokeObjectURL });

    // Capture anchor clicks without breaking the DOM
    const originalClick = HTMLAnchorElement.prototype.click;
    const clickedAnchors: HTMLAnchorElement[] = [];
    HTMLAnchorElement.prototype.click = function () {
      // eslint-disable-next-line @typescript-eslint/no-this-alias
      clickedAnchors.push(this);
    };

    try {
      render(<MarkdownPreview markdown="download me" />);
      await user.click(screen.getByRole('button', { name: 'Download README.md file' }));

      expect(createObjectURL).toHaveBeenCalledTimes(1);
      expect(clickedAnchors).toHaveLength(1);
      expect(clickedAnchors[0]).toHaveAttribute('href', 'blob:fake-url');
      expect(clickedAnchors[0]).toHaveAttribute('download', 'README.md');
      expect(revokeObjectURL).toHaveBeenCalledWith('blob:fake-url');
    } finally {
      HTMLAnchorElement.prototype.click = originalClick;
      vi.unstubAllGlobals();
    }
  });

  it('provides toolbar and region roles for a11y', () => {
    render(<MarkdownPreview markdown="x" />);
    expect(screen.getByRole('region', { name: 'Markdown preview and export' })).toBeInTheDocument();
    expect(screen.getByRole('toolbar', { name: 'Preview actions' })).toBeInTheDocument();
  });

  it('sanitizes dangerous HTML in full preview as well', () => {
    const { container } = render(
      <MarkdownPreview markdown={'<script>alert(1)</script><p>safe</p>'} />
    );
    expect(container.querySelector('script')).toBeNull();
    expect(screen.getByText('safe')).toBeInTheDocument();
  });
});
