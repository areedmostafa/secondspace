import { Link } from 'react-router-dom';
import { ArrowLeft, Palette, CheckCircle2, Eye, Wand2, Target, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

const GraphicsDesign = () => {
  const benefits = [
    {
      icon: Eye,
      title: "Attention-Grabbing",
      description: "Designs that pop in crowded feeds. Your visuals will never get lost in the noise."
    },
    {
      icon: Wand2,
      title: "Brand-Consistent",
      description: "Every design reinforces your brand. Colors, fonts, style—always on point."
    },
    {
      icon: Target,
      title: "Purpose-Driven",
      description: "Pretty isn't the goal—results are. Every design is crafted to achieve your objectives."
    },
    {
      icon: Award,
      title: "Premium Quality",
      description: "No templates, no shortcuts. Original designs that elevate your brand above competitors."
    }
  ];

  const services = [
    { name: "Brand Identity", description: "Logos, color palettes, and visual guidelines that define who you are" },
    { name: "Social Media Graphics", description: "Daily content, stories, carousels, and cover images" },
    { name: "Marketing Materials", description: "Brochures, flyers, presentations, and print collateral" },
    { name: "Digital Ads", description: "Banner ads, display ads, and social media ad creatives" }
  ];

  const deliverables = [
    "Custom logo design and variations",
    "Complete brand style guide",
    "Social media templates and assets",
    "Marketing collateral design",
    "Packaging and product design",
    "Infographics and data visualization",
    "Email and newsletter templates",
    "Print-ready and web-optimized files"
  ];

  return (
    <>
      <SEO 
        title="Graphics Design | SecondSpace"
        description="Eye-catching visuals for branding and marketing that drive engagement. Logo design, social graphics, and marketing materials."
      />
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="pt-32 pb-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-violet-500/10" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-3xl" />
          
          <div className="container mx-auto px-6 relative z-10">
            <Link to="/#services" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8">
              <ArrowLeft className="w-4 h-4" />
              Back to Services
            </Link>
            
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 mb-6">
                <Palette className="w-4 h-4 text-indigo-400" />
                <span className="text-sm font-medium text-indigo-400">Graphics Design</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Visuals That Speak{' '}
                <span className="bg-gradient-to-r from-indigo-500 to-violet-500 bg-clip-text text-transparent">
                  Louder Than Words.
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl">
                In a visual world, your brand's look is everything. We create graphics that don't just represent your brand—they elevate it to a whole new level.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-indigo-500 to-violet-500 hover:from-indigo-600 hover:to-violet-600" asChild>
                  <a href="/#contact">Start Your Design Project</a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/portfolio">View Our Portfolio</Link>
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
                  First Impressions Are Visual.{' '}
                  <span className="text-muted-foreground">Make Yours Count.</span>
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Before anyone reads your copy or learns your story, they see your visuals. In that split second, they decide if you're worth their attention. Make it count.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Our designs aren't just aesthetically pleasing—they're strategically crafted to communicate your brand values, attract your ideal customers, and drive the actions you want.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="p-6 rounded-2xl border border-border/50 bg-card/50 hover:border-indigo-500/30 transition-colors">
                    <benefit.icon className="w-8 h-8 text-indigo-400 mb-4" />
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Design</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">From brand identity to daily social content—we've got your visual needs covered.</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <div key={index} className="p-6 rounded-2xl border border-border/50 bg-background/50 hover:border-indigo-500/30 transition-all hover:scale-105">
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What's Included</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">Complete design solutions for your entire brand presence.</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {deliverables.map((item, index) => (
                <div key={index} className="flex items-start gap-3 p-4 rounded-xl border border-border/50 bg-card/50">
                  <CheckCircle2 className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                  <span className="text-foreground/90">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-indigo-500/10 via-transparent to-violet-500/10">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Elevate Your Brand?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's create visuals that make your brand unforgettable. Tell us about your project.
            </p>
            <Button size="lg" className="bg-gradient-to-r from-indigo-500 to-violet-500 hover:from-indigo-600 hover:to-violet-600" asChild>
              <a href="/#contact">Get a Free Consultation</a>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default GraphicsDesign;
