import { Link } from 'react-router-dom';
import { ArrowLeft, Code2, CheckCircle2, Server, Cloud, Database, GitBranch } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

const SoftwareDevelopment = () => {
  const benefits = [
    {
      icon: Server,
      title: "Scalable Architecture",
      description: "Built to grow with your business. Handle 100 users or 100,000 without breaking a sweat."
    },
    {
      icon: Cloud,
      title: "Cloud-Native",
      description: "Modern cloud infrastructure that's reliable, secure, and cost-effective at any scale."
    },
    {
      icon: Database,
      title: "Integration Ready",
      description: "Connect with your existing tools and systems. APIs that play nice with everything."
    },
    {
      icon: GitBranch,
      title: "Future-Proof",
      description: "Clean code and modern practices mean your software stays maintainable for years."
    }
  ];

  const solutions = [
    { name: "Custom Software", description: "Bespoke solutions built specifically for your unique business challenges" },
    { name: "SaaS Products", description: "Subscription-based software products that generate recurring revenue" },
    { name: "Enterprise Systems", description: "Large-scale systems that power complex business operations" },
    { name: "API Development", description: "Robust APIs that connect your systems and enable automation" }
  ];

  const deliverables = [
    "Custom software architecture and design",
    "Full-stack development (frontend + backend)",
    "Database design and optimization",
    "Third-party API integrations",
    "Cloud deployment and DevOps setup",
    "Automated testing and CI/CD pipelines",
    "Documentation and knowledge transfer",
    "Ongoing maintenance and support"
  ];

  return (
    <>
      <SEO 
        title="Software Development | SecondSpace"
        description="Custom software solutions and SaaS products tailored to your business needs. Scalable, secure, and built for growth."
      />
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="pt-32 pb-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-yellow-500/10" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-3xl" />
          
          <div className="container mx-auto px-6 relative z-10">
            <Link to="/#services" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8">
              <ArrowLeft className="w-4 h-4" />
              Back to Services
            </Link>
            
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-500/20 bg-amber-500/10 mb-6">
                <Code2 className="w-4 h-4 text-amber-400" />
                <span className="text-sm font-medium text-amber-400">Software Development</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Software That Solves{' '}
                <span className="bg-gradient-to-r from-amber-500 to-yellow-500 bg-clip-text text-transparent">
                  Real Problems.
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl">
                Off-the-shelf software forces you to adapt your business to its limitations. Custom software does the opposite—it adapts to you. Let's build exactly what you need.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-background" asChild>
                  <a href="/#contact">Start Your Project</a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/case-studies">View Case Studies</Link>
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
                  Stop Duct-Taping Solutions Together.{' '}
                  <span className="text-muted-foreground">Build Something That Actually Works.</span>
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Spreadsheets held together by hope. Workflows that require 17 different tools. Manual processes that eat hours every week. Sound familiar?
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Custom software eliminates the friction. We build systems that automate the tedious, streamline the complex, and give you back the time to focus on what matters—growing your business.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="p-6 rounded-2xl border border-border/50 bg-card/50 hover:border-amber-500/30 transition-colors">
                    <benefit.icon className="w-8 h-8 text-amber-400 mb-4" />
                    <h3 className="font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="py-20 bg-card/30">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Build</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">From internal tools to customer-facing products—we build software that drives results.</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {solutions.map((solution, index) => (
                <div key={index} className="p-6 rounded-2xl border border-border/50 bg-background/50 hover:border-amber-500/30 transition-all hover:scale-105">
                  <h3 className="text-xl font-semibold mb-3">{solution.name}</h3>
                  <p className="text-sm text-muted-foreground">{solution.description}</p>
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
              <p className="text-muted-foreground max-w-2xl mx-auto">End-to-end development services that take your idea from concept to production.</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {deliverables.map((item, index) => (
                <div key={index} className="flex items-start gap-3 p-4 rounded-xl border border-border/50 bg-card/50">
                  <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <span className="text-foreground/90">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-amber-500/10 via-transparent to-yellow-500/10">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Build Something Powerful</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Tell us about your challenge. We'll help you design a solution that transforms how you do business.
            </p>
            <Button size="lg" className="bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-background" asChild>
              <a href="/#contact">Schedule a Discovery Call</a>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default SoftwareDevelopment;
