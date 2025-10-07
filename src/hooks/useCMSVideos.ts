/**
 * Video Content Hook
 * Fetches and filters video content from the CMS
 */

import { useState, useEffect } from 'react';
import { CMSVideo, VideoCategory } from '@/types/cms';
import { VIDEO_GLOB_PATTERNS, parseMarkdown } from '@/utils/markdownLoader';

export const useCMSVideos = (category?: VideoCategory) => {
  const [videos, setVideos] = useState<CMSVideo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadVideos = async () => {
      try {
        const loadedVideos: CMSVideo[] = [];

        for (const path in VIDEO_GLOB_PATTERNS) {
          const content = await VIDEO_GLOB_PATTERNS[path]() as string;
          const { data } = parseMarkdown(content);
          
          loadedVideos.push({
            slug: data.slug,
            title: data.title,
            videoUrl: data.videoUrl,
            category: data.category,
            description: data.description,
            date: data.date,
          });
        }

        // Sort by date (newest first)
        loadedVideos.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        
        // Filter by category if specified
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
