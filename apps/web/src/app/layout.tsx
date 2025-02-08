import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Wrapper from "./wrapper";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

const baseMetadata = {
  title: "Sistem Absensi Perpustakaan ISB Atma Luhur",
  description: "Sistem Absensi Perpustakaan ISB Atma Luhur",
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
    siteName: "absensi-perpus.ekel.dev",
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
      <body className={`${plusJakartaSans.variable} antialiased`}>
        <Wrapper>{children}</Wrapper>
      </body>
    </html>
  );
}
