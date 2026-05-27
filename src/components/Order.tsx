"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
	categories,
	menuItems,
	formatPrice,
	type MenuCategory,
} from "@/data/menu";

type CartItem = {
	id: string;
	name: string;
	price: number;
	qty: number;
};

export default function Order() {
	const [activeCategory, setActiveCategory] = useState<MenuCategory["key"]>("all");
	const [cart, setCart] = useState<CartItem[]>([]);
	const [name, setName] = useState("");
	const [phone, setPhone] = useState("");
	const [note, setNote] = useState("");
	const [placing, setPlacing] = useState(false);
	const [errorMsg, setErrorMsg] = useState<string | null>(null);

	const filteredItems = useMemo(
		() =>
			activeCategory === "all"
				? menuItems
				: menuItems.filter((it) => it.category === activeCategory),
		[activeCategory]
	);

	function addToCart(itemId: string) {
		const item = menuItems.find((c) => c.id === itemId);
		if (!item) return;
		setCart((prev) => {
			const exists = prev.find((p) => p.id === itemId);
			if (exists)
				return prev.map((p) =>
					p.id === itemId ? { ...p, qty: p.qty + 1 } : p
				);
			return [
				...prev,
				{ id: item.id, name: item.name, price: item.price, qty: 1 },
			];
		});
	}

	function changeQty(id: string, qty: number) {
		setCart((prev) =>
			prev.flatMap((p) => (p.id === id ? (qty > 0 ? [{ ...p, qty }] : []) : [p]))
		);
	}

	function subtotal() {
		return cart.reduce((s, it) => s + it.price * it.qty, 0);
	}

	function validate() {
		if (!name.trim() || !phone.trim())
			return "Bitte Name und Telefon angeben.";
		if (cart.length === 0) return "Der Warenkorb ist leer.";
		return null;
	}

	async function placeOrder() {
		const err = validate();
		if (err) {
			setErrorMsg(err);
			return;
		}
		setErrorMsg(null);
		setPlacing(true);

		try {
			const res = await fetch("/api/create-checkout", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ cart, name, phone, note }),
			});

			const data = await res.json();
			if (!res.ok) {
				setErrorMsg(data?.error || "Fehler beim Erstellen der Zahlung.");
				setPlacing(false);
				return;
			}

			if (data?.url) {
				window.location.href = data.url;
			} else {
				setErrorMsg("Keine Checkout-URL erhalten.");
				setPlacing(false);
			}
		} catch (e) {
			console.error(e);
			setErrorMsg("Netzwerk- oder Serverfehler. Bitte später erneut versuchen.");
			setPlacing(false);
		}
	}

	return (
		<section id="order" className="py-20 px-6 lg:px-12 bg-white">
			<div className="max-w-7xl mx-auto">
				<div className="text-center mb-10">
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="text-bordeaux text-sm tracking-[0.3em] uppercase font-medium mb-4"
					>
						Direkt bestellen
					</motion.p>
					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="text-3xl md:text-4xl font-bold text-foreground"
					>
						Online bestellen — Abholung
					</motion.h2>
					<p className="text-foreground/50 mt-3 max-w-xl mx-auto">
						Wähle deine Gerichte, gib deine Kontaktdaten ein und bezahle sicher
						mit SumUp. Du holst deine Bestellung direkt bei uns ab.
					</p>
				</div>

				<div className="grid lg:grid-cols-3 gap-8">
					<div className="lg:col-span-2">
						<div className="flex flex-wrap gap-2 mb-6">
							{categories.map((cat) => (
								<button
									key={cat.key}
									onClick={() => setActiveCategory(cat.key)}
									className={`px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wider transition-all duration-200 ${
										activeCategory === cat.key
											? "bg-bordeaux text-white shadow-md"
											: "bg-cream text-foreground/60 hover:text-bordeaux"
									}`}
								>
									{cat.name}
								</button>
							))}
						</div>

						<div className="grid md:grid-cols-2 gap-4">
							{filteredItems.map((item) => (
								<div
									key={item.id}
									className="bg-cream p-4 rounded-2xl flex items-center justify-between gap-3"
								>
									<div className="min-w-0">
										<div className="text-lg font-semibold text-foreground truncate">
											{item.name}
										</div>
										<div className="text-sm text-foreground/40 line-clamp-2">
											{item.description}
										</div>
									</div>
									<div className="flex items-center gap-3 shrink-0">
										<div className="text-lg font-bold text-bordeaux whitespace-nowrap">
											{formatPrice(item.price)} €
										</div>
										<button
											onClick={() => addToCart(item.id)}
											className="px-3 py-2 bg-bordeaux text-white rounded-full text-sm font-medium hover:scale-[1.03] transition-transform"
											aria-label={`${item.name} hinzufügen`}
										>
											+
										</button>
									</div>
								</div>
							))}
						</div>
					</div>

					<aside className="bg-bordeaux/5 rounded-2xl p-6 self-start lg:sticky lg:top-24">
						<h3 className="text-xl font-semibold text-foreground mb-4">
							Warenkorb
						</h3>

						{cart.length === 0 ? (
							<p className="text-foreground/40 text-sm">
								Noch keine Artikel. Wähle etwas aus der Karte.
							</p>
						) : (
							<div className="space-y-3">
								{cart.map((it) => (
									<div
										key={it.id}
										className="flex items-center justify-between gap-3"
									>
										<div className="min-w-0">
											<div className="font-medium text-foreground truncate">
												{it.name}
											</div>
											<div className="text-sm text-foreground/40">
												{formatPrice(it.price * it.qty)} €
											</div>
										</div>
										<div className="flex items-center gap-2 shrink-0">
											<button
												onClick={() => changeQty(it.id, it.qty - 1)}
												className="w-8 h-8 rounded-full bg-white text-foreground flex items-center justify-center"
												aria-label="Weniger"
											>
												−
											</button>
											<div className="w-6 text-center">{it.qty}</div>
											<button
												onClick={() => changeQty(it.id, it.qty + 1)}
												className="w-8 h-8 rounded-full bg-white text-foreground flex items-center justify-center"
												aria-label="Mehr"
											>
												+
											</button>
										</div>
									</div>
								))}

								<div className="pt-4 border-t border-foreground/8 flex items-center justify-between text-lg">
									<div className="font-semibold">Gesamt</div>
									<div className="font-bold text-bordeaux">
										{formatPrice(subtotal())} €
									</div>
								</div>
							</div>
						)}

						<div className="mt-4 space-y-3">
							<div>
								<label className="block text-sm text-foreground/60">Name</label>
								<input
									value={name}
									onChange={(e) => setName(e.target.value)}
									className="w-full mt-1 p-2 rounded-md border border-foreground/10 bg-white"
									placeholder="Vorname Nachname"
								/>
							</div>
							<div>
								<label className="block text-sm text-foreground/60">
									Telefon
								</label>
								<input
									value={phone}
									onChange={(e) => setPhone(e.target.value)}
									className="w-full mt-1 p-2 rounded-md border border-foreground/10 bg-white"
									placeholder="z. B. 0151 1234567"
									type="tel"
								/>
							</div>
							<div>
								<label className="block text-sm text-foreground/60">
									Notiz (optional)
								</label>
								<input
									value={note}
									onChange={(e) => setNote(e.target.value)}
									className="w-full mt-1 p-2 rounded-md border border-foreground/10 bg-white"
									placeholder="z. B. ohne Zwiebeln"
								/>
							</div>

							<button
								onClick={placeOrder}
								disabled={placing || cart.length === 0}
								className="mt-2 w-full px-4 py-3 bg-bordeaux text-white rounded-full font-semibold hover:bg-bordeaux-dark transition-all disabled:opacity-50 disabled:cursor-not-allowed"
							>
								{placing
									? "Weiterleitung zur Bezahlung…"
									: `Jetzt bestellen${
										cart.length > 0 ? ` (${formatPrice(subtotal())} €)` : ""
									}`}
							</button>

							{errorMsg && (
								<div className="mt-3 p-3 rounded-md bg-white border border-bordeaux/30 text-sm text-bordeaux">
									{errorMsg}
								</div>
							)}

							<p className="text-xs text-foreground/40 mt-2">
								Bezahlung erfolgt sicher über SumUp. Nach der Zahlung erhältst
								du eine Bestätigung.
							</p>
						</div>
					</aside>
				</div>
			</div>
		</section>
	);
}
