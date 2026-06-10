import { ImageResponse } from "next/og";

export const alt = "AMICIZIA — Pizzeria & Italiener in Saarlouis";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background:
            "radial-gradient(60% 70% at 20% 20%, #1a1612 0%, #0B0B0E 60%, #050505 100%)",
          color: "#F7EFD9",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "70px 80px",
          fontFamily: "serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <div
            style={{
              fontSize: 28,
              letterSpacing: "0.3em",
              color: "#E8C588",
              textTransform: "uppercase",
              fontStyle: "italic",
            }}
          >
            Trattoria · Saarlouis · seit 2013
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 132,
              lineHeight: 0.95,
              fontWeight: 600,
              letterSpacing: "-0.04em",
              color: "#F7EFD9",
            }}
          >
            AMICIZIA
          </div>
          <div
            style={{
              fontSize: 44,
              lineHeight: 1.1,
              fontStyle: "italic",
              color: "#EBE0BC",
              maxWidth: 1000,
            }}
          >
            Pizzeria & Italiener in Saarlouis — Steinofen, frische Pasta,
            Familienrezepte.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: "#E8C588",
            fontSize: 24,
            fontStyle: "italic",
            letterSpacing: "0.1em",
          }}
        >
          <div>Industriestraße 20 · 66740 Saarlouis</div>
          <div>amicizia-saarlouis.de</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
