export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-800 p-6 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-6">Easy Food</h1>
      <p className="text-lg mb-10">Conectando clientes a prestadores de serviços culinários</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-xl">
        <a
          href="/cliente"
          className="bg-green-500 hover:bg-green-600 text-white p-6 rounded-2xl shadow text-center font-semibold"
        >
          Sou Cliente
        </a>
        <a
          href="/prestador"
          className="bg-blue-500 hover:bg-blue-600 text-white p-6 rounded-2xl shadow text-center font-semibold"
        >
          Sou Prestador
        </a>
      </div>
    </main>
  );
}