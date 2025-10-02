import Hero from "../components/Hero";
import About from "../components/About";
import Features from "../components/Features";
import Information from "../components/Information";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">    
      <Hero />
      <About />
      <Features />
      <Information />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
