/**
 * CMS Content Type Definitions
 * Centralized type definitions for CMS-managed content
 */

export interface CMSVideo {
  slug: string;
  title: string;
  videoUrl: string;
  category: 'short-form' | 'promo' | 'motion-graphics';
  description?: string;
  date: string;
}

export interface CMSBlogPost {
  slug: string;
  title: string;
  date: string;
  featuredImage: string;
  metaTitle: string;
  metaDescription: string;
  body: string;
}

export type VideoCategory = CMSVideo['category'];
