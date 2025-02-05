import {
  MAIN_WEBSITE_TITLE,
  NEXT_PUBLIC_PRODUCTION_URL,
} from "@/utils/constants";
import { Metadata } from "next";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const SignInForm = dynamic(() =>
  import("@/components/student/sign-in-form").then((comp) => comp.SignInForm)
);

const baseMetadata = {
  title: `Sign In | ${MAIN_WEBSITE_TITLE}`,
  description: `Sign In | ${MAIN_WEBSITE_TITLE}`,
  url: `${NEXT_PUBLIC_PRODUCTION_URL}/auth/sign-in`,
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
    siteName: "absensi-perpus.ekel.dev/auth/sign-in",
  },
  twitter: {
    title,
    description,
    site: url,
    card: "summary_large_image",
  },
  metadataBase: new URL(url),
};

export default function SignInStudentPage() {
  return (
    <main className="w-full flex justify-center bg-atmaluhur bg-no-repeat bg-cover bg-blend-multiply bg-gray-500 min-h-svh items-center">
      <section className="mx-auto w-1/2">
        <Suspense>
          <SignInForm />
        </Suspense>
      </section>
    </main>
  );
}
