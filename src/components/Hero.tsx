export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="/Italienische_Küche_Teigrollen_Video.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        aria-hidden="true"
      />

      {/* Background — layered for depth (reduced blur on small screens) */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-bordeaux/40 via-bordeaux/30 to-bordeaux-dark/50 pointer-events-none">
        <div className="absolute -top-1/4 -right-1/4 w-[680px] h-[680px] rounded-full bg-bordeaux-light/10 blur-[60px] sm:blur-[120px] bg-blob" />
        <div className="absolute -bottom-1/4 -left-1/4 w-[540px] h-[540px] rounded-full bg-bordeaux-dark/15 blur-[60px] sm:blur-[120px] bg-blob" />
        <div className="absolute inset-0 hero-noise opacity-20" />
      </div>

      {/* Content — CSS-only reveals to avoid client JS */}
      <div className="relative z-10 text-center px-6 w-full max-w-[90vw] mx-auto glass-panel depth-shadow p-8 rounded-3xl bg-bordeaux/25 border border-white/10 backdrop-blur-md">
        <p className="reveal delay-1 text-xl md:text-2xl text-white/60 mb-6 font-handwriting">
          seit über 12 Jahren mit Herz
        </p>

        <h1 className="reveal delay-2 text-[clamp(3rem,12vw,11rem)] font-bold text-white tracking-[0.05em] leading-[0.9] mb-6">
          AMICIZIA
        </h1>

        <p className="reveal delay-3 text-white/35 text-xs md:text-sm tracking-[0.4em] uppercase mb-8">
          Pizza · Tradition · Genuss
        </p>

        <div className="reveal delay-4 w-24 h-px bg-white/25 mx-auto mb-8" />

        <p className="reveal delay-5 text-white/70 text-base md:text-lg font-light mb-3">
          Pizza · con Amore
        </p>

        <p className="reveal delay-6 text-white/35 text-sm mb-12">
          Saarlouis · Abholung · Täglich geöffnet
        </p>

        <div className="reveal delay-7 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#menu"
            className="px-10 py-4 bg-white text-bordeaux text-sm font-semibold tracking-wider uppercase rounded-full transition-all duration-300 hover:scale-[1.03] hover:shadow-xl hover:shadow-white/10"
          >
            Speisekarte
          </a>
          <a
            href="#order"
            className="px-10 py-4 border border-white/20 text-white text-sm font-semibold tracking-wider uppercase rounded-full transition-all duration-300 hover:bg-white/10 hover:scale-[1.03] hover:border-white/40"
          >
            Abholung
          </a>
        </div>
      </div>

      {/* Scroll indicator — simple CSS animation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-white/25 text-[10px] tracking-[0.3em] uppercase">
          Scroll
        </span>
        <div className="w-5 h-8 rounded-full border border-white/15 flex items-start justify-center pt-2">
          <div className="w-0.5 h-1.5 bg-white/30 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
