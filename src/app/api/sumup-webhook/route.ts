import { getCheckout } from "@/lib/sumup";
import { decodeOrderFromDescription, formatOrderForWhatsApp } from "@/lib/order";
import { sendWhatsAppNotification } from "@/lib/whatsapp";

export async function POST(req: Request) {
	let event: { event_type?: string; id?: string } | null = null;
	try {
		event = await req.json();
	} catch {
		return new Response("Invalid JSON", { status: 200 });
	}

	if (!event?.id) {
		return new Response("Missing id", { status: 200 });
	}

	try {
		const checkout = await getCheckout(event.id);

		if (checkout.status !== "PAID") {
			return new Response("ok", { status: 200 });
		}

		const order = decodeOrderFromDescription(checkout.description);
		if (!order) {
			console.error(
				"sumup-webhook: PAID checkout ohne lesbare Bestelldaten",
				event.id
			);
			return new Response("ok", { status: 200 });
		}

		const message = formatOrderForWhatsApp(order, checkout.checkout_reference);
		try {
			await sendWhatsAppNotification(message);
		} catch (waErr) {
			console.error("sumup-webhook: WhatsApp failed:", waErr);
			return new Response("whatsapp_failed", { status: 500 });
		}

		return new Response("ok", { status: 200 });
	} catch (err) {
		console.error("sumup-webhook error:", err);
		return new Response("ok", { status: 200 });
	}
}
