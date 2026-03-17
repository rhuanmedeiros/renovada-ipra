import { useState, useEffect, useCallback } from 'react';

// Importar apenas as URLs — Vite já resolve para paths de assets
const imageModules = import.meta.glob<{ default: string }>(
  '@/assets/Imagens-Fotos/Desktop/*.webp',
  { eager: false }
);

const imagePaths = Object.keys(imageModules);

// Função para embaralhar array (Fisher-Yates)
function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

interface DynamicBackgroundDesktopProps {
  children: React.ReactNode;
  enableMobile?: boolean;
}

export function DynamicBackgroundDesktop({ children, enableMobile = false }: DynamicBackgroundDesktopProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState<Record<number, string>>({});
  const [shuffledPaths] = useState(() => shuffle(imagePaths));

  // Carrega uma imagem sob demanda e retorna a URL resolvida
  const loadImage = useCallback(async (index: number) => {
    if (loadedImages[index] || !shuffledPaths[index]) return;
    
    const modulePath = shuffledPaths[index];
    const loader = imageModules[modulePath];
    if (!loader) return;
    
    try {
      const mod = await loader();
      setLoadedImages(prev => ({ ...prev, [index]: mod.default }));
    } catch {
      // Silenciar erro de import
    }
  }, [shuffledPaths, loadedImages]);

  // Carrega a primeira imagem imediatamente e a segunda logo em seguida
  useEffect(() => {
    loadImage(0);
    const timer = setTimeout(() => loadImage(1), 1000);
    return () => clearTimeout(timer);
  }, [loadImage]);

  // Pré-carrega a próxima imagem antes da transição
  useEffect(() => {
    const nextIndex = (currentIndex + 1) % shuffledPaths.length;
    loadImage(nextIndex);
  }, [currentIndex, shuffledPaths.length, loadImage]);

  // Rotação do carrossel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % shuffledPaths.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [shuffledPaths.length]);

  return (
    <>
      <div className={enableMobile ? "block" : "hidden lg:block"} aria-hidden>
        {shuffledPaths.map((_, index) => {
          const src = loadedImages[index];
          if (!src) return null; // Não renderizar div vazia sem imagem
          
          return (
            <div
              key={index}
              className="fixed top-0 left-0 right-0 bottom-0 -z-20 w-screen h-screen bg-cover bg-no-repeat bg-center transition-opacity duration-1000 ease-in-out"
              style={{
                backgroundImage: `url('${src}')`,
                opacity: currentIndex === index ? 1 : 0,
              }}
            />
          );
        })}
        <div
          className="fixed top-0 left-0 right-0 bottom-0 -z-10 bg-gradient-to-b from-black/50 via-black/30 to-black/50 pointer-events-none"
        />
      </div>

      <div className="relative z-10">
        {children}
      </div>
    </>
  );
}
