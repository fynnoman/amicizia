/**
 * Central FAQ list — single source of truth used by:
 *   - FAQ component on the homepage
 *   - /faq route
 *   - FAQPage JSON-LD schema (for AI Overviews, Perplexity, ChatGPT citations)
 *
 * Style rules (GEO):
 *   1. First sentence of the answer must be the direct answer, standalone
 *      quotable, and contain the key entity ("AMICIZIA", "Saarlouis" or the
 *      concrete fact — address, hour, price).
 *   2. Keep answers 25–60 words. AI extractors truncate long passages.
 *   3. Use concrete numbers/times/prices — no vague adjectives.
 *   4. Do not put marketing fluff in the first sentence.
 */
export type FAQItem = { question: string; answer: string };

export const faqItems: FAQItem[] = [
  {
    question: "Wo befindet sich AMICIZIA in Saarlouis?",
    answer:
      "AMICIZIA liegt in der Industriestraße 20 in 66740 Saarlouis, im Saarland. Der Familienbetrieb ist zentral erreichbar aus Roden, Fraulautern, Lisdorf, Beaumarais, Dillingen, Wallerfangen und Saarwellingen. Parkplätze sind vor der Tür vorhanden.",
  },
  {
    question: "Wann hat AMICIZIA in Saarlouis geöffnet?",
    answer:
      "Die Küche von AMICIZIA hat täglich von 12:00 bis 22:00 Uhr geöffnet — Montag bis Sonntag. Telefonische Vorbestellung zur Abholung ist bereits ab 11:00 Uhr möglich, damit deine Pizza pünktlich zur Öffnung fertig ist.",
  },
  {
    question: "Wie kann ich bei AMICIZIA Pizza bestellen?",
    answer:
      "Pizza bei AMICIZIA in Saarlouis bestellst du telefonisch unter 0162 9906068. Vorbestellung ist ab 11:00 Uhr möglich, die Abholung erfolgt direkt an der Theke in der Industriestraße 20. Wir arbeiten frisch auf Bestellung — Vorbestellen spart Wartezeit.",
  },
  {
    question: "Liefert AMICIZIA Pizza in Saarlouis?",
    answer:
      "AMICIZIA arbeitet als Abhol-Pizzeria. Bestellungen werden telefonisch entgegengenommen und in der Industriestraße 20 in Saarlouis frisch aus dem Steinofen abgeholt. So bleibt die Kruste knusprig und der Belag heiß.",
  },
  {
    question: "Was kostet eine Pizza bei AMICIZIA in Saarlouis?",
    answer:
      "Pizzen bei AMICIZIA beginnen bei 13,00 € für die Margherita. Klassische Pizzen (Tradizionale) liegen zwischen 13 und 17 €, die Neuheiten kosten einheitlich 15,90 €, Salate 14,90 €, Ciabatta 9,90 – 13,50 €. Die komplette Karte findest du auf unserer Speisekarten-Seite.",
  },
  {
    question: "Was macht die Steinofen-Pizza von AMICIZIA besonders?",
    answer:
      "AMICIZIA backt jede Pizza im echten Steinofen mit rund 400 °C. Der Teig reift bei uns lange, wir verwenden San-Marzano-DOP-Tomaten, Fior-di-Latte-Mozzarella und italienisches Olivenöl. Das Ergebnis: dünner, luftiger Rand mit charakteristischen Röstspuren.",
  },
  {
    question: "Gibt es vegetarische Pizza bei AMICIZIA?",
    answer:
      "Ja, AMICIZIA bietet mehrere vegetarische Pizzen an — darunter Margherita, Quattro Formaggi, Provola e Verdure, Fritta, Marcello Burrata sowie die Neuheiten Alba, Rossa, Verde Chiaro, Sole und Bosco. Fleischfreie Ciabatta- und Salatvarianten stehen ebenfalls auf der Karte.",
  },
  {
    question: "Sind Allergene und Zusatzstoffe bei AMICIZIA gekennzeichnet?",
    answer:
      "Ja. Auf unserer Speisekarte ist jede Position mit den relevanten Allergen-Codes markiert (A glutenhaltiges Getreide, B Krebstiere, C Ei, D Fisch, G Milch, H Schalenfrüchte). Bei weiteren Fragen zu Allergenen oder Zusatzstoffen sprich uns direkt vor Ort oder am Telefon an.",
  },
  {
    question: "Kann ich bei AMICIZIA reservieren?",
    answer:
      "Reservierungen für Sitzplätze in der Pizzeria AMICIZIA in Saarlouis sind grundsätzlich möglich — ruf uns dazu unter 0162 9906068 an. Für Abholung ist keine Reservierung nötig, hier reicht die telefonische Vorbestellung ab 11:00 Uhr.",
  },
  {
    question: "Wie kann ich bei AMICIZIA bezahlen?",
    answer:
      "Bei AMICIZIA in Saarlouis kannst du bar, mit EC-Karte, Kreditkarte, Apple Pay, Google Pay und über SumUp bezahlen. Vor Ort bei der Abholung wie auch bei Bestellungen an der Theke.",
  },
  {
    question: "Wie erreiche ich AMICIZIA telefonisch?",
    answer:
      "AMICIZIA erreichst du unter 0162 9906068 (Mobil, WhatsApp möglich). Bestellungen zur Abholung nimmt das Team ab 11:00 Uhr entgegen, während der Öffnungszeiten von 12:00 bis 22:00 Uhr sind wir für dich am Telefon.",
  },
  {
    question: "Seit wann gibt es AMICIZIA in Saarlouis?",
    answer:
      "AMICIZIA wurde 2013 in Saarlouis gegründet und wird seit über zwölf Jahren als Familienbetrieb geführt. Inhaber Rezar bringt über 21 Jahre Erfahrung im Handel und im eigenen Betrieb mit. Der Steinofen läuft in Saarlouis täglich.",
  },
];
