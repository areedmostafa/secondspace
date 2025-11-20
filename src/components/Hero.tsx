import { Button } from '@/components/ui/button';
import Counter from '@/components/Counter';
import { scrollToSection } from '@/utils/scrollToSection';
import LiquidEther from '@/components/backgrounds/LiquidEther';

const Hero = () => {
  const handleGetAuditClick = () => scrollToSection('contact');
  const handleStrategyCallClick = () => scrollToSection('contact');

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24 md:pt-20">
      {/* Liquid Ether Background */}
      <div className="absolute inset-0">
        <LiquidEther
          colors={['#5227FF', '#FF9FFC', '#B19EEF']}
          mouseForce={20}
          cursorSize={100}
          resolution={0.5}
          autoDemo={true}
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
        />
      </div>
      
      {/* Subtle Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background/70"></div>

      <div className="container mx-auto px-6 text-center relative z-10 pb-16">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-muted border border-border mb-8 animate-fade-in">
            <span className="text-sm text-muted-foreground">🚀 Trusted by <Counter end={50} suffix="+" className="inline" /> Brands</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight animate-fade-in">
            Your Global Digital Growth{' '}
            <span className="text-gradient">Partner</span>{' '}
            for Complete Brand Success
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto animate-fade-in" style={{animationDelay: '0.2s'}}>
            From social media management and paid ads to web development and creative design—we deliver end-to-end digital marketing solutions that drive engagement, leads, and sales globally.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{animationDelay: '0.4s'}}>
            <Button 
              size="lg" 
              onClick={handleGetAuditClick}
              className="bg-gradient-accent hover:opacity-90 text-background font-semibold px-8 py-4 hover-glow"
            >
              Get a Free Audit
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={handleStrategyCallClick}
              className="border-border hover:bg-muted px-8 py-4"
            >
              Book Strategy Call
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 animate-fade-in" style={{animationDelay: '0.6s'}}>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                <Counter end={330} suffix="%" />
              </div>
              <div className="text-sm text-muted-foreground">Average ROI</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                <Counter end={50} suffix="+" />
              </div>
              <div className="text-sm text-muted-foreground">Brands Grown</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                <Counter end={5} suffix="M+" />
              </div>
              <div className="text-sm text-muted-foreground">Leads Generated</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                <Counter end={24} suffix="/7" />
              </div>
              <div className="text-sm text-muted-foreground">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
