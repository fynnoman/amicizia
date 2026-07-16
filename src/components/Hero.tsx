import { CircleStamp, OliveBranch, Fleuron, Tomato } from "./Ornaments";
import HeroVideoBackground from "./HeroVideoBackground";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background video — own component so a client useEffect can
          re-trigger play() across Safari/Chrome quirks (tab visibility,
          stalled buffers, silent autoplay refusals). */}
      <HeroVideoBackground
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="/hero-video.mp4"
      />

      {/* Deep ink wash over the photo */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.85) 0%, rgba(8,7,5,0.72) 45%, rgba(0,0,0,0.96) 100%)",
        }}
      />
      <div
        className="absolute inset-0 z-0 pointer-events-none mix-blend-overlay opacity-25"
        style={{
          background:
            "radial-gradient(60% 60% at 50% 30%, rgba(232,197,136,0.35), transparent 70%)",
        }}
      />
      <div className="grain-overlay z-0" />

      {/* Floating decorative olive branches */}
      <div className="absolute top-28 left-[-20px] z-10 text-paper-soft/30 animate-float hidden md:block">
        <OliveBranch size={140} />
      </div>
      <div
        className="absolute bottom-32 right-[-30px] z-10 text-paper-soft/30 animate-float hidden md:block"
        style={{ animationDelay: "1.2s" }}
      >
        <OliveBranch size={170} className="-scale-x-100" />
      </div>

      {/* Top-right vintage stamp */}
      <div className="absolute top-28 right-6 lg:right-12 z-10 hidden sm:block">
        <div className="text-paper-soft/85 animate-slow-spin">
          <CircleStamp size={120} />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 lg:px-12 text-paper-soft">
        {/* Eyebrow */}
        <div className="reveal delay-1 flex items-center gap-4 text-paper-soft/70 mb-8">
          <span className="h-px w-12 bg-paper-soft/60" />
          <span className="font-display italic tracking-[0.35em] uppercase text-[0.72rem]">
            Betrieb · Saarlouis · seit 2013
          </span>
          <span className="h-px w-12 bg-paper-soft/60" />
        </div>

        {/* Handwritten Italian whisper above the headline */}
        <p className="reveal delay-2 font-hand text-3xl md:text-4xl text-terracotta-soft/90 -mb-2 ml-1 -rotate-2">
          herzlich willkommen,
        </p>

        {/* Main display headline */}
        <h1 className="reveal delay-3 display-xl text-[clamp(4rem,14vw,12rem)] text-paper-soft">
          <span className="block">AMI<span className="italic-display">cizia</span></span>
        </h1>

        {/* Sub line */}
        <div className="reveal delay-4 mt-6 max-w-2xl">
          <p className="font-display italic text-2xl md:text-3xl text-paper-soft/90 leading-snug">
            Pizza, Pasta &amp; kleine Familien&shy;rezepte —
            <span className="font-hand text-terracotta-soft text-3xl ml-2">
              mit Liebe gemacht.
            </span>
          </p>
          <p className="mt-4 font-serif text-paper-soft/65 text-base md:text-lg leading-relaxed max-w-xl">
            Ein kleiner italienischer Familienbetrieb mitten in Saarlouis.
            Frischer Teig aus dem Steinofen, ehrliche Zutaten und Rezepte,
            die seit 2013 unverändert sind.
          </p>
        </div>

        {/* CTAs */}
        <div className="reveal delay-5 mt-10 flex flex-col sm:flex-row gap-4">
          <a href="#menu" className="btn-terra">
            Zur Speisekarte
          </a>
          <a
            href="tel:+4968311234567"
            className="btn-ghost !text-paper-soft !border-paper-soft/70 hover:!bg-paper-soft hover:!text-paper"
          >
            <Tomato size={18} />
            Anrufen zur Abholung
          </a>
        </div>

        {/* Three bottom marks */}
        <div className="reveal delay-6 mt-14 grid grid-cols-3 gap-6 max-w-xl">
          {[
            { kicker: "I.",   label: "Saarlouis",       sub: "Industriestraße 20" },
            { kicker: "II.",  label: "Küche",           sub: "12:00 – 22:00 Uhr" },
            { kicker: "III.", label: "Steinofen",       sub: "knusprig & frisch" },
          ].map((b) => (
            <div key={b.kicker} className="border-l border-paper-soft/30 pl-4">
              <div className="font-display italic text-terracotta-soft text-sm tracking-[0.3em]">
                {b.kicker}
              </div>
              <div className="font-display text-paper-soft text-base mt-1">
                {b.label}
              </div>
              <div className="font-serif text-paper-soft/55 text-xs mt-0.5">
                {b.sub}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-paper-soft/55">
        <Fleuron size={16} />
        <span className="font-display italic text-[10px] tracking-[0.4em] uppercase">
          scroll ↓
        </span>
      </div>
    </section>
  );
}
