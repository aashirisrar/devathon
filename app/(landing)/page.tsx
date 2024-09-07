import Navbar from "./sections/Navbar";
import { Hero } from "./sections/Hero";
import { LogoTicker } from "./sections/LogoTicker";
import { ProductShowcase } from "./sections/ProductShowcase";
import { Pricing } from "./sections/Pricing";
import { Testimonials } from "./sections/Testimonials";
import { CallToAction } from "./sections/CallToAction";
import { Footer } from "./sections/Footer";

const Home = () => {
  return (
    <div className="bg-[#EAEEFE]">
      <Navbar />
      <Hero />
      <LogoTicker />
      <ProductShowcase />
      <Pricing />
      <Testimonials />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Home;
