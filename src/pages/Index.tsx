import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServicesCarousel from "@/components/ServicesCarousel";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <ServicesCarousel />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
