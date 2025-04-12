
import { 
  ArrowRight, 
  Box, 
  CheckSquare, 
  Drill, 
  Hammer, 
  PackagePlus, 
  Paintbrush, 
  Sofa 
} from "lucide-react";

const Workshop = () => {
  const processSteps = [
    { 
      icon: Box, 
      title: "Material Stocking", 
      description: "Wood & Raw Material procurement and storage" 
    },
    { 
      icon: Drill, 
      title: "Processing", 
      description: "Processing the Wood/materials according to requirements" 
    },
    { 
      icon: Hammer, 
      title: "Assembly", 
      description: "Precision assembly of all components" 
    },
    { 
      icon: CheckSquare, 
      title: "Sanding & Finishing", 
      description: "Preparing surfaces for final treatments" 
    },
    { 
      icon: Paintbrush, 
      title: "Painting & Polishing", 
      description: "Custom spray & polish for superior finishes" 
    },
    { 
      icon: Sofa, 
      title: "Upholstery", 
      description: "Fabric, leather, and leatherette application" 
    },
    { 
      icon: PackagePlus, 
      title: "Packing & Shipping", 
      description: "Secure packaging for safe transportation to site" 
    }
  ];

  const workshopProducts = [
    { title: "Furniture", description: "Public Areas, Guest Rooms, Reception, Bar, Banquet, Lobby etc." },
    { title: "Panels", description: "Wood, Laminate, Veneer, Fabric panels, edge bending on panel borders on requirement." },
    { title: "Doors", description: "Custom Flush & Fire Doors with precise specifications." },
    { title: "Polish", description: "Custom made Spray & polish area provides better & faster finishes." },
    { title: "S.S & Metal works", description: "Finished & dispatched from the workshop for installations." }
  ];

  return (
    <section id="workshop" className="py-20 bg-dreamstair-light">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="section-heading">Workshop Process</h2>
          <p className="mt-4 text-dreamstair-muted text-lg max-w-3xl mx-auto">
            Our state-of-the-art workshop ensures the highest quality craftsmanship for all custom elements.
          </p>
        </div>

        {/* Process Steps */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-7 gap-2 md:gap-4">
            {processSteps.map((step, index) => (
              <div 
                key={index} 
                className="bg-white p-4 rounded-lg shadow-md text-center flex flex-col items-center relative"
              >
                <div className="w-14 h-14 bg-dreamstair-accent rounded-full flex items-center justify-center mb-3">
                  <step.icon className="text-white" size={28} />
                </div>
                <h4 className="font-serif text-lg mb-2">{step.title}</h4>
                <p className="text-sm text-dreamstair-muted">{step.description}</p>
                {index < processSteps.length - 1 && (
                  <ArrowRight className="hidden md:block absolute -right-3 top-1/2 transform -translate-y-1/2 text-dreamstair-accent" size={20} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Workshop Products */}
        <div>
          <h3 className="font-serif text-2xl font-semibold mb-8 text-center">Workshop Specialties</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-1">
              <div className="h-full bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-56 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1581539250439-c96689b516dd?q=80&w=1365&auto=format&fit=crop" 
                    alt="Workshop interior" 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>
            </div>
            <div className="md:col-span-2">
              <div className="bg-white p-6 rounded-lg shadow-md h-full">
                <h4 className="font-serif text-xl mb-4">Our Workshop Produces</h4>
                <div className="space-y-4">
                  {workshopProducts.map((product, index) => (
                    <div key={index} className="flex items-start border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                      <span className="text-dreamstair-accent font-bold text-xl mr-3">•</span>
                      <div>
                        <h5 className="font-semibold mb-1">{product.title}</h5>
                        <p className="text-dreamstair-muted">{product.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-dreamstair-light rounded-md">
                  <p className="italic text-dreamstair-dark">
                    Our in-house workshop allows us to maintain strict quality control over all custom elements, 
                    ensuring that every piece meets our exacting standards before installation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workshop;
