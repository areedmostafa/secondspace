import { useEffect } from 'react';
import { useTheme } from '@/components/ThemeProvider';
import Header from '@/components/Header';
import HorizonHeroSection from '@/components/ui/horizon-hero-section';
import Services from '@/components/Services';
import About from '@/components/About';
import BrandShowcase from '@/components/BrandShowcase';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

const Index = () => {
  const { setTheme } = useTheme();

  useEffect(() => {
    setTheme('dark');
  }, [setTheme]);

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Social Media Marketing & Digital Growth Agency"
        description="SecondSpace is a global social media marketing agency helping brands grow across Instagram, TikTok, YouTube, and beyond. Services include paid advertising, web development, video editing, graphics design, and strategy consulting."
        canonical="https://secondspace.studio"
      />
      <Header />
      <HorizonHeroSection />
      <Services />
      <About />
      <BrandShowcase />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
