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
        date: '01/09/2024'
      },
      {
        title: 'Lançamento - 40 Dias de Comunidade',
        url: 'https://www.youtube.com/embed/sO5r0WXS9EQ',
        date: '08/09/2024'
      },
      {
        title: '01 - Por Que Precisamos Uns dos Outros? - Pr. William Poso',
        url: 'https://www.youtube.com/embed/oCEn-Z_DZpg',
        date: '15/09/2024'
      },
      {
        title: '02 - Juntos Podemos Alcançar Mais - Pr. William Palma',
        url: 'https://www.youtube.com/embed/fuNmw-CY_98',
        date: '22/09/2024'
      },
      {
        title: '03 - O Que Destrói Relacionamentos e O Que Constrói - Pr. William Poso',
        url: 'https://www.youtube.com/embed/rq9jfNiQZyY',
        date: '29/09/2024'
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
        date: '07/07/2024'
      },
      {
        title: '02 - CHEGUE MAIS PERTO PELA ORAÇÃO - PR. WILLIAM POSO - SÉRIE CHEGUE MAIS PERTO',
        url: 'https://www.youtube.com/embed/x_QDp9AQZfw',
        date: '14/07/2024'
      },
      {
        title: '03 - CHEGUE MAIS PERTO PELO ARREPENDIMENTO - PR. WILLIAM POSO - SÉRIE CHEGUE MAIS PERTO',
        url: 'https://www.youtube.com/embed/9A-_K3qOWsA',
        date: '21/07/2024'
      },
      {
        title: '04 - CHEGUE MAIS PERTO PELA PERSEVERANÇA - PR. WILLIAM POSO - SÉRIE CHEGUE MAIS PERTO',
        url: 'https://www.youtube.com/embed/loLbeL8Nigo',
        date: '28/07/2024'
      },
      {
        title: '05 - CHEGUE MAIS PERTO PELO JEJUM - PR. HUAN MARVYN - SÉRIE CHEGUE MAIS PERTO',
        url: 'https://www.youtube.com/embed/7NVy_8ls2LY',
        date: '04/08/2024'
      },
      {
        title: '06 - CHEGUE MAIS PERTO PELA PALAVRA - PR. WILLIAN PALMA - SÉRIE CHEGUE MAIS PERTO',
        url: 'https://www.youtube.com/embed/a3wLpkm9bUQ',
        date: '11/08/2024'
      },
      {
        title: '07 - CHEGUE MAIS PERTO PELA OBEDIÊNCIA - PR. WILLIAM POSO - SÉRIE CHEGUE MAIS PERTO',
        url: 'https://www.youtube.com/embed/yIHdEkcYLvo',
        date: '18/08/2024'
      },
      {
        title: 'https://www.youtube.com/watch?v=t_eXtBZz1dM',
        url: 'https://www.youtube.com/embed/t_eXtBZz1dM',
        date: '25/08/2024'
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
        date: '21/01/2024'
      },
      {
        title: 'Esperança que Não Decepciona',
        url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        date: '14/01/2024'
      },
      {
        title: 'Vivendo com Esperança',
        url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        date: '07/01/2024'
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
        date: '31/12/2023'
      },
      {
        title: 'Respondendo ao Chamado',
        url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        date: '24/12/2023'
      },
      {
        title: 'Vivendo com Propósito',
        url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        date: '17/12/2023'
      }
    ]
  }
];

// Último sermão para a página inicial
export const latestSermon = {
  title: 'A Fonte da Esperança',
  url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  date: '21/01/2024'
};