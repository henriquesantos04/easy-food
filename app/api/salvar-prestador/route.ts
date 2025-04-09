import { NextRequest, NextResponse } from 'next/server';
import { salvarPrestador } from '@/lib/sheets';

export async function POST(request: NextRequest) {
  try {
    const { nome, especialidade, contato, regioes } = await request.json();

    if (!nome || !especialidade || !contato || !regioes?.length) {
      return NextResponse.json({ erro: 'Dados incompletos.' }, { status: 400 });
    }

    const regioesString = regioes.join(', ');

    await salvarPrestador(nome, especialidade, contato, regioesString);

    return NextResponse.json({ mensagem: 'Cadastro realizado com sucesso!' });
  } catch (erro) {
    console.error(erro);
    return NextResponse.json({ erro: 'Erro interno no servidor.' }, { status: 500 });
  }
}



