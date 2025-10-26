import { Button } from "@/components/ui/button";
import { cardsInicialData, CardInicialData } from "@/data/ministerios";
import { useNavigate } from "react-router-dom";

const CardsIniciais = () => {
  const navigate = useNavigate();

  const handleCardClick = (card: CardInicialData) => {
    if (card.link) {
      if (card.isExternal) {
        // Abrir link externo em nova aba
        window.open(card.link, '_blank', 'noopener,noreferrer');
      } else {
        // Navegar internamente
        navigate(card.link);
      }
    }
  };

  return (
    <section className="py-20 xl:py-28 2xl:py-32 bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 xl:gap-12 2xl:gap-16 max-w-6xl xl:max-w-7xl 2xl:max-w-8xl mx-auto">
          {cardsInicialData.map((card: CardInicialData, i) => (
            <div key={i} className="relative overflow-hidden rounded-lg md:rounded-2xl xl:rounded-3xl 2xl:rounded-[2.5rem] shadow-church-lg xl:shadow-2xl group cursor-pointer transform transition-all duration-300 hover:scale-[1.02] xl:hover:scale-[1.03]">
              <div className="aspect-[16/10] xl:aspect-[16/11] 2xl:aspect-[16/12] bg-cover bg-center" style={{ backgroundImage: `url(${card.imagem})` }}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 xl:p-10 2xl:p-12 text-white">
                  <h3 className="text-xl md:text-2xl xl:text-3xl 2xl:text-4xl font-bold mb-2 md:mb-3 xl:mb-4 2xl:mb-6">{card.titulo}</h3>
                  {/* Texto padronizado: usando versão mobile em todas as resoluções */}
                  <p className="text-sm md:text-base xl:text-lg 2xl:text-xl mb-4 md:mb-6 xl:mb-8 2xl:mb-10 opacity-90 leading-relaxed">
                    {card.descricaoMobile || card.descricao}
                  </p>
                  <Button 
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCardClick(card);
                    }}
                    className="rounded-lg md:rounded-2xl xl:rounded-3xl px-4 py-2 md:px-6 md:py-3 xl:px-8 xl:py-4 2xl:px-10 2xl:py-5 text-sm md:text-base xl:text-lg 2xl:text-xl font-semibold"
                  >
                    {card.botao}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardsIniciais;