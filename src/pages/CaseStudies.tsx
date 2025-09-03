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

          {/* FitLife UK Case Study */}
          <div className="max-w-4xl mx-auto">
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
                      src="/lovable-uploads/6bc2f475-130f-4d78-b9ca-747aeecc5067.png" 
                      alt="FitLife UK Instagram Campaign - Fitness influencers showcase" 
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
                  {/* The Challenge */}
                  <section>
                    <h4 className="text-2xl font-bold mb-4 text-primary">The Challenge</h4>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      FitLife UK, a fitness and health brand in the UK, was struggling to grow its presence on Instagram and reach new audiences.
                    </p>
                  </section>

                  {/* Our Strategy */}
                  <section>
                    <h4 className="text-2xl font-bold mb-4 text-secondary">Our Strategy</h4>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      We crafted a data-driven social media campaign that focused on engaging content, targeted ads, and influencer partnerships.
                    </p>
                  </section>

                  {/* Execution */}
                  <section>
                    <h4 className="text-2xl font-bold mb-4 text-primary">Execution</h4>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      We created a series of engaging posts, stories, and ads showcasing workout tips, healthy recipes, and motivational quotes. 
                      We also collaborated with fitness influencers to create sponsored content.
                    </p>
                  </section>

                  {/* Results */}
                  <section>
                    <h4 className="text-2xl font-bold mb-4 text-gradient">Results</h4>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Through our campaign, FitLife UK gained 3,000 new followers on Instagram, increased engagement rate by 40%, 
                      and saw a 30% growth in website traffic.
                    </p>
                  </section>
                </div>

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
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CaseStudies;