
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="section-heading">Contact Us</h2>
          <p className="mt-4 text-dreamstair-muted text-lg max-w-3xl mx-auto">
            Reach out to discuss your project requirements or schedule a consultation.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="font-serif text-2xl font-semibold mb-6">Get In Touch</h3>
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium">Name</label>
                  <Input id="name" placeholder="Your name" />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium">Email</label>
                  <Input id="email" type="email" placeholder="your.email@example.com" />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block mb-2 text-sm font-medium">Subject</label>
                <Input id="subject" placeholder="How can we help?" />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2 text-sm font-medium">Message</label>
                <Textarea id="message" placeholder="Tell us about your project..." className="h-40" />
              </div>
              <Button className="bg-dreamstair-accent hover:bg-dreamstair-accent/90 text-black w-full py-6 text-lg">
                Send Message
              </Button>
            </form>
          </div>
          
          <div>
            <h3 className="font-serif text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="bg-dreamstair-light p-8 rounded-lg shadow-md h-full">
              <div className="space-y-8">
                <div className="flex items-start">
                  <Phone className="text-dreamstair-accent mr-4 mt-1" size={24} />
                  <div>
                    <h4 className="text-lg font-medium mb-1">Phone</h4>
                    <p className="text-dreamstair-muted">+1 (234) 567-8901</p>
                    <p className="text-dreamstair-muted">+1 (234) 567-8902</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="text-dreamstair-accent mr-4 mt-1" size={24} />
                  <div>
                    <h4 className="text-lg font-medium mb-1">Email</h4>
                    <p className="text-dreamstair-muted">info@dreamstairs.com</p>
                    <p className="text-dreamstair-muted">projects@dreamstairs.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="text-dreamstair-accent mr-4 mt-1" size={24} />
                  <div>
                    <h4 className="text-lg font-medium mb-1">Address</h4>
                    <p className="text-dreamstair-muted">
                      123 Interior Boulevard, <br />
                      Design District, <br />
                      New York, NY 10001
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="text-dreamstair-accent mr-4 mt-1" size={24} />
                  <div>
                    <h4 className="text-lg font-medium mb-1">Business Hours</h4>
                    <p className="text-dreamstair-muted">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-dreamstair-muted">Saturday: 10:00 AM - 3:00 PM</p>
                    <p className="text-dreamstair-muted">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
