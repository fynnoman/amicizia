import { findItemById, formatPrice } from "@/data/menu";

export type OrderPayload = {
	customerName: string;
	customerPhone: string;
	note?: string;
	items: { id: string; qty: number }[];
};

const SEPARATOR = "::AMICIZIA::";

export function encodeOrderForDescription(order: OrderPayload): string {
	const json = JSON.stringify(order);
	return `${SEPARATOR}${json}`;
}

export function decodeOrderFromDescription(
	description: string | undefined | null
): OrderPayload | null {
	if (!description) return null;
	const idx = description.indexOf(SEPARATOR);
	if (idx === -1) return null;
	const json = description.slice(idx + SEPARATOR.length);
	try {
		const parsed = JSON.parse(json);
		if (
			typeof parsed?.customerName === "string" &&
			typeof parsed?.customerPhone === "string" &&
			Array.isArray(parsed?.items)
		) {
			return parsed as OrderPayload;
		}
		return null;
	} catch {
		return null;
	}
}

export function calculateTotal(items: OrderPayload["items"]): number {
	let total = 0;
	for (const line of items) {
		const item = findItemById(line.id);
		if (!item) continue;
		total += item.price * line.qty;
	}
	return total;
}

export function formatOrderForWhatsApp(
	order: OrderPayload,
	reference: string
): string {
	const lines: string[] = [];
	lines.push("🍕 *NEUE BESTELLUNG (BEZAHLT)*");
	lines.push(`Ref: ${reference}`);
	lines.push("");
	lines.push(`Kunde: ${order.customerName}`);
	lines.push(`Telefon: ${order.customerPhone}`);
	lines.push("");
	lines.push("Bestellung:");

	let total = 0;
	for (const line of order.items) {
		const item = findItemById(line.id);
		if (!item) {
			lines.push(`- ${line.qty}x [Unbekannt: ${line.id}]`);
			continue;
		}
		const sum = item.price * line.qty;
		total += sum;
		lines.push(`- ${line.qty}x ${item.name} (${formatPrice(sum)} €)`);
	}

	lines.push("");
	lines.push(`*Gesamt: ${formatPrice(total)} €*`);

	if (order.note?.trim()) {
		lines.push("");
		lines.push(`Notiz: ${order.note.trim()}`);
	}

	lines.push("");
	lines.push("Abholung im Restaurant");
	return lines.join("\n");
}

export function generateReference(): string {
	const ts = Date.now().toString(36).toUpperCase();
	const rand = Math.random().toString(36).slice(2, 6).toUpperCase();
	return `AMI-${ts}-${rand}`;
}
