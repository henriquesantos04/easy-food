export default function Cliente() {
  return (
    <main className="min-h-screen p-6">
      <h2 className="text-2xl font-bold mb-4">Cadastro do Cliente</h2>
      <form className="flex flex-col gap-4 max-w-md">
        <input className="border p-2 rounded" placeholder="Nome" />
        <input className="border p-2 rounded" placeholder="Tipo de comida desejada" />
        <input className="border p-2 rounded" placeholder="Contato (email ou telefone)" />
        <button className="bg-green-500 hover:bg-green-600 text-white p-2 rounded">Enviar</button>
      </form>
    </main>
  );
}