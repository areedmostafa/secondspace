import { Link } from 'react-router-dom';
import { ArrowLeft, Smartphone, CheckCircle2, ArrowRight, Users, TrendingUp, MessageCircle, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

const SocialMediaManagement = () => {
  const benefits = [
    {
      icon: Users,
      title: "Build Real Community",
      description: "We don't just post content—we build engaged communities that become loyal customers and brand advocates."
    },
    {
      icon: TrendingUp,
      title: "Data-Driven Growth",
      description: "Every strategy is backed by analytics. We track what works, optimize what doesn't, and scale what converts."
    },
    {
      icon: MessageCircle,
      title: "Authentic Engagement",
      description: "Real conversations, real relationships. We handle your community like it's our own business."
    },
    {
      icon: Calendar,
      title: "Consistent Presence",
      description: "Never miss a beat. Strategic content calendars ensure your brand stays top-of-mind 365 days a year."
    }
  ];

  const deliverables = [
    "Complete platform strategy for Instagram, TikTok, LinkedIn, and Facebook",
    "Custom content creation tailored to your brand voice",
    "Daily community management and engagement",
    "Monthly performance reports with actionable insights",
    "Competitor analysis and trend monitoring",
    "Crisis management and reputation protection",
    "Influencer collaboration strategy",
    "User-generated content campaigns"
  ];

  const process = [
    { step: "01", title: "Discovery", description: "We dive deep into your brand, audience, and goals to understand what makes you unique." },
    { step: "02", title: "Strategy", description: "Custom content pillars, posting schedules, and engagement tactics designed for your growth." },
    { step: "03", title: "Execute", description: "Our team creates, posts, and engages while you focus on running your business." },
    { step: "04", title: "Optimize", description: "Weekly analysis and monthly strategy refinements to maximize your results." }
  ];

  return (
    <>
      <SEO 
        title="Social Media Management | SecondSpace"
        description="Build engaged communities that convert. Strategic social media management across Instagram, TikTok, LinkedIn & more."
      />
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="pt-32 pb-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-rose-500/10 via-transparent to-orange-500/10" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rose-500/10 rounded-full blur-3xl" />
          
          <div className="container mx-auto px-6 relative z-10">
            <Link to="/#services" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8">
              <ArrowLeft className="w-4 h-4" />
              Back to Services
            </Link>
            
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-rose-500/20 bg-rose-500/10 mb-6">
                <Smartphone className="w-4 h-4 text-rose-400" />
                <span className="text-sm font-medium text-rose-400">Social Media Management</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Stop Posting.{' '}
                <span className="bg-gradient-to-r from-rose-500 to-orange-500 bg-clip-text text-transparent">
                  Start Building.
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl">
                Your social media shouldn't be an afterthought. We transform your platforms into powerful growth engines that build community, drive engagement, and convert followers into customers.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-rose-500 to-orange-500 hover:from-rose-600 hover:to-orange-600" asChild>
                  <a href="/#contact">Start Your Growth Journey</a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/case-studies">View Success Stories</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Problem/Solution Section */}
        <section className="py-20 border-t border-border/50">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  You're Busy Running Your Business.{' '}
                  <span className="text-muted-foreground">Let Us Handle Your Social.</span>
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Posting randomly, chasing algorithms, and stressing over engagement metrics isn't why you started your business. You need a partner who treats your social media like their own—because your growth is our growth.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We're not just another agency that schedules posts. We're strategists, content creators, and community builders who become an extension of your team.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="p-6 rounded-2xl border border-border/50 bg-card/50 hover:border-rose-500/30 transition-colors">
                    <benefit.icon className="w-8 h-8 text-rose-400 mb-4" />
                    <h3 className="font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* What You Get Section */}
        <section className="py-20 bg-card/30">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything You Need to Dominate Social</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">No hidden fees, no surprises. Here's exactly what you get when you partner with us.</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {deliverables.map((item, index) => (
                <div key={index} className="flex items-start gap-3 p-4 rounded-xl border border-border/50 bg-background/50">
                  <CheckCircle2 className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                  <span className="text-foreground/90">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">How We Work Together</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">A proven process that delivers results without the chaos.</p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8">
              {process.map((item, index) => (
                <div key={index} className="relative">
                  <div className="text-6xl font-bold text-rose-500/10 mb-4">{item.step}</div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                  {index < process.length - 1 && (
                    <ArrowRight className="hidden md:block absolute top-8 -right-4 w-6 h-6 text-rose-500/30" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-rose-500/10 via-transparent to-orange-500/10">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Social Presence?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's have a conversation about your goals. No pressure, no sales pitch—just real talk about how we can help you grow.
            </p>
            <Button size="lg" className="bg-gradient-to-r from-rose-500 to-orange-500 hover:from-rose-600 hover:to-orange-600" asChild>
              <a href="/#contact">Get Your Free Strategy Call</a>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default SocialMediaManagement;
