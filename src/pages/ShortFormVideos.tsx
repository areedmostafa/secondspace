import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useTheme } from '@/components/ThemeProvider';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import VideoPlaceholder from '@/components/VideoPlaceholder';
import { useCMSVideos } from '@/hooks/useCMSVideos';
import { getVideoEmbedUrl } from '@/utils/videoEmbedHelper';

const ShortFormVideos = () => {
  const { videos, loading } = useCMSVideos('short-form');
  const { setTheme } = useTheme();

  useEffect(() => {
    setTheme('dark');
  }, [setTheme]);

  // Fallback videos if CMS is empty (using existing URLs)
  const fallbackVideos = [
    'https://drive.google.com/file/d/19UVPj2mEXl-Yjrokl8XfoTnvDQpB_7O2/view?usp=drive_link',
    'https://drive.google.com/file/d/18BBHXNPl6TGkCpZS6w6oGBu68qPbXaNI/view?usp=drive_link',
    'https://drive.google.com/file/d/17rVFZkYUbhc8yNE_sWGHsdV1DEKZGqp7/view?usp=drive_link',
    'https://drive.google.com/file/d/1o_ujh_zC7h1x5x8V8u4x4ZwLyzneTv7I/view?usp=drive_link',
    'https://drive.google.com/file/d/13Enmhj89rkEB4a0D0U050xEtX3uJLZAM/view?usp=drive_link',
    'https://drive.google.com/file/d/1Qq1agUUlF6DWaDr0gouHwiSPL297VxOz/view?usp=drive_link',
    'https://drive.google.com/file/d/1MyeHFxsvYB9z0Y1jfxGDgo5-DaTY_1oG/view?usp=drive_link',
    'https://drive.google.com/file/d/1_4D07WXZOQ65bglea_cuit-kR6gq8iYe/view?usp=drive_link',
    'https://drive.google.com/file/d/1Nhy1s5gM4uUl3HBdSASOalCOTgXLYCPl/view?usp=drive_link',
    'https://drive.google.com/file/d/1qHtvIq1m_G4875zMBQWxuhlFkE20i83w/view?usp=drive_link'
  ];

  const displayVideos = videos.length > 0 ? videos : fallbackVideos.map((url, index) => ({
    slug: `short-form-${index}`,
    title: `Short Form Video ${index + 1}`,
    videoUrl: url,
    category: 'short-form' as const,
    date: new Date().toISOString()
  }));

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <div className="container mx-auto px-6 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Short Form Contents
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              A curated collection of our Short Form Contents works.
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

export default ShortFormVideos;