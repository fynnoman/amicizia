export async function sendWhatsAppNotification(text: string): Promise<void> {
	const phone = process.env.WHATSAPP_PHONE;
	const apiKey = process.env.WHATSAPP_API_KEY;

	if (!phone || !apiKey) {
		throw new Error(
			"WHATSAPP_PHONE oder WHATSAPP_API_KEY nicht gesetzt — Benachrichtigung übersprungen"
		);
	}

	const url = new URL("https://api.callmebot.com/whatsapp.php");
	url.searchParams.set("phone", phone);
	url.searchParams.set("text", text);
	url.searchParams.set("apikey", apiKey);

	const res = await fetch(url.toString(), { method: "GET" });
	if (!res.ok) {
		const body = await res.text().catch(() => "");
		throw new Error(
			`CallMeBot WhatsApp fehlgeschlagen (${res.status}): ${body.slice(0, 200)}`
		);
	}
}
