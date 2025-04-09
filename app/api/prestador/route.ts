import { google } from 'googleapis';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { nome, especialidade, contato, regioes } = body;

    if (!nome || !especialidade || !contato) {
      return new Response('Dados incompletos', { status: 400 });
    }

    const auth = new google.auth.JWT(
      process.env.GOOGLE_CLIENT_EMAIL,
      undefined,
      process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      ['https://www.googleapis.com/auth/spreadsheets']
    );

    const sheets = google.sheets({ version: 'v4', auth });

    const result = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.SPREADSHEET_ID,
      range: 'Página1!A:D',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[nome, especialidade, contato, regioes.join(', ')]],
      },
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
    });
  } catch (err) {
    console.error('Erro ao salvar no Google Sheets:', err);
    return new Response('Erro interno do servidor', { status: 500 });
  }
}






