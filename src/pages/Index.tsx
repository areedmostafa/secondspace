import { useEffect } from 'react';
import { useTheme } from '@/components/ThemeProvider';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  const { setTheme } = useTheme();

  useEffect(() => {
    setTheme('dark');
  }, [setTheme]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
