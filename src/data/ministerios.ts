import ministerioJovens from "@/assets/ministerios/1.svg";
import ministerioCriancas from "@/assets/ministerios/2.svg";
import ministerioCasais from "@/assets/ministerios/3.svg";
import jovemsFoto from "@/assets/ministerios/325249872_553508630132607_8977246601971800352_n.jpg";

export interface Ministerio {
  titulo: string;
  descricao: string;
  imagem: string;
  botao: string;
  link?: string; // Link opcional para redirecionar
  isExternal?: boolean; // Se é link externo ou navegação interna
}

// Dados para a página de ministérios (apenas ministérios 1, 2 e 3)
export const ministeriosData: Ministerio[] = [
  {
    titulo: "Jovens e Adolescentes",
    descricao: "Um espaço para jovens crescerem na fé, fazerem amizades e descobrirem seu propósito.",
    imagem: jovemsFoto,
    botao: "Saiba Mais",
    link: "https://www.instagram.com/renovadaalianca/",
    isExternal: true
  },
  {
    titulo: "Crianças",
    descricao: "Programas especiais para crianças aprenderem sobre Deus de forma divertida e segura.",
    imagem: ministerioCriancas,
    botao: "Saiba Mais",
    link: "https://www.instagram.com/renovadarenokids/",
    isExternal: true
  }
];

// Interface estendida para suportar textos responsivos
export interface CardInicialData extends Ministerio {
  descricaoMobile?: string;
}

// Dados para a página inicial (todos os 4 cards)
export const cardsInicialData: CardInicialData[] = [
  {
    titulo: "Jovens e Adolescentes",
    descricao: "Um espaço para jovens crescerem na fé, fazerem amizades e descobrirem seu propósito.",
    descricaoMobile: " ",
    imagem: jovemsFoto,
    botao: "Saiba Mais",
    link: "https://www.instagram.com/renovadaalianca/",
    isExternal: true
  },
  {
    titulo: "Crianças",
    descricao: "Programas especiais para crianças aprenderem sobre Deus de forma divertida e segura.",
    descricaoMobile: " ",
    imagem: ministerioCriancas,
    botao: "Saiba Mais",
    link: "https://www.instagram.com/renovadarenokids/",
    isExternal: true
  }
];