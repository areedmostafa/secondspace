
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const portfolioItems = [
  {
    id: 1,
    client: "LuxuryFashion Co.",
    industry: "luxury",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=500&h=300&fit=crop",
    roi: "+450% ROI",
    metric: "2.3M Reach",
    description: "Complete brand transformation with luxury positioning strategy"
  },
  {
    id: 2,
    client: "TechStart SaaS",
    industry: "saas",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
    roi: "+280% ROI",
    metric: "50K Leads",
    description: "B2B lead generation campaign across LinkedIn and Meta"
  },
  {
    id: 3,
    client: "EcoCommerce",
    industry: "ecommerce",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
    roi: "+320% ROI",
    metric: "1.8M Revenue",
    description: "Sustainable product marketing with influencer partnerships"
  },
  {
    id: 4,
    client: "FitnessPro",
    industry: "fitness",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=300&fit=crop",
    roi: "+390% ROI",
    metric: "100K Members",
    description: "Community-driven fitness brand growth strategy"
  },
  {
    id: 5,
    client: "BeautyBrand",
    industry: "beauty",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=500&h=300&fit=crop",
    roi: "+410% ROI",
    metric: "5M Views",
    description: "Viral beauty content strategy with UGC campaigns"
  },
  {
    id: 6,
    client: "RestaurantChain",
    industry: "food",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500&h=300&fit=crop",
    roi: "+260% ROI",
    metric: "200% Traffic",
    description: "Local restaurant marketing with geo-targeted campaigns"
  }
];

const industries = ["all", "luxury", "saas", "ecommerce", "fitness", "beauty", "food"];

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredItems = activeFilter === "all" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.industry === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-gradient">Portfolio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Real results for real brands. See how we've helped businesses scale their social media presence.
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            {industries.map((industry) => (
              <Button
                key={industry}
                variant={activeFilter === industry ? "default" : "outline"}
                onClick={() => setActiveFilter(industry)}
                className={activeFilter === industry ? "bg-gradient-accent text-background" : ""}
              >
                {industry.charAt(0).toUpperCase() + industry.slice(1)}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <Card key={item.id} className="bg-card border-border hover-glow group overflow-hidden">
              <div className="relative overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.client}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center">
                  <div className="text-center p-4">
                    <div className="text-2xl font-bold text-primary mb-1">{item.roi}</div>
                    <div className="text-sm text-muted-foreground">{item.metric}</div>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {item.client}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
