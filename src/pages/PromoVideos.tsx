import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useTheme } from '@/components/ThemeProvider';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import VideoPlaceholder from '@/components/VideoPlaceholder';
import { useCMSVideos } from '@/hooks/useCMSVideos';
import { getVideoEmbedUrl } from '@/utils/videoEmbedHelper';

const PromoVideos = () => {
  const { videos, loading } = useCMSVideos('promo');
  const { setTheme } = useTheme();

  useEffect(() => {
    setTheme('dark');
  }, [setTheme]);

  // Fallback videos if CMS is empty (using existing URLs)
  const fallbackVideos = [
    'https://drive.google.com/file/d/1tdxYXrPasZIVusVYZEmDmgimRLyFPzgS/view?usp=drive_link',
    'https://drive.google.com/file/d/1dsP3nFCNzTTQF0fcU7f2jFUsrADde7Qj/view?usp=drive_link',
    'https://drive.google.com/file/d/1recaydlnhau0iZ5i8XAE8bLIZUscA3Zn/view?usp=drive_link',
    'https://drive.google.com/file/d/1uaqj7Cp4tK9BdOSjzoZP5u5rme81H5Z7/view?usp=drive_link',
    'https://drive.google.com/file/d/10j33RJnWOKj-VXFZmhAVeuIcoXypF3l8/view?usp=drive_link',
    'https://drive.google.com/file/d/12-duPnv4v85B4TpIwZMLdCua8POoCfOh/view?usp=drive_link'
  ];

  const displayVideos = videos.length > 0 ? videos : fallbackVideos.map((url, index) => ({
    slug: `promo-${index}`,
    title: `Promo Video ${index + 1}`,
    videoUrl: url,
    category: 'promo' as const,
    date: new Date().toISOString()
  }));

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <div className="container mx-auto px-6 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Promo Videos
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              A curated collection of our Promo Videos works.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {loading ? (
              <div className="col-span-full text-center">
                <p className="text-muted-foreground">Loading videos...</p>
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
              className="text-muted-foreground hover:text-foreground transition-colors font-medium"
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

export default PromoVideos;