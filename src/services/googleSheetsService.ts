export interface SheetSermonData {
  serieId: string;
  serieTitle: string;
  serieDescription: string;
  serieBanner: string;
  videoTitle: string;
  videoUrl: string;
  videoDate: string;
  pdfTitle: string;
  pdfUrl: string;
}

export class GoogleSheetsService {
  private apiKey: string;
  private sheetId: string;
  private range: string;

  constructor() {
    this.apiKey = import.meta.env.VITE_GOOGLE_SHEETS_API_KEY || '';
    this.sheetId = import.meta.env.VITE_GOOGLE_SHEETS_ID || '';
    this.range = 'Sermões!A:I'; // A até I para cobrir todas as colunas
  }

  async fetchSermonData(): Promise<SheetSermonData[]> {
    if (!this.apiKey || !this.sheetId) {
      console.warn('Google Sheets API Key ou Sheet ID não configurados');
      return [];
    }

    try {
      const url = `https://sheets.googleapis.com/v4/spreadsheets/${this.sheetId}/values/${this.range}?key=${this.apiKey}`;
      
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error(`Erro na API do Google Sheets: ${response.statusText}`);
      }
      
      const data = await response.json();
      
      if (!data.values || data.values.length < 2) {
        console.warn('Nenhum dado encontrado na planilha');
        return [];
      }

      // Pular a primeira linha (cabeçalho)
      const rows = data.values.slice(1);
      
      return rows
        .filter((row: string[]) => row && row.length > 0 && row[0]) // Filtrar linhas vazias
        .map((row: string[]): SheetSermonData => ({
          serieId: row[0] || '',
          serieTitle: row[1] || '',
          serieDescription: row[2] || '',
          serieBanner: row[3] || '',
          videoTitle: row[4] || '',
          videoUrl: row[5] || '',
          videoDate: row[6] || '',
          pdfTitle: row[7] || '',
          pdfUrl: row[8] || ''
        }));
    } catch (error) {
      console.error('Erro ao buscar dados da planilha:', error);
      throw error;
    }
  }

  /**
   * Método para testar a conexão com a planilha
   */
  async testConnection(): Promise<boolean> {
    try {
      await this.fetchSermonData();
      return true;
    } catch {
      return false;
    }
  }
}