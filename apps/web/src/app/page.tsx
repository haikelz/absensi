import Link from "next/link";

// Landing Page
export default function Homepage() {
  return (
    <>
      <Navbar />
      <main className="w-full flex justify-center bg-atmaluhur bg-no-repeat bg-cover bg-blend-multiply bg-gray-500 min-h-svh items-center">
        <section className="mx-auto w-1/2">
          Sistem Absensi Perpustakaan ISB Atma Luhur developed by:
          https://github.com/haikelz github.com/haikelz
        </section>
      </main>
    </>
  );
}

function Navbar() {
  return (
    <header className="w-full sticky top-0 flex justify-between items-center p-4 bg-white/70 backdrop-blur-md">
      <nav className="mx-auto flex justify-between items-center max-w-7xl w-full">
        <div>
          <Link href="/">Home</Link>
        </div>
        <div className="flex justify-center items-center space-x-5">
          <Link href="/absence" className="font-bold">
            Absensi
          </Link>
          <Link href="/student/dashboard" className="font-bold">
            Dashboard
          </Link>
        </div>
      </nav>
    </header>
  );
}
