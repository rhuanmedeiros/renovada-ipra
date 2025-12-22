import { useCallback, useEffect, useRef, useState } from "react";
import batismoWebm from "@/assets/Imagens-Fotos/Mobile/batismo.webm";
import video1webm from "@/assets/Imagens-Fotos/Mobile/video1.webm";
import video4webm from "@/assets/Imagens-Fotos/Mobile/video4.webm";
import video5webm from "@/assets/Imagens-Fotos/Mobile/video5.webm";

const videos = [
  { webm: batismoWebm },
  { webm: video1webm },
  { webm: video4webm },
  { webm: video5webm },
];
const TRANSITION_DURATION_MS = 100;

type VideoRef = HTMLVideoElement | null;

const MobileHeroBackground = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia("(min-width: 1024px)").matches;
    }
    return false;
  });
  const videoRefs = useRef<VideoRef[]>([]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    const handleChange = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const playVideo = useCallback((index: number) => {
    if (isDesktop) return;
    const video = videoRefs.current[index];
    if (!video) return;

    video.currentTime = 0;
    const playPromise = video.play();
    if (playPromise) {
      playPromise.catch(() => {
        // Autoplay was prevented.
      });
    }
  }, [isDesktop]);

  const handleVideoEnd = () => {
    setCurrentIndex((prev) => (prev + 1) % videos.length);
  };

  useEffect(() => {
    if (isDesktop) return;
    
    videoRefs.current.forEach((video, index) => {
      if (!video) return;

      if (index === currentIndex) {
        playVideo(index);
      } else {
        video.pause();
      }
    });
  }, [currentIndex, playVideo, isDesktop]);

  if (isDesktop) return null;

  return (
    <div className="absolute inset-0 lg:hidden -z-10">
      {videos.map((src, index) => (
        <video
          key={src.webm}
          ref={(el) => (videoRefs.current[index] = el)}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity ease-linear ${
            currentIndex === index ? "opacity-100" : "opacity-0"
          }`}
          style={{ transitionDuration: `${TRANSITION_DURATION_MS}ms` }}
          muted
          playsInline
          preload={index === 0 ? "auto" : "metadata"}
          onEnded={handleVideoEnd}
        >
          <source src={src.webm} type="video/webm" />
        </video>
      ))}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
    </div>
  );
};

export default MobileHeroBackground;
