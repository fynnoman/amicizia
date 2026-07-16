/**
 * Single source of truth for AMICIZIA business data.
 * Used by: metadata, JSON-LD schemas, sitemap, footer, contact, structured data.
 *
 * NOTE: Phone number is a placeholder pattern — replace with the real
 * restaurant number before launch. All other data is authoritative.
 */

export const SITE_URL = "https://www.amicizia-saarlouis.de" as const;

export const BUSINESS = {
  legalName: "AMICIZIA",
  shortName: "AMICIZIA",
  tagline: "Familienbetrieb · Saarlouis",
  founded: 2013,
  cuisines: ["Italienisch", "Pizza", "Mediterran"],
  priceRange: "€€",
  servesCuisine: ["Italian", "Pizza", "Mediterranean"],
  acceptsReservations: true,
  paymentAccepted: ["Cash", "Credit Card", "EC", "Apple Pay", "Google Pay", "SumUp"],
  currenciesAccepted: "EUR",

  // Contact — phone is a placeholder until the owner provides the live number.
  phone: "+49 6831 4877800",
  phoneDisplay: "06831 4877800",
  email: "ciao@amicizia-saarlouis.de",

  // Address — Industriestraße 20, 66740 Saarlouis (verify exact coords with owner)
  address: {
    street: "Industriestraße 20",
    locality: "Saarlouis",
    region: "SL",
    regionName: "Saarland",
    postalCode: "66740",
    country: "DE",
    countryName: "Deutschland",
  },

  // Geo coordinates for Industriestraße 20, Saarlouis (approx — owner can refine)
  geo: {
    latitude: 49.3137,
    longitude: 6.7514,
  },

  // Opening hours — Vorbestellung telefonisch ab 11:00, Küche 12:00–22:00 täglich
  hours: {
    weekdayText: [
      "Montag: 12:00–22:00",
      "Dienstag: 12:00–22:00",
      "Mittwoch: 12:00–22:00",
      "Donnerstag: 12:00–22:00",
      "Freitag: 12:00–22:00",
      "Samstag: 12:00–22:00",
      "Sonntag: 12:00–22:00",
    ],
    // Schema.org OpeningHoursSpecification
    spec: [
      {
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ] as const,
        opens: "12:00",
        closes: "22:00",
      },
    ],
  },

  socials: {
    instagram: "https://www.instagram.com/amicizia.saarlouis/",
    instagramHandle: "@amicizia.saarlouis",
    facebook: "",
    tiktok: "",
  },

  // Areas served — for local SEO breadth (do NOT exceed 30 location pages)
  areaServed: [
    "Saarlouis",
    "Roden",
    "Fraulautern",
    "Lisdorf",
    "Beaumarais",
    "Dillingen/Saar",
    "Saarwellingen",
    "Wallerfangen",
    "Bous",
    "Ensdorf",
    "Schwalbach",
    "Rehlingen-Siersburg",
  ],
} as const;

export const SITE_NAME = "AMICIZIA — Pizzeria & Italiener in Saarlouis";
export const SITE_TAGLINE =
  "Italienischer Familienbetrieb mit Steinofen in Saarlouis — Pizza, Ciabatta und Wraps seit 2013.";

/** Stable per-page-type defaults used by generateMetadata helpers. */
export const DEFAULT_OG_IMAGE = {
  url: `${SITE_URL}/photos/amicizia-1.jpg`,
  width: 1200,
  height: 630,
  alt: "AMICIZIA — Italienischer Familienbetrieb in Saarlouis",
} as const;
