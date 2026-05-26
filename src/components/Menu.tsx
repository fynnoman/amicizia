"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";

const categories = [
	{ name: "Alle", key: "all" },
	{ name: "Pizza", key: "pizza" },
	{ name: "Ciabatta", key: "ciabatta" },
	{ name: "Wraps", key: "wrap" },
];

const menuItems = [
	{
		name: "Margherita",
		description: "Tomatensauce, Mozzarella, frisches Basilikum",
		price: "9,90",
		category: "pizza",
		popular: true,
		ingredients: ["Tomate", "Käse", "Basilikum"],
	},
	{
		name: "Diavola",
		description: "Tomatensauce, Mozzarella, scharfe Salami, Peperoni",
		price: "12,90",
		category: "pizza",
		popular: true,
		ingredients: ["Tomate", "Käse", "Salami", "Peperoni"],
	},
	{
		name: "Quattro Formaggi",
		description: "Mozzarella, Gorgonzola, Parmesan, Ricotta",
		price: "13,90",
		category: "pizza",
		popular: false,
		ingredients: ["Käse", "Gorgonzola", "Parmesan", "Ricotta"],
	},
	{
		name: "Prosciutto e Rucola",
		description: "Tomatensauce, Mozzarella, Parmaschinken, Rucola",
		price: "14,90",
		category: "pizza",
		popular: true,
		ingredients: ["Tomate", "Käse", "Schinken", "Rucola"],
	},
	{
		name: "Vegetariana",
		description: "Tomatensauce, Mozzarella, frisches Gemüse der Saison",
		price: "12,90",
		category: "pizza",
		popular: false,
		ingredients: ["Tomate", "Käse", "Gemüse"],
	},

	// Ciabatta
	{
		name: "Ciabatta Verde",
		description: "Ciabatta mit Kräutern und Olivenöl",
		price: "8,90",
		category: "ciabatta",
		popular: false,
		ingredients: ["Brot", "Kräuter", "Olivenöl"],
	},
	{
		name: "Ciabatta Piccante",
		description: "Ciabatta mit scharfer Salami und Käse überbacken",
		price: "12,90",
		category: "ciabatta",
		popular: true,
		ingredients: ["Brot", "Salami", "Käse"],
	},

	// Wraps
	{
		name: "Chicken Wrap",
		description: "Gegrilltes Hühnchen, Salat, hausgemachte Sauce",
		price: "9,50",
		category: "wrap",
		popular: true,
		ingredients: ["Hühnchen", "Salat", "Sauce"],
	},
	{
		name: "Veggie Wrap",
		description: "Gegrilltes Gemüse, Hummus, Rucola",
		price: "9,00",
		category: "wrap",
		popular: false,
		ingredients: ["Gemüse", "Hummus", "Rucola"],
	},
];

function MenuCard({
	item,
	index,
}: {
	item: typeof menuItems[0];
	index: number;
}) {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<div className="card-tilt">
			<motion.div
				layout
				initial={{ opacity: 0, y: 30 }}
				animate={{ opacity: 1, y: 0 }}
				exit={{ opacity: 0, scale: 0.95 }}
				transition={{ duration: 0.4, delay: index * 0.04 }}
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
				className="card-inner group bg-white rounded-2xl p-6 transition-all duration-500 relative overflow-hidden"
			>
				{item.popular && (
					<div className="absolute top-4 right-4">
						<span className="bg-bordeaux/10 text-bordeaux text-xs font-semibold px-3 py-1 rounded-full">
							Beliebt ✦
						</span>
					</div>
				)}

				{/* Ingredient icons animation */}
				<div className="h-12 mb-3 flex items-center gap-1">
					<AnimatePresence>
						{isHovered ? (
							item.ingredients.map((ingredient, i) => (
								<motion.span
									key={ingredient + i}
									initial={{ scale: 0, y: 10, opacity: 0 }}
									animate={{ scale: 1, y: 0, opacity: 1 }}
									exit={{ scale: 0, y: -10, opacity: 0 }}
									transition={{
										type: "spring",
										stiffness: 400,
										damping: 15,
										delay: i * 0.08,
									}}
									className="text-2xl inline-block"
								>
									{ingredient}
								</motion.span>
							))
						) : (
							<motion.div
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								className="flex items-center gap-1"
							>
								{item.ingredients.slice(0, 2).map((ingredient, i) => (
									<span key={i} className="text-xl opacity-40">
										{ingredient}
									</span>
								))}
								{item.ingredients.length > 2 && (
									<span className="text-xs text-foreground/20 ml-1">
										+{item.ingredients.length - 2}
									</span>
								)}
							</motion.div>
						)}
					</AnimatePresence>
				</div>

				<h3 className="text-xl font-bold text-foreground group-hover:text-bordeaux transition-colors duration-300 mb-2">
					{item.name}
				</h3>

				<p className="text-foreground/40 text-sm leading-relaxed mb-6">
					{item.description}
				</p>

				<div className="flex items-center justify-between">
					<span className="text-2xl font-bold text-bordeaux">
						{item.price} €
					</span>
					<motion.div
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.95 }}
						className="w-9 h-9 rounded-full bg-bordeaux/10 flex items-center justify-center group-hover:bg-bordeaux transition-all duration-300 cursor-pointer"
					>
						<svg
							className="w-4 h-4 text-bordeaux group-hover:text-white transition-colors"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M14 5l7 7m0 0l-7 7m7-7H3"
							/>
						</svg>
					</motion.div>
				</div>

				{/* Subtle gradient on hover */}
				<div className="absolute inset-0 bg-gradient-to-t from-bordeaux/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl" />
			</motion.div>
		</div>
	);
}

