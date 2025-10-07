/**
 * Single Blog Post Hook
 * Fetches a specific blog post by slug
 */

import { useState, useEffect } from 'react';
import { CMSBlogPost } from '@/types/cms';
import { 
  BLOG_GLOB_PATTERNS, 
  parseMarkdownModule, 
  parseMarkdown 
} from '@/utils/markdownLoader';

export const useCMSBlogPost = (slug: string) => {
  const [post, setPost] = useState<CMSBlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPost = async () => {
      try {
        for (const path in BLOG_GLOB_PATTERNS) {
          try {
            const fileModule = BLOG_GLOB_PATTERNS[path];
            const raw = await parseMarkdownModule(fileModule);
            const { data, content: body } = parseMarkdown(raw);

            if ((data as any)?.slug === slug) {
              setPost({
                slug: (data as any).slug,
                title: (data as any).title,
                date: (data as any).date,
                featuredImage: (data as any).featuredImage,
                metaTitle: (data as any).metaTitle,
                metaDescription: (data as any).metaDescription,
                body: body,
              });
              break;
            }
          } catch (error) {
            console.warn('[CMS] Failed to parse blog file', path, error);
            continue;
          }
        }
      } catch (error) {
        console.error('Error loading CMS blog post:', error);
      } finally {
        setLoading(false);
      }
    };

    loadPost();
  }, [slug]);

  return { post, loading };
};
