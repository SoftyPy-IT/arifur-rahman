import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import { Hind_Siliguri } from "next/font/google";

const siliguri = Hind_Siliguri({
  weight: "400",
  subsets: ["bengali"],
});

export const metadata: Metadata = {
  applicationName: "Majumdar Arifur Rahman",
  title: "Majumdar Arifur Rahman",
  description: "Politician of Bangladesh Nationalist Party",
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: "https://www.majumdararif.info",
    siteName: "Majumdar Arifur Rahman",
    title: "Majumdar Arifur Rahman",
    description: "Politician of Bangladesh Nationalist Party",
    images: [
      {
        url: "https://www.majumdararif.info/Images/ar2.png",
        width: 1200,
        height: 630,
        alt: "Majumdar Arifur Rahman",
      },
    ],
    countryName: "Bangladesh",
    emails: ["majumdararif@gmail.com"],

    phoneNumbers: ["+8801xxxxxxxxx"],
  },
  // Add twitter metadata too
  twitter: {
    card: "summary_large_image",
    title: "Majumdar Arifur Rahman",
    description: "Politician of Bangladesh Nationalist Party",
    images: ["https://www.majumdararif.info/Images/ar2.png"],
  },
 
  metadataBase: new URL("https://www.majumdararif.info"), 
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
