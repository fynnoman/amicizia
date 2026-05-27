"use client";

import { useMemo, useState, useEffect, useId } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
	categories,
	menuItems,
	categoryEmoji,
	formatPrice,
	type MenuCategory,
	type MenuItem,
} from "@/data/menu";

type CartItem = {
	id: string;
	name: string;
	price: number;
	qty: number;
};

type Pulse = { id: number; itemId: string };

export default function Order() {
	const [activeCategory, setActiveCategory] = useState<MenuCategory["key"]>("all");
	const [cart, setCart] = useState<CartItem[]>([]);
	const [name, setName] = useState("");
	const [phone, setPhone] = useState("");
	const [note, setNote] = useState("");
	const [placing, setPlacing] = useState(false);
	const [errorMsg, setErrorMsg] = useState<string | null>(null);
	const [mobileCartOpen, setMobileCartOpen] = useState(false);
	const [pulses, setPulses] = useState<Pulse[]>([]);
	const formId = useId();

	const filteredItems = useMemo(
		() =>
			activeCategory === "all"
				? menuItems
				: menuItems.filter((it) => it.category === activeCategory),
		[activeCategory]
	);

	const totalQty = cart.reduce((s, it) => s + it.qty, 0);
	const subtotal = cart.reduce((s, it) => s + it.price * it.qty, 0);

	useEffect(() => {
		if (mobileCartOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "";
		}
		return () => {
			document.body.style.overflow = "";
		};
	}, [mobileCartOpen]);

	function addToCart(item: MenuItem) {
		setCart((prev) => {
			const exists = prev.find((p) => p.id === item.id);
			if (exists)
				return prev.map((p) =>
					p.id === item.id ? { ...p, qty: p.qty + 1 } : p
				);
			return [
				...prev,
				{ id: item.id, name: item.name, price: item.price, qty: 1 },
			];
		});
		const pulseId = Date.now() + Math.random();
		setPulses((p) => [...p, { id: pulseId, itemId: item.id }]);
		window.setTimeout(() => {
			setPulses((p) => p.filter((x) => x.id !== pulseId));
		}, 900);
	}

	function changeQty(id: string, qty: number) {
		setCart((prev) =>
			prev.flatMap((p) => (p.id === id ? (qty > 0 ? [{ ...p, qty }] : []) : [p]))
		);
	}

	function removeFromCart(id: string) {
		setCart((prev) => prev.filter((p) => p.id !== id));
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
				body: JSON.stringify({
					cart: cart.map((c) => ({ id: c.id, qty: c.qty })),
					name,
					phone,
					note,
				}),
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
		<section
			id="order"
			className="relative py-24 px-6 lg:px-12 bg-cream overflow-hidden"
		>
			{/* Decorative background */}
			<div
				aria-hidden="true"
				className="absolute inset-0 pointer-events-none"
			>
				<div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-bordeaux/[0.04] blur-[100px] bg-blob" />
				<div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-bordeaux-light/[0.05] blur-[80px] bg-blob" />
			</div>

			<div className="max-w-7xl mx-auto relative">
				{/* Header */}
				<div className="text-center mb-14">
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-100px" }}
						transition={{ duration: 0.6 }}
						className="text-bordeaux text-sm tracking-[0.3em] uppercase font-medium mb-4"
					>
						Direkt bestellen
					</motion.p>
					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-100px" }}
						transition={{ duration: 0.6, delay: 0.1 }}
						className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4"
					>
						<span className="font-handwriting text-bordeaux text-5xl md:text-6xl block mb-2">
							ordina ora —
						</span>
						Bestelle <span className="text-bordeaux">online</span>
					</motion.h2>
					<motion.p
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true, margin: "-100px" }}
						transition={{ duration: 0.6, delay: 0.2 }}
						className="text-foreground/50 text-base md:text-lg max-w-xl mx-auto"
					>
						Wähle deine Lieblingsgerichte, bezahle sicher und hole frisch bei uns ab.
					</motion.p>
					<motion.div
						initial={{ scaleX: 0 }}
						whileInView={{ scaleX: 1 }}
						viewport={{ once: true, margin: "-100px" }}
						transition={{ duration: 0.8, delay: 0.3 }}
						className="w-16 h-[2px] bg-bordeaux mx-auto mt-6"
					/>
				</div>

				<div className="grid lg:grid-cols-[1fr_380px] gap-10">
					{/* Items column */}
					<div>
						{/* Category tabs */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: 0.2 }}
							className="flex flex-wrap gap-2 mb-8 -mx-1 px-1 overflow-x-auto"
						>
							{categories.map((cat) => (
								<button
									key={cat.key}
									onClick={() => setActiveCategory(cat.key)}
									className={`px-5 py-2.5 rounded-full text-sm font-semibold uppercase tracking-wider whitespace-nowrap transition-all duration-300 ${
										activeCategory === cat.key
											? "bg-bordeaux text-white shadow-lg shadow-bordeaux/25"
											: "bg-white text-foreground/55 hover:text-bordeaux hover:shadow-md"
									}`}
								>
									{cat.name}
								</button>
							))}
						</motion.div>

						{/* Items grid */}
						<AnimatePresence mode="wait">
							<motion.div
								key={activeCategory}
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								transition={{ duration: 0.3 }}
								className="grid sm:grid-cols-2 gap-5"
							>
								{filteredItems.map((item, i) => (
									<OrderCard
										key={item.id}
										item={item}
										index={i}
										onAdd={() => addToCart(item)}
										pulse={pulses.some((p) => p.itemId === item.id)}
									/>
								))}
							</motion.div>
						</AnimatePresence>
					</div>

					{/* Desktop cart */}
					<aside className="hidden lg:block">
						<div className="sticky top-24">
							<CartPanel
								cart={cart}
								subtotal={subtotal}
								name={name}
								phone={phone}
								note={note}
								placing={placing}
								errorMsg={errorMsg}
								onName={setName}
								onPhone={setPhone}
								onNote={setNote}
								onChangeQty={changeQty}
								onRemove={removeFromCart}
								onSubmit={placeOrder}
								formId={formId}
							/>
						</div>
					</aside>
				</div>
			</div>

			{/* Mobile floating cart button */}
			<AnimatePresence>
				{cart.length > 0 && !mobileCartOpen && (
					<motion.button
						key="floating-cart"
						initial={{ y: 100, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						exit={{ y: 100, opacity: 0 }}
						transition={{ type: "spring", stiffness: 380, damping: 28 }}
						onClick={() => setMobileCartOpen(true)}
						className="lg:hidden fixed bottom-5 right-5 z-40 bg-bordeaux text-white px-5 py-3.5 rounded-full shadow-2xl shadow-bordeaux/40 flex items-center gap-3 font-semibold"
						aria-label={`Warenkorb öffnen, ${totalQty} Artikel`}
					>
						<span className="relative flex items-center justify-center w-6 h-6">
							<svg
								className="w-5 h-5"
								fill="none"
								stroke="currentColor"
								strokeWidth={2.2}
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 6m12-6v6m-6-6v6"
								/>
							</svg>
							<motion.span
								key={totalQty}
								initial={{ scale: 1.4 }}
								animate={{ scale: 1 }}
								transition={{ type: "spring", stiffness: 500, damping: 20 }}
								className="absolute -top-2 -right-2 bg-white text-bordeaux text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center"
							>
								{totalQty}
							</motion.span>
						</span>
						<span>{formatPrice(subtotal)} €</span>
					</motion.button>
				)}
			</AnimatePresence>

			{/* Mobile bottom sheet */}
			<AnimatePresence>
				{mobileCartOpen && (
					<>
						<motion.div
							key="overlay"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							onClick={() => setMobileCartOpen(false)}
							className="lg:hidden fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
						/>
						<motion.div
							key="sheet"
							initial={{ y: "100%" }}
							animate={{ y: 0 }}
							exit={{ y: "100%" }}
							transition={{ type: "spring", stiffness: 280, damping: 32 }}
							className="lg:hidden fixed bottom-0 inset-x-0 z-50 bg-white rounded-t-3xl max-h-[92vh] overflow-y-auto"
						>
							<div className="sticky top-0 bg-white pt-3 pb-2 px-6 border-b border-foreground/5 z-10">
								<div className="w-12 h-1.5 bg-foreground/10 rounded-full mx-auto mb-3" />
								<div className="flex items-center justify-between">
									<h3 className="text-lg font-bold text-foreground">
										Dein Warenkorb
									</h3>
									<button
										onClick={() => setMobileCartOpen(false)}
										className="text-foreground/50 hover:text-bordeaux p-1"
										aria-label="Schließen"
									>
										<svg
											className="w-6 h-6"
											fill="none"
											stroke="currentColor"
											strokeWidth={2}
											viewBox="0 0 24 24"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M6 18L18 6M6 6l12 12"
											/>
										</svg>
									</button>
								</div>
							</div>
							<div className="p-6">
								<CartPanel
									cart={cart}
									subtotal={subtotal}
									name={name}
									phone={phone}
									note={note}
									placing={placing}
									errorMsg={errorMsg}
									onName={setName}
									onPhone={setPhone}
									onNote={setNote}
									onChangeQty={changeQty}
									onRemove={removeFromCart}
									onSubmit={placeOrder}
									formId={`mobile-${formId}`}
									compact
								/>
							</div>
						</motion.div>
					</>
				)}
			</AnimatePresence>
		</section>
	);
}

