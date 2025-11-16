import { useState, useEffect } from 'react';

// Lazy load das imagens para melhor performance
const desktopImages = [
  () => import('@/assets/Imagens-Fotos/Desktop/520191041_795019422865943_6100859052433879623_n.jpg'),
  () => import('@/assets/Imagens-Fotos/Desktop/524482078_794275336273685_7723963141826783969_n.jpg'),
  () => import('@/assets/Imagens-Fotos/Desktop/534201160_814916540876231_2278445023843112331_n.jpg'),
  () => import('@/assets/Imagens-Fotos/Desktop/535997589_817295737304978_6309155406787893981_n.jpg'),
  () => import('@/assets/Imagens-Fotos/Desktop/545215094_831102705924281_8839826495501625272_n.jpg'),
  () => import('@/assets/Imagens-Fotos/Desktop/548698672_839094641791754_5132832739276806333_n.jpg'),
  () => import('@/assets/Imagens-Fotos/Desktop/552897306_842351404799411_7339377440594509843_n.jpg'),
];

interface DynamicBackgroundDesktopProps {
  children: React.ReactNode;
}

export function DynamicBackgroundDesktop({ children }: DynamicBackgroundDesktopProps) {
  const [currentImage, setCurrentImage] = useState<string>('');
  const [loadedImages, setLoadedImages] = useState<string[]>([]);
  const [isLoaded, setIsLoaded] = useState(true);
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    // Carrega imagens progressivamente
    const loadImages = async () => {
      // Carrega primeira imagem imediatamente
      const firstIndex = Math.floor(Math.random() * desktopImages.length);
      const firstImg = await desktopImages[firstIndex]();
      const firstUrl = firstImg.default;
      setLoadedImages([firstUrl]);
      setCurrentImage(firstUrl);
      
      // Carrega outras imagens em background
      setTimeout(async () => {
        const loaded: string[] = [firstUrl];
        for (let i = 0; i < desktopImages.length; i++) {
          if (i !== firstIndex) {
            const img = await desktopImages[i]();
            loaded.push(img.default);
          }
        }
        setLoadedImages(loaded);
      }, 1000);
    };
    
    loadImages();
  }, []);

  useEffect(() => {
    const updateHeaderHeight = () => {
      const headerElement = document.querySelector('header');
      if (headerElement) {
        setHeaderHeight(headerElement.getBoundingClientRect().height);
      }
    };

    updateHeaderHeight();
    window.addEventListener('resize', updateHeaderHeight);

    return () => {
      window.removeEventListener('resize', updateHeaderHeight);
    };
  }, []);

  useEffect(() => {
    if (!currentImage) return;

    // Pré-carrega a imagem
    const img = new Image();
    img.src = currentImage;
    img.onload = () => {
      setIsLoaded(true);
    };
    img.onerror = () => {
      setIsLoaded(true);
    };
  }, [currentImage]);

  // Troca de imagem a cada 5 segundos com transição suave
  useEffect(() => {
    if (loadedImages.length <= 1) return;
    
    const interval = setInterval(() => {
      setIsLoaded(false);
      
      setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * loadedImages.length);
        setCurrentImage(loadedImages[randomIndex]);
      }, 200);
    }, 5000);

    return () => clearInterval(interval);
  }, [loadedImages]);

  return (
    <>
      {/* Background dinâmico apenas para desktop (lg+) - renderizado no body via portal-like */}
      <div className="hidden lg:block">
        <div 
          className="fixed top-0 left-0 right-0 bottom-0 -z-20 w-screen h-screen"
          style={{
            backgroundImage: currentImage ? `url('${currentImage}')` : 'none',
            backgroundPosition: 'top',
            backgroundSize: 'cover',
            backgroundAttachment: 'fixed',
            opacity: isLoaded ? 1 : 0.5,
            transition: 'opacity 1s ease-in-out',
            pointerEvents: 'none',
            top: headerHeight ? `${headerHeight}px` : undefined,
            height: headerHeight ? `calc(100vh - ${headerHeight}px)` : undefined,
          }}
        >
          {/* Filtro gradiente para melhor legibilidade do texto */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50" />
        </div>
      </div>

      {/* Conteúdo da página (aparece sobre o background) */}
      <div className="relative z-10">
        {children}
      </div>
    </>
  );
}
