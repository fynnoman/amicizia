/**
 * SEO page registry — hub-and-spoke architecture for internal linking.
 *
 * Each page declares its target keyword, intent, and the 3–5 most relevant
 * sibling/parent pages. Used to render breadcrumbs, related-pages blocks,
 * sitemap.ts, and footer link maps.
 *
 * Cluster design (hub → spokes):
 *   HUB:   / (homepage), /pizzeria-saarlouis
 *   PIZZA: /pizza-saarlouis, /steinofen-pizza-saarlouis, /beste-pizza-saarlouis, /pizza-bestellen-saarlouis
 *   ITALY: /italiener-saarlouis, /italienisches-restaurant-saarlouis, /trattoria-saarlouis, /italienisch-essen-saarlouis
 *   SUPPORT: /speisekarte, /reservierung, /oeffnungszeiten, /kontakt, /ueber-uns, /faq
 *   AREA:  /italiener-dillingen, /pizzeria-saarwellingen, /italiener-roden, /italiener-fraulautern, /italiener-wallerfangen
 */

export type SeoIntent = "informational" | "commercial" | "transactional" | "navigational";

export type SeoPage = {
  path: string;
  title: string; // <60 chars
  description: string; // <160 chars
  keyword: string;
  secondaryKeywords: string[];
  intent: SeoIntent;
  cluster: "hub" | "pizza" | "italy" | "support" | "area";
  /** Slugs of related pages (path without leading /) */
  related: string[];
  priority: number; // sitemap priority 0.0 – 1.0
  changeFrequency: "daily" | "weekly" | "monthly" | "yearly";
};

