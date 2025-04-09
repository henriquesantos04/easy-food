import { NextResponse } from 'next/server';
import { salvarPrestador } from '@/lib/sheets';

export async function POST(req: Request) {
  const { nome, especialidade, contato } = await req.json();

  try {
    await salvarPrestador(nome, especialidade, contato);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Erro ao salvar no Google Sheets:', error);
    return NextResponse.json({ error: 'Erro ao salvar cadastro' }, { status: 500 });
  }
}

