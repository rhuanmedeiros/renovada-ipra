import { Button } from "@/components/ui/button";
import { ministeriosData } from "@/data/ministerios";
import { useNavigate } from "react-router-dom";

const MinisteriosSection = () => {
  const navigate = useNavigate();

  const handleCardClick = (ministerio: typeof ministeriosData[0]) => {
    if (ministerio.link) {
      if (ministerio.isExternal) {
        // Abrir link externo em nova aba
        window.open(ministerio.link, '_blank', 'noopener,noreferrer');
      } else {
        // Navegar internamente
        navigate(ministerio.link);
      }
    }
  };

  return (
    <section className="py-20 xl:py-28 2xl:py-32 bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 xl:mb-20 2xl:mb-24">
          <h2 className="text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl font-bold mb-4 xl:mb-6 2xl:mb-8">
            Conheça nossos Ministérios
          </h2>
          <p className="text-xl xl:text-2xl 2xl:text-3xl text-muted-foreground max-w-3xl xl:max-w-4xl 2xl:max-w-5xl mx-auto leading-relaxed">
            Encontre seu lugar e propósito através dos nossos diversos ministérios
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 xl:gap-12 2xl:gap-16 max-w-6xl xl:max-w-7xl 2xl:max-w-8xl mx-auto">
          {ministeriosData.map((m, i) => (
            <div key={i} className="relative overflow-hidden rounded-3xl xl:rounded-[2rem] 2xl:rounded-[2.5rem] shadow-church-lg xl:shadow-2xl group cursor-pointer transform transition-all duration-300 hover:scale-[1.02] xl:hover:scale-[1.03]">
              <div className="aspect-[16/10] xl:aspect-[16/11] 2xl:aspect-[16/12] bg-cover bg-center" style={{ backgroundImage: `url(${m.imagem})` }}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 xl:p-10 2xl:p-12 text-white">
                  <h3 className="text-xl md:text-2xl xl:text-3xl 2xl:text-4xl font-bold mb-2 md:mb-3 xl:mb-4 2xl:mb-6">{m.titulo}</h3>
                  <p className="text-sm md:text-base xl:text-lg 2xl:text-xl mb-4 md:mb-6 xl:mb-8 2xl:mb-10 opacity-90 leading-relaxed">{m.descricao}</p>
                  <Button 
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCardClick(m);
                    }}
                    className="rounded-2xl xl:rounded-3xl px-4 py-2 md:px-6 md:py-3 xl:px-8 xl:py-4 2xl:px-10 2xl:py-5 text-sm md:text-base xl:text-lg 2xl:text-xl font-semibold"
                  >
                    {m.botao}
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

export default MinisteriosSection;