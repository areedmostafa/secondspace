import { useInView } from 'react-intersection-observer';
import { 
  Smartphone, 
  Target, 
  Globe, 
  Video, 
  Palette, 
  Brain, 
  Cpu, 
  Code2, 
  Figma, 
  Zap,
  ArrowRight,
  LucideIcon
} from 'lucide-react';

interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
  gradient: string;
}

const services: Service[] = [
  {
    title: "Social Media Management",
    description: "Complete strategy, content creation, and community management across all major platforms.",
    icon: Smartphone,
    features: ["Cross-Platform Strategy", "Daily Content Creation", "Community Engagement", "Brand Voice"],
    gradient: "from-rose-500 to-orange-500"
  },
  {
    title: "Paid Advertising",
    description: "High-ROI Meta & TikTok Ads with advanced retargeting that converts.",
    icon: Target,
    features: ["Meta Advertising", "TikTok Campaigns", "Retargeting", "A/B Testing"],
    gradient: "from-violet-500 to-purple-500"
  },
  {
    title: "Web Development",
    description: "Custom websites and e-commerce solutions built for performance and conversion.",
    icon: Globe,
    features: ["Custom Development", "E-commerce", "Mobile-First", "SEO Optimization"],
    gradient: "from-cyan-500 to-blue-500"
  },
  {
    title: "App Development",
    description: "Native and cross-platform mobile apps that deliver exceptional user experiences.",
    icon: Cpu,
    features: ["iOS & Android", "Cross-Platform", "App Store Launch", "Ongoing Support"],
    gradient: "from-emerald-500 to-teal-500"
  },
  {
    title: "Software Development",
    description: "Custom software solutions and SaaS products tailored to your business needs.",
    icon: Code2,
    features: ["Custom Software", "SaaS Products", "API Integration", "Cloud Solutions"],
    gradient: "from-amber-500 to-yellow-500"
  },
  {
    title: "UI/UX Design",
    description: "Human-centered design that creates intuitive, engaging digital experiences.",
    icon: Figma,
    features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
    gradient: "from-pink-500 to-rose-500"
  },
  {
    title: "Video Editing",
    description: "Professional video content for social media, ads, and promotional campaigns.",
    icon: Video,
    features: ["Social Videos", "Ad Creatives", "Motion Graphics", "Reels & Shorts"],
    gradient: "from-red-500 to-pink-500"
  },
  {
    title: "Graphics Design",
    description: "Eye-catching visuals for branding and marketing that drive engagement.",
    icon: Palette,
    features: ["Brand Identity", "Social Graphics", "Marketing Materials", "Logo Design"],
    gradient: "from-indigo-500 to-violet-500"
  },
  {
    title: "AI Automation",
    description: "Intelligent automation solutions that streamline workflows and boost efficiency.",
    icon: Zap,
    features: ["Workflow Automation", "AI Chatbots", "Data Processing", "Smart Analytics"],
    gradient: "from-fuchsia-500 to-purple-500"
  },
  {
    title: "Strategy Consulting",
    description: "Expert guidance on digital strategy, optimization, and growth planning.",
    icon: Brain,
    features: ["Strategy Audit", "Growth Planning", "Platform Optimization", "Team Training"],
    gradient: "from-orange-500 to-amber-500"
  }
];

const ServiceCard = ({ service, index, inView }: { service: Service; index: number; inView: boolean }) => {
  const Icon = service.icon;
  
  return (
    <div 
      className={`group relative cursor-pointer transition-all duration-700 ${
        inView 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-12'
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      {/* Glassmorphism Card */}
      <div className="relative h-full rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl overflow-hidden transition-all duration-500 group-hover:border-white/20 group-hover:bg-white/[0.05] group-hover:scale-[1.02] group-hover:shadow-2xl group-hover:shadow-primary/10">
        
        {/* Animated gradient border on hover */}
        <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r ${service.gradient} p-[1px]`}>
          <div className="h-full w-full rounded-2xl bg-background/95" />
        </div>
        
        {/* Background glow effect */}
        <div className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-20 blur-3xl transition-all duration-700 group-hover:scale-150`} />
        
        {/* Content */}
        <div className="relative z-10 p-8 h-full flex flex-col">
          {/* Icon container with gradient background */}
          <div className="relative mb-6">
            <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} p-[1px] transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
              <div className="w-full h-full rounded-xl bg-background/90 flex items-center justify-center backdrop-blur-sm">
                <Icon className="w-6 h-6 text-foreground transition-all duration-300 group-hover:scale-110" />
              </div>
            </div>
            {/* Pulse effect behind icon */}
            <div className={`absolute inset-0 w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-40 blur-xl transition-all duration-500 animate-pulse`} />
          </div>
          
          {/* Title */}
          <h3 className="text-xl font-bold mb-3 text-foreground transition-colors duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-foreground group-hover:to-foreground/70">
            {service.title}
          </h3>
          
          {/* Description */}
          <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
            {service.description}
          </p>
          
          {/* Features with accent dots */}
          <div className="space-y-2.5 mb-6">
            {service.features.map((feature, featureIndex) => (
              <div key={featureIndex} className="flex items-center gap-3 text-sm text-muted-foreground/80 group-hover:text-muted-foreground transition-colors duration-300">
                <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.gradient} opacity-60 group-hover:opacity-100 transition-opacity duration-300`} />
                <span>{feature}</span>
              </div>
            ))}
          </div>
          
          {/* Explore link - reveals on hover */}
          <div className="flex items-center gap-2 text-sm font-medium opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
            <span className={`bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
              Explore Service
            </span>
            <ArrowRight className={`w-4 h-4 text-primary transition-transform duration-300 group-hover:translate-x-1`} />
          </div>
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="services" className="py-24 bg-background relative overflow-hidden">
      {/* Subtle background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl opacity-30" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 mb-6">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Full-Service Digital Agency</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Complete Digital{' '}
            <span className="text-gradient">Growth Solutions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From strategy to execution, we deliver end-to-end digital solutions that transform brands and accelerate growth across every touchpoint.
          </p>
        </div>

        {/* Services Grid */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
