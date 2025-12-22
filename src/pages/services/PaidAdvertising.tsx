import { Link } from 'react-router-dom';
import { ArrowLeft, Target, CheckCircle2, ArrowRight, DollarSign, BarChart3, Zap, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

const PaidAdvertising = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: "Maximize Your ROI",
      description: "Every dollar counts. We optimize campaigns relentlessly to ensure you get the highest return on your ad spend."
    },
    {
      icon: BarChart3,
      title: "Transparent Reporting",
      description: "No vanity metrics. Real numbers that show exactly how your investment is performing and where it's going."
    },
    {
      icon: Zap,
      title: "Fast Results",
      description: "Start seeing qualified leads within days, not months. Paid ads accelerate your growth timeline dramatically."
    },
    {
      icon: RefreshCw,
      title: "Continuous Optimization",
      description: "We test, learn, and improve daily. Your campaigns get smarter and more efficient over time."
    }
  ];

  const platforms = [
    { name: "Meta Ads", description: "Facebook & Instagram advertising with advanced targeting and creative optimization" },
    { name: "TikTok Ads", description: "Viral potential meets precision targeting for younger demographics" },
    { name: "Google Ads", description: "Capture high-intent searchers at the moment they're ready to buy" },
    { name: "LinkedIn Ads", description: "B2B targeting that reaches decision-makers in your industry" }
  ];

  const deliverables = [
    "Complete campaign strategy and audience research",
    "Custom creative development (images, videos, copy)",
    "Advanced audience targeting and lookalike creation",
    "A/B testing across all campaign elements",
    "Retargeting funnels that recapture lost visitors",
    "Real-time performance monitoring and optimization",
    "Weekly performance reports with insights",
    "Monthly strategy calls to align on goals"
  ];

  return (
    <>
      <SEO 
        title="Paid Advertising | SecondSpace"
        description="High-ROI Meta, TikTok, and Google Ads that convert. Data-driven paid advertising strategies that scale your business."
      />
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="pt-32 pb-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-purple-500/10" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-500/10 rounded-full blur-3xl" />
          
          <div className="container mx-auto px-6 relative z-10">
            <Link to="/#services" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8">
              <ArrowLeft className="w-4 h-4" />
              Back to Services
            </Link>
            
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-violet-500/20 bg-violet-500/10 mb-6">
                <Target className="w-4 h-4 text-violet-400" />
                <span className="text-sm font-medium text-violet-400">Paid Advertising</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Stop Wasting Ad Budget.{' '}
                <span className="bg-gradient-to-r from-violet-500 to-purple-500 bg-clip-text text-transparent">
                  Start Converting.
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl">
                Paid ads should be a growth lever, not a money pit. We build data-driven campaigns that turn clicks into customers and scale profitably with your business.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-violet-500 to-purple-500 hover:from-violet-600 hover:to-purple-600" asChild>
                  <a href="/#contact">Get a Free Ad Audit</a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/case-studies">See Our Results</Link>
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
                  Your Competitors Are Already Running Ads.{' '}
                  <span className="text-muted-foreground">Are You?</span>
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Organic reach is dying. The brands winning today are the ones who've mastered paid advertising. But running ads without strategy is like throwing money into a fire.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We don't just run ads—we engineer profitable customer acquisition systems. From creative to targeting to optimization, every element is designed to maximize your return.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="p-6 rounded-2xl border border-border/50 bg-card/50 hover:border-violet-500/30 transition-colors">
                    <benefit.icon className="w-8 h-8 text-violet-400 mb-4" />
                    <h3 className="font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Platforms Section */}
        <section className="py-20 bg-card/30">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Platforms We Master</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">We go where your customers are—and we know exactly how to reach them.</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {platforms.map((platform, index) => (
                <div key={index} className="p-6 rounded-2xl border border-border/50 bg-background/50 hover:border-violet-500/30 transition-all hover:scale-105">
                  <h3 className="text-xl font-semibold mb-3">{platform.name}</h3>
                  <p className="text-sm text-muted-foreground">{platform.description}</p>
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
              <p className="text-muted-foreground max-w-2xl mx-auto">Full-service advertising management—from strategy to execution to optimization.</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {deliverables.map((item, index) => (
                <div key={index} className="flex items-start gap-3 p-4 rounded-xl border border-border/50 bg-card/50">
                  <CheckCircle2 className="w-5 h-5 text-violet-400 shrink-0 mt-0.5" />
                  <span className="text-foreground/90">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-violet-500/10 via-transparent to-purple-500/10">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Make Your Ad Budget Work Harder</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get a free audit of your current campaigns. We'll show you exactly where you're leaving money on the table.
            </p>
            <Button size="lg" className="bg-gradient-to-r from-violet-500 to-purple-500 hover:from-violet-600 hover:to-purple-600" asChild>
              <a href="/#contact">Claim Your Free Audit</a>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default PaidAdvertising;
