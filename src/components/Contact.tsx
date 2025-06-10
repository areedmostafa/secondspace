
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    business: '',
    budget: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: '', email: '', business: '', budget: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Contact Info */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to <span className="text-gradient">Scale</span>?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's discuss how we can help you dominate social media and drive real business results.
            </p>

            {/* Contact Methods */}
            <div className="space-y-6 mb-8">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center mr-4">
                  📧
                </div>
                <div>
                  <div className="font-semibold">Email Us</div>
                  <div className="text-muted-foreground">areedmostafa@gmail.com</div>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center mr-4">
                  📱
                </div>
                <div>
                  <div className="font-semibold">Call Us</div>
                  <div className="text-muted-foreground">01777970739</div>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center mr-4">
                  📍
                </div>
                <div>
                  <div className="font-semibold">Visit Us</div>
                  <div className="text-muted-foreground">San Francisco, CA</div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="#" className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center hover:bg-primary hover:text-background transition-colors">
                📷
              </a>
              <a href="#" className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center hover:bg-primary hover:text-background transition-colors">
                💼
              </a>
              <a href="#" className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center hover:bg-primary hover:text-background transition-colors">
                🐦
              </a>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <Card className="bg-card border-border">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-background border-border"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-background border-border"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="business" className="block text-sm font-medium mb-2">
                      Business Type
                    </label>
                    <select
                      id="business"
                      name="business"
                      value={formData.business}
                      onChange={handleChange}
                      className="w-full px-3 py-2 bg-background border border-border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      <option value="">Select your industry</option>
                      <option value="ecommerce">E-commerce</option>
                      <option value="saas">SaaS</option>
                      <option value="luxury">Luxury</option>
                      <option value="fitness">Fitness</option>
                      <option value="beauty">Beauty</option>
                      <option value="food">Food & Beverage</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium mb-2">
                      Monthly Budget
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-3 py-2 bg-background border border-border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      <option value="">Select budget range</option>
                      <option value="500-1k">$500 - $1K</option>
                      <option value="1k-2k">$1K - $2K</option>
                      <option value="2k-3k">$2K - $3K</option>
                      <option value="3k-4k">$3K - $4K</option>
                      <option value="4k-5k">$4K - $5K</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Tell us about your project
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="bg-background border-border"
                    placeholder="What are your social media goals? What challenges are you facing?"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-gradient-accent hover:opacity-90 text-background font-semibold py-3"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
