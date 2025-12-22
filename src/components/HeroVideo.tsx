import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player/youtube";

const HeroVideo = ({ url }: { url: string }) => {
  const [shouldRender, setShouldRender] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia("(min-width: 1024px)").matches;
    }
    return false;
  });

  useEffect(() => {
    // Only render on large screens (lg: 1024px) where it is visible
    // This prevents loading YouTube iframe on mobile/tablet where it is hidden by CSS
    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    const handleChange = (e: MediaQueryListEvent) => setShouldRender(e.matches);
    
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  if (!shouldRender) return null;

  // Versão desktop: apenas vídeo ao lado dos botões
  return (
    <div className="aspect-video rounded-3xl overflow-hidden shadow-church-lg xl:rounded-[2rem] 2xl:rounded-[2.5rem] xl:shadow-2xl">
      <ReactPlayer url={url} playing loop muted controls={false} width="100%" height="100%" className="w-full h-full" />
    </div>
  );
};

export default HeroVideo;
