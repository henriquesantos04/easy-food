import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
      <h1 className="text-3xl font-bold mb-6">Bem-vindo ao Easy Food</h1>
      <div className="space-y-4">
        <Link
          href="/cliente"
          className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
        >
          Sou Cliente
        </Link>
        <Link
          href="/prestador"
          className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700"
        >
          Sou Prestador
        </Link>
      </div>
    </main>
  );
}


