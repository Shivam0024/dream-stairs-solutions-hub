import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, SendIcon, Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from 'emailjs-com';
import { 
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";

// EmailJS configuration - Replace with your actual credentials
const EMAILJS_SERVICE_ID = "service_4vqlv09";
const EMAILJS_TEMPLATE_ID = "template_r3ftbvf";
const EMAILJS_USER_ID = "u_NYN7EM-2GGKpwLT"; 

// Initialize EmailJS
emailjs.init(EMAILJS_USER_ID);

const Contact = () => {
  const [workLocation, setWorkLocation] = useState("");
  const [tentativePrice, setTentativePrice] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("contact");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const handleLocationChange = (value: string) => {
    setWorkLocation(value);
    
    // Set tentative price based on selection
    switch(value) {
      case "office-small":
        setTentativePrice("$5,000 - $15,000");
        break;
      case "office-medium":
        setTentativePrice("$15,000 - $30,000");
        break;
      case "office-large":
        setTentativePrice("$30,000 - $100,000+");
        break;
      case "home-apartment":
        setTentativePrice("$10,000 - $25,000");
        break;
      case "home-house":
        setTentativePrice("$25,000 - $60,000");
        break;
      case "home-villa":
        setTentativePrice("$60,000 - $200,000+");
        break;
      default:
        setTentativePrice("");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Prepare template parameters
      const templateParams = {
        to_email: "iitianshivam0909@gmail.com",
        from_name: name,
        from_email: email,
        work_location: workLocation,
        price_range: tentativePrice,
        message: message
      };
      
      console.log("Sending email with params:", templateParams);
      
      // Send email using EmailJS
      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_USER_ID
      );
      
      console.log("Email sent successfully:", result);
      
      // Show success message
      toast({
        title: "Message Sent Successfully",
        description: "Thank you for contacting us. We'll get back to you shortly.",
      });
      
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset the form after showing success message
      setTimeout(() => {
        setName("");
        setEmail("");
        setMessage("");
        setWorkLocation("");
        setTentativePrice("");
        setIsSubmitted(false);
      }, 5000);
    } catch (error) {
      console.error("Failed to send email:", error);
      setIsSubmitting(false);
      toast({
        title: "Message Failed to Send",
        description: "There was an error sending your message. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className={`container mx-auto px-4 md:px-6 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="section-heading">Contact Us</h2>
          <p className="mt-4 text-dreamstair-muted text-lg max-w-3xl mx-auto">
            Reach out to discuss your project requirements or schedule a consultation.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="transform transition-all duration-500 hover:shadow-xl rounded-lg p-6 animate-fade-in hover-lift">
            <h3 className="font-serif text-2xl font-semibold mb-6">Get In Touch</h3>
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center h-[400px] text-center animate-scale-in">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 animate-pulse-subtle">
                  <Check className="text-green-600" size={30} />
                </div>
                <h4 className="text-xl font-medium mb-2">Thank You!</h4>
                <p className="text-dreamstair-muted">
                  Your message has been sent successfully. We'll get back to you shortly.
                </p>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="group">
                    <label htmlFor="name" className="block mb-2 text-sm font-medium group-hover:text-dreamstair-accent transition-colors">Name</label>
                    <Input 
                      id="name" 
                      placeholder="Your name" 
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="transition-all focus:border-dreamstair-accent hover:border-dreamstair-accent/70"
                    />
                  </div>
                  <div className="group">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium group-hover:text-dreamstair-accent transition-colors">Email</label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="your.email@example.com" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="transition-all focus:border-dreamstair-accent hover:border-dreamstair-accent/70"
                    />
                  </div>
                </div>
                
                <div className="group">
                  <label htmlFor="subject" className="block mb-2 text-sm font-medium group-hover:text-dreamstair-accent transition-colors">Work Location</label>
                  <Select onValueChange={handleLocationChange} value={workLocation}>
                    <SelectTrigger className="w-full transition-all focus:border-dreamstair-accent hover:border-dreamstair-accent/70">
                      <SelectValue placeholder="Select work location" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Office</SelectLabel>
                        <SelectItem value="office-small">Small Office (up to 1000 sq.ft)</SelectItem>
                        <SelectItem value="office-medium">Medium Office (1000-5000 sq.ft)</SelectItem>
                        <SelectItem value="office-large">Large Office (5000+ sq.ft)</SelectItem>
                      </SelectGroup>
                      <SelectGroup>
                        <SelectLabel>Home</SelectLabel>
                        <SelectItem value="home-apartment">Apartment</SelectItem>
                        <SelectItem value="home-house">House</SelectItem>
                        <SelectItem value="home-villa">Luxury Villa</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  
                  {tentativePrice && (
                    <div className="mt-2 text-dreamstair-accent font-medium animate-fade-in">
                      Tentative price range: {tentativePrice}
                    </div>
                  )}
                </div>
                
                <div className="group">
                  <label htmlFor="message" className="block mb-2 text-sm font-medium group-hover:text-dreamstair-accent transition-colors">Message</label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us about your project..." 
                    className="h-40 transition-all focus:border-dreamstair-accent hover:border-dreamstair-accent/70" 
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  />
                </div>
                <Button 
                  type="submit"
                  className="bg-dreamstair-accent hover:bg-dreamstair-accent/90 text-black w-full py-6 text-lg transition-all duration-300 hover:shadow-lg hover:translate-y-[-2px] flex items-center justify-center gap-2 btn-shine"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>Sending<span className="animate-pulse">...</span></>
                  ) : (
                    <>
                      <SendIcon size={18} />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            )}
          </div>
          
          <div className="transform transition-all duration-500 hover:shadow-xl rounded-lg animate-fade-in hover-lift">
            <h3 className="font-serif text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="bg-dreamstair-light p-8 rounded-lg shadow-md h-full transition-all duration-300 hover:shadow-xl">
              <div className="space-y-8">
                <div className="flex items-start group">
                  <div className="bg-dreamstair-accent/10 p-3 rounded-full mr-4 transition-all group-hover:bg-dreamstair-accent group-hover:scale-110">
                    <Phone className="text-dreamstair-accent group-hover:text-white transition-colors" size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-1">Phone</h4>
                    <p className="text-dreamstair-muted">+1 (234) 567-8901</p>
                    <p className="text-dreamstair-muted">+1 (234) 567-8902</p>
                  </div>
                </div>
                
                <div className="flex items-start group">
                  <div className="bg-dreamstair-accent/10 p-3 rounded-full mr-4 transition-all group-hover:bg-dreamstair-accent group-hover:scale-110">
                    <Mail className="text-dreamstair-accent group-hover:text-white transition-colors" size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-1">Email</h4>
                    <p className="text-dreamstair-muted">iitianshivam0909@gmail.com</p>
                    <p className="text-dreamstair-muted">projects@dreamstairs.com</p>
                  </div>
                </div>
                
                <div className="flex items-start group">
                  <div className="bg-dreamstair-accent/10 p-3 rounded-full mr-4 transition-all group-hover:bg-dreamstair-accent group-hover:scale-110">
                    <MapPin className="text-dreamstair-accent group-hover:text-white transition-colors" size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-1">Address</h4>
                    <p className="text-dreamstair-muted">
                      123 Interior Boulevard, <br />
                      Design District, <br />
                      New York, NY 10001
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start group">
                  <div className="bg-dreamstair-accent/10 p-3 rounded-full mr-4 transition-all group-hover:bg-dreamstair-accent group-hover:scale-110">
                    <Clock className="text-dreamstair-accent group-hover:text-white transition-colors" size={24} />
                  </div>
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
