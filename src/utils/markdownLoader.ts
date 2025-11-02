/**
 * Markdown File Loading Utilities
 * Handles loading and parsing of markdown files from the content directory
 */

import matter from 'gray-matter';

/**
 * Glob patterns for loading markdown files
 * Multiple patterns ensure compatibility across dev and production builds
 */
export const BLOG_GLOB_PATTERNS = {
  ...import.meta.glob('/content/blog/*.md', { query: '?raw', import: 'default' }),
  ...import.meta.glob('/content/blog/**/*.md', { query: '?raw', import: 'default' }),
  ...import.meta.glob('../../content/blog/*.md', { query: '?raw', import: 'default' }),
  ...import.meta.glob('../../content/blog/**/*.md', { query: '?raw', import: 'default' }),
} as Record<string, () => Promise<string>>;

export const VIDEO_GLOB_PATTERNS = import.meta.glob('/content/videos/*.md', { 
  query: '?raw', 
  import: 'default' 
});

/**
 * Parse markdown content from a file module
 * Handles both eager-loaded and lazy-loaded modules
 */
export const parseMarkdownModule = async (fileModule: unknown): Promise<string> => {
  const resolved = typeof fileModule === 'function' 
    ? await (fileModule as () => Promise<unknown>)() 
    : fileModule;
  
  return typeof resolved === 'string'
    ? resolved
    : (resolved && typeof resolved === 'object' && 'default' in (resolved as Record<string, unknown>)
        ? (resolved as Record<string, unknown>).default as string
        : String(resolved));
};

/**
 * Parse frontmatter and content from markdown string
 */
export const parseMarkdown = (content: string) => {
  return matter(content);
};

/**
 * Extract filename without extension from path
 */
export const getFileNameFromPath = (path: string): string => {
  return path.split('/').pop()?.replace(/\.md$/, '') || 'unknown';
};

/**
 * Generate fallback slug from filename
 */
export const generateSlugFromFilename = (filename: string): string => {
  return filename;
};

/**
 * Generate fallback title from filename
 */
export const generateTitleFromFilename = (filename: string): string => {
  return filename
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (c: string) => c.toUpperCase());
};
