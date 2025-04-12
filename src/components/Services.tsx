
import { Hotel, Building2, Ruler, Banknote } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  return (
    <section id="services" className="py-20 bg-dreamstair-light">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="section-heading">Our Services</h2>
          <p className="mt-4 text-dreamstair-muted text-lg max-w-3xl mx-auto">
            We specialize in comprehensive interior solutions tailored to your specific needs.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center text-2xl font-serif">
                <Hotel className="mr-3 text-dreamstair-accent" size={24} />
                Hospitality Spaces
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-dreamstair-dark">
                We create stunning interiors for hotels, resorts, and luxury villas. Our designs blend elegance 
                with functionality, ensuring a memorable experience for guests while optimizing operational efficiency.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start">
                  <span className="text-dreamstair-accent mr-2">•</span>
                  <span>Hotel Lobbies & Reception Areas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-dreamstair-accent mr-2">•</span>
                  <span>Guest Rooms & Suites</span>
                </li>
                <li className="flex items-start">
                  <span className="text-dreamstair-accent mr-2">•</span>
                  <span>Restaurants & Bars</span>
                </li>
                <li className="flex items-start">
                  <span className="text-dreamstair-accent mr-2">•</span>
                  <span>Luxury Villa Interiors</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center text-2xl font-serif">
                <Building2 className="mr-3 text-dreamstair-accent" size={24} />
                Corporate Solutions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-dreamstair-dark">
                We design professional environments that reflect your brand identity while enhancing productivity and 
                comfort for employees and clients alike.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start">
                  <span className="text-dreamstair-accent mr-2">•</span>
                  <span>Office Spaces & Workstations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-dreamstair-accent mr-2">•</span>
                  <span>Conference & Meeting Rooms</span>
                </li>
                <li className="flex items-start">
                  <span className="text-dreamstair-accent mr-2">•</span>
                  <span>Reception Areas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-dreamstair-accent mr-2">•</span>
                  <span>Banking & Financial Institutions</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center text-2xl font-serif">
                <Ruler className="mr-3 text-dreamstair-accent" size={24} />
                Custom Craftsmanship
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-dreamstair-dark">
                Our in-house workshop produces custom-made furniture, panels, doors, and more, ensuring the highest 
                quality and perfect fit for your space.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start">
                  <span className="text-dreamstair-accent mr-2">•</span>
                  <span>Custom Furniture Manufacturing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-dreamstair-accent mr-2">•</span>
                  <span>Wood, Laminate & Veneer Panels</span>
                </li>
                <li className="flex items-start">
                  <span className="text-dreamstair-accent mr-2">•</span>
                  <span>Custom Flush & Fire Doors</span>
                </li>
                <li className="flex items-start">
                  <span className="text-dreamstair-accent mr-2">•</span>
                  <span>Metal & S.S. Works</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center text-2xl font-serif">
                <Banknote className="mr-3 text-dreamstair-accent" size={24} />
                Value Engineering
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-dreamstair-dark">
                We focus on providing 'Value for Money' solutions without compromising on quality or aesthetics, 
                ensuring efficient use of resources and budget optimization.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start">
                  <span className="text-dreamstair-accent mr-2">•</span>
                  <span>Budget Optimization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-dreamstair-accent mr-2">•</span>
                  <span>Material Selection Consulting</span>
                </li>
                <li className="flex items-start">
                  <span className="text-dreamstair-accent mr-2">•</span>
                  <span>Cost-Effective Design Solutions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-dreamstair-accent mr-2">•</span>
                  <span>Efficient Project Implementation</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;
