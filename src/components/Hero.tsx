
import { Button } from "@/components/ui/button";
import { ArrowDownCircle } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="h-screen w-full relative flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="h-full w-full bg-[url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000')] bg-cover bg-center"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 z-10 text-center">
        <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
          Crafting Excellence <br />in Interior Solutions
        </h1>
        <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-10 animate-fade-in">
          Transforming spaces into extraordinary experiences since 2008.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in">
          <Button className="bg-dreamstair-accent hover:bg-dreamstair-accent/90 text-black px-6 py-6 text-lg">
            Explore Our Work
          </Button>
          <Button variant="outline" className="border-white text-white hover:bg-white/10 px-6 py-6 text-lg">
            Get in Touch
          </Button>
        </div>
      </div>
      
      <a href="#about" className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white hover:text-dreamstair-accent transition-colors animate-bounce">
        <ArrowDownCircle size={40} />
      </a>
    </section>
  );
};

export default Hero;
