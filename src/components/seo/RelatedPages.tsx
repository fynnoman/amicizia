import Link from "next/link";
import { getRelated } from "@/data/seo-pages";
import { Fleuron } from "@/components/Ornaments";

export default function RelatedPages({ path }: { path: string }) {
  const items = getRelated(path);
  if (!items.length) return null;

  return (
    <section
      aria-labelledby="related-heading"
      className="paper-grain relative py-20 md:py-24 px-6 lg:px-12 bg-paper-deep/40"
    >
      <div className="max-w-6xl mx-auto relative">
        <div className="flex items-center gap-3 mb-8 text-terracotta">
          <Fleuron size={18} />
          <h2
            id="related-heading"
            className="font-display italic tracking-[0.3em] uppercase text-xs"
          >
            Auch interessant
          </h2>
          <span className="h-px flex-1 bg-terracotta/30" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((p) => (
            <Link
              key={p.path}
              href={p.path}
              className="group relative block bg-paper-deep border border-paper-soft/15 depth-shadow p-6 hover:-translate-y-0.5 transition-transform duration-300"
            >
              <div className="pointer-events-none absolute inset-2 border border-terracotta/30" />
              <div className="relative">
                <div className="font-display italic text-terracotta tracking-[0.3em] text-[0.65rem] uppercase mb-2">
                  {p.keyword}
                </div>
                <h3 className="font-display text-espresso text-xl leading-tight group-hover:text-terracotta transition-colors">
                  {p.title.split("·")[0].trim()}
                </h3>
                <p className="font-serif italic text-espresso-soft text-sm mt-2 line-clamp-3">
                  {p.description}
                </p>
                <span className="inline-block mt-4 font-display italic text-terracotta text-xs tracking-[0.2em] uppercase">
                  Mehr lesen →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
