import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import SubPageHero from "@/components/seo/SubPageHero";
import LocalNapBlock from "@/components/seo/LocalNapBlock";
import RelatedPages from "@/components/seo/RelatedPages";
import FaqBlock, { type FaqEntry } from "@/components/seo/FaqBlock";
import JsonLd from "@/components/seo/JsonLd";
import { buildMetadata } from "@/lib/seo-metadata";
import { breadcrumbSchema, webpageSchema, faqSchema, restaurantSchema } from "@/lib/schema";
import { SITE_URL } from "@/data/business";

const PATH = "/italiener-saarlouis";
export const metadata: Metadata = buildMetadata(PATH);

const faq: FaqEntry[] = [
  {
    question: "Welcher Italiener ist gut in Saarlouis?",
    answer:
      "Wir würden uns nicht selbst empfehlen, wenn wir es nicht ernst meinten: AMICIZIA in der Industriestraße 20. Familiengeführt seit 2013, eigener Steinofen, kleine Karte, ehrliche Preise. Wir sind eine echte Trattoria, kein Kettenrestaurant.",
  },
  {
    question: "Gibt es einen Italiener in Saarlouis, der täglich geöffnet hat?",
    answer:
      "Ja. AMICIZIA hat sieben Tage die Woche geöffnet — Mo–Do bis 22 Uhr, Fr–Sa bis 23 Uhr, So bis 22 Uhr. Auch sonntags warm.",
  },
  {
    question: "Welcher Italiener in Saarlouis hat einen echten Steinofen?",
    answer:
      "Wir backen seit 2013 in einem klassischen Steinofen bei rund 400 °C. Das ist im Saarland keine Selbstverständlichkeit — viele arbeiten mit Elektroöfen. Wenn du Pizza nach echter italienischer Bauart suchst, bist du hier richtig.",
  },
  {
    question: "Italiener in Saarlouis mit Kindern — passt das?",
    answer:
      "Definitiv. Wir sind eine Familienküche und unsere Atmosphäre ist entspannt. Kinder sind willkommen, und es gibt immer eine Pizza, die auch der wählerischste kleine Gast mag.",
  },
  {
    question: "Italiener in Saarlouis Innenstadt — wie weit ist es?",
    answer:
      "Vom Großen Markt bist du in wenigen Minuten bei uns — zu Fuß oder mit dem Auto. Industriestraße 20 liegt zwischen Innenstadt und Roden, mit Parkplätzen direkt vor der Tür.",
  },
];

