export type MenuCategoryKey =
  | "tradizionale"
  | "speciale"
  | "neuheiten"
  | "pasta"
  | "pizzabroetchen"
  | "ciabatta"
  | "salate"
  | "snack"
  | "dessert";

export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: number;
  category: MenuCategoryKey;
  popular?: boolean;
  allergens?: string;
};

export type MenuCategory = {
  name: string;
  key: MenuCategoryKey | "all";
  headline?: string;
};

export const categories: MenuCategory[] = [
  { name: "Alle",           key: "all" },
  { name: "Tradizionale",   key: "tradizionale" },
  { name: "Speciale",       key: "speciale" },
  { name: "Neuheiten",      key: "neuheiten", headline: "einheitlich 15,90 €" },
  { name: "Pasta",          key: "pasta" },
  { name: "Pizzabrötchen",  key: "pizzabroetchen" },
  { name: "Ciabatta",       key: "ciabatta" },
  { name: "Salate",         key: "salate", headline: "einheitlich 14,90 €" },
  { name: "Snack",          key: "snack", headline: "einheitlich 8,90 €" },
  { name: "Dessert",        key: "dessert", headline: "einheitlich 10,90 €" },
];

export const categoryLabel: Record<MenuCategoryKey, string> = {
  tradizionale:   "Pizza · Tradizionale",
  speciale:       "Pizza · Speciale",
  neuheiten:      "Pizza · Neuheiten (15,90 €)",
  pasta:          "Pasta",
  pizzabroetchen: "Pizzabrötchen · 8–10 Stück inkl. Aioli-Dip",
  ciabatta:       "Ciabatta",
  salate:         "Salate (14,90 €)",
  snack:          "Snack (8,90 €)",
  dessert:        "Dessert (10,90 €)",
};

