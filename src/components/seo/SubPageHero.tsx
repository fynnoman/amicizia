import { Fleuron } from "@/components/Ornaments";

export default function SubPageHero({
  eyebrow,
  title,
  italicTail,
  lead,
}: {
  eyebrow: string;
  title: string;
  italicTail?: string;
  lead: string;
}) {
  return (
    <header className="paper-grain relative pt-6 pb-20 md:pb-24 px-6 lg:px-12 overflow-hidden">
      <div className="max-w-5xl mx-auto relative">
        <div className="flex items-center gap-4 mb-6 text-terracotta">
          <span className="h-px w-12 bg-terracotta/40" />
          <Fleuron size={16} />
          <span className="font-display italic tracking-[0.35em] uppercase text-[0.72rem]">
            {eyebrow}
          </span>
          <span className="h-px flex-1 bg-terracotta/40" />
        </div>
        <h1 className="display-xl text-[clamp(2.6rem,7vw,5.5rem)] leading-[0.95] text-espresso">
          {title}
          {italicTail && (
            <>
              {" "}
              <span className="italic-display text-terracotta">{italicTail}</span>
            </>
          )}
        </h1>
        <p className="mt-6 font-serif text-espresso-soft text-lg md:text-xl max-w-3xl leading-relaxed">
          {lead}
        </p>
      </div>
    </header>
  );
}
