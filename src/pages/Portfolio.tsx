import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ThemeToggle } from '@/components/ThemeToggle';
import SEO from '@/components/SEO';
import { Play, Image, Film, Palette, Sparkles, ArrowRight } from 'lucide-react';

const portfolioCategories = [
  {
    title: "Videos",
    description: "Explore our video portfolio featuring short form content, promotional videos, and motion graphics.",
    icon: Play,
    link: "/portfolio/videos",
    gradient: "from-rose-500 to-pink-500",
    delay: 0,
  },
  {
    title: "Social Media",
    description: "Scroll-stopping social content that drives engagement and builds communities.",
    icon: Image,
    link: "/portfolio/videos",
    gradient: "from-blue-500 to-cyan-500",
    delay: 0.1,
  },
  {
    title: "Brand Campaigns",
    description: "Integrated campaigns that elevate brands and create lasting impressions.",
    icon: Film,
    link: "/portfolio/videos",
    gradient: "from-purple-500 to-violet-500",
    delay: 0.2,
  },
  {
    title: "Design Work",
    description: "Visual identities and creative assets that capture brand essence.",
    icon: Palette,
    link: "/portfolio/videos",
    gradient: "from-amber-500 to-orange-500",
    delay: 0.3,
  },
];

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <SEO
        title="Portfolio - Video Production & Creative Showcase"
        description="Explore SecondSpace's creative portfolio featuring video production, short-form content, promotional videos, and motion graphics for brands worldwide."
        canonical="https://secondspace.studio/portfolio"
      />

      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-primary/5 to-secondary/5 rounded-full blur-3xl" />
      </div>

      <Header />
      
      <main className="relative z-10 pt-32 pb-20">
        <div className="container mx-auto px-6">
          {/* Hero Section */}
          <div className="text-center mb-20 relative">
            <div className="absolute top-0 right-0">
              <ThemeToggle />
            </div>
            
            <div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
              style={{ animation: 'fade-in 0.6s ease-out forwards' }}
            >
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Creative Excellence</span>
            </div>
            
            <h1 
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
              style={{ animation: 'fade-in 0.6s ease-out 0.1s forwards', opacity: 0 }}
            >
              Our{' '}
              <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                Portfolio
              </span>
            </h1>
            
            <p 
              className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
              style={{ animation: 'fade-in 0.6s ease-out 0.2s forwards', opacity: 0 }}
            >
              Discover our creative excellence through a curated showcase of our finest work 
              across different mediums and styles.
            </p>
          </div>

          {/* Portfolio Grid */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {portfolioCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <Link 
                  key={category.title}
                  to={category.link}
                  className="group relative"
                  style={{ animation: `fade-in 0.6s ease-out ${0.3 + category.delay}s forwards`, opacity: 0 }}
                >
                  {/* Glassmorphism Card */}
                  <div className="relative rounded-3xl overflow-hidden h-full">
                    {/* Gradient Border Effect */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${category.gradient} rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm`} />
                    
                    {/* Card Content */}
                    <div className="relative bg-card/40 backdrop-blur-xl border border-border/30 rounded-3xl p-8 m-[1px] h-full transition-all duration-500 group-hover:bg-card/60 group-hover:border-primary/30">
                      {/* Icon Background Glow */}
                      <div className={`absolute top-8 right-8 w-32 h-32 bg-gradient-to-r ${category.gradient} rounded-full blur-3xl opacity-10 group-hover:opacity-30 transition-opacity duration-500`} />
                      
                      {/* Icon */}
                      <div className={`relative w-16 h-16 bg-gradient-to-r ${category.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      
                      {/* Content */}
                      <h2 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                        {category.title}
                      </h2>
                      
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {category.description}
                      </p>
                      
                      {/* Explore Link */}
                      <div className="flex items-center gap-2 text-primary font-medium opacity-0 group-hover:opacity-100 translate-x-0 group-hover:translate-x-2 transition-all duration-300">
                        <span>Explore</span>
                        <ArrowRight className="h-4 w-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Stats Section */}
          <div 
            className="mt-24 max-w-4xl mx-auto"
            style={{ animation: 'fade-in 0.6s ease-out 0.7s forwards', opacity: 0 }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 rounded-3xl blur-xl" />
              <div className="relative bg-card/40 backdrop-blur-xl border border-border/30 rounded-3xl p-8 md:p-12">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                  {[
                    { value: "500+", label: "Projects Completed" },
                    { value: "50+", label: "Happy Clients" },
                    { value: "10M+", label: "Views Generated" },
                    { value: "5+", label: "Years Experience" },
                  ].map((stat, index) => (
                    <div key={index} className="group/stat">
                      <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2 group-hover/stat:scale-110 transition-transform duration-300">
                        {stat.value}
                      </div>
                      <div className="text-sm text-muted-foreground font-medium">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Portfolio;
