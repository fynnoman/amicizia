import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import FamilySection from "@/components/FamilySection";
import Timeline from "@/components/Timeline";
import FreshTicker from "@/components/FreshTicker";
import Menu from "@/components/Menu";
import Delivery from "@/components/Delivery";
import Testimonials from "@/components/Testimonials";
import ComingSoon from "@/components/ComingSoon";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import EasterEgg from "@/components/EasterEgg";
import Order from "@/components/Order";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <FamilySection />
      <Timeline />
      <FreshTicker />
      <Menu />
      <Order />
      <Delivery />
      <Testimonials />
      <ComingSoon />
      <Contact />
      <Footer />
      <EasterEgg />
    </>
  );
}
