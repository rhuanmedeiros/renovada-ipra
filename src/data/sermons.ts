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
    id: '40-dias-de-comunidade',
    title: '40 Dias de Comunidade',
    banner: '/Series/1- 40-dias.png',
    description: 'Juntos somos melhores! Uma jornada de 40 dias descobrindo o poder da comunidade cristã.',
    videos: [
      {
        title: 'Apresentação Teatro - 40 Dias de Comunidade',
        url: 'https://www.youtube.com/embed/XQNFl_Z8YK4',
        date: '2024-09-01'
      },
      {
        title: 'Lançamento - 40 Dias de Comunidade',
        url: 'https://www.youtube.com/embed/sO5r0WXS9EQ',
        date: '2024-09-08'
      },
      {
        title: '01 - Por Que Precisamos Uns dos Outros? - Pr. William Poso',
        url: 'https://www.youtube.com/embed/oCEn-Z_DZpg',
        date: '2024-09-15'
      },
      {
        title: '02 - Juntos Podemos Alcançar Mais - Pr. William Palma',
        url: 'https://www.youtube.com/embed/fuNmw-CY_98',
        date: '2024-09-22'
      },
      {
        title: '03 - O Que Destrói Relacionamentos e O Que Constrói - Pr. William Poso',
        url: 'https://www.youtube.com/embed/rq9jfNiQZyY',
        date: '2024-09-29'
      }
    ]
  },
  {
    id: 'chegue-mais',
    title: 'Chegue+',
    banner: '/Series/Banner Chegue+.svg',
    description: 'Uma série sobre se aproximar mais de Deus e experimentar Sua presença de forma mais intensa.',
    videos: [
      {
        title: '01 - CHEGUE MAIS PERTO PELA HUMILDADE - PR. WILLIAM POSO - SÉRIE CHEGUE MAIS PERTO',
        url: 'https://www.youtube.com/embed/DNpZHdmEOMI',
        date: '2024-07-07'
      },
      {
        title: '02 - CHEGUE MAIS PERTO PELA ORAÇÃO - PR. WILLIAM POSO - SÉRIE CHEGUE MAIS PERTO',
        url: 'https://www.youtube.com/embed/x_QDp9AQZfw',
        date: '2024-07-14'
      },
      {
        title: '03 - CHEGUE MAIS PERTO PELO ARREPENDIMENTO - PR. WILLIAM POSO - SÉRIE CHEGUE MAIS PERTO',
        url: 'https://www.youtube.com/embed/9A-_K3qOWsA',
        date: '2024-07-21'
      },
      {
        title: '04 - CHEGUE MAIS PERTO PELA PERSEVERANÇA - PR. WILLIAM POSO - SÉRIE CHEGUE MAIS PERTO',
        url: 'https://www.youtube.com/embed/loLbeL8Nigo',
        date: '2024-07-28'
      },
      {
        title: '05 - CHEGUE MAIS PERTO PELO JEJUM - PR. HUAN MARVYN - SÉRIE CHEGUE MAIS PERTO',
        url: 'https://www.youtube.com/embed/7NVy_8ls2LY',
        date: '2024-08-04'
      },
      {
        title: '06 - CHEGUE MAIS PERTO PELA PALAVRA - PR. WILLIAN PALMA - SÉRIE CHEGUE MAIS PERTO',
        url: 'https://www.youtube.com/embed/a3wLpkm9bUQ',
        date: '2024-08-11'
      },
      {
        title: '07 - CHEGUE MAIS PERTO PELA OBEDIÊNCIA - PR. WILLIAM POSO - SÉRIE CHEGUE MAIS PERTO',
        url: 'https://www.youtube.com/embed/yIHdEkcYLvo',
        date: '2024-08-18'
      },
      {
        title: 'https://www.youtube.com/watch?v=t_eXtBZz1dM',
        url: 'https://www.youtube.com/embed/t_eXtBZz1dM',
        date: '2024-08-25'
      }
    ]
  },
  {
    id: 'esperanca-em-tempos-dificeis',
    title: 'Esperança em Tempos Difíceis',
    banner: '/placeholder.svg',
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
    banner: '/placeholder.svg',
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