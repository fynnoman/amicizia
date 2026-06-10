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
import {
	Divider,
	PizzaSlice,
	Wheat,
	PastaSwirl,
	Fleuron,
	ForkKnife,
} from "./Ornaments";

type CartItem = {
	id: string;
	name: string;
	price: number;
	qty: number;
};
type Pulse = { id: number; itemId: string };

const categoryIcon: Record<MenuItem["category"], React.ReactNode> = {
	pizza: <PizzaSlice size={22} />,
	ciabatta: <Wheat size={22} />,
	wrap: <PastaSwirl size={22} />,
};

export default function Order() {
	const [activeCategory, setActiveCategory] =
		useState<MenuCategory["key"]>("all");
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
		if (mobileCartOpen) document.body.style.overflow = "hidden";
		else document.body.style.overflow = "";
		return () => { document.body.style.overflow = ""; };
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
		if (!name.trim() || !phone.trim()) return "Bitte Name und Telefon angeben.";
		if (cart.length === 0) return "Dein Warenkorb ist leer.";
		return null;
	}
	async function placeOrder() {
		const err = validate();
		if (err) { setErrorMsg(err); return; }
		setErrorMsg(null);
		setPlacing(true);
		try {
			const res = await fetch("/api/create-checkout", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					cart: cart.map((c) => ({ id: c.id, qty: c.qty })),
					name, phone, note,
				}),
			});
			const data = await res.json();
			if (!res.ok) {
				setErrorMsg(data?.error || "Fehler beim Erstellen der Zahlung.");
				setPlacing(false); return;
			}
			if (data?.url) window.location.href = data.url;
			else { setErrorMsg("Keine Checkout-URL erhalten."); setPlacing(false); }
		} catch (e) {
			console.error(e);
			setErrorMsg("Netzwerk- oder Serverfehler. Bitte später erneut versuchen.");
			setPlacing(false);
		}
	}

	return (
		<section
			id="order"
			className="paper-grain relative py-28 md:py-32 px-6 lg:px-12 bg-paper-deep/40 overflow-hidden"
		>
			<div className="max-w-7xl mx-auto relative">
				{/* Header */}
				<div className="text-center mb-14">
					<motion.div
						initial={{ opacity: 0, y: 14 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-100px" }}
						transition={{ duration: 0.6 }}
						className="flex justify-center mb-5 text-terracotta"
					>
						<Divider label="V · Online bestellen" />
					</motion.div>
					<motion.h2
						initial={{ opacity: 0, y: 14 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-100px" }}
						transition={{ duration: 0.6, delay: 0.1 }}
						className="display-lg text-[clamp(2.5rem,6vw,5rem)] text-espresso"
					>
						Direkt <span className="italic-display text-terracotta">vorbestellen</span>
					</motion.h2>
					<motion.p
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true, margin: "-100px" }}
						transition={{ duration: 0.6, delay: 0.2 }}
						className="font-hand text-2xl text-espresso-soft mt-3"
					>
						Wähle, bezahle, hole frisch bei uns ab.
					</motion.p>
				</div>

				<div className="grid lg:grid-cols-[1fr_380px] gap-10">
					{/* Items column */}
					<div>
						{/* Category tabs */}
						<motion.div
							initial={{ opacity: 0, y: 14 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: 0.2 }}
							className="flex flex-wrap gap-2 mb-8"
						>
							{categories.map((cat) => (
								<button
									key={cat.key}
									onClick={() => setActiveCategory(cat.key)}
									className={`px-5 py-2 rounded-full font-display italic text-sm tracking-wide border transition-all duration-300 ${
										activeCategory === cat.key
											? "bg-terracotta text-paper border-terracotta"
											: "bg-paper-deep/60 text-espresso/70 border-paper-soft/15 hover:border-terracotta hover:text-terracotta"
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
						className="lg:hidden fixed bottom-5 right-5 z-40 btn-terra !py-3 !px-5 gap-3"
						aria-label={`Warenkorb öffnen, ${totalQty} Artikel`}
					>
						<span className="relative flex items-center justify-center w-6 h-6">
							<ForkKnife size={20} />
							<motion.span
								key={totalQty}
								initial={{ scale: 1.4 }}
								animate={{ scale: 1 }}
								transition={{ type: "spring", stiffness: 500, damping: 20 }}
								className="absolute -top-2 -right-2 bg-paper-soft text-paper text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center"
							>
								{totalQty}
							</motion.span>
						</span>
						<span className="tabnum">{formatPrice(subtotal)} €</span>
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
							className="lg:hidden fixed inset-0 bg-paper/75 backdrop-blur-sm z-40"
						/>
						<motion.div
							key="sheet"
							initial={{ y: "100%" }}
							animate={{ y: 0 }}
							exit={{ y: "100%" }}
							transition={{ type: "spring", stiffness: 280, damping: 32 }}
							className="lg:hidden fixed bottom-0 inset-x-0 z-50 bg-paper-deep rounded-t-3xl max-h-[92vh] overflow-y-auto border-t border-paper-soft/15"
						>
							<div className="sticky top-0 bg-paper-deep pt-3 pb-2 px-6 border-b border-paper-soft/10 z-10">
								<div className="w-12 h-1.5 bg-paper-soft/25 rounded-full mx-auto mb-3" />
								<div className="flex items-center justify-between">
									<h3 className="font-display italic text-xl text-espresso">
										Dein Warenkorb
									</h3>
									<button
										onClick={() => setMobileCartOpen(false)}
										className="text-espresso/60 hover:text-terracotta p-1"
										aria-label="Schließen"
									>
										<svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
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
			className="relative group"
		>
			<div className="ticket relative p-5 transition-all duration-300 group-hover:-translate-y-0.5">
				{item.popular && (
					<span className="absolute -top-3 left-4 bg-terracotta text-paper px-3 py-1 font-display italic text-[0.65rem] tracking-[0.25em] uppercase rotate-[-3deg]">
						beliebt
					</span>
				)}

				<div className="flex items-start gap-4">
					<div className="relative shrink-0">
						<div className="w-14 h-14 rounded-full bg-paper-deep/60 border border-espresso/15 flex items-center justify-center text-terracotta">
							{categoryIcon[item.category]}
						</div>
						<span
							className="absolute -bottom-1 -right-1 text-2xl"
							aria-hidden
						>
							{emoji}
						</span>
						<AnimatePresence>
							{pulse && (
								<motion.span
									initial={{ opacity: 0, y: 0, scale: 0.6 }}
									animate={{ opacity: 1, y: -40, scale: 1 }}
									exit={{ opacity: 0 }}
									transition={{ duration: 0.8, ease: "easeOut" }}
									className="pointer-events-none absolute -top-1 left-1/2 -translate-x-1/2 font-hand text-terracotta text-2xl"
								>
									+1
								</motion.span>
							)}
						</AnimatePresence>
					</div>

					<div className="min-w-0 flex-1">
						<h3 className="font-display text-xl text-espresso group-hover:text-terracotta transition-colors duration-300 leading-tight">
							{item.name}
						</h3>
						<p className="font-serif italic text-espresso-soft text-sm mt-1 leading-relaxed line-clamp-2">
							{item.description}
						</p>
					</div>
				</div>

				<div className="flex items-center justify-between mt-5">
					<span className="font-display text-2xl text-terracotta tabnum">
						{formatPrice(item.price)} €
					</span>
					<motion.button
						onClick={onAdd}
						whileHover={{ scale: 1.04 }}
						whileTap={{ scale: 0.94 }}
						animate={pulse ? { scale: [1, 1.12, 1] } : { scale: 1 }}
						transition={{ duration: 0.4 }}
						className="btn-terra !py-2 !px-4 !text-[0.7rem]"
						aria-label={`${item.name} hinzufügen`}
					>
						<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
							<path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
						</svg>
						Hinzufügen
					</motion.button>
				</div>
			</div>
		</motion.div>
	);
}

function CartPanel({
	cart, subtotal, name, phone, note, placing, errorMsg,
	onName, onPhone, onNote, onChangeQty, onRemove, onSubmit, formId,
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
			className={`relative ${
				compact
					? ""
					: "bg-paper-deep border border-paper-soft/15 depth-shadow"
			}`}
		>
			{/* Decorative inner border */}
			{!compact && (
				<div className="pointer-events-none absolute inset-2 border border-terracotta/35" />
			)}

			{!compact && (
				<div className="relative px-6 py-5 border-b border-espresso/12 flex items-center justify-between">
					<div>
						<div className="font-display italic text-terracotta text-xs tracking-[0.25em] uppercase">
							Dein Warenkorb
						</div>
						<div className="font-display text-2xl text-espresso mt-0.5">
							{cart.length === 0
								? "noch leer"
								: `${cart.reduce((s, it) => s + it.qty, 0)} Artikel`}
						</div>
					</div>
					<Fleuron size={22} className="text-terracotta" />
				</div>
			)}

			<div className={`relative ${compact ? "" : "p-6"} space-y-5`}>
				{cart.length === 0 ? (
					<div className="text-center py-8">
						<div className="flex justify-center text-terracotta/40 mb-3">
							<PizzaSlice size={56} />
						</div>
						<p className="font-hand text-espresso-soft text-2xl -rotate-1">
							Wähle dein Lieblingsgericht
						</p>
					</div>
				) : (
					<div>
						<AnimatePresence initial={false}>
							{cart.map((it) => (
								<motion.div
									layout
									key={it.id}
									initial={{ opacity: 0, x: -10 }}
									animate={{ opacity: 1, x: 0 }}
									exit={{ opacity: 0, x: 10, height: 0 }}
									transition={{ duration: 0.25 }}
									className="flex items-center justify-between gap-3 py-3 border-b border-espresso/10 last:border-0"
								>
									<div className="min-w-0 flex-1">
										<div className="font-display text-espresso text-base truncate">
											{it.name}
										</div>
										<div className="font-serif italic text-espresso-soft text-xs tabnum">
											{formatPrice(it.price)} € × {it.qty}
										</div>
									</div>
									<div className="flex items-center gap-1.5 shrink-0">
										<button
											onClick={() => onChangeQty(it.id, it.qty - 1)}
											className="w-7 h-7 rounded-full bg-paper/70 text-espresso hover:bg-terracotta hover:text-paper transition-colors flex items-center justify-center font-bold"
											aria-label="Weniger"
										>−</button>
										<div className="w-6 text-center font-display text-base tabnum">{it.qty}</div>
										<button
											onClick={() => onChangeQty(it.id, it.qty + 1)}
											className="w-7 h-7 rounded-full bg-paper/70 text-espresso hover:bg-terracotta hover:text-paper transition-colors flex items-center justify-center font-bold"
											aria-label="Mehr"
										>+</button>
										<button
											onClick={() => onRemove(it.id)}
											className="ml-1 text-espresso/40 hover:text-terracotta transition-colors p-1"
											aria-label={`${it.name} entfernen`}
										>
											<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
												<path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
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
						className="flex items-center justify-between pt-3 border-t border-espresso/20"
					>
						<span className="font-display italic text-espresso text-lg">
							Gesamt
						</span>
						<motion.span
							key={subtotal}
							initial={{ scale: 1.08 }}
							animate={{ scale: 1 }}
							className="font-display text-3xl text-terracotta tabnum"
						>
							{formatPrice(subtotal)} €
						</motion.span>
					</motion.div>
				)}

				<div className="space-y-3 pt-2">
					<Input id={`${formId}-name`}  label="Name"               value={name}  onChange={onName}  placeholder="Vorname Nachname" />
					<Input id={`${formId}-phone`} label="Telefon"            value={phone} onChange={onPhone} placeholder="0151 1234567" type="tel" />
					<Input id={`${formId}-note`}  label="Anmerkung (optional)" value={note} onChange={onNote}  placeholder="z. B. ohne Zwiebeln" />
				</div>

				<motion.button
					whileHover={{ scale: cart.length > 0 ? 1.01 : 1 }}
					whileTap={{ scale: cart.length > 0 ? 0.98 : 1 }}
					onClick={onSubmit}
					disabled={placing || cart.length === 0}
					className="btn-terra w-full disabled:opacity-40 disabled:cursor-not-allowed"
				>
					{placing ? (
						<>
							<svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
								<circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeDasharray="42" strokeLinecap="round" opacity="0.4" />
								<path d="M22 12a10 10 0 0 1-10 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
							</svg>
							<span>wird vorbereitet…</span>
						</>
					) : (
						<>
							<span>Sicher bezahlen</span>
							{cart.length > 0 && (
								<span className="opacity-80 tabnum">· {formatPrice(subtotal)} €</span>
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
							className="p-3 rounded-md bg-terracotta/10 border border-terracotta/30 text-sm text-terracotta-deep font-serif italic"
						>
							{errorMsg}
						</motion.div>
					)}
				</AnimatePresence>

				<p className="font-display italic text-[11px] text-espresso-soft/80 text-center leading-relaxed tracking-wider">
					Bezahlung sicher über{" "}
					<strong className="text-terracotta not-italic">SumUp</strong>.
					Abholung direkt im Restaurant.
				</p>
			</div>
		</div>
	);
}

function Input({
	id, label, value, onChange, placeholder, type = "text",
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
				className="block font-display italic text-[11px] text-espresso-soft tracking-[0.2em] uppercase mb-1.5"
			>
				{label}
			</label>
			<input
				id={id}
				value={value}
				onChange={(e) => onChange(e.target.value)}
				type={type}
				placeholder={placeholder}
				className="w-full px-4 py-2.5 rounded-md border border-paper-soft/20 bg-paper text-espresso text-base font-serif focus:outline-none focus:border-terracotta focus:bg-paper-deep transition-colors placeholder:italic placeholder:text-espresso-soft/50"
			/>
		</div>
	);
}
