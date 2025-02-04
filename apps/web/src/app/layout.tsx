import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Wrapper from "./wrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const baseMetadata = {
  title: "Sign In | Absensi Perpustakaan ISB Atma Luhur",
  description: "Sign In | Absensi Perpustakaan ISB Atma Luhur",
  url: "https://absensi-perpus.ekel.dev",
};

const { title, description, url } = baseMetadata;

export const metadata: Metadata = {
  title,
  description,
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title,
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    url,
    title,
    description,
    images: [
      {
        url: "https://absensi-perpus.ekel.dev",
        alt: "OG Image",
      },
    ],
    siteName: "jdwshlt.ekel.dev",
  },
  twitter: {
    title,
    description,
    site: url,
    card: "summary_large_image",
  },
  metadataBase: new URL(url),
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
        <Wrapper>{children}</Wrapper>
      </body>
    </html>
  );
}
