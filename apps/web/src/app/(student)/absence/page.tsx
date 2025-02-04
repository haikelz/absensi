import dynamic from "next/dynamic";
import { Suspense } from "react";

const AbsenceForm = dynamic(() =>
  import("@/components/student/absence-form").then((comp) => comp.AbsenceForm)
);

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
