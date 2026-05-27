import { findItemById } from "@/data/menu";
import { createCheckout } from "@/lib/sumup";
import {
	encodeOrderForDescription,
	generateReference,
	type OrderPayload,
} from "@/lib/order";

type IncomingCart = { id: string; qty: number }[];

export async function POST(req: Request) {
	try {
		const body = await req.json().catch(() => null);
		if (!body || typeof body !== "object") {
			return Response.json({ error: "Ungültiger Request-Body" }, { status: 400 });
		}

		const { cart, name, phone, note } = body as {
			cart?: IncomingCart;
			name?: string;
			phone?: string;
			note?: string;
		};

		if (!Array.isArray(cart) || cart.length === 0) {
			return Response.json({ error: "Warenkorb ist leer" }, { status: 400 });
		}
		if (!name?.trim() || !phone?.trim()) {
			return Response.json(
				{ error: "Name und Telefon sind erforderlich" },
				{ status: 400 }
			);
		}

		let amount = 0;
		const validatedItems: OrderPayload["items"] = [];
		for (const line of cart) {
			if (!line?.id || typeof line.qty !== "number" || line.qty < 1) continue;
			const item = findItemById(line.id);
			if (!item) {
				return Response.json(
					{ error: `Unbekanntes Produkt: ${line.id}` },
					{ status: 400 }
				);
			}
			const qty = Math.min(Math.floor(line.qty), 50);
			amount += item.price * qty;
			validatedItems.push({ id: item.id, qty });
		}

		if (validatedItems.length === 0 || amount <= 0) {
			return Response.json({ error: "Bestellung ist leer" }, { status: 400 });
		}

		const reference = generateReference();
		const payload: OrderPayload = {
			customerName: name.trim().slice(0, 80),
			customerPhone: phone.trim().slice(0, 40),
			note: note?.trim().slice(0, 200),
			items: validatedItems,
		};

		const origin =
			process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
			new URL(req.url).origin;

		const checkout = await createCheckout({
			amount: Math.round(amount * 100) / 100,
			currency: "EUR",
			checkout_reference: reference,
			description: encodeOrderForDescription(payload),
			return_url: `${origin}/api/sumup-webhook`,
			redirect_url: `${origin}/?bestellung=erfolg&ref=${encodeURIComponent(reference)}`,
		});

		if (!checkout.hosted_checkout_url) {
			return Response.json(
				{ error: "SumUp lieferte keine Checkout-URL zurück" },
				{ status: 500 }
			);
		}

		return Response.json({ url: checkout.hosted_checkout_url, reference });
	} catch (err) {
		console.error("create-checkout error:", err);
		const message = err instanceof Error ? err.message : "Server error";
		return Response.json({ error: message }, { status: 500 });
	}
}
