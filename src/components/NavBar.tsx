import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import logo from '/logo.png';  // Use the uploaded logo

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Determine active section based on scroll position
      const sections = ['home', 'about', 'services', 'process', 'workshop', 'contact'];
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img 
              src={logo} 
              alt="The Dream Stairs Logo" 
              className="h-10 w-10 object-contain"
            />
            <div>
              <a 
                href="#home" 
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('home');
                }} 
                className="text-dreamstair-dark font-serif text-2xl font-bold transition-transform hover:scale-105"
              >
                The Dream Stairs
              </a>
              <span className="ml-2 text-dreamstair-muted text-xs font-light">since 2008</span>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {[
              { id: 'home', label: 'Home' },
              { id: 'about', label: 'About' },
              { id: 'services', label: 'Services' },
              { id: 'process', label: 'Process' },
              { id: 'workshop', label: 'Workshop' },
              { id: 'contact', label: 'Contact' }
            ].map(item => (
              <a 
                key={item.id}
                href={`#${item.id}`} 
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.id);
                }}
                className={`relative text-dreamstair-dark hover:text-dreamstair-accent transition-colors py-2 ${
                  activeSection === item.id ? 'after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-dreamstair-accent' : ''
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
          
          {/* Mobile Toggle Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              aria-label="Toggle Menu"
              className="transition-transform hover:scale-110"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div 
        className={`md:hidden bg-white border-t border-gray-200 absolute w-full overflow-hidden transition-all duration-500 ${
          isMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          {[
            { id: 'home', label: 'Home' },
            { id: 'about', label: 'About' },
            { id: 'services', label: 'Services' },
            { id: 'process', label: 'Process' },
            { id: 'workshop', label: 'Workshop' },
            { id: 'contact', label: 'Contact' }
          ].map(item => (
            <a 
              key={item.id}
              href={`#${item.id}`} 
              className={`text-dreamstair-dark hover:text-dreamstair-accent transition-colors py-2 ${
                activeSection === item.id ? 'font-semibold text-dreamstair-accent' : ''
              }`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.id);
              }}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
