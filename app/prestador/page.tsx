'use client';

import { useState } from 'react';

const opcoesRegioes = ['Vitória', 'Vila Velha', 'Cariacica', 'Serra'];

export default function PrestadorPage() {
  const [nome, setNome] = useState('');
  const [especialidade, setEspecialidade] = useState('');
  const [contato, setContato] = useState('');
  const [regioes, setRegioes] = useState<string[]>([]);
  const [mensagem, setMensagem] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/prestador', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nome, especialidade, contato, regioes }),
      });

      if (res.ok) {
        setMensagem('Cadastro enviado com sucesso!');
        setNome('');
        setEspecialidade('');
        setContato('');
        setRegioes([]);
      } else {
        setMensagem('Erro ao enviar cadastro.');
      }
    } catch (error) {
      console.error(error);
      setMensagem('Erro ao enviar cadastro.');
    }
  };

  const toggleRegiao = (regiao: string) => {
    setRegioes((prev) =>
      prev.includes(regiao)
        ? prev.filter((r) => r !== regiao)
        : [...prev, regiao]
    );
  };

  return (
    <main className="min-h-screen p-6">
      <h2 className="text-2xl font-bold mb-4">Cadastro de Prestador</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md">
        <input
          className="border p-2 rounded"
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <input
          className="border p-2 rounded"
          placeholder="Especialidade culinária"
          value={especialidade}
          onChange={(e) => setEspecialidade(e.target.value)}
        />
        <input
          className="border p-2 rounded"
          placeholder="Contato (email ou telefone)"
          value={contato}
          onChange={(e) => setContato(e.target.value)}
        />
        <div>
          <p className="font-semibold mb-1">Região de atuação:</p>
          <div className="flex flex-col gap-1">
            {opcoesRegioes.map((regiao) => (
              <label key={regiao} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={regioes.includes(regiao)}
                  onChange={() => toggleRegiao(regiao)}
                />
                {regiao}
              </label>
            ))}
          </div>
        </div>
        <button className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded">
          Cadastrar
        </button>
      </form>
      {mensagem && <p className="mt-4">{mensagem}</p>}
    </main>
  );
}


