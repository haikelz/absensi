import {
  MAIN_WEBSITE_TITLE,
  NEXT_PUBLIC_PRODUCTION_URL,
} from "@/utils/constants";
import { Metadata } from "next";

const baseMetadata = {
  title: `Dashboard Admin | ${MAIN_WEBSITE_TITLE}`,
  description: `Dashboard Admin | ${MAIN_WEBSITE_TITLE}`,
  url: `${NEXT_PUBLIC_PRODUCTION_URL}/admin/dashboard`,
};

const { title, description, url } = baseMetadata;

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    type: "website",
    url,
    title,
    description,
    images: [
      {
        url: `${MAIN_WEBSITE_TITLE}`,
        alt: "OG Image",
      },
    ],
    siteName: "absensi-perpus.ekel.dev/admin/dashboard",
  },
  twitter: {
    title,
    description,
    site: url,
    card: "summary_large_image",
  },
  metadataBase: new URL(url),
};

export default function DashboardAdmin() {
  return (
    <div>
      <div></div>
    </div>
  );
}
