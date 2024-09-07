"use client";
import { MainNavigationMenu } from "@/components/navbar";
import Hero from "@/components/hero";
import Navbar from "../../components/Navbar/Navbar"
import Header from "../../components/Header/Header"
import Testimonials from "../../components/Testimonials/Testimonials"
import Stats from "../../components/Stats/Stats"
import ContactUs from "../../components/ContactUs/ContactPage"
import Footer from "../../components/Footer/Footer";
export default function Home() {
  return (
    <div className="">
      
      <Navbar />
      <Header />
      <Testimonials />
<Stats />
<ContactUs />
<Footer />

    </div>
  );
}
