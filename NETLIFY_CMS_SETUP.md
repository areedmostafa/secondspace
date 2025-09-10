# Netlify CMS Setup Guide

## Overview
Your website now has Netlify CMS integrated for content management. You can manage blog posts and portfolio videos through an admin panel.

## Setup Steps

### 1. Deploy to Netlify
1. Connect your repository to Netlify
2. Deploy the site

### 2. Enable Identity & Git Gateway
1. In Netlify dashboard, go to Site Settings → Identity
2. Enable Identity
3. Set registration to "Invite only" (recommended)
4. Enable Git Gateway under Identity → Settings → Services
5. Add yourself as an admin user

### 3. Access the CMS
Once deployed, access your admin panel at:
```
https://your-site-name.netlify.app/admin
```

## Content Management

### Blog Posts
- Navigate to `/admin` → Blog
- Create new posts with:
  - Title
  - Slug (URL path)
  - Date
  - Featured Image
  - Meta Title & Description (for SEO)
  - Content (Markdown supported)

### Portfolio Videos
- Navigate to `/admin` → Portfolio Videos
- Add videos with:
  - Title
  - YouTube/Vimeo URL
  - Category (Short Form, Promo, Motion Graphics)
  - Description
  - Date

## Video URL Formats Supported
- YouTube: `https://www.youtube.com/watch?v=VIDEO_ID`
- YouTube Short: `https://youtu.be/VIDEO_ID`
- Vimeo: `https://vimeo.com/VIDEO_ID`

## File Structure
- Blog content: `content/blog/`
- Video content: `content/videos/`
- Media uploads: `public/images/`

## Features
- ✅ Blog management with SEO fields
- ✅ Video portfolio management
- ✅ Automatic URL generation for blog posts
- ✅ Responsive admin interface
- ✅ Auto-updating sitemaps (when implemented)
- ✅ Category-based video organization
- ✅ YouTube/Vimeo URL conversion to embeds

## Next Steps
1. Set up Netlify Identity authentication
2. Add yourself as an admin user
3. Start creating content through the CMS
4. Configure additional features like automatic sitemap generation if needed