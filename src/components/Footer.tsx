
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-dreamstair-dark text-white">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <h3 className="font-serif text-2xl font-bold mb-4">The Dream Stairs</h3>
            <p className="text-gray-400 mb-4">
              Crafting exceptional interior solutions since 2008. We transform spaces into extraordinary experiences.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-dreamstair-accent transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-dreamstair-accent transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-dreamstair-accent transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-dreamstair-accent transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
              <li><a href="#process" className="text-gray-400 hover:text-white transition-colors">Process</a></li>
              <li><a href="#workshop" className="text-gray-400 hover:text-white transition-colors">Workshop</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Hospitality Interiors</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Corporate Spaces</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Custom Furniture</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Project Management</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Value Engineering</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>123 Interior Boulevard,</li>
              <li>Design District,</li>
              <li>New York, NY 10001</li>
              <li className="pt-2">info@dreamstairs.com</li>
              <li>+1 (234) 567-8901</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {currentYear} The Dream Stairs. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
