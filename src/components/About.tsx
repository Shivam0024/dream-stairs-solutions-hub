
import { ArrowRight } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="section-heading mb-8">About The Dream Stairs</h2>
            <p className="text-dreamstair-dark mb-6 text-lg">
              Since 2008, The Dream Stairs has been delivering exceptional interior solutions with a focus on definition and detailing. 
              We pride ourselves on providing 'Value for Money' project experiences for our clients.
            </p>
            <p className="text-dreamstair-dark mb-6 text-lg">
              Our expertise spans across multiple sectors, with a specialized focus on:
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <ArrowRight className="text-dreamstair-accent mr-2 mt-1 flex-shrink-0" size={18} />
                <span className="text-lg">Hospitality (Hotels, Resorts & Luxury Villas)</span>
              </li>
              <li className="flex items-start">
                <ArrowRight className="text-dreamstair-accent mr-2 mt-1 flex-shrink-0" size={18} />
                <span className="text-lg">Corporate Spaces (Offices, Banks, etc.)</span>
              </li>
            </ul>
            <p className="text-dreamstair-dark text-lg">
              Over the last 13 years, we have built an impressive portfolio by consistently delivering quality work 
              that exceeds our clients' expectations.
            </p>
          </div>
          <div className="order-1 md:order-2 grid grid-cols-2 gap-4">
            <div className="h-64 overflow-hidden rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1614551009825-8fe97057d6b1?q=80&w=1087&auto=format&fit=crop" 
                alt="Luxury hotel lobby" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-64 overflow-hidden rounded-lg mt-8">
              <img 
                src="https://images.unsplash.com/photo-1606744888344-493238951221?q=80&w=1074&auto=format&fit=crop" 
                alt="Corporate office design" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-64 overflow-hidden rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1287&auto=format&fit=crop" 
                alt="Luxury villa interior" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-64 overflow-hidden rounded-lg mt-8">
              <img 
                src="https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?q=80&w=1287&auto=format&fit=crop" 
                alt="Hotel room design" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