export default function ItalienerSaarlouisPage() {
  const trail = [
    { name: "Start", path: "/" },
    { name: "Italiener Saarlouis", path: PATH },
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
            name: "Italiener in Saarlouis — AMICIZIA Trattoria di Famiglia",
            description:
              "Familiengeführter Italiener in Saarlouis seit 2013. Steinofen, Pasta, italienische Klassiker. Industriestraße 20.",
            primaryImage: `${SITE_URL}/photos/amicizia-2.jpg`,
          }),
          faqSchema(faq),
        ]}
      />

      <Breadcrumbs trail={trail} />

      <SubPageHero
        eyebrow="IV · Italiener in Saarlouis"
        title="Italiener in"
        italicTail="Saarlouis"
        lead="Eine familiengeführte italienische Trattoria mitten in Saarlouis. Seit 2013 servieren wir handgemachte Pizza, frische Pasta und die Klassiker aus der Heimat — ehrlich, ohne Schnickschnack, ohne Touristenfalle."
      />

      <section className="relative max-w-6xl mx-auto px-6 lg:px-12 mb-20">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="relative aspect-[4/5] overflow-hidden border border-paper-soft/15 depth-shadow">
            <div className="pointer-events-none absolute inset-2 border border-terracotta/30 z-10" />
            <Image
              src="/photos/amicizia-2.jpg"
              alt="Italiener in Saarlouis — frische Zutaten in der Küche der AMICIZIA Trattoria"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[4/5] overflow-hidden border border-paper-soft/15 depth-shadow">
            <div className="pointer-events-none absolute inset-2 border border-terracotta/30 z-10" />
            <Image
              src="/photos/amicizia-3.jpg"
              alt="Trattoria-Atmosphäre beim Italiener AMICIZIA in Saarlouis"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="relative py-20 md:py-24 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="display-lg text-[clamp(2rem,4vw,3rem)] text-espresso leading-tight">
            Wie sich ein <span className="italic-display text-terracotta">echter Italiener in Saarlouis</span> anfühlt
          </h2>
          <div className="space-y-5 mt-8 font-serif text-espresso-soft text-lg leading-relaxed">
            <p>
              Die Frage „wo gibt's einen guten Italiener in Saarlouis" stellen sich
              Leute, die mehr wollen als nur essen. Sie wollen das Gefühl von Italien.
              Den lauten Tisch, das offene Lachen aus der Küche, die Karte, die du
              an einem Abend lesen kannst. Sie wollen den Wirt, der dich kennt, weil
              du schon das dritte Mal da bist.
            </p>
            <p>
              Genau das ist AMICIZIA seit 2013. Wir sind eine{" "}
              <Link href="/trattoria-saarlouis" className="text-terracotta hover:text-terracotta-deep underline-offset-4 hover:underline">
                Trattoria di Famiglia
              </Link>
              {" "}— familiengeführt, mit allem, was dazugehört. Die Karte ist klein,
              weil wir nur kochen, was wir wirklich beherrschen. Die Preise sind fair,
              weil wir wollen, dass du wiederkommst — nicht, dass du einmal kommst und
              dich danach ärgerst.
            </p>
            <p>
              Unser Steinofen ist der Mittelpunkt der Küche. Wenn du am Tresen sitzt,
              siehst du, wie eine{" "}
              <Link href="/steinofen-pizza-saarlouis" className="text-terracotta hover:text-terracotta-deep underline-offset-4 hover:underline">
                Steinofenpizza
              </Link>
              {" "}in unter 90 Sekunden entsteht — Teig auf den Schießer, in den Ofen,
              raus, mit Olivenöl beträufelt, fertig. Diese Geschwindigkeit ist nicht
              Show, sondern Handwerk. Wer als Italiener in Saarlouis ernst genommen
              werden will, muss den Ofen ernst nehmen.
            </p>
            <p>
              Wir bedienen Gäste aus ganz Saarlouis und Umgebung — aus der Innenstadt,
              aus{" "}
              <Link href="/italiener-roden" className="text-terracotta hover:text-terracotta-deep underline-offset-4 hover:underline">
                Roden
              </Link>
              ,{" "}
              <Link href="/italiener-fraulautern" className="text-terracotta hover:text-terracotta-deep underline-offset-4 hover:underline">
                Fraulautern
              </Link>
              , Lisdorf, Beaumarais. Und aus den Nachbarorten wie{" "}
              <Link href="/italiener-dillingen" className="text-terracotta hover:text-terracotta-deep underline-offset-4 hover:underline">
                Dillingen
              </Link>
              ,{" "}
              <Link href="/pizzeria-saarwellingen" className="text-terracotta hover:text-terracotta-deep underline-offset-4 hover:underline">
                Saarwellingen
              </Link>
              ,{" "}
              <Link href="/italiener-wallerfangen" className="text-terracotta hover:text-terracotta-deep underline-offset-4 hover:underline">
                Wallerfangen
              </Link>
              , Bous, Ensdorf und Rehlingen. Manche kommen jede Woche, andere monatlich
              — beide sind gleich willkommen.
            </p>
          </div>
        </div>
      </section>

      <section className="paper-grain relative py-20 md:py-24 px-6 lg:px-12 bg-paper-deep/40">
        <div className="max-w-5xl mx-auto">
          <h2 className="display-lg text-[clamp(1.8rem,3.5vw,2.5rem)] text-espresso leading-tight">
            Was du bei einem guten Italiener in Saarlouis findest
          </h2>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {[
              {
                t: "Eine kurze Karte",
                d: "Weniger Gerichte, dafür alle gut. Margherita, Diavola, Quattro Formaggi, Prosciutto e Rucola, Vegetariana — plus Pasta- und Ciabatta-Klassiker.",
              },
              {
                t: "Echte Zutaten",
                d: "San-Marzano-Tomaten, Fior di Latte, Parmaschinken 24 Monate, gutes Olivenöl, frisches Basilikum. Nichts aus der Tüte, nichts aufgewärmt.",
              },
              {
                t: "Familie statt Kette",
                d: "Du sprichst mit der Familie, nicht mit einem Schichtleiter. Wir sind nicht skalierbar — und das ist der Punkt.",
              },
            ].map((b) => (
              <article key={b.t} className="bg-paper-deep border border-paper-soft/15 depth-shadow p-6">
                <h3 className="font-display text-espresso text-xl">{b.t}</h3>
                <p className="font-serif italic text-espresso-soft text-base leading-relaxed mt-2">
                  {b.d}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-16 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <div className="font-hand text-3xl text-terracotta mb-6">
            Komm vorbei, oder hol dir was nach Hause.
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/reservierung" className="btn-terra">
              Tisch reservieren
            </Link>
            <Link href="/pizza-bestellen-saarlouis" className="btn-ghost !text-espresso !border-espresso/70 hover:!bg-espresso hover:!text-paper">
              Online bestellen
            </Link>
          </div>
        </div>
      </section>

      <FaqBlock items={faq} />
      <LocalNapBlock />
      <RelatedPages path={PATH} />
      <Footer />
    </>
  );
}
