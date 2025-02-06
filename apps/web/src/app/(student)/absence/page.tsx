import {
  MAIN_WEBSITE_TITLE,
  NEXT_PUBLIC_PRODUCTION_URL,
} from "@/utils/constants";
import { Metadata } from "next";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const AbsenceForm = dynamic(() =>
  import("@/components/student/absence-form").then((comp) => comp.AbsenceForm)
);

const baseMetadata = {
  title: `Absence | ${MAIN_WEBSITE_TITLE}`,
  description: `Absence | ${MAIN_WEBSITE_TITLE}`,
  url: `${NEXT_PUBLIC_PRODUCTION_URL}/absence`,
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
    siteName: "absensi-perpus.ekel.dev/absence",
  },
  twitter: {
    title,
    description,
    site: url,
    card: "summary_large_image",
  },
  metadataBase: new URL(url),
};

export default function AbsencePage() {
  return (
    <main className="w-full flex justify-center bg-atmaluhur bg-no-repeat bg-cover bg-blend-multiply bg-gray-500 min-h-svh items-center">
      <section className="mx-auto w-1/2">
        <Suspense>
          <AbsenceForm />
        </Suspense>
      </section>
    </main>
  );
}