function OrderCard({
	item,
	index,
	onAdd,
	pulse,
}: {
	item: MenuItem;
	index: number;
	onAdd: () => void;
	pulse: boolean;
}) {
	const emoji = item.emoji ?? categoryEmoji[item.category];

	return (
		<motion.div
			layout
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, scale: 0.95 }}
			transition={{ duration: 0.4, delay: index * 0.04 }}
			className="card-tilt"
		>
			<div className="card-inner group relative bg-white rounded-2xl p-5 overflow-hidden">
				{item.popular && (
					<div className="absolute top-4 right-4 z-10">
						<span className="bg-bordeaux/10 text-bordeaux text-[10px] font-semibold px-2.5 py-1 rounded-full tracking-wider uppercase">
							Beliebt ✦
						</span>
					</div>
				)}

				<div className="flex items-start gap-4">
					<div className="relative shrink-0">
						<div className="w-16 h-16 rounded-2xl bg-cream flex items-center justify-center text-4xl group-hover:scale-110 group-hover:rotate-[-6deg] transition-transform duration-500">
							<span aria-hidden="true">{emoji}</span>
						</div>
						<AnimatePresence>
							{pulse && (
								<motion.span
									initial={{ opacity: 0, y: 0, scale: 0.6 }}
									animate={{ opacity: 1, y: -40, scale: 1 }}
									exit={{ opacity: 0 }}
									transition={{ duration: 0.8, ease: "easeOut" }}
									className="pointer-events-none absolute -top-1 left-1/2 -translate-x-1/2 text-bordeaux font-bold text-sm"
								>
									+1
								</motion.span>
							)}
						</AnimatePresence>
					</div>

					<div className="min-w-0 flex-1">
						<h3 className="text-lg font-bold text-foreground group-hover:text-bordeaux transition-colors duration-300 leading-tight">
							{item.name}
						</h3>
						<p className="text-foreground/45 text-sm mt-1 leading-relaxed line-clamp-2">
							{item.description}
						</p>
					</div>
				</div>

				<div className="flex items-center justify-between mt-5">
					<span className="text-xl font-bold text-bordeaux">
						{formatPrice(item.price)} €
					</span>
					<motion.button
						onClick={onAdd}
						whileHover={{ scale: 1.06 }}
						whileTap={{ scale: 0.92 }}
						animate={pulse ? { scale: [1, 1.15, 1] } : { scale: 1 }}
						transition={{ duration: 0.4 }}
						className="px-5 py-2.5 bg-bordeaux text-white rounded-full text-sm font-semibold tracking-wider uppercase shadow-md shadow-bordeaux/20 hover:shadow-lg hover:shadow-bordeaux/30 hover:bg-bordeaux-dark transition-all duration-300 flex items-center gap-1.5"
						aria-label={`${item.name} hinzufügen`}
					>
						<svg
							className="w-4 h-4"
							fill="none"
							stroke="currentColor"
							strokeWidth={3}
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M12 4v16m8-8H4"
							/>
						</svg>
						<span>Hinzufügen</span>
					</motion.button>
				</div>

				<div className="absolute inset-0 bg-gradient-to-t from-bordeaux/[0.025] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl" />
			</div>
		</motion.div>
	);
}

