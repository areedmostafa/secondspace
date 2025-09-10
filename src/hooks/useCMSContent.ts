import { useState, useEffect } from 'react';

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
        // In a production environment, this would fetch from Netlify CMS API
        // For now, we'll return the existing hardcoded videos as CMS format
        const mockVideos: CMSVideo[] = [];
        
        const filteredVideos = category 
          ? mockVideos.filter(video => video.category === category)
          : mockVideos;
        
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

  useEffect(() => {
    const loadPosts = async () => {
      try {
        // In a production environment, this would fetch from Netlify CMS API
        const mockPosts: CMSBlogPost[] = [];
        setPosts(mockPosts);
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