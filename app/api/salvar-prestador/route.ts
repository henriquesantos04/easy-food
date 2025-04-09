import { NextResponse } from 'next/server';
import { salvarPrestador } from '@/lib/sheets';

export async function POST(req: Request) {
  const { nome, especialidade, contato } = await req.json();

  try {
    await salvarPrestador(nome, especialidade, contato);
    return NextResponse.json({ status: 'ok' });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Erro ao salvar' }, { status: 500 });
  }
}
