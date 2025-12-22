import { Link } from 'react-router-dom';
import { ArrowLeft, Figma, CheckCircle2, Users, Lightbulb, Layers, MousePointer2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

const UIUXDesign = () => {
  const benefits = [
    {
      icon: Users,
      title: "User-Centered",
      description: "Every design decision is backed by user research. We design for real people, not assumptions."
    },
    {
      icon: Lightbulb,
      title: "Problem-First",
      description: "Beautiful interfaces are meaningless if they don't solve problems. We focus on function, then form."
    },
    {
      icon: Layers,
      title: "Systematic",
      description: "Scalable design systems that ensure consistency and speed up future development."
    },
    {
      icon: MousePointer2,
      title: "Conversion-Focused",
      description: "Design that guides users naturally toward your business goals. Every click is intentional."
    }
  ];

  const services = [
    { name: "User Research", description: "Understand your users deeply through interviews, surveys, and behavioral analysis" },
    { name: "UX Strategy", description: "Information architecture, user flows, and interaction design that makes sense" },
    { name: "UI Design", description: "Stunning visual design that reflects your brand and delights your users" },
    { name: "Prototyping", description: "Interactive prototypes that let you test ideas before investing in development" }
  ];

  const deliverables = [
    "User research and persona development",
    "Competitive analysis and benchmarking",
    "Information architecture and user flows",
    "Wireframes and low-fidelity mockups",
    "High-fidelity UI designs",
    "Interactive prototypes for testing",
    "Design system and component library",
    "Developer handoff with specifications"
  ];

  return (
    <>
      <SEO 
        title="UI/UX Design | SecondSpace"
        description="Human-centered design that creates intuitive, engaging digital experiences. User research, UX strategy, and beautiful UI design."
      />
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="pt-32 pb-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-transparent to-rose-500/10" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-500/10 rounded-full blur-3xl" />
          
          <div className="container mx-auto px-6 relative z-10">
            <Link to="/#services" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8">
              <ArrowLeft className="w-4 h-4" />
              Back to Services
            </Link>
            
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-pink-500/20 bg-pink-500/10 mb-6">
                <Figma className="w-4 h-4 text-pink-400" />
                <span className="text-sm font-medium text-pink-400">UI/UX Design</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Design That Makes Users{' '}
                <span className="bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
                  Fall in Love.
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl">
                Great design is invisible. It just works. We create intuitive experiences that feel so natural, users forget they're using an interface at all.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600" asChild>
                  <a href="/#contact">Start Your Design Project</a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/portfolio">View Our Designs</Link>
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
                  Pretty Isn't Enough.{' '}
                  <span className="text-muted-foreground">Design Has to Perform.</span>
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  A beautiful interface that confuses users is worthless. Conversely, a functional product that looks outdated loses trust. You need both—and that's exactly what we deliver.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Our design process starts with understanding your users deeply. What are their goals? Their frustrations? Their mental models? Only then do we start designing—and the result is experiences that feel effortless.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="p-6 rounded-2xl border border-border/50 bg-card/50 hover:border-pink-500/30 transition-colors">
                    <benefit.icon className="w-8 h-8 text-pink-400 mb-4" />
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Design Services</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">From research to handoff—we handle the entire design process.</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <div key={index} className="p-6 rounded-2xl border border-border/50 bg-background/50 hover:border-pink-500/30 transition-all hover:scale-105">
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
              <p className="text-muted-foreground max-w-2xl mx-auto">Complete design deliverables ready for development.</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {deliverables.map((item, index) => (
                <div key={index} className="flex items-start gap-3 p-4 rounded-xl border border-border/50 bg-card/50">
                  <CheckCircle2 className="w-5 h-5 text-pink-400 shrink-0 mt-0.5" />
                  <span className="text-foreground/90">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-pink-500/10 via-transparent to-rose-500/10">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Create Something Beautiful?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's talk about your design challenges. We'll help you create experiences your users will love.
            </p>
            <Button size="lg" className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600" asChild>
              <a href="/#contact">Get a Free Design Consultation</a>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default UIUXDesign;
