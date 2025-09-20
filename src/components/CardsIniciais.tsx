import { Button } from "@/components/ui/button";
import { cardsInicialData, CardInicialData } from "@/data/ministerios";

const CardsIniciais = () => {
  return (
    <section className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {cardsInicialData.map((card: CardInicialData, i) => (
            <div key={i} className="relative overflow-hidden rounded-3xl shadow-church-lg group cursor-pointer">
              <div className="aspect-[16/10] bg-cover bg-center" style={{ backgroundImage: `url(${card.imagem})` }}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
                  <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3">{card.titulo}</h3>
                  {/* Texto padronizado: usando versão mobile em todas as resoluções */}
                  <p className="text-sm md:text-base mb-4 md:mb-6 opacity-90">
                    {card.descricaoMobile || card.descricao}
                  </p>
                  <Button className="rounded-2xl px-4 py-2 md:px-6 md:py-3 text-sm md:text-base">
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