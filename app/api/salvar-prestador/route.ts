// app/api/salvar-prestador/route.ts

import { NextResponse } from 'next/server';
import { salvarPrestador } from '@/lib/sheets';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { nome, especialidade, contato } = body;

    if (!nome || !especialidade || !contato) {
      return NextResponse.json({ error: 'Campos obrigatórios ausentes.' }, { status: 400 });
    }

    await salvarPrestador(nome, especialidade, contato);

    return NextResponse.json({ message: 'Prestador salvo com sucesso!' });
  } catch (error) {
    console.error('Erro ao salvar prestador:', error);
    return NextResponse.json({ error: 'Erro interno ao salvar prestador.' }, { status: 500 });
  }
}

