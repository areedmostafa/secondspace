import { ArrowLeft, TrendingUp, Users, MousePointer, Sparkles, Target, Zap } from 'lucide-react';
import { useEffect } from 'react';
import { useTheme } from '@/components/ThemeProvider';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import SEO from '@/components/SEO';
import Footer from '@/components/Footer';

interface CaseStudy {
  title: string;
  category: string;
  image: string;
  imageAlt: string;
  stats: {
    icon: React.ReactNode;
    value: string;
    label: string;
    gradient: string;
  }[];
  challenge: string;
  strategy: string;
  execution: string;
  results: string;
}

const caseStudies: CaseStudy[] = [
  {
    title: "FitLife UK",
    category: "Fitness and Health Brand",
    image: "/lovable-uploads/b779cc02-4b89-424f-98c9-9a336f8ca872.png",
    imageAlt: "FitLife UK brand logo - Feel Fit. Love Life.",
    stats: [
      { icon: <Users className="h-6 w-6" />, value: "3,000", label: "New Followers", gradient: "from-blue-500 to-cyan-500" },
      { icon: <TrendingUp className="h-6 w-6" />, value: "40%", label: "Engagement Increase", gradient: "from-purple-500 to-pink-500" },
      { icon: <MousePointer className="h-6 w-6" />, value: "30%", label: "Website Traffic Growth", gradient: "from-orange-500 to-red-500" },
    ],
    challenge: "FitLife UK, a fitness and health brand in the UK, was struggling to grow its presence on Instagram and reach new audiences.",
    strategy: "We crafted a data-driven social media campaign that focused on engaging content, targeted ads, and influencer partnerships.",
    execution: "We created a series of engaging posts, stories, and ads showcasing workout tips, healthy recipes, and motivational quotes. We also collaborated with fitness influencers to create sponsored content.",
    results: "Through our campaign, FitLife UK gained 3,000 new followers on Instagram, increased engagement rate by 40%, and saw a 30% growth in website traffic.",
  },
  {
    title: "GlowSkin UK",
    category: "Skincare and Beauty Brand",
    image: "/lovable-uploads/5f417615-a837-4a82-b223-20a7d82d2020.png",
    imageAlt: "GlowSkin UK brand logo",
    stats: [
      { icon: <Users className="h-6 w-6" />, value: "18,000", label: "New Followers", gradient: "from-pink-500 to-rose-500" },
      { icon: <TrendingUp className="h-6 w-6" />, value: "52%", label: "Engagement Increase", gradient: "from-violet-500 to-purple-500" },
      { icon: <Target className="h-6 w-6" />, value: "23%", label: "Sales Boost", gradient: "from-emerald-500 to-teal-500" },
    ],
    challenge: "GlowSkin UK, a premium skincare brand in the UK, was struggling with low engagement and stagnant sales through Instagram. Despite having a decent following, their content wasn't resonating with the target audience of young professionals and beauty enthusiasts.",
    strategy: "We built a social media strategy that emphasized authenticity and education, using influencer partnerships, consistent posting, and ad funnels to boost brand trust and drive conversions.",
    execution: "We created a mix of engaging Reels featuring skincare routines and tutorials, branded content grids with a consistent aesthetic, influencer collaborations with UK-based micro-influencers, and story ads highlighting customer testimonials and limited-time offers.",
    results: "Through our campaign, GlowSkin UK gained 18,000 new followers in 90 days, increased engagement rate by 52%, achieved a 23% boost in sales from Instagram ads, and collected 500+ pieces of UGC under the hashtag #GlowWithGlowSkin.",
  },
  {
    title: "Mad Koffee",
    category: "Clothing & Lifestyle Brand",
    image: "/lovable-uploads/774db8b6-4295-40f1-87df-588af53265d8.png",
    imageAlt: "Mad Koffee Facebook page growth from 57K to 124K followers",
    stats: [
      { icon: <Users className="h-6 w-6" />, value: "+67,000", label: "New Followers (+117%)", gradient: "from-amber-500 to-orange-500" },
      { icon: <TrendingUp className="h-6 w-6" />, value: "70%", label: "Engagement Increase", gradient: "from-cyan-500 to-blue-500" },
      { icon: <Zap className="h-6 w-6" />, value: "55%", label: "Social-Driven Sales", gradient: "from-rose-500 to-pink-500" },
    ],
    challenge: "Mad Koffee, a trendy clothing and lifestyle brand, had built a decent online presence with 57,000 Facebook followers. However, growth had slowed, engagement was inconsistent, and sales through social channels weren't scaling as fast as the brand's ambitions.",
    strategy: "SecondSpace created a 12-month growth strategy focused on turning Mad Koffee's Facebook into both a fashion inspiration hub and a sales engine. We combined high-quality lifestyle and product content, influencer collaborations, paid ads optimized for both reach and conversions, and consistent engagement campaigns.",
    execution: "We built a monthly content calendar showcasing new collections, styling tips, and seasonal campaigns. We partnered with micro and mid-tier influencers in the fashion space to create authentic UGC, ran retargeting ads for abandoned carts and lookalike audiences, and created limited-edition drops promoted through countdown stories and exclusive Reels.",
    results: "Over 12 months, SecondSpace helped Mad Koffee achieve remarkable growth: follower growth from 57,000 → 124,000 (+117%), engagement rate boosted by 70%, social-driven sales increased by 55%, and ROI on paid campaigns exceeded 310%.",
  },
];

