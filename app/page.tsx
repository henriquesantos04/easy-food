export default function Home() {
  return (
    <main className="min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-6">Bem-vindo ao Easy Food</h1>
      <div className="flex gap-4">
        <a href="/cliente" className="bg-blue-500 text-white px-4 py-2 rounded">Sou Cliente</a>
        <a href="/prestador" className="bg-purple-500 text-white px-4 py-2 rounded">Sou Prestador</a>
      </div>
    </main>
  );
}