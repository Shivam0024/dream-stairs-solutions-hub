
import { CheckCircle } from "lucide-react";

const Methodology = () => {
  return (
    <section id="process" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="section-heading">Work Methodology</h2>
          <p className="mt-4 text-dreamstair-muted text-lg max-w-3xl mx-auto">
            Our systematic approach ensures flawless execution from concept to completion.
          </p>
        </div>

        <div className="space-y-16">
          {/* Initial Phase */}
          <div>
            <h3 className="font-serif text-2xl font-semibold mb-6 text-dreamstair-dark">Initial Phase</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-dreamstair-light p-6 rounded-lg shadow-md">
                <h4 className="font-serif text-xl mb-4 text-dreamstair-dark">Site Inspection</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="text-dreamstair-accent mr-3 mt-1 flex-shrink-0" size={18} />
                    <span>Checking site conditions to initiate interior works</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-dreamstair-accent mr-3 mt-1 flex-shrink-0" size={18} />
                    <span>Evaluating MEP and Civil work status</span>
                  </li>
                </ul>
              </div>
              <div className="bg-dreamstair-light p-6 rounded-lg shadow-md">
                <h4 className="font-serif text-xl mb-4 text-dreamstair-dark">Preparation</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="text-dreamstair-accent mr-3 mt-1 flex-shrink-0" size={18} />
                    <span>Creating shop drawings for client approval</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-dreamstair-accent mr-3 mt-1 flex-shrink-0" size={18} />
                    <span>Staff mobilization and setting up bull markings</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-dreamstair-accent mr-3 mt-1 flex-shrink-0" size={18} />
                    <span>Segregation of on-site and off-site works</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Work Commencement */}
          <div>
            <h3 className="font-serif text-2xl font-semibold mb-6 text-dreamstair-dark">Full Work Commencement</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-dreamstair-light p-5 rounded-lg shadow-md">
                <h4 className="font-serif text-lg mb-3 text-dreamstair-dark">Initial Works</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="text-dreamstair-accent mr-2 mt-0.5 flex-shrink-0" size={16} />
                    <span>Gypsum plaster/POP works</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-dreamstair-accent mr-2 mt-0.5 flex-shrink-0" size={16} />
                    <span>Waterproofing</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-dreamstair-accent mr-2 mt-0.5 flex-shrink-0" size={16} />
                    <span>Screed/IPS flooring</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-dreamstair-accent mr-2 mt-0.5 flex-shrink-0" size={16} />
                    <span>Wood-works (partitions/paneling)</span>
                  </li>
                </ul>
              </div>
              <div className="bg-dreamstair-light p-5 rounded-lg shadow-md">
                <h4 className="font-serif text-lg mb-3 text-dreamstair-dark">Mid-Stage Works</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="text-dreamstair-accent mr-2 mt-0.5 flex-shrink-0" size={16} />
                    <span>Stone and tiling works</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-dreamstair-accent mr-2 mt-0.5 flex-shrink-0" size={16} />
                    <span>False Ceiling works</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-dreamstair-accent mr-2 mt-0.5 flex-shrink-0" size={16} />
                    <span>Storages, Cabinets, counters</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-dreamstair-accent mr-2 mt-0.5 flex-shrink-0" size={16} />
                    <span>Glass Partitions / Mirror paneling</span>
                  </li>
                </ul>
              </div>
              <div className="bg-dreamstair-light p-5 rounded-lg shadow-md">
                <h4 className="font-serif text-lg mb-3 text-dreamstair-dark">Final Stage Works</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="text-dreamstair-accent mr-2 mt-0.5 flex-shrink-0" size={16} />
                    <span>Doors and Hardware fixing</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-dreamstair-accent mr-2 mt-0.5 flex-shrink-0" size={16} />
                    <span>Carpet, wooden-flooring, wall coverings</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-dreamstair-accent mr-2 mt-0.5 flex-shrink-0" size={16} />
                    <span>Placement of loose furniture</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-dreamstair-accent mr-2 mt-0.5 flex-shrink-0" size={16} />
                    <span>Final finishing before handover</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Project Management */}
          <div>
            <h3 className="font-serif text-2xl font-semibold mb-6 text-dreamstair-dark">Project Management Team</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-dreamstair-accent text-black p-5 rounded-lg shadow-md text-center relative process-arrow">
                <h4 className="font-serif text-lg mb-2">Project Engineer</h4>
                <p className="text-sm">Overall project oversight and client communication</p>
              </div>
              <div className="bg-dreamstair-accent text-black p-5 rounded-lg shadow-md text-center relative process-arrow">
                <h4 className="font-serif text-lg mb-2">Supervisor</h4>
                <p className="text-sm">Work Implementation & Progress monitoring</p>
              </div>
              <div className="bg-dreamstair-accent text-black p-5 rounded-lg shadow-md text-center relative process-arrow">
                <h4 className="font-serif text-lg mb-2">Foremen</h4>
                <p className="text-sm">Level checking, bull marking, and work supervision</p>
              </div>
              <div className="bg-dreamstair-accent text-black p-5 rounded-lg shadow-md text-center">
                <h4 className="font-serif text-lg mb-2">Support Team</h4>
                <p className="text-sm">Labor management, HSE protocols, and materials handling</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Methodology;
