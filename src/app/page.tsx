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
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { faqSchema, menuSchema, webpageSchema } from "@/lib/schema";
import { faqItems } from "@/data/faq";
import { menuItems, categoryLabel } from "@/data/menu";
import { SITE_TAGLINE, DEFAULT_OG_IMAGE } from "@/data/business";

export default function Home() {
  const menuSections = Array.from(
    menuItems.reduce((acc, it) => {
      const list = acc.get(it.category) ?? [];
      list.push({ name: it.name, description: it.description, price: it.price });
      acc.set(it.category, list);
      return acc;
    }, new Map<string, { name: string; description?: string; price: number }[]>()),
  ).map(([cat, items]) => ({
    name: categoryLabel[cat as keyof typeof categoryLabel] ?? cat,
    items,
  }));

  return (
    <>
      <JsonLd
        data={[
          webpageSchema({
            url: "/",
            name: "Pizza Saarlouis · AMICIZIA Steinofen Pizzeria",
            description: SITE_TAGLINE,
            primaryImage: DEFAULT_OG_IMAGE.url,
          }),
          faqSchema(faqItems),
          menuSchema({ url: "/", sections: menuSections }),
        ]}
      />
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
      <FAQ />
      <Contact />
      <Footer />
    </>
  );
}
