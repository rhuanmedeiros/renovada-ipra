export interface SermonVideo {
  title: string;
  url: string;
  date?: string;
}

export interface SermonSeries {
  id: string;
  title: string;
  banner: string;
  description?: string;
  videos: SermonVideo[];
}

// Exemplo de dados de sermões
export const sermonSeriesData: SermonSeries[] = [
  {
    id: 'esperanca-em-tempos-dificeis',
    title: 'Esperança em Tempos Difíceis',
    banner: '/src/assets/banner-esperanca.jpg',
    description: 'Uma série sobre encontrar esperança e propósito mesmo nos momentos mais desafiadores da vida.',
    videos: [
      {
        title: 'A Fonte da Esperança',
        url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        date: '2024-01-21'
      },
      {
        title: 'Esperança que Não Decepciona',
        url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        date: '2024-01-14'
      },
      {
        title: 'Vivendo com Esperança',
        url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        date: '2024-01-07'
      }
    ]
  },
  {
    id: 'proposito-e-chamado',
    title: 'Propósito e Chamado',
    banner: '/src/assets/banner-proposito.jpg',
    description: 'Descobrindo o chamado único que Deus tem para sua vida e como viver com propósito.',
    videos: [
      {
        title: 'Descobrindo Seu Propósito',
        url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        date: '2023-12-31'
      },
      {
        title: 'Respondendo ao Chamado',
        url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        date: '2023-12-24'
      },
      {
        title: 'Vivendo com Propósito',
        url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        date: '2023-12-17'
      }
    ]
  }
];

// Último sermão para a página inicial
export const latestSermon = {
  title: 'A Fonte da Esperança',
  url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  date: '21 de Janeiro, 2024'
};