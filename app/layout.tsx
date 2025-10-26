// app/layout.tsx
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"], variable: "--font-body" });
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: "EppelStyle Barber",
  description: "Moderne Haarschnitte & Bartstyles – EppelStyle Barber.",
  metadataBase: new URL("https://eppelstyle.de"),
  openGraph: {
    title: "EppelStyle Barber",
    description: "Moderne Haarschnitte & Bartstyles.",
    url: "https://eppelstyle.de",
    siteName: "EppelStyle Barber",
    type: "website",
  },
  icons: { icon: "/icon.png" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-creme text-charcoal antialiased">
        <Navbar />
        {children}
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
