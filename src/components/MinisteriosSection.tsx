import { Button } from "@/components/ui/button";
import { ministeriosData } from "@/data/ministerios";

const MinisteriosSection = () => {
  return (
    <section className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Conheça nossos Ministérios
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Encontre seu lugar e propósito através dos nossos diversos ministérios
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {ministeriosData.map((m, i) => (
            <div key={i} className="relative overflow-hidden rounded-3xl shadow-church-lg group cursor-pointer">
              <div className="aspect-[16/10] bg-cover bg-center" style={{ backgroundImage: `url(${m.imagem})` }}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <h3 className="text-2xl font-bold mb-3">{m.titulo}</h3>
                  <p className="text-lg mb-6 opacity-90">{m.descricao}</p>
                  <Button className="rounded-2xl px-6 py-3">{m.botao}</Button>
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