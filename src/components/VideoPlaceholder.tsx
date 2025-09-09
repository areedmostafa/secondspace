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

  const handleClick = async () => {
    setIsLoading(true);
    // Open Google Drive link in new tab
    window.open(url, '_blank');
    setTimeout(() => setIsLoading(false), 1000);
  };

  return (
    <div
      ref={ref}
      className={`
        bg-gray-900/50 border border-gray-700 rounded-xl p-6 cursor-pointer
        hover:border-primary/50 hover:bg-gray-800/50 transition-all duration-300
        transform hover:scale-105
        ${inView ? 'animate-slide-in-right opacity-100' : 'opacity-0 translate-x-8'}
      `}
      style={{ 
        animationDelay: `${index * 100}ms`,
        transitionDelay: `${index * 100}ms`
      }}
      onClick={handleClick}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center">
            {isLoading ? (
              <div className="w-6 h-6 border-2 border-black border-t-transparent rounded-full animate-spin" />
            ) : (
              <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            )}
          </div>
          <div>
            <h3 className="text-white font-medium">Video {index + 1}</h3>
            <p className="text-gray-400 text-sm">Click to view on Google Drive</p>
          </div>
        </div>
        <svg className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      </div>
    </div>
  );
};

export default VideoPlaceholder;