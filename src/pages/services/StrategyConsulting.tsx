import { Link } from 'react-router-dom';
import { ArrowLeft, Brain, CheckCircle2, Target, Lightbulb, TrendingUp, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

const StrategyConsulting = () => {
  const benefits = [
    {
      icon: Target,
      title: "Clarity & Focus",
      description: "Cut through the noise. We help you identify what actually moves the needle for your business."
    },
    {
      icon: Lightbulb,
      title: "Expert Insights",
      description: "Years of experience across industries, distilled into actionable strategies for your growth."
    },
    {
      icon: TrendingUp,
      title: "Measurable Results",
      description: "No fluffy advice. Every recommendation comes with KPIs and a clear path to achievement."
    },
    {
      icon: Users,
      title: "Team Alignment",
      description: "Get everyone rowing in the same direction with clear goals and accountabilities."
    }
  ];

  const services = [
    { name: "Digital Strategy", description: "Comprehensive digital roadmaps that align technology with business objectives" },
    { name: "Growth Planning", description: "Scalable growth frameworks that take you from where you are to where you want to be" },
    { name: "Platform Optimization", description: "Maximize ROI from your existing tools and channels through strategic optimization" },
    { name: "Team Training", description: "Empower your team with the skills and knowledge to execute at the highest level" }
  ];

  const deliverables = [
    "Comprehensive digital strategy audit",
    "Competitive landscape analysis",
    "Customer journey mapping",
    "Growth opportunity identification",
    "Strategic roadmap with milestones",
    "KPI framework and dashboards",
    "Team training and workshops",
    "Ongoing advisory support"
  ];

  return (
    <>
      <SEO 
        title="Strategy Consulting | SecondSpace"
        description="Expert guidance on digital strategy, optimization, and growth planning. Transform your business with data-driven insights."
      />
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="pt-32 pb-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-amber-500/10" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-3xl" />
          
          <div className="container mx-auto px-6 relative z-10">
            <Link to="/#services" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8">
              <ArrowLeft className="w-4 h-4" />
              Back to Services
            </Link>
            
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-orange-500/20 bg-orange-500/10 mb-6">
                <Brain className="w-4 h-4 text-orange-400" />
                <span className="text-sm font-medium text-orange-400">Strategy Consulting</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Strategy That Actually{' '}
                <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
                  Gets Executed.
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl">
                You don't need another PowerPoint deck that sits in a drawer. You need a strategic partner who helps you build a clear plan—and then helps you execute it.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-background" asChild>
                  <a href="/#contact">Book a Strategy Session</a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/case-studies">See Our Impact</Link>
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
                  Tactics Without Strategy Is Noise.{' '}
                  <span className="text-muted-foreground">Strategy Without Tactics Is Dreaming.</span>
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  You're busy running your business. You're executing campaigns, managing teams, fighting fires. But are you moving in the right direction? Are you building something sustainable?
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We help you step back, see the big picture, and chart a course that makes sense. Then we help you execute with precision. Strategy and action, together.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="p-6 rounded-2xl border border-border/50 bg-card/50 hover:border-orange-500/30 transition-colors">
                    <benefit.icon className="w-8 h-8 text-orange-400 mb-4" />
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">How We Help</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">Strategic guidance tailored to your unique challenges and opportunities.</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <div key={index} className="p-6 rounded-2xl border border-border/50 bg-background/50 hover:border-orange-500/30 transition-all hover:scale-105">
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
              <p className="text-muted-foreground max-w-2xl mx-auto">Comprehensive strategic support from audit to execution.</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {deliverables.map((item, index) => (
                <div key={index} className="flex items-start gap-3 p-4 rounded-xl border border-border/50 bg-card/50">
                  <CheckCircle2 className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" />
                  <span className="text-foreground/90">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-orange-500/10 via-transparent to-amber-500/10">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Think Bigger?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's have a strategic conversation about your business. No sales pitch—just honest insights about where you are and where you could be.
            </p>
            <Button size="lg" className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-background" asChild>
              <a href="/#contact">Schedule Your Free Strategy Call</a>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default StrategyConsulting;
