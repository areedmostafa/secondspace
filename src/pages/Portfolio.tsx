import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main className="pt-20">
        <div className="container mx-auto px-6 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our Portfolio
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Discover our creative excellence through a curated showcase of our finest work across different mediums and styles.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Link 
              to="/portfolio/videos" 
              className="group bg-gray-900/50 rounded-xl p-8 border border-gray-800 hover:border-primary/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
                <h2 className="text-2xl font-semibold text-white mb-4 group-hover:text-primary transition-colors">
                  Videos
                </h2>
                <p className="text-gray-400 leading-relaxed">
                  Explore our video portfolio featuring short form content, promotional videos, and motion graphics.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;