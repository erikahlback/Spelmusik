import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Instrument_Serif,
  Press_Start_2P,
} from "next/font/google";
import "./globals.css";
import { site } from "@/content/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  weight: "400",
  subsets: ["latin"],
});

const pressStart = Press_Start_2P({
  variable: "--font-press-start",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${site.name} — ${site.tagline}`,
  description: site.intro,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} ${pressStart.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {/* Dekorativa figurer vänster */}
        <img
          src="/deco-left.png"
          alt=""
          aria-hidden="true"
          className="fixed left-0 top-0 h-full w-auto object-cover object-top pointer-events-none select-none opacity-60"
          style={{ zIndex: 0 }}
        />
        {/* Dekorativa figurer höger */}
        <img
          src="/deco-right.png"
          alt=""
          aria-hidden="true"
          className="fixed right-0 top-0 h-full w-auto object-cover object-top pointer-events-none select-none opacity-60"
          style={{ zIndex: 0 }}
        />
        <div className="relative" style={{ zIndex: 1 }}>
          {children}
        </div>
      </body>
    </html>
  );
}
