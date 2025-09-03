import { ArrowLeft, TrendingUp, Users, MousePointer } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';

const CaseStudies = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-background backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <Button 
              variant="ghost" 
              onClick={() => navigate('/')}
              className="flex items-center gap-2 text-foreground hover:text-primary"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
            <h1 className="text-xl font-bold text-gradient">Case Studies</h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-32 pb-16">
        <div className="container mx-auto px-6">
          {/* Page Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Real Results for <span className="text-gradient">Real Brands</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover how we've helped businesses transform their social media presence and achieve remarkable growth.
            </p>
          </div>

          {/* Case Studies Grid */}
          <div className="max-w-6xl mx-auto space-y-16">
            
            {/* FitLife UK Case Study */}
            <Card className="bg-card border-border hover-glow">
              <CardContent className="p-8 md:p-12">
                {/* Case Study Header */}
                <div className="text-center mb-12">
                  <h3 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
                    FitLife UK
                  </h3>
                  <p className="text-xl text-muted-foreground">
                    Fitness and Health Brand
                  </p>
                </div>

                {/* Featured Image */}
                <div className="mb-12 flex justify-center">
                  <div className="relative overflow-hidden rounded-lg shadow-2xl">
                    <img 
                      src="/lovable-uploads/b779cc02-4b89-424f-98c9-9a336f8ca872.png" 
                      alt="FitLife UK brand logo - Feel Fit. Love Life." 
                      className="w-full max-w-md h-auto object-cover"
                    />
                  </div>
                </div>

                {/* Results Overview */}
                <div className="grid md:grid-cols-3 gap-6 mb-12">
                  <div className="text-center p-6 bg-muted/20 rounded-lg">
                    <Users className="h-8 w-8 text-primary mx-auto mb-3" />
                    <div className="text-2xl font-bold text-primary mb-1">3,000</div>
                    <div className="text-sm text-muted-foreground">New Followers</div>
                  </div>
                  <div className="text-center p-6 bg-muted/20 rounded-lg">
                    <TrendingUp className="h-8 w-8 text-secondary mx-auto mb-3" />
                    <div className="text-2xl font-bold text-secondary mb-1">40%</div>
                    <div className="text-sm text-muted-foreground">Engagement Increase</div>
                  </div>
                  <div className="text-center p-6 bg-muted/20 rounded-lg">
                    <MousePointer className="h-8 w-8 text-primary mx-auto mb-3" />
                    <div className="text-2xl font-bold text-primary mb-1">30%</div>
                    <div className="text-sm text-muted-foreground">Website Traffic Growth</div>
                  </div>
                </div>

                {/* Case Study Sections */}
                <div className="space-y-12">
                  <section>
                    <h4 className="text-2xl font-bold mb-4 text-primary">The Challenge</h4>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      FitLife UK, a fitness and health brand in the UK, was struggling to grow its presence on Instagram and reach new audiences.
                    </p>
                  </section>

                  <section>
                    <h4 className="text-2xl font-bold mb-4 text-secondary">Our Strategy</h4>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      We crafted a data-driven social media campaign that focused on engaging content, targeted ads, and influencer partnerships.
                    </p>
                  </section>

                  <section>
                    <h4 className="text-2xl font-bold mb-4 text-primary">Execution</h4>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      We created a series of engaging posts, stories, and ads showcasing workout tips, healthy recipes, and motivational quotes. 
                      We also collaborated with fitness influencers to create sponsored content.
                    </p>
                  </section>

                  <section>
                    <h4 className="text-2xl font-bold mb-4 text-gradient">Results</h4>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Through our campaign, FitLife UK gained 3,000 new followers on Instagram, increased engagement rate by 40%, 
                      and saw a 30% growth in website traffic.
                    </p>
                  </section>
                </div>
              </CardContent>
            </Card>

            {/* GlowSkin UK Case Study */}
            <Card className="bg-card border-border hover-glow">
              <CardContent className="p-8 md:p-12">
                {/* Case Study Header */}
                <div className="text-center mb-12">
                  <h3 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
                    GlowSkin UK
                  </h3>
                  <p className="text-xl text-muted-foreground">
                    Skincare and Beauty Brand
                  </p>
                </div>

                {/* Featured Image */}
                <div className="mb-12 flex justify-center">
                  <div className="relative overflow-hidden rounded-lg shadow-2xl">
                    <img 
                      src="/lovable-uploads/5f417615-a837-4a82-b223-20a7d82d2020.png" 
                      alt="GlowSkin UK brand logo" 
                      className="w-full max-w-md h-auto object-cover"
                    />
                  </div>
                </div>

                {/* Results Overview */}
                <div className="grid md:grid-cols-3 gap-6 mb-12">
                  <div className="text-center p-6 bg-muted/20 rounded-lg">
                    <Users className="h-8 w-8 text-primary mx-auto mb-3" />
                    <div className="text-2xl font-bold text-primary mb-1">18,000</div>
                    <div className="text-sm text-muted-foreground">New Followers</div>
                  </div>
                  <div className="text-center p-6 bg-muted/20 rounded-lg">
                    <TrendingUp className="h-8 w-8 text-secondary mx-auto mb-3" />
                    <div className="text-2xl font-bold text-secondary mb-1">52%</div>
                    <div className="text-sm text-muted-foreground">Engagement Increase</div>
                  </div>
                  <div className="text-center p-6 bg-muted/20 rounded-lg">
                    <MousePointer className="h-8 w-8 text-primary mx-auto mb-3" />
                    <div className="text-2xl font-bold text-primary mb-1">23%</div>
                    <div className="text-sm text-muted-foreground">Sales Boost</div>
                  </div>
                </div>

                {/* Case Study Sections */}
                <div className="space-y-12">
                  <section>
                    <h4 className="text-2xl font-bold mb-4 text-primary">The Challenge</h4>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      GlowSkin UK, a premium skincare brand in the UK, was struggling with low engagement and stagnant sales through Instagram. 
                      Despite having a decent following, their content wasn't resonating with the target audience of young professionals and beauty enthusiasts.
                    </p>
                  </section>

                  <section>
                    <h4 className="text-2xl font-bold mb-4 text-secondary">Our Strategy</h4>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      We built a social media strategy that emphasized authenticity and education, using influencer partnerships, 
                      consistent posting, and ad funnels to boost brand trust and drive conversions.
                    </p>
                  </section>

                  <section>
                    <h4 className="text-2xl font-bold mb-4 text-primary">Execution</h4>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      We created a mix of engaging Reels featuring skincare routines and tutorials, branded content grids with a consistent aesthetic, 
                      influencer collaborations with UK-based micro-influencers, and story ads highlighting customer testimonials and limited-time offers.
                    </p>
                  </section>

                  <section>
                    <h4 className="text-2xl font-bold mb-4 text-gradient">Results</h4>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Through our campaign, GlowSkin UK gained 18,000 new followers in 90 days, increased engagement rate by 52%, 
                      achieved a 23% boost in sales from Instagram ads, and collected 500+ pieces of UGC under the hashtag #GlowWithGlowSkin.
                    </p>
                  </section>
                </div>
              </CardContent>
            </Card>

            {/* CTA */}
            <div className="text-center mt-16 pt-8 border-t border-border">
              <h5 className="text-xl font-semibold mb-4">Ready to achieve similar results?</h5>
              <Button 
                onClick={() => navigate('/#contact')}
                className="bg-gradient-accent hover:opacity-90 text-background font-semibold px-8 py-3"
              >
                Get Your Free Audit
              </Button>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
};

export default CaseStudies;