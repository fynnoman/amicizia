"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";

const familyQuotes = [
	{ text: "Krosse Kruste, guter Geschmack.", author: "Gast" },
	{ text: "Nur Pizza, immer frisch.", author: "Gast" },
	{ text: "Der Ofen macht den Unterschied.", author: "Gast" },
];

const marqueeText =
	"PIZZA · AMORE · AMICIZIA · SAARLOUIS · FRISCH · KNUSPRIG · HANDGEMACHT · OFENFRISCH · ";

export default function Marquee() {
	const [currentQuote, setCurrentQuote] = useState(0);
	const [displayedText, setDisplayedText] = useState("");
	const [isTyping, setIsTyping] = useState(true);

	useEffect(() => {
		const quote = familyQuotes[currentQuote].text;

		if (isTyping) {
			if (displayedText.length < quote.length) {
				const timeout = setTimeout(() => {
					setDisplayedText(quote.slice(0, displayedText.length + 1));
				}, 50);
				return () => clearTimeout(timeout);
			} else {
				const timeout = setTimeout(() => setIsTyping(false), 3000);
				return () => clearTimeout(timeout);
			}
		} else {
			setDisplayedText("");
			setCurrentQuote((prev) => (prev + 1) % familyQuotes.length);
			setIsTyping(true);
		}
	}, [displayedText, isTyping, currentQuote]);

	return (
		<div className="relative bg-bordeaux-dark overflow-hidden">
			{/* Family Quote Typewriter */}
			<div className="py-5 border-b border-white/5">
				<div className="max-w-4xl mx-auto px-6 flex items-center justify-center min-h-[36px]">
					<AnimatePresence mode="wait">
						<motion.div
							key={currentQuote}
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 0.3 }}
							className="text-center"
						>
							<span
								className="text-white/70 text-base md:text-lg"
								style={{ fontFamily: "var(--font-caveat)" }}
							>
								&ldquo;{displayedText}
								<span className="animate-blink text-white/50">|</span>
								&rdquo;
							</span>
							{displayedText === familyQuotes[currentQuote].text && (
								<motion.span
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									transition={{ duration: 0.3 }}
									className="text-white/30 text-sm ml-3"
								>
									— {familyQuotes[currentQuote].author}
								</motion.span>
							)}
						</motion.div>
					</AnimatePresence>
				</div>
			</div>

			{/* CSS-only scrolling marquee — GPU accelerated via translate3d */}
			<div className="py-3 overflow-hidden">
				<div className="marquee-track flex whitespace-nowrap">
					<span className="marquee-content text-[11px] tracking-[0.25em] uppercase text-white/20 font-medium">
						{marqueeText}
						{marqueeText}
						{marqueeText}
						{marqueeText}
					</span>
				</div>
			</div>
		</div>
	);
}
