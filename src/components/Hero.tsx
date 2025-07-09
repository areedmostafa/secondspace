
import { Button } from '@/components/ui/button';
import Counter from '@/components/Counter';

const Hero = () => {
  const handleGetAuditClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleStrategyCallClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-dark relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 opacity-30"></div>
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-muted border border-border mb-8 animate-fade-in">
            <span className="text-sm text-muted-foreground">🚀 Trusted by <Counter end={50} suffix="+" className="inline" /> Brands</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight animate-fade-in">
            Scale Your Brand's Growth with{' '}
            <span className="text-gradient">Data-Driven</span>{' '}
            Social Media Marketing
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto animate-fade-in" style={{animationDelay: '0.2s'}}>
            We help brands dominate social media with bespoke strategies that drive engagement, leads, and sales.
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
              <div className="text-sm text-muted-foreground">Brands Scaled</div>
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
