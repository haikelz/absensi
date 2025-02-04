import dynamic from "next/dynamic";
import { Suspense } from "react";

const SignInForm = dynamic(() =>
  import("@/components/admin/sign-in-form").then((comp) => comp.SignInForm)
);

export default function SignInAdminPage() {
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
