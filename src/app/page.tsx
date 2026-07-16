import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import ChefShowcase from "@/components/ChefShowcase";
import About from "@/components/About";
import Timeline from "@/components/Timeline";
import ClientWidgets from "@/components/ClientWidgets";
import Menu from "@/components/Menu";
import PhotoBanner from "@/components/PhotoBanner";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Marquee />
      <ChefShowcase />
      <About />
      <Timeline />
      <ClientWidgets />
      <Menu />
      <PhotoBanner />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}
