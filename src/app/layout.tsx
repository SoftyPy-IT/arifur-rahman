import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import { Hind_Siliguri } from "next/font/google";

const siliguri = Hind_Siliguri({
  weight: "400",
  subsets: ["bengali"],
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
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        className={` ${siliguri.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
