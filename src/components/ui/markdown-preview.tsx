'use client';

import { useState, memo, useMemo } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize from 'rehype-sanitize';
import { trackFileExported } from '@/lib/analytics';

interface MarkdownPreviewProps {
  markdown: string;
  title?: string;
}

export const MarkdownPreview = memo(function MarkdownPreview({
  markdown,
  title = 'Preview',
}: MarkdownPreviewProps) {
  const [viewMode, setViewMode] = useState<'preview' | 'markdown'>('preview');
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(markdown);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);

      // Track copy event
      trackFileExported('copy', 'markdown');
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const handleDownload = () => {
    const blob = new Blob([markdown], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'README.md';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    // Track download event
    trackFileExported('download', 'markdown');
  };

  // Memoize custom components to prevent ReactMarkdown re-renders
  const markdownComponents = useMemo(
    () => ({
      // Custom rendering to maintain alignment and styling
      p: ({ children }: any) => <p className="my-2">{children}</p>,
      h1: ({ children }: any) => <h1 className="mb-4 text-center text-xl font-bold">{children}</h1>,
      h3: ({ children }: any) => <h3 className="mb-2 text-lg font-semibold">{children}</h3>,
      img: ({ src, alt, width }: any) => {
        // Skill icons have width=40, resize them responsively
        if (width === '40' || width === 40) {
          return (
            <img src={src} alt={alt} className="mr-4 mb-4 inline-block h-6 w-6 sm:h-10 sm:w-10" />
          );
        }
        // Other images (badges, stats, etc.) keep their original size
        return <img src={src} alt={alt} className="inline-block" />;
      },
      a: ({ href, children }: any) => (
        <a
          href={href}
          className="text-blue-600 no-underline hover:underline dark:text-blue-400"
          target="_blank"
          rel="noreferrer"
        >
          {children}
        </a>
      ),
    }),
    [] // Empty deps - components never change
  );

  return (
    <div className="space-y-4" role="region" aria-label="Markdown preview and export">
      {/* Header with actions - Aligned layout */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h3 className="text-lg font-semibold" id="preview-title">
          {title}
        </h3>
        <div
          className="flex items-center justify-between gap-4"
          role="toolbar"
          aria-label="Preview actions"
        >
          {/* View Mode Toggle - With border */}
          <div
            className="border-border inline-flex rounded-lg border"
            role="group"
            aria-label="View mode toggle"
          >
            <button
              onClick={() => setViewMode('preview')}
              className={`rounded-l-lg px-3 py-2 text-sm font-medium transition-colors ${
                viewMode === 'preview' ? 'bg-primary text-primary-foreground' : 'hover:bg-accent'
              }`}
              aria-pressed={viewMode === 'preview'}
              aria-label="Show rendered preview"
            >
              Preview
            </button>
            <button
              onClick={() => setViewMode('markdown')}
              className={`border-border rounded-r-lg border-l px-3 py-2 text-sm font-medium transition-colors ${
                viewMode === 'markdown' ? 'bg-primary text-primary-foreground' : 'hover:bg-accent'
              }`}
              aria-pressed={viewMode === 'markdown'}
              aria-label="Show raw markdown"
            >
              Markdown
            </button>
          </div>

          {/* Action buttons - Aligned to end */}
          <div className="flex items-center gap-2">
            {/* Copy Button */}
            <button
              onClick={handleCopy}
              className="border-border hover:bg-accent rounded-lg border p-2 transition-colors"
              aria-label="Copy markdown to clipboard"
              title="Copy markdown to clipboard"
            >
              {copied ? (
                <svg
                  className="h-4 w-4 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              ) : (
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
              )}
            </button>

            {/* Download Button */}
            <button
              onClick={handleDownload}
              className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg p-2 transition-colors"
              aria-label="Download README.md file"
              title="Download README.md file"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="border-border bg-card min-h-[400px] rounded-lg border p-6">
        {/* Copy success announcement for screen readers */}
        {copied && (
          <div className="sr-only" role="status" aria-live="polite">
            Markdown copied to clipboard successfully
          </div>
        )}

        {viewMode === 'preview' ? (
          <div className="markdown-preview" role="document" aria-labelledby="preview-title">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeRaw, rehypeSanitize]}
              components={markdownComponents}
            >
              {markdown}
            </ReactMarkdown>
          </div>
        ) : (
          <pre className="text-foreground overflow-x-auto text-sm break-words whitespace-pre-wrap">
            {markdown}
          </pre>
        )}
      </div>
    </div>
  );
});
