
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="#" className="text-dreamstair-dark font-serif text-2xl font-bold">
              The Dream Stairs
            </a>
            <span className="ml-2 text-dreamstair-muted text-xs font-light">since 2008</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-dreamstair-dark hover:text-dreamstair-accent transition-colors">Home</a>
            <a href="#about" className="text-dreamstair-dark hover:text-dreamstair-accent transition-colors">About</a>
            <a href="#services" className="text-dreamstair-dark hover:text-dreamstair-accent transition-colors">Services</a>
            <a href="#process" className="text-dreamstair-dark hover:text-dreamstair-accent transition-colors">Process</a>
            <a href="#workshop" className="text-dreamstair-dark hover:text-dreamstair-accent transition-colors">Workshop</a>
            <a href="#contact" className="text-dreamstair-dark hover:text-dreamstair-accent transition-colors">Contact</a>
          </div>
          
          {/* Mobile Toggle Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 absolute w-full">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a href="#home" className="text-dreamstair-dark hover:text-dreamstair-accent transition-colors py-2" onClick={toggleMenu}>Home</a>
            <a href="#about" className="text-dreamstair-dark hover:text-dreamstair-accent transition-colors py-2" onClick={toggleMenu}>About</a>
            <a href="#services" className="text-dreamstair-dark hover:text-dreamstair-accent transition-colors py-2" onClick={toggleMenu}>Services</a>
            <a href="#process" className="text-dreamstair-dark hover:text-dreamstair-accent transition-colors py-2" onClick={toggleMenu}>Process</a>
            <a href="#workshop" className="text-dreamstair-dark hover:text-dreamstair-accent transition-colors py-2" onClick={toggleMenu}>Workshop</a>
            <a href="#contact" className="text-dreamstair-dark hover:text-dreamstair-accent transition-colors py-2" onClick={toggleMenu}>Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
