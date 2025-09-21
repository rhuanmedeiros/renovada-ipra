import React from "react";
import ReactPlayer from "react-player/youtube";

const HeroVideo = ({ url }: { url: string }) => (
  <div className="aspect-video rounded-3xl overflow-hidden shadow-church-lg pointer-events-none xl:rounded-[2rem] 2xl:rounded-[2.5rem] xl:shadow-2xl">
    <ReactPlayer
      url={url}
      playing
      loop
      muted
      controls={false}
      width="100%"
      height="100%"
      className="w-full h-full"
    />
  </div>
);

export default HeroVideo;
