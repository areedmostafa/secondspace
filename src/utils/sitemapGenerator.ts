/**
 * Sitemap Generator Utility
 * Generates sitemap.xml with all static pages and blog posts
 */

import { BLOG_GLOB_PATTERNS, parseMarkdownModule, parseMarkdown, getFileNameFromPath, generateSlugFromFilename } from './markdownLoader';

const SITE_URL = 'https://secondspace.studio';

interface SitemapUrl {
  loc: string;
  lastmod?: string;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
}

// Static pages configuration
const staticPages: SitemapUrl[] = [
  {
    loc: '/',
    changefreq: 'weekly',
    priority: 1.0,
  },
  {
    loc: '/blog',
    changefreq: 'daily',
    priority: 0.9,
  },
  {
    loc: '/portfolio',
    changefreq: 'weekly',
    priority: 0.8,
  },
  {
    loc: '/portfolio/videos',
    changefreq: 'weekly',
    priority: 0.8,
  },
  {
    loc: '/portfolio/videos/short-form',
    changefreq: 'weekly',
    priority: 0.7,
  },
  {
    loc: '/portfolio/videos/promo',
    changefreq: 'weekly',
    priority: 0.7,
  },
  {
    loc: '/portfolio/videos/motion-graphics',
    changefreq: 'weekly',
    priority: 0.7,
  },
  {
    loc: '/case-studies',
    changefreq: 'monthly',
    priority: 0.8,
  },
];

/**
 * Load all blog post slugs and dates
 */
export const getBlogPosts = async (): Promise<SitemapUrl[]> => {
  const blogUrls: SitemapUrl[] = [];

  for (const path in BLOG_GLOB_PATTERNS) {
    try {
      const fileModule = BLOG_GLOB_PATTERNS[path];
      const raw = await parseMarkdownModule(fileModule);
      const { data } = parseMarkdown(raw);
      
      const fileName = getFileNameFromPath(path);
      const slug = (data as any)?.slug || generateSlugFromFilename(fileName);
      const date = (data as any)?.date || new Date().toISOString();

      blogUrls.push({
        loc: `/blog/${slug}`,
        lastmod: new Date(date).toISOString().split('T')[0],
        changefreq: 'monthly',
        priority: 0.7,
      });
    } catch (error) {
      console.warn('[Sitemap] Failed to parse blog file', path, error);
      continue;
    }
  }

  // Deduplicate by loc
  const uniqueUrls = Array.from(
    new Map(blogUrls.map(url => [url.loc, url])).values()
  );

  return uniqueUrls;
};

/**
 * Generate XML sitemap string
 */
export const generateSitemapXML = async (): Promise<string> => {
  const blogPosts = await getBlogPosts();
  const allUrls = [...staticPages, ...blogPosts];

  const urlEntries = allUrls.map(url => {
    const lastmod = url.lastmod ? `<lastmod>${url.lastmod}</lastmod>` : '';
    const changefreq = url.changefreq ? `<changefreq>${url.changefreq}</changefreq>` : '';
    const priority = url.priority !== undefined ? `<priority>${url.priority}</priority>` : '';

    return `  <url>
    <loc>${SITE_URL}${url.loc}</loc>${lastmod}${changefreq}${priority}
  </url>`;
  }).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>`;
};

/**
 * Generate and log sitemap (for build-time generation)
 */
export const generateAndLogSitemap = async () => {
  try {
    const sitemap = await generateSitemapXML();
    console.log('[Sitemap] Generated sitemap with', sitemap.split('<url>').length - 1, 'URLs');
    return sitemap;
  } catch (error) {
    console.error('[Sitemap] Error generating sitemap:', error);
    throw error;
  }
};