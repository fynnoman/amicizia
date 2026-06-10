import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#0B0B0E",
          color: "#E8C588",
          fontSize: 110,
          fontWeight: 600,
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
