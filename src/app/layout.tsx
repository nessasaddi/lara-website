import type { Metadata } from "next";
import { cormorantGaramond, plusJakartaSans } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "In Light | Brand Content Strategist & Photographer",
  description:
    "Strategic brand photography, content creation, and social media management for established businesses ready to elevate their presence with intention.",
  keywords:
    "brand photographer, content strategist, personal brand photography, brand content, social media management, real estate photography, med spa content, brand elevation, in light",
  openGraph: {
    title: "In Light | Brand Content Strategist & Photographer",
    description: "Content that reflects who you're becoming.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorantGaramond.variable} ${plusJakartaSans.variable} antialiased`}
    >
      <body className="min-h-screen">
        <div className="grain-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
