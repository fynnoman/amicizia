export async function POST(req: Request) {
  try {
    const stripeKey = process.env.STRIPE_SECRET_KEY;
    if (!stripeKey) {
      return new Response(JSON.stringify({ error: 'STRIPE_SECRET_KEY nicht gesetzt auf dem Server' }), { status: 500 });
    }

    const Stripe = (await import('stripe')).default;
    const stripe = new Stripe(stripeKey, { apiVersion: '2026-03-25.dahlia' });

    const body = await req.json();
    const { cart, mode, name, phone, address, note } = body;

    if (!cart || !Array.isArray(cart) || cart.length === 0) {
      return new Response(JSON.stringify({ error: "Warenkorb leer" }), { status: 400 });
    }

    const line_items = cart.map((it: any) => ({
      price_data: {
        currency: 'eur',
        product_data: { name: it.name },
        unit_amount: Math.round(Number(it.price) * 100),
      },
      quantity: Number(it.qty),
    }));

    if (mode === 'delivery') {
      line_items.push({
        price_data: {
          currency: 'eur',
          product_data: { name: 'Liefergebühr' },
          unit_amount: 350,
        },
        quantity: 1,
      });
    }

    const origin = new URL(req.url).origin;

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      line_items,
      success_url: `${origin}/?checkout=success&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/?checkout=canceled`,
      metadata: {
        customer_name: name || '',
        customer_phone: phone || '',
        customer_address: address || '',
        note: note || '',
        mode: mode || 'pickup',
      },
    });

    return new Response(JSON.stringify({ url: session.url }), { status: 200 });
  } catch (err: any) {
    console.error(err);
    return new Response(JSON.stringify({ error: err.message || 'Server error' }), { status: 500 });
  }
}
