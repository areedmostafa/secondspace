import Counter from '@/components/Counter';
import { useInView } from 'react-intersection-observer';
import { Globe, Zap, TrendingUp, Palette, Sparkles, ArrowRight } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface WhyChooseItem {
  title: string;
  description: string;
  icon: LucideIcon;
  gradient: string;
}

const whyChooseUs: WhyChooseItem[] = [
  {
    title: "Global Reach, Local Expertise",
    description: "Serving clients worldwide with deep understanding of local markets and global trends",
    icon: Globe,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "Full-Service Solutions",
    description: "Complete digital marketing ecosystem from strategy to execution under one roof",
    icon: Zap,
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "Proven ROI Results",
    description: "Average 330% ROI with transparent reporting and real-time performance tracking",
    icon: TrendingUp,
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    title: "Creative & Technical Excellence",
    description: "Award-winning creative team combined with cutting-edge development expertise",
    icon: Palette,
    gradient: "from-orange-500 to-red-500",
  }
];

const About = () => {
  const { ref: contentRef, inView: contentInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: cardsRef, inView: cardsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: missionRef, inView: missionInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div 
            ref={contentRef}
            className={`transition-all duration-700 ${
              contentInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
            }`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">About SecondSpace</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Your Trusted Global{' '}
              <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                Growth Partner
              </span>
            </h2>
            
            <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
              SecondSpace isn't just a social media marketing agency—we're your complete digital growth partner. From social media management to web development, video production to strategic consulting, we deliver end-to-end solutions that transform brands worldwide.
            </p>
            
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              With clients across the UK, US, Europe, and beyond, our global team combines creative excellence with data-driven strategies to deliver measurable results. We've helped over 50 brands achieve exponential growth through comprehensive digital marketing solutions.
            </p>
            
            {/* Team Stats */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { end: 5, suffix: "+", label: "Years Experience" },
                { end: 15, suffix: "+", label: "Team Members" },
              ].map((stat, index) => (
                <div 
                  key={index}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative bg-card/40 backdrop-blur-xl border border-border/30 rounded-2xl p-6 group-hover:border-primary/30 transition-all duration-300">
                    <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                      <Counter end={stat.end} suffix={stat.suffix} />
                    </div>
                    <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Why Choose Us Cards */}
          <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon;
              return (
                <div 
                  key={index}
                  className={`group relative transition-all duration-700 ${
                    cardsInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  {/* Glassmorphism Card */}
                  <div className="relative rounded-2xl overflow-hidden h-full">
                    {/* Gradient Border Effect */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm`} />
                    
                    {/* Card Content */}
                    <div className="relative bg-card/40 backdrop-blur-xl border border-border/30 rounded-2xl p-6 m-[1px] h-full transition-all duration-500 group-hover:bg-card/60 group-hover:border-primary/30">
                      {/* Icon Background Glow */}
                      <div className={`absolute top-4 right-4 w-20 h-20 bg-gradient-to-r ${item.gradient} rounded-full blur-2xl opacity-10 group-hover:opacity-30 transition-opacity duration-500`} />
                      
                      {/* Icon */}
                      <div className={`relative w-12 h-12 bg-gradient-to-r ${item.gradient} rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      
                      {/* Content */}
                      <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                        {item.title}
                      </h3>
                      
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mission Statement */}
        <div 
          ref={missionRef}
          className={`mt-24 transition-all duration-700 ${
            missionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="relative max-w-4xl mx-auto">
            {/* Background Glow */}
            <div className="absolute -inset-8 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 rounded-3xl blur-2xl" />
            
            {/* Glassmorphism Card */}
            <div className="relative bg-card/40 backdrop-blur-xl border border-border/30 rounded-3xl p-10 md:p-12 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-2xl mb-6 shadow-lg">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold mb-6">
                Our{' '}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Mission
                </span>
              </h3>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                "To be the global growth partner that transforms businesses through comprehensive digital marketing solutions. 
                We don't just build followers—we build businesses. From social media and paid ads to web development and strategic consulting, 
                we deliver integrated solutions that turn digital presence into measurable business growth worldwide."
              </p>
              
              {/* Learn More Link */}
              <div className="mt-8">
                <a 
                  href="/about" 
                  className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all duration-300"
                >
                  <span>Learn more about us</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
