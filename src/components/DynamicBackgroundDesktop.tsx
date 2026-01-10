import { useState, useEffect, useMemo } from 'react';
import img1 from '@/assets/Imagens-Fotos/Desktop/520191041_795019422865943_6100859052433879623_n.webp';
import img2 from '@/assets/Imagens-Fotos/Desktop/524482078_794275336273685_7723963141826783969_n.webp';
import img3 from '@/assets/Imagens-Fotos/Desktop/534201160_814916540876231_2278445023843112331_n.webp';
import img4 from '@/assets/Imagens-Fotos/Desktop/535997589_817295737304978_6309155406787893981_n.webp';
import img5 from '@/assets/Imagens-Fotos/Desktop/545215094_831102705924281_8839826495501625272_n.webp';
import img6 from '@/assets/Imagens-Fotos/Desktop/548698672_839094641791754_5132832739276806333_n.webp';
import img7 from '@/assets/Imagens-Fotos/Desktop/552897306_842351404799411_7339377440594509843_n.webp';
import img8 from '@/assets/Imagens-Fotos/Desktop/IMG_1272_Original.webp';
import img9 from '@/assets/Imagens-Fotos/Desktop/IMG_4749_Original.webp';
import img10 from '@/assets/Imagens-Fotos/Desktop/IMG_4862_Original.webp';
import img11 from '@/assets/Imagens-Fotos/Desktop/IMG_4887_Original.webp';
import img12 from '@/assets/Imagens-Fotos/Desktop/IMG_5989_Original.webp';
import img13 from '@/assets/Imagens-Fotos/Desktop/IMG_6473_Original.webp';
import img14 from '@/assets/Imagens-Fotos/Desktop/IMG_8168_Original.webp';
import img15 from '@/assets/Imagens-Fotos/Desktop/IMG_8523_Original.webp';
import img16 from '@/assets/Imagens-Fotos/Desktop/IMG_9145_Original.webp';

const desktopImages: string[] = [
  img1, img2, img3, img4, img5, img6, img7,
  img8, img9, img10, img11, img12, img13, img14, img15, img16
];

interface DynamicBackgroundDesktopProps {
  children: React.ReactNode;
  enableMobile?: boolean;
}

export function DynamicBackgroundDesktop({ children, enableMobile = false }: DynamicBackgroundDesktopProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const shuffledImages = useMemo(() => [...desktopImages].sort(() => Math.random() - 0.5), []);

  // Preload removed to improve initial load performance
  // Images will be loaded as they are needed or by the browser's background-image handling

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % shuffledImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [shuffledImages.length]);

  return (
    <>
      <div className={enableMobile ? "block" : "hidden lg:block"} aria-hidden>
        {shuffledImages.map((src, index) => (
          <div
            key={src}
            className="fixed top-0 left-0 right-0 bottom-0 -z-20 w-screen h-screen bg-cover bg-no-repeat bg-center transition-opacity duration-1000 ease-in-out"
            style={{
              backgroundImage: `url('${src}')`,
              opacity: currentIndex === index ? 1 : 0,
            }}
          />
        ))}
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
