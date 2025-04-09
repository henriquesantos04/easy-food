import { google } from 'googleapis';

export async function POST(request: Request) {
  try {
    const { nome, especialidade, contato, regioes } = await request.json();

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

    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.SPREADSHEET_ID,
      range: 'Página1!A:D', // Certifique-se que tenha 4 colunas
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[nome, especialidade, contato, regioes?.join(', ')]],
      },
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error('Erro ao salvar no Google Sheets:', error);
    return new Response('Erro ao salvar', { status: 500 });
  }
}






