import type { Metadata } from "next";
import { Instrument_Serif, Manrope } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Header, Footer } from "@/components/chrome";
import { Cursor } from "@/components/cursor";

const instrumentSerif = Instrument_Serif({
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-instrument",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

// Pre-paint gate for the sticky scroll scenes: applies their extra section
// height before first paint so page height never inflates post-hydration.
// Keep this query in sync with scrollSceneQuery in src/lib/motion.ts.
const scrollSceneGate = `if (window.matchMedia("(min-width: 900px) and (min-height: 750px) and (prefers-reduced-motion: no-preference)").matches) document.documentElement.dataset.scrollScene = "true";`;

export const metadata: Metadata = {
  title: "Lee Monarc — Accounting & Advisory, Perth",
  description:
    "Accounting and commercially minded financial advisory with Vivienne Lee in Perth, Western Australia.",
  robots: { index: false, follow: false },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-AU" className={`${instrumentSerif.variable} ${manrope.variable}`}>
      <body id="top">
        <Script id="scroll-scene-gate" strategy="beforeInteractive">
          {scrollSceneGate}
        </Script>
        <Header />
        {children}
        <Footer />
        <Cursor />
      </body>
    </html>
  );
}
