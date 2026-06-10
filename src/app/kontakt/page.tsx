import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import SubPageHero from "@/components/seo/SubPageHero";
import LocalNapBlock from "@/components/seo/LocalNapBlock";
import RelatedPages from "@/components/seo/RelatedPages";
import JsonLd from "@/components/seo/JsonLd";
import { buildMetadata } from "@/lib/seo-metadata";
import { breadcrumbSchema, webpageSchema, restaurantSchema } from "@/lib/schema";
import { BUSINESS, SITE_URL } from "@/data/business";

const PATH = "/kontakt";
export const metadata: Metadata = buildMetadata(PATH);

const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": `${SITE_URL}${PATH}#contactpage`,
  name: "Kontakt AMICIZIA Saarlouis",
  url: `${SITE_URL}${PATH}`,
  about: { "@id": `${SITE_URL}/#restaurant` },
  inLanguage: "de-DE",
};

export default function KontaktPage() {
  const trail = [
    { name: "Start", path: "/" },
    { name: "Kontakt", path: PATH },
  ];

  return (
    <>
      <Navbar />
      <JsonLd
        data={[
          restaurantSchema(),
          breadcrumbSchema(trail),
          webpageSchema({
            url: PATH,
            name: "Kontakt — AMICIZIA Saarlouis",
            description:
              "Adresse, Telefon, Anfahrt und Karte. Industriestraße 20, 66740 Saarlouis. Parkplätze direkt vor der Tür.",
          }),
          contactPageSchema,
        ]}
      />

      <Breadcrumbs trail={trail} />

      <SubPageHero
        eyebrow="Kontakt"
        title="So findest du"
        italicTail="uns"
        lead={`${BUSINESS.address.street}, ${BUSINESS.address.postalCode} ${BUSINESS.address.locality}. Mitten zwischen Saarlouis-Innenstadt, Roden und Fraulautern.`}
      />

      <section className="relative py-16 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[1fr_1.3fr] gap-10 items-start">
          <div className="space-y-6">
            <div className="relative bg-paper-deep border border-paper-soft/15 depth-shadow p-7">
              <div className="pointer-events-none absolute inset-2 border border-terracotta/25" />
              <div className="relative">
                <div className="font-display italic text-terracotta tracking-[0.3em] text-[0.7rem] uppercase mb-3">
                  Adresse
                </div>
                <address className="not-italic font-display text-espresso text-xl leading-snug">
                  AMICIZIA Trattoria
                  <br />
                  {BUSINESS.address.street}
                  <br />
                  {BUSINESS.address.postalCode} {BUSINESS.address.locality}
                  <br />
                  {BUSINESS.address.regionName} · {BUSINESS.address.countryName}
                </address>
                <Link
                  href="https://maps.google.com/?q=Industriestraße+20,+66740+Saarlouis"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 font-display italic text-terracotta hover:text-terracotta-deep underline-offset-4 hover:underline"
                >
                  Route in Google Maps öffnen →
                </Link>
              </div>
            </div>

            <div className="relative bg-paper-deep border border-paper-soft/15 depth-shadow p-7">
              <div className="pointer-events-none absolute inset-2 border border-terracotta/25" />
              <div className="relative space-y-2">
                <div className="font-display italic text-terracotta tracking-[0.3em] text-[0.7rem] uppercase mb-3">
                  Kontaktwege
                </div>
                <a
                  href={`tel:${BUSINESS.phone.replace(/\s/g, "")}`}
                  className="block font-display text-espresso text-lg hover:text-terracotta transition-colors"
                >
                  Telefon: {BUSINESS.phoneDisplay}
                </a>
                <a
                  href={`mailto:${BUSINESS.email}`}
                  className="block font-display text-espresso text-lg hover:text-terracotta transition-colors break-all"
                >
                  E-Mail: {BUSINESS.email}
                </a>
                <a
                  href={BUSINESS.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block font-display text-espresso text-lg hover:text-terracotta transition-colors"
                >
                  Instagram: {BUSINESS.socials.instagramHandle}
                </a>
              </div>
            </div>

            <div className="relative bg-paper-deep border border-paper-soft/15 depth-shadow p-7">
              <div className="pointer-events-none absolute inset-2 border border-terracotta/25" />
              <div className="relative">
                <div className="font-display italic text-terracotta tracking-[0.3em] text-[0.7rem] uppercase mb-3">
                  Anfahrt
                </div>
                <ul className="font-serif text-espresso text-base space-y-1.5">
                  <li><strong>Auto:</strong> A8 Abfahrt Saarlouis-Mitte, dann Industriestraße. Parkplätze direkt vor der Tür.</li>
                  <li><strong>Innenstadt Saarlouis:</strong> 5 Minuten zu Fuß oder mit dem Auto.</li>
                  <li><strong>Dillingen / Saarwellingen:</strong> ca. 6–7 km Anfahrt.</li>
                  <li><strong>Wallerfangen:</strong> ca. 4 km Anfahrt.</li>
                  <li><strong>Saarbrücken:</strong> ca. 30 km über die A620/A8.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden border border-paper-soft/15 depth-shadow">
            <div className="pointer-events-none absolute inset-2 border border-terracotta/30 z-10" />
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2604.5!2d6.7514!3d49.3137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4795b07c8caa7e1b%3A0x0!2sIndustriestr.+20%2C+66740+Saarlouis!5e0!3m2!1sde!2sde!4v1680000000000!5m2!1sde!2sde"
              width="100%"
              height="520"
              style={{ border: 0, filter: "saturate(0.85) sepia(0.18) hue-rotate(-8deg)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="AMICIZIA Standort Saarlouis"
              className="w-full"
            />
          </div>
        </div>
      </section>

      <LocalNapBlock />
      <RelatedPages path={PATH} />
      <Footer />
    </>
  );
}
