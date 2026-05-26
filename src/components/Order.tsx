"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const catalog = [
	{ id: "m1", name: "Margherita", price: 9.9, category: "Pizza" },
	{ id: "m2", name: "Diavola", price: 12.9, category: "Pizza" },
	{ id: "m3", name: "Prosciutto e Rucola", price: 14.9, category: "Pizza" },
	{ id: "m4", name: "Quattro Formaggi", price: 13.9, category: "Pizza" },
	{ id: "m5", name: "Vegetariana", price: 12.9, category: "Pizza" },
];

type CartItem = {
	id: string;
	name: string;
	price: number;
	qty: number;
};

export default function Order() {
	const [mode, setMode] = useState<"pickup" | "delivery">("pickup");
	const [cart, setCart] = useState<CartItem[]>([]);
	const [name, setName] = useState("");
	const [phone, setPhone] = useState("");
	const [address, setAddress] = useState("");
	const [note, setNote] = useState("");
	const [placing, setPlacing] = useState(false);
	const [confirmation, setConfirmation] = useState<string | null>(null);

	function addToCart(itemId: string) {
		const item = catalog.find((c) => c.id === itemId);
		if (!item) return;
		setCart((prev) => {
			const exists = prev.find((p) => p.id === itemId);
			if (exists)
				return prev.map((p) => (p.id === itemId ? { ...p, qty: p.qty + 1 } : p));
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
		// pickup-only: no address required
		if (cart.length === 0) return "Der Warenkorb ist leer.";
		return null;
	}

	async function placeOrder() {
		const err = validate();
		if (err) {
			setConfirmation(err);
			return;
		}
		setPlacing(true);

		try {
			const res = await fetch("/api/create-checkout", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ cart, mode, name, phone, address, note }),
			});

			const data = await res.json();
			if (!res.ok) {
				setConfirmation(data?.error || "Fehler beim Erstellen der Zahlung.");
				setPlacing(false);
				return;
			}

			if (data?.url) {
				// Redirect to Stripe Checkout
				window.location.href = data.url;
			} else {
				setConfirmation("Keine Checkout-URL erhalten.");
				setPlacing(false);
			}
		} catch (e: any) {
			console.error(e);
			setConfirmation(
				"Netzwerk- oder Serverfehler. Bitte später erneut versuchen."
			);
			setPlacing(false);
		}
	}

	return (
		<section id="order" className="py-20 px-6 lg:px-12 bg-white">
			<div className="max-w-7xl mx-auto">
				<div className="text-center mb-10">
					<motion.p className="text-bordeaux text-sm tracking-[0.3em] uppercase font-medium mb-4">
						Direkt bestellen
					</motion.p>
					<motion.h2 className="text-3xl md:text-4xl font-bold text-foreground">
						Bestellungsportal
					</motion.h2>
					<p
						className="text-foreground/40 mt-3"
						style={{ fontFamily: "var(--font-caveat)" }}
					>
						Wähle Abholung oder Lieferung, fülle deine Daten aus und bestätige die
						Bestellung.
					</p>
				</div>

				<div className="grid lg:grid-cols-3 gap-8">
					{/* Catalog */}
					<div className="lg:col-span-2">
						<div className="flex gap-3 items-center mb-6">
							<button
								onClick={() => setMode("pickup")}
								className={`px-4 py-2 rounded-full text-sm font-semibold uppercase transition-all duration-200 ${
									mode === "pickup"
										? "bg-bordeaux text-white shadow-md"
										: "bg-white text-foreground/60"
								}`}
							>
								Abholung
							</button>
							<button
								onClick={() => setMode("delivery")}
								className={`px-4 py-2 rounded-full text-sm font-semibold uppercase transition-all duration-200 ${
									mode === "delivery"
										? "bg-bordeaux text-white shadow-md"
										: "bg-white text-foreground/60"
								}`}
							>
								Lieferung
							</button>
						</div>

						<div className="grid md:grid-cols-2 gap-4">
							{catalog.map((item) => (
								<div
									key={item.id}
									className="bg-cream p-4 rounded-2xl flex items-center justify-between"
								>
									<div>
										<div className="text-lg font-semibold text-foreground">
											{item.name}
										</div>
										<div className="text-sm text-foreground/40">
											{item.category}
										</div>
									</div>
									<div className="flex items-center gap-3">
										<div className="text-lg font-bold text-bordeaux">
											{item.price.toFixed(2)} €
										</div>
										<button
											onClick={() => addToCart(item.id)}
											className="px-3 py-2 bg-bordeaux text-white rounded-full text-sm font-medium hover:scale-[1.03] transition-transform"
										>
											Hinzufügen
										</button>
									</div>
								</div>
							))}
						</div>
					</div>

					{/* Cart */}
					<aside className="bg-bordeaux/5 rounded-2xl p-6">
						<h3 className="text-xl font-semibold text-foreground mb-4">
							Warenkorb
						</h3>

						{cart.length === 0 ? (
							<p className="text-foreground/40">
								Noch keine Artikel. Wähle etwas aus der Karte.
							</p>
						) : (
							<div className="space-y-3">
								{cart.map((it) => (
									<div
										key={it.id}
										className="flex items-center justify-between gap-3"
									>
										<div>
											<div className="font-medium text-foreground">
												{it.name}
											</div>
											<div className="text-sm text-foreground/40">
												{(it.price * it.qty).toFixed(2)} €
											</div>
										</div>
										<div className="flex items-center gap-2">
											<button
												onClick={() => changeQty(it.id, it.qty - 1)}
												className="w-8 h-8 rounded-full bg-white text-foreground flex items-center justify-center"
											>
												−
											</button>
											<div className="w-8 text-center">{it.qty}</div>
											<button
												onClick={() => changeQty(it.id, it.qty + 1)}
												className="w-8 h-8 rounded-full bg-white text-foreground flex items-center justify-center"
											>
												+
											</button>
										</div>
									</div>
								))}

								<div className="pt-4 border-t border-foreground/8">
									<div className="flex items-center justify-between">
										<div className="text-foreground/60">Zwischensumme</div>
										<div className="font-bold text-foreground">
											{subtotal().toFixed(2)} €
										</div>
									</div>
									<div className="flex items-center justify-between mt-2">
										<div className="text-foreground/60">Liefergebühr</div>
										<div className="font-medium text-foreground">
											0.00 €
										</div>
									</div>
									<div className="flex items-center justify-between mt-3 text-lg">
										<div className="font-semibold">Gesamt</div>
										<div className="font-bold">
											{subtotal().toFixed(2)} €
										</div>
									</div>
								</div>
							</div>
						)}

						<div className="mt-4">
							<label className="block text-sm text-foreground/60">Name</label>
							<input
								value={name}
								onChange={(e) => setName(e.target.value)}
								className="w-full mt-2 p-2 rounded-md border border-foreground/10"
								placeholder="Vorname Nachname"
							/>
							<label className="block text-sm text-foreground/60 mt-3">
								Telefon
							</label>
							<input
								value={phone}
								onChange={(e) => setPhone(e.target.value)}
								className="w-full mt-2 p-2 rounded-md border border-foreground/10"
								placeholder="z. B. 0151 1234567"
							/>

							{/* pickup-only: address removed */}

							<label className="block text-sm text-foreground/60 mt-3">
								Notiz (optional)
							</label>
							<input
								value={note}
								onChange={(e) => setNote(e.target.value)}
								className="w-full mt-2 p-2 rounded-md border border-foreground/10"
								placeholder="z. B. ohne Zwiebeln"
							/>

							<button
								onClick={placeOrder}
								disabled={placing}
								className="mt-4 w-full px-4 py-3 bg-bordeaux text-white rounded-full font-semibold hover:bg-bordeaux-dark transition-all disabled:opacity-60"
							>
								{placing ? "Bestellung wird gesendet…" : "Bestellung abschicken"}
							</button>

							{confirmation && (
								<div className="mt-4 p-3 rounded-md bg-white border border-foreground/6 text-sm text-foreground">
									{confirmation}
								</div>
							)}
						</div>
					</aside>
				</div>
			</div>
		</section>
	);
}
