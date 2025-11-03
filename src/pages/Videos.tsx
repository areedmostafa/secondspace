import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useTheme } from '@/components/ThemeProvider';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Videos = () => {
  const { setTheme } = useTheme();

  useEffect(() => {
    setTheme('dark');
  }, [setTheme]);

  const categories = [
    {
      title: 'Short Form Contents',
      path: '/portfolio/videos/short-form',
      description: 'Engaging short-form content optimized for social media platforms',
      icon: '📱'
    },
    {
      title: 'Promo Videos',
      path: '/portfolio/videos/promo',
      description: 'Compelling promotional videos that drive engagement and conversions',
      icon: '🎬'
    },
    {
      title: 'Motion Graphics',
      path: '/portfolio/videos/motion-graphics',
      description: 'Dynamic motion graphics and animated visual storytelling',
      icon: '✨'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <div className="container mx-auto px-6 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Video Portfolio
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A comprehensive showcase of our video production expertise across multiple formats and styles.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {categories.map((category, index) => (
              <Link 
                key={index}
                to={category.path}
                className="group bg-card rounded-xl p-8 border border-border hover:border-primary/50 transition-all duration-300 hover:transform hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-center">
                  <div className="text-4xl mb-6">{category.icon}</div>
                  <h2 className="text-2xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors">
                    {category.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {category.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/portfolio" 
              className="text-primary hover:text-secondary transition-colors font-medium"
            >
              ← Back to Portfolio
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Videos;