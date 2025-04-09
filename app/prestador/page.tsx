'use client';

import { useState } from 'react';

export default function PrestadorPage() {
  const [nome, setNome] = useState('');
  const [especialidade, setEspecialidade] = useState('');
  const [contato, setContato] = useState('');
  const [mensagem, setMensagem] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    try {
      const res = await fetch('/api/salvar-prestador', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nome, especialidade, contato }),
      });

      if (res.ok) {
        setMensagem('Prestador cadastrado com sucesso!');
        setNome('');
        setEspecialidade('');
        setContato('');
      } else {
        setMensagem('Erro ao cadastrar. Tente novamente.');
      }
    } catch (error) {
      setMensagem('Erro na requisição.');
    }
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>Cadastro de Prestador</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome:</label>
          <input value={nome} onChange={(e) => setNome(e.target.value)} required />
        </div>
        <div>
          <label>Especialidade:</label>
          <input value={especialidade} onChange={(e) => setEspecialidade(e.target.value)} required />
        </div>
        <div>
          <label>Contato:</label>
          <input value={contato} onChange={(e) => setContato(e.target.value)} required />
        </div>
        <button type="submit">Cadastrar</button>
      </form>
      {mensagem && <p>{mensagem}</p>}
    </div>
  );
}
