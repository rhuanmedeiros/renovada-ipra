import { useState, useEffect } from 'react';
import { GoogleSheetsService, SheetSermonData } from '@/services/googleSheetsService';
import { SermonSeries, SermonVideo } from '@/data/sermons';

interface PdfDocument {
  title: string;
  url: string;
}

interface SermonSeriesWithPdfs extends Omit<SermonSeries, 'videos'> {
  videos: SermonVideo[];
  pdfs: PdfDocument[];
}

export const useSermonData = () => {
  const [sermonsData, setSermonsData] = useState<SermonSeriesWithPdfs[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const transformSheetDataToSeries = (sheetData: SheetSermonData[]): SermonSeriesWithPdfs[] => {
    // Agrupar dados por série
    const seriesMap = new Map<string, SermonSeriesWithPdfs>();

    sheetData.forEach(row => {
      if (!row.serieId || !row.serieTitle) return;

      // Criar série se não existir
      if (!seriesMap.has(row.serieId)) {
        seriesMap.set(row.serieId, {
          id: row.serieId,
          title: row.serieTitle,
          description: row.serieDescription,
          banner: row.serieBanner,
          videos: [],
          pdfs: []
        });
      }

      const series = seriesMap.get(row.serieId)!;
      
      // Adicionar vídeo se existir
      if (row.videoTitle && row.videoUrl) {
        // Verificar se o vídeo já foi adicionado
        const videoExists = series.videos.some(v => v.url === row.videoUrl);
        if (!videoExists) {
          series.videos.push({
            title: row.videoTitle,
            url: row.videoUrl,
            date: row.videoDate
          });
        }
      }

      // Adicionar PDF se existir
      if (row.pdfTitle && row.pdfUrl) {
        // Verificar se o PDF já foi adicionado
        const pdfExists = series.pdfs.some(p => p.url === row.pdfUrl);
        if (!pdfExists) {
          series.pdfs.push({
            title: row.pdfTitle,
            url: row.pdfUrl
          });
        }
      }
    });

    // Ordenar vídeos por data (mais recente primeiro)
    Array.from(seriesMap.values()).forEach(series => {
      series.videos.sort((a, b) => {
        if (!a.date || !b.date) return 0;
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      });
    });

    return Array.from(seriesMap.values());
  };

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const sheetsService = new GoogleSheetsService();
      const sheetData = await sheetsService.fetchSermonData();
      const transformedData = transformSheetDataToSeries(sheetData);
      
      setSermonsData(transformedData);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Erro desconhecido ao carregar sermões';
      setError(errorMessage);
      console.error('Erro ao carregar dados dos sermões:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { 
    sermonsData, 
    loading, 
    error, 
    refetch: fetchData 
  };
};