
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Methodology from "@/components/Methodology";
import Workshop from "@/components/Workshop";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      <Hero />
      <About />
      <Services />
      <Methodology />
      <Workshop />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
