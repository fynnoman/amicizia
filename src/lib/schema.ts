/**
 * Schema.org JSON-LD generators. All structured data passes through here so
 * NAP, hours, geo, and price-range stay consistent across pages.
 */

import { BUSINESS, SITE_URL, SITE_NAME, DEFAULT_OG_IMAGE } from "@/data/business";

const ORG_ID = `${SITE_URL}/#restaurant`;

/** Restaurant is the canonical type for this entity (covers LocalBusiness props). */
export function restaurantSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "@id": ORG_ID,
    name: BUSINESS.legalName,
    alternateName: ["AMICIZIA Saarlouis", "Amicizia Pizzeria"],
    description:
      "Italienischer Familienbetrieb mit Steinofen in Saarlouis. Steinofen-Pizza, hausgemachte Wraps und Ciabatta, seit 2013. Bestellung zur Abholung telefonisch.",
    url: SITE_URL,
    logo: `${SITE_URL}/icon.png`,
    image: [
      `${SITE_URL}/photos/amicizia-1.jpg`,
      `${SITE_URL}/photos/amicizia-2.jpg`,
      `${SITE_URL}/photos/amicizia-3.jpg`,
    ],
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    priceRange: BUSINESS.priceRange,
    servesCuisine: BUSINESS.servesCuisine,
    paymentAccepted: BUSINESS.paymentAccepted.join(", "),
    currenciesAccepted: BUSINESS.currenciesAccepted,
    acceptsReservations: BUSINESS.acceptsReservations,
    foundingDate: String(BUSINESS.founded),
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.address.street,
      addressLocality: BUSINESS.address.locality,
      addressRegion: BUSINESS.address.regionName,
      postalCode: BUSINESS.address.postalCode,
      addressCountry: BUSINESS.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: BUSINESS.geo.latitude,
      longitude: BUSINESS.geo.longitude,
    },
    openingHoursSpecification: BUSINESS.hours.spec.map((s) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: s.dayOfWeek,
      opens: s.opens,
      closes: s.closes,
    })),
    areaServed: BUSINESS.areaServed.map((name) => ({
      "@type": "City",
      name,
    })),
    sameAs: [BUSINESS.socials.instagram].filter(Boolean),
    hasMenu: `${SITE_URL}/#menu`,
    potentialAction: {
      "@type": "OrderAction",
      target: `tel:${BUSINESS.phone.replace(/\s+/g, "")}`,
      deliveryMethod: "http://purl.org/goodrelations/v1#PickUp",
    },
  } as const;
}

export function breadcrumbSchema(trail: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path === "/" ? "" : item.path}`,
    })),
  };
}

export function webpageSchema(opts: {
  url: string;
  name: string;
  description: string;
  primaryImage?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${SITE_URL}${opts.url}#webpage`,
    url: `${SITE_URL}${opts.url}`,
    name: opts.name,
    description: opts.description,
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": ORG_ID },
    primaryImageOfPage: opts.primaryImage
      ? {
          "@type": "ImageObject",
          url: opts.primaryImage,
        }
      : undefined,
    inLanguage: "de-DE",
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: SITE_URL,
    inLanguage: "de-DE",
    publisher: { "@id": ORG_ID },
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: BUSINESS.legalName,
    url: SITE_URL,
    logo: `${SITE_URL}/icon.png`,
    foundingDate: String(BUSINESS.founded),
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.address.street,
      addressLocality: BUSINESS.address.locality,
      postalCode: BUSINESS.address.postalCode,
      addressCountry: BUSINESS.address.country,
    },
    sameAs: [BUSINESS.socials.instagram].filter(Boolean),
  };
}

export type FAQItem = { question: string; answer: string };

export function faqSchema(items: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((it) => ({
      "@type": "Question",
      name: it.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: it.answer,
      },
    })),
  };
}

export function menuSchema(opts: {
  url: string;
  sections: Array<{
    name: string;
    items: Array<{ name: string; description?: string; price: number; image?: string }>;
  }>;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Menu",
    "@id": `${SITE_URL}${opts.url}#menu`,
    name: "Speisekarte AMICIZIA Saarlouis",
    inLanguage: "de-DE",
    hasMenuSection: opts.sections.map((sec) => ({
      "@type": "MenuSection",
      name: sec.name,
      hasMenuItem: sec.items.map((it) => ({
        "@type": "MenuItem",
        name: it.name,
        description: it.description,
        image: it.image,
        offers: {
          "@type": "Offer",
          price: it.price.toFixed(2),
          priceCurrency: "EUR",
        },
      })),
    })),
  };
}

export function defaultOgImageObj() {
  return {
    "@type": "ImageObject",
    url: DEFAULT_OG_IMAGE.url,
    width: DEFAULT_OG_IMAGE.width,
    height: DEFAULT_OG_IMAGE.height,
  };
}
