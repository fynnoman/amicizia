export type MenuCategoryKey = "pizza" | "ciabatta" | "wrap";

export type MenuItem = {
	id: string;
	name: string;
	description: string;
	price: number;
	category: MenuCategoryKey;
	popular?: boolean;
	ingredients: string[];
	emoji?: string;
};

export const categoryEmoji: Record<MenuCategoryKey, string> = {
	pizza: "🍕",
	ciabatta: "🥖",
	wrap: "🌯",
};

export type MenuCategory = {
	name: string;
	key: MenuCategoryKey | "all";
};

export const categories: MenuCategory[] = [
	{ name: "Alle", key: "all" },
	{ name: "Pizza", key: "pizza" },
	{ name: "Ciabatta", key: "ciabatta" },
	{ name: "Wraps", key: "wrap" },
];

export const menuItems: MenuItem[] = [
	{
		id: "pizza-margherita",
		name: "Margherita",
		description: "Tomatensauce, Mozzarella, frisches Basilikum",
		price: 9.9,
		category: "pizza",
		popular: true,
		ingredients: ["Tomate", "Käse", "Basilikum"],
	},
	{
		id: "pizza-diavola",
		name: "Diavola",
		description: "Tomatensauce, Mozzarella, scharfe Salami, Peperoni",
		price: 12.9,
		category: "pizza",
		popular: true,
		ingredients: ["Tomate", "Käse", "Salami", "Peperoni"],
	},
	{
		id: "pizza-quattro-formaggi",
		name: "Quattro Formaggi",
		description: "Mozzarella, Gorgonzola, Parmesan, Ricotta",
		price: 13.9,
		category: "pizza",
		ingredients: ["Käse", "Gorgonzola", "Parmesan", "Ricotta"],
	},
	{
		id: "pizza-prosciutto-rucola",
		name: "Prosciutto e Rucola",
		description: "Tomatensauce, Mozzarella, Parmaschinken, Rucola",
		price: 14.9,
		category: "pizza",
		popular: true,
		ingredients: ["Tomate", "Käse", "Schinken", "Rucola"],
	},
	{
		id: "pizza-vegetariana",
		name: "Vegetariana",
		description: "Tomatensauce, Mozzarella, frisches Gemüse der Saison",
		price: 12.9,
		category: "pizza",
		ingredients: ["Tomate", "Käse", "Gemüse"],
	},

	{
		id: "ciabatta-verde",
		name: "Ciabatta Verde",
		description: "Ciabatta mit Kräutern und Olivenöl",
		price: 8.9,
		category: "ciabatta",
		ingredients: ["Brot", "Kräuter", "Olivenöl"],
	},
	{
		id: "ciabatta-piccante",
		name: "Ciabatta Piccante",
		description: "Ciabatta mit scharfer Salami und Käse überbacken",
		price: 12.9,
		category: "ciabatta",
		popular: true,
		ingredients: ["Brot", "Salami", "Käse"],
	},

	{
		id: "wrap-chicken",
		name: "Chicken Wrap",
		description: "Gegrilltes Hühnchen, Salat, hausgemachte Sauce",
		price: 9.5,
		category: "wrap",
		popular: true,
		ingredients: ["Hühnchen", "Salat", "Sauce"],
	},
	{
		id: "wrap-veggie",
		name: "Veggie Wrap",
		description: "Gegrilltes Gemüse, Hummus, Rucola",
		price: 9.0,
		category: "wrap",
		ingredients: ["Gemüse", "Hummus", "Rucola"],
	},
];

export function findItemById(id: string): MenuItem | undefined {
	return menuItems.find((it) => it.id === id);
}

export function formatPrice(value: number): string {
	return value.toFixed(2).replace(".", ",");
}
