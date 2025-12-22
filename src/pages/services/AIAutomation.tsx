import { Link } from 'react-router-dom';
import { ArrowLeft, Zap, CheckCircle2, Bot, Clock, TrendingUp, Workflow } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

const AIAutomation = () => {
  const benefits = [
    {
      icon: Clock,
      title: "Save Hours Daily",
      description: "Automate repetitive tasks that eat your time. Focus on strategy while AI handles execution."
    },
    {
      icon: Bot,
      title: "24/7 Operations",
      description: "Your business runs even when you sleep. AI chatbots, auto-responses, and more."
    },
    {
      icon: TrendingUp,
      title: "Scale Without Hiring",
      description: "Handle 10x the workload without 10x the headcount. Automation is your unfair advantage."
    },
    {
      icon: Workflow,
      title: "Seamless Integration",
      description: "Works with your existing tools. No need to change how you work—just do it faster."
    }
  ];

  const solutions = [
    { name: "AI Chatbots", description: "Intelligent customer support that handles inquiries 24/7 with human-like responses" },
    { name: "Workflow Automation", description: "Connect your tools and automate repetitive processes across your business" },
    { name: "Smart Analytics", description: "AI-powered insights that surface opportunities and risks automatically" },
    { name: "Content Generation", description: "AI-assisted content creation for social media, emails, and marketing" }
  ];

  const deliverables = [
    "Custom AI chatbot development and training",
    "Workflow automation design and implementation",
    "CRM and marketing automation setup",
    "AI-powered data analysis and reporting",
    "Email and social media automation",
    "Lead scoring and nurturing sequences",
    "Custom integrations between your tools",
    "Ongoing optimization and support"
  ];

  return (
    <>
      <SEO 
        title="AI Automation | SecondSpace"
        description="Intelligent automation solutions that streamline workflows and boost efficiency. AI chatbots, workflow automation, and smart analytics."
      />
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="pt-32 pb-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/10 via-transparent to-purple-500/10" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-fuchsia-500/10 rounded-full blur-3xl" />
          
          <div className="container mx-auto px-6 relative z-10">
            <Link to="/#services" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8">
              <ArrowLeft className="w-4 h-4" />
              Back to Services
            </Link>
            
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-fuchsia-500/20 bg-fuchsia-500/10 mb-6">
                <Zap className="w-4 h-4 text-fuchsia-400" />
                <span className="text-sm font-medium text-fuchsia-400">AI Automation</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Work Smarter.{' '}
                <span className="bg-gradient-to-r from-fuchsia-500 to-purple-500 bg-clip-text text-transparent">
                  Scale Faster.
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl">
                AI isn't the future—it's now. The businesses winning today are using intelligent automation to outpace, outperform, and outlast their competition.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-fuchsia-500 to-purple-500 hover:from-fuchsia-600 hover:to-purple-600" asChild>
                  <a href="/#contact">Automate Your Business</a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/case-studies">See Automation in Action</Link>
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
                  Stop Doing Tasks AI Can Handle.{' '}
                  <span className="text-muted-foreground">Start Growing Your Business.</span>
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  How many hours do you spend on repetitive tasks? Data entry. Email responses. Report generation. Scheduling. These tasks don't grow your business—they just keep it running.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We implement AI solutions that handle the mundane so you can focus on the meaningful. Imagine having a tireless team member who never sleeps, never makes mistakes, and scales infinitely.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="p-6 rounded-2xl border border-border/50 bg-card/50 hover:border-fuchsia-500/30 transition-colors">
                    <benefit.icon className="w-8 h-8 text-fuchsia-400 mb-4" />
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our AI Solutions</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">Practical automation that delivers real business results.</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {solutions.map((solution, index) => (
                <div key={index} className="p-6 rounded-2xl border border-border/50 bg-background/50 hover:border-fuchsia-500/30 transition-all hover:scale-105">
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
              <p className="text-muted-foreground max-w-2xl mx-auto">End-to-end automation solutions tailored to your business.</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {deliverables.map((item, index) => (
                <div key={index} className="flex items-start gap-3 p-4 rounded-xl border border-border/50 bg-card/50">
                  <CheckCircle2 className="w-5 h-5 text-fuchsia-400 shrink-0 mt-0.5" />
                  <span className="text-foreground/90">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-fuchsia-500/10 via-transparent to-purple-500/10">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Automate & Scale?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's identify the automations that will have the biggest impact on your business. Start with a free consultation.
            </p>
            <Button size="lg" className="bg-gradient-to-r from-fuchsia-500 to-purple-500 hover:from-fuchsia-600 hover:to-purple-600" asChild>
              <a href="/#contact">Get Your Free Automation Audit</a>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default AIAutomation;
