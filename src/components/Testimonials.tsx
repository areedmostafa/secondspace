
import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';

const testimonials = [
  {
    name: "Sarah Chen",
    title: "CEO, LuxuryFashion UK",
    content: "Scaled transformed our entire digital presence. Our social media engagement increased by 400% and we're seeing direct sales conversions from every platform. Their full-service approach saved us from managing multiple agencies.",
    rating: 5
  },
  {
    name: "Michael Rodriguez",
    title: "Founder, TechStart SaaS",
    content: "The ROI we've achieved is incredible. Scaled's integrated approach—from social media to web development—helped us scale from 0 to 50K leads in 6 months. They're true growth partners.",
    rating: 5
  },
  {
    name: "Emma Thompson",
    title: "Marketing Director, EcoCommerce",
    content: "Working with Scaled has been game-changing. Their creative team produces scroll-stopping content while their strategic consulting keeps us ahead of trends. Revenue increased 300% in our first year.",
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
    content: "As a French beauty brand entering the US market, Scaled's cultural expertise was invaluable. Their video content and web development work positioned us perfectly for international success.",
    rating: 5
  },
  {
    name: "David Park",
    title: "CEO, Urban Fitness Network",
    content: "Scaled's comprehensive approach is unmatched. From strategy consulting to creative execution, they've built our brand into a global fitness community. ROI exceeded 500% in our first 18 months.",
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
    content: "Scaling from Italy to global markets seemed impossible until we partnered with Scaled. Their understanding of luxury branding and international social media trends is exceptional.",
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
    content: "Scaled helped us dominate the European wellness market through strategic social media campaigns and stunning web development. Their full-service approach is truly world-class.",
    rating: 5
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Client <span className="text-gradient">Success Stories</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover how brands worldwide achieve exceptional growth through our comprehensive digital marketing solutions.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-card border-border">
            <CardContent className="p-8 md:p-12">
              <div className="text-center">
                {/* Stars */}
                <div className="flex justify-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-6 h-6 text-secondary mx-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  ))}
                </div>

                {/* Testimonial Content */}
                <blockquote className="text-xl md:text-2xl font-medium mb-8 leading-relaxed">
                  "{testimonials[currentIndex].content}"
                </blockquote>

                {/* Author */}
                <div className="text-center">
                  <div className="font-semibold">{testimonials[currentIndex].name}</div>
                  <div className="text-muted-foreground">{testimonials[currentIndex].title}</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-primary' : 'bg-muted'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
