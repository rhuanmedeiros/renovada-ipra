import { useState, useEffect, useMemo } from 'react';
import img1 from '@/assets/Imagens-Fotos/Desktop/520191041_795019422865943_6100859052433879623_n.jpg';
import img2 from '@/assets/Imagens-Fotos/Desktop/524482078_794275336273685_7723963141826783969_n.jpg';
import img3 from '@/assets/Imagens-Fotos/Desktop/534201160_814916540876231_2278445023843112331_n.jpg';
import img4 from '@/assets/Imagens-Fotos/Desktop/535997589_817295737304978_6309155406787893981_n.jpg';
import img5 from '@/assets/Imagens-Fotos/Desktop/545215094_831102705924281_8839826495501625272_n.jpg';
import img6 from '@/assets/Imagens-Fotos/Desktop/548698672_839094641791754_5132832739276806333_n.jpg';
import img7 from '@/assets/Imagens-Fotos/Desktop/552897306_842351404799411_7339377440594509843_n.jpg';
import img8 from '@/assets/Imagens-Fotos/Desktop/IMG_1272_Original.jpg';
import img9 from '@/assets/Imagens-Fotos/Desktop/IMG_4749_Original.jpg';
import img10 from '@/assets/Imagens-Fotos/Desktop/IMG_4862_Original.jpg';
import img11 from '@/assets/Imagens-Fotos/Desktop/IMG_4887_Original.jpg';
import img12 from '@/assets/Imagens-Fotos/Desktop/IMG_5989_Original.jpg';
import img13 from '@/assets/Imagens-Fotos/Desktop/IMG_6473_Original.jpg';
import img14 from '@/assets/Imagens-Fotos/Desktop/IMG_8168_Original.jpg';
import img15 from '@/assets/Imagens-Fotos/Desktop/IMG_8523_Original.jpg';
import img16 from '@/assets/Imagens-Fotos/Desktop/IMG_9145_Original.jpg';

const desktopImages: string[] = [
  img1, img2, img3, img4, img5, img6, img7,
  img8, img9, img10, img11, img12, img13, img14, img15, img16
];

interface DynamicBackgroundDesktopProps {
  children: React.ReactNode;
}

export function DynamicBackgroundDesktop({ children }: DynamicBackgroundDesktopProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [headerHeight, setHeaderHeight] = useState(0);

  const shuffledImages = useMemo(() => desktopImages.sort(() => Math.random() - 0.5), []);

  useEffect(() => {
    shuffledImages.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, [shuffledImages]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % shuffledImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [shuffledImages.length]);

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

  return (
    <>
      <div className="hidden lg:block">
        {shuffledImages.map((src, index) => (
          <div
            key={src}
            className="fixed top-0 left-0 right-0 bottom-0 -z-20 w-screen h-screen bg-cover bg-no-repeat bg-center transition-opacity duration-1000 ease-in-out"
            style={{
              backgroundImage: `url('${src}')`,
              opacity: currentIndex === index ? 1 : 0,
              top: headerHeight ? `${headerHeight}px` : undefined,
              height: headerHeight ? `calc(100vh - ${headerHeight}px)` : undefined,
            }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50" />
      </div>

      <div className="relative z-10">
        {children}
      </div>
    </>
  );
}
