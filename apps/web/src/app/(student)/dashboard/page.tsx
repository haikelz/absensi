import {
  MAIN_WEBSITE_TITLE,
  NEXT_PUBLIC_PRODUCTION_URL,
} from "@/utils/constants";
import { Metadata } from "next";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const Statistic = dynamic(() =>
  import("@/components/student/statistic").then((comp) => comp.Statistic)
);

const baseMetadata = {
  title: `Dashboard Mahasiswa | ${MAIN_WEBSITE_TITLE}`,
  description: `Dashboard Mahasiswa | ${MAIN_WEBSITE_TITLE}`,
  url: `${NEXT_PUBLIC_PRODUCTION_URL}/dashboard`,
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
    siteName: "absensi-perpus.ekel.dev/dashboard",
  },
  twitter: {
    title,
    description,
    site: url,
    card: "summary_large_image",
  },
  metadataBase: new URL(url),
};

export default function DashboardStudentPage() {
  return (
    <div>
      <div>
        <Suspense>
          <Statistic />
        </Suspense>
      </div>
    </div>
  );
}
