import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Timeline from "@/components/Timeline";
import ClientWidgets from "@/components/ClientWidgets";
import Menu from "@/components/Menu";
import Delivery from "@/components/Delivery";
import Testimonials from "@/components/Testimonials";
import ComingSoon from "@/components/ComingSoon";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Timeline />
      <ClientWidgets />
      <Menu />
      <Delivery />
      <Testimonials />
      <ComingSoon />
      <Contact />
      <Footer />
      {/* client-side widgets rendered via ClientWidgets */}
    </>
  );
}
