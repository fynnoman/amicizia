import { Fleuron } from "@/components/Ornaments";

export type FaqEntry = { question: string; answer: string };

export default function FaqBlock({
  heading = "Häufige Fragen",
  items,
}: {
  heading?: string;
  items: FaqEntry[];
}) {
  return (
    <section
      aria-labelledby="faq-heading"
      className="paper-grain relative py-20 md:py-24 px-6 lg:px-12"
    >
      <div className="max-w-4xl mx-auto relative">
        <div className="flex items-center gap-3 mb-10 text-terracotta">
          <Fleuron size={18} />
          <h2
            id="faq-heading"
            className="font-display italic tracking-[0.3em] uppercase text-xs"
          >
            {heading}
          </h2>
          <span className="h-px flex-1 bg-terracotta/30" />
        </div>

        <div className="space-y-3">
          {items.map((item, i) => (
            <details
              key={i}
              className="group relative bg-paper-deep border border-paper-soft/15 depth-shadow open:shadow-lg"
            >
              <summary className="relative cursor-pointer list-none p-5 md:p-6 flex items-start justify-between gap-4">
                <span className="font-display text-espresso text-lg md:text-xl leading-tight pr-2">
                  {item.question}
                </span>
                <span
                  aria-hidden
                  className="shrink-0 mt-1 text-terracotta font-display text-2xl leading-none transition-transform duration-300 group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <div className="px-5 md:px-6 pb-6 -mt-1 font-serif text-espresso-soft text-base leading-relaxed">
                {item.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
