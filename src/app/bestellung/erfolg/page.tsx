import Link from "next/link";

type SearchParams = Promise<{ ref?: string }>;

export const metadata = {
	title: "Bestellung erhalten · Amicizia",
	description: "Vielen Dank für deine Bestellung bei Amicizia.",
};

export default async function OrderSuccessPage({
	searchParams,
}: {
	searchParams: SearchParams;
}) {
	const { ref } = await searchParams;

	return (
		<main className="min-h-screen bg-paper text-espresso relative overflow-hidden flex items-center justify-center px-6 py-16">
			<div
				aria-hidden="true"
				className="absolute inset-0 pointer-events-none"
			>
				<div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-bordeaux/[0.05] blur-[100px] bg-blob" />
				<div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-bordeaux-light/[0.06] blur-[80px] bg-blob" />
			</div>

			<div className="relative max-w-2xl w-full text-center">
				<div className="relative inline-block mb-8">
					<div className="w-28 h-28 mx-auto rounded-full bg-gradient-to-br from-bordeaux to-bordeaux-dark flex items-center justify-center shadow-2xl shadow-bordeaux/30 reveal delay-1">
						<svg
							className="w-14 h-14 text-paper"
							fill="none"
							stroke="currentColor"
							strokeWidth={3}
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M5 13l4 4L19 7"
							/>
						</svg>
					</div>
					<span
						className="absolute -top-2 -right-3 text-4xl reveal delay-3 inline-block animate-float"
						aria-hidden="true"
					>
						🍕
					</span>
				</div>

				<p
					className="reveal delay-1 text-bordeaux text-sm tracking-[0.3em] uppercase font-medium mb-3"
				>
					Bestellung empfangen
				</p>
				<h1 className="reveal delay-2 text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 leading-tight">
					<span
						className="font-handwriting text-bordeaux text-5xl md:text-6xl block mb-1"
					>
						grazie mille!
					</span>
					Vielen Dank für deine Bestellung
				</h1>
				<div className="reveal delay-3 w-16 h-[2px] bg-bordeaux mx-auto my-6" />

				<p className="reveal delay-3 text-foreground/55 text-base md:text-lg max-w-xl mx-auto mb-8">
					Deine Zahlung war erfolgreich. Wir haben deine Bestellung erhalten und
					bereiten sie gleich für dich vor.
				</p>

				{ref && (
					<div className="reveal delay-4 inline-block bg-paper-deep border border-bordeaux/15 rounded-2xl px-6 py-4 mb-10 depth-shadow">
						<p className="text-[11px] text-foreground/45 uppercase tracking-wider mb-1">
							Deine Bestellnummer
						</p>
						<p className="text-xl font-bold text-bordeaux font-mono">{ref}</p>
					</div>
				)}

				<div className="reveal delay-5 grid sm:grid-cols-3 gap-4 mb-10 max-w-2xl mx-auto">
					<Step
						num="1"
						title="Zubereitung"
						text="Unsere Pizzaioli fangen sofort an"
					/>
					<Step
						num="2"
						title="Benachrichtigung"
						text="Wir rufen an, sobald sie fertig ist"
					/>
					<Step
						num="3"
						title="Abholung"
						text="Frisch & heiß direkt im Restaurant"
					/>
				</div>

				<div className="reveal delay-6 flex flex-col sm:flex-row gap-3 justify-center">
					<Link
						href="/"
						className="px-8 py-3.5 bg-bordeaux text-paper text-sm font-semibold tracking-wider uppercase rounded-full hover:bg-bordeaux-dark transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-bordeaux/25"
					>
						Zurück zur Startseite
					</Link>
					<Link
						href="/#order"
						className="px-8 py-3.5 border border-bordeaux/20 text-bordeaux text-sm font-semibold tracking-wider uppercase rounded-full hover:bg-bordeaux/5 transition-all duration-300"
					>
						Noch etwas bestellen
					</Link>
				</div>

				<p className="reveal delay-7 text-xs text-foreground/35 mt-12">
					Du hast Fragen? Ruf uns einfach an — wir helfen gern.
				</p>
			</div>
		</main>
	);
}

function Step({ num, title, text }: { num: string; title: string; text: string }) {
	return (
		<div className="bg-paper-deep rounded-2xl p-5 border border-foreground/5">
			<div className="w-9 h-9 rounded-full bg-bordeaux/10 text-bordeaux font-bold flex items-center justify-center mx-auto mb-3 text-base">
				{num}
			</div>
			<h3 className="text-sm font-bold text-foreground mb-1">{title}</h3>
			<p className="text-xs text-foreground/50">{text}</p>
		</div>
	);
}
