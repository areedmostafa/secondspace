import { useState, useEffect } from 'react';
import matter from 'gray-matter';

interface CMSVideo {
  slug: string;
  title: string;
  videoUrl: string;
  category: 'short-form' | 'promo' | 'motion-graphics';
  description?: string;
  date: string;
}

interface CMSBlogPost {
  slug: string;
  title: string;
  date: string;
  featuredImage: string;
  metaTitle: string;
  metaDescription: string;
  body: string;
}

export const useCMSVideos = (category?: string) => {
  const [videos, setVideos] = useState<CMSVideo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadVideos = async () => {
      try {
        const videoFiles = import.meta.glob('/content/videos/*.md', { query: '?raw', import: 'default' });
        const loadedVideos: CMSVideo[] = [];

        for (const path in videoFiles) {
          const content = await videoFiles[path]() as string;
          const { data } = matter(content);
          
          loadedVideos.push({
            slug: data.slug,
            title: data.title,
            videoUrl: data.videoUrl,
            category: data.category,
            description: data.description,
            date: data.date,
          });
        }

        loadedVideos.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        
        const filteredVideos = category 
          ? loadedVideos.filter(video => video.category === category)
          : loadedVideos;
        
        setVideos(filteredVideos);
      } catch (error) {
        console.error('Error loading CMS videos:', error);
      } finally {
        setLoading(false);
      }
    };

    loadVideos();
  }, [category]);

  return { videos, loading };
};

export const useCMSBlogPosts = () => {
  const [posts, setPosts] = useState<CMSBlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [debugPaths, setDebugPaths] = useState<string[]>([]);
  const [debugInfo, setDebugInfo] = useState<string[]>([]);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        // Support both dev and build by trying multiple glob patterns and eager loading
        const blogFiles = {
          ...import.meta.glob('/content/blog/*.md', { query: '?raw', import: 'default', eager: true }),
          ...import.meta.glob('/content/blog/**/*.md', { query: '?raw', import: 'default', eager: true }),
          ...import.meta.glob('../../content/blog/*.md', { query: '?raw', import: 'default', eager: true }),
          ...import.meta.glob('../../content/blog/**/*.md', { query: '?raw', import: 'default', eager: true }),
        } as Record<string, string | (() => Promise<string>)>;

        console.log('[CMS] Blog glob matches:', Object.keys(blogFiles));
        setDebugPaths(Object.keys(blogFiles));
        const loadedPosts: CMSBlogPost[] = [];
        const debug: string[] = [];

        for (const path in blogFiles) {
          try {
            const fileModule = blogFiles[path] as unknown;
            const resolved = typeof fileModule === 'function' ? await (fileModule as () => Promise<unknown>)() : fileModule;
            const raw = typeof resolved === 'string'
              ? resolved
              : (resolved && typeof resolved === 'object' && 'default' in (resolved as Record<string, unknown>)
                  ? (resolved as Record<string, unknown>).default as string
                  : String(resolved));

            const { data, content: body } = matter(raw);
            const fileName = path.split('/').pop()?.replace(/\.md$/, '') || 'post';
            const fallbackSlug = (data as any)?.slug || fileName;
            const fallbackTitle = (data as any)?.title || fileName.replace(/-/g, ' ').replace(/\b\w/g, (c: string) => c.toUpperCase());

            debug.push(`${path} -> parsed:ok, slug:${(data as any)?.slug ? 'ok' : 'fallback'}, title:${(data as any)?.title ? 'ok' : 'fallback'}`);

            loadedPosts.push({
              slug: fallbackSlug,
              title: fallbackTitle,
              date: (data as any)?.date || new Date().toISOString(),
              featuredImage: (data as any)?.featuredImage || '/placeholder.svg',
              metaTitle: (data as any)?.metaTitle || fallbackTitle,
              metaDescription: (data as any)?.metaDescription || '',
              body: body,
            });
          } catch (e) {
            debug.push(`${path} -> parse:error ${(e as Error).message ?? e}`);
            console.warn('[CMS] Failed to parse blog file', path, e);
            continue;
          }
        }

        if (loadedPosts.length === 0) {
          console.warn('[CMS] No blog posts found. Ensure files exist in content/blog and frontmatter includes slug and title.');
        }

        loadedPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        setPosts(loadedPosts);
        setDebugInfo(debug);
      } catch (error) {
        console.error('Error loading CMS blog posts:', error);
      } finally {
        setLoading(false);
      }
    };

    loadPosts();
  }, []);

  return { posts, loading, debugPaths, debugInfo };
};

export const useCMSBlogPost = (slug: string) => {
  const [post, setPost] = useState<CMSBlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPost = async () => {
      try {
        const blogFiles = {
          ...import.meta.glob('/content/blog/*.md', { query: '?raw', import: 'default', eager: true }),
          ...import.meta.glob('/content/blog/**/*.md', { query: '?raw', import: 'default', eager: true }),
          ...import.meta.glob('../../content/blog/*.md', { query: '?raw', import: 'default', eager: true }),
          ...import.meta.glob('../../content/blog/**/*.md', { query: '?raw', import: 'default', eager: true }),
        } as Record<string, string | (() => Promise<string>)>;
        
        for (const path in blogFiles) {
          try {
            const fileModule = blogFiles[path] as unknown;
            const resolved = typeof fileModule === 'function' ? await (fileModule as () => Promise<unknown>)() : fileModule;
            const raw = typeof resolved === 'string'
              ? resolved
              : (resolved && typeof resolved === 'object' && 'default' in (resolved as Record<string, unknown>)
                  ? (resolved as Record<string, unknown>).default as string
                  : String(resolved));

            const { data, content: body } = matter(raw);

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
          } catch (e) {
            console.warn('[CMS] Failed to parse blog file', path, e);
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

export const getVideoEmbedUrl = (url: string): string => {
  // YouTube URL conversion
  const youtubeMatch = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]+)/);
  if (youtubeMatch) {
    return `https://www.youtube.com/embed/${youtubeMatch[1]}`;
  }

  // Vimeo URL conversion
  const vimeoMatch = url.match(/vimeo\.com\/(\d+)/);
  if (vimeoMatch) {
    return `https://player.vimeo.com/video/${vimeoMatch[1]}`;
  }

  // If it's already an embed URL or unsupported format, return as is
  return url;
};