const CaseStudies = () => {
  const navigate = useNavigate();
  const { setTheme } = useTheme();

  useEffect(() => {
    setTheme('dark');
  }, [setTheme]);

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <SEO
        title="Case Studies - Real Results & Client Success Stories"
        description="See how SecondSpace helped FitLife UK, GlowSkin UK, and Mad Koffee achieve remarkable growth through strategic social media marketing and content creation."
        canonical="https://secondspace.studio/case-studies"
      />

      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/5 to-secondary/5 rounded-full blur-3xl" />
      </div>

      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Button 
              variant="ghost" 
              onClick={() => navigate('/')}
              className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
            <div className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-primary" />
              <span className="text-lg font-bold bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                Case Studies
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 pt-32 pb-16">
        <div className="container mx-auto px-6">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
              style={{ animation: 'fade-in 0.6s ease-out forwards' }}
            >
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Proven Results</span>
            </div>
            
            <h1 
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
              style={{ animation: 'fade-in 0.6s ease-out 0.1s forwards', opacity: 0 }}
            >
              Real Results for{' '}
              <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                Real Brands
              </span>
            </h1>
            
            <p 
              className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
              style={{ animation: 'fade-in 0.6s ease-out 0.2s forwards', opacity: 0 }}
            >
              Discover how we've helped businesses transform their digital presence 
              and achieve remarkable, measurable growth.
            </p>
          </div>

          {/* Case Studies */}
          <div className="max-w-6xl mx-auto space-y-24">
            {caseStudies.map((study, index) => (
              <div 
                key={study.title}
                className="relative group"
                style={{ animation: `fade-in 0.6s ease-out ${0.3 + index * 0.15}s forwards`, opacity: 0 }}
              >
                {/* Glassmorphism Card */}
                <div className="relative rounded-3xl overflow-hidden">
                  {/* Gradient Border Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/50 via-secondary/50 to-primary/50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
                  
                  {/* Card Content */}
                  <div className="relative bg-card/40 backdrop-blur-xl border border-border/30 rounded-3xl p-8 md:p-12 m-[1px]">
                    {/* Header */}
                    <div className="text-center mb-12">
                      <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary mb-4">
                        {study.category}
                      </span>
                      <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
                        {study.title}
                      </h2>
                    </div>

                    {/* Featured Image */}
                    <div className="mb-12 flex justify-center">
                      <div className="relative group/image">
                        <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-xl opacity-0 group-hover/image:opacity-100 transition-opacity duration-500" />
                        <div className="relative overflow-hidden rounded-2xl border border-border/30 shadow-2xl">
                          <img 
                            src={study.image} 
                            alt={study.imageAlt} 
                            className="w-full max-w-lg h-auto object-cover transform group-hover/image:scale-105 transition-transform duration-700"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid md:grid-cols-3 gap-6 mb-12">
                      {study.stats.map((stat, statIndex) => (
                        <div 
                          key={statIndex}
                          className="relative group/stat"
                        >
                          <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover/stat:opacity-20 transition-opacity duration-300 rounded-2xl blur-xl" 
                               style={{ backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))` }} />
                          <div className="relative bg-muted/20 backdrop-blur-sm border border-border/30 rounded-2xl p-6 text-center hover:border-primary/30 transition-all duration-300 hover:transform hover:scale-105">
                            <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-r ${stat.gradient} mb-4 text-white shadow-lg`}>
                              {stat.icon}
                            </div>
                            <div className={`text-3xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2`}>
                              {stat.value}
                            </div>
                            <div className="text-sm text-muted-foreground font-medium">
                              {stat.label}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Case Study Sections */}
                    <div className="grid md:grid-cols-2 gap-8">
                      {/* Challenge */}
                      <div className="relative group/section">
                        <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-red-500 to-orange-500 rounded-full opacity-50 group-hover/section:opacity-100 transition-opacity" />
                        <div className="pl-6">
                          <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                            <span className="text-red-400">01.</span> The Challenge
                          </h3>
                          <p className="text-muted-foreground leading-relaxed">
                            {study.challenge}
                          </p>
                        </div>
                      </div>

                      {/* Strategy */}
                      <div className="relative group/section">
                        <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full opacity-50 group-hover/section:opacity-100 transition-opacity" />
                        <div className="pl-6">
                          <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                            <span className="text-blue-400">02.</span> Our Strategy
                          </h3>
                          <p className="text-muted-foreground leading-relaxed">
                            {study.strategy}
                          </p>
                        </div>
                      </div>

                      {/* Execution */}
                      <div className="relative group/section">
                        <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-purple-500 to-pink-500 rounded-full opacity-50 group-hover/section:opacity-100 transition-opacity" />
                        <div className="pl-6">
                          <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                            <span className="text-purple-400">03.</span> Execution
                          </h3>
                          <p className="text-muted-foreground leading-relaxed">
                            {study.execution}
                          </p>
                        </div>
                      </div>

                      {/* Results */}
                      <div className="relative group/section">
                        <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-emerald-500 to-teal-500 rounded-full opacity-50 group-hover/section:opacity-100 transition-opacity" />
                        <div className="pl-6">
                          <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                            <span className="text-emerald-400">04.</span> Results
                          </h3>
                          <p className="text-muted-foreground leading-relaxed">
                            {study.results}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div 
            className="mt-32 text-center"
            style={{ animation: 'fade-in 0.6s ease-out 0.8s forwards', opacity: 0 }}
          >
            <div className="relative inline-block">
              <div className="absolute -inset-8 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 rounded-3xl blur-2xl" />
              <div className="relative bg-card/40 backdrop-blur-xl border border-border/30 rounded-3xl p-12 max-w-2xl mx-auto">
                <Sparkles className="h-12 w-12 text-primary mx-auto mb-6" />
                <h3 className="text-3xl md:text-4xl font-bold mb-4">
                  Ready to Become Our Next{' '}
                  <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    Success Story?
                  </span>
                </h3>
                <p className="text-muted-foreground mb-8 text-lg">
                  Let's discuss how we can help your brand achieve similar results.
                </p>
                <Button 
                  onClick={() => navigate('/#contact')}
                  className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-primary-foreground font-semibold px-10 py-6 text-lg rounded-xl shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:scale-105"
                >
                  Get Your Free Audit
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CaseStudies;
