import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://jetsemrick.com";
const siteName = "Jet Semrick";
const siteDescription = "Personal website and portfolio";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Jet Semrick",
  description: siteDescription,
  icons: {
    icon: "/icon.png",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Jet Semrick",
    description: siteDescription,
    url: siteUrl,
    siteName,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jet Semrick",
    description: siteDescription,
    creator: "@jetsemrick",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <div className="noise-overlay" />
        <Header />
        <main className="mx-auto min-h-screen max-w-3xl px-6 py-12 md:py-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
