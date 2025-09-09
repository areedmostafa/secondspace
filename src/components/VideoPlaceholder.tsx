import { useState } from 'react';
import { useInView } from 'react-intersection-observer';

interface VideoPlaceholderProps {
  url: string;
  index: number;
}

const VideoPlaceholder = ({ url, index }: VideoPlaceholderProps) => {
  const [showPreview, setShowPreview] = useState(false);
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

  const togglePreview = () => {
    setShowPreview(!showPreview);
  };

  const openInNewTab = () => {
    window.open(url, '_blank');
  };

  return (
    <div
      ref={ref}
      className={`
        bg-gray-900/50 border border-gray-700 rounded-xl overflow-hidden
        hover:border-primary/50 transition-all duration-300
        ${inView ? 'animate-slide-in-right opacity-100' : 'opacity-0 translate-x-8'}
      `}
      style={{ 
        animationDelay: `${index * 100}ms`,
        transitionDelay: `${index * 100}ms`
      }}
    >
      {/* Header */}
      <div className="p-4 border-b border-gray-700">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-accent rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
            <div>
              <h3 className="text-white font-medium">Video {index + 1}</h3>
              <p className="text-gray-400 text-xs">Click to preview or open in Drive</p>
            </div>
          </div>
          <div className="flex space-x-2">
            <button
              onClick={togglePreview}
              className="px-3 py-1 bg-primary/20 text-primary rounded-md hover:bg-primary/30 transition-colors text-sm"
            >
              {showPreview ? 'Hide' : 'Preview'}
            </button>
            <button
              onClick={openInNewTab}
              className="p-2 text-gray-400 hover:text-primary transition-colors"
              title="Open in Google Drive"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Video Preview */}
      {showPreview && (
        <div className="aspect-video bg-black">
          <iframe
            src={embedUrl}
            className="w-full h-full"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            title={`Video ${index + 1} Preview`}
          />
        </div>
      )}
    </div>
  );
};

export default VideoPlaceholder;