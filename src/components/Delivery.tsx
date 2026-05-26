"use client";

export default function Delivery() {
	return (
		<section className="relative py-32 px-6 lg:px-12 bg-bordeaux overflow-hidden">
			<div className="max-w-7xl mx-auto relative z-10">
				<div className="text-center mb-16">
					<p className="text-white/60 text-sm tracking-[0.3em] uppercase font-medium mb-4">
						Abholung
					</p>

					<h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
						Bestelle deine Pizza zur Abholung
					</h2>

					<p className="text-white/40 text-lg">
						Bestelle vor und hole deine Pizza frisch bei uns ab — einfach und
						schnell.
					</p>
				</div>

				<div className="grid md:grid-cols-2 gap-8">
					<div className="bg-white p-6 rounded-2xl">
						<h4 className="text-lg font-semibold text-bordeaux mb-2">
							Abholung
						</h4>
						<p className="text-foreground/60">
							Bestelle online und hole deine Pizza in unserer Filiale ab.
						</p>
					</div>

					<div className="bg-white p-6 rounded-2xl">
						<h4 className="text-lg font-semibold text-bordeaux mb-2">Vor Ort</h4>
						<p className="text-foreground/60">
						Unser gemütlicher Bereich lädt zum Verweilen ein — herzlich willkommen.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
