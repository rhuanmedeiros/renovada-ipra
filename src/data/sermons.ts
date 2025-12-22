import serieAtual from "@/assets/Series/1- 40-dias.png";
import seriechegueMais from "@/assets/Series/Banner Chegue+.svg";
import espiritosantoImg from "@/assets/Series/CapaSerieEspiritoSanto.png";

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
    id: 'espirito-santo',
    title: 'Espirito Santo',
    banner: espiritosantoImg,
    description: 'O Espírito não veio apenas visitar a Igreja — Ele veio viver nela.',
    videos: [
      {
        title: '01 - O PODER QUE MOVE A IGREJA - SÉRIE ESPÍRITO SANTO - PR. WILLIAM POSO',
        url: 'https://www.youtube.com/embed/zUFkmcMNQEI',
        date: ''
      },
      {
        title: '02 - ANTES DO VENTO SOPRAR - SÉRIE ESPÍRITO SANTO - PR. WILLIAM POSO',
        url: 'https://www.youtube.com/watch?v=62iImcdVXFY',
        date: ''
      },
      {
        title: '03 - ISTO É O QUE FOI DITO - SÉRIE ESPÍRITO SANTO - PR. HUAN MARVYN',
        url: 'https://www.youtube.com/embed/q6AW7Ey8xPg',
        date: ''
      },
      {
        title: '04 - ESTE JESUS, A QUEM VOCÊS CRUCIFICARAM - SÉRIE ESPÍRITO SANTO - PR. WILLIAM POSO',
        url: 'https://www.youtube.com/embed/xyR5KU3Nrgk',
        date: ''
      },
      {
        title: '05 - QUANDO A VERDADE ATINGE O CORAÇÃO NADA MAIS FICA COMO ANTES - SÉRIE ESPÍRITO SANTO - PB IVERSON',
        url: 'https://www.youtube.com/embed/6wSmLkafMyU',
        date: ''
      }
      ,
      {
        title: '06 - AVIVAMENTO COMEÇA COM COMPROMETIMENTO - SÉRIE ESPÍRITO SANTO - PR. WILLIAM POSO',
        url: 'https://www.youtube.com/embed/r8WCGpTeUsY',
        date: ''
      },
      {
        title: '07 - ENTRE A DOR E A GRAÇA - SÉRIE ESPÍRITO SANTO - PR. WILLIAN PALMA',
        url: 'https://www.youtube.com/embed/qFuK4DmrFlU',
        date: ''
      },
      {
        title: '08 - OS DOIS TEMPLOS - SÉRIE ESPÍRITO SANTO - PR. WILLIAM POSO',
        url: 'https://youtu.be/2ypEiChnom8?si=j7_ANz4WDCGTc5na'
      },
      {
        title: '09 - TEMPOS DE REFRIGÉRIO - SÉRIE ESPÍRITO SANTO - PR. WILLIAM POSO',
        url: 'https://www.youtube.com/watch?v=s4luWy_1BlM',
        date: ''
      },
      {
        title: '10 - PROFECIA VIVA - SÉRIE ESPÍRITO SANTO - PR. WILLIAM POSO',
        url: 'https://www.youtube.com/watch?v=aMSn2mVlR-Q',
        date: ''
      }
    ]
  },
  {
    id: '40-dias-de-comunidade',
    title: '40 Dias de Comunidade',
    banner: serieAtual,
    description: 'Juntos somos melhores! Uma jornada de 40 dias descobrindo o poder da comunidade cristã.',
    videos: [
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
      },
      { 
        title: '04 - COMO AJUDAMOS UNS AOS OUTROS CRESCER - CAMPANHA 40 DIAS DE COMUNIDADE - PR. HUAN MARVYN',
        url: 'https://www.youtube.com/embed/XiuRocfGrhk',
        date: '14/09/2024'
      },
      { 
        title: '05 - SERVINDO JUNTOS É MELHOR - CAMPANHA 40 DIAS DE COMUNIDADE - PR. WILLIAM POSO',
        url: 'https://www.youtube.com/embed/BHmO5iw2Wa0',
        date: '21/09/2024'
      },
      { 
        title: '06 - ADORANDO JUNTOS É MELHOR - CAMPANHA 40 DIAS DE COMUNIDADE - PR. WILLIAM POSO',
        url: 'https://www.youtube.com/embed/ygJHZSClVak',
        date: '28/09/2024'
      },
      { 
        title: '07 - VIVENDO A COMUNIDADE - PR. WILLIAM POSO, PR. WILLIAN PALMA E PR. HUAN MARVYN',
        url: 'https://www.youtube.com/embed/3HDXsniozH8',
        date: '05/10/2024'
      },
    ]
  },
  {
    id: 'chegue-mais',
    title: 'Chegue+',
    banner: seriechegueMais,
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
        title: '08 - Vídeo da série Chegue Mais',
        url: 'https://www.youtube.com/embed/t_eXtBZz1dM',
        date: '25/08/2024'
      }
    ]
  },
]