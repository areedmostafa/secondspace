/**
 * SEO Component
 * Manages meta tags, Open Graph, Twitter Cards, and structured data
 */

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  type?: 'website' | 'article';
  date?: string;
  author?: string;
  keywords?: string;
  canonical?: string;
  noindex?: boolean;
}

export const SEO = ({
  title,
  description,
  image,
  type = 'website',
  date,
  author = 'SecondSpace Agency',
  keywords,
  canonical,
  noindex = false,
}: SEOProps) => {
  const location = useLocation();
  const siteUrl = 'https://secondspace.studio';
  
  const defaultTitle = 'SecondSpace – Social Media Marketing & Digital Growth Agency';
  const defaultDescription = 'SecondSpace is a global social media marketing agency helping brands grow across Instagram, TikTok, YouTube, and beyond. Services include paid advertising, web development, video editing, graphics design, and strategy consulting.';
  const defaultImage = `${siteUrl}/lovable-uploads/59539676-ad9d-4b27-aeba-bde1cbf7dd1b.png`;

  const pageTitle = title ? `${title} | SecondSpace` : defaultTitle;
  const pageDescription = description || defaultDescription;
  const pageImage = image?.startsWith('http') ? image : `${siteUrl}${image || defaultImage}`;
  const pageUrl = canonical || `${siteUrl}${location.pathname}`;

  useEffect(() => {
    // Update document title
    document.title = pageTitle;

    // Helper function to update or create meta tags
    const updateMetaTag = (property: string, content: string, isProperty = true) => {
      const attr = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attr}="${property}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attr, property);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Update link tags (canonical)
    const updateLinkTag = (rel: string, href: string) => {
      let element = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement;
      if (!element) {
        element = document.createElement('link');
        element.setAttribute('rel', rel);
        document.head.appendChild(element);
      }
      element.setAttribute('href', href);
    };

    // Basic meta tags
    updateMetaTag('description', pageDescription, false);
    if (keywords) {
      updateMetaTag('keywords', keywords, false);
    }
    updateMetaTag('author', author, false);

    // Robots meta tag
    if (noindex) {
      updateMetaTag('robots', 'noindex, nofollow', false);
    } else {
      updateMetaTag('robots', 'index, follow', false);
    }

    // Open Graph tags
    updateMetaTag('og:title', title || defaultTitle);
    updateMetaTag('og:description', pageDescription);
    updateMetaTag('og:image', pageImage);
    updateMetaTag('og:type', type);
    updateMetaTag('og:url', pageUrl);
    updateMetaTag('og:site_name', 'SecondSpace');

    // Article-specific OG tags
    if (type === 'article' && date) {
      updateMetaTag('article:published_time', date);
      updateMetaTag('article:author', author);
    }

    // Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image', false);
    updateMetaTag('twitter:site', '@secondspace_agency', false);
    updateMetaTag('twitter:title', title || defaultTitle, false);
    updateMetaTag('twitter:description', pageDescription, false);
    updateMetaTag('twitter:image', pageImage, false);

    // Canonical URL
    updateLinkTag('canonical', pageUrl);

    // Structured data for organization
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': type === 'article' ? 'Article' : 'WebPage',
      headline: title || defaultTitle,
      description: pageDescription,
      image: pageImage,
      url: pageUrl,
      ...(type === 'article' && date
        ? {
            datePublished: date,
            author: {
              '@type': 'Organization',
              name: 'SecondSpace',
            },
          }
        : {}),
      publisher: {
        '@type': 'Organization',
        name: 'SecondSpace',
        logo: {
          '@type': 'ImageObject',
          url: defaultImage,
        },
      },
    };

    // Add structured data script
    let scriptElement = document.querySelector('script[type="application/ld+json"]');
    if (!scriptElement) {
      scriptElement = document.createElement('script');
      scriptElement.setAttribute('type', 'application/ld+json');
      document.head.appendChild(scriptElement);
    }
    scriptElement.textContent = JSON.stringify(structuredData);

    // Cleanup function
    return () => {
      document.title = defaultTitle;
    };
  }, [pageTitle, pageDescription, pageImage, pageUrl, type, date, author, keywords, noindex, title]);

  return null;
};

export default SEO;