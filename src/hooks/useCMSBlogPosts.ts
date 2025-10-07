/**
 * Blog Posts List Hook
 * Fetches all blog posts from the CMS
 */

import { useState, useEffect } from 'react';
import { CMSBlogPost } from '@/types/cms';
import { 
  BLOG_GLOB_PATTERNS, 
  parseMarkdownModule, 
  parseMarkdown,
  getFileNameFromPath,
  generateSlugFromFilename,
  generateTitleFromFilename
} from '@/utils/markdownLoader';

export const useCMSBlogPosts = () => {
  const [posts, setPosts] = useState<CMSBlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        console.log('[CMS] Blog glob matches:', Object.keys(BLOG_GLOB_PATTERNS));
        const loadedPosts: CMSBlogPost[] = [];

        for (const path in BLOG_GLOB_PATTERNS) {
          try {
            const fileModule = BLOG_GLOB_PATTERNS[path];
            const raw = await parseMarkdownModule(fileModule);
            const { data, content: body } = parseMarkdown(raw);
            
            const fileName = getFileNameFromPath(path);
            const fallbackSlug = (data as any)?.slug || generateSlugFromFilename(fileName);
            const fallbackTitle = (data as any)?.title || generateTitleFromFilename(fileName);

            loadedPosts.push({
              slug: fallbackSlug,
              title: fallbackTitle,
              date: (data as any)?.date || new Date().toISOString(),
              featuredImage: (data as any)?.featuredImage || '/placeholder.svg',
              metaTitle: (data as any)?.metaTitle || fallbackTitle,
              metaDescription: (data as any)?.metaDescription || '',
              body: body,
            });
          } catch (error) {
            console.warn('[CMS] Failed to parse blog file', path, error);
            continue;
          }
        }

        if (loadedPosts.length === 0) {
          console.warn('[CMS] No blog posts found. Ensure files exist in content/blog and frontmatter includes slug and title.');
        }

        // Deduplicate posts by slug (glob patterns may match same file multiple times)
        const uniquePosts = Array.from(
          new Map(loadedPosts.map(post => [post.slug, post])).values()
        );

        // Sort by date (newest first)
        uniquePosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        setPosts(uniquePosts);
      } catch (error) {
        console.error('Error loading CMS blog posts:', error);
      } finally {
        setLoading(false);
      }
    };

    loadPosts();
  }, []);

  return { posts, loading };
};
