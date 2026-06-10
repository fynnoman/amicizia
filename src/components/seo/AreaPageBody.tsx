import Link from "next/link";
import Image from "next/image";

export type AreaPageConfig = {
  area: string;
  fromLabel: string; // e.g. "aus Dillingen"
  distanceKm: number;
  driveMinutes: number;
  introNote: string; // 1–2 distinguishing sentences
  body: string[]; // 2–3 paragraphs unique per location
};

export default function AreaPageBody({ config }: { config: AreaPageConfig }) {
  return (
    <>
      <section className="relative max-w-6xl mx-auto px-6 lg:px-12 mb-16">
        <div className="relative aspect-[16/8] overflow-hidden border border-paper-soft/15 depth-shadow">
          <div className="pointer-events-none absolute inset-2 border border-terracotta/30 z-10" />
          <Image
            src="/photos/amicizia-1.jpg"
            alt={`Italienische Pizza und Trattoria-Atmosphäre für Gäste ${config.fromLabel}`}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </section>

      <section className="relative py-16 md:py-20 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="display-lg text-[clamp(2rem,4vw,3rem)] text-espresso leading-tight">
            Warum {config.fromLabel} oft <span className="italic-display text-terracotta">zu uns kommt</span>
          </h2>
          <p className="font-hand text-terracotta-soft text-2xl mt-4">
            {config.introNote}
          </p>

          <div className="space-y-5 mt-8 font-serif text-espresso-soft text-lg leading-relaxed">
            {config.body.map((p, i) => (
              <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
            ))}
          </div>

          <div className="grid sm:grid-cols-3 gap-4 mt-12">
            <div className="bg-paper-deep border border-paper-soft/15 depth-shadow p-5 text-center">
              <div className="font-display text-terracotta text-3xl">{config.distanceKm} km</div>
              <div className="font-display italic text-espresso-soft text-xs tracking-[0.25em] uppercase mt-2">
                Entfernung
              </div>
            </div>
            <div className="bg-paper-deep border border-paper-soft/15 depth-shadow p-5 text-center">
              <div className="font-display text-terracotta text-3xl">{config.driveMinutes} min</div>
              <div className="font-display italic text-espresso-soft text-xs tracking-[0.25em] uppercase mt-2">
                Mit dem Auto
              </div>
            </div>
            <div className="bg-paper-deep border border-paper-soft/15 depth-shadow p-5 text-center">
              <div className="font-display text-terracotta text-3xl">400 °C</div>
              <div className="font-display italic text-espresso-soft text-xs tracking-[0.25em] uppercase mt-2">
                Steinofen
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-12 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <div className="font-hand text-3xl text-terracotta mb-6">
            Aus {config.area} schnell bei uns
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/pizza-bestellen-saarlouis" className="btn-terra">
              Pizza vorbestellen
            </Link>
            <Link
              href="/reservierung"
              className="btn-ghost !text-espresso !border-espresso/70 hover:!bg-espresso hover:!text-paper"
            >
              Tisch reservieren
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
