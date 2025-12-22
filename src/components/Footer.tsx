import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Twitter, Mail, ArrowUpRight } from 'lucide-react';

const Footer = () => {
  const services = [
    { name: 'Social Media Management', href: '/services/social-media-management' },
    { name: 'Paid Advertising', href: '/services/paid-advertising' },
    { name: 'Web Development', href: '/services/web-development' },
    { name: 'Video Editing', href: '/services/video-editing' },
    { name: 'Graphics Design', href: '/services/graphics-design' },
    { name: 'Strategy Consulting', href: '/services/strategy-consulting' },
    { name: 'App Development', href: '/services/app-development' },
    { name: 'Software Development', href: '/services/software-development' },
    { name: 'UI/UX Design', href: '/services/ui-ux-design' },
    { name: 'AI Automation', href: '/services/ai-automation' },
  ];

  const company = [
    { name: 'About Us', href: '/about' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/#contact' },
  ];

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
  ];

  return (
    <footer className="relative bg-background border-t border-white/10 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <div className="text-2xl font-bold text-gradient">SECONDSPACE</div>
            </Link>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Global digital growth partner delivering comprehensive marketing solutions from social media and paid ads to web development and strategic consulting.
            </p>
            
            {/* Social Links with Glassmorphism */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="group relative p-0.5 rounded-xl bg-gradient-to-br from-primary/30 to-accent/30 hover:from-primary hover:to-accent transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-background/80 backdrop-blur-xl border border-white/10 flex items-center justify-center group-hover:bg-transparent transition-all duration-300">
                    <social.icon className="w-4 h-4 text-muted-foreground group-hover:text-white transition-colors duration-300" />
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="font-semibold text-foreground mb-6 flex items-center gap-2">
              <div className="w-1 h-4 bg-gradient-to-b from-primary to-accent rounded-full" />
              Services
            </h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link 
                    to={service.href}
                    className="group flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    <span>{service.name}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="font-semibold text-foreground mb-6 flex items-center gap-2">
              <div className="w-1 h-4 bg-gradient-to-b from-primary to-accent rounded-full" />
              Company
            </h3>
            <ul className="space-y-3">
              {company.map((item, index) => (
                <li key={index}>
                  <Link 
                    to={item.href}
                    className="group flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    <span>{item.name}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Section with Glassmorphism */}
          <div>
            <h3 className="font-semibold text-foreground mb-6 flex items-center gap-2">
              <div className="w-1 h-4 bg-gradient-to-b from-primary to-accent rounded-full" />
              Stay Updated
            </h3>
            <p className="text-muted-foreground mb-4">
              Get the latest digital marketing insights and growth strategies.
            </p>
            
            {/* Newsletter Form with Glassmorphism */}
            <div className="relative p-0.5 rounded-xl bg-gradient-to-r from-primary/30 via-accent/30 to-primary/30">
              <div className="flex rounded-xl bg-background/80 backdrop-blur-xl border border-white/10 overflow-hidden">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-transparent border-none focus:outline-none focus:ring-0 text-foreground placeholder:text-muted-foreground"
                />
                <button className="px-4 py-3 bg-gradient-to-r from-primary to-accent text-white font-medium hover:opacity-90 transition-opacity flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © 2024 SecondSpace Agency. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link 
                to="/privacy-policy" 
                className="text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Privacy Policy
              </Link>
              <Link 
                to="/terms-of-service" 
                className="text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
