import type { Metadata } from "next";
import { Fraunces, Literata } from "next/font/google";
import "./globals.css";
import { AgentationProvider } from "@/components/AgentationProvider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["600"],
  variable: "--font-heading",
  display: "swap",
});

const literata = Literata({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mindful Guided Walks",
  description: "Two hours. Half a mile. A tea ceremony among the trees.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${literata.variable} scroll-smooth`}
    >
      <body className="font-[family-name:var(--font-body)] bg-birch text-forest-ink antialiased">
        <Navbar />
        {children}
        <Footer />
        <AgentationProvider />
      </body>
    </html>
  );
}
