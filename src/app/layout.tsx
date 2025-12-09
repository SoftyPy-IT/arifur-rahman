import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import React from "react";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  // metadataBase: new URL("https://saifalikhan.info"),
  applicationName: "Arifur Rahman",
  title: "Arifur Rahman",
  description: "Politician of Bangladesh Nationalist Party",
  openGraph: {
    type: "website",
    locale: "en_IE",
    // url: "https://saifalikhan.info",
    siteName: "Arifur Rahman",
    title: "Politician of Bangladesh Nationalist Party",
    description: "একজন সুপরিচিত রাজনৈতিক নেতা",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Arifur Rahman",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arifur Rahman",
    description: "Politician of Bangladesh Nationalist Party",
    images: ["/logo.png"],
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
