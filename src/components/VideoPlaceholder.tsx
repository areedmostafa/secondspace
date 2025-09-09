import { useState } from 'react';
import { useInView } from 'react-intersection-observer';

interface VideoPlaceholderProps {
  url: string;
  index: number;
}

const VideoPlaceholder = ({ url, index }: VideoPlaceholderProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  // Convert Google Drive view link to embeddable preview link
  const getEmbedUrl = (driveUrl: string) => {
    const fileIdMatch = driveUrl.match(/\/file\/d\/([a-zA-Z0-9-_]+)/);
    if (fileIdMatch) {
      return `https://drive.google.com/file/d/${fileIdMatch[1]}/preview`;
    }
    return driveUrl;
  };

  const embedUrl = getEmbedUrl(url);

  const openInNewTab = () => {
    setIsLoading(true);
    window.open(url, '_blank');
    setTimeout(() => setIsLoading(false), 1000);
  };

  return (
    <div
      ref={ref}
      className={`
        group relative bg-gray-900/50 border border-gray-700 rounded-xl overflow-hidden
        hover:border-primary/50 transition-all duration-300 hover:scale-105
        ${inView ? 'animate-slide-in-right opacity-100' : 'opacity-0 translate-x-8'}
      `}
      style={{ 
        animationDelay: `${index * 100}ms`,
        transitionDelay: `${index * 100}ms`
      }}
    >
      {/* Video Preview - Always Visible */}
      <div className="aspect-video bg-black relative">
        <iframe
          src={embedUrl}
          className="w-full h-full"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title={`Video Preview ${index + 1}`}
        />
        
        {/* Overlay with external link button */}
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            onClick={openInNewTab}
            disabled={isLoading}
            className="bg-black/70 backdrop-blur-sm p-2 rounded-lg text-white hover:bg-black/90 transition-colors"
            title="Open in Google Drive"
          >
            {isLoading ? (
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
            ) : (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoPlaceholder;