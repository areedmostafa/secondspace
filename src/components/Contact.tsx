import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { Mail, Phone, MapPin, Instagram, Linkedin, Twitter, Send, Sparkles } from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { ref: leftRef, inView: leftInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: rightRef, inView: rightInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    business: '',
    budget: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Save to Supabase
      const { error: dbError } = await supabase
        .from('contact_submissions')
        .insert({
          name: formData.name,
          email: formData.email,
          business_type: formData.business,
          budget: formData.budget,
          message: formData.message
        });

      if (dbError) {
        throw dbError;
      }

      // Send notification email
      try {
        const { error: emailError } = await supabase.functions.invoke('send-contact-notification', {
          body: {
            name: formData.name,
            email: formData.email,
            business: formData.business,
            budget: formData.budget,
            message: formData.message
          }
        });

        if (emailError) {
          console.error('Email notification failed:', emailError);
        }
      } catch (emailError) {
        console.error('Email notification failed:', emailError);
      }

      toast({
        title: "Message Sent!",
        description: "We'll get back to you within 24 hours.",
      });

      setFormData({ name: '', email: '', business: '', budget: '', message: '' });
    } catch (error) {
      console.error('Form submission error:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactMethods = [
    { icon: Mail, label: 'Email Us', value: 'secondspaceteam@gmail.com' },
    { icon: Phone, label: 'Call Us', value: '+880 1312-290454' },
    { icon: MapPin, label: 'Visit Us', value: 'Nikunja 2, Dhaka 1229' },
  ];

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
  ];

  return (
    <section id="contact" className="py-24 bg-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Get In Touch
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Contact Info */}
          <div 
            ref={leftRef}
            className={`transition-all duration-700 ${
              leftInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to <span className="text-gradient">Start Growing</span>?
            </h2>
            <p className="text-xl text-muted-foreground mb-10">
              Let's discuss how our comprehensive digital marketing solutions can transform your brand's growth trajectory. From social media to web development—we've got you covered.
            </p>

            {/* Contact Methods with Glassmorphism */}
            <div className="space-y-4 mb-10">
              {contactMethods.map((method, index) => (
                <div 
                  key={index}
                  className="group relative p-1 rounded-2xl bg-gradient-to-r from-primary/50 via-accent/50 to-primary/50 hover:from-primary hover:via-accent hover:to-primary transition-all duration-500"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-background/80 backdrop-blur-xl border border-white/10">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <method.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">{method.label}</div>
                      <div className="text-muted-foreground">{method.value}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links with Glassmorphism */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="group relative p-0.5 rounded-xl bg-gradient-to-br from-primary/50 to-accent/50 hover:from-primary hover:to-accent transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-background/80 backdrop-blur-xl border border-white/10 flex items-center justify-center group-hover:bg-transparent transition-all duration-300">
                    <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-white transition-colors duration-300" />
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right Column - Contact Form with Glassmorphism */}
          <div 
            ref={rightRef}
            className={`relative p-0.5 rounded-3xl bg-gradient-to-br from-primary/50 via-accent/30 to-primary/50 transition-all duration-700 ${
              rightInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
            }`}
          >
            {/* Glow Effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-3xl blur-2xl opacity-50" />
            
            <div className="relative p-8 rounded-3xl bg-background/80 backdrop-blur-xl border border-white/10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <Send className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold">Send us a message</h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground">
                      Full Name *
                    </label>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className="bg-muted/50 backdrop-blur-sm border-white/10 focus:border-primary/50 focus:ring-primary/20 transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground">
                      Email Address *
                    </label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className="bg-muted/50 backdrop-blur-sm border-white/10 focus:border-primary/50 focus:ring-primary/20 transition-all duration-300"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="business" className="block text-sm font-medium mb-2 text-foreground">
                      Business Type
                    </label>
                    <select
                      id="business"
                      name="business"
                      value={formData.business}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="w-full px-3 py-2 bg-muted/50 backdrop-blur-sm border border-white/10 rounded-md focus:ring-2 focus:ring-primary/20 focus:border-primary/50 disabled:opacity-50 transition-all duration-300"
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
                    <label htmlFor="budget" className="block text-sm font-medium mb-2 text-foreground">
                      Monthly Budget
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="w-full px-3 py-2 bg-muted/50 backdrop-blur-sm border border-white/10 rounded-md focus:ring-2 focus:ring-primary/20 focus:border-primary/50 disabled:opacity-50 transition-all duration-300"
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
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground">
                    Tell us about your project
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    disabled={isSubmitting}
                    className="bg-muted/50 backdrop-blur-sm border-white/10 focus:border-primary/50 focus:ring-primary/20 transition-all duration-300"
                    placeholder="What are your social media goals? What challenges are you facing?"
                  />
                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white font-semibold py-3 rounded-xl shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 disabled:opacity-50"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
