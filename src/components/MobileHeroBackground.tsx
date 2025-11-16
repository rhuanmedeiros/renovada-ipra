import { useCallback, useEffect, useRef, useState } from "react";

// Lazy load dos vídeos para melhor performance
const videos = [
  () => import("@/assets/Imagens-Fotos/Mobile/video1.mp4"),
  () => import("@/assets/Imagens-Fotos/Mobile/video2.mp4"),
  () => import("@/assets/Imagens-Fotos/Mobile/video3.mp4"),
  () => import("@/assets/Imagens-Fotos/Mobile/video4.mp4"),
  () => import("@/assets/Imagens-Fotos/Mobile/video5.mp4"),
];

const TRANSITION_DURATION_MS = 100;

type VideoRef = HTMLVideoElement | null;

const MobileHeroBackground = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loadedVideos, setLoadedVideos] = useState<string[]>([]);
  const videoRefs = useRef<VideoRef[]>([]);

  // Carrega vídeos progressivamente
  useEffect(() => {
    const loadVideos = async () => {
      const loaded: string[] = [];
      // Carrega primeiro vídeo imediatamente
      const firstVideo = await videos[0]();
      loaded.push(firstVideo.default);
      setLoadedVideos([...loaded]);
      
      // Carrega outros vídeos em background após 2 segundos
      setTimeout(async () => {
        for (let i = 1; i < videos.length; i++) {
          const video = await videos[i]();
          loaded.push(video.default);
          setLoadedVideos([...loaded]);
        }
      }, 2000);
    };
    
    loadVideos();
  }, []);

  const playVideoAtIndex = useCallback((index: number) => {
    const video = videoRefs.current[index];
    if (!video) return;

    video.currentTime = 0;
    const playPromise = video.play();
    if (playPromise) {
      playPromise.catch(() => {
        // Ignore autoplay restrictions silently
      });
    }
  }, []);

  useEffect(() => {
    if (!loadedVideos.length) return;

    // Start playing the first video when mounted
    playVideoAtIndex(0);
  }, [loadedVideos.length, playVideoAtIndex]);

  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (!video) return;
      if (index === currentIndex) {
  playVideoAtIndex(index);
      } else {
        video.pause();
      }
    });
  }, [currentIndex, playVideoAtIndex]);

  const handleVideoEnd = () => {
    if (loadedVideos.length <= 1) {
      playVideoAtIndex(0);
      return;
    }

    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % loadedVideos.length);
    }, TRANSITION_DURATION_MS);
  };

  // Mostra placeholder enquanto carrega primeiro vídeo
  if (!loadedVideos.length) {
    return (
      <div className="absolute inset-0 lg:hidden -z-10 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900" />
    );
  }

  return (
    <div className="absolute inset-0 lg:hidden -z-10">
      {loadedVideos.map((src, index) => (
        <video
          key={src}
          ref={(element) => {
            videoRefs.current[index] = element;
          }}
          src={src}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity ease-linear ${
            currentIndex === index ? "opacity-100" : "opacity-0"
          }`}
          style={{ transitionDuration: `${TRANSITION_DURATION_MS}ms` }}
          muted
          playsInline
          preload={index === 0 ? "auto" : "metadata"}
          onEnded={handleVideoEnd}
          autoPlay={currentIndex === index}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
    </div>
  );
};

export default MobileHeroBackground;
