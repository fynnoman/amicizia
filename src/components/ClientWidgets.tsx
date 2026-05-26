"use client";

import dynamic from "next/dynamic";

const FreshTicker = dynamic(() => import("@/components/FreshTicker"), { ssr: false });
const EasterEgg = dynamic(() => import("@/components/EasterEgg"), { ssr: false });

export default function ClientWidgets() {
  return (
    <>
      <FreshTicker />
      <EasterEgg />
    </>
  );
}
