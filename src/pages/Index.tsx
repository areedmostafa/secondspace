import { useEffect } from 'react';
import { useTheme } from '@/components/ThemeProvider';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import BrandShowcase from '@/components/BrandShowcase';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import LiquidEther from '@/components/LiquidEther';

const Index = () => {
  const { setTheme } = useTheme();

  useEffect(() => {
    setTheme('dark');
  }, [setTheme]);

  return (
    <div className="min-h-screen bg-background relative">
      <SEO
        title="Social Media Marketing & Digital Growth Agency"
        description="SecondSpace is a global social media marketing agency helping brands grow across Instagram, TikTok, YouTube, and beyond. Services include paid advertising, web development, video editing, graphics design, and strategy consulting."
        canonical="https://secondspace.studio"
      />
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <LiquidEther
          colors={['#5227FF', '#FF9FFC', '#B19EEF']}
          mouseForce={20}
          cursorSize={100}
          isViscous={false}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
        />
      </div>
      <Header />
      <Hero />
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
