import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const alt = "Ahmed Al-Shami — Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

async function loadFont() {
  try {
    const font = await readFile(
      join(process.cwd(), "public/fonts/CabinetGrotesk-Medium.ttf"),
    );
    return font.buffer.slice(
      font.byteOffset,
      font.byteOffset + font.byteLength,
    ) as ArrayBuffer;
  } catch {
    // The built-in font keeps the image usable if the local font is unavailable.
    return undefined;
  }
}

export default async function OpenGraphImage() {
  const font = await loadFont();

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          padding: 32,
          background: "#0a0a0a",
          color: "#f5f5f5",
          fontFamily: font ? "Cabinet Grotesk" : "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            height: "100%",
            border: "1px solid #303030",
            borderRadius: 28,
            padding: 56,
            background: "linear-gradient(145deg, #202020, #101010 60%)",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                fontSize: 22,
                letterSpacing: 3,
                color: "#a3a3a3",
              }}
            >
              0xA7MD
            </div>
            <svg width="32" height="112" viewBox="0 0 98 339" fill="none">
              <path
                d="M38.1576 -8.4315e-05L0.948278 39.7784L6.704e-05 117.532L92.7054 83.3674L97.1515 31.5545L31.6259 71.1397L33.8701 58.6188L89.0826 24.1004L38.1576 -8.4315e-05Z"
                fill="white"
              />
              <path
                d="M94.9571 94.709L1.29025 129.826L9.1463 338.194L49.7378 332.8L70.6523 317.371L94.9571 94.709Z"
                fill="white"
              />
            </svg>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <div
              style={{
                display: "flex",
                fontSize: 86,
                fontWeight: 500,
                letterSpacing: -3,
                lineHeight: 1.1,
              }}
            >
              Ahmed Al-Shami
            </div>
            <div style={{ display: "flex", fontSize: 34, color: "#b3b3b3" }}>
              Software Engineer
            </div>
            <div
              style={{
                display: "flex",
                width: "100%",
                height: 1,
                marginTop: 22,
                background: "#363636",
              }}
            />
            <div style={{ display: "flex", fontSize: 20, color: "#8c8c8c" }}>
              Selected projects · Web applications · Digital products
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: font
        ? [
            {
              name: "Cabinet Grotesk",
              data: font,
              weight: 500,
              style: "normal",
            },
          ]
        : undefined,
    },
  );
}
