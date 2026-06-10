import Link from "next/link";

export type Crumb = { name: string; path: string };

export default function Breadcrumbs({ trail }: { trail: Crumb[] }) {
  return (
    <nav
      aria-label="Brotkrumen-Navigation"
      className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12 pt-28 md:pt-32"
    >
      <ol className="flex flex-wrap items-center gap-2 font-display italic text-[0.78rem] tracking-[0.18em] uppercase text-espresso-soft">
        {trail.map((c, i) => {
          const isLast = i === trail.length - 1;
          return (
            <li key={c.path} className="flex items-center gap-2">
              {isLast ? (
                <span className="text-terracotta" aria-current="page">
                  {c.name}
                </span>
              ) : (
                <Link
                  href={c.path}
                  className="hover:text-terracotta transition-colors"
                >
                  {c.name}
                </Link>
              )}
              {!isLast && <span className="text-espresso-soft/40">·</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
