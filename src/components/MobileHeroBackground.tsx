import { useCallback, useEffect, useRef, useState } from "react";
import video1 from "@/assets/Imagens-Fotos/Mobile/video1.mp4";
import video2 from "@/assets/Imagens-Fotos/Mobile/video2.mp4";
import video3 from "@/assets/Imagens-Fotos/Mobile/video3.mp4";
import video4 from "@/assets/Imagens-Fotos/Mobile/video4.mp4";

const videos = [video1, video2, video3, video4];

const TRANSITION_DURATION_MS = 100;

type VideoRef = HTMLVideoElement | null;

const MobileHeroBackground = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRefs = useRef<VideoRef[]>([]);

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
    if (!videos.length) return;

    // Start playing the first video when mounted
    playVideoAtIndex(0);
  }, [playVideoAtIndex]);

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
    if (videos.length <= 1) {
      playVideoAtIndex(0);
      return;
    }

    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % videos.length);
    }, TRANSITION_DURATION_MS);
  };

  return (
    <div className="absolute inset-0 lg:hidden -z-10">
      {videos.map((src, index) => (
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
          preload="auto"
          onEnded={handleVideoEnd}
          autoPlay={currentIndex === index}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
    </div>
  );
};

export default MobileHeroBackground;
