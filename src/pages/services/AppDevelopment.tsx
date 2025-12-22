import { Link } from 'react-router-dom';
import { ArrowLeft, Cpu, CheckCircle2, Smartphone, Layers, RefreshCw, HeartHandshake } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

const AppDevelopment = () => {
  const benefits = [
    {
      icon: Smartphone,
      title: "Native Performance",
      description: "Apps that feel fast, responsive, and natural on every device. No compromises on user experience."
    },
    {
      icon: Layers,
      title: "Cross-Platform",
      description: "One codebase, multiple platforms. Reach iOS and Android users without doubling your budget."
    },
    {
      icon: RefreshCw,
      title: "Ongoing Support",
      description: "We don't disappear after launch. Continuous updates, bug fixes, and improvements as you grow."
    },
    {
      icon: HeartHandshake,
      title: "True Partnership",
      description: "Your success is our success. We're invested in building something that actually works for your users."
    }
  ];

  const process = [
    { step: "01", title: "Discovery & Planning", description: "We dive deep into your idea, target users, and business model to create a solid foundation." },
    { step: "02", title: "Design & Prototype", description: "Interactive prototypes let you see and feel your app before a single line of code is written." },
    { step: "03", title: "Development", description: "Agile sprints with regular demos keep you in the loop and in control throughout development." },
    { step: "04", title: "Launch & Grow", description: "App store submission, launch strategy, and ongoing support to help your app succeed." }
  ];

  const deliverables = [
    "Native iOS and Android development",
    "Cross-platform solutions (React Native, Flutter)",
    "UI/UX design optimized for mobile",
    "Backend API development and integration",
    "Push notifications and real-time features",
    "App Store and Play Store submission",
    "Analytics and crash reporting setup",
    "Post-launch maintenance and updates"
  ];

  return (
    <>
      <SEO 
        title="App Development | SecondSpace"
        description="Native and cross-platform mobile apps that deliver exceptional user experiences. iOS and Android development for growing businesses."
      />
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="pt-32 pb-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-teal-500/10" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-3xl" />
          
          <div className="container mx-auto px-6 relative z-10">
            <Link to="/#services" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8">
              <ArrowLeft className="w-4 h-4" />
              Back to Services
            </Link>
            
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 mb-6">
                <Cpu className="w-4 h-4 text-emerald-400" />
                <span className="text-sm font-medium text-emerald-400">App Development</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Turn Your App Idea Into{' '}
                <span className="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
                  Reality.
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl">
                You have a vision for an app that could change your business—or even an industry. We have the expertise to build it. Let's create something users will love.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600" asChild>
                  <a href="/#contact">Discuss Your App Idea</a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/portfolio">See Our Apps</Link>
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
                  Building Apps Is Hard.{' '}
                  <span className="text-muted-foreground">We Make It Simple.</span>
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  App development is complex—there are a thousand decisions to make and a million things that can go wrong. But with the right partner, it doesn't have to feel that way.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We've built apps for startups and enterprises alike. We know what works, what doesn't, and how to avoid the pitfalls that sink most projects. Your app deserves to succeed.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="p-6 rounded-2xl border border-border/50 bg-card/50 hover:border-emerald-500/30 transition-colors">
                    <benefit.icon className="w-8 h-8 text-emerald-400 mb-4" />
                    <h3 className="font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-card/30">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Development Process</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">Transparent, collaborative, and designed to deliver results.</p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8">
              {process.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="text-5xl font-bold text-emerald-500/20 mb-4">{item.step}</div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
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
              <p className="text-muted-foreground max-w-2xl mx-auto">Everything you need to launch and grow a successful mobile app.</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {deliverables.map((item, index) => (
                <div key={index} className="flex items-start gap-3 p-4 rounded-xl border border-border/50 bg-card/50">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-foreground/90">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-emerald-500/10 via-transparent to-teal-500/10">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Have an App Idea?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's talk about it. We'll help you validate your concept, define the MVP, and create a roadmap to success.
            </p>
            <Button size="lg" className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600" asChild>
              <a href="/#contact">Schedule a Free Consultation</a>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default AppDevelopment;
