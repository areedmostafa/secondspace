import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { useInView } from 'react-intersection-observer';

const testimonials = [
  {
    name: "Sarah Chen",
    title: "CEO, LuxuryFashion UK",
    content: "SecondSpace transformed our entire digital presence. Our social media engagement increased by 400% and we're seeing direct sales conversions from every platform. Their full-service approach saved us from managing multiple agencies.",
    rating: 5
  },
  {
    name: "Michael Rodriguez",
    title: "Founder, TechStart SaaS",
    content: "The ROI we've achieved is incredible. SecondSpace's integrated approach—from social media to web development—helped us scale from 0 to 50K leads in 6 months. They're true growth partners.",
    rating: 5
  },
  {
    name: "Emma Thompson",
    title: "Marketing Director, EcoCommerce",
    content: "Working with SecondSpace has been game-changing. Their creative team produces scroll-stopping content while their strategic consulting keeps us ahead of trends. Revenue increased 300% in our first year.",
    rating: 5
  },
  {
    name: "James Wilson",
    title: "Owner, FitnessPro London",
    content: "The global reach they provided was exactly what we needed. From social media management to paid ads, they helped us expand from the UK to international markets. Followers grew from 5K to 150K.",
    rating: 5
  },
  {
    name: "Sophie Laurent",
    title: "Brand Director, Belle Cosmetics",
    content: "As a French beauty brand entering the US market, SecondSpace's cultural expertise was invaluable. Their video content and web development work positioned us perfectly for international success.",
    rating: 5
  },
  {
    name: "David Park",
    title: "CEO, Urban Fitness Network",
    content: "SecondSpace's comprehensive approach is unmatched. From strategy consulting to creative execution, they've built our brand into a global fitness community. ROI exceeded 500% in our first 18 months.",
    rating: 5
  },
  {
    name: "Maria Santos",
    title: "Founder, Organic Wellness",
    content: "Their expertise in both social media marketing and e-commerce development was exactly what our wellness brand needed. International sales now account for 60% of our revenue.",
    rating: 5
  },
  {
    name: "Alessandro Romano",
    title: "Owner, Milano Fashion House",
    content: "Scaling from Italy to global markets seemed impossible until we partnered with SecondSpace. Their understanding of luxury branding and international social media trends is exceptional.",
    rating: 5
  },
  {
    name: "Lisa Anderson",
    title: "Marketing Director, TechFlow Solutions",
    content: "The integrated approach—combining social media marketing, web development, and strategic consulting—delivered results we never thought possible. B2B lead generation increased by 400%.",
    rating: 5
  },
  {
    name: "Carlos Mendoza",
    title: "CEO, Global Nutrition",
    content: "SecondSpace helped us dominate the European wellness market through strategic social media campaigns and stunning web development. Their full-service approach is truly world-class.",
    rating: 5
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div 
          ref={ref}
          className={`text-center mb-16 transition-all duration-1000 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Client Success Stories
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real results from real partnerships. See how we've helped brands achieve remarkable growth.
          </p>
        </div>

        <div 
          className={`max-w-4xl mx-auto transition-all duration-1000 ${
            inView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <Card className="bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border-primary/20 shadow-2xl shadow-primary/5 transition-all duration-700 hover:shadow-primary/10 hover:border-primary/30">
            <CardContent className="p-8 md:p-12 relative">
              {/* Quote icon */}
              <div className="absolute top-6 left-6 text-primary/10 text-6xl font-serif">"</div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-center gap-2 mb-6 animate-fade-in">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <span 
                      key={i} 
                      className="text-primary text-2xl transition-all duration-300 hover:scale-125 inline-block"
                      style={{ 
                        animationDelay: `${i * 100}ms`,
                        animation: 'fade-in 0.5s ease-out forwards'
                      }}
                    >
                      ★
                    </span>
                  ))}
                </div>
                
                <p className="text-xl md:text-2xl mb-8 leading-relaxed text-foreground text-center animate-fade-in" style={{ animationDelay: '200ms' }}>
                  {testimonials[currentIndex].content}
                </p>
                
                <div className="flex items-center justify-center gap-4 pt-6 border-t border-border/50 animate-fade-in" style={{ animationDelay: '400ms' }}>
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/30 to-purple-500/30 flex items-center justify-center font-bold text-lg">
                    {testimonials[currentIndex].name.charAt(0)}
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-lg">{testimonials[currentIndex].name}</p>
                    <p className="text-muted-foreground">{testimonials[currentIndex].title}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-3 rounded-full transition-all duration-500 ${
                  index === currentIndex 
                    ? 'bg-gradient-to-r from-primary to-purple-400 w-12 shadow-lg shadow-primary/50' 
                    : 'bg-muted-foreground/20 hover:bg-muted-foreground/40 w-3'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
