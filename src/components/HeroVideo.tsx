import React from "react";
import ReactPlayer from "react-player/youtube";

const HeroVideo = ({ url }: { url: string }) => (
  <div className="aspect-video rounded-3xl overflow-hidden shadow-church-lg pointer-events-none">
    <ReactPlayer
      url={url}
      playing
      loop
      muted
      controls={false}
      width="100%"
      height="100%"
      className="w-full h-full"
      config={{
        youtube: {
          playerVars: { showinfo: 0, rel: 0, modestbranding: 1 },
        },
      }}
    />
  </div>
);

export default HeroVideo;
