const SUMUP_API_BASE = "https://api.sumup.com/v0.1";

export type SumUpCheckoutStatus = "PENDING" | "FAILED" | "PAID" | "EXPIRED";

export type SumUpCheckout = {
	id: string;
	checkout_reference: string;
	amount: number;
	currency: string;
	merchant_code: string;
	description?: string;
	status: SumUpCheckoutStatus;
	hosted_checkout_url?: string;
	date?: string;
};

type CreateCheckoutParams = {
	amount: number;
	currency?: string;
	checkout_reference: string;
	description?: string;
	return_url?: string;
	redirect_url?: string;
};

function getEnv() {
	const apiKey = process.env.SUMUP_API_KEY;
	const merchantCode = process.env.SUMUP_MERCHANT_CODE;
	if (!apiKey) throw new Error("SUMUP_API_KEY nicht gesetzt");
	if (!merchantCode) throw new Error("SUMUP_MERCHANT_CODE nicht gesetzt");
	return { apiKey, merchantCode };
}

export async function createCheckout(
	params: CreateCheckoutParams
): Promise<SumUpCheckout> {
	const { apiKey, merchantCode } = getEnv();

	const body = {
		checkout_reference: params.checkout_reference,
		amount: params.amount,
		currency: params.currency ?? "EUR",
		merchant_code: merchantCode,
		description: params.description,
		return_url: params.return_url,
		redirect_url: params.redirect_url,
		hosted_checkout: { enabled: true },
	};

	const res = await fetch(`${SUMUP_API_BASE}/checkouts`, {
		method: "POST",
		headers: {
			Authorization: `Bearer ${apiKey}`,
			"Content-Type": "application/json",
		},
		body: JSON.stringify(body),
	});

	if (!res.ok) {
		const text = await res.text();
		throw new Error(`SumUp createCheckout fehlgeschlagen (${res.status}): ${text}`);
	}

	return (await res.json()) as SumUpCheckout;
}

export async function getCheckout(id: string): Promise<SumUpCheckout> {
	const { apiKey } = getEnv();

	const res = await fetch(`${SUMUP_API_BASE}/checkouts/${id}`, {
		method: "GET",
		headers: { Authorization: `Bearer ${apiKey}` },
	});

	if (!res.ok) {
		const text = await res.text();
		throw new Error(`SumUp getCheckout fehlgeschlagen (${res.status}): ${text}`);
	}

	return (await res.json()) as SumUpCheckout;
}
