import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import VideoPlaceholder from '@/components/VideoPlaceholder';
import { useCMSVideos, getVideoEmbedUrl } from '@/hooks/useCMSContent';

const MotionGraphics = () => {
  const { videos, loading } = useCMSVideos('motion-graphics');

  // Fallback videos if CMS is empty (using existing URLs)
  const fallbackVideos = [
    'https://drive.google.com/file/d/1OxThi6jlXUd0g6Ct9NKy4rTeNRtkjtS8/view?usp=drive_link',
    'https://drive.google.com/file/d/1lJ42ePJ4pzVBrzrkCDUSrRIoleha2sa_/view?usp=drive_link',
    'https://drive.google.com/file/d/1Ar8n20JynQCgWtimPQ-ZsCHO2LgkWp4n/view?usp=drive_link',
    'https://drive.google.com/file/d/1E0mFYgMlL198NiLEsRA_yiBcYxyGB7WN/view?usp=drive_link',
    'https://drive.google.com/file/d/1TWMbm4LmdirDjpJuKfMyfuUPqlz_YfS7/view?usp=drive_link',
    'https://drive.google.com/file/d/1_3ozf06QlaJ-0Q9VjEPoiQejmQ3mMLcY/view?usp=drive_link'
  ];

  const displayVideos = videos.length > 0 ? videos : fallbackVideos.map((url, index) => ({
    slug: `motion-graphics-${index}`,
    title: `Motion Graphics ${index + 1}`,
    videoUrl: url,
    category: 'motion-graphics' as const,
    date: new Date().toISOString()
  }));

  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main className="pt-20">
        <div className="container mx-auto px-6 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Motion Graphics
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              A curated collection of our Motion Graphics works.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {loading ? (
              <div className="col-span-full text-center">
                <p className="text-gray-400">Loading videos...</p>
              </div>
            ) : (
              displayVideos.map((video, index) => (
                <VideoPlaceholder
                  key={video.slug}
                  url={typeof video === 'string' ? video : getVideoEmbedUrl(video.videoUrl)}
                  index={index}
                  title={typeof video === 'string' ? undefined : video.title}
                />
              ))
            )}
          </div>

          <div className="text-center mt-12 space-x-6">
            <Link 
              to="/portfolio/videos" 
              className="text-primary hover:text-secondary transition-colors font-medium"
            >
              ← Back to Videos
            </Link>
            <Link 
              to="/portfolio" 
              className="text-gray-400 hover:text-white transition-colors font-medium"
            >
              Portfolio Home
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MotionGraphics;