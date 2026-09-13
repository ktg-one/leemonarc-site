import type { Metadata } from "next";
import "@fontsource/instrument-serif/latin-400.css";
import "@fontsource/instrument-serif/latin-400-italic.css";
import "@fontsource-variable/manrope";
import "./globals.css";
import { Header, Footer } from "@/components/chrome";
import { Cursor } from "@/components/cursor";

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
    <html lang="en-AU">
      <body id="top">
        <Header />
        {children}
        <Footer />
        <Cursor />
      </body>
    </html>
  );
}
