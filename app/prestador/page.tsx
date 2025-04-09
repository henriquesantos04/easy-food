export default function Prestador() {
  return (
    <main className="min-h-screen p-6">
      <h2 className="text-2xl font-bold mb-4">Cadastro de Prestador</h2>
      <form className="flex flex-col gap-4 max-w-md">
        <input className="border p-2 rounded" placeholder="Nome" />
        <input className="border p-2 rounded" placeholder="Especialidade culinária" />
        <input className="border p-2 rounded" placeholder="Contato (email ou telefone)" />
        <button className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded">Cadastrar</button>
      </form>
    </main>
  );
}