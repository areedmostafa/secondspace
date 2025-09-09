import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import VideoPlaceholder from '@/components/VideoPlaceholder';

const PromoVideos = () => {
  const videoLinks = [
    'https://drive.google.com/file/d/1tdxYXrPasZIVusVYZEmDmgimRLyFPzgS/view?usp=drive_link',
    'https://drive.google.com/file/d/1dsP3nFCNzTTQF0fcU7f2jFUsrADde7Qj/view?usp=drive_link',
    'https://drive.google.com/file/d/1recaydlnhau0iZ5i8XAE8bLIZUscA3Zn/view?usp=drive_link',
    'https://drive.google.com/file/d/1uaqj7Cp4tK9BdOSjzoZP5u5rme81H5Z7/view?usp=drive_link',
    'https://drive.google.com/file/d/10j33RJnWOKj-VXFZmhAVeuIcoXypF3l8/view?usp=drive_link',
    'https://drive.google.com/file/d/12-duPnv4v85B4TpIwZMLdCua8POoCfOh/view?usp=drive_link'
  ];

  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main className="pt-20">
        <div className="container mx-auto px-6 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Promo Videos
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              A curated collection of our Promo Videos works.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {videoLinks.map((url, index) => (
              <VideoPlaceholder key={index} url={url} index={index} />
            ))}
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

export default PromoVideos;