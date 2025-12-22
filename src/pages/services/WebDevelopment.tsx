import { Link } from 'react-router-dom';
import { ArrowLeft, Globe, CheckCircle2, Rocket, Shield, Zap, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

const WebDevelopment = () => {
  const benefits = [
    {
      icon: Rocket,
      title: "Built for Speed",
      description: "Lightning-fast websites that keep visitors engaged and boost your SEO rankings."
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Enterprise-grade security and 99.9% uptime. Your business never sleeps, neither do we."
    },
    {
      icon: Zap,
      title: "Optimized to Convert",
      description: "Every element is designed with conversion in mind. Beautiful sites that actually sell."
    },
    {
      icon: Smartphone,
      title: "Mobile-First",
      description: "Over 60% of traffic is mobile. Your site will look stunning on every device."
    }
  ];

  const services = [
    { name: "Custom Websites", description: "Bespoke designs that reflect your brand and drive your business goals" },
    { name: "E-Commerce", description: "Shopify, WooCommerce, and custom stores built to maximize sales" },
    { name: "Landing Pages", description: "High-converting pages designed for campaigns and product launches" },
    { name: "Web Applications", description: "Complex functionality with seamless user experiences" }
  ];

  const deliverables = [
    "Custom design tailored to your brand identity",
    "Responsive development for all devices",
    "SEO optimization from the ground up",
    "Speed optimization for sub-3-second load times",
    "SSL security and hosting setup",
    "Analytics integration and tracking",
    "Content management system (CMS)",
    "30-day post-launch support"
  ];

  return (
    <>
      <SEO 
        title="Web Development | SecondSpace"
        description="Custom websites and e-commerce solutions built for performance and conversion. Mobile-first, SEO-optimized development."
      />
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="pt-32 pb-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-3xl" />
          
          <div className="container mx-auto px-6 relative z-10">
            <Link to="/#services" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8">
              <ArrowLeft className="w-4 h-4" />
              Back to Services
            </Link>
            
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 mb-6">
                <Globe className="w-4 h-4 text-cyan-400" />
                <span className="text-sm font-medium text-cyan-400">Web Development</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Websites That Work{' '}
                <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
                  As Hard As You Do.
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl">
                Your website is your hardest-working salesperson. We build digital experiences that captivate visitors, build trust, and convert browsers into buyers—24/7.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600" asChild>
                  <a href="/#contact">Start Your Project</a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/portfolio">View Our Work</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 border-t border-border/50">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Your Website Should Be Your Best Investment.{' '}
                  <span className="text-muted-foreground">Not Your Biggest Headache.</span>
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  A slow, outdated, or confusing website costs you customers every single day. First impressions happen in milliseconds, and you only get one shot.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We build websites that load fast, look incredible, and guide visitors naturally toward taking action. No templates. No shortcuts. Just custom solutions designed for your success.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="p-6 rounded-2xl border border-border/50 bg-card/50 hover:border-cyan-500/30 transition-colors">
                    <benefit.icon className="w-8 h-8 text-cyan-400 mb-4" />
                    <h3 className="font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-card/30">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Build</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">From simple landing pages to complex web applications—we've got you covered.</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <div key={index} className="p-6 rounded-2xl border border-border/50 bg-background/50 hover:border-cyan-500/30 transition-all hover:scale-105">
                  <h3 className="text-xl font-semibold mb-3">{service.name}</h3>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Deliverables Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What You Get</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">A complete web solution, not just a website.</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {deliverables.map((item, index) => (
                <div key={index} className="flex items-start gap-3 p-4 rounded-xl border border-border/50 bg-card/50">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                  <span className="text-foreground/90">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Build Something Amazing?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss your vision. We'll turn your ideas into a website that drives real business results.
            </p>
            <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600" asChild>
              <a href="/#contact">Get a Free Quote</a>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default WebDevelopment;
