import Navbar from "../../components/navbar/Navbar";
import { Hero } from "./sections/Hero";
import { LogoTicker } from "./sections/LogoTicker";
import { ProductShowcase } from "./sections/ProductShowcase";
import { Pricing } from "./sections/Pricing";
import { Testimonials } from "./sections/Testimonials";
import { CallToAction } from "./sections/CallToAction";
import { Footer } from "./sections/Footer";
import Stats from "../../components/Stats/Stats"
import "./App.css"
import Header from "../../components/Header/Header"
const Home = () => {
  return (
    <div className="bg-[#EAEEFE] App">
      <div className='gradient__bg'>
      
      <Navbar />
      <Header /></div>
      
      <LogoTicker />
      {/* <ProductShowcase /> */}
      <Stats />
      {/* <Pricing /> */}
      <Testimonials />
      {/* <CallToAction /> */}
      <Footer />
    </div>
  );
};

export default Home;
