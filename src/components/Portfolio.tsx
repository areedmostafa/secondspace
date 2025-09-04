
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const portfolioItems = [
  {
    id: 1,
    client: "LuxuryFashion UK",
    industry: "luxury",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=500&h=300&fit=crop",
    logo: "/lovable-uploads/4d572232-8151-407e-b663-27889d74856a.png",
    roi: "+450% ROI",
    metric: "2.3M Global Reach",
    description: "Complete digital transformation with luxury branding, social media, and e-commerce development"
  },
  {
    id: 4,
    client: "Urban Fitness Network",
    industry: "fitness",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=300&fit=crop",
    logo: "/lovable-uploads/a680ff20-6c40-4339-800d-a8c737b4f62e.png",
    roi: "+500% ROI",
    metric: "150K Community",
    description: "Global fitness community growth through integrated social media and web development"
  },
  {
    id: 5,
    client: "Belle Cosmetics",
    industry: "beauty",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=500&h=300&fit=crop",
    logo: "/lovable-uploads/5d9e915a-0e23-45bc-a328-5309f5140dfb.png",
    roi: "+600% ROI",
    metric: "8M Video Views",
    description: "Viral beauty content strategy with video production and influencer partnerships"
  },
  {
    id: 6,
    client: "Organic Wellness",
    industry: "food",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500&h=300&fit=crop",
    logo: "/lovable-uploads/c7c25487-d0fd-437f-886c-36bd94c4b8e6.png",
    roi: "+400% ROI",
    metric: "60% Intl Sales",
    description: "International expansion through multi-platform campaigns and e-commerce optimization"
  },
  {
    id: 7,
    client: "TechFlow Solutions",
    industry: "saas",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500&h=300&fit=crop",
    logo: "/lovable-uploads/bbce0636-07b5-4475-beca-f1295cdc1d1a.png",
    roi: "+400% Leads",
    metric: "B2B Growth",
    description: "B2B lead generation through LinkedIn marketing, web development, and strategic consulting"
  },
  {
    id: 8,
    client: "Global Nutrition",
    industry: "healthcare",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=500&h=300&fit=crop",
    logo: "/lovable-uploads/edcbb890-2f46-444c-9e29-df8e2f74b71f.png",
    roi: "+350% ROI",
    metric: "EU Market Lead",
    description: "European market domination through strategic social campaigns and regulatory compliance"
  }
];

const industries = ["all", "luxury", "fitness", "beauty", "food", "saas", "healthcare"];

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
            Success <span className="text-gradient">Stories</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            From social media management and paid advertising to web development and creative design—see how our comprehensive digital marketing solutions deliver exceptional results for brands worldwide.
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
                <div 
                  className="w-full h-48 bg-contain bg-center bg-no-repeat transition-transform duration-300 group-hover:scale-110 bg-muted"
                  style={{
                    backgroundImage: `url(${item.logo})`,
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center">
                  <div className="text-center p-4">
                    <div className="text-2xl font-bold text-primary mb-1">{item.roi}</div>
                    <div className="text-sm text-muted-foreground">{item.metric}</div>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors">
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
