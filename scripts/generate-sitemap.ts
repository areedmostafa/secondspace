/**
 * Build-time Sitemap Generation Script
 * Run this script to generate sitemap.xml before deployment
 * Usage: tsx scripts/generate-sitemap.ts
 */

import { writeFileSync } from 'fs';
import { resolve } from 'path';

// Import the generator (adjust path as needed)
async function generateSitemap() {
  const SITE_URL = 'https://secondspace.studio';
  
  // Static pages
  const staticPages = [
    { loc: '/', changefreq: 'weekly', priority: 1.0 },
    { loc: '/blog', changefreq: 'daily', priority: 0.9 },
    { loc: '/portfolio', changefreq: 'weekly', priority: 0.8 },
    { loc: '/portfolio/videos', changefreq: 'weekly', priority: 0.8 },
    { loc: '/portfolio/videos/short-form', changefreq: 'weekly', priority: 0.7 },
    { loc: '/portfolio/videos/promo', changefreq: 'weekly', priority: 0.7 },
    { loc: '/portfolio/videos/motion-graphics', changefreq: 'weekly', priority: 0.7 },
    { loc: '/case-studies', changefreq: 'monthly', priority: 0.8 },
  ];

  // Blog posts (you'll need to read from content/blog directory)
  const glob = await import('glob');
  const matter = await import('gray-matter');
  const { readFileSync } = await import('fs');
  
  const blogFiles = glob.sync('content/blog/*.md');
  const blogUrls = blogFiles.map(file => {
    const content = readFileSync(file, 'utf-8');
    const { data } = matter.default(content);
    const fileName = file.split('/').pop()?.replace('.md', '') || '';
    const slug = data.slug || fileName;
    const date = data.date || new Date().toISOString();
    
    return {
      loc: `/blog/${slug}`,
      lastmod: new Date(date).toISOString().split('T')[0],
      changefreq: 'monthly' as const,
      priority: 0.7,
    };
  });

  const allUrls = [...staticPages, ...blogUrls];

  const urlEntries = allUrls.map(url => {
    const lastmod = url.lastmod ? `\n    <lastmod>${url.lastmod}</lastmod>` : '';
    const changefreq = url.changefreq ? `\n    <changefreq>${url.changefreq}</changefreq>` : '';
    const priority = url.priority !== undefined ? `\n    <priority>${url.priority}</priority>` : '';

    return `  <url>
    <loc>${SITE_URL}${url.loc}</loc>${lastmod}${changefreq}${priority}
  </url>`;
  }).join('\n');

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>`;

  // Write to public/sitemap.xml
  const sitemapPath = resolve(process.cwd(), 'public', 'sitemap.xml');
  writeFileSync(sitemapPath, sitemap, 'utf-8');
  console.log(`✅ Sitemap generated successfully with ${allUrls.length} URLs`);
  console.log(`📍 Location: ${sitemapPath}`);
  console.log(`🌐 Sitemap URL: ${SITE_URL}/sitemap.xml`);
}

generateSitemap().catch(console.error);