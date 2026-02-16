import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WhyUs from "@/components/WhyUs";
import Services from "@/components/Services";
import Approach from "@/components/Approach";
import CtaBanner from "@/components/CtaBanner";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <WhyUs />
        <Services />
        <Approach />
        <CtaBanner />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
