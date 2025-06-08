import { Card, CardContent } from '@/components/ui/card';

const services = [
  {
    title: "Social Media Management",
    description: "Complete social media strategy, content creation, and community management across all platforms.",
    icon: "📱",
    features: ["Content Strategy", "Daily Posting", "Community Management", "Brand Voice Development"]
  },
  {
    title: "Paid Advertising",
    description: "ROI-focused Meta and TikTok advertising campaigns that convert browsers into buyers.",
    icon: "🎯",
    features: ["Meta Ads", "TikTok Ads", "Retargeting", "Creative Testing"]
  },
  {
    title: "Web Development",
    description: "Custom website development and optimization to create powerful digital experiences that convert.",
    icon: "💻",
    features: ["Custom Websites", "E-commerce Solutions", "Mobile Optimization", "Performance Tuning"]
  },
  {
    title: "Video Editing",
    description: "Professional video editing services for social media, ads, and promotional content that captivates audiences.",
    icon: "🎬",
    features: ["Social Media Videos", "Ad Creatives", "Promotional Content", "Motion Graphics"]
  },
  {
    title: "Graphics Design",
    description: "Eye-catching visual designs for social media, branding, and marketing materials that drive engagement.",
    icon: "🎨",
    features: ["Social Media Graphics", "Brand Identity", "Marketing Materials", "Logo Design"]
  },
  {
    title: "Strategy Consulting",
    description: "Expert guidance on social media strategy, platform optimization, and growth planning.",
    icon: "🧠",
    features: ["Strategy Audit", "Platform Optimization", "Growth Planning", "Team Training"]
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive social media solutions designed to scale your brand and drive measurable results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-card border-border hover-glow group cursor-pointer">
              <CardContent className="p-8">
                <div className="text-4xl mb-4 group-hover:animate-float">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
