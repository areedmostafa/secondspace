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
        const videoFiles = import.meta.glob('/content/videos/*.md', { as: 'raw' });
        const loadedVideos: CMSVideo[] = [];

        for (const path in videoFiles) {
          const content = await videoFiles[path]();
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

  useEffect(() => {
    const loadPosts = async () => {
      try {
        // Support both dev and build by trying multiple glob patterns and eager loading
        const blogFiles = {
          // Non-eager (returns functions)
          ...import.meta.glob('/content/blog/*.md', { as: 'raw' }),
          ...import.meta.glob('/content/blog/**/*.md', { as: 'raw' }),
          ...import.meta.glob('./content/blog/*.md', { as: 'raw' }),
          ...import.meta.glob('./content/blog/**/*.md', { as: 'raw' }),
          ...import.meta.glob('content/blog/*.md', { as: 'raw' }),
          ...import.meta.glob('content/blog/**/*.md', { as: 'raw' }),
          ...import.meta.glob('../../content/blog/*.md', { as: 'raw' }),
          ...import.meta.glob('../../content/blog/**/*.md', { as: 'raw' }),
          // Eager (returns strings immediately at build time)
          ...import.meta.glob('/content/blog/*.md', { as: 'raw', eager: true }),
          ...import.meta.glob('/content/blog/**/*.md', { as: 'raw', eager: true }),
          ...import.meta.glob('./content/blog/*.md', { as: 'raw', eager: true }),
          ...import.meta.glob('./content/blog/**/*.md', { as: 'raw', eager: true }),
          ...import.meta.glob('content/blog/*.md', { as: 'raw', eager: true }),
          ...import.meta.glob('content/blog/**/*.md', { as: 'raw', eager: true }),
          ...import.meta.glob('../../content/blog/*.md', { as: 'raw', eager: true }),
          ...import.meta.glob('../../content/blog/**/*.md', { as: 'raw', eager: true }),
        } as Record<string, string | (() => Promise<string>)>;

        console.log('[CMS] Blog glob matches:', Object.keys(blogFiles));
        const loadedPosts: CMSBlogPost[] = [];

        for (const path in blogFiles) {
          const fileModule = blogFiles[path] as string | (() => Promise<string>);
          const raw = typeof fileModule === 'function' ? await fileModule() : fileModule;
          const { data, content: body } = matter(raw);

          // Skip if required fields are missing
          if (!data?.slug || !data?.title) continue;
          
          loadedPosts.push({
            slug: data.slug,
            title: data.title,
            date: data.date,
            featuredImage: data.featuredImage,
            metaTitle: data.metaTitle,
            metaDescription: data.metaDescription,
            body: body,
          });
        }

        if (loadedPosts.length === 0) {
          console.warn('[CMS] No blog posts found. Ensure files exist in content/blog and frontmatter includes slug and title.');
        }

        loadedPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        setPosts(loadedPosts);
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

export const useCMSBlogPost = (slug: string) => {
  const [post, setPost] = useState<CMSBlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPost = async () => {
      try {
        const blogFiles = {
          ...import.meta.glob('/content/blog/*.md', { as: 'raw', eager: true }),
          ...import.meta.glob('/content/blog/**/*.md', { as: 'raw', eager: true }),
          ...import.meta.glob('./content/blog/*.md', { as: 'raw', eager: true }),
          ...import.meta.glob('./content/blog/**/*.md', { as: 'raw', eager: true }),
          ...import.meta.glob('content/blog/*.md', { as: 'raw', eager: true }),
          ...import.meta.glob('content/blog/**/*.md', { as: 'raw', eager: true }),
          ...import.meta.glob('../../content/blog/*.md', { as: 'raw', eager: true }),
          ...import.meta.glob('../../content/blog/**/*.md', { as: 'raw', eager: true }),
        } as Record<string, string | (() => Promise<string>)>;
        
        for (const path in blogFiles) {
          const fileModule = blogFiles[path] as string | (() => Promise<string>);
          const raw = typeof fileModule === 'function' ? await fileModule() : fileModule;
          const { data, content: body } = matter(raw);
          
          if (data.slug === slug) {
            setPost({
              slug: data.slug,
              title: data.title,
              date: data.date,
              featuredImage: data.featuredImage,
              metaTitle: data.metaTitle,
              metaDescription: data.metaDescription,
              body: body,
            });
            break;
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