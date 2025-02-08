import { Button } from "@/components/ui/button";
import Link from "next/link";

// Landing Page
export default function Homepage() {
  return (
    <>
      <main className="w-full flex justify-center bg-atmaluhur bg-no-repeat bg-cover bg-blend-multiply bg-gray-500 min-h-svh items-center">
        <section className="w-full max-w-7xl flex flex-col justify-center items-center min-h-screen p-4">
          <div className="text-center space-y-4 flex justify-center items-center flex-col">
            <h1 className="font-bold text-5xl text-white uppercase">
              Sistem Absensi Perpustakaan
            </h1>
            <span className="text-4xl text-white font-bold">
              ISB Atma Luhur
            </span>
          </div>
          <div className="space-x-3 mt-5">
            <Link href="/absence" className="font-bold">
              <Button variant="secondary" className="font-bold">
                Absensi
              </Button>
            </Link>
            <Link href="/auth/sign-in" className="font-bold">
              <Button variant="secondary" className="font-bold">
                Sign In Dashboard
              </Button>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
