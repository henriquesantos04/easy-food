import { NextResponse } from 'next/server';
import { salvarPrestador } from '@/lib/sheets';

export async function POST(req: Request) {
  try {
    const { nome, especialidade, contato } = await req.json();
    await salvarPrestador(nome, especialidade, contato);
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ ok: false, error: 'Erro ao salvar dados' }, { status: 500 });
  }
}