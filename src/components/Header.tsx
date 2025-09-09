
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleSectionNavigation = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleGetAuditClick = () => {
    handleSectionNavigation('contact');
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 py-0">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/59539676-ad9d-4b27-aeba-bde1cbf7dd1b.png" 
              alt="SecondSpace Logo" 
              className="h-20 w-auto transition-all duration-300 hover:scale-105" 
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => handleSectionNavigation('services')} className="text-foreground hover:text-primary transition-colors">
              Services
            </button>
            <a href="/portfolio" className="text-foreground hover:text-primary transition-colors">
              Portfolio
            </a>
            <a href="/case-studies" className="text-foreground hover:text-primary transition-colors">
              Case Studies
            </a>
            <button onClick={() => handleSectionNavigation('about')} className="text-foreground hover:text-primary transition-colors">
              About
            </button>
            <button onClick={() => handleSectionNavigation('contact')} className="text-foreground hover:text-primary transition-colors">
              Contact
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button onClick={handleGetAuditClick} className="bg-gradient-accent hover:opacity-90 text-background font-semibold">
              Get Free Audit
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-foreground" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 12H21M3 6H21M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              <button onClick={() => handleSectionNavigation('services')} className="text-foreground hover:text-primary transition-colors text-left">
                Services
              </button>
              <a href="/portfolio" className="text-foreground hover:text-primary transition-colors">
                Portfolio
              </a>
              <a href="/case-studies" className="text-foreground hover:text-primary transition-colors">
                Case Studies
              </a>
              <button onClick={() => handleSectionNavigation('about')} className="text-foreground hover:text-primary transition-colors text-left">
                About
              </button>
              <button onClick={() => handleSectionNavigation('contact')} className="text-foreground hover:text-primary transition-colors text-left">
                Contact
              </button>
              <Button onClick={handleGetAuditClick} className="bg-gradient-accent hover:opacity-90 text-background font-semibold w-full mt-4">
                Get Free Audit
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
