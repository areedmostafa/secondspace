
import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';

const testimonials = [
  {
    name: "Sarah Chen",
    title: "CEO, LuxuryFashion Co.",
    content: "Scaled transformed our social media presence completely. Our engagement increased by 400% and we're seeing direct sales from social for the first time.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b9e0?w=100&h=100&fit=crop&crop=face"
  },
  {
    name: "Michael Rodriguez",
    title: "Founder, TechStart SaaS",
    content: "The ROI we've seen from our social media campaigns is incredible. Scaled's data-driven approach helped us scale from 0 to 50K leads in 6 months.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
  },
  {
    name: "Emma Thompson",
    title: "Marketing Director, EcoCommerce",
    content: "Working with Scaled has been game-changing. Their creative team produces content that our audience actually engages with, not just scrolls past.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
  },
  {
    name: "David Park",
    title: "Owner, FitnessPro",
    content: "The community they built around our brand is incredible. We went from 5K to 100K followers in 8 months, and more importantly, our revenue tripled.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
  },
  {
    name: "Rashid Ahmed",
    title: "Founder, MadKoffee",
    content: "As a Bangladeshi entrepreneur, I was skeptical about digital marketing. But Scaled's team understood our local market perfectly while giving us global reach. Our coffee brand went viral across South Asia!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face"
  },
  {
    name: "Dr. Fatima Khan",
    title: "Director, LifeSpring Healthcare",
    content: "Scaled helped us build trust in healthcare through authentic storytelling. Patient inquiries increased by 300% and we're now the most recognized healthcare brand in Dhaka. Exceptional work!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop&crop=face"
  },
  {
    name: "Aminul Hasan",
    title: "Owner, Beans & Aroma",
    content: "From a small café in Dhanmondi to multiple locations across Bangladesh - Scaled's social media strategy made this possible. They captured the essence of our Bengali hospitality perfectly.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
  },
  {
    name: "Jennifer Liu",
    title: "Brand Manager, The Mall",
    content: "The beauty campaigns Scaled created for us were absolutely stunning. Our Instagram became a destination, not just a store page. Sales through social increased by 520%!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face"
  },
  {
    name: "Sakib Rahman",
    title: "CEO, Nutrition Depot",
    content: "Breaking into the Bangladeshi fitness market seemed impossible until we partnered with Scaled. They created culturally relevant content that resonated with our audience. We now have the largest fitness community in Bangladesh!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
  },
  {
    name: "Maria Santos",
    title: "Manager, The Grove Bistro",
    content: "Our fine dining restaurant was struggling to attract younger customers. Scaled's Instagram strategy transformed us into the most Instagrammable restaurant in the city. Reservations are booked weeks in advance now!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b9e0?w=100&h=100&fit=crop&crop=face"
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
            What Our <span className="text-gradient">Clients Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with Scaled.
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
                <div className="flex items-center justify-center">
                  <img 
                    src={testimonials[currentIndex].image} 
                    alt={testimonials[currentIndex].name}
                    className="w-16 h-16 rounded-full mr-4"
                  />
                  <div className="text-left">
                    <div className="font-semibold">{testimonials[currentIndex].name}</div>
                    <div className="text-muted-foreground">{testimonials[currentIndex].title}</div>
                  </div>
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
