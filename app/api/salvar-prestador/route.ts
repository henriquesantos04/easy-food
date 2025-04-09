import { NextRequest, NextResponse } from 'next/server';
import { salvarPrestador } from '@/lib/sheets';

export async function POST(req: NextRequest) {
  const { nome, especialidade, contato, regiao } = await req.json();

  try {
    await salvarPrestador(nome, especialidade, contato, regiao);
    return NextResponse.json({ status: 'ok' });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ status: 'erro', error });
  }
}