export default function Menu() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "-100px" });
	const [activeCategory, setActiveCategory] = useState("all");

	const filtered =
		activeCategory === "all"
			? menuItems
			: menuItems.filter((item) => item.category === activeCategory);

	return (
		<section
			id="menu"
			ref={ref}
			className="relative py-32 px-6 lg:px-12 bg-cream"
		>
			<div className="max-w-7xl mx-auto">
				<div className="text-center mb-16">
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						animate={isInView ? { opacity: 1, y: 0 } : {}}
						transition={{ duration: 0.6 }}
						className="text-bordeaux text-sm tracking-[0.3em] uppercase font-medium mb-4"
					>
						Was gibt&apos;s bei uns
					</motion.p>

					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						animate={isInView ? { opacity: 1, y: 0 } : {}}
						transition={{ duration: 0.6, delay: 0.1 }}
						className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4"
					>
						Unsere <span className="text-bordeaux">Speisekarte</span>
					</motion.h2>

					<motion.p
						initial={{ opacity: 0 }}
						animate={isInView ? { opacity: 1 } : {}}
						transition={{ duration: 0.6, delay: 0.2 }}
						className="text-xl text-foreground/40 mb-2"
					>
						Unsere Pizzen — frisch und bodenständig.
					</motion.p>

					<motion.div
						initial={{ scaleX: 0 }}
						animate={isInView ? { scaleX: 1 } : {}}
						transition={{ duration: 0.8, delay: 0.3 }}
						className="w-16 h-[2px] bg-bordeaux mx-auto mt-6"
					/>
				</div>

				{/* Category Filter */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.6, delay: 0.4 }}
					className="flex flex-wrap justify-center gap-3 mb-16"
				>
					{categories.map((cat) => (
						<button
							key={cat.key}
							onClick={() => setActiveCategory(cat.key)}
							className={`px-6 py-2.5 rounded-full text-sm font-medium tracking-wider uppercase transition-all duration-300 ${
								activeCategory === cat.key
									? "bg-bordeaux text-white shadow-lg shadow-bordeaux/25"
									: "bg-white text-foreground/50 hover:text-bordeaux hover:shadow-md"
							}`}
						>
							{cat.name}
						</button>
					))}
				</motion.div>

				{/* Menu Grid */}
				<AnimatePresence mode="wait">
					<motion.div
						key={activeCategory}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
					>
						{filtered.map((item, i) => (
							<MenuCard key={item.name} item={item} index={i} />
						))}
					</motion.div>
				</AnimatePresence>

				{/* CTA */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.6, delay: 0.6 }}
					className="text-center mt-16"
				>
					<a
						href="#order"
						className="inline-flex items-center gap-3 px-10 py-4 bg-bordeaux text-white text-sm font-semibold tracking-wider uppercase rounded-full hover:bg-bordeaux-dark transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-bordeaux/25"
					>
						Komplettes Pizza-Angebot
					</a>
				</motion.div>
			</div>
		</section>
	);
}
