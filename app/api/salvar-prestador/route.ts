import { NextRequest, NextResponse } from 'next/server';
import { salvarPrestador } from '@/lib/sheets';

export async function POST(req: NextRequest) {
  const { nome, especialidade, contato, regioes } = await req.json();

  try {
    await salvarPrestador(nome, especialidade, contato, regioes);
    return NextResponse.json({ status: 'ok' });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ status: 'erro', error });
  }
}



