import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Briefly — AI meeting notes for fast-moving teams",
  description:
    "Briefly turns meetings into summaries, decisions, and next steps automatically. Capture action items, share recaps, and keep your team aligned.",
  keywords: [
    "AI meeting assistant",
    "meeting notes",
    "AI summaries",
    "meeting recap tool",
    "team collaboration",
    "action items",
  ],
  authors: [{ name: "Bhushan Marathe" }],
  creator: "Bhushan Marathe",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Briefly — AI meeting notes for fast-moving teams",
    description: "Turn every call into summaries, decisions, and next steps.",
    url: "https://example.com",
    siteName: "Briefly",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Briefly — AI meeting notes for fast-moving teams",
    description: "Turn every call into summaries, decisions, and next steps.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