export const menuItems: MenuItem[] = [
  // ─────────────── TRADIZIONALE ───────────────
  {
    id: "tr-margherita",
    name: "Margherita",
    description:
      "San Marzano DOP, Fior di Latte, frischer Basilikum, Parmesan, Basilikumcreme",
    price: 13.0,
    category: "tradizionale",
    popular: true,
    allergens: "A, G",
  },
  {
    id: "tr-salami",
    name: "Salami",
    description: "San Marzano DOP, Fior di Latte, Salami",
    price: 14.0,
    category: "tradizionale",
    allergens: "A, G",
  },
  {
    id: "tr-prosciutto-funghi",
    name: "Prosciutto e Funghi",
    description: "San Marzano DOP, Fior di Latte, Schinken, Champignons",
    price: 14.0,
    category: "tradizionale",
    allergens: "A, G",
  },
  {
    id: "tr-tonno",
    name: "Tonno",
    description: "San Marzano DOP, Fior di Latte, Thunfisch, Zwiebeln",
    price: 14.0,
    category: "tradizionale",
    allergens: "A, D, G",
  },
  {
    id: "tr-quattro-formaggi",
    name: "Quattro Formaggi",
    description:
      "San Marzano DOP, Fior di Latte, Gorgonzola, Parmesan, Feta, Provola",
    price: 14.0,
    category: "tradizionale",
    allergens: "A, G",
  },
  {
    id: "tr-diavola",
    name: "Diavola",
    description:
      "San Marzano DOP, Fior di Latte, scharfe Salami, Peperoni, Zwiebeln",
    price: 14.0,
    category: "tradizionale",
    popular: true,
    allergens: "A, G",
  },
  {
    id: "tr-provola-verdure",
    name: "Provola e Verdure",
    description: "San Marzano DOP, Fior di Latte, Provola, mediterranes Gemüse",
    price: 14.0,
    category: "tradizionale",
    allergens: "A, G",
  },
  {
    id: "tr-marcello-burrata",
    name: "Marcello Burrata",
    description: "San Marzano DOP, Burrata, Pistazien",
    price: 17.0,
    category: "tradizionale",
    allergens: "A, G, H",
  },
  {
    id: "tr-friarelli-kombi",
    name: "Friarelli Kombi",
    description: "San Marzano DOP, Burrata, italienische Bratwurst",
    price: 17.0,
    category: "tradizionale",
    allergens: "A, G",
  },
  {
    id: "tr-valeria",
    name: "Valeria",
    description:
      "San Marzano DOP, Fior di Latte, Cannellino-Bohnen, frische Kräuter, Peperoni, Zwiebeln, Knoblauch",
    price: 14.9,
    category: "tradizionale",
    allergens: "A, G",
  },

  // ─────────────── SPECIALE ───────────────
  {
    id: "sp-chef",
    name: "Chef",
    description:
      "San Marzano DOP, Fior di Latte, Kapern, Sardellen, grüne Oliven",
    price: 14.9,
    category: "speciale",
    allergens: "A, D, G",
  },
  {
    id: "sp-sofia",
    name: "Sofia",
    description:
      "San Marzano DOP, Fior di Latte, Salami, Champignons, Ei",
    price: 14.9,
    category: "speciale",
    allergens: "A, C, G",
  },
  {
    id: "sp-palermo",
    name: "Palermo",
    description:
      "San Marzano DOP, Fior di Latte, scharfe Salami, Rucola, Parmesan, Burrata",
    price: 15.9,
    category: "speciale",
    allergens: "A, G",
  },
  {
    id: "sp-noah",
    name: "Noah",
    description:
      "San Marzano DOP, Fior di Latte, Basilikumcreme, rote Zwiebeln, Rucola, scharfe Salami, Parmesan",
    price: 15.9,
    category: "speciale",
    allergens: "A, G",
  },
  {
    id: "sp-fritta",
    name: "Fritta",
    description:
      "San Marzano DOP, Fior di Latte, frittierte Aubergine, frittierter Spinat, Ziegenkäse",
    price: 14.9,
    category: "speciale",
    allergens: "A, G",
  },
  {
    id: "sp-salsiccia",
    name: "Salsiccia",
    description:
      "San Marzano DOP, Fior di Latte, italienische Bratwurst",
    price: 15.9,
    category: "speciale",
    allergens: "A, G",
  },
  {
    id: "sp-carbonara",
    name: "Carbonara",
    description:
      "Carbonara-Sauce, Fior di Latte, Speck, Ei, Parmesan",
    price: 15.9,
    category: "speciale",
    allergens: "A, C, G",
  },
  {
    id: "sp-nduja",
    name: "Nduja",
    description:
      "San Marzano DOP, Fior di Latte, scharfe Streichwurst, Oliven, Zwiebeln",
    price: 15.9,
    category: "speciale",
    allergens: "A, G",
  },
  {
    id: "sp-parma",
    name: "Parma",
    description:
      "San Marzano DOP, Fior di Latte, Parmaschinken, Rucola, Parmesan, Trüffelöl",
    price: 16.9,
    category: "speciale",
    popular: true,
    allergens: "A, G",
  },
  {
    id: "sp-tartufo",
    name: "Tartufo",
    description:
      "San Marzano DOP, Burrata, Trüffelöl, Parmesan, Rucola",
    price: 17.0,
    category: "speciale",
    allergens: "A, G",
  },
  {
    id: "sp-barbecue",
    name: "Barbecue",
    description:
      "Barbecuesauce, Fior di Latte, Hähnchen, rote Zwiebeln, Kirschtomaten, Oliven",
    price: 14.9,
    category: "speciale",
    allergens: "A, G",
  },
  {
    id: "sp-gamberi",
    name: "Gamberi",
    description:
      "San Marzano DOP, Fior di Latte, Garnelen, rote Zwiebeln, Kirschtomaten",
    price: 15.9,
    category: "speciale",
    allergens: "A, B, G",
  },
  {
    id: "sp-calzone",
    name: "Calzone",
    description:
      "San Marzano DOP, Fior di Latte, 4 Zutaten nach Wahl",
    price: 14.9,
    category: "speciale",
    allergens: "A, G",
  },

  // ─────────────── NEUHEITEN (15,90 €) ───────────────
  {
    id: "nh-alba",
    name: "Pizza Alba",
    description:
      "Fior di Latte, sizilianische Grundlage mit Brokkoli und getrockneten Tomaten. Nach dem Backen veredelt mit frittiertem Rucola, Parmesan und feinem Olivenöl.",
    price: 15.9,
    category: "neuheiten",
    allergens: "A, G",
  },
  {
    id: "nh-rossa",
    name: "Pizza Rossa",
    description:
      "Eine frische, sommerliche Pizza mit Blattsalaten und Granatapfelkernen. Leicht, lebendig und ausgewogen.",
    price: 15.9,
    category: "neuheiten",
    allergens: "A, G",
  },
  {
    id: "nh-verde-chiaro",
    name: "Pizza Verde Chiaro",
    description:
      "Fior di Latte als Basis, Belag mit Avocado, Kirschtomaten und eingelegter Paprika. Nach dem Backen verfeinert mit Parmesan, Trüffelöl und Granatapfel.",
    price: 15.9,
    category: "neuheiten",
    allergens: "A, G",
  },
  {
    id: "nh-basilico",
    name: "Pizza Basilico",
    description:
      "Basilikum-Pesto und Fior di Latte als Grundlage. Belag mit eingelegten Auberginen, Kapern, Sardellen und grünen Oliven. Nach dem Backen mit cremiger Burrata vollendet.",
    price: 15.9,
    category: "neuheiten",
    allergens: "A, D, G",
  },
  {
    id: "nh-sole",
    name: "Pizza Sole",
    description:
      "Fior di Latte als Basis. Belag mit knusprigen Süßkartoffel-Pommes und roten Zwiebeln. Nach dem Backen mit Burrata veredelt.",
    price: 15.9,
    category: "neuheiten",
    allergens: "A, G",
  },
  {
    id: "nh-bosco",
    name: "Pizza Bosco",
    description:
      "Fior di Latte als Basis. Belag mit Pilzen und knusprigen Süßkartoffel-Pommes. Nach dem Backen mit Burrata und Trüffelöl verfeinert.",
    price: 15.9,
    category: "neuheiten",
    popular: true,
    allergens: "A, G",
  },

  // ─────────────── PASTA ───────────────
  {
    id: "pa-carbonara",
    name: "Carbonara",
    description: "Sahnesauce, Eigelb, Speck, Parmesan",
    price: 13.9,
    category: "pasta",
    allergens: "A, C, G",
  },

  // ─────────────── PIZZABRÖTCHEN ───────────────
  {
    id: "pb-fior-di-latte",
    name: "Pizzabrötchen Fior di Latte",
    description: "Fior di Latte",
    price: 7.9,
    category: "pizzabroetchen",
    allergens: "A, G",
  },
  {
    id: "pb-thunfisch-zwiebel",
    name: "Pizzabrötchen Thunfisch & Zwiebel",
    description: "Fior di Latte, Thunfisch, Zwiebel",
    price: 8.9,
    category: "pizzabroetchen",
    allergens: "A, D, G",
  },
  {
    id: "pb-salami-schinken",
    name: "Pizzabrötchen Salami & Schinken",
    description: "Salami, Putensalami, Putenschinken",
    price: 8.9,
    category: "pizzabroetchen",
    allergens: "A, G",
  },
  {
    id: "pb-haehnchen-zwiebel",
    name: "Pizzabrötchen Hähnchen & Zwiebel",
    description: "Fior di Latte, Hähnchen, Zwiebel",
    price: 8.9,
    category: "pizzabroetchen",
    allergens: "A, G",
  },

  // ─────────────── CIABATTA ───────────────
  {
    id: "cb-burrata",
    name: "Ciabatta Burrata",
    description: "Burrata, Mortadella, Pistazienstücke, Rucola, Olivenöl",
    price: 13.5,
    category: "ciabatta",
    popular: true,
    allergens: "A, G, H",
  },
  {
    id: "cb-verde",
    name: "Ciabatta Verde",
    description: "Mozzarella, Tomaten, frischer Basilikum, Olivenöl, Oregano",
    price: 9.9,
    category: "ciabatta",
    allergens: "A, G",
  },
  {
    id: "cb-picante",
    name: "Ciabatta Picante",
    description:
      "scharfe italienische Salami, frische Tomaten, getrocknete Tomaten, Olivenöl, Oregano",
    price: 10.9,
    category: "ciabatta",
    allergens: "A, G",
  },

  // ─────────────── SALATE (14,90 €) ───────────────
  {
    id: "sa-exotica",
    name: "Burrata Exotica",
    description:
      "Rucola und Blattsalate mit Burrata, Mango, Avocado und gerösteten Cashewkernen. Abgerundet mit Granatapfel und einem Honig-Limetten-Dressing.",
    price: 14.9,
    category: "salate",
    allergens: "G, H",
  },
  {
    id: "sa-verde",
    name: "Burrata Verde",
    description:
      "Frischer Rucola mit cremiger Burrata und Avocado. Verfeinert mit einem leichten Olivenöl-Zitronen-Dressing.",
    price: 14.9,
    category: "salate",
    allergens: "G",
  },
  {
    id: "sa-rossa",
    name: "Burrata Rossa",
    description:
      "Rucola mit Kirschtomaten, Burrata und Granatapfel. Abgerundet mit einem Olivenöl-Balsamico-Dressing und frisch gehobeltem Parmesan.",
    price: 14.9,
    category: "salate",
    allergens: "G",
  },

  // ─────────────── SNACK (8,90 €) ───────────────
  {
    id: "sn-suesskartoffel",
    name: "Süßkartoffel-Pommes",
    description:
      "Knusprig frittierte Süßkartoffel-Pommes, serviert mit einer cremigen Trüffel-Parmesan-Mayo.",
    price: 8.9,
    category: "snack",
    allergens: "A, G",
  },

  // ─────────────── DESSERT (10,90 €) ───────────────
  {
    id: "de-panzerotti",
    name: "Panzerotti",
    description:
      "Frittierte Teigtaschen, goldbraun ausgebacken, gefüllt mit cremiger Nutella.",
    price: 10.9,
    category: "dessert",
    allergens: "A, G",
  },
  {
    id: "de-bombolini",
    name: "Bombolini",
    description:
      "Luftige, frittierte Teigbällchen, gefüllt mit feiner Pistaziencreme.",
    price: 10.9,
    category: "dessert",
    allergens: "A, C, G",
  },
  {
    id: "de-pizza-nutella",
    name: "Pizza Nutella",
    description:
      "Frisch gebackene Pizza, bestrichen mit Nutella und belegt mit frischen Erdbeeren.",
    price: 10.9,
    category: "dessert",
    popular: true,
    allergens: "A, G",
  },
];

export const allergenLegend = [
  { code: "A", label: "glutenhaltiges Getreide" },
  { code: "B", label: "Krebstiere" },
  { code: "C", label: "Ei" },
  { code: "D", label: "Fisch" },
  { code: "G", label: "Milch (inkl. Laktose)" },
  { code: "H", label: "Schalenfrüchte" },
];

export function findItemById(id: string): MenuItem | undefined {
  return menuItems.find((it) => it.id === id);
}

export function formatPrice(value: number): string {
  return value.toFixed(2).replace(".", ",");
}
