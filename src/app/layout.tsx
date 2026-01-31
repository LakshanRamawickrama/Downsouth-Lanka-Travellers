import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Downsouth Lanka Travellers | Premier Sri Lanka Travel Agency",
  description: "Experience the best of Sri Lanka with Downsouth Lanka Travellers. Custom tours, luxury transport, and unforgettable adventures across the island.",
};

import WhatsAppButton from "@/components/WhatsAppButton";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={outfit.variable}>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
