import ministerioJovens from "/ministerios/1.svg";
import ministerioCriancas from "/ministerios/2.svg";
import projetoReforma from "@/assets/projeto-reforma.jpg";
import pequenosGrupos from "@/assets/pequenos-grupos.jpg";

export interface Ministerio {
  titulo: string;
  descricao: string;
  imagem: string;
  botao: string;
}

// Dados para a página de ministérios (apenas ministérios 1, 2 e 3)
export const ministeriosData: Ministerio[] = [
  {
    titulo: "Ministério de Jovens",
    descricao: "Um espaço para jovens crescerem na fé, fazerem amizades e descobrirem seu propósito.",
    imagem: ministerioJovens,
    botao: "Saiba Mais"
  },
  {
    titulo: "Ministério Infantil",
    descricao: "Programas especiais para crianças aprenderem sobre Deus de forma divertida e segura.",
    imagem: ministerioCriancas,
    botao: "Saiba Mais"
  },
  {
    titulo: "Ministério de Casais",
    descricao: "Fortalecimento de relacionamentos e crescimento espiritual para casais.",
    imagem: "/ministerios/3.svg",
    botao: "Saiba Mais"
  }
];

// Dados para a página inicial (todos os 4 cards)
export const cardsInicialData: Ministerio[] = [
  {
    titulo: "Série Atual",
    descricao: "Acompanhe nossa série de estudos bíblicos atual.",
    imagem: "/ministerios/4.svg",
    botao: "Acompanhar"
  },
  {
    titulo: "Ministério de Jovens",
    descricao: "Um espaço para jovens crescerem na fé, fazerem amizades e descobrirem seu propósito.",
    imagem: ministerioJovens,
    botao: "Saiba Mais"
  },
  {
    titulo: "Ministério Infantil",
    descricao: "Programas especiais para crianças aprenderem sobre Deus de forma divertida e segura.",
    imagem: ministerioCriancas,
    botao: "Saiba Mais"
  },
  {
    titulo: "Ministério de Casais",
    descricao: "Fortalecimento de relacionamentos e crescimento espiritual para casais.",
    imagem: "/ministerios/3.svg",
    botao: "Saiba Mais"
  }
];