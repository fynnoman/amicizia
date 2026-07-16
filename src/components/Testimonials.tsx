"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Divider, Fleuron } from "./Ornaments";

const reviews = [
	{
		text: "Beste Pizza in Saarlouis, keine Diskussion. Der Teig ist perfekt, die Zutaten frisch. Komme jede Woche.",
		author: "Marcel K.",
		rating: 5,
	},
	{
		text: "Familiäre Atmosphäre und unglaublich leckere Pizza. Man wird sofort begrüßt wie zu Hause.",
		author: "Sofia L.",
		rating: 5,
	},
	{
		text: "Schnelle Abholung, alles war heiß und ofenfrisch. Genau der richtige Kick.",
		author: "Tim B.",
		rating: 5,
	},
	{
		text: "Endlich ein echter Italiener in der Gegend. Man schmeckt, dass mit Liebe gekocht wird.",
		author: "Anna M.",
		rating: 5,
	},
	{
		text: "Die Ciabatta Piccante ist ein Traum. Preis-Leistung absolut top.",
		author: "Lisa R.",
		rating: 5,
	},
	{
		text: "Meine Kinder lieben die Pizza von AMICIZIA — und ich auch.",
		author: "Jens P.",
		rating: 5,
	},
];

function Stars({ n }: { n: number }) {
	return (
		<div className="flex gap-0.5">
			{Array.from({ length: 5 }).map((_, i) => (
				<svg
					key={i}
					className={`w-3.5 h-3.5 ${i < n ? "text-terracotta" : "text-espresso/15"}`}
					fill="currentColor"
					viewBox="0 0 20 20"
				>
					<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
				</svg>
			))}
		</div>
	);
}

function PolaroidCard({
	r,
	rotate,
}: {
	r: typeof reviews[0];
	rotate: string;
}) {
	return (
		<div className={`relative polaroid w-[300px] shrink-0 ${rotate}`}>
			<span className="tape" />
			<div className="bg-paper-deep/60 h-44 mb-4 flex items-center justify-center relative">
				<div className="grain-overlay opacity-40" />
				<div className="relative text-center px-5">
					<Stars n={r.rating} />
					<p className="font-hand text-2xl text-espresso leading-snug mt-3">
						&ldquo;{r.text}&rdquo;
					</p>
				</div>
			</div>
			<div className="px-1 flex items-center justify-between">
				<div className="font-hand text-2xl text-terracotta leading-none">
					— {r.author}
				</div>
				<div className="font-display italic text-[10px] tracking-[0.25em] uppercase text-espresso-soft">
					Google
				</div>
			</div>
		</div>
	);
}

export default function Testimonials() {
	const ref = useRef(null);
	const inView = useInView(ref, { once: true, margin: "-100px" });
	const rotations = ["tilt-l", "tilt-r", "tilt-xs", "tilt-r", "tilt-l", "tilt-xs"];

	return (
		<section
			ref={ref}
			className="paper-grain relative py-16 sm:py-20 md:py-32 overflow-hidden bg-paper"
		>
			<div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12">
				<div className="text-center mb-10 sm:mb-14">
					<motion.div
						initial={{ opacity: 0, y: 14 }}
						animate={inView ? { opacity: 1, y: 0 } : {}}
						transition={{ duration: 0.6 }}
						className="flex justify-center mb-5 text-terracotta"
					>
						<Divider label="VII · Unsere Gäste" />
					</motion.div>
					<motion.h2
						initial={{ opacity: 0, y: 14 }}
						animate={inView ? { opacity: 1, y: 0 } : {}}
						transition={{ duration: 0.6, delay: 0.1 }}
						className="display-lg text-[clamp(2.5rem,6vw,5rem)] text-espresso"
					>
						Was unsere{" "}
						<span className="italic-display text-terracotta">Gäste sagen</span>
					</motion.h2>
					<motion.p
						initial={{ opacity: 0 }}
						animate={inView ? { opacity: 1 } : {}}
						transition={{ duration: 0.6, delay: 0.2 }}
						className="font-display italic text-base sm:text-lg text-espresso-soft mt-3 tracking-wide"
					>
						Rückmeldungen unserer Stammgäste.
					</motion.p>
					<div className="flex justify-center mt-4 text-terracotta">
						<Fleuron size={16} />
					</div>
				</div>
			</div>

			{/* Row 1 — left */}
			<div className="mb-10 overflow-hidden">
				<div className="flex gap-7 testimonial-row-left px-6">
					{[...reviews, ...reviews, ...reviews].map((r, i) => (
						<PolaroidCard
							key={`l-${i}`}
							r={r}
							rotate={rotations[i % rotations.length]}
						/>
					))}
				</div>
			</div>

			{/* Row 2 — right */}
			<div className="overflow-hidden">
				<div className="flex gap-7 testimonial-row-right px-6">
					{[...reviews.slice().reverse(), ...reviews.slice().reverse(), ...reviews.slice().reverse()].map(
						(r, i) => (
							<PolaroidCard
								key={`r-${i}`}
								r={r}
								rotate={rotations[(i + 2) % rotations.length]}
							/>
						)
					)}
				</div>
			</div>
		</section>
	);
}
