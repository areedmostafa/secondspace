/**
 * Video Embed URL Helper
 * Converts various video URLs to embeddable format
 */

/**
 * Convert video URL to embed-ready format
 * Supports YouTube and Vimeo URLs
 */
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
