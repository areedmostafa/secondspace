import { Card, CardContent } from '@/components/ui/card';
import { useInView } from 'react-intersection-observer';

const services = [
  {
    title: "Social Media Management",
    description: "Complete social media strategy, content creation, and community management across Instagram, TikTok, YouTube, LinkedIn, and Meta platforms.",
    icon: "📱",
    features: ["Cross-Platform Strategy", "Daily Content Creation", "Community Engagement", "Brand Voice Development"]
  },
  {
    title: "Paid Advertising",
    description: "High-ROI Meta Ads, TikTok Ads, and retargeting campaigns that convert your audience into customers and maximize your advertising spend.",
    icon: "🎯",
    features: ["Meta Advertising", "TikTok Campaigns", "Advanced Retargeting", "A/B Creative Testing"]
  },
  {
    title: "Web Development",
    description: "Custom website development, e-commerce solutions, and performance optimization that creates seamless user experiences and drives conversions.",
    icon: "💻",
    features: ["Custom Web Development", "E-commerce Platforms", "Mobile-First Design", "Speed & SEO Optimization"]
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
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Complete Digital <span className="text-gradient">Marketing Solutions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            As your global digital growth partner, we offer comprehensive services from social media management and paid advertising to web development, video editing, graphics design, and strategic consulting—everything you need to dominate your market.
          </p>
        </div>

        <div 
          ref={ref} 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:snap-y md:snap-mandatory overflow-y-auto"
          style={{ scrollSnapType: 'y mandatory' }}
        >
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`bg-card border-border hover-glow group cursor-pointer transition-all duration-700 snap-start ${
                inView 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 translate-x-20'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
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