function CartPanel({
	cart,
	subtotal,
	name,
	phone,
	note,
	placing,
	errorMsg,
	onName,
	onPhone,
	onNote,
	onChangeQty,
	onRemove,
	onSubmit,
	formId,
	compact = false,
}: {
	cart: CartItem[];
	subtotal: number;
	name: string;
	phone: string;
	note: string;
	placing: boolean;
	errorMsg: string | null;
	onName: (v: string) => void;
	onPhone: (v: string) => void;
	onNote: (v: string) => void;
	onChangeQty: (id: string, qty: number) => void;
	onRemove: (id: string) => void;
	onSubmit: () => void;
	formId: string;
	compact?: boolean;
}) {
	return (
		<div
			className={`relative rounded-3xl overflow-hidden ${
				compact ? "" : "depth-shadow bg-white border border-foreground/5"
			}`}
		>
			{!compact && (
				<div className="bg-gradient-to-br from-bordeaux to-bordeaux-dark px-6 py-5 text-white">
					<p className="text-white/60 text-xs tracking-[0.25em] uppercase font-medium mb-1">
						Dein Warenkorb
					</p>
					<h3 className="text-2xl font-bold">
						{cart.length === 0
							? "Noch leer"
							: `${cart.reduce((s, it) => s + it.qty, 0)} Artikel`}
					</h3>
				</div>
			)}

			<div className={`${compact ? "" : "p-6"} space-y-5`}>
				{cart.length === 0 ? (
					<div className="text-center py-6">
						<div className="text-5xl mb-3" aria-hidden="true">
							🍕
						</div>
						<p
							className="text-foreground/40 font-handwriting text-xl"
							style={{ fontFamily: "var(--font-handwriting)" }}
						>
							Wähle dein Lieblingsgericht
						</p>
					</div>
				) : (
					<div className="space-y-3">
						<AnimatePresence initial={false}>
							{cart.map((it) => (
								<motion.div
									layout
									key={it.id}
									initial={{ opacity: 0, x: -10 }}
									animate={{ opacity: 1, x: 0 }}
									exit={{ opacity: 0, x: 10, height: 0 }}
									transition={{ duration: 0.25 }}
									className="flex items-center justify-between gap-3 py-2 border-b border-foreground/5 last:border-0"
								>
									<div className="min-w-0 flex-1">
										<div className="font-semibold text-foreground text-sm truncate">
											{it.name}
										</div>
										<div className="text-xs text-foreground/40">
											{formatPrice(it.price)} € × {it.qty}
										</div>
									</div>
									<div className="flex items-center gap-1.5 shrink-0">
										<button
											onClick={() => onChangeQty(it.id, it.qty - 1)}
											className="w-7 h-7 rounded-full bg-cream text-foreground hover:bg-bordeaux hover:text-white transition-colors flex items-center justify-center text-base font-bold"
											aria-label="Weniger"
										>
											−
										</button>
										<div className="w-6 text-center text-sm font-semibold">
											{it.qty}
										</div>
										<button
											onClick={() => onChangeQty(it.id, it.qty + 1)}
											className="w-7 h-7 rounded-full bg-cream text-foreground hover:bg-bordeaux hover:text-white transition-colors flex items-center justify-center text-base font-bold"
											aria-label="Mehr"
										>
											+
										</button>
										<button
											onClick={() => onRemove(it.id)}
											className="ml-1 text-foreground/30 hover:text-bordeaux transition-colors p-1"
											aria-label={`${it.name} entfernen`}
										>
											<svg
												className="w-4 h-4"
												fill="none"
												stroke="currentColor"
												strokeWidth={2}
												viewBox="0 0 24 24"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													d="M6 18L18 6M6 6l12 12"
												/>
											</svg>
										</button>
									</div>
								</motion.div>
							))}
						</AnimatePresence>
					</div>
				)}

				{cart.length > 0 && (
					<motion.div
						layout
						className="flex items-center justify-between pt-3 border-t border-foreground/10"
					>
						<span className="text-base font-semibold text-foreground">
							Gesamt
						</span>
						<motion.span
							key={subtotal}
							initial={{ scale: 1.1 }}
							animate={{ scale: 1 }}
							className="text-2xl font-bold text-bordeaux"
						>
							{formatPrice(subtotal)} €
						</motion.span>
					</motion.div>
				)}

				<div className="space-y-3 pt-2">
					<Input
						id={`${formId}-name`}
						label="Name"
						value={name}
						onChange={onName}
						placeholder="Vorname Nachname"
					/>
					<Input
						id={`${formId}-phone`}
						label="Telefon"
						value={phone}
						onChange={onPhone}
						placeholder="z. B. 0151 1234567"
						type="tel"
					/>
					<Input
						id={`${formId}-note`}
						label="Notiz (optional)"
						value={note}
						onChange={onNote}
						placeholder="z. B. ohne Zwiebeln"
					/>
				</div>

				<motion.button
					whileHover={{ scale: cart.length > 0 ? 1.02 : 1 }}
					whileTap={{ scale: cart.length > 0 ? 0.98 : 1 }}
					onClick={onSubmit}
					disabled={placing || cart.length === 0}
					className="w-full px-4 py-3.5 bg-bordeaux text-white rounded-full font-semibold text-sm uppercase tracking-wider shadow-lg shadow-bordeaux/20 hover:bg-bordeaux-dark transition-colors disabled:opacity-40 disabled:cursor-not-allowed disabled:shadow-none flex items-center justify-center gap-2"
				>
					{placing ? (
						<>
							<svg
								className="w-4 h-4 animate-spin"
								viewBox="0 0 24 24"
								fill="none"
							>
								<circle
									cx="12"
									cy="12"
									r="10"
									stroke="currentColor"
									strokeWidth="3"
									strokeDasharray="42"
									strokeLinecap="round"
									opacity="0.4"
								/>
								<path
									d="M22 12a10 10 0 0 1-10 10"
									stroke="currentColor"
									strokeWidth="3"
									strokeLinecap="round"
								/>
							</svg>
							<span>Wird vorbereitet…</span>
						</>
					) : (
						<>
							<span>Jetzt sicher bezahlen</span>
							{cart.length > 0 && (
								<span className="opacity-80">· {formatPrice(subtotal)} €</span>
							)}
						</>
					)}
				</motion.button>

				<AnimatePresence>
					{errorMsg && (
						<motion.div
							initial={{ opacity: 0, y: -5 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0 }}
							className="p-3 rounded-lg bg-bordeaux/5 border border-bordeaux/20 text-sm text-bordeaux"
						>
							{errorMsg}
						</motion.div>
					)}
				</AnimatePresence>

				<p className="text-[11px] text-foreground/40 text-center leading-relaxed">
					Bezahlung sicher über <strong className="text-bordeaux/80">SumUp</strong>.
					Abholung direkt im Restaurant.
				</p>
			</div>
		</div>
	);
}

function Input({
	id,
	label,
	value,
	onChange,
	placeholder,
	type = "text",
}: {
	id: string;
	label: string;
	value: string;
	onChange: (v: string) => void;
	placeholder?: string;
	type?: string;
}) {
	return (
		<div>
			<label
				htmlFor={id}
				className="block text-[11px] text-foreground/55 uppercase tracking-wider font-semibold mb-1.5"
			>
				{label}
			</label>
			<input
				id={id}
				value={value}
				onChange={(e) => onChange(e.target.value)}
				type={type}
				placeholder={placeholder}
				className="w-full px-4 py-2.5 rounded-xl border border-foreground/10 bg-cream/40 text-sm focus:outline-none focus:border-bordeaux focus:bg-white transition-colors"
			/>
		</div>
	);
}