export const SEO_PAGES: SeoPage[] = [
  // ───── HUB ─────
  {
    path: "/",
    title: "AMICIZIA · Italiener & Pizzeria in Saarlouis",
    description:
      "Italienische Trattoria in Saarlouis. Steinofenpizza, frische Pasta & Familienrezepte seit 2013. Industriestraße 20. Täglich geöffnet.",
    keyword: "italiener saarlouis",
    secondaryKeywords: ["pizzeria saarlouis", "pizza saarlouis", "trattoria saarlouis"],
    intent: "commercial",
    cluster: "hub",
    related: ["pizzeria-saarlouis", "speisekarte", "pizza-bestellen-saarlouis", "kontakt"],
    priority: 1.0,
    changeFrequency: "weekly",
  },
  {
    path: "/pizzeria-saarlouis",
    title: "Pizzeria Saarlouis · Steinofen seit 2013 — AMICIZIA",
    description:
      "Pizzeria in Saarlouis: handgemachte Steinofenpizza, San-Marzano-Tomaten, frischer Teig. Industriestraße 20. Abholung & vor Ort essen.",
    keyword: "pizzeria saarlouis",
    secondaryKeywords: [
      "pizzaria saarlouis",
      "pizzeria saarlouis innenstadt",
      "beste pizzeria saarlouis",
      "italienische pizzeria saarlouis",
    ],
    intent: "commercial",
    cluster: "hub",
    related: [
      "pizza-saarlouis",
      "steinofen-pizza-saarlouis",
      "speisekarte",
      "pizza-bestellen-saarlouis",
      "kontakt",
    ],
    priority: 0.95,
    changeFrequency: "weekly",
  },

  // ───── PIZZA ─────
  {
    path: "/pizza-saarlouis",
    title: "Pizza Saarlouis · Frisch & handgemacht — AMICIZIA",
    description:
      "Pizza in Saarlouis: knuspriger Steinofenboden, 48 h gereifter Teig, San-Marzano-Tomaten. Margherita bis Diavola — täglich frisch gebacken.",
    keyword: "pizza saarlouis",
    secondaryKeywords: [
      "pizza saarlouis abholen",
      "knusprige pizza saarlouis",
      "italienische pizza saarlouis",
      "ofenfrische pizza saarlouis",
    ],
    intent: "commercial",
    cluster: "pizza",
    related: [
      "pizzeria-saarlouis",
      "steinofen-pizza-saarlouis",
      "beste-pizza-saarlouis",
      "pizza-bestellen-saarlouis",
      "speisekarte",
    ],
    priority: 0.9,
    changeFrequency: "weekly",
  },
  {
    path: "/steinofen-pizza-saarlouis",
    title: "Steinofen-Pizza Saarlouis · Echter Holzofen — AMICIZIA",
    description:
      "Steinofenpizza in Saarlouis: 400 °C Hitze, dünner Boden, leicht rauchig. Authentisch italienisch — wie in Neapel, mitten in Saarlouis.",
    keyword: "steinofen pizza saarlouis",
    secondaryKeywords: [
      "steinofenpizza saarlouis",
      "holzofen pizza saarlouis",
      "neapolitanische pizza saarlouis",
      "italienische steinofenpizza saarland",
    ],
    intent: "commercial",
    cluster: "pizza",
    related: ["pizzeria-saarlouis", "pizza-saarlouis", "beste-pizza-saarlouis", "speisekarte"],
    priority: 0.85,
    changeFrequency: "monthly",
  },
  {
    path: "/beste-pizza-saarlouis",
    title: "Beste Pizza in Saarlouis · Daran erkennst du sie",
    description:
      "Worauf es bei guter Pizza in Saarlouis ankommt: Teigreife, Steinofen, ehrliche Zutaten. Plus: warum AMICIZIA seit 2013 voll ist.",
    keyword: "beste pizza saarlouis",
    secondaryKeywords: [
      "gute pizza saarlouis",
      "leckere pizza saarlouis",
      "top pizza saarlouis",
      "lieblings pizzeria saarlouis",
    ],
    intent: "commercial",
    cluster: "pizza",
    related: ["pizzeria-saarlouis", "pizza-saarlouis", "steinofen-pizza-saarlouis", "ueber-uns"],
    priority: 0.8,
    changeFrequency: "monthly",
  },
  {
    path: "/pizza-bestellen-saarlouis",
    title: "Pizza bestellen in Saarlouis · Online & Abholung",
    description:
      "Pizza in Saarlouis online bestellen und ofenfrisch abholen. Sichere Bezahlung über SumUp. Steinofen, 48 h Teig — Industriestraße 20.",
    keyword: "pizza bestellen saarlouis",
    secondaryKeywords: [
      "pizza abholen saarlouis",
      "essen bestellen saarlouis",
      "online bestellen saarlouis italiener",
      "pizza to go saarlouis",
    ],
    intent: "transactional",
    cluster: "pizza",
    related: ["speisekarte", "pizzeria-saarlouis", "pizza-saarlouis", "oeffnungszeiten"],
    priority: 0.9,
    changeFrequency: "weekly",
  },

  // ───── ITALY ─────
  {
    path: "/italiener-saarlouis",
    title: "Italiener in Saarlouis · Trattoria di Famiglia",
    description:
      "Familiengeführter Italiener in Saarlouis seit 2013. Hausgemachte Pasta, Steinofenpizza, italienische Klassiker. Industriestraße 20.",
    keyword: "italiener saarlouis",
    secondaryKeywords: [
      "italiener in der nähe saarlouis",
      "italienisch essen saarlouis",
      "italienische küche saarlouis",
      "italiener saarlouis innenstadt",
    ],
    intent: "commercial",
    cluster: "italy",
    related: [
      "italienisches-restaurant-saarlouis",
      "trattoria-saarlouis",
      "pizzeria-saarlouis",
      "speisekarte",
      "ueber-uns",
    ],
    priority: 0.95,
    changeFrequency: "weekly",
  },
  {
    path: "/italienisches-restaurant-saarlouis",
    title: "Italienisches Restaurant Saarlouis · AMICIZIA Trattoria",
    description:
      "Italienisches Restaurant in Saarlouis: warme Atmosphäre, ehrliche Küche, familiengeführt seit 2013. Reservierung empfohlen.",
    keyword: "italienisches restaurant saarlouis",
    secondaryKeywords: [
      "italienische restaurants saarlouis",
      "restaurant italiener saarlouis",
      "italienisch restaurant saarland",
      "italienisches essen saarlouis",
    ],
    intent: "commercial",
    cluster: "italy",
    related: ["italiener-saarlouis", "trattoria-saarlouis", "reservierung", "speisekarte"],
    priority: 0.85,
    changeFrequency: "monthly",
  },
  {
    path: "/trattoria-saarlouis",
    title: "Trattoria in Saarlouis · Familienküche — AMICIZIA",
    description:
      "Eine echte Trattoria in Saarlouis: kleine Karte, große Geschmäcker, familiäres Wirtshaus-Gefühl. Wie in Italien — nur näher.",
    keyword: "trattoria saarlouis",
    secondaryKeywords: [
      "trattoria di famiglia saarlouis",
      "italienische trattoria saarland",
      "kleine trattoria saarlouis",
      "amicizia trattoria",
    ],
    intent: "commercial",
    cluster: "italy",
    related: ["italiener-saarlouis", "italienisches-restaurant-saarlouis", "ueber-uns", "speisekarte"],
    priority: 0.8,
    changeFrequency: "monthly",
  },
  {
    path: "/italienisch-essen-saarlouis",
    title: "Italienisch essen in Saarlouis · Pasta, Pizza, Vino",
    description:
      "Italienisch essen gehen in Saarlouis: hausgemachte Pasta, Steinofenpizza, Antipasti. Familiäre Atmosphäre, ehrliche Preise.",
    keyword: "italienisch essen saarlouis",
    secondaryKeywords: [
      "italienisches essen saarlouis",
      "essen gehen saarlouis italiener",
      "ausgehen saarlouis italienisch",
      "italienische gerichte saarlouis",
    ],
    intent: "commercial",
    cluster: "italy",
    related: ["italiener-saarlouis", "speisekarte", "reservierung", "pizzeria-saarlouis"],
    priority: 0.85,
    changeFrequency: "monthly",
  },

  // ───── SUPPORT ─────
  {
    path: "/speisekarte",
    title: "Speisekarte · Pizza, Pasta, Ciabatta — AMICIZIA",
    description:
      "Unsere komplette Speisekarte: handgemachte Steinofenpizza, frische Pasta, Ciabatta und Wraps. Alle Preise und Beschreibungen.",
    keyword: "speisekarte amicizia saarlouis",
    secondaryKeywords: ["menü italiener saarlouis", "pizza karte saarlouis", "speisekarte pizzeria saarlouis"],
    intent: "informational",
    cluster: "support",
    related: ["pizzeria-saarlouis", "pizza-bestellen-saarlouis", "pizza-saarlouis", "italiener-saarlouis"],
    priority: 0.9,
    changeFrequency: "weekly",
  },
  {
    path: "/reservierung",
    title: "Tisch reservieren in Saarlouis · AMICIZIA",
    description:
      "Tisch reservieren beim Italiener in Saarlouis. Per Telefon oder Instagram. Gruppen, Anlässe und spontane Besuche willkommen.",
    keyword: "tisch reservieren saarlouis",
    secondaryKeywords: [
      "italiener reservieren saarlouis",
      "restaurant reservieren saarlouis",
      "trattoria reservieren saarlouis",
    ],
    intent: "transactional",
    cluster: "support",
    related: ["italiener-saarlouis", "kontakt", "oeffnungszeiten", "italienisches-restaurant-saarlouis"],
    priority: 0.7,
    changeFrequency: "yearly",
  },
  {
    path: "/oeffnungszeiten",
    title: "Öffnungszeiten · AMICIZIA Saarlouis",
    description:
      "Öffnungszeiten unserer Pizzeria & Trattoria in Saarlouis. Täglich geöffnet, Industriestraße 20. Heute geöffnet ab 10:00 Uhr.",
    keyword: "öffnungszeiten amicizia saarlouis",
    secondaryKeywords: [
      "italiener saarlouis öffnungszeiten",
      "pizzeria saarlouis offen",
      "italiener saarlouis heute geöffnet",
    ],
    intent: "navigational",
    cluster: "support",
    related: ["kontakt", "reservierung", "pizza-bestellen-saarlouis", "pizzeria-saarlouis"],
    priority: 0.7,
    changeFrequency: "monthly",
  },
  {
    path: "/kontakt",
    title: "Kontakt · AMICIZIA Saarlouis · Industriestraße 20",
    description:
      "Kontakt zu AMICIZIA in Saarlouis: Adresse, Telefon, Anfahrt, Karte. Industriestraße 20, 66740 Saarlouis. Parkplätze direkt vor der Tür.",
    keyword: "italiener saarlouis kontakt",
    secondaryKeywords: ["amicizia saarlouis adresse", "italiener industriestraße saarlouis"],
    intent: "navigational",
    cluster: "support",
    related: ["oeffnungszeiten", "reservierung", "pizzeria-saarlouis", "italiener-saarlouis"],
    priority: 0.7,
    changeFrequency: "yearly",
  },
  {
    path: "/ueber-uns",
    title: "Über uns · Die Familie hinter AMICIZIA",
    description:
      "Seit 2013 in Saarlouis: die Geschichte hinter AMICIZIA, unser Steinofen, unsere Familie. Warum wir tun, was wir tun.",
    keyword: "amicizia saarlouis",
    secondaryKeywords: [
      "italiener saarlouis familie",
      "trattoria di famiglia saarlouis",
      "italienisches restaurant familiengeführt saarlouis",
    ],
    intent: "informational",
    cluster: "support",
    related: ["italiener-saarlouis", "trattoria-saarlouis", "pizzeria-saarlouis", "kontakt"],
    priority: 0.7,
    changeFrequency: "yearly",
  },
  {
    path: "/faq",
    title: "FAQ · Häufige Fragen — AMICIZIA Saarlouis",
    description:
      "Häufige Fragen zu unserer Pizzeria & Trattoria in Saarlouis: Öffnungszeiten, Bestellung, Abholung, Reservierung, Allergien, Parken.",
    keyword: "amicizia saarlouis fragen",
    secondaryKeywords: ["pizzeria saarlouis faq", "italiener saarlouis bestellung", "italiener saarlouis allergene"],
    intent: "informational",
    cluster: "support",
    related: ["pizza-bestellen-saarlouis", "reservierung", "oeffnungszeiten", "kontakt"],
    priority: 0.6,
    changeFrequency: "monthly",
  },

  // ───── AREA ─────
  {
    path: "/italiener-dillingen",
    title: "Italiener Dillingen · Pizza & Pasta — AMICIZIA",
    description:
      "Italiener für Gäste aus Dillingen: 6 km nach Saarlouis. Steinofenpizza, frische Pasta, gemütliche Trattoria-Atmosphäre.",
    keyword: "italiener dillingen",
    secondaryKeywords: [
      "pizzeria dillingen",
      "pizza dillingen saar",
      "italienisches restaurant dillingen",
      "italiener dillingen saar",
    ],
    intent: "commercial",
    cluster: "area",
    related: ["italiener-saarlouis", "pizzeria-saarlouis", "pizza-saarlouis", "kontakt"],
    priority: 0.65,
    changeFrequency: "monthly",
  },
  {
    path: "/pizzeria-saarwellingen",
    title: "Pizzeria für Saarwellingen · AMICIZIA in Saarlouis",
    description:
      "Pizzeria für Gäste aus Saarwellingen: 7 km nach Saarlouis. Steinofen, frischer Teig, beliebte Adresse für italienisches Essen.",
    keyword: "pizzeria saarwellingen",
    secondaryKeywords: [
      "pizza saarwellingen",
      "italiener saarwellingen",
      "italienisch saarwellingen",
    ],
    intent: "commercial",
    cluster: "area",
    related: ["pizzeria-saarlouis", "italiener-saarlouis", "pizza-saarlouis", "kontakt"],
    priority: 0.6,
    changeFrequency: "monthly",
  },
  {
    path: "/italiener-roden",
    title: "Italiener Roden Saarlouis · AMICIZIA",
    description:
      "Italiener für Roden: nur wenige Minuten von Saarlouis-Roden entfernt. Steinofenpizza, Pasta, Familienküche — Industriestraße 20.",
    keyword: "italiener roden",
    secondaryKeywords: ["pizzeria roden saarlouis", "italienisch roden", "italiener saarlouis roden"],
    intent: "commercial",
    cluster: "area",
    related: ["italiener-saarlouis", "pizzeria-saarlouis", "pizza-saarlouis", "kontakt"],
    priority: 0.6,
    changeFrequency: "monthly",
  },
  {
    path: "/italiener-fraulautern",
    title: "Italiener Fraulautern · AMICIZIA Saarlouis",
    description:
      "Italiener für Fraulautern: in 5 Minuten in Saarlouis. Steinofen, frischer Teig, gemütliche Trattoria. Familiengeführt seit 2013.",
    keyword: "italiener fraulautern",
    secondaryKeywords: ["pizzeria fraulautern", "italienisch fraulautern", "italiener saarlouis fraulautern"],
    intent: "commercial",
    cluster: "area",
    related: ["italiener-saarlouis", "pizzeria-saarlouis", "pizza-saarlouis", "kontakt"],
    priority: 0.6,
    changeFrequency: "monthly",
  },
  {
    path: "/italiener-wallerfangen",
    title: "Italiener Wallerfangen · AMICIZIA in Saarlouis",
    description:
      "Italiener für Gäste aus Wallerfangen: 4 km nach Saarlouis. Pizza aus dem Steinofen, hausgemachte Pasta, herzliche Trattoria.",
    keyword: "italiener wallerfangen",
    secondaryKeywords: ["pizzeria wallerfangen", "italienisch wallerfangen", "pizza wallerfangen"],
    intent: "commercial",
    cluster: "area",
    related: ["italiener-saarlouis", "pizzeria-saarlouis", "pizza-saarlouis", "kontakt"],
    priority: 0.6,
    changeFrequency: "monthly",
  },
];

export function getPage(path: string): SeoPage | undefined {
  return SEO_PAGES.find((p) => p.path === path);
}

export function getRelated(path: string): SeoPage[] {
  const page = getPage(path);
  if (!page) return [];
  return page.related
    .map((slug) => SEO_PAGES.find((p) => p.path === `/${slug}`))
    .filter((p): p is SeoPage => Boolean(p));
}

/** Pages grouped for footer link list */
export const PAGES_BY_CLUSTER = {
  hub: SEO_PAGES.filter((p) => p.cluster === "hub"),
  pizza: SEO_PAGES.filter((p) => p.cluster === "pizza"),
  italy: SEO_PAGES.filter((p) => p.cluster === "italy"),
  support: SEO_PAGES.filter((p) => p.cluster === "support"),
  area: SEO_PAGES.filter((p) => p.cluster === "area"),
};
