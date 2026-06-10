import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#0B0B0E",
          color: "#E8C588",
          fontSize: 36,
          fontWeight: 700,
          fontFamily: "serif",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          letterSpacing: "-0.05em",
        }}
      >
        A
      </div>
    ),
    { ...size }
  );
}